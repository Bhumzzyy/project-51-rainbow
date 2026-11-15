import Link from "next/link";
import styles from "./SuratMapSection.module.css";

const demoPins = [
  { left: 12, top: 16 },
  { left: 27, top: 12 },
  { left: 46, top: 17 },
  { left: 68, top: 12 },
  { left: 86, top: 19 },
  { left: 10, top: 38 },
  { left: 31, top: 34 },
  { left: 53, top: 38 },
  { left: 76, top: 34 },
  { left: 90, top: 48 },
  { left: 19, top: 59 },
  { left: 42, top: 56 },
  { left: 66, top: 61 },
  { left: 82, top: 70 },
  { left: 28, top: 80 },
  { left: 58, top: 82 },
];

export default function SuratMapSection() {
  return (
    <section className={styles.section} aria-labelledby="surat-map-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Find your Rainbow</p>
        <h2 id="surat-map-title" className={styles.title}>
          Follow the <span>Rainbow.</span>
        </h2>
        <p className={styles.subtitle}>
          Your favourite treats. Your next sweet stop.
        </p>
      </header>

      <div className={styles.mapFrame}>
        <div className={styles.mapCanvas}>
          <iframe
            title="Map preview of Surat"
            src="https://www.openstreetmap.org/export/embed.html?bbox=72.75%2C21.10%2C72.91%2C21.24&layer=mapnik"
            loading="lazy"
          />
          <div className={styles.pins} aria-hidden="true">
            {demoPins.map(({ left, top }, index) => (
              <span
                className={styles.pin}
                key={index}
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                51
              </span>
            ))}
          </div>
          <p className={styles.attribution}>
            © OpenStreetMap contributors · Illustrative map preview
          </p>
        </div>
      </div>

      <p className={styles.note}>
        Illustrative locations · Pins are for display only, not verified store
        locations.
      </p>
      <Link href="/storelocator" className={styles.button}>
        View Store Locator <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
