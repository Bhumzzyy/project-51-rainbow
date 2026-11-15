import Image from "next/image";
import styles from "./ReviewSection.module.css";

const reviewPeople = [
  { src: "/home/review-1.gif", className: styles.personOne },
  { src: "/home/review-2.gif", className: styles.personTwo },
  { src: "/home/review-3.gif", className: styles.personThree },
  { src: "/home/review-4.gif", className: styles.personFour },
  { src: "/home/review-5.gif", className: styles.personFive },
  { src: "/home/review-6.gif", className: styles.personSix },
];

export default function ReviewSection() {
  return (
    <section className={styles.section} aria-labelledby="review-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>The scoop, in their words</p>
        <h2 id="review-title" className={styles.title}>
          Big smiles.
          <span>Even bigger cravings.</span>
        </h2>
      </header>
      <p className={styles.centerPhrase}>
        One scoop.
        <br />
        Instant good mood.
      </p>
      <div className={styles.reviews}>
        <blockquote className={styles.review}>
          <span className={styles.reviewLabel}>Sample review</span>
          <p>
            “Creamy ice cream, a crisp cone and a little time to slow down.”
          </p>
        </blockquote>
        <blockquote className={styles.review}>
          <p>
            “The kind of sweet treat that turns an ordinary afternoon into the
            best part of the day.”
          </p>
        </blockquote>
      </div>
      <div className={styles.people} aria-hidden="true">
        {reviewPeople.map(({ src, className }) => (
          <div className={`${styles.personFrame} ${className}`} key={src}>
            <Image
              src={src}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 700px) 100vw, 58vw"
              className={styles.personImage}
            />
          </div>
        ))}
      </div>
      <span className={`${styles.sparkle} ${styles.sparkleOne}`} aria-hidden="true">
        ✦
      </span>
      <span className={`${styles.sparkle} ${styles.sparkleTwo}`} aria-hidden="true">
        ✦
      </span>
    </section>
  );
}
