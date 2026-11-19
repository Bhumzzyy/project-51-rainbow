"use client";

import React, { useEffect, useRef } from "react";

interface VerticalParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * VerticalParallax
 * Lightweight scroll-driven parallax wrapper applied strictly to artwork.
 * Uses requestAnimationFrame + IntersectionObserver for smooth 60fps GPU transforms.
 * Automatically respects prefers-reduced-motion.
 */
export const VerticalParallax: React.FC<VerticalParallaxProps> = ({
  children,
  speed = 0.065,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    let isIntersecting = false;
    let rafId: number | null = null;

    const updateParallax = () => {
      if (!isIntersecting || !container || !target) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      // Restrained parallax range (capped between -26px and +26px)
      const offset = Math.max(-26, Math.min(26, -distanceFromCenter * speed));
      target.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      rafId = null;
    };

    const handleScroll = () => {
      if (!isIntersecting) return;
      if (rafId === null) {
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    // IntersectionObserver ensures transforms only compute when the element is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          updateParallax();
        } else if (target) {
          // Reset smoothly when exiting
          target.style.transform = "translate3d(0, 0, 0)";
        }
      },
      {
        rootMargin: "100px 0px",
        threshold: 0,
      }
    );

    observer.observe(container);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateParallax, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateParallax);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed]);

  return (
    <div ref={containerRef} className={`relative overflow-visible ${className}`}>
      <div
        ref={targetRef}
        className="w-full h-full will-change-transform transition-transform duration-100 ease-out"
        style={{ transform: "translate3d(0, 0, 0)" }}
      >
        {children}
      </div>
    </div>
  );
};

export default VerticalParallax;
