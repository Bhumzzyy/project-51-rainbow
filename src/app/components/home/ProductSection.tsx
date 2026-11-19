
import Image from "next/image";
import styles from "./ProductSection.module.css";

const products = {
  pistachio: "Pistachio Kunafa Brownie",
  rose: "Red Rose Falooda",
  currant: "Black Currant Thickshake",
  choco: "Choco Chips Coco",
};

const columns = [
  {
    direction: "down",
    products: [
      { name: products.pistachio, image: "/home/product/a1.webp" },
      { name: products.rose, image: "/home/product/a2.webp" },
      { name: products.currant, image: "/home/product/a3.webp" },
      { name: products.choco, image: "/home/product/a4.webp" },
      { name: products.rose, image: "/home/product/a5.webp" },
    ],
  },
  {
    direction: "up",
    products: [
      { name: products.rose, image: "/home/product/b1.webp" },
      { name: products.currant, image: "/home/product/b2.webp" },
      { name: products.choco, image: "/home/product/b3.webp" },
      { name: products.pistachio, image: "/home/product/b4.webp" },
      { name: products.currant, image: "/home/product/b5.webp" },
    ],
  },
  {
    direction: "down",
    products: [
      { name: products.currant, image: "/home/product/c1.webp" },
      { name: products.choco, image: "/home/product/c2.webp" },
      { name: products.pistachio, image: "/home/product/c3.webp" },
      { name: products.rose, image: "/home/product/c4.webp" },
      { name: products.choco, image: "/home/product/c5.webp" },
    ],
  },
] as const;

function ProductCapsule({
  product,
  columnIndex,
  rowIndex,
  colorIndex,
  direction,
  isDuplicate,
}: {
  product: { name: string; image: string };
  columnIndex: number;
  rowIndex: number;
  colorIndex: number;
  direction: "up" | "down";
  isDuplicate: boolean;
}) {
  const capsuleColor =
    (colorIndex + columnIndex) % 2 === 0
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
          loading={isDuplicate ? "lazy" : "eager"}
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
                key={`${columnIndex}-${productIndex}-${isDuplicate}`}
                product={product}
                columnIndex={columnIndex}
                rowIndex={productIndex + (isDuplicate ? column.products.length : 0)}
                colorIndex={productIndex}
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
