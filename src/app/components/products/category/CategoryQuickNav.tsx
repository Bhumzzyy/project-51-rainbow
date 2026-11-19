import React from "react";
import Link from "next/link";
import { ProductCategory } from "@/data/categories";

export interface CategoryQuickNavProps {
  categories: ProductCategory[];
  currentSlug: string;
}

export default function CategoryQuickNav({
  categories,
  currentSlug,
}: CategoryQuickNavProps) {
  return (
    <nav className="category-quick-nav" aria-label="Quick category selector">
      <div className="category-quick-nav-track">
        <Link
          href="/products"
          className="category-quick-pill category-quick-pill--back"
        >
          <span className="pill-arrow" aria-hidden="true">
            ←
          </span>
          <span>All Collections</span>
        </Link>

        {categories.map((cat) => {
          const isActive = cat.slug.toLowerCase() === currentSlug.toLowerCase();
          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className={`category-quick-pill${isActive ? " is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span>{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
