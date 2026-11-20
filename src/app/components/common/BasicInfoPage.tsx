import Link from "next/link";
import styles from "./BasicInfoPage.module.css";

interface BasicInfoPageProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function BasicInfoPage({
  eyebrow,
  title,
  description,
}: BasicInfoPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="info-page-title">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 id="info-page-title">{title}</h1>
        <p className={styles.lead}>{description}</p>
      </section>

      <section className={styles.notice} aria-labelledby="info-page-notice">
        <div>
          <p className={styles.noticeEyebrow}>Coming soon</p>
          <h2 id="info-page-notice">More information is on its way.</h2>
          <p className={styles.noticeText}>
            We are preparing details for this page. Contact us if you need help
            in the meantime.
          </p>
        </div>
        <Link href="/contact" className={styles.contactLink}>
          Contact us
        </Link>
      </section>
    </main>
  );
}