import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CategoryHero,
  CategoryQuickNav,
  CategoryProductGrid,
  getCategoryThemeStyles,
  isScoopCategory,
} from '@/app/components/products';
import { CATEGORIES, getCategoryBySlug, getAllCategorySlugs } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import '@/styles/products.css';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found | 51 Rainbow Ice Cream',
    };
  }

  return {
    title: `${category.name} | 51 Rainbow Ice Cream`,
    description: category.subtitle,
  };
}

function CategoryLoadingFallback() {
  return (
    <div className="category-loading-skeleton" aria-busy="true" aria-label="Loading collection">
      <div className="skeleton-hero" />
      <div className="skeleton-grid" />
    </div>
  );
}

async function CategoryPageContent({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);
  const isScoop = isScoopCategory(category.slug);

  return (
    <main
      className="products-wrapper"
      style={getCategoryThemeStyles(category.theme)}
    >
      {/* Category Hero: Centered composition with title directly beneath */}
      <CategoryHero category={category} />

      {/* Clean Category Navigation Pills Bar */}
      <CategoryQuickNav categories={CATEGORIES} currentSlug={category.slug} />

      {/* Product Cards Grid with Clean White Surfaces & Signature Melting Edges */}
      <CategoryProductGrid
        products={products}
        isScoopCategory={isScoop}
        categoryName={category.name}
      />

      {/* Bottom Navigation CTA */}
      <div style={{ textAlign: 'center', padding: '0 20px 80px' }}>
        <Link
          href="/products"
          className="editorial-explore-btn"
          style={{ display: 'inline-flex' }}
        >
          <span>&larr; EXPLORE ALL COLLECTIONS</span>
        </Link>
      </div>
    </main>
  );
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<CategoryLoadingFallback />}>
      <CategoryPageContent params={params} />
    </Suspense>
  );
}
