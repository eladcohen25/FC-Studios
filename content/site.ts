/**
 * Site-wide content. Everything a non-developer may want to change lives here
 * or in ./studios.ts — the components only render what these files provide.
 */

export const site = {
  name: "FC Studios",
  wordmark: "FC.STUDIOS",
  tagline: "S Series",
  gymsUrl: "https://fcgyms.com", // TODO: confirm FC.Gyms URL
  instagram: "https://instagram.com/", // TODO: FC Studios Instagram
  email: "hello@fcstudios.com", // TODO
  phone: "", // optional
  location: "Las Vegas, Nevada",
};

export const nav = [
  { label: "Explore Studios", href: "/#studios" },
  { label: "Sizes & Configurations", href: "/configurations" },
  { label: "Add-Ons & Upgrades", href: "/upgrades" },
  { label: "FC Gyms", href: site.gymsUrl, external: true },
];

export const hero = {
  // Swap for a video: set `video` to a path under /public and keep `image` as the poster.
  image: "/images/portable-exterior.jpg",
  video: "", // e.g. "/video/s-series-hero.mp4"
  caption: "S Series, Las Vegas",
  alt: "The S Series studio in a residential backyard at dusk",
};

export const intro = {
  label: "One platform. Endless applications.",
  body: "Explore the possibilities of the S Series. Each studio is configured around its intended use, with flexible layouts, architectural options, and interior finishes designed to fit your space.",
};

export const quote = {
  // PLACEHOLDER — replace with a real line from the Fury Co founders.
  text: "“We built the S Series as one structure that can become almost anything. The studio is where the conversation starts, not where it ends.”",
  attribution: "Fury Co, Founders",
};

export const dimensions = {
  line1: "8′ × 20′ · 8′ × 40′",
  line2: "≈ 10′ ceiling height",
};

export const beyond = {
  statement: "Built beyond the standard.",
  body: "Double-wide, triple-wide, stacked and connected. Rooftop decks, patios and pergolas. The S Series is a platform, and the standard unit is only where it begins.",
  cta: { label: "Explore configurations", href: "/configurations" },
};

export const configurations = [
  { id: "double-wide", label: "Double-wide · 16′", image: "/images/config-double.jpg" },
  { id: "triple-wide", label: "Triple-wide · 24′", image: "/images/config-triple.jpg" },
  { id: "stacked", label: "Stacked", image: "/images/config-stacked.jpg" },
  { id: "connected", label: "Connected", image: "/images/config-connected.jpg" },
  { id: "rooftop-deck", label: "Rooftop deck", image: "/images/config-rooftop.jpg" },
  { id: "front-patio", label: "Front patio", image: "/images/config-patio.jpg" },
  { id: "pergola", label: "Pergola", image: "/images/config-pergola.jpg" },
];

export const information = {
  heading: "Information",
  image: "/images/spec-image.jpg",
  items: [
    {
      title: "Standard unit",
      body: "8′ wide, available in 20′ and 40′ lengths, with an interior height of approximately 10′. Every S Series studio starts from this footprint.",
    },
    {
      title: "Multi-unit arrangements",
      body: "Double-wide (16′), triple-wide (24′) and other multi-unit arrangements. Stacked and connected configurations are available subject to engineering and site requirements.",
    },
    {
      title: "Add-ons & upgrades",
      body: "Rooftop decks, front patios, pergolas, stairs, glazing, exterior finishes and interior options. See Add-Ons & Upgrades for the full gallery.",
    },
    {
      title: "Interior finishes",
      body: "Interior configurations and finishes are selected around the intended use of the studio: flooring, lighting, built-ins and specialty equipment.",
    },
    {
      title: "Performance studios",
      body: "Fitness and recovery studios are specified with equipment and design solutions through Fury Co. Gyms.",
    },
    {
      title: "Site & delivery",
      body: "Each project is reviewed for site access, foundation and utility requirements before fabrication. Delivery and installation are coordinated with your project timeline.",
    },
    {
      title: "Process",
      body: "Start a project, tell us the intended use and location, and we will come back with a configuration, options and next steps.",
    },
    {
      title: "Contact",
      body: `For more information, contact us at ${site.email}.`,
    },
  ],
};

export const nextCard = {
  label: "Fury Co. Gyms",
  href: site.gymsUrl,
  external: true,
  portrait: "/images/next-portrait.jpg",
  landscape: "/images/gym-interior.jpg",
};

export const footer = {
  columns: [
    {
      heading: "Company",
      links: [
        { label: "Start a project", href: "/start" },
        { label: "Fury Co. Gyms", href: site.gymsUrl, external: true },
        { label: "Instagram", href: site.instagram, external: true },
        { label: "Contact", href: `mailto:${site.email}` },
      ],
    },
    {
      heading: "Studios",
      links: [
        { label: "Explore studios", href: "/#studios" },
        { label: "Sizes & configurations", href: "/configurations" },
        { label: "Add-ons & upgrades", href: "/upgrades" },
      ],
    },
    {
      heading: "Professionals",
      links: [
        { label: "Architects & builders", href: "/start" },
        { label: "Commercial projects", href: "/start" },
        { label: "Hospitality", href: "/start" },
      ],
    },
  ],
  newsletter: {
    heading: "Sign up to our newsletter",
    placeholder: "Enter your email",
    consent: "I agree to the",
    consentLink: { label: "Terms of Service", href: "/terms" },
    button: "Subscribe",
  },
  legal: `FC Studios · Fury Co · Copyright ${new Date().getFullYear()}`,
  socials: [{ label: "Instagram", href: site.instagram }],
};
