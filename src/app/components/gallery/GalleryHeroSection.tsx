
import styles from "./GalleryHeroSection.module.css";

export default function GalleryHeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="gallery-hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>The 51 Rainbow Gallery</p>

        <h1 id="gallery-hero-title" className={styles.title}>
          A little color.
          <span>A lot of joy.</span>
        </h1>

        <p className={styles.description}>
          A little peek into our world of colorful scoops, delicious sips,
          and unforgettable sweet moments. There&apos;s always something
          worth smiling about!
        </p>
      </div>
    </section>
  );
}
