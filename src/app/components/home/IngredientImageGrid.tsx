import Image from "next/image";
import styles from "./BentoGridSection.module.css";

const items = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7].map(
  (element, id) => ({ element, id }),
);

export default function IngredientImageGrid() {
  return (
    <div className={styles.ingredientPattern} aria-hidden="true">
      {items.map(({ element, id }) => (
        <div className={styles.ingredientImageCell} key={id}>
          <Image
            src={`/home/element-${element}.webp`}
            alt=""
            fill
            sizes="(max-width: 700px) 18vw, 8vw"
            className={styles.ingredientPatternImage}
          />
        </div>
      ))}
    </div>
  );
}
