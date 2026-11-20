import React from "react";
import { ContactForm } from "../contact/ContactForm";
import { INVESTOR_FORM_CONFIG } from "../contact/forms.config";
import styles from "../contact/ContactPage.module.css";

export default function InvestorsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Editorial Hero Header directly on warm cream background (white box removed) */}
        <header className={styles.heroHeader}>
          <p className={styles.eyebrow}>Investors</p>
          <h1 className={styles.mainTitle}>A growing legacy, shared with the future.</h1>
          <p className={styles.leadText}>
            Find company information, growth updates, and investor resources here. Connect with our corporate team regarding investment partnerships, franchise expansion, and growth initiatives.
          </p>

          {/* Decorative Brand Accent Badges */}
          <div className={styles.badgeRow}>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Strategic Expansion
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Franchise Growth
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              100% Real Dairy Heritage
            </span>
          </div>
        </header>

        {/* Snug, perfectly proportioned centered enquiry form */}
        <section
          className={styles.standaloneFormContainer}
          aria-label="Investor Enquiries"
        >
          <ContactForm config={INVESTOR_FORM_CONFIG} />
        </section>
      </div>
    </main>
  );
}
