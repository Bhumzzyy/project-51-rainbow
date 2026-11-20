'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createPinIcon } from '@/app/components/storelocator/pinIcon';
import styles from './ContactPage.module.css';

interface ContactMapInnerProps {
  name: string;
  address: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

export default function ContactMapInner({
  name,
  address,
  lat,
  lng,
  googleMapsUrl,
}: ContactMapInnerProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [lat, lng],
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false, // Prevent page scroll trapping
    });

    // Google Maps Roadmap tile layer
    L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      subdomains: ['0', '1', '2', '3'],
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">Google Maps</a>',
    }).addTo(map);

    // Custom 51 Brand Pin
    const pin = createPinIcon(L, true);

    const marker = L.marker([lat, lng], {
      icon: pin,
      title: `${name} - ${address}`,
    }).addTo(map);

    // Optional click to open directions directly on Google Maps without intrusive popups
    if (googleMapsUrl) {
      marker.on('click', () => {
        window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
      });
    }

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [lat, lng, name, address, googleMapsUrl]);

  return (
    <div className={styles.contactMapCanvasWrapper}>
      <div ref={mapContainerRef} className={styles.contactMapContainer} id="contact-hq-map" />
    </div>
  );
}
