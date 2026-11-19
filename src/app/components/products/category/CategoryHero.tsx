import React from "react";
import { ProductCategory } from "@/data/categories";

export interface CategoryHeroProps {
  category: ProductCategory;
}

const CATEGORY_SEO_COPY: Record<string, string> = {
  scoop:
    "Handcrafted in small batches with 100% pure dairy milk, real churned cream, and natural ingredients. Every scoop delivers an authentic, melt-in-the-mouth artisan ice cream experience with zero artificial vegetable fats.",
  falooda:
    "A royal celebration in chilled tall glasses — layers of silky vermicelli, fragrant rose syrup, soothing sweet basil seeds, crunchy dry fruits, and rich artisan ice cream scoops.",
  thickshakes:
    "100% thick dairy cream with zero melted ice. Loaded with premium ice cream scoops, decadent crunches, Belgian cocoa, and rich gourmet swirls.",
  sundaes:
    "Artisan dessert creations layered with warm fudgy brownies, roasted nuts, velvety chocolate drizzle, and decadent double scoops.",
  cakes:
    "Celebration ice cream cakes combining moist sponge cake bases with rich, creamy layers of gourmet ice cream and chocolate toppings.",
  waffles:
    "Freshly griddled Belgian waffles with crispy golden crusts, drizzled with warm Belgian chocolate or caramel, and topped with chilled artisanal scoops.",
  "brownie-desserts":
    "Decadent dessert tubs packed with gooey, fudgy brownies, Belgian chocolate sauce, crunchy toppings, and creamy artisanal scoops.",
  coco:
    "Surat's iconic signature indulgence — world-famous thick, silky cold coco beverage made with premium roasted cocoa and frosty chill.",
  smoothies:
    "Healthy, vibrant fruit smoothies blended with fresh seasonal fruits, real berries, and chilled dairy goodness.",
  "fresh-cream":
    "Traditional thick dairy cream tossed with fresh, sweet hand-cut seasonal fruits like Sitaphal, Alphonso Mango, and Strawberries.",
  milkshakes:
    "Classic heritage milkshakes, dry fruit shakes, and chilled refreshes made with pure milk and slow-roasted almonds, pistachios, and saffron.",
  "live-ice-cream":
    "Interactive live marble stone crafting — your favorite ice creams chopped and folded with fresh mix-ins on a sub-zero cold stone.",
  "party-tubs":
    "Super-saver 750ml family party tubs made with 100% pure dairy milk. Perfect for family celebrations, get-togethers, and home indulgence.",
};

export default function CategoryHero({ category }: CategoryHeroProps) {
  const seoText =
    CATEGORY_SEO_COPY[category.slug] ||
    "Crafted with 100% pure dairy milk, authentic heritage recipes, and natural ingredients.";

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

      {/* Primary Category Tagline */}
      <p className="category-page-lead">{category.subtitle}</p>

      {/* Subtle horizontal decorative lines with center motif */}
      <div className="category-decorative-rule" aria-hidden="true">
        <div className="category-decorative-line" />
        <div className="category-decorative-diamond">◆</div>
        <div className="category-decorative-line" />
      </div>

      {/* Detailed SEO Narrative Description */}
      <p className="category-page-seo-lead">{seoText}</p>

      {/* Trust & Quality Highlights */}
      <div className="category-trust-row" aria-label="Quality highlights">
        <span className="category-trust-item">
          <span className="category-trust-dot" aria-hidden="true">✦</span>
          100% Pure Dairy Milk
        </span>
        <span className="category-trust-item">
          <span className="category-trust-dot" aria-hidden="true">✦</span>
          Small-Batch Artisanal Craft
        </span>
        <span className="category-trust-item">
          <span className="category-trust-dot" aria-hidden="true">✦</span>
          Zero Vegetable Oils
        </span>
      </div>
    </header>
  );
}
