"use client";

import React, { useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { PRODUCTS_HERO_CONFIG, ProductPlacementConfig } from "./ProductsHeroConfig";

export default function ProductsHero() {
  const heroRef = useRef<HTMLElement>(null);

  // Group products into Rear (Layer 2) and Foreground/Middle (Layer 4)
  const { rearProducts, foregroundProducts } = useMemo(() => {
    const rear: ProductPlacementConfig[] = [];
    const foreground: ProductPlacementConfig[] = [];

    PRODUCTS_HERO_CONFIG.forEach((item) => {
      if (item.layer === "rear") {
        rear.push(item);
      } else {
        foreground.push(item);
      }
    });

    return { rearProducts: rear, foregroundProducts: foreground };
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    // Respect user's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [
          ".products-hero-eyebrow-wrap",
          ".products-hero-title-wrap",
          ".products-hero-paragraph",
          ".hero-product-item",
          ".products-hero-waves-container",
          ".products-hero-wave-layer",
        ],
        { opacity: 1, y: 0, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Initial entrance timeline — snappy, elegant, clean
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".products-hero-eyebrow-wrap",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, delay: 0.05 }
      )
        .fromTo(
          ".products-hero-title-wrap",
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.45"
        )
        .fromTo(
          ".products-hero-paragraph",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-product-item",
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.035,
            ease: "power2.out",
            clearProps: "transform",
          },
          "-=0.6"
        )
        .fromTo(
          ".products-hero-wave-layer",
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.04,
            ease: "power2.out",
          },
          "-=0.7"
        );

      // 2. Subtle independent floating motions for perimeter products
      PRODUCTS_HERO_CONFIG.forEach((item: ProductPlacementConfig) => {
        const el = heroRef.current?.querySelector(
          `[data-product-id="${item.id}"] .hero-product-float`
        );
        if (el) {
          const floatAmt =
            item.floatAmount ??
            (item.left.startsWith("-") || parseInt(item.left, 10) < 50
              ? -5
              : 5);
          gsap.set(el, { rotation: item.rotation, y: 0 });
          gsap.to(el, {
            y: floatAmt,
            rotation: item.rotation + (floatAmt > 0 ? 0.8 : -0.8),
            duration: item.floatDuration ?? 5.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: item.animationDelay ?? 0.2,
          });
        }
      });

      // 3. Subtle pointer parallax across desktop viewports
      const handlePointerMove = (e: PointerEvent) => {
        if (window.innerWidth < 1024) return;
        const rect = heroRef.current?.getBoundingClientRect();
        if (!rect) return;

        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        PRODUCTS_HERO_CONFIG.forEach((item: ProductPlacementConfig) => {
          const el = heroRef.current?.querySelector(
            `[data-product-id="${item.id}"] .hero-product-parallax`
          );
          if (el) {
            const depthFactor = item.zIndex > 12 ? 0.025 : 0.015;
            const moveX = relX * depthFactor * 320;
            const moveY = relY * depthFactor * 220;
            gsap.to(el, {
              x: moveX,
              y: moveY,
              duration: 0.8,
              ease: "power1.out",
              overwrite: "auto",
            });
          }
        });
      };

      const heroEl = heroRef.current;
      heroEl?.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        heroEl?.removeEventListener("pointermove", handlePointerMove);
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const renderProductItem = (
    item: ProductPlacementConfig,
    priority: boolean
  ) => {
    const classes = [
      "hero-product-item",
      item.desktopOnly ? "desktop-only" : "",
      !item.mobileVisible ? "hide-on-mobile" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        key={item.id}
        data-product-id={item.id}
        data-layer={item.layer || "foreground"}
        className={classes}
        style={
          {
            "--pos-left": item.left,
            "--pos-top": item.top,
            "--item-w": item.width,
            "--tablet-left": item.tabletLeft || item.left,
            "--tablet-top": item.tabletTop || item.top,
            "--tablet-w": item.tabletWidth || item.width,
            "--mobile-left": item.mobileLeft || item.left,
            "--mobile-top": item.mobileTop || item.top,
            "--mobile-w": item.mobileWidth || "105px",
            "--rotation": `${item.rotation}deg`,
            zIndex: item.zIndex,
            opacity: item.opacity ?? 1,
          } as React.CSSProperties
        }
      >
        <div className="hero-product-parallax">
          <div className="hero-product-float">
            <div
              className="hero-product-inner"
              style={{
                transform: item.flipX ? "scaleX(-1)" : "none",
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1024}
                height={1024}
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                sizes="(max-width: 640px) 110px, (max-width: 1024px) 180px, 260px"
                className="hero-product-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={heroRef}
      className="products-hero-section"
      aria-label="51 Rainbow Ice Cream Product Discovery"
    >
      {/* Ambient warm radial spotlight in center background */}
      <div className="products-hero-ambient-spotlight" aria-hidden="true" />

      {/* ============================================================ */}
      {/* 5-LAYER COMPOSITION (Genuine Interleaved Paint Order)        */}
      {/* ============================================================ */}

      {/* Layer 1: Background Waves (Chocolate-Caramel & Heritage Red) */}
      <div
        className="products-hero-waves-container products-hero-waves--rear"
        aria-hidden="true"
      >
        {/* Layer 1a: Rich Chocolate-Caramel Ribbon (Deepest) */}
        <div className="products-hero-wave-layer wave-layer--chocolate">
          <Image
            src="/images/assets/waves/wave-03-chocolate-caramel.webp"
            alt=""
            width={2172}
            height={724}
            priority
            className="products-hero-wave-img"
          />
        </div>

        {/* Layer 1b: 51 Rainbow Heritage Red Ribbon */}
        <div className="products-hero-wave-layer wave-layer--red">
          <Image
            src="/images/assets/waves/wave-01-heritage-red.webp"
            alt=""
            width={2172}
            height={724}
            priority
            className="products-hero-wave-img"
          />
        </div>
      </div>

      {/* Layer 2: Rear Products (Tucked behind the foreground vanilla/cream wave) */}
      <div
        className="products-hero-stage products-hero-stage--rear"
        aria-hidden="true"
      >
        {rearProducts.map((item) => renderProductItem(item, false))}
      </div>

      {/* Layer 3: Foreground Waves (Warm Vanilla Ivory & Silky Cream) */}
      <div
        className="products-hero-waves-container products-hero-waves--foreground"
        aria-hidden="true"
      >
        {/* Layer 3a: Warm Vanilla Ivory Ribbon */}
        <div className="products-hero-wave-layer wave-layer--vanilla">
          <Image
            src="/images/assets/waves/wave-02-vanilla-ivory.webp"
            alt=""
            width={2172}
            height={724}
            priority
            className="products-hero-wave-img"
          />
        </div>

        {/* Layer 3b: Silky Cream Ribbon */}
        <div className="products-hero-wave-layer wave-layer--cream">
          <Image
            src="/images/assets/waves/wave-05-foreground-cream.webp"
            alt=""
            width={2171}
            height={724}
            priority
            className="products-hero-wave-img"
          />
        </div>
      </div>

      {/* Layer 4: Foreground & Middle Products (Visibly overlapping waves) */}
      <div
        className="products-hero-stage products-hero-stage--foreground"
        aria-hidden="true"
      >
        {foregroundProducts.map((item, idx) =>
          renderProductItem(item, idx < 3)
        )}
      </div>

      {/* Layer 5: Central Editorial Typography (Stacking Context zIndex 30) */}
      <div className="products-hero-center">
        {/* Eyebrow with elegant horizontal rule and red heart */}
        <div className="products-hero-eyebrow-wrap">
          <span className="products-hero-eyebrow">EXPLORE THE</span>
          <div className="products-hero-eyebrow-accent" aria-hidden="true">
            <span className="eyebrow-accent-line" />
            <svg
              className="eyebrow-accent-heart"
              viewBox="0 0 24 24"
              fill="#B9272F"
              width="13"
              height="13"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="eyebrow-accent-line" />
          </div>
        </div>

        {/* Main Headline with refined swooping red arc underline */}
        <div className="products-hero-title-wrap">
          <h1 className="products-hero-title">PRODUCTS</h1>
          <svg
            className="products-hero-title-arc"
            viewBox="0 0 420 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 6,18 C 120,4 300,4 414,18"
              stroke="#B9272F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Supporting Paragraph */}
        <p className="products-hero-paragraph">
          Fifty-one ways to fall in love. Handcrafted with 100% pure milk, fresh
          fruits, and artisan recipes.
        </p>
      </div>
    </section>
  );
}
