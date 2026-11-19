import React from 'react';
import { Product } from '@/data/products';
import ProductCard from '../cards/ProductCard';

export interface CategoryProductGridProps {
  products: Product[];
  isScoopCategory?: boolean;
  categoryName: string;
}

export default function CategoryProductGrid({
  products,
  categoryName,
}: CategoryProductGridProps) {
  return (
    <section className="products-grid-container" aria-label={`${categoryName} products list`}>
      <div className="products-grid">
        {products.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={idx}
            enableZigzag={true}
            isPriority={idx < 4}
          />
        ))}
      </div>
    </section>
  );
}
