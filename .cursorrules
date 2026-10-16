# FC Studios — agent handoff

Read this before touching anything. It explains what the site is, what is
already decided, and where the work is.

## What this is

Marketing site for the **S Series**, a modular prefab studio sold by FC Studios
(the design/build arm of Fury Co, Las Vegas). The site exists to funnel
visitors into a **configurator** that will live in the hero, and from there
into the inquiry form. Six studio "applications" of the same structure are
shown: Office, Golf, Performance, Entertainment, Casita, Custom.

Sister site: FC.Gyms (same client). Same grey, same restraint.

## The design reference — do not drift from it

The homepage is a 1:1 layout port of vipp.com's "Vipp Shelter" page with FC
Studios content. That decision is final. What makes it read as luxury:

- **Whitespace is the luxury.** One idea per section. Vertical rhythm is
  `--block` = `clamp(56px, 7vw, 128px)` between every block. Do not tighten it.
- **Images do the work.** Full-bleed inside the gutters, large, cropped with
  object-fit. No borders, radii, shadows, overlays or captions on top of images.
- **Quiet type.** Serif for statements and the intro paragraph; a small
  grotesque for everything else. Uppercase only on 11px labels. No bold
  headlines, no all-caps headings, no marquee bars, no arrows on buttons.
- **No reveal animations.** The reference has none. The only motion is the
  pinned hero, the caption fade, the nav colour flip, Lenis inertial scroll,
  the accordion, and the carousel. Do not add fade-ups, parallax, hover zooms,
  or counters. If asked for "more animation", push back once, then keep it to
  opacity-only and ≥ 600 ms.
- **Palette.** Page `#26282b` (Fury Co grey, sampled from FC.Gyms — not Vipp's
  `#1f2022`). Serif copy `#bab2a8`. Display white. Sand block `#d8d1c5`. Footer
  white. Nothing else. No accent colour.

Column maths from the reference (share of inner width, gutters excluded):
large image **49%** · gap **9.5%** · small image **41%**. Gutter is
`clamp(16px, 1.25vw, 28px)`. Text columns are narrow on purpose (≈ 23–41%).

## Typography

Target faces (client's spec):

- Sans: `vippNeue` 50px/66px 400 → stand-in **Hanken Grotesk** (self-hosted)
- Serif: `ivypresto-headline` 30px/36px 400 `#bab2a8` → stand-in **Instrument Serif** (self-hosted)

`--serif` in `globals.css` lists `ivypresto-headline` first. To switch to the
real face, add an Adobe Fonts kit `<link>` in `app/layout.tsx` (there is a
commented line for it). Nothing else changes.

Type classes live in `globals.css`: `.t-display` (quote), `.t-serif` (intro,
warm), `.t-serif-white` (statements), `.t-heading` (22px sans),
`.t-body` (13px sans), `.t-label` (11px uppercase), `.t-nav`. Use them; don't
invent per-component font sizes.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (CSS-first,
`@theme inline` in `globals.css`, no tailwind.config) · Lenis · next/image ·
next/font/local. Deploys to Vercel. No CMS, no database, no component library.

## Where things are

```
content/site.ts        nav, hero, intro, quote, dimensions, configurations,
                       information accordion, next card, footer
content/studios.ts     the six studios: copy + image paths (typed)
app/page.tsx           the homepage, composed block by block — read this first
components/Hero.tsx    pinned hero + caption fade. THE CONFIGURATOR SLOT.
components/blocks.tsx  every layout pattern (Intro, StudioLead, FullImage, Quote,
                       PairSmallLeft, StudioAside, StudioCaption, Dimensions,
                       Statement, PortraitPair, CenterCta, NextCard)
components/Nav.tsx     transparent → solid white on scroll; mobile menu
components/Carousel.tsx  "Configurations" horizontal snap scroller
components/Information.tsx  sand-coloured accordion (Open all / Close all)
components/Footer.tsx
components/Media.tsx   aspect-ratio image box (next/image, fill, cover)
components/SmoothScroll.tsx  Lenis + smooth anchor scrolling
app/globals.css        tokens, type scale, layout helpers, buttons, accordion
public/images/         placeholders — named by slot, swap in place
public/fonts/          woff2 for the two stand-in faces
app/start, app/configurations, app/upgrades   stub pages (not built yet)
```

Copy and image paths live in `content/`, never inline in components. Adding
a studio = adding an entry to `studios.ts` and a block to `page.tsx`.

## The configurator (the point of the site)

`components/Hero.tsx` is a `100svh` sticky section; everything after it has
`position: relative; z-index: 10` so it slides over the hero. The configurator
replaces the `<img>` / `<video>` inside the `mediaRef` div and nothing else.
Keep:

- the sticky wrapper and height (the page's first scroll depends on it)
- the caption element (or replace it with the configurator's bottom UI strip)
- the nav flipping to white at `scrollY > 24`

Hand-off to the form: every Inquire link already carries
`/start?studio=<id>`. The configurator should pass its selection the same way
(`?studio=&config=&addon=`) so `/start` can pre-select.

## Not done yet

1. `/start` — inquiry form. Fields: name, email, phone, location, studio type
   (from `studios.ts` + "Not sure yet"), configuration, add-ons (multi),
   timeline, message. Read `?studio=`, `?config=`, `?addon=` and pre-select.
   Submit via a route handler; delivery method not chosen yet (Resend is fine).
2. `/configurations` — standard 8′ × 20′/40′ × ~10′ unit, double-wide 16′,
   triple-wide 24′, stacked, connected (the last two "subject to engineering
   and site requirements"). Simple SVG footprint diagrams drawn in code plus
   renders. Reuse the blocks from `blocks.tsx`; same rhythm as the homepage.
3. `/upgrades` — visual gallery: rooftop decks, front patios, pergolas,
   stairs, glazing, exterior finishes, interior options. Lightbox on click.
4. Real renders. Every placeholder in `public/images/` is named by slot.
   Three images are cropped from FC.Gyms screenshots (`portable-*`, `gym-*`)
   and are fine to keep until renders arrive.
5. The founder quote in `content/site.ts` is a placeholder — the client must
   supply a real one. Confirm `gymsUrl`, `instagram`, `email` in `site.ts`.
6. `metadataBase` in `layout.tsx` once the domain is known.

## Conventions

- Mobile: everything stacks, images above text, regardless of desktop order.
  Already handled in the blocks via `max-md:` — follow the same pattern.
- `prefers-reduced-motion` disables Lenis and transitions. Keep it that way.
- Don't add a `tailwind.config`; Tailwind v4 is configured in CSS.
- Don't fetch Google Fonts at runtime; fonts are self-hosted.
- Run `npm run build` before committing; it must pass with zero errors.
