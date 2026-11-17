import HeroSection from '@/app/components/home/HeroSection';
import StorySection from '@/app/components/home/StorySection';
import BentoGridSection from '@/app/components/home/BentoGridSection';
import FranchiseCtaSection from '@/app/components/home/FranchiseCtaSection';
import ProductSection from '@/app/components/home/ProductSection';
import ReviewSection from '@/app/components/home/ReviewSection';
import SuratMapSection from '@/app/components/home/SuratMapSection';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <HeroSection />
        <StorySection />
        <ProductSection />
        <BentoGridSection />
        
        <ReviewSection />
        <FranchiseCtaSection />
        <SuratMapSection />
      </main>
    </div>
  );
}
