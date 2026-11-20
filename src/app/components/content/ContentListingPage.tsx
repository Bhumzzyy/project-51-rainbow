import Image from "next/image";
import styles from "./ContentListingPage.module.css";

export interface ContentListingItem {
  id: string;
  title: string;
  description?: string;
  image?: string;
  meta?: string;
}

interface ContentListingPageProps {
  eyebrow: string;
  title: string;
  description: string;
  items: ContentListingItem[];
  emptyMessage: string;
}

export default function ContentListingPage({
  eyebrow,
  title,
  description,
  items,
  emptyMessage,
}: ContentListingPageProps) {
  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>

      {items.length > 0 ? (
        <section className={styles.grid} aria-label={`${title} listings`}>
          {items.map((item) => (
            <article className={styles.card} key={item.id}>
              {item.image ? (
                <div className={styles.imageFrame}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 1000px) 30vw, 270px"
                    className={styles.image}
                  />
                </div>
              ) : null}
              <div className={styles.cardBody}>
                <h2>{item.title}</h2>
                {item.meta ? <p className={styles.meta}>{item.meta}</p> : null}
                {item.description ? (
                  <p className={styles.itemDescription}>{item.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      ) : (
        <p className={styles.emptyState}>{emptyMessage}</p>
      )}
    </main>
  );
}