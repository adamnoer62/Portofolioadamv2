"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    const configure = () => {
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        syncTouch: false,
        prevent: (node) => node.closest("dialog") !== null,
      });
      syncModal();
    };
    // Native dialogs lock the page while retaining their own scroll behavior.
    const syncModal = () => {
      if (document.querySelector("dialog[open]")) lenis?.stop();
      else lenis?.start();
    };
    const observer = new MutationObserver(syncModal);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["open"],
    });
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", configure);
      lenis?.destroy();
    };
  }, []);
  return null;
}
