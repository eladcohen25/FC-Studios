"use client";

import { useState } from "react";
import { Media } from "./Media";

type Item = { title: string; body: string };

/** Sand-coloured specification block with a small image and an accordion. */
export function Information({
  heading,
  image,
  items,
}: {
  heading: string;
  image: string;
  items: Item[];
}) {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const allOpen = open.size === items.length;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section
      className="frame py-[var(--block)]"
      style={{ background: "var(--sand)", color: "var(--sand-text)" }}
    >
      <div className="grid grid-cols-[24%_1fr_41%_9%] items-start max-md:grid-cols-1 max-md:gap-y-10">
        <Media src={image} alt="" ratio="4 / 5" sizes="(min-width: 768px) 24vw, 100vw" />
        <div className="max-md:hidden" />
        <div>
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="t-heading" style={{ color: "var(--sand-text)" }}>
              {heading}
            </h2>
            <button
              type="button"
              className="t-body link-underline"
              style={{ color: "var(--sand-text)" }}
              onClick={() => setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)))}
            >
              {allOpen ? "Close all" : "Open all"}
            </button>
          </div>
          <ul className="divide-y" style={{ borderColor: "rgba(0,0,0,0.12)" }}>
            {items.map((item, i) => {
              const isOpen = open.has(i);
              return (
                <li key={item.title} data-open={isOpen} style={{ borderColor: "rgba(0,0,0,0.12)" }}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => toggle(i)}
                  >
                    <span className="t-body" style={{ color: "var(--sand-text)" }}>
                      {item.title}
                    </span>
                    <span className="acc-icon" aria-hidden />
                  </button>
                  <div className="acc-body" data-open={isOpen}>
                    <div>
                      <p
                        className="t-body pb-6 md:w-[80%]"
                        style={{ color: "rgba(0,0,0,0.72)" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
