import Link from "next/link";
import styles from "./FranchiseCtaSection.module.css";

export default function FranchiseCtaSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="franchise-cta-title"
    >
      <span className={`${styles.sparkle} ${styles.sparkleLeft}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleTop}`} aria-hidden="true">
        ✦
      </span>
      <div className={styles.card}>
        <h2 id="franchise-cta-title" className={styles.title}>
          Let&apos;s Make Life a
          <span>Little Sweeter!</span>
        </h2>
        <p className={styles.description}>
          Got a sweet tooth for success? Let&apos;s spread the Rainbow magic
          together and serve up smiles, one scoop at a time.
        </p>
        <Link href="/franchise" className={styles.button}>
          Join the Rainbow Family
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      <span
        className={`${styles.sparkle} ${styles.sparkleUpperRight}`}
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className={`${styles.sparkle} ${styles.sparkleBottomLeft}`}
        aria-hidden="true"
      >
        ✦
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleRight}`} aria-hidden="true">
        ✦
      </span>
    </section>
  );
}
