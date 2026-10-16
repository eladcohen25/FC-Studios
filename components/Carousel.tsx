"use client";

import { useRef, useState } from "react";
import { Media } from "./Media";

type Slide = { id: string; label: string; image: string };

/**
 * The "Postcard" pattern: a label above a full-width image you swipe through.
 * Native scroll-snap, so it's touch-first; arrows are for desktop.
 */
export function Carousel({ title, slides }: { title: string; slides: Slide[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const next = Math.min(slides.length - 1, Math.max(0, index + dir));
    const child = el.children[next] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setIndex(next);
  };

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    setIndex(Math.round(el.scrollLeft / w));
  };

  return (
    <section className="frame" aria-roledescription="carousel" aria-label={title}>
      <div className="mb-4 flex items-end justify-between">
        <p className="t-heading">{title}</p>
        <div className="t-body flex items-center gap-5" style={{ color: "var(--muted)" }}>
          <span>
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={() => go(-1)} aria-label="Previous" className="hover:text-white">
            ←
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Next" className="hover:text-white">
            →
          </button>
        </div>
      </div>
      <div ref={ref} className="scroller" onScroll={onScroll}>
        {slides.map((s, i) => (
          <figure key={s.id} className="w-full" aria-label={`${i + 1} of ${slides.length}`}>
            <Media src={s.image} alt={s.label} ratio="16 / 9" sizes="100vw" />
            <figcaption className="t-body mt-4" style={{ color: "var(--muted)" }}>
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
