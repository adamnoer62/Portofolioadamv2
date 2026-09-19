"use client";

import { useEffect, useRef } from "react";
import { useAnimate, useInView, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Contact() {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const revealed = useRef(false);

  useEffect(() => {
    if (!inView || reduceMotion !== false || revealed.current) return;
    revealed.current = true;
    // Keep server-rendered copy visible when JavaScript is unavailable.
    const controls = animate(
      "[data-contact-reveal]",
      { opacity: [0, 1], y: [16, 0] },
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
    <section
      ref={scope}
      id="contact"
      className="section contact container"
    >
      <SectionLabel number="06">NEXT STARTS HERE</SectionLabel>
      <div data-contact-reveal>
        <p>Have a project in mind, or just a good story?</p>
        <h2>
          Let’s make
          <br />
          something <i>great.</i>
          <span className="accent" aria-hidden="true">↗</span>
        </h2>
        {profile.email ? (
          <a
            className="contact-link"
            href={`mailto:${profile.email}`}
            data-cursor="click"
          >
            {profile.email} ↗
          </a>
        ) : (
          <p className="contact-placeholder">Contact details coming soon.</p>
        )}
        {profile.linkedin && (
          <a
            className="contact-secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="view"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
      <div className="contact-bottom" data-contact-reveal>
        <span className="status-dot" /> GOOD CONVERSATIONS LEAD TO GOOD THINGS.
      </div>
    </section>
  );
}
