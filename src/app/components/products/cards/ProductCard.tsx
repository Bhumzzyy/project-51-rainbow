"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  isPriority?: boolean;
  index?: number;
  enableZigzag?: boolean;
}

export default function ProductCard({
  product,
  isPriority = false,
  index = 0,
  enableZigzag = true,
}: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isPriority);
  const [isTouched, setIsTouched] = useState(false);

  // Determine category-specific aspect/staging helper class
  const categorySlug = product.categorySlug?.toLowerCase() || "";
  let stageModifier = "standard";
  if (["falooda", "thickshakes", "coco", "milkshakes", "smoothies"].includes(categorySlug)) {
    stageModifier = "drink";
  } else if (["waffles", "cakes"].includes(categorySlug)) {
    stageModifier = "wide";
  } else if (["sundaes", "party-tubs", "brownie-desserts"].includes(categorySlug)) {
    stageModifier = "tub";
  } else if (categorySlug === "scoop") {
    stageModifier = "scoop";
  }

  // Alternating Zigzag: Even index is higher (-35px), odd index is lower (+35px)
  const isHigher = index % 2 === 0;
  const staggerDelay = (index % 4) * 110; // 0ms, 110ms, 220ms, 330ms sequential wave

  useEffect(() => {
    if (isPriority) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "80px 0px -40px 0px",
        threshold: 0.08,
      }
    );

    const el = cardRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [isPriority]);

  return (
    <div
      ref={cardRef}
      className={`product-zigzag-wrapper ${
        enableZigzag
          ? `product-zigzag-wrapper--${isHigher ? "higher" : "lower"}`
          : "product-zigzag-wrapper--neutral"
      }${isVisible ? " is-revealed" : ""}`}
      style={
        {
          "--stagger-delay": `${staggerDelay}ms`,
        } as React.CSSProperties
      }
    >
      {/* Outer Liquid Scroll Reveal & Settling Motion Layer */}
      <div className="product-liquid-motion-layer">
        {/* Inner Card — Isolated Hover Interactions */}
        <article
          className={`product-capsule-card product-capsule-card--${stageModifier}${
            isTouched ? " is-touched" : ""
          }`}
          tabIndex={0}
          aria-label={`${product.name} - ${product.categoryName}`}
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => setTimeout(() => setIsTouched(false), 1400)}
        >
          {/* 3D Independent Stage: Taller Purple Capsule + Floating Foreground Product */}
          <div className="capsule-stage-wrapper">
            {/* 1. Independent Vertical Purple Capsule (#6D5686) strictly BEHIND the product */}
            <div className="capsule-backdrop" aria-hidden="true">
              <div className="capsule-sheen" aria-hidden="true" />
            </div>

            {/* 2. Independent Floating Product Image Layer strictly IN FRONT of the capsule */}
            <div className="capsule-product-layer">
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={380}
                  height={380}
                  className="product-capsule-img"
                  loading={isPriority ? "eager" : "lazy"}
                  priority={isPriority}
                  sizes="(max-width: 480px) 46vw, (max-width: 768px) 45vw, (max-width: 1100px) 30vw, 280px"
                />
              </div>
            </div>
          </div>

          {/* 3. Product Information Positioned Cleanly Below Capsule */}
          <div className="capsule-product-info">
            <span className="capsule-category-label">
              {product.categoryName}
            </span>
            <h3 className="capsule-product-title">{product.name}</h3>
          </div>
        </article>
      </div>
    </div>
  );
}
