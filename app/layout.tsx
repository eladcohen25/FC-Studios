import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

/*
  Fonts
  -----
  Sans: Hanken Grotesk stands in for Vipp Neue (a Helvetica-style grotesque).
  Serif: Instrument Serif stands in for IvyPresto Headline.
  Both are self-hosted from /public/fonts (OFL licensed).

  To use the real IvyPresto Headline, create an Adobe Fonts web project with
  "ivypresto-headline", then uncomment the <link> below with your kit id.
  globals.css already lists "ivypresto-headline" first in --serif, so it takes
  over the moment the kit loads — no other change needed.
*/
const sans = localFont({
  src: [
    { path: "../public/fonts/hanken-grotesk-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/hanken-grotesk-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const serif = localFont({
  src: [
    { path: "../public/fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — S Series`,
  description:
    "One platform. Endless applications. The S Series modular studio by FC Studios, configured around office, golf, performance, entertainment, casita and custom uses.",
  openGraph: {
    title: `${site.name} — S Series`,
    description: "One platform. Endless applications.",
    images: ["/images/portable-exterior.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        {/* <link rel="stylesheet" href="https://use.typekit.net/XXXXXXX.css" /> */}
      </head>
      <body>
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
