import Image from "next/image";
import styles from "./ProductSection.module.css";

const products = {
  pistachio: {
    name: "Pistachio Kunafa Brownie",
    image: "/home/dessert-1.webp",
  },
  rose: {
    name: "Red Rose Falooda",
    image: "/home/dessert-2.webp",
  },
  currant: {
    name: "Black Currant Thickshake",
    image: "/home/dessert-3.webp",
  },
  choco: {
    name: "Choco Chips Coco",
    image: "/home/dessert-4.webp",
  },
};

const columns = [
  {
    direction: "up",
    label: "Desserts scrolling upward",
    products: [products.pistachio, products.rose, products.currant, products.choco],
  },
  {
    direction: "down",
    label: "Desserts scrolling downward",
    products: [products.currant, products.choco, products.pistachio, products.rose],
  },
  {
    direction: "up",
    label: "More desserts scrolling upward",
    products: [products.rose, products.choco, products.pistachio, products.currant],
  },
] as const;

function ProductCapsule({
  product,
  index,
}: {
  product: (typeof products)[keyof typeof products];
  index: number;
}) {
  const capsuleColor = index % 2 === 0 ? styles.productCapsuleOrange : styles.productCapsuleCream;

  return (
    <article className={`${styles.productCapsule} ${capsuleColor}`}>
      <div className={styles.productImageFrame}>
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={850}
          className={styles.productCapsuleImage}
          sizes="(max-width: 700px) 28vw, 26vw"
        />
      </div>
      <h3 className={styles.productCapsuleName}>{product.name}</h3>
    </article>
  );
}

export default function ProductSection() {
  return (
    <section className={styles.productMarqueeSection} aria-labelledby="product-marquee-title">
      <header className={styles.productMarqueeHeader}>
        <p className={styles.productMarqueeEyebrow}>A little joy in every bite</p>
        <h2 id="product-marquee-title" className={styles.productMarqueeTitle}>
          Meet your next favourite
        </h2>
        <p className={styles.productMarqueeDescription}>
          A few of the treats that make every day a little sweeter.
        </p>
      </header>

      <div className={styles.productColumns}>
        {columns.map((column, columnIndex) => (
          <div
            className={styles.productColumn}
            key={column.label}
            role="group"
            aria-label={column.label}
          >
            <div
              className={`${styles.productTrack} ${
                column.direction === "down" ? styles.productTrackDown : ""
              }`}
            >
              <div className={styles.productSequence} role="list">
                {column.products.map((product, index) => (
                  <div key={`${product.name}-${index}`} role="listitem">
                    <ProductCapsule product={product} index={index + columnIndex} />
                  </div>
                ))}
              </div>
              <div className={styles.productSequence} aria-hidden="true">
                {column.products.map((product, index) => (
                  <div key={`repeat-${product.name}-${index}`}>
                    <ProductCapsule product={product} index={index + columnIndex} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
