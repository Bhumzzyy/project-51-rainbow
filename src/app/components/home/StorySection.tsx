import Image from "next/image";
import styles from "./sections.module.css";

/*
Legacy story section retained at the user's request.
export default function StorySection() {
  return (
    <section
      id="story"
      className={styles.storySection}
      aria-labelledby="story-title"
    >
      <header className={styles.storyMasthead}>
        <p className={styles.storyBrandMark}>51 RAINBOW</p>
        <p className={styles.storyPublication}>THE RAINBOW JOURNAL</p>
        <p className={styles.storyMeta}>SURAT, GUJARAT · EST. 1980</p>
      </header>

      <div className={styles.storyIntro}>
        <div className={styles.storyBrand}>
          <p className={styles.storyEyebrow}>A taste of home</p>
          <h2 id="story-title" className={styles.storyTitle}>
            <span>A sweeter</span>
            <br />
            <span>side of Surat.</span>
          </h2>
          <p className={styles.storySubtitle}>
            From everyday scoops to celebrations, a little joy is always worth
            sharing.
          </p>
        </div>
      </div>

      <div className={styles.storyBody}>
        <article
          className={`${styles.storyColumn} ${styles.storyColumnFeatured}`}
        >
          <h3 className={styles.storyColumnLabel}>A good day starts sweet</h3>
          <p>
            51 Rainbow began with a simple wish: make good days even better
            with ice cream and desserts made to share. What started as a
            neighbourhood favourite has grown alongside Surat, while holding
            onto the familiar flavours, generous scoops, and warm welcome
            people return for.
          </p>
          <p>
            We keep curiosity on the menu, too. New combinations bring a
            little surprise to the table, while timeless favourites invite
            friends and families to slow down and stay a while.
          </p>
          <blockquote className={styles.storyPullQuote}>
            The sweetest moments are the ones we share.
          </blockquote>
        </article>

        <div className={styles.storyVisualSpace} aria-hidden="true" />

        <article className={`${styles.storyColumn} ${styles.storyColumnRight}`}>
          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>A landmark close to home</h3>
            <p>
              Surat&apos;s clock tower is part of the city&apos;s familiar
              skyline—a landmark woven into everyday journeys and shared
              memories. That sense of belonging inspires the way we welcome
              every guest.
            </p>
          </section>
          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>Made for the moments</h3>
            <p>
              A quick treat after school, a family outing, or a celebration
              with friends: every visit can become a reason to pause, connect,
              and make a happy memory.
            </p>
          </section>
          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>A tradition in the making</h3>
            <p>
              With thoughtful flavours, dependable quality, and a spirit of
              discovery, 51 Rainbow keeps creating new ways to bring people
              together—one scoop at a time.
            </p>
          </section>
        </article>
      </div>

      <figure className={styles.storyImageFrame}>
        <Image
          src="/home/surat-background.jpg"
          alt=""
          aria-hidden="true"
          width={716}
          height={740}
          sizes="(max-width: 760px) 92vw, 64vw"
          className={styles.storyBackdrop}
        />
        <Image
          src="/home/clock-tower.png"
          alt="A vintage-style red clock tower"
          width={579}
          height={1575}
          sizes="(max-width: 760px) 170px, 34vw"
          className={styles.storyImage}
        />
      </figure>

      <footer className={styles.paperFooter}>
        <span>A little joy, since 1980</span>
      </footer>
    </section>
  );
}
*/

export default function StorySection() {
  return (
    <section
      id="story"
      className={styles.storySection}
      aria-labelledby="story-title"
    >
      <header className={styles.storyMasthead}>
        <p className={styles.storyBrandMark}>51 RAINBOW</p>
        <p className={styles.storyPublication}>THE RAINBOW JOURNAL</p>
        <p className={styles.storyMeta}>SURAT, GUJARAT · EST. 1980</p>
      </header>

      <div className={styles.storyArticlePage}>
        <div className={styles.storyIntro}>
          <p className={styles.storyEyebrow}>A taste of home</p>
          <h2 id="story-title" className={styles.storyTitle}>
            A sweeter side of Surat
          </h2>
          <p className={styles.storySubtitle}>
            From a familiar city landmark to a shared scoop, discover the
            little joys that bring Surat together.
          </p>
        </div>

        <article className={styles.storyBody}>
          <p className={styles.storyByline}>BY 51 RAINBOW · SURAT, GUJARAT</p>

          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>A good day starts sweet</h3>
            <p>
              Every city has a landmark that feels like an old friend. In
              Surat, the clock tower stands watch over familiar streets,
              everyday errands, and the many little moments that make a place
              feel like home.
            </p>
            <p>
              51 Rainbow began with that same feeling: a simple wish to make
              good days even better with ice cream and desserts made to share.
              Since 1980, what started as a neighbourhood favourite has grown
              alongside the city, while keeping its warm welcome and generous
              scoops close to heart.
            </p>
          </section>

          <blockquote className={styles.storyPullQuote}>
            The sweetest moments are the ones we share.
          </blockquote>

          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>A landmark close to home</h3>
            <p>
              The tower is more than a point on the map. It is a meeting place,
              a memory in the making, and a reminder that the best parts of a
              city are found in the moments people share there.
            </p>
            <p>
              That sense of belonging inspires every visit to 51 Rainbow.
              Whether friends stop by after school or a family gathers for a
              celebration, there is always room for one more scoop and one more
              story.
            </p>
          </section>

          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>Made for the moments</h3>
            <p>
              There is something new to discover on the menu, alongside the
              timeless flavours people return for. Each treat is an invitation
              to pause, connect, and turn an ordinary afternoon into a happy
              memory.
            </p>
          </section>

          <section className={styles.storyArticleBlock}>
            <h3 className={styles.storyColumnLabel}>A tradition in the making</h3>
            <p>
              With thoughtful flavours, dependable quality, and a spirit of
              discovery, 51 Rainbow keeps finding new ways to bring people
              together—one scoop at a time.
            </p>
          </section>
        </article>
      </div>

      <Image
        src="/home/clock-tower.png"
        alt="Illustration of the historic Surat clock tower"
        width={579}
        height={1575}
        sizes="(max-width: 760px) 42vw, 24vw"
        className={styles.storyTower}
      />

      <footer className={styles.paperFooter}>
        <span>A little joy, since 1980</span>
      </footer>
    </section>
  );
}
