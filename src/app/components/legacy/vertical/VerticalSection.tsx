"use client";

import React from "react";
import Link from "next/link";
import { VERTICAL_MILESTONES_DATA } from "@/data/legacy-vertical-data";
import { VerticalTimeline } from "./VerticalTimeline";
import "../styles/vertical.css";

export const VerticalSection: React.FC = () => {
  return (
    <section className="legacy-vertical" aria-label="51 Rainbow Vertical Heritage Timeline">
      {/* 1. Header Hero */}
      <header className="legacy-vertical__header">
        {/* <div className="legacy-vertical__header-badge">
          <span className="legacy-vertical__header-badge-dot" aria-hidden="true">✦</span>
          <span className="legacy-vertical__header-badge-text">Est. 1980 — A Legacy of Sweet Memories</span>
          <span className="legacy-vertical__header-badge-dot" aria-hidden="true">✦</span>
        </div> */}

        <h1 className="legacy-vertical__header-title">Our Heritage Journey</h1>

        <p className="legacy-vertical__header-lead">
          From a humble hand-cranked Baraf Gola pushcart in 1980 to 90+ artisanal parlours across
          India and beyond. Discover the four decades of passion, craft, and pure joy that shaped 51 Rainbow.
        </p>

        <div className="legacy-vertical__header-divider" aria-hidden="true">
          <div className="legacy-vertical__divider-line" />
          <span className="legacy-vertical__divider-diamond">◆</span>
          <div className="legacy-vertical__divider-line" />
        </div>
      </header>

      {/* 2. Central Vertical Timeline */}
      <main>
        <VerticalTimeline milestones={VERTICAL_MILESTONES_DATA} />
      </main>

      {/* 3. Bottom Return / Explore CTA */}
      <footer className="legacy-vertical__footer-cta">
        <Link href="/products" className="legacy-vertical__explore-btn">
          <span>Explore Artisan Products</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </footer>
    </section>
  );
};

export default VerticalSection;
