import type { Metadata } from 'next';
import { StoreLocatorPage } from '@/app/components';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Find 51 Rainbow Ice Cream Near You | Store Locator in Surat, Gujarat',
  description:
    'Locate 51 Rainbow Ice Cream parlours across Surat, Bardoli, Dumas, and Kim. Handcrafted artisan scoops, royal faloodas, thickshakes, and cold coco near you.',
  openGraph: {
    title: 'Find 51 Rainbow Ice Cream Near You | Store Locator in Surat, Gujarat',
    description:
      'Locate 51 Rainbow Ice Cream parlours across Surat, Bardoli, Dumas, and Kim. Handcrafted artisan scoops, royal faloodas, thickshakes, and cold coco near you.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Find 51 Rainbow Ice Cream Near You | Store Locator in Surat, Gujarat',
    description:
      'Locate 51 Rainbow Ice Cream parlours across Surat, Bardoli, Dumas, and Kim. Handcrafted artisan scoops, royal faloodas, thickshakes, and cold coco near you.',
  },
};

export default function Page() {
  return (
    <div className={styles.page} data-page-root>
      <StoreLocatorPage />
    </div>
  );
}
