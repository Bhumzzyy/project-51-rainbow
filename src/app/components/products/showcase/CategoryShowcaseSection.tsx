"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductCategory } from "@/data/categories";

/**
 * Curated category keywords for Concept C Curved Orbit Typography.
 * Each collection features 4 distinct, handcrafted dessert descriptors
 * separated by brand-orange diamonds (◆) following the capsule curvature.
 */
const CATEGORY_ORBIT_KEYWORDS: Record<string, string[]> = {
  scoop: ["PISTACHIO", "VANILLA", "STRAWBERRY", "DRYFRUIT"],
  falooda: ["ROSE", "SAFFRON", "VERMICELLI", "PISTACHIO"],
  thickshakes: ["CHOCOLATE", "COCOA", "FUDGE", "CARAMEL"],
  sundaes: ["BROWNIE", "COCOA", "INDULGENCE", "CREAM"],
  cakes: ["LAYERED", "CELEBRATION", "CRUNCH", "RICH SPONGE"],
  waffles: ["BELGIAN", "CHOCOLATE", "CARAMEL", "FRESH CREAM"],
  "brownie-desserts": ["WARM FUDGE", "WALNUTS", "GOOEY", "BELGIAN COCOA"],
  coco: ["RICH COCOA", "CHILLED", "CHOCOLATE SHAVINGS", "VELVET"],
  smoothies: ["REAL BERRIES", "MANGO PULP", "CHILLED", "FRESH BLEND"],
  "fresh-cream": ["FRESH STRAWBERRY", "SITAPHAL", "WHIPPED CREAM", "NATURAL"],
  milkshakes: ["CREAMY", "CLASSIC SHAKE", "REAL ICE CREAM", "CHILLED"],
  "live-ice-cream": ["COLD STONE", "HAND CRAFTED", "MIX-INS", "ARTISANAL"],
  "party-tubs": ["FAMILY SHARE", "750ML TUBS", "PURE MILK", "CELEBRATION"],
};

const DEFAULT_ORBIT_KEYWORDS = ["HANDCRAFTED", "ARTISANAL", "REAL MILK", "PURE JOY"];

interface CategoryShowcaseSectionProps {
  category: ProductCategory;
  index: number;
  totalCategories: number;
}

export default function CategoryShowcaseSection({
  category,
  index,
  totalCategories,
}: CategoryShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Even index = Image Left, Text Right (Category 01, 03, 05...)
  // Odd index = Text Left, Image Right (Category 02, 04, 06...)
  const isImageLeft = index % 2 === 0;
  const orientationClass = isImageLeft ? "capsule--left" : "capsule--right";

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
        rootMargin: "60px 0px",
        threshold: 0.08,
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, []);

  const collectionNumber = (index + 1).toString().padStart(2, "0");
  const bannerSrc = category.bannerImage || category.composition;
  const keywords = CATEGORY_ORBIT_KEYWORDS[category.slug] || DEFAULT_ORBIT_KEYWORDS;
  const pathId = `orbit-curve-${category.slug}`;

  // =========================================================================
  // REVERSED CAPSULE SVG CURVES (Concept C Orbit Typography):
  // 1. LEFT IMAGE (capsule--left):
  //    Outer left is FLAT (touches viewport). Inner right is CURVED (faces center).
  //    Keywords run along top edge and curve down the upper-right rounded edge.
  // 2. RIGHT IMAGE (capsule--right):
  //    Outer right is FLAT (touches viewport). Inner left is CURVED (faces center).
  //    Keywords start on upper-left curve and flow across top edge towards outer right.
  // Both paths read naturally left-to-right, are upright, and mirror each other across X=500.
  // =========================================================================
  const leftPathD = "M 260,12 L 825,12 C 910,12 975,65 985,145";
  const rightPathD = "M 15,145 C 25,65 90,12 175,12 L 740,12";
  const currentPathD = isImageLeft ? leftPathD : rightPathD;
  const startOffset = "3%";

  return (
    <section
      ref={sectionRef}
      id={`category-${category.slug}`}
      className={`editorial-showcase-section ${orientationClass} ${
        isVisible ? "is-visible" : ""
      }`}
      aria-label={`${category.name} collection`}
    >
      <div
        className={`editorial-showcase-row ${orientationClass} ${
          isImageLeft
            ? "editorial-showcase-row--image-left"
            : "editorial-showcase-row--image-right"
        }`}
      >
        {/* ===============================================================
            CONCEPT A + CONCEPT C: Full-Bleed Flat Edge + Inward Facing Curve
            =============================================================== */}
        <div
          className={`category-capsule-container ${orientationClass} ${
            isImageLeft
              ? "category-capsule-container--left"
              : "category-capsule-container--right"
          }`}
        >
          {/* Concept C: Floating Curved Orbit Typography (SVG textPath) */}
          <div className="category-orbit-wrapper" aria-hidden="true">
            <svg
              className="category-orbit-svg"
              viewBox="0 0 1000 390"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path id={pathId} d={currentPathD} />
              </defs>
              <text className="category-orbit-text">
                <textPath href={`#${pathId}`} startOffset={startOffset}>
                  {keywords.map((word, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && (
                        <tspan className="category-orbit-diamond">
                          {"   "}◆{"   "}
                        </tspan>
                      )}
                      <tspan className="category-orbit-word">{word}</tspan>
                    </React.Fragment>
                  ))}
                </textPath>
              </text>
            </svg>
          </div>

          {/* Concept A: Inward-Facing Curved Capsule Frame (Flat Outer Edge) */}
          <div
            className={`category-capsule-frame ${orientationClass} ${
              isImageLeft
                ? "category-capsule-frame--left"
                : "category-capsule-frame--right"
            }`}
          >
            <div className="category-capsule-inner">
              <Image
                src={bannerSrc}
                alt={`${category.name} — ${category.subtitle}`}
                width={2172}
                height={724}
                priority={index <= 1}
                loading={index <= 1 ? "eager" : "lazy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 920px"
                className="category-capsule-img"
              />
              <div className="category-capsule-overlay" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ===============================================================
            EDITORIAL TEXT & ACTION COLUMN
            =============================================================== */}
        <div
          className={`editorial-text-col ${orientationClass} ${
            isImageLeft
              ? "editorial-text-col--right"
              : "editorial-text-col--left"
          }`}
        >
          <div className="editorial-text-content">
            {/* Category Eyebrow / Label */}
            <div className="editorial-label-wrapper">
              <span className="editorial-collection-num">
                NO. {collectionNumber}
              </span>
              <span className="editorial-divider" aria-hidden="true">
                /
              </span>
              <span className="editorial-tagline">
                {category.tagline || "Handcrafted Special"}
              </span>
            </div>

            {/* Category Heading in Recoleta Display Serif */}
            <h2 className="editorial-category-title">{category.name}</h2>

            {/* Short Category Narrative Description */}
            <p className="editorial-category-desc">{category.subtitle}</p>

            {/* Explore Collection Button (Only interactive element on hover) */}
            <div className="editorial-cta-wrap">
              <Link
                href={`/products/${category.slug}`}
                className="editorial-explore-btn"
                aria-label={`Explore ${category.name} Collection`}
              >
                <span>EXPLORE COLLECTION</span>
                <span className="editorial-btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
