
"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const desserts = [
  {
    id: 1,
    name: "Pistachio Kunafa Brownie",
    titleLines: ["Pistachio", "Kunafa", "Brownie"],
    description:
      "A fudgy brownie topped with crisp golden kunafa and smooth pistachio cream.",
    ingredients: [
      { name: "Pistachio cream", image: "/home/ingridiant-1.webp" },
      { name: "Kunafa", image: "/home/ingridiant-2.webp" },
      { name: "Brownie", image: "/home/ingridiant-3.webp" },
    ],
    image: "/home/dessert-1.webp",
    elements: [
      "/home/element-1.webp",
      "/home/element-2.webp",
    ],
  },
  {
    id: 2,
    name: "Red Rose Falooda",
    titleLines: ["Red", "Rose", "Falooda"],
    description:
      "A refreshing rose falooda layered with silky vermicelli, basil seeds, chilled milk, and ice cream.",
    ingredients: [
      { name: "Rose syrup", image: "/home/ingridiant-4.webp" },
      { name: "Vermicelli", image: "/home/ingridiant-5.webp" },
      { name: "Fresh cream", image: "/home/ingridiant-6.webp" },
    ],
    image: "/home/dessert-2.webp",
    elements: [
      "/home/element-3.webp",
      "/home/element-6.webp",
      "/home/element-7.webp",
    ],
  },
  {
    id: 3,
    name: "Black Currant Thickshake",
    titleLines: ["Black", "Currant", "Thickshake"],
    description:
      "A thick, creamy shake blended with tangy black currants for a cool berry treat.",
    ingredients: [
      { name: "Black currant berries", image: "/home/ingridiant-7.webp" },
      { name: "Fresh cream", image: "/home/ingridiant-6.webp" },
      { name: "Blackcurrant sauce", image: "/home/ingridiant-8.webp" },
    ],
    image: "/home/dessert-3.webp",
    elements: ["/home/element-4.webp", "/home/element-9.webp"],
  },
  {
    id: 4,
    name: "Choco Chips Coco",
    titleLines: ["Choco", "Chips", "Coco"],
    description:
      "A smooth cocoa and chocolate-chip treat with a creamy finish and plenty of crunch.",
    ingredients: [
      { name: "Choco chips", image: "/home/ingridiant-9.webp" },
      { name: "Cocoa powder", image: "/home/ingridiant-10.webp" },
      { name: "Milk", image: "/home/ingridiant-11.webp" },
    ],
    image: "/home/dessert-4.webp",
    elements: [
      "/home/element-5.webp",
      "/home/element-8.webp",
      "/home/element-9.webp",
    ],
  },
];

const elementPositions = [
  styles.elementOne,
  styles.elementTwo,
  styles.elementThree,
  styles.elementFour,
  styles.elementFive,
  styles.elementSix,
  styles.elementSeven,
  styles.elementEight,
  styles.elementNine,
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatically change dessert every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % desserts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroCollection}>

        {desserts.map((dessert, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              key={dessert.id}
              className={`${styles.dessertHero} ${
                isActive ? styles.dessertHeroActive : ""
              }`}
              aria-hidden={!isActive}
            >

              {/* Background typography */}
              <div className={styles.heroTypography}>
                {dessert.titleLines.map((line, lineIndex) => (
                  <span
                    className={
                      lineIndex === 1
                        ? styles.heroTitleSecondary
                        : lineIndex === 2
                          ? styles.heroTitleTertiary
                          : styles.heroTitlePrimary
                    }
                    key={line}
                  >
                    {line}
                  </span>
                ))}
              </div>

              {elementPositions.map((position, elementIndex) => {
                const element = dessert.elements[elementIndex % dessert.elements.length];

                return (
                  <img
                    src={element}
                    alt=""
                    aria-hidden="true"
                    className={`${styles.garnish} ${position}`}
                    key={`${dessert.id}-${elementIndex}-${element}`}
                  />
                );
              })}

              <div className={styles.heroInfo}>
                <span className={styles.heroEyebrow}>Made for a little joy</span>
                <h2 className={styles.heroHeading}>{dessert.name}</h2>
                <p className={styles.heroDescription}>{dessert.description}</p>
                <a href="/product" className={styles.orderButton}>
                  Order now <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Center product image */}
              <div className={styles.heroProduct}>
                <div className={styles.productGlow} />

                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className={styles.dessertImage}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div className={styles.heroIngredients} aria-label={`${dessert.name} ingredients`}>
                {dessert.ingredients.map((ingredient, ingredientIndex) => (
                  <div
                    className={`${styles.ingredientPill} ${
                      ingredientIndex === 1 ? styles.ingredientPillOrange : ""
                    }`}
                    key={ingredient.name}
                  >
                    <img
                      className={styles.ingredientImage}
                      src={ingredient.image}
                      alt=""
                      aria-hidden="true"
                    />
                    <span>{ingredient.name}</span>
                  </div>
                ))}
              </div>

              {/* Decorations */}
              <span className={`${styles.heroDecoration} ${styles.decorationOne}`}>
                +
              </span>

              <span className={`${styles.heroDecoration} ${styles.decorationTwo}`}>
                +
              </span>

              <span className={`${styles.heroDecoration} ${styles.decorationThree}`}>
                ✦
              </span>

              {/* Slide number */}
              <span className={styles.heroIndex}>
                0{dessert.id} <span>/ 04</span>
              </span>

            </article>
          );
        })}

        {/* Slide indicators */}
        <div className={styles.heroDots}>
          {desserts.map((dessert, index) => (
            <button
              key={dessert.id}
              type="button"
              className={`${styles.heroDot} ${
                activeIndex === index ? styles.heroDotActive : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${dessert.name}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
