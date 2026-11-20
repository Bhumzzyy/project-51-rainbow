import {
  GalleryCtaSection,
  GalleryHeroSection,
  GalleryImageGridSection,
} from "../components/gallery";
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.page} aria-label="Gallery">
      <GalleryHeroSection />
      <GalleryImageGridSection />
      <GalleryCtaSection />
    </main>
  );
}
