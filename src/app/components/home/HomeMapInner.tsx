'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Store } from '@/data/stores';
import { createPinIcon } from '@/app/components/storelocator/pinIcon';
import styles from './SuratMapSection.module.css';

interface HomeMapInnerProps {
  stores: Store[];
  selectedStore: Store | null;
  onSelectStore: (store: Store) => void;
}

export default function HomeMapInner({
  stores,
  selectedStore,
  onSelectStore,
}: HomeMapInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  // 1. Initialize Map with Google Maps roadmap tiles
  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Default center: Surat central region
    const defaultCenter: [number, number] = [21.1702, 72.8311];
    const map = L.map(mapContainerRef.current, {
      center: defaultCenter,
      zoom: 12,
      zoomControl: true,
      scrollWheelZoom: false, // Prevent page scroll trapping
    });

    // Google Maps tile layer
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
  }, []); // Run once on mount

  // 3. Render Store Pins
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};

    const bounds = L.latLngBounds([]);

    // Filter to Surat / Gujarat stores for initial bounds, but keep all markers
    stores.forEach((store) => {
      const isSelected = selectedStore?.id === store.id;
      const icon = createPinIcon(L, isSelected);

      const popupHtml = `
        <div class="${styles.mapPopup}">
          <div class="${styles.mapPopupHeader}">
            <span class="${styles.popupBadge}">51 Rainbow</span>
            <span class="${styles.popupArea}">${store.area}</span>
          </div>
          <h4 class="${styles.popupTitle}">${store.name}</h4>
          <p class="${styles.popupAddress}">${store.address}</p>
          <div class="${styles.popupActions}">
            <a href="${store.googleMapsQueryUrl}" target="_blank" rel="noopener noreferrer" class="${styles.popupDirectionsBtn}">
              Directions on Google Maps ↗
            </a>
          </div>
        </div>
      `;

      const marker = L.marker([store.lat, store.lng], { icon })
        .addTo(map)
        .bindPopup(popupHtml, {
          closeButton: true,
          offset: [0, -42],
          className: styles.homeCustomPopup,
        });

      marker.on('click', () => {
        onSelectStore(store);
      });

      markersRef.current[store.id] = marker;

      // Only extend bounds for Gujarat stores on initial fit to avoid spanning the whole globe
      if (store.country.toLowerCase() === 'india') {
        bounds.extend([store.lat, store.lng]);
      }
    });

    if (!selectedStore && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stores, onSelectStore]);

  // 4. Handle Selected Store Change (flyTo + popup)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Update marker icon states
    stores.forEach((store) => {
      const marker = markersRef.current[store.id];
      if (marker) {
        const isSelected = selectedStore?.id === store.id;
        marker.setIcon(createPinIcon(L, isSelected));
        if (isSelected) {
          marker.setZIndexOffset(1000);
          marker.openPopup();
        } else {
          marker.setZIndexOffset(0);
        }
      }
    });

    if (selectedStore) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        map.setView([selectedStore.lat, selectedStore.lng], 15);
      } else {
        map.flyTo([selectedStore.lat, selectedStore.lng], 15, {
          duration: 1.2,
          easeLinearity: 0.25,
        });
      }
    }
  }, [selectedStore, stores]);

  return (
    <div className={styles.mapCanvasWrapper}>
      <div ref={mapContainerRef} className={styles.mapCanvas} id="home-store-map" />
    </div>
  );
}
