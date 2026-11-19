import Image from "next/image";
import styles from "./BentoGridSection.module.css";

export default function BentoGridSection() {
  return (
    <section className={styles.section} aria-labelledby="bento-grid-title">
      <h2 id="bento-grid-title" className={styles.title}>
        A little taste of Rainbow
      </h2>
      <div className={styles.grid}>
        <div className={styles.brandTile} data-bento-slot="brand" />
        <div className={styles.socialTile} data-bento-slot="social" />
        <div className={styles.ingredientsTile} data-bento-slot="ingredients" />
        <div className={styles.featureTile} data-bento-slot="feature">
          <Image
            src="/home/bento/logo.webp"
            alt="51 Rainbow logo"
            fill
            sizes="(max-width: 700px) 42vw, 40vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.sloganTile} data-bento-slot="slogan" />
        <div className={styles.drinkTile} data-bento-slot="drink" />
        <div className={styles.lifestyleTile} data-bento-slot="lifestyle" />
      </div>
    </section>
  );
}
