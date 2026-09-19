"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useAnimate, useInView, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const revealed = useRef(false);

  useEffect(() => {
    if (!inView || reduceMotion !== false || revealed.current) return;
    revealed.current = true;
    // Keep server-rendered copy visible when JavaScript is unavailable.
    const controls = animate(
      "[data-about-reveal]",
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
  }, [inView, reduceMotion, animate]);

  return (
    <section ref={scope} id="about" className="section about container">
      <div>
        <SectionLabel number="02">THE PERSON BEHIND THE PIXELS</SectionLabel>
        <h2 data-about-reveal>
          I’M A
          <br />
          FULL STACK
          <br />
          DEVELOPER<span className="accent" aria-hidden="true">.</span>
        </h2>
        <div className="about-photo" data-about-reveal>
          <Image
            className="about-photo-img"
            src="/adam.webp"
            alt={`Portrait of ${profile.fullName}`}
            width={230}
            height={205}
          />
          <p className="about-photo-caption">ALWAYS A WORK IN PROGRESS ↗</p>
        </div>
      </div>
      <div className="about-copy">
        <p className="large-copy" data-about-reveal>
          I build web applications, digital products, and systems that solve
          real problems.
        </p>
        <p data-about-reveal>{profile.about}</p>
        <div className="about-stats" data-about-reveal>
          <div>
            <span>5+</span>
            <p>YEARS</p>
          </div>
          <div>
            <span aria-hidden="true">∞</span>
            <p>STILL LEARNING</p>
          </div>
        </div>
        <a
          className="text-link"
          href="#contact"
          data-about-reveal
          data-cursor="click"
        >
          Let’s make something meaningful <span>↗</span>
        </a>
      </div>
    </section>
  );
}
