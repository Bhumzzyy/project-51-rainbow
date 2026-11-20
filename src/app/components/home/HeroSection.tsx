"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const desserts = [
  {
    id: 1,
    name: "Red Rose Falooda",
    description: "Enjoy the refreshing taste of Red Rose Falooda, a delightful blend of rose flavour and classic falooda goodness, perfect for satisfying your sweet cravings.",
    image: "/home/hero/dessert-1.webp",
    elements: [
      { name: "Rose syrup", image: "/home/hero/syrup.webp" },
      { name: "Falooda sev", image: "/home/hero/vsev.webp" },
      { name: "Fresh cream", image: "/home/hero/cream.webp" },
    ],
  },
  {
    id: 2,
    name: "Cookies & Cream Thickshake",
    description: "A creamy blend of cookies and smooth cream, our Cookies & Cream Thickshake is a delicious treat for every dessert lover.",
    image: "/home/hero/dessert-2.webp",
    elements: [
      { name: "Chocolate cookies", image: "/home/hero/crumble.webp" },
      { name: "Creamy milk", image: "/home/hero/milk.webp" },
      { name: "Fresh cream", image: "/home/hero/cream.webp" },
    ],
  },
  {
    id: 3,
    name: "Chocolate Chips Coco",
    description: "A chocolate lover's delight, Chocolate Chips Coco combines rich chocolate flavour with crunchy chocolate chips for a delicious dessert experience.",
    image: "/home/hero/dessert-3.webp",
    elements: [
      { name: "Chocolate chips", image: "/home/hero/chips.webp" },
      { name: "Cocoa", image: "/home/hero/cocop.webp" },
      { name: "Creamy milk", image: "/home/hero/milk.webp" },
    ],
  },
  {
    id: 4,
    name: "Badam Shake",
    description: "Enjoy the classic goodness of Badam Shake, a delicious and creamy almond-flavoured drink perfect for every occasion.",
    image: "/home/hero/dessert-4.webp",
    elements: [
      { name: "Almonds", image: "/home/hero/alamonds.webp" },
      { name: "Creamy milk", image: "/home/hero/milk.webp" },
      { name: "Fresh cream", image: "/home/hero/cream.webp" },
    ],
  },
  {
    id: 5,
    name: "Mango Smoothie",
    description: "Hello, sunshine in a glass! A fruity, velvety mango delight bursting with tropical sweetness.",
    image: "/home/hero/dessert-5.webp",
    elements: [
      { name: "Mango", image: "/home/hero/mangos.webp" },
      { name: "Creamy milk", image: "/home/hero/milk.webp" },
      { name: "Fresh cream", image: "/home/hero/cream.webp" },
    ],
  },
];

const backgrounds = desserts.map((dessert) => `/home/hero/bg-${dessert.id}.webp`);

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

        {/* Background Images */}
        {backgrounds.map((background, index) => (
          <div
            key={background}
            className={`${styles.heroBackground} ${
              activeIndex === index ? styles.heroBackgroundActive : ""
            }`}
            style={{
              backgroundImage: `url("${background}")`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Dessert Slides */}
        {desserts.map((dessert, index) => {
          const isActive = activeIndex === index;

          return (
            <article
              key={dessert.id}
              className={`${styles.dessertHero} ${
                isActive ? styles.dessertHeroActive : ""
              }`}
              data-dessert-id={dessert.id}
              aria-hidden={!isActive}
            >
              <div className={styles.heroCopy}>
                <h1>{dessert.name}</h1>
                <p>{dessert.description}</p>
              </div>

              {/* Center Product Image */}
              <div className={styles.heroProduct}>
                <div className={styles.productGlow} />

                <img
                  src={dessert.image}
                  alt={dessert.name}
                  className={styles.dessertImage}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <ul className={styles.heroElements} aria-label={`${dessert.name} elements`}>
                {dessert.elements.map((element) => (
                  <li className={styles.heroElement} key={element.name}>
                    <span className={styles.heroElementImage}>
                      <img src={element.image} alt="" />
                    </span>
                    <span className={styles.heroElementName}>{element.name}</span>
                  </li>
                ))}
              </ul>

              {/* Slide Number */}
              {/* <span className={styles.heroIndex}>
                0{dessert.id} <span>/ {String(desserts.length).padStart(2, "0")}</span>
              </span> */}

            </article>
          );
        })}

      </div>
    </section>
  );
}
