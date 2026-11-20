import Image from "next/image";
import styles from "./StorySection.module.css";

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
        <p className={styles.storyPublication}>THE RAINBOW STORY</p>
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
        <p className={styles.storyPublication}>THE RAINBOW STORY</p>
        <p className={styles.storyMeta}>SURAT, GUJARAT · EST. 1980</p>
      </header>

      <div className={styles.storyArticlePage}>
        <div className={styles.storyIntro}>
          <p className={styles.storyEyebrow}>A Legacy Since 1980</p>
          <h2 id="story-title" className={styles.storyTitle}>
            Rooted in Surat.<br/> Loved Everywhere.
          </h2>
          <p className={styles.storySubtitle}>
            From a local beginning to a growing presence across India, USA,
            UAE and KSA, discover the story behind 51 Rainbow.
          </p>
        </div>

        <article className={styles.storyBody}>
          <p className={styles.storyByline}>
            51 RAINBOW ICE CREAM · EST. 1980
          </p>

          <div className={styles.storyColumnFeatured}>
            <section className={styles.storyArticleBlock}>
              <h3 className={styles.storyColumnLabel}>Where It All Began</h3>
              <p>
                Since 1980, 51 Rainbow has been bringing people together
                through the joy of ice cream. What began in Surat has grown
                into a brand built around memorable flavours, quality and a
                love for sharing sweet moments.
              </p>
              <p>
                From classic favourites to exciting new flavours, our journey
                continues with one simple purpose: making every visit a little
                sweeter.
              </p>
            </section>
            <section className={styles.storyArticleBlock}>
              <h3 className={styles.storyColumnLabel}>Growing With Every Scoop</h3>
              <p>
                From Surat to India, USA, UAE and KSA, 51 Rainbow continues to
                take its ice cream journey across borders. With every new
                destination comes an opportunity to introduce more people to
                the brand, create lasting connections and make sweet moments
                part of everyday life.
              </p>
            </section>
          </div>

          {/* <blockquote className={styles.storyPullQuote}>
            One Legacy. Many Places. Endless Sweet Moments.
          </blockquote> */}

          <div className={styles.storyColumnRight}>
            <section className={styles.storyArticleBlock}>
              <h3 className={styles.storyColumnLabel}>Beyond Boundaries</h3>
              <p>
                From its roots in Surat, 51 Rainbow has expanded its presence
                across India, USA, UAE and KSA, bringing its love for ice cream
                to more people and communities.
              </p>
            </section>
            <section className={styles.storyArticleBlock}>
              <h3 className={styles.storyColumnLabel}>Made to Be Shared</h3>
              <p>
                Every flavour brings an opportunity to create memories. From
                everyday treats to family celebrations, 51 Rainbow makes room
                for moments worth sharing.
              </p>
            </section>
            <section className={styles.storyArticleBlock}>
              <h3 className={styles.storyColumnLabel}>A Legacy That Continues</h3>
              <p>
                With a growing range of flavours and a commitment to quality,
                51 Rainbow continues its journey of making every scoop a little
                more special.
              </p>
            </section>
          </div>
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

      {/* <footer className={styles.paperFooter}>
        <span>A little joy, since 1980</span>
      </footer> */}
    </section>
  );
}
