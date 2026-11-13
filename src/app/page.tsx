import HeroSection from '@/app/components/home/HeroSection';
import StorySection from '@/app/components/home/StorySection';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
        <StorySection />
        {/* <ProductSection /> */}
      </main>
    </div>
  );
}
