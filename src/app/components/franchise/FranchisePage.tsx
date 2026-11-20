
import styles from "./FranchisePage.module.css";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Add your actual WhatsApp number

const whatsappMessage =
  "Hi 51 Rainbow! I'm interested in exploring a franchise opportunity. I'd love to know more.";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const reasons = [
  {
    title: "A colourful brand",
    description:
      "Bring vibrant flavours, happy moments, and the Rainbow experience to your city.",
  },
  {
    title: "Something for everyone",
    description:
      "From creamy ice creams to refreshing faloodas and delicious thickshakes.",
  },
  {
    title: "A sweeter opportunity",
    description:
      "Explore the opportunity to build your own business with 51 Rainbow.",
  },
];

export default function FranchisePage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Love desserts?
            <span className={styles.orangeText}>
              Let&apos;s make it a business!
            </span>
          </h1>

          <p className={styles.heroDescription}>
            Have a sweet spot for entrepreneurship? Bring the joy of 51 Rainbow
            to your city and become a part of our growing dessert-loving family.
          </p>
        </div>
      </section>

      {/* WHY 51 RAINBOW */}
      <section className={styles.whySection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHY 51 RAINBOW?</p>
          <h2>
            A sweet brand.
            <span>A sweeter opportunity.</span>
          </h2>
          <p>
            More than desserts, it&apos;s about sharing happiness,
            one scoop at a time.
          </p>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((reason) => (
            <article className={styles.reasonCard} key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.cta}>
        <span className={styles.ctaShape} aria-hidden="true">
          ✳
        </span>

        <p className={styles.ctaEyebrow}>YOUR RAINBOW JOURNEY STARTS HERE</p>

        <h2>
          Got a sweet
          <span>business dream?</span>
        </h2>

        <p className={styles.ctaDescription}>
          Let&apos;s turn that dream into something delicious.
          Drop us a message and let&apos;s get talking!
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Chat with us on WhatsApp <span>↗</span>
        </a>
      </section>
    </main>
  );
}
