"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ProductCategory } from "@/data/categories";

export interface CategoryQuickNavProps {
  categories: ProductCategory[];
  currentSlug: string;
}

export default function CategoryQuickNav({
  categories,
  currentSlug,
}: CategoryQuickNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const activeCategory = categories.find(
    (c) => c.slug.toLowerCase() === currentSlug.toLowerCase()
  );

  // Close on Escape key press and prevent body scroll when open
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close when clicking outside modal card
  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      triggerRef.current?.focus();
    }
  }

  return (
    <>
      <nav className="category-quick-nav" aria-label="Category filter controls">
        <div className="category-filter-bar-inner">
          {/* Main "Filters" Button styled exactly as Image 2 (white pill, orange border, orange text & sliders icon) */}
          <button
            ref={triggerRef}
            type="button"
            className="category-filter-btn"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-controls="category-filter-dialog"
          >
            {/* 3-Horizontal Sliders Icon matching Image 2 */}
            <svg
              className="category-filter-icon"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <circle cx="14" cy="6" r="2.5" fill="#fff" stroke="currentColor" strokeWidth="2.2" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <circle cx="8" cy="12" r="2.5" fill="#fff" stroke="currentColor" strokeWidth="2.2" />
              <line x1="3" y1="18" x2="21" y2="18" />
              <circle cx="16" cy="18" r="2.5" fill="#fff" stroke="currentColor" strokeWidth="2.2" />
            </svg>
            <span className="category-filter-btn-text">Filters</span>
            {activeCategory && (
              <span className="category-filter-active-pill" aria-label={`Current category: ${activeCategory.name}`}>
                {activeCategory.name}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Dropdown / Modal Dialog containing all categories */}
      {isOpen && (
        <div
          id="category-filter-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Filter products by collection"
          className="category-modal-backdrop"
          onClick={handleBackdropClick}
        >
          <div ref={modalRef} className="category-modal-card">
            {/* Modal Header */}
            <div className="category-modal-header">
              <div className="category-modal-titles">
                <span className="category-modal-eyebrow">EXPLORE BY COLLECTION</span>
                <h2 className="category-modal-title">Select a Collection</h2>
              </div>
              <button
                type="button"
                className="category-modal-close"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Close category filters"
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Category Grid */}
            <div className="category-modal-grid">
              <Link
                href="/products"
                className="category-modal-pill category-modal-pill--all"
                onClick={() => setIsOpen(false)}
              >
                <span>← All Collections</span>
              </Link>

              {categories.map((cat) => {
                const isActive = cat.slug.toLowerCase() === currentSlug.toLowerCase();
                return (
                  <Link
                    key={cat.slug}
                    href={`/products/${cat.slug}`}
                    scroll={false}
                    className={`category-modal-pill${isActive ? " is-active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{cat.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
