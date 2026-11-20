'use client';

import React, { useState, useMemo, useCallback } from 'react';
import {
  Store,
  StoreFilterCriteria,
  filterStores,
  getCountries,
  getStates,
  getCities,
  getPincodes,
} from '@/data/stores';
import { StoreFilters } from './StoreFilters';
import { StoreList } from './StoreList';
import { StoreMap } from './StoreMap';
import styles from './StoreLocatorPage.module.css';

interface StoreLocatorProps {
  initialStores: Store[];
}

export function StoreLocator({ initialStores }: StoreLocatorProps) {
  const [criteria, setCriteria] = useState<StoreFilterCriteria>({
    country: 'India',
    state: 'all',
    city: 'all',
    pincode: 'all',
    search: '',
  });

  const [selectedStoreId, setSelectedStoreId] = useState<string | null>(null);

  // Derived filter options
  const countries = useMemo(() => getCountries(), []);
  const states = useMemo(() => getStates(criteria.country), [criteria.country]);
  const cities = useMemo(() => getCities(criteria.state), [criteria.state]);
  const pincodes = useMemo(() => getPincodes(criteria.city), [criteria.city]);

  // Filtered stores
  const filteredStores = useMemo(() => {
    return filterStores(initialStores, criteria);
  }, [initialStores, criteria]);

  // Handle store selection from list or map
  const handleSelectStore = useCallback((store: Store) => {
    setSelectedStoreId(store.id);

    // On mobile devices, scroll the map into view when a store is selected from list
    if (typeof window !== 'undefined' && window.innerWidth <= 900) {
      const mapEl = document.getElementById('store-locator-map-section');
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, []);

  // Reset filters
  const handleResetFilters = useCallback(() => {
    setCriteria({
      country: 'India',
      state: 'all',
      city: 'all',
      pincode: 'all',
      search: '',
    });
    setSelectedStoreId(null);
  }, []);

  return (
    <div className={styles.locatorRoot}>
      {/* Top Filter Bar */}
      <StoreFilters
        criteria={criteria}
        onChange={setCriteria}
        onReset={handleResetFilters}
        countries={countries}
        states={states}
        cities={cities}
        pincodes={pincodes}
        totalCount={filteredStores.length}
      />

      {/* Main Two-Column Locator Layout */}
      <div className={styles.twoColumnLayout}>
        {/* Left Column: Scrollable Store List */}
        <div className={styles.listColumn}>
          <StoreList
            stores={filteredStores}
            selectedStoreId={selectedStoreId}
            onSelectStore={handleSelectStore}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Right Column: Sticky Interactive Map */}
        <div className={styles.mapColumn} id="store-locator-map-section">
          <StoreMap
            stores={filteredStores}
            selectedStoreId={selectedStoreId}
            onSelectStore={handleSelectStore}
          />
        </div>
      </div>
    </div>
  );
}
