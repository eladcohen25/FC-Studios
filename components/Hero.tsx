"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/site";

/**
 * Pinned hero. The section is 100vh and sticky at top: 0; the following
 * content has a higher z-index so it slides up over the image, exactly as in
 * the reference. The caption fades and lifts as the page starts to scroll.
 *
 * This component is the slot for the configurator: replace the <img>/<video>
 * with the configurator viewport and keep the wrapper as-is.
 */
export function Hero() {
  const captionRef = useRef<HTMLParagraphElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const t = Math.min(1, Math.max(0, y / (vh * 0.35)));
      if (captionRef.current) {
        captionRef.current.style.opacity = String(1 - t);
        captionRef.current.style.transform = `translateY(${t * -12}px)`;
      }
      if (mediaRef.current) {
        // very slight scale as content covers the image, keeps it alive
        const s = 1 + Math.min(1, y / vh) * 0.04;
        mediaRef.current.style.transform = `scale(${s})`;
      }
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh]" aria-label="S Series">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div
          ref={mediaRef}
          className="absolute inset-0 will-change-transform"
          style={{ transformOrigin: "50% 50%" }}
        >
          {hero.video ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={hero.video}
              poster={hero.image}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={hero.image}
              alt={hero.alt}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
          )}
        </div>

        <p
          ref={captionRef}
          className="t-heading absolute inset-x-0 bottom-7 text-center will-change-[opacity,transform]"
        >
          {hero.caption}
        </p>
      </div>
    </section>
  );
}
