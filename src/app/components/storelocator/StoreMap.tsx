'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Store } from '@/data/stores';
import styles from './StoreLocatorPage.module.css';

interface StoreMapProps {
  stores: Store[];
  selectedStoreId: string | null;
  onSelectStore: (store: Store) => void;
}

function MapSkeleton() {
  return (
    <div className={styles.mapSkeleton} aria-label="Loading interactive store map" aria-busy="true">
      <div className={styles.skeletonPulse} />
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonSpinner} />
        <p className={styles.skeletonText}>Loading 51 Rainbow Map...</p>
      </div>
    </div>
  );
}

// Client-only dynamic import to ensure zero SSR / Cloudflare Workers issues
const DynamicStoreMapInner = dynamic(
  () => import('./StoreMapInner'),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  }
);

export function StoreMap({ stores, selectedStoreId, onSelectStore }: StoreMapProps) {
  return (
    <div className={styles.storeMapContainer} aria-label="Interactive store location map">
      <DynamicStoreMapInner
        stores={stores}
        selectedStoreId={selectedStoreId}
        onSelectStore={onSelectStore}
      />
    </div>
  );
}
