import Image from "next/image";
import IngredientImageGrid from "./IngredientImageGrid";
import styles from "./BentoGridSection.module.css";

const faloodaImages = [
  "/home/falooda-1.webp",
  "/home/falooda-2.webp",
  "/home/falooda-3.webp",
] as const;

const faloodaImageClasses = [
  styles.drinkImageFirst,
  styles.drinkImageSecond,
  styles.drinkImageThird,
];

export default function BentoGridSection() {
  return (
    <section className={styles.section} aria-labelledby="bento-grid-title">
      <h2 id="bento-grid-title" className={styles.title}>
        A little taste of Rainbow
      </h2>
      <div className={styles.grid}>
        <div className={styles.brandTile} data-bento-slot="brand">
          <div
            className={styles.brandMarquee}
            role="img"
            aria-label="51 Rainbow"
          >
            <div className={styles.brandMarqueeTrack} aria-hidden="true">
              <span>51 RAINBOW</span>
              <span>51 RAINBOW</span>
            </div>
          </div>
        </div>
        <div className={styles.socialTile} data-bento-slot="social">
          <article
            className={styles.instagramPost}
            aria-label="Instagram post featuring Kesar-Pista Ice Cream Scoop"
          >
            <header className={styles.postHeader}>
              <span className={styles.postAvatar} aria-hidden="true">
                51
              </span>
              <span className={styles.postUsername}>51rainbow</span>
              <span className={styles.postMore} aria-hidden="true">
                ···
              </span>
            </header>
            <div className={styles.postImageFrame}>
              <Image
                src="/home/kesar-pista-scoop.png"
                alt="Kesar-pista ice cream scoop in a 51 Rainbow cup"
                fill
                sizes="(max-width: 700px) 25vw, 22vw"
                className={styles.postProductImage}
              />
              <span className={styles.postSparkle} aria-hidden="true">
                ✦
              </span>
            </div>
            <div className={styles.postActions} aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H7l-4 2v-5.5A7.5 7.5 0 1 1 20 11.5Z" />
              </svg>
              <svg viewBox="0 0 24 24">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
              <svg className={styles.postBookmark} viewBox="0 0 24 24">
                <path d="M6 3h12v18l-6-4-6 4Z" />
              </svg>
            </div>
            <p className={styles.postCaption}>
              <strong>51rainbow</strong> Kesar-Pista Ice Cream Scoop
            </p>
          </article>
          <span className={styles.postLikeBadge} aria-hidden="true">
            ♥
          </span>
        </div>
        <div className={styles.ingredientsTile} data-bento-slot="ingredients">
          <IngredientImageGrid />
        </div>
        <div className={styles.featureTile} data-bento-slot="feature">
          <Image
            src="/home/mango-lic.gif"
            alt="Mango lassi"
            fill
            unoptimized
            sizes="(max-width: 700px) 42vw, 40vw"
            className={styles.featureImage}
          />
        </div>
        <div className={styles.sloganTile} data-bento-slot="slogan">
          <div className={styles.sloganImageFrame}>
            <Image
              src="/home/icecream-slang.webp"
              alt="Single Ho? Double Scoop Khao! ice cream slogan"
              fill
              sizes="(max-width: 700px) 29vw, 29vw"
              className={styles.sloganImage}
            />
          </div>
        </div>
        <div className={styles.drinkTile} data-bento-slot="drink">
          <div
            className={styles.drinkImageFrame}
            role="img"
            aria-label="Falooda in a 51 Rainbow cup"
          >
            {faloodaImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt=""
                aria-hidden="true"
                fill
                sizes="(max-width: 900px) 27vw, 27vw"
                className={`${styles.drinkImage} ${faloodaImageClasses[index]}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.lifestyleTile} data-bento-slot="lifestyle">
          <Image
            src="/home/ddlj.webp"
            alt="Illustrated DDLJ-inspired comic featuring 51 Rainbow ice cream"
            fill
            sizes="(max-width: 700px) 71vw, 70vw"
            className={styles.lifestyleImage}
          />
        </div>
      </div>
    </section>
  );
}
