"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ReviewSection.module.css";

const reviewPeople = [
  {
    src: "/home/review-1.gif",
    leftQuote: "The kunafa brownie made our catch-up extra special.",
    rightQuote: "Warm, rich, and perfect to share with a friend.",
  },
  {
    src: "/home/review-2.gif",
    leftQuote: "A lovely treat to share on a relaxed afternoon.",
    rightQuote: "We both found a flavour to love, and we’ll be back.",
  },
  {
    src: "/home/review-3.gif",
    leftQuote: "Our sweet stop after a long day—those scoops hit the spot.",
    rightQuote: "A lovely place for a dessert date and a few laughs.",
  },
  {
    src: "/home/review-4.gif",
    leftQuote: "Great chocolate drinks and even better company.",
    rightQuote: "The perfect place to recharge and catch up with friends.",
  },
  {
    src: "/home/review-5.gif",
    leftQuote: "The kids loved choosing their own treats.",
    rightQuote: "A sweet little family outing with smiles all around.",
  },
  {
    src: "/home/review-6.gif",
    leftQuote: "Everyone found a favourite at the table.",
    rightQuote: "Our whole family left happy and already planning a return.",
  },
];

export default function ReviewSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviewPeople[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % reviewPeople.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="review-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>The scoop, in their words</p>
        <h2 id="review-title" className={styles.title}>
          Big smiles.
          <span>Even bigger cravings.</span>
        </h2>
      </header>
      <div className={styles.reviews} aria-live="polite" aria-atomic="true">
        <blockquote className={`${styles.review} ${styles.reviewLeft}`}>
          {/* <span className={styles.reviewLabel}>Sample review</span> */}
          <p>“{activeReview.leftQuote}”</p>
        </blockquote>
        <blockquote className={`${styles.review} ${styles.reviewRight}`}>
          {/* <span className={styles.reviewLabel}>Sample review</span> */}
          <p>“{activeReview.rightQuote}”</p>
        </blockquote>
      </div>
      <div className={styles.people} aria-hidden="true">
        <Image
          key={activeReview.src}
          src={activeReview.src}
          alt=""
          fill
          unoptimized
          sizes="(max-width: 700px) 100vw, 58vw"
          className={styles.personImage}
        />
      </div>
      <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">
        ✦
      </span>
    </section>
  );
}
