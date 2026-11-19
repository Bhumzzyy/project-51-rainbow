import Image from "next/image";
import styles from "./BentoGridSection.module.css";

export default function BentoGridSection() {
  return (
    <section className={styles.section} aria-labelledby="bento-grid-title">
      <h2 id="bento-grid-title" className={styles.title}>
        A little taste of Rainbow
      </h2>
      <div className={styles.grid}>
        <div className={styles.brandTile} data-bento-slot="brand" >
          <Image
            src="/home/bento/merchandise.webp"
            alt="51 Rainbow merchandise collection"
            fill
            sizes="(max-width: 1200px) 70vw, 840px"
            className={styles.lifestyleImage}
          />
        </div>
        <div className={styles.socialTile} data-bento-slot="social" >
          <Image
            src="/home/bento/rd1.webp"
            alt="Chocolate banana waffle"
            fill
            sizes="(max-width: 1200px) 29vw, 348px"
            className={styles.sloganImage}
          /></div>
        <div className={styles.ingredientsTile} data-bento-slot="ingredients">
          <Image
            src="/home/bento/t5.webp"
            alt="Chocolate banana waffle"
            fill
            sizes="(max-width: 1200px) 29vw, 348px"
            className={styles.sloganImage}
          />
        </div>
        <div className={styles.featureTile} data-bento-slot="feature">
          <div className={styles.featureImageFrame}>
            <Image
              src="/home/bento/h-cream.webp"
              alt="51 Rainbow"
              fill
              sizes="(max-width: 500px) 34vw, 32vw"
              className={styles.featureImage}
            />
          </div>
        </div>
        <div className={styles.sloganTile} data-bento-slot="slogan">
          <Image
            src="/home/bento/mango-lic.gif"
            alt="Mango ice cream"
            fill
            sizes="(max-width: 1000px) 25vw, 345px"
            unoptimized
            className={styles.sloganGif}
          />
        </div>
        <div className={styles.drinkTile} data-bento-slot="drink">
          <Image
            src="/home/bento/l-icecream.webp"
            alt="Rainbow ice cream"
            fill
            sizes="(max-width: 1200px) 27vw, 324px"
            className={styles.ingredientsImage}
          />
        </div>
        <div className={styles.lifestyleTile} data-bento-slot="lifestyle">
          
          <Image
            src="/home/bento/bh1.webp"
            alt="51 Rainbow merchandise collection"
            fill
            sizes="(max-width: 1200px) 70vw, 840px"
            className={`${styles.lifestyleImage} ${styles.lifestyleImageFirst}`}
          />
          <Image
            src="/home/bento/bh2.webp"
            alt="51 Rainbow merchandise collection"
            fill
            sizes="(max-width: 1200px) 70vw, 840px"
            className={`${styles.lifestyleImage} ${styles.lifestyleImageSecond}`}
          />
        </div>
      </div>
    </section>
  );
}
