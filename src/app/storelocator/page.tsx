import { StoreLocatorPage } from '@/app/components';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.page} data-page-root>
      <StoreLocatorPage />
    </div>
  );
}
