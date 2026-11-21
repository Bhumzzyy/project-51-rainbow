
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/app/content/blog-data";
import styles from "./BlogsPage.module.css";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(
      new Set(blogPosts.map((post) => post.category))
    ),
  ];

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return blogPosts;
    }

    return blogPosts.filter(
      (post) => post.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <main className={styles.blogsPage}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>
            THE 51 RAINBOW JOURNAL
          </span>

          <h1>
            A Scoop of Stories,
            <br />
            <span>Made with Love.</span>
          </h1>

          <p>
            Every flavour has a story, every scoop holds a memory.
            Discover little moments, flavour inspirations and
            everything that makes life a little sweeter.
          </p>
        </div>
      </section>

      {/* BLOG LISTING */}
      <section className={styles.blogSection}>

        {/* CATEGORY FILTER */}
        <div className={styles.filterBar}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? styles.activeFilter
                    : styles.filterButton
                }
              >
                {category}
              </button>
            ))}
          </div>

          <span className={styles.itemCount}>
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "story" : "stories"}
          </span>
        </div>

        {/* BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div className={styles.blogGrid}>
            {filteredPosts.map((post, index) => (
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className={styles.blogCard}
              >
                <div className={styles.imageWrapper}>
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={styles.blogImage}
                      priority={index < 4}
                    />
                  )}

                  <span className={styles.imageNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>
                    {post.category}
                  </span>

                  <h2>{post.title}</h2>

                  <p>{post.excerpt}</p>

                  <span className={styles.readMore}>
                    Read Story
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No stories just yet!</h2>
            <p>We're preparing something sweet. Check back soon.</p>
          </div>
        )}

      </section>
      

    </main>
  );
}
