
import Image from "next/image";
import styles from "./GalleryImageGridSection.module.css";

const galleryRows = [
  {
    direction: "leftToRight",
    images: [
      {
        src: "/gallary/DSC05293-640x480.webp",
        alt: "A Rainbow dessert served at the shop",
        size: "small",
      },
      {
        src: "/gallary/RAJ_9247-640x480.webp",
        alt: "The colorful 51 Rainbow storefront",
        size: "large",
      },
      {
        src: "/gallary/assorted-rainbow-ice-cream-scoops-fresh-toppings.webp",
        alt: "Assorted ice cream scoops with fresh toppings",
        size: "large",
      },
      {
        src: "/gallary/51-rainbow-creamz-premium-ice-cream-parfait-collection.webp",
        alt: "The Rainbow Creamz premium parfait collection",
        size: "medium",
      },
    ],
  },
  {
    direction: "rightToLeft",
    images: [
      {
      src: "/gallary/51falooda.webp",
      alt: "A 51 Rainbow falooda",
        size: "medium",
      },
      {
      src: "/gallary/51-rainbow-earth-shake-milkshake-natural-drink-banner.webp",
      alt: "A Rainbow milkshake",
        size: "large",
      },
      {
      src: "/gallary/51-rainbow-ice-cream-serving-happiness-fresh-live.webp",
      alt: "Freshly prepared Rainbow ice cream",
        size: "large",
      },
      {
      src: "/gallary/51scoop.webp",
      alt: "A scoop of 51 Rainbow ice cream",
        size: "small",
      },
    ],
  },
  {
    direction: "leftToRight",
    images: [
      {
      src: "/gallary/51thickshake.webp",
      alt: "A 51 Rainbow thickshake",
        size: "small",
      },
      {
      src: "/gallary/51-rainbow-ice-cream-menu-highlights-desserts.webp",
      alt: "Highlights from the 51 Rainbow dessert menu",
        size: "large",
      },
      {
      src: "/gallary/RAJ_9321-640x480.webp",
      alt: "A sweet moment at 51 Rainbow",
        size: "large",
      },
      {
      src: "/gallary/51-rainbow-ice-cream-shop-front-colorful-decor.webp",
      alt: "Colorful decor at a 51 Rainbow shop",
        size: "medium",
      },
    ],
  },
] as const;

export default function GalleryImageGridSection() {
  return (
    <section
      id="gallery-images"
      className={styles.section}
      aria-labelledby="gallery-grid-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>A taste of the fun</p>

        <h2 id="gallery-grid-title" className={styles.title}>
          Moments in every shade
        </h2>

        <p className={styles.description}>
          From first scoops to favorite flavors, here&apos;s a little look at
          life with Rainbow.
        </p>
      </div>

      <div className={styles.gallery}>
        {galleryRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.row} ${
              row.direction === "leftToRight"
                ? styles.leftToRight
                : styles.rightToLeft
            }`}
          >
            <div className={styles.track}>
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className={styles.group}
                  aria-hidden={copy === 1}
                >
                  {row.images.map((image, imageIndex) => (
                    <figure
                      key={`${copy}-${image.src}-${imageIndex}`}
                      className={`${styles.card} ${
                        styles[image.size]
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={copy === 0 ? image.alt : ""}
                        fill
                        sizes="(max-width: 700px) 75vw, 35vw"
                        className={styles.image}
                      />
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
