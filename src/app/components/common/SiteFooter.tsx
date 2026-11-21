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

      {/* Social Media & Direct Contact Connect Bar */}
      <div className={styles.socialContactBar} aria-label="Social media and direct contact">
        <a
          href="https://www.instagram.com/51rainbowicecream"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactPill}
          aria-label="Visit 51 Rainbow on Instagram"
        >
          <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>Instagram</span>
        </a>

        <a
          href="mailto:info@51rainbowicecream.com"
          className={styles.contactPill}
          aria-label="Send email to info@51rainbowicecream.com"
        >
          <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>info@51rainbowicecream.com</span>
        </a>

        <a
          href="tel:+919624800051"
          className={styles.contactPill}
          aria-label="Call +91 96248 00051"
        >
          <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>+91 96248 00051</span>
        </a>
      </div>

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
