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

const additionalFooterLinks = [
  { label: "Investors", href: "/investors" },
  { label: "Career", href: "/career" },
  { label: "Merchandise", href: "/merchandise" },
  { label: "Rainbow Club", href: "/rainbow-club" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "The Team", href: "/team" },
];

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brandStage}>
        <div className={styles.brandLockup}>
          <Link href="/" className={styles.brandLogo} aria-label="51 Rainbow home">
            <Image
              src="/home/nav-foot/h-orange.webp"
              alt="51 Rainbow Ice Cream"
              width={579}
              height={105}
              sizes="(max-width: 1088px) 90vw, 980px"
              className={styles.brandLogoImage}
            />
          </Link>
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
        <div className={styles.footerLinkRow}>
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className={`${styles.footerLinkRow} ${styles.footerLinkRowAdditional}`}>
          {additionalFooterLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.footerLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className={styles.legalBar}>
        <Link href="/terms-and-conditions" className={styles.legalLink}>
          Terms and Conditions
        </Link> 
        <p className={styles.credit}>
        Developed by{" "}
        <a
          href="https://the3rdlayers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.purple}>Brew</span>{" "}
          <span className={styles.orange}>My</span>{" "}
          <span className={styles.purple}>Socials</span>{" "}
          X{" "}
          <span className={styles.purple}>THE</span>{" "}
          <span className={styles.orange}>THREE</span>{" "}
          <span className={styles.purple}>LAYERS</span>
        </a>
        </p>
      </div>
    </footer>
  );
}
