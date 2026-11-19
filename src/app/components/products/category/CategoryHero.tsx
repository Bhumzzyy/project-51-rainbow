import React from "react";
import Image from "next/image";
import { ProductCategory } from "@/data/categories";

export interface CategoryHeroProps {
  category: ProductCategory;
}

export default function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <header className="category-page-header">
      {/* Small uppercase category label */}
      <div className="category-eyebrow-badge">
        <span className="category-eyebrow-dot" aria-hidden="true">
          ✦
        </span>
        <span className="category-eyebrow-text">
          {category.tagline ? category.tagline.toUpperCase() : "51 RAINBOW COLLECTION"}
        </span>
        <span className="category-eyebrow-dot" aria-hidden="true">
          ✦
        </span>
      </div>

      {/* Large visually prominent Category Heading */}
      <h1 className="category-page-title">{category.name}</h1>

      {/* Short Category Description */}
      <p className="category-page-lead">{category.subtitle}</p>

      {/* Subtle horizontal decorative lines with center motif */}
      <div className="category-decorative-rule" aria-hidden="true">
        <div className="category-decorative-line" />
        <div className="category-decorative-diamond">◆</div>
        <div className="category-decorative-line" />
      </div>

      {/* Hero Product Artwork Composition (Well-proportioned, elegant shadow) */}
      <div className="category-page-hero-composition">
        <Image
          src={category.composition}
          alt={`${category.name} collection display`}
          width={580}
          height={380}
          priority
          className="category-page-hero-img"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 580px"
        />
      </div>
    </header>
  );
}
