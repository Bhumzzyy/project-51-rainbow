import Link from "next/link";
import { blogPosts } from "@/app/content/blog-data";
import { merchandiseItems } from "@/app/content/merchandise-data";
import styles from "./AdminContentPage.module.css";

export default function AdminContentPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Content data</p>
        <h1>Manage site content in source files.</h1>
        <p>
          This site uses static content. Edit the data files below and redeploy
          to publish your changes.
        </p>
      </header>

      <div className={styles.panels}>
        <section className={styles.panel} aria-labelledby="merchandise-data-title">
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.count}>{merchandiseItems.length} items</p>
              <h2 id="merchandise-data-title">Merchandise</h2>
            </div>
            <Link href="/merchandise" className={styles.viewLink}>
              View page
            </Link>
          </div>
          <p className={styles.filePath}>
            src/app/content/merchandise-data.ts
          </p>
          <ul className={styles.list}>
            {merchandiseItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.panel} aria-labelledby="blog-data-title">
          <div className={styles.panelHeader}>
            <div>
              <p className={styles.count}>{blogPosts.length} posts</p>
              <h2 id="blog-data-title">Blogs</h2>
            </div>
            <Link href="/blogs" className={styles.viewLink}>
              View page
            </Link>
          </div>
          <p className={styles.filePath}>src/app/content/blog-data.ts</p>
          <ul className={styles.list}>
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <span>{post.title}</span>
                <strong>{post.category}</strong>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}