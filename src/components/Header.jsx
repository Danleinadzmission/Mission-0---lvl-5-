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

        {/* Hamburger button: only visible on mobile (Header.module.css hides it on desktop) */}
        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)} // on click, flip "open" to its opposite: false becomes true, true becomes false
        >
          <span />
          <span />
          <span />
        </button>

        {/* The menu. The class names are built with a template literal, so the nav always gets styles.nav, */}
        {/* and gets styles.open as well when the "open" state is true (the hamburger was clicked). */}
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
