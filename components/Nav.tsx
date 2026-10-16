"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";

/**
 * Transparent with white text while the hero is in view; becomes a solid
 * white bar with black text as soon as the page scrolls (reference behaviour).
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,color] duration-300 ease-out"
      style={{
        backgroundColor: solid ? "#ffffff" : "transparent",
        color: solid ? "#111111" : "#ffffff",
      }}
    >
      <div className="frame flex h-14 items-center justify-between">
        <Link
          href="/"
          className="text-[19px] font-medium tracking-[0.02em]"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          {site.wordmark}
        </Link>

        <nav className="t-nav hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener" : undefined}
              className="opacity-90 transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start"
            className="opacity-90 transition-opacity hover:opacity-60"
          >
            Start a project
          </Link>
        </nav>

        <button
          type="button"
          className="t-nav md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="overflow-hidden">
          <nav className="frame flex flex-col gap-5 pb-8 pt-4 text-[22px]" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/start" onClick={() => setOpen(false)}>
              Start a project
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
