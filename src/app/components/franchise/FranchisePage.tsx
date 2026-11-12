import Image from 'next/image';
import styles from './FranchisePage.module.css';

export default function FranchisePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Franchise with us</p>
          <h1>Turn your passion into a thriving sweet business.</h1>
          <p className={styles.lead}>
            Bring the Rainbow experience to new communities with a proven model, supportive guidance, and a brand built around joy, quality, and memorable taste.
          </p>
          <a href="#details" className={styles.primaryButton}>Become a partner</a>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/franchise/franchise-illustration.svg" alt="Franchise business concept" width={520} height={420} />
        </div>
      </section>

      <section id="details" className={styles.benefits}>
        <div className={styles.benefitCard}>
          <h3>Brand support</h3>
          <p>Access a recognized identity, creative guidance, and launch assistance.</p>
        </div>
        <div className={styles.benefitCard}>
          <h3>Operational training</h3>
          <p>Learn our process, standards, and product quality expectations from day one.</p>
        </div>
        <div className={styles.benefitCard}>
          <h3>Growth opportunity</h3>
          <p>Build a local business with a premium product mix and strong customer loyalty.</p>
        </div>
      </section>
    </main>
  );
}
