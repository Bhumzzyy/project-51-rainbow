import { Metadata } from 'next';
import { ProductsHero, CategoryShowcaseSection } from '@/app/components/products';
import { CATEGORIES } from '@/data/categories';
import '@/styles/products.css';

export const metadata: Metadata = {
  title: 'Explore The Products | 51 Rainbow Ice Cream',
  description:
    'Explore 51 Rainbow’s complete universe of handcrafted artisan scoops, royal faloodas, thickshakes, sundaes, waffles, ice cream cakes, and cold coco.'
};

export default function ProductsPage() {
  return (
    <main className="products-wrapper">
      {/* Editorial Product Discovery Hero */}
      <ProductsHero />

      {/* Seamless Melting-Wave Category Showcase Sections */}
      <div className="category-showcase-container">
        {CATEGORIES.map((category, index) => (
          <CategoryShowcaseSection
            key={category.slug}
            category={category}
            index={index}
            totalCategories={CATEGORIES.length}
          />
        ))}
      </div>
    </main>
  );
}
