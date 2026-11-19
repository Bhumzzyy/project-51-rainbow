import React from 'react';
import { CategoryTheme } from '@/data/categories';

/**
 * Checks whether a given category slug corresponds to the artisan scoop collection
 */
export function isScoopCategory(categorySlug: string): boolean {
  return categorySlug.toLowerCase() === 'scoop';
}

/**
 * Formats a product name into a normalized slug for asset mapping
 */
export function formatProductSlug(name: string): string {
  return name.toLowerCase().replace(/['’]/g, '').replace(/\s+/g, '-');
}

/**
 * Converts category theme object into CSS custom property definitions
 */
export function getCategoryThemeStyles(theme: CategoryTheme): React.CSSProperties {
  return {
    '--theme-bg': theme.bg,
    '--theme-accent': theme.accent,
    '--theme-soft-bg': theme.softBg,
    '--theme-badge-bg': theme.badgeBg,
    '--theme-text': theme.text,
  } as React.CSSProperties;
}
