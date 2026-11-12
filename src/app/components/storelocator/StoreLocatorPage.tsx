import Image from 'next/image';
import styles from './StoreLocatorPage.module.css';

export default function StoreLocatorPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Store locator</p>
          <h1>Find the Rainbow experience near you.</h1>
          <p className={styles.lead}>
            Visit our signature stores and discover handcrafted sweets, custom cakes, and a warm in-person experience built around celebration.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/storelocator/store-map.svg" alt="Store locator map" width={520} height={420} />
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.locationCard}>
          <h3>Downtown</h3>
          <p>12 Market Street, City Center</p>
        </div>
        <div className={styles.locationCard}>
          <h3>North Avenue</h3>
          <p>48 Garden Boulevard, North Town</p>
        </div>
        <div className={styles.locationCard}>
          <h3>Harbor Lane</h3>
          <p>91 Waterfront Road, Coastal District</p>
        </div>
      </section>
    </main>
  );
}
