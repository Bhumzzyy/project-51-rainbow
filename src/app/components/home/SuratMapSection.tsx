'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { STORES, Store } from '@/data/stores';
import styles from './SuratMapSection.module.css';

function MapSkeleton() {
  return (
    <div className={styles.mapSkeleton} aria-label="Loading interactive map" aria-busy="true">
      <div className={styles.skeletonPulse} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonSpinner} />
        <p className={styles.skeletonText}>Loading 51 Rainbow Map...</p>
      </div>
    </div>
  );
}

const DynamicHomeMapInner = dynamic(() => import('./HomeMapInner'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function SuratMapSection() {
  const [selectedStoreId, setSelectedStoreId] = useState<string | null>(null);

  const selectedStore = useMemo(() => {
    if (!selectedStoreId) return null;
    return STORES.find((s) => s.id === selectedStoreId) || null;
  }, [selectedStoreId]);

  const handleSelectStore = useCallback((store: Store) => {
    setSelectedStoreId(store.id);
  }, []);

  const handleResetView = useCallback(() => {
    setSelectedStoreId(null);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="surat-map-title">
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.eyebrowBadge}>
          <span className={styles.badgeDiamond} aria-hidden="true">✦</span>
          <span>Find your Rainbow</span>
          <span className={styles.badgeDiamond} aria-hidden="true">✦</span>
        </div>
        <h2 id="surat-map-title" className={styles.title}>
          Follow the <span>Rainbow.</span>
        </h2>
        <p className={styles.subtitle}>
          Your favourite treats. Your next sweet stop — 16 parlours across Surat, South Gujarat & Texas.
        </p>
      </header>

      {/* Map Control Bar & Quick Area Navigator */}
      <div className={styles.navigatorContainer}>
        <div className={styles.pillsScrollWrapper} role="tablist" aria-label="Select store outlet">
          <button
            type="button"
            role="tab"
            aria-selected={!selectedStoreId}
            onClick={handleResetView}
            className={`${styles.navPill} ${!selectedStoreId ? styles.navPillActive : ''}`}
          >
            <span aria-hidden="true"></span> All Outlets ({STORES.length})
          </button>

          {STORES.map((store) => {
            const isSelected = selectedStoreId === store.id;
            const isUSA = store.country.toLowerCase() === 'united states';

            return (
              <button
                key={store.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleSelectStore(store)}
                className={`${styles.navPill} ${isSelected ? styles.navPillActive : ''}`}
              >
                {isUSA ? 'Texas (USA)' : store.area}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Map Frame */}
      <div className={styles.mapFrame}>
        {/* Top Floating Map Layer Selector Bar */}
        <div className={styles.mapToolbar}>
          <div className={styles.statusIndicator}>
            <span className={styles.liveDot} aria-hidden="true" />
            <span className={styles.statusLabel}>
              {selectedStore ? selectedStore.name : '16 Verified Locations'}
            </span>
          </div>

          {/* <div className={styles.mapProviderBadge} aria-label="Map provided by Google Maps">
            <span className={styles.providerDot} aria-hidden="true">📍</span>
            <span>Google Maps</span>
          </div> */}
        </div>

        {/* Dynamic Leaflet Map with Google Maps tiles */}
        <div className={styles.mapViewport}>
          <DynamicHomeMapInner
            stores={STORES}
            selectedStore={selectedStore}
            onSelectStore={handleSelectStore}
          />
        </div>
      </div>

      {/* Active Store Showcase Card */}
      {selectedStore && (
        <div className={styles.activeStoreCard} role="region" aria-live="polite">
          <div className={styles.activeCardContent}>
            <div className={styles.activeCardHeader}>
              <span className={styles.activeCardAreaBadge}>{selectedStore.area}</span>
              <span className={styles.activeCardCityBadge}>{selectedStore.city}, {selectedStore.state}</span>
            </div>
            <h3 className={styles.activeCardTitle}>{selectedStore.name}</h3>
            <p className={styles.activeCardAddress}>{selectedStore.address}</p>
          </div>

          <div className={styles.activeCardActions}>
            <a
              href={selectedStore.googleMapsQueryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.openGoogleMapsBtn}
            >
              <span>Open in Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/storelocator" className={styles.detailsBtn}>
              Store Locator Details →
            </Link>
          </div>
        </div>
      )}

      {/* Quick Brand Features Row */}
      <div className={styles.statsPillRow}>
        <span className={styles.statPill}>
          <span className={styles.statPillDiamond} aria-hidden="true">✦</span>
          16 Verified Outlets
        </span>
        <span className={styles.statPill}>
          <span className={styles.statPillDiamond} aria-hidden="true">✦</span>
          100% Real Dairy Craft
        </span>
        <span className={styles.statPill}>
          <span className={styles.statPillDiamond} aria-hidden="true">✦</span>
          Open Late for Cravings
        </span>
      </div>

      {/* Primary CTA Button */}
      <div className={styles.buttonWrapper}>
        <Link href="/storelocator" className={styles.button}>
          <span>View All 16 Stores in Store Locator</span>
          <span className={styles.buttonArrow} aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
