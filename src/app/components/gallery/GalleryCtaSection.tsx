import Link from "next/link";
import styles from "./GalleryCtaSection.module.css";

export default function GalleryCtaSection() {
  return (
    <section className={styles.section} aria-labelledby="gallery-cta-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Your next sweet moment</p>
        <h2 id="gallery-cta-title" className={styles.title}>
          Come make memories with us.
        </h2>
        <p className={styles.description}>
          Find your favorite flavor and make your next visit a little more
          colorful.
        </p>
        <Link href="/contact" className={styles.button}>
          Get in touch
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
