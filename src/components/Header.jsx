import { useState } from "react";
import styles from "./Header.module.css";

const links = ["News", "Events", "Members"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="/" className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">
            M
          </span>
          <span className={styles.name}>Marketing Association NZ</span>
        </a>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          {links.map((l) => (
            <a key={l} href="#" className={styles.link}>
              {l}
            </a>
          ))}
          <button className={styles.login}>Login</button>
        </nav>
      </div>
    </header>
  );
}
