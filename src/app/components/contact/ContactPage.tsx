import Image from 'next/image';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Contact us</p>
          <h1>Let’s create something delicious together.</h1>
          <p className={styles.lead}>
            Share your occasion, flavor ideas, or partnership inquiry and our team will get back to you with warm, thoughtful guidance.
          </p>
        </div>

        <div className={styles.imageWrap}>
          <Image src="/contact/contact-illustration.svg" alt="Contact and support illustration" width={520} height={420} />
        </div>
      </section>

      <section className={styles.contactGrid}>
        <div className={styles.infoCard}>
          <h3>Email</h3>
          <p>hello@rainbowstudio.com</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className={styles.infoCard}>
          <h3>Hours</h3>
          <p>Mon-Sat, 9:00 AM - 8:00 PM</p>
        </div>
      </section>
    </main>
  );
}
