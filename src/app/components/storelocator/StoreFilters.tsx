'use client';

import React from 'react';
import { StoreFilterCriteria } from '@/data/stores';
import styles from './StoreLocatorPage.module.css';

interface StoreFiltersProps {
  criteria: StoreFilterCriteria;
  onChange: (criteria: StoreFilterCriteria) => void;
  onReset: () => void;
  countries: string[];
  states: string[];
  cities: string[];
  pincodes: string[];
  totalCount: number;
}

export function StoreFilters({
  criteria,
  onChange,
  onReset,
  countries,
  states,
  cities,
  pincodes,
  totalCount,
}: StoreFiltersProps) {
  const isFiltered = Boolean(
    (criteria.country && criteria.country !== 'all') ||
    (criteria.state && criteria.state !== 'all') ||
    (criteria.city && criteria.city !== 'all') ||
    (criteria.pincode && criteria.pincode !== 'all') ||
    (criteria.search && criteria.search.trim() !== '')
  );

  return (
    <nav className={styles.filterBar} aria-label="Store locator filters">
      <div className={styles.filterGrid}>
        {/* Search Input */}
        <div className={styles.filterField}>
          <label htmlFor="store-search-input" className={styles.filterLabel}>
            Search Store or Area
          </label>
          <div className={styles.searchInputWrap}>
            {/* <span className={styles.searchIcon} aria-hidden="true">🔍</span> */}
            <input
              id="store-search-input"
              type="text"
              value={criteria.search || ''}
              onChange={(e) => onChange({ ...criteria, search: e.target.value })}
              placeholder="e.g. Varachha, Vesu, Bardoli..."
              className={styles.searchInput}
              aria-label="Search stores by name, street, or area"
            />
            {criteria.search && (
              <button
                type="button"
                onClick={() => onChange({ ...criteria, search: '' })}
                className={styles.searchClearBtn}
                aria-label="Clear search input"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Country Filter */}
        <div className={styles.filterField}>
          <label htmlFor="filter-country" className={styles.filterLabel}>
            Country
          </label>
          <select
            id="filter-country"
            value={criteria.country || 'India'}
            onChange={(e) => onChange({ ...criteria, country: e.target.value })}
            className={styles.filterSelect}
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* State Filter */}
        <div className={styles.filterField}>
          <label htmlFor="filter-state" className={styles.filterLabel}>
            State
          </label>
          <select
            id="filter-state"
            value={criteria.state || 'all'}
            onChange={(e) => onChange({ ...criteria, state: e.target.value, city: 'all', pincode: 'all' })}
            className={styles.filterSelect}
          >
            <option value="all">All States (Gujarat)</option>
            {states.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        {/* City Filter */}
        <div className={styles.filterField}>
          <label htmlFor="filter-city" className={styles.filterLabel}>
            City / Town
          </label>
          <select
            id="filter-city"
            value={criteria.city || 'all'}
            onChange={(e) => onChange({ ...criteria, city: e.target.value, pincode: 'all' })}
            className={styles.filterSelect}
          >
            <option value="all">All Cities ({cities.length})</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Pincode Filter */}
        <div className={styles.filterField}>
          <label htmlFor="filter-pincode" className={styles.filterLabel}>
            Pincode
          </label>
          <select
            id="filter-pincode"
            value={criteria.pincode || 'all'}
            onChange={(e) => onChange({ ...criteria, pincode: e.target.value })}
            className={styles.filterSelect}
          >
            <option value="all">All Pincodes</option>
            {pincodes.map((pin) => (
              <option key={pin} value={pin}>
                {pin}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Footer Info & Reset */}
      <div className={styles.filterMetaRow}>
        <div className={styles.filterCountBadge} role="status" aria-live="polite">
          <span className={styles.countNumber}>{totalCount}</span>
          <span>{totalCount === 1 ? 'store outlet found' : 'store outlets found'}</span>
        </div>

        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className={styles.resetButton}
            aria-label="Reset all search and dropdown filters"
          >
            <span aria-hidden="true">↺</span> Reset Filters
          </button>
        )}
      </div>
    </nav>
  );
}
