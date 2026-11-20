import React from 'react';
import { STORES } from '@/data/stores';
import { StoreLocator } from './StoreLocator';
import styles from './StoreLocatorPage.module.css';

export default function StoreLocatorPage() {
  // Construct JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '51 Rainbow Ice Cream Outlets',
    description: 'Complete directory of 51 Rainbow Ice Cream parlour locations in Surat and South Gujarat.',
    numberOfItems: STORES.length,
    itemListElement: STORES.map((store, index) => {
      const item: Record<string, unknown> = {
        '@type': 'IceCreamShop',
        '@id': `https://51rainbow.com/storelocator#${store.slug}`,
        name: store.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: store.address,
          addressLocality: store.city,
          addressRegion: store.state,
          postalCode: store.pincode,
          addressCountry: 'IN',
        },
        url: store.googleMapsQueryUrl,
      };

      if (store.verified) {
        item.geo = {
          '@type': 'GeoCoordinates',
          latitude: store.lat,
          longitude: store.lng,
        };
      }

      return {
        '@type': 'ListItem',
        position: index + 1,
        item,
      };
    }),
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where are 51 Rainbow Ice Cream parlours located in Surat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '51 Rainbow has stores across prime localities in Surat including Parvat Patiya, Varachha Main Road (Hirabaug), Ring Road (Rustampura), Zampa Bazaar (Mahidharpura), Chowk Bazar (Gopipura), Surat Railway Station, Udhana Darwaja, Hodi Bangla, Athwa (Jawaharlal Nehru Garden Chowparty), Bhari Mata Road, and Vesu (Aagam Emporio).',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there 51 Rainbow outlets outside central Surat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 51 Rainbow has outlets in surrounding South Gujarat towns including Bardoli (Limda Chowk), Dumas Beach (Sultanabad), Baleshwar (Kadodara-Palsana Highway), and Kim (NH 48, Moti Naroli).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get directions to a 51 Rainbow outlet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can browse any store in our store locator list and click "Get directions" to open the exact coordinates and route on Google Maps.',
        },
      },
    ],
  };

  // Safely escape '<' for JSON-LD inline script tag
  const safeJsonLdString = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
  const safeFaqJsonLdString = JSON.stringify(faqJsonLd).replace(/</g, '\\u003c');

  return (
    <main className={styles.page}>
      {/* Structured Data Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLdString }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeFaqJsonLdString }}
      />

      <div className={styles.container}>
        {/* Editorial Hero Header */}
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Store Locator</p>
          <h1 className={styles.title}>Find 51 Rainbow Near You</h1>
          <p className={styles.lead}>
            Welcome to 51 Rainbow Ice Cream. From our historic roots in Surat to parlours across South Gujarat, find your nearest dessert destination here. Whether you crave our signature artisan scoops, royal faloodas, thickshakes, waffles, or famous Surti cold coco, our stores in Parvat Patiya, Varachha, Ring Road, Zampa Bazaar, Chowk Bazar, Athwa, Vesu, and surrounding regions like Bardoli, Dumas, and Kim are ready to serve you. Browse store addresses below, filter by city or pincode, and get directions for an unforgettable in-person sweet experience.
          </p>

          <div className={styles.badgeRow}>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              15 Outlets in South Gujarat
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              Handcrafted Artisanal Treats
            </span>
            <span className={styles.accentBadge}>
              <span className={styles.accentBadgeDiamond} aria-hidden="true">✦</span>
              100% Real Dairy Heritage
            </span>
          </div>
        </header>

        {/* Interactive Store Locator (Filter Bar, Scrollable List, Interactive Map) */}
        <StoreLocator initialStores={STORES} />

        {/* Server-Rendered Crawlable Text List for Search Engines */}
        <section
          className={styles.crawlableSection}
          aria-labelledby="crawlable-stores-title"
        >
          <h2 id="crawlable-stores-title" className={styles.crawlableHeading}>
            Signature Outlets Across Surat & South Gujarat
          </h2>
          <p className={styles.crawlableIntro}>
            Browse our full parlour directory with complete street addresses and pincodes for easy reference.
          </p>

          <ol className={styles.crawlableGrid}>
            {STORES.map((store) => (
              <li key={store.id} className={styles.crawlableItem}>
                <h3 className={styles.crawlableItemTitle}>
                  {store.name} — {store.area}
                </h3>
                <p className={styles.crawlableItemAddress}>{store.address}</p>
                <div style={{ marginTop: '8px' }}>
                  <a
                    href={store.googleMapsQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.googleDirectionsLink}
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ Section with Verified Factual Answers */}
        <section className={styles.faqSection} aria-labelledby="store-faq-title">
          <h2 id="store-faq-title" className={styles.faqHeading}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Where are 51 Rainbow Ice Cream parlours located in Surat?
              </h3>
              <p className={styles.faqAnswer}>
                51 Rainbow has stores across prime localities in Surat including Parvat Patiya, Varachha Main Road (Hirabaug), Ring Road (Rustampura), Zampa Bazaar (Mahidharpura), Chowk Bazar (Gopipura), Surat Railway Station, Udhana Darwaja, Hodi Bangla, Athwa (Jawaharlal Nehru Garden Chowparty), Bhari Mata Road, and Vesu (Aagam Emporio).
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Are there 51 Rainbow outlets outside central Surat?
              </h3>
              <p className={styles.faqAnswer}>
                Yes, 51 Rainbow has outlets in surrounding South Gujarat towns including Bardoli (Limda Chowk), Dumas Beach (Sultanabad), Baleshwar (Kadodara-Palsana Highway), and Kim (NH 48, Moti Naroli).
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                How do I get directions to a 51 Rainbow outlet?
              </h3>
              <p className={styles.faqAnswer}>
                You can browse any store in our store locator list and click &ldquo;Get directions&rdquo; to open the exact coordinates and navigation route on Google Maps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
