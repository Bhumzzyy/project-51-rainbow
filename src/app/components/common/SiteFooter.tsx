import Image from "next/image";
import Link from "next/link";
import styles from "./SiteFooter.module.css";

const footerPeople = [
  {
    src: "/home/footer-4.webp",
    className: styles.personLeft,
    width: 768,
    height: 1376,
  },
  {
    src: "/home/footer-3.webp",
    className: styles.personMiddle,
    width: 768,
    height: 1376,
  },
  {
    src: "/home/footer-1.webp",
    className: styles.personCouple,
    width: 928,
    height: 1152,
  },
  {
    src: "/home/footer-2.webp",
    className: styles.personRight,
    width: 768,
    height: 1376,
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Legacy", href: "/legacy" },
  { label: "Product", href: "/product" },
  { label: "Franchise", href: "/franchise" },
  { label: "Store Locator", href: "/storelocator" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandStage}>
        <div className={styles.brandLockup}>
          <Link href="/" className={styles.brandName} aria-label="51 Rainbow home">
            51 RAINBOW
            <sup aria-hidden="true">®</sup>
          </Link>
          <p className={styles.brandTagline}>ICE CREAM</p>
        </div>

        {footerPeople.map((person) => (
          <Image
            key={person.src}
            src={person.src}
            alt=""
            aria-hidden="true"
            width={person.width}
            height={person.height}
            sizes="(max-width: 640px) 16vw, 10vw"
            className={`${styles.person} ${person.className}`}
          />
        ))}
      </div>

      <nav className={styles.footerNav} aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.footerLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.legalBar}>
        <p>© 51 Rainbow Ice Cream. All rights reserved.</p>
        <p>Until the next scoop.</p>
      </div>
    </footer>
  );
}
