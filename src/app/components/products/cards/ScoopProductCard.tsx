"use client";

import React from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export interface ScoopProductCardProps {
  product: Product;
  isPriority?: boolean;
  index?: number;
  enableZigzag?: boolean;
}

/**
 * ScoopProductCard
 * Renders the Artisan Scoop product using the single complete WebP image
 * directly within the signature vertical purple capsule card.
 */
export default function ScoopProductCard({
  product,
  isPriority = false,
  index = 0,
  enableZigzag = true,
}: ScoopProductCardProps) {
  return (
    <ProductCard
      product={product}
      isPriority={isPriority}
      index={index}
      enableZigzag={enableZigzag}
    />
  );
}
