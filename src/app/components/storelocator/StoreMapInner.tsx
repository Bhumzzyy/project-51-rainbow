'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Store } from '@/data/stores';
import { createPinIcon } from './pinIcon';
import styles from './StoreLocatorPage.module.css';

interface StoreMapInnerProps {
  stores: Store[];
  selectedStoreId: string | null;
  onSelectStore: (store: Store) => void;
}

export default function StoreMapInner({
  stores,
  selectedStoreId,
  onSelectStore,
}: StoreMapInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  const verifiedStores = stores.filter((s) => s.verified);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Default center: Surat center
    const defaultCenter: [number, number] = [21.1702, 72.8311];
    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false, // Prevent accidental page scroll hijacking
    });

    // Add Google Maps roadmap tile layer
    L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps</a>',
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Markers when verifiedStores change
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    if (verifiedStores.length === 0) {
      // Keep view on Surat region
      map.setView([21.1702, 72.8311], 11);
      return;
    }

    const bounds = L.latLngBounds([]);

    verifiedStores.forEach((store) => {
      const isSelected = store.id === selectedStoreId;
      const icon = createPinIcon(L, isSelected);

      const popupContent = `
        <div class="${styles.mapPopup}">
          <div class="${styles.mapPopupHeader}">
            <span class="${styles.popupBadge}">51 Rainbow</span>
            <span class="${styles.popupArea}">${store.area}</span>
          </div>
          <h4 class="${styles.popupTitle}">${store.name}</h4>
          <p class="${styles.popupAddress}">${store.address}</p>
          <div class="${styles.popupActions}">
            <a href="${store.googleMapsQueryUrl}" target="_blank" rel="noopener noreferrer" class="${styles.popupDirectionsBtn}">
              Get directions ↗
            </a>
          </div>
        </div>
      `;

      const marker = L.marker([store.lat, store.lng], { icon })
        .addTo(map)
        .bindPopup(popupContent, {
          closeButton: true,
          offset: [0, -42],
          className: styles.customLeafletPopup,
        });

      marker.on('click', () => {
        onSelectStore(store);
      });

      markersRef.current[store.id] = marker;
      bounds.extend([store.lat, store.lng]);
    });

    // Fit map bounds to show all markers with padding if no specific store is selected
    if (!selectedStoreId && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifiedStores, onSelectStore]);

  // Handle selectedStoreId updates: highlight pin, panTo and open popup
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Update marker icons (selected vs normal)
    verifiedStores.forEach((store) => {
      const marker = markersRef.current[store.id];
      if (marker) {
        const isSelected = store.id === selectedStoreId;
        marker.setIcon(createPinIcon(L, isSelected));
        if (isSelected) {
          marker.setZIndexOffset(1000);
          marker.openPopup();
        } else {
          marker.setZIndexOffset(0);
        }
      }
    });

    if (selectedStoreId) {
      const selectedStore = verifiedStores.find((s) => s.id === selectedStoreId);
      if (selectedStore) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
          map.setView([selectedStore.lat, selectedStore.lng], 15);
        } else {
          map.flyTo([selectedStore.lat, selectedStore.lng], 15, {
            duration: 1.2,
          });
        }
      }
    }
  }, [selectedStoreId, verifiedStores]);

  return (
    <div className={styles.mapCanvasWrapper}>
      <div ref={mapContainerRef} className={styles.mapContainer} id="store-locator-leaflet-map" />

      {verifiedStores.length === 0 && (
        <div className={styles.mapInfoOverlay} role="status">
          <span className={styles.overlayIcon} aria-hidden="true"></span>
          <div className={styles.overlayTextGroup}>
            <p className={styles.overlayTitle}>Explore 51 Rainbow Stores</p>
            <p className={styles.overlaySubtitle}>
              Showing Surat & South Gujarat region. Store coordinates awaiting verification.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
