'use client';

import React, { useRef, useEffect } from 'react';
import { Store } from '@/data/stores';
import styles from './StoreLocatorPage.module.css';

interface StoreListProps {
  stores: Store[];
  selectedStoreId: string | null;
  onSelectStore: (store: Store) => void;
  onResetFilters: () => void;
}

export function StoreList({
  stores,
  selectedStoreId,
  onSelectStore,
  onResetFilters,
}: StoreListProps) {
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Auto-scroll selected card into view in the list
  useEffect(() => {
    if (selectedStoreId && cardRefs.current[selectedStoreId]) {
      cardRefs.current[selectedStoreId]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [selectedStoreId]);

  if (stores.length === 0) {
    return (
      <div className={styles.emptyStateContainer} role="status">
        <div className={styles.emptyIcon} aria-hidden="true"></div>
        <h3 className={styles.emptyTitle}>No stores found</h3>
        <p className={styles.emptyText}>
          No 51 Rainbow outlets matched your current filter criteria. Try clearing search keywords or selecting All Cities.
        </p>
        <button
          type="button"
          onClick={onResetFilters}
          className={styles.emptyResetBtn}
        >
          Reset All Filters
        </button>
      </div>
    );
  }

  return (
    <div
      className={styles.storeListWrapper}
      role="region"
      aria-label="List of 51 Rainbow store locations"
    >
      <div className={styles.storeCardsScrollContainer}>
        {stores.map((store, index) => {
          const isSelected = store.id === selectedStoreId;

          return (
            <div
              key={store.id}
              ref={(el) => {
                cardRefs.current[store.id] = el;
              }}
              className={`${styles.storeCard} ${isSelected ? styles.storeCardSelected : ''}`}
            >
              {/* Card Header & Location Badges */}
              <div className={styles.cardTopRow}>
                <span className={styles.storeIndexBadge}>#{index + 1}</span>
                <span className={styles.areaBadge}>{store.area}</span>
                <span className={styles.cityBadge}>{store.city}</span>
              </div>

              {/* Store Title */}
              <h3 className={styles.cardStoreName}>{store.name}</h3>

              {/* Exact Address */}
              <p className={styles.cardAddressText}>{store.address}</p>

              {/* Pincode & State */}
              <div className={styles.pincodeRow}>
                <span className={styles.pincodeLabel}>Pincode:</span>
                <span className={styles.pincodeValue}>{store.pincode}</span>
                <span className={styles.stateValue}>· {store.state}</span>
              </div>

              {/* Actions Row */}
              <div className={styles.cardActionsRow}>
                {store.verified ? (
                  <button
                    type="button"
                    onClick={() => onSelectStore(store)}
                    className={`${styles.selectOnMapBtn} ${isSelected ? styles.selectOnMapBtnActive : ''}`}
                    aria-pressed={isSelected}
                  >
                    {isSelected ? '✓ Showing on Map' : 'View on Map'}
                  </button>
                ) : (
                  <span className={styles.unverifiedTag}>
                    Address verified
                  </span>
                )}

                <a
                  href={store.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.googleDirectionsLink}
                  aria-label={`Get directions to ${store.name} in ${store.area} on Google Maps`}
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
