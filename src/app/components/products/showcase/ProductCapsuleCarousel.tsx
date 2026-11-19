"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { Product } from "@/data/products";
import ProductCard from "../cards/ProductCard";

export interface ProductCapsuleCarouselProps {
  products: Product[];
  title?: string;
  eyebrow?: string;
  isScoop?: boolean;
}

export default function ProductCapsuleCarousel({
  products,
  title = "Signature Highlights",
  eyebrow = "HANDCRAFTED CURATION",
  isScoop = false,
}: ProductCapsuleCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const handleScroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!products || products.length === 0) return null;

  return (
    <section className="product-carousel-section" aria-label={title}>
      {/* Header with Title and Accessible Arrow Controls */}
      <div className="product-carousel-header">
        <div className="product-carousel-titles">
          {eyebrow && <span className="product-carousel-eyebrow">{eyebrow}</span>}
          <h2 className="product-carousel-title">{title}</h2>
        </div>

        {products.length > 3 && (
          <div className="product-carousel-controls" aria-label="Carousel navigation">
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous products"
            >
              ←
            </button>
            <button
              type="button"
              className="carousel-nav-btn"
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Next products"
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={trackRef}
        className="product-carousel-track"
        tabIndex={0}
        role="region"
        aria-label={`${title} scrollable track`}
      >
        {products.map((product, idx) => (
          <div key={product.id} className="product-carousel-item">
            <ProductCard product={product} isPriority={idx < 4} />
          </div>
        ))}
      </div>
    </section>
  );
}

