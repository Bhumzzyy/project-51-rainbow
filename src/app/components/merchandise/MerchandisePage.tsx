"use client";

import Image from "next/image";
import { useState } from "react";
import {
  merchandiseItems,
  type MerchandiseCategory,
} from "@/app/content/merchandise-data";
import styles from "./MerchandisePage.module.css";

const filters: Array<"All" | MerchandiseCategory> = [
  "All",
  "Apparel",
  "Bags",
  "Drinkware",
  "Stationery",
  "Accessories",
  "Gifts",
];

export default function MerchandisePage() {
  const [activeFilter, setActiveFilter] = useState<"All" | MerchandiseCategory>(
    "All",
  );
  const visibleItems =
    activeFilter === "All"
      ? merchandiseItems
      : merchandiseItems.filter((item) => item.category === activeFilter);

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>51 Rainbow Merchandise</p>
        <h1>Take a little Rainbow with you.</h1>
        <p className={styles.intro}>
          Everyday essentials and keepsakes made to bring a little joy wherever
          you go.
        </p>
        <p className={styles.priceNote}>Suggested retail prices · India · INR</p>
      </header>

      <section className={styles.catalog} aria-label="Merchandise catalog">
        <div className={styles.toolbar}>
          <div
            className={styles.filters}
            role="group"
            aria-label="Filter merchandise by category"
          >
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={`${styles.filter} ${
                  activeFilter === filter ? styles.filterActive : ""
                }`}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className={styles.resultCount} aria-live="polite">
            {visibleItems.length} {visibleItems.length === 1 ? "item" : "items"}
          </p>
        </div>

        <div className={styles.grid}>
          {visibleItems.map((item) => (
            <article className={styles.product} key={item.id}>
              <div className={styles.imageFrame}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 700px) 30vw, (max-width: 1000px) 30vw, 25vw"
                  className={styles.image}
                />
              </div>
              <h2>{item.name}</h2>
              <p className={styles.price}>{item.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
