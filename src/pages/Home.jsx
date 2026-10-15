import styles from "./Home.module.css";

const stories = [
  {
    id: 1,
    title: "Why Kiwi brands are betting on local storytelling",
    summary: "Four campaigns that proved authenticity beats a big budget.",
    image: "https://picsum.photos/seed/nz-brand/600/400",
  },
  {
    id: 2,
    title: "Marketing Awards 2026: the shortlist is out",
    summary: "See who made the final round across 12 categories.",
    image: "https://picsum.photos/seed/nz-awards/600/400",
  },
  {
    id: 3,
    title: "How small teams are using AI without losing their voice",
    summary: "Practical lessons from Auckland and Christchurch agencies.",
    image: "https://picsum.photos/seed/nz-ai/600/400",
  },
];

export default function Home() {
  const handleSubmit = (e) => e.preventDefault(); // search not implemented

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1>The latest in New Zealand marketing</h1>
            <form
              className={styles.search}
              onSubmit={handleSubmit}
              role="search"
            >
              <label htmlFor="q" className={styles.srOnly}>
                Search news
              </label>
              <input
                id="q"
                type="search"
                placeholder="Search news and insights"
              />
              <button type="submit">Search</button>
            </form>
          </div>
          <img
            className={styles.heroImg}
            src="https://picsum.photos/seed/nz-hero/600/420"
            alt="Marketing team reviewing a campaign"
          />
        </div>
      </section>

      <section className={styles.stories} aria-label="Top stories">
        {stories.map((s) => (
          <article key={s.id} className={styles.card}>
            <img src={s.image} alt="" />
            <div className={styles.cardBody}>
              <h2>{s.title}</h2>
              <p>{s.summary}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
