
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
    direction: "down",
    products: [products.pistachio, products.rose, products.currant, products.choco],
  },
  {
    direction: "up",
    products: [products.rose, products.currant, products.choco, products.pistachio],
  },
  {
    direction: "down",
    products: [products.currant, products.choco, products.pistachio, products.rose],
  },
] as const;

function ProductCapsule({
  product,
  columnIndex,
  rowIndex,
  direction,
  isDuplicate,
}: {
  product: (typeof products)[keyof typeof products];
  columnIndex: number;
  rowIndex: number;
  direction: "up" | "down";
  isDuplicate: boolean;
}) {
  const capsuleColor =
    (rowIndex + columnIndex) % 2 === 0
      ? styles.productCapsuleOrange
      : styles.productCapsuleCream;

  return (
    <article
      className={`${styles.productCapsule} ${capsuleColor} ${
        direction === "down" ? styles.productTrackDown : styles.productTrackUp
      }`}
      style={{
        gridColumn: columnIndex + 1,
        gridRow: rowIndex + 1,
        animationDuration: `${[28, 32, 25][columnIndex]}s`,
      }}
      role={isDuplicate ? undefined : "listitem"}
      aria-hidden={isDuplicate || undefined}
    >
      <div className={styles.productImageFrame}>
        <Image
          src={product.image}
          alt={product.name}
          width={700}
          height={850}
          className={styles.productCapsuleImage}
          sizes="(max-width: 700px) 45vw, 20vw"
        />
      </div>

      <h3 className={styles.productCapsuleName}>
        {product.name}
      </h3>
    </article>
  );
}

export default function ProductSection() {
  return (
    <section
      className={styles.productMarqueeSection}
      aria-labelledby="product-marquee-title"
    >
      <header className={styles.productMarqueeHeader}>
        <p className={styles.productMarqueeEyebrow}>
          A little joy in every bite
        </p>

        <h2
          id="product-marquee-title"
          className={styles.productMarqueeTitle}
        >
          Meet your next favourite
        </h2>

        <p className={styles.productMarqueeDescription}>
          A few of the treats that make every day a little sweeter.
        </p>
      </header>

      <div
        className={styles.productColumns}
        role="list"
        aria-label="Featured desserts"
      >
        {columns.flatMap((column, columnIndex) =>
          column.products.flatMap((product, productIndex) =>
            [false, true].map((isDuplicate) => (
              <ProductCapsule
                key={`${columnIndex}-${product.name}-${isDuplicate}`}
                product={product}
                columnIndex={columnIndex}
                rowIndex={productIndex + (isDuplicate ? column.products.length : 0)}
                direction={column.direction}
                isDuplicate={isDuplicate}
              />
            )),
          ),
        )}
      </div>
    </section>
  );
}
