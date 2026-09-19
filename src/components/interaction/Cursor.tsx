"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "view" | "open" | "click";

const LABELS: Record<Exclude<CursorState, "default">, string> = {
  view: "VIEW",
  open: "OPEN ↗",
  click: "CLICK",
};

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (event: PointerEvent) => {
      const el = dotRef.current;
      if (el) {
        el.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
        el.style.opacity = "1";
      }
    };
    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      setState((target?.dataset.cursor as CursorState) ?? "default");
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, []);

  return (
    <div ref={dotRef} className={`cursor cursor-${state}`} aria-hidden="true">
      {state !== "default" && <span>{LABELS[state]}</span>}
    </div>
  );
}
