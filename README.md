# FC Studios

Marketing site for the S Series by FC Studios (Fury Co). Next.js App Router + Tailwind v4.

## Run

```bash
npm install
npm run dev
```

## Where things live

- `content/site.ts` — nav, hero, intro, quote, dimensions, configurations, information accordion, footer
- `content/studios.ts` — the six studio applications (copy + image paths)
- `components/blocks.tsx` — the layout patterns (image pairs, statements, quote, dimensions, next card)
- `components/Hero.tsx` — pinned hero; this is the slot for the configurator
- `public/images/` — placeholders. Swap files in place or change the paths in `content/`.
- `public/fonts/` — self-hosted Hanken Grotesk + Instrument Serif

## Fonts

To use IvyPresto Headline, add an Adobe Fonts kit `<link>` in `app/layout.tsx`.
`--serif` in `globals.css` already lists `ivypresto-headline` first, so it takes over automatically.

## Pages

`/` is built. `/start`, `/configurations`, `/upgrades` are stubs.
