import Image from 'next/image';
import styles from './ProductPage.module.css';

export default function ProductPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Our products</p>
          <h1>Colorful creations for every craving.</h1>
          <p className={styles.lead}>
            Discover handcrafted products designed to feel rich, premium, and joyful—from celebration cakes to elegant dessert gifting sets.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/product/product-showcase.svg" alt="Product showcase illustration" width={520} height={420} />
        </div>
      </section>

      <section className={styles.productGrid}>
        <article className={styles.card}>
          <h3>Celebration Cakes</h3>
          <p>Custom-made for birthdays, anniversaries, and grand occasions.</p>
        </article>
        <article className={styles.cardAlt}>
          <h3>Gourmet Bites</h3>
          <p>Thoughtfully crafted desserts made for gifting and shared moments.</p>
        </article>
        <article className={styles.card}>
          <h3>Seasonal Specials</h3>
          <p>Limited-edition sweets that celebrate festive flavors and joyful transitions.</p>
        </article>
      </section>
    </main>
  );
}
