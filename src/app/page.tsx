import { HeroSection, StorySection, ProductSection } from '@/app/components';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
        {/* <StorySection /> */}
        {/* <ProductSection /> */}
      </main>
    </div>
  );
}
