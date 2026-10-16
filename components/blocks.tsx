import Link from "next/link";
import { Media } from "./Media";
import type { Studio } from "@/content/studios";

/* ------------------------------------------------------------------
   Layout blocks, each one a pattern lifted from the reference page.
   Column maths (share of the inner width, gutters excluded):
     large image 49%  ·  gap 9.5%  ·  small image 41%
   Vertical rhythm is --block (≈ 7vw), set on the wrapper in page.tsx.
------------------------------------------------------------------- */

const COLS = "grid-cols-[49%_41%]";
const GAP = "gap-x-[9.5%]";

/** Inline link inside a paragraph, e.g. Fury Co. Gyms inside the Performance copy. */
function BodyWithLink({ studio }: { studio: Studio }) {
  if (!studio.bodyLink) return <>{studio.body}</>;
  const [before, after] = studio.body.split(studio.bodyLink.text);
  return (
    <>
      {before}
      <a
        href={studio.bodyLink.href}
        target="_blank"
        rel="noopener"
        className="link-underline"
      >
        {studio.bodyLink.text}
      </a>
      {after}
    </>
  );
}

export function InquireButton({ studioId, label = "Inquire" }: { studioId?: string; label?: string }) {
  const href = studioId ? `/start?studio=${studioId}` : "/start";
  return (
    <Link href={href} className="btn">
      {label}
    </Link>
  );
}

/* 1 · Intro: label + serif paragraph in the right half of the page. */
export function Intro({ label, body }: { label: string; body: string }) {
  return (
    <section className="frame pt-[var(--block)] pb-[var(--block)]">
      <div className="md:ml-[50%] md:w-[41%]">
        <p className="t-label mb-5">{label}</p>
        <p className="t-serif">{body}</p>
      </div>
    </section>
  );
}

/* 2 · Large portrait left, small landscape right with copy + button beneath. */
export function StudioLead({ studio, index }: { studio: Studio; index: number }) {
  return (
    <section
      id={studio.id}
      className={`frame grid ${COLS} ${GAP} items-start max-md:grid-cols-1 max-md:gap-y-8`}
    >
      <Media
        src={studio.images.portrait}
        alt={`${studio.name} rendering`}
        ratio="4 / 5"
        sizes="(min-width: 768px) 49vw, 100vw"
      />
      <div>
        <Media
          src={studio.images.landscape}
          alt={`${studio.name} rendering`}
          ratio="4 / 3"
          sizes="(min-width: 768px) 41vw, 100vw"
        />
        <div className="mt-[clamp(32px,4vw,64px)] md:w-[62%]">
          <p className="t-label mb-3">
            {String(index + 1).padStart(2, "0")} — {studio.name}
          </p>
          <p className="t-body">
            <BodyWithLink studio={studio} />
          </p>
          <p className="t-body mt-5 font-medium">{studio.tagline}</p>
          <div className="mt-8">
            <InquireButton studioId={studio.id} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 3 · One image, full width inside the gutters. */
export function FullImage({ src, alt, ratio = "16 / 9" }: { src: string; alt: string; ratio?: string }) {
  return (
    <section className="frame">
      <Media src={src} alt={alt} ratio={ratio} sizes="100vw" />
    </section>
  );
}

/* 4 · Centered serif quote with attribution. */
export function Quote({ text, attribution }: { text: string; attribution: string }) {
  return (
    <section className="frame py-[calc(var(--block)*1.4)] text-center">
      <blockquote className="mx-auto max-w-[62%] max-md:max-w-full">
        <p className="t-display">{text}</p>
        <footer className="t-label mt-8" style={{ color: "var(--white)" }}>
          {attribution}
        </footer>
      </blockquote>
    </section>
  );
}

/* 5 · Small landscape left, large portrait right (offset down). */
export function PairSmallLeft({ small, large, alt }: { small: string; large: string; alt: string }) {
  return (
    <section className={`frame grid grid-cols-[41%_49%] ${GAP} items-start max-md:grid-cols-1 max-md:gap-y-8`}>
      <Media src={small} alt={alt} ratio="4 / 3" sizes="(min-width: 768px) 41vw, 100vw" />
      <Media
        src={large}
        alt={alt}
        ratio="4 / 5"
        className="md:mt-[14%]"
        sizes="(min-width: 768px) 49vw, 100vw"
      />
    </section>
  );
}

/* 6 · Portrait left, heading + paragraph on the far right. */
export function StudioAside({ studio, index }: { studio: Studio; index: number }) {
  return (
    <section
      id={studio.id}
      className="frame grid grid-cols-[49%_1fr_23%] items-start max-md:grid-cols-1 max-md:gap-y-8"
    >
      <Media
        src={studio.images.portrait}
        alt={`${studio.name} rendering`}
        ratio="4 / 5"
        sizes="(min-width: 768px) 49vw, 100vw"
      />
      <div className="max-md:hidden" />
      <div className="md:pt-2">
        <p className="t-label mb-3">
          {String(index + 1).padStart(2, "0")} — {studio.name}
        </p>
        <h2 className="t-heading mb-5">{studio.tagline}</h2>
        <p className="t-body">
          <BodyWithLink studio={studio} />
        </p>
        <Link href={`/start?studio=${studio.id}`} className="t-body link-underline mt-6 inline-block">
          Inquire
        </Link>
      </div>
    </section>
  );
}

/* 7 · Square-ish image left, narrow portrait right with a caption beneath it. */
export function StudioCaption({ studio, index }: { studio: Studio; index: number }) {
  return (
    <section
      id={studio.id}
      className="frame grid grid-cols-[49%_1fr_24%] items-start max-md:grid-cols-1 max-md:gap-y-8"
    >
      <Media
        src={studio.images.landscape}
        alt={`${studio.name} rendering`}
        ratio="4 / 5"
        sizes="(min-width: 768px) 49vw, 100vw"
      />
      <div className="max-md:hidden" />
      <div>
        <Media
          src={studio.images.portraitB ?? studio.images.portrait}
          alt={`${studio.name} rendering`}
          ratio="3 / 4"
          sizes="(min-width: 768px) 24vw, 100vw"
        />
        <p className="t-body mt-6">
          <span className="font-medium">
            {String(index + 1).padStart(2, "0")} — {studio.name}
          </span>{" "}
          — <BodyWithLink studio={studio} />
        </p>
        <Link href={`/start?studio=${studio.id}`} className="t-body link-underline mt-4 inline-block">
          Inquire
        </Link>
      </div>
    </section>
  );
}

/* 8 · Dimensions, centered in a tall empty field (the coordinates block). */
export function Dimensions({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <section className="frame flex min-h-[70vh] items-center justify-center text-center">
      <p className="t-heading" style={{ lineHeight: 1.35 }}>
        {line1}
        <br />
        {line2}
      </p>
    </section>
  );
}

/* 9 · Serif statement, left-aligned or centered. */
export function Statement({ text, align = "left" }: { text: string; align?: "left" | "center" }) {
  return (
    <section className={`frame ${align === "center" ? "text-center" : ""}`}>
      <p className="t-serif-white">{text}</p>
    </section>
  );
}

/* 10 · Two portraits: left 49% / right 41% nudged down, optional caption. */
export function PortraitPair({
  left,
  right,
  alt,
  caption,
  captionUnder = "left",
}: {
  left: string;
  right: string;
  alt: string;
  caption?: React.ReactNode;
  captionUnder?: "left" | "right";
}) {
  return (
    <section className={`frame grid ${COLS} ${GAP} items-start max-md:grid-cols-1 max-md:gap-y-8`}>
      <div>
        <Media src={left} alt={alt} ratio="4 / 5" sizes="(min-width: 768px) 49vw, 100vw" />
        {caption && captionUnder === "left" && <p className="t-body mt-6 md:w-[62%]">{caption}</p>}
      </div>
      <div>
        <Media
          src={right}
          alt={alt}
          ratio="4 / 5"
          className="md:mt-[10%]"
          sizes="(min-width: 768px) 41vw, 100vw"
        />
        {caption && captionUnder === "right" && <p className="t-body mt-6 md:w-[62%]">{caption}</p>}
      </div>
    </section>
  );
}

/* 11 · Centered button. */
export function CenterCta({ label, href }: { label: string; href: string }) {
  return (
    <section className="frame flex justify-center">
      <Link href={href} className="btn">
        {label}
      </Link>
    </section>
  );
}

/* 12 · "Next" card: portrait left, landscape right, label under the landscape. */
export function NextCard({
  label,
  href,
  external,
  portrait,
  landscape,
}: {
  label: string;
  href: string;
  external?: boolean;
  portrait: string;
  landscape: string;
}) {
  return (
    <section className="frame">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        className="group grid grid-cols-[32%_1fr_49%] items-end max-md:grid-cols-1 max-md:gap-y-8"
      >
        <Media src={portrait} alt={label} ratio="4 / 5" sizes="(min-width: 768px) 32vw, 100vw" />
        <div className="max-md:hidden" />
        <div>
          <Media src={landscape} alt={label} ratio="16 / 10" sizes="(min-width: 768px) 49vw, 100vw" />
          <p className="t-body mt-4 flex items-center gap-3">
            <span>{label}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </p>
        </div>
      </Link>
    </section>
  );
}
