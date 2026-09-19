"use client";

import { useEffect, useRef } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

export function Hero() {
  const [scope, animate] = useAnimate();
  const reduceMotion = useReducedMotion();
  const entered = useRef(false);

  useEffect(() => {
    if (reduceMotion !== false || entered.current) return;
    entered.current = true;
    // Keep server-rendered copy visible when JavaScript is unavailable.
    const controls = animate(
      "[data-hero-enter]",
      { opacity: [0, 1], y: [18, 0] },
      {
        duration: 0.55,
        delay: (index) => index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    );
    return () => {
      controls.complete();
    };
  }, [animate, reduceMotion]);

  return (
    <section
      ref={scope}
      id="home"
      className={`container ${styles.hero}`}
      aria-labelledby="hero-title"
    >
      <div className="flex items-center justify-between gap-4" data-hero-enter>
        <p className={styles.intro}>HI, I’M {profile.name.toUpperCase()}.</p>
        <span className={styles.index}>PORTFOLIO / 01</span>
      </div>
      <h1 id="hero-title" className={styles.headline} data-hero-enter>
        <span>FULL STACK</span>
        <span>
          DEVELOPER<span className={styles.period}>.</span>
        </span>
      </h1>
      <div className={styles.bottom}>
        <p className={styles.description} data-hero-enter>
          {profile.intro}
        </p>
        <div data-hero-enter>
          <a className={styles.cta} href="#work" data-cursor="click">
            VIEW MY WORK <ArrowUpRight size={22} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className={styles.caption} data-hero-enter>
        <span>WEB APPLICATIONS. DIGITAL PRODUCTS. REAL SOLUTIONS.</span>
        <span className="flex items-center gap-2">
          SCROLL TO EXPLORE <ArrowDown size={13} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
