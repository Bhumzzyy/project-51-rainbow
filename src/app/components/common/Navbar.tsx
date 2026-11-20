
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const leftNavItems = [
  { label: 'Legacy', href: '/legacy' },
  { label: 'Product', href: '/product' },
  { label: 'Gallery', href: '/gallery' },
];

const rightNavItems = [
  { label: 'Franchise', href: '/franchise' },
  { label: 'Store Locator', href: '/storelocator' },
];

const mobileNavItems = [
  { label: 'Home', href: '/' },
  ...leftNavItems,
  ...rightNavItems,
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.leftNav} aria-label="Left navigation">
          {leftNavItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className={styles.brand}
          aria-label="Rainbow Home"
        >
          <Image
            src="/home/nav-foot/h-cream.webp"
            alt="Rainbow Ice Cream"
            width={579}
            height={105}
            sizes="(max-width: 480px) 140px, (max-width: 1000px) 160px, 240px"
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.rightNav} aria-label="Right navigation">
          {rightNavItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.contact}>
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className={styles.menuIconLine} />
          <span className={styles.menuIconLine} />
          <span className={styles.menuIconLine} />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
      >
        {mobileNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className={`${styles.contact} ${styles.mobileContact}`}
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
