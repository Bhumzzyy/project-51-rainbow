import Image from 'next/image';
import styles from './LegacyPage.module.css';

export default function LegacyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Our legacy</p>
          <h1>A story made with care and consistency.</h1>
          <p className={styles.lead}>
            Built on family values, quality ingredients, and a commitment to creating joyful experiences that stay with customers for years.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/legacy/legacy-gallery.svg" alt="Legacy story artwork" width={540} height={420} />
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineItem}>
          <span>2010</span>
          <h3>First bakery kitchen</h3>
          <p>Started with a small vision: crafting beautifully made sweets with sincerity.</p>
        </div>
        <div className={styles.timelineItem}>
          <span>2016</span>
          <h3>Expanded collections</h3>
          <p>Introduced custom celebration cakes and seasonal gifting ranges.</p>
        </div>
        <div className={styles.timelineItem}>
          <span>2024</span>
          <h3>Trusted community brand</h3>
          <p>Celebrated thousands of happy moments, one handcrafted dessert at a time.</p>
        </div>
      </section>
    </main>
  );
}
