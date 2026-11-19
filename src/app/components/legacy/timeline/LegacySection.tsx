"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { MILESTONES_DATA } from "@/data/legacy-data";
import { LegacyTimelineViewport } from "./LegacyTimelineViewport";
import "../styles/legacy.css";

interface DimensionsData {
  startTranslate: number;
  endTranslate: number;
  totalTravel: number;
  scrollDistance: number;
  targetX: number;
  positions: number[];
}

export const LegacySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<DimensionsData | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [milestonePositions, setMilestonePositions] = useState<number[]>([]);

  // Measure milestone positions & compute dynamic scroll distance
  const measure = useCallback(() => {
    if (!trackRef.current || !containerRef.current) return;
    const viewportWidth = window.innerWidth;
    const targetX = viewportWidth * 0.35; // Strict ~35% alignment target

    const milestoneElements =
      trackRef.current.querySelectorAll<HTMLElement>(".legacy-milestone-col");
    if (!milestoneElements || milestoneElements.length === 0) return;

    // Use getBoundingClientRect to calculate exact centers relative to track,
    // which is independent of wrapper elements and unaffected by current transform
    const trackRect = trackRef.current.getBoundingClientRect();
    const positions: number[] = [];

    milestoneElements.forEach((el) => {
      const elRect = el.getBoundingClientRect();
      const centerRelToTrack =
        elRect.left - trackRect.left + elRect.width / 2;
      positions.push(centerRelToTrack);
    });

    const firstCenter = positions[0];
    const lastCenter = positions[positions.length - 1];

    // Translation when first milestone center is at targetX
    const startTranslate = targetX - firstCenter;
    // Translation when last milestone center is at targetX
    const endTranslate = targetX - lastCenter;

    const totalTravel = Math.abs(startTranslate - endTranslate);
    // Vertical scroll distance proportional to actual horizontal overflow
    // Generous buffer ensures smooth, comfortable dwell time across all milestones
    const scrollDistance = Math.max(
      totalTravel * 1.1,
      window.innerHeight * 2.8
    );

    dimensionsRef.current = {
      startTranslate,
      endTranslate,
      totalTravel,
      scrollDistance,
      targetX,
      positions,
    };

    setMilestonePositions(positions);
    containerRef.current.style.height = `${window.innerHeight + scrollDistance}px`;
  }, []);

  // Update track translation on scroll
  useEffect(() => {
    measure();

    let ticking = false;
    let lastActive = 0;

    const updatePosition = () => {
      if (
        !containerRef.current ||
        !trackRef.current ||
        !dimensionsRef.current
      ) {
        return;
      }

      const {
        startTranslate,
        endTranslate,
        scrollDistance,
        targetX,
        positions,
      } = dimensionsRef.current;
      const rect = containerRef.current.getBoundingClientRect();

      // Container scroll progress (0 to 1) accounting for sticky navbar height
      const navbarOffset = typeof window !== "undefined" && window.innerWidth <= 768 ? 68 : 80;
      const scrolled = navbarOffset - rect.top;
      const progress = Math.min(
        Math.max(scrolled / scrollDistance, 0),
        1
      );

      // Direct horizontal translation via hardware acceleration
      const currentTranslate =
        startTranslate + progress * (endTranslate - startTranslate);
      trackRef.current.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;

      // Identify milestone closest to targetX
      let closestIdx = 0;
      let minDiff = Infinity;
      for (let i = 0; i < positions.length; i++) {
        const posInViewport = positions[i] + currentTranslate;
        const diff = Math.abs(posInViewport - targetX);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }

      if (closestIdx !== lastActive) {
        lastActive = closestIdx;
        setActiveIndex(closestIdx);
      }

      setScrollProgress(progress);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updatePosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      measure();
      updatePosition();
    };

    // Horizontal wheel / trackpad support:
    // If the user swipes horizontally on trackpad or uses shift+wheel, scroll the page vertically
    // so the timeline naturally moves horizontally
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const navbarOffset = typeof window !== "undefined" && window.innerWidth <= 768 ? 68 : 80;
      const inView = rect.top <= navbarOffset + 10 && rect.bottom >= window.innerHeight - 10;
      if (!inView) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
        e.preventDefault();
        window.scrollBy({ top: e.deltaX, behavior: "auto" });
      }
    };

    // Pointer drag / swipe support:
    let isDragging = false;
    let startX = 0;
    let startScrollY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("button, a, input")) return;
      isDragging = true;
      startX = e.clientX;
      startScrollY = window.scrollY;
      containerRef.current?.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging || !dimensionsRef.current) return;
      const deltaX = e.clientX - startX;
      window.scrollTo({
        top: startScrollY - deltaX * 1.3,
        behavior: "auto",
      });
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (isDragging) {
        isDragging = false;
        try {
          containerRef.current?.releasePointerCapture(e.pointerId);
        } catch {}
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel, { passive: false });

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener("pointerdown", handlePointerDown);
      containerEl.addEventListener("pointermove", handlePointerMove);
      containerEl.addEventListener("pointerup", handlePointerUp);
      containerEl.addEventListener("pointercancel", handlePointerUp);
    }

    // Initial position trigger
    updatePosition();

    // Trigger measure again once images/fonts may have stabilized
    const timer1 = setTimeout(() => {
      measure();
      updatePosition();
    }, 200);

    const timer2 = setTimeout(() => {
      measure();
      updatePosition();
    }, 800);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      if (containerEl) {
        containerEl.removeEventListener("pointerdown", handlePointerDown);
        containerEl.removeEventListener("pointermove", handlePointerMove);
        containerEl.removeEventListener("pointerup", handlePointerUp);
        containerEl.removeEventListener("pointercancel", handlePointerUp);
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [measure]);

  // Jump smoothly to a specific milestone
  const handleSelectMilestone = useCallback((index: number) => {
    if (!containerRef.current || !dimensionsRef.current) return;
    const { startTranslate, endTranslate, scrollDistance, targetX, positions } =
      dimensionsRef.current;

    const targetMilestoneCenter = positions[index];
    const targetTranslate = targetX - targetMilestoneCenter;

    const progress = Math.min(
      Math.max(
        (targetTranslate - startTranslate) / (endTranslate - startTranslate),
        0
      ),
      1
    );

    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const targetScrollY = containerTop + progress * scrollDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: "smooth",
    });
  }, []);

  // Keyboard navigation for timeline
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const navbarOffset = typeof window !== "undefined" && window.innerWidth <= 768 ? 68 : 80;
      const inView = rect.top <= navbarOffset + 100 && rect.bottom >= window.innerHeight;

      if (!inView) return;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (activeIndex < MILESTONES_DATA.length - 1) {
          handleSelectMilestone(activeIndex + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (activeIndex > 0) {
          handleSelectMilestone(activeIndex - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, handleSelectMilestone]);

  return (
    <div className="relative w-full bg-[#FFFCEE] text-[#28231F] selection:bg-[#B9272F] selection:text-white">
      {/* ============================================================== */}
      {/* DYNAMIC SCROLL CONTAINER WITH STICKY HORIZONTAL TIMELINE       */}
      {/* ============================================================== */}
      <section
        ref={containerRef}
        id="legacy-horizontal-timeline"
        className="relative w-full touch-pan-y"
        style={{ minHeight: "220vh" }}
        aria-label="51 Rainbow Historical Legacy Horizontal Timeline"
      >
        <LegacyTimelineViewport
          trackRef={trackRef}
          milestones={MILESTONES_DATA}
          activeIndex={activeIndex}
          scrollProgress={scrollProgress}
          milestonePositions={milestonePositions}
          onSelectMilestone={handleSelectMilestone}
        />
      </section>
    </div>
  );
};

export default LegacySection;
