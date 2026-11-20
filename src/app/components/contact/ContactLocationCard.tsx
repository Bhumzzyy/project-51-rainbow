'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './ContactPage.module.css';

const HQ_STORE = {
  name: '51RAINBOW',
  role: 'Corporate Headquarters & Parlour',
  address: 'Royal Trade Centre, 902, PAL RTO ROAD, opp. STAR BAZAR, Jalaram Society, Adajan Gam, Adajan, Surat, Gujarat 395009',
  lat: 21.1928,
  lng: 72.7998,
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=51RAINBOW+Royal+Trade+Centre+902+PAL+RTO+ROAD+opp+STAR+BAZAR+Adajan+Surat+Gujarat+395009',
};

function MapSkeleton() {
  return (
    <div className={styles.contactMapSkeleton} aria-label="Loading headquarters map" aria-busy="true">
      <div className={styles.skeletonPulse} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonSpinner} />
        <p className={styles.skeletonText}>Loading 51 Rainbow Location Map...</p>
      </div>
    </div>
  );
}

const DynamicContactMapInner = dynamic(() => import('./ContactMapInner'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export function ContactLocationCard() {
  return (
    <div className={styles.locationMapCard} aria-labelledby="hq-location-title">
      <div className={styles.locationCardHeader}>
        <div className={styles.locationBadgeRow}>
          <span className={styles.hqBadge}>Headquarters</span>
        </div>
        <h3 id="hq-location-title" className={styles.locationTitle}>
          {HQ_STORE.name}
        </h3>
        <p className={styles.locationAddressText}>
          {HQ_STORE.address}
        </p>
      </div>

      {/* Interactive Google Map Frame */}
      <div className={styles.locationMapFrame}>
        <DynamicContactMapInner
          name={HQ_STORE.name}
          address={HQ_STORE.address}
          lat={HQ_STORE.lat}
          lng={HQ_STORE.lng}
          googleMapsUrl={HQ_STORE.googleMapsUrl}
        />
      </div>

      {/* Action Footer */}
      <div className={styles.locationCardFooter}>
        <a
          href={HQ_STORE.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.locationDirectionsBtn}
          aria-label="Open 51 Rainbow Royal Trade Centre Adajan location in Google Maps"
        >
          <span>Get Directions on Google Maps</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
