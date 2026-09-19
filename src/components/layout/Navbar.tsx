"use client";

import { useEffect, useState } from "react";
import { navigation, profile } from "@/data/profile";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`container ${styles.navbarInner}`}>
        <a
          className={styles.wordmark}
          href="#home"
          aria-label={`${profile.name} home`}
          data-cursor="view"
        >
          {profile.name.toUpperCase()}
          <span aria-hidden="true">®</span>
        </a>
        <nav
          className="flex items-center gap-4 sm:gap-8"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              className={styles.link}
              key={item.href}
              href={item.href}
              data-cursor="view"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
