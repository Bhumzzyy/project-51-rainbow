import React from "react";
import { ContactForm } from "../contact/ContactForm";
import { CAREER_FORM_CONFIG } from "../contact/forms.config";
import styles from "../contact/ContactPage.module.css";

export default function CareerPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Editorial Hero Header directly on warm cream background (white box removed) */}
        <header className={styles.heroHeader}>
          <p className={styles.eyebrow}>Careers</p>
          <h1 className={styles.mainTitle}>Bring your talent to Rainbow.</h1>
          <p className={styles.leadText}>
            Explore career opportunities, team culture, and how to join our growing family. Submit your details below to connect with our talent team directly on WhatsApp.
          </p>

          {/* Decorative Brand Accent Badges */}
          <div className={styles.badgeRow}>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Artisanal Craftsmanship
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Growth & Mentorship
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Joyful Culture
            </span>
          </div>
        </header>

        {/* Snug, perfectly proportioned centered career form */}
        <section
          className={styles.standaloneFormContainer}
          aria-label="Career Applications"
        >
          <ContactForm config={CAREER_FORM_CONFIG} />
        </section>
      </div>
    </main>
  );
}
