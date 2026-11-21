import { ContactForm } from './ContactForm';
import { ContactLocationCard } from './ContactLocationCard';
import { WHATSAPP_NUMBER } from './contact.config';
import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* Editorial Hero Header */}
        <header className={styles.heroHeader}>
          <p className={styles.eyebrow}>Get In Touch</p>
          <h1 className={styles.mainTitle}>Let’s create something sweet together.</h1>
          <p className={styles.leadText}>
            Have an occasion, catering request, or question? Send us a direct WhatsApp enquiry and our team will get back to you with warm, thoughtful guidance.
          </p>
        </header>

        {/* Two-Column Editorial Layout */}
        <div className={styles.contentLayout}>
          {/* Left Column: Context, Illustration & Minimal Contact Channels */}
          <aside className={styles.sidebarColumn}>
            <div className={styles.sidebarInfoCard}>
              <h2 className={styles.sidebarTitle}>Direct Communication</h2>
              <p className={styles.sidebarDesc}>
                We prioritize quick and friendly communication. Submitting the enquiry form opens our dedicated WhatsApp channel with your request formatted and ready to send.
              </p>

              <div className={styles.contactPoints}>
                <div className={styles.pointItem}>
                  <span className={styles.pointLabel}>Instant Messaging:</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.pointLink}
                  >
                    Chat directly on WhatsApp →
                  </a>
                </div>

                <div className={styles.pointItem}>
                  <span className={styles.pointLabel}>Headquarters:</span>
                  <span className={styles.pointValue}>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Headquarters Location Map directly below Direct Communication */}
            <ContactLocationCard />
          </aside>

          {/* Right Column: Premium Contact Form */}
          <section className={styles.formColumn} aria-label="Enquiry Form">
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
