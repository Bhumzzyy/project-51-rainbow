const highlights = [
  {
    title: "Signature Sweets",
    text: "Handcrafted treats that bring color, comfort, and celebration into every bite.",
  },
  {
    title: "Custom Celebrations",
    text: "Weddings, birthdays, and gifting moments designed with a joyful, personal touch.",
  },
  {
    title: "Freshly Made",
    text: "Every batch is prepared with care and premium ingredients for a richer taste.",
  },
];

const categories = [
  "Cakes",
  "Desserts",
  "Gift Boxes",
  "Seasonal Specials",
];

const stats = [
  { value: "300+", label: "happy events" },
  { value: "12k", label: "delights served" },
  { value: "4.9/5", label: "customer love" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <header className="topbar">
          <div className="brandmark">RAINBOW</div>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#story">Story</a>
            <a href="#collections">Collections</a>
            <a href="#craft">Craft</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="primary-button">Order now</button>
        </header>

        <div className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow">Crafted with joy</p>
            <h1>Bright flavors for every celebration.</h1>
            <p className="lead">
              From elegant cakes to playful desserts, Rainbow brings rich textures,
              thoughtful details, and colorful warmth to the moments people cherish most.
            </p>
            <div className="cta-row">
              <a className="primary-button" href="#collections">Explore collection</a>
              <a className="secondary-button" href="#story">Our story</a>
            </div>
            <div className="stats-row" aria-label="Brand highlights">
              {stats.map((item) => (
                <div key={item.label} className="stat-box">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Rainbow dessert showcase">
            <div className="visual-card main-card">
              <div className="cake-plate">
                <div className="cake-tier tier-top" />
                <div className="cake-tier tier-middle" />
                <div className="cake-tier tier-bottom" />
              </div>
            </div>
            <div className="floating-tag badge-top">Freshly baked</div>
            <div className="floating-tag badge-bottom">Made for moments</div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-text">
          <p className="eyebrow accent">Why Rainbow</p>
          <h2>Joyful design. Honest ingredients. Memorable taste.</h2>
        </div>
        <div className="story-grid">
          {highlights.map((item) => (
            <article key={item.title} className="info-card">
              <span className="card-dot" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="collections" className="collection-section">
        <div className="section-heading">
          <p className="eyebrow accent">Curated collection</p>
          <h2>Sweet ideas for every mood and moment.</h2>
        </div>

        <div className="collection-tags" aria-label="Collection categories">
          {categories.map((text) => (
            <span key={text} className="tag-pill">
              {text}
            </span>
          ))}
        </div>

        <div className="product-grid">
          <article className="product-card product-card-orange">
            <div className="mini-visual mini-cake" aria-hidden="true" />
            <div>
              <h3>Sunset Celebration</h3>
              <p>Rich, vibrant layers made for unforgettable birthdays and joyful dinners.</p>
            </div>
          </article>

          <article className="product-card product-card-purple">
            <div className="mini-visual mini-dessert" aria-hidden="true" />
            <div>
              <h3>Velvet Treat Box</h3>
              <p>Delicate sweets and elegant bites for gifting, sharing, and slow evenings.</p>
            </div>
          </article>

          <article className="product-card product-card-cream">
            <div className="mini-visual mini-gift" aria-hidden="true" />
            <div>
              <h3>Signature Gift Sets</h3>
              <p>Thoughtfully packed, beautifully styled, and designed to feel personal.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="craft" className="craft-section">
        <div className="craft-copy">
          <p className="eyebrow accent">The craft behind it</p>
          <h2>Made to feel as beautiful as it tastes.</h2>
          <p>
            Every creation is built with intention, layering color, texture, and flavor so the final piece feels joyful, premium, and personal. We blend artistry with comfort to make every dessert feel special.
          </p>
        </div>
        <div className="craft-panel">
          <div className="panel-badge">Hand-finished</div>
          <ul>
            <li>Small-batch baking</li>
            <li>Premium ingredients</li>
            <li>Custom color palettes</li>
            <li>Thoughtful presentation</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div>
          <p className="eyebrow accent">Let’s create something sweet</p>
          <h2>Bring color to your next celebration.</h2>
        </div>
        <a className="primary-button" href="mailto:hello@rainbowstudio.com">
          hello@rainbowstudio.com
        </a>
      </section>
    </main>
  );
}
