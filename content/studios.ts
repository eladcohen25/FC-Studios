/**
 * The six S Series applications. Edit copy and swap image paths here.
 * Images live under /public/images. Portrait slots want ~4:5, landscape ~4:3,
 * wide ~16:9 — the layout crops with object-fit so exact ratios don't matter.
 */

export type Studio = {
  id: string;
  name: string;
  tagline: string;
  body: string;
  images: {
    portrait: string;
    landscape: string;
    wide?: string;
    portraitB?: string;
  };
  /** Optional inline link inside the body, e.g. "Fury Co. Gyms". */
  bodyLink?: { text: string; href: string };
};

export const studios: Studio[] = [
  {
    id: "office",
    name: "Office Studio",
    tagline: "A dedicated space to work and create.",
    body: "Modern, adaptable workspaces designed for residential and commercial environments. From private backyard offices and creative studios to executive suites and enclosed workspaces within larger facilities, each studio can be configured around your professional needs.",
    images: {
      portrait: "/images/portable-portrait.jpg",
      landscape: "/images/office-landscape.jpg",
      wide: "/images/office-exterior.jpg",
    },
  },
  {
    id: "golf",
    name: "Golf Studio",
    tagline: "Your game. Your environment.",
    body: "Customizable golf environments designed for private properties, commercial facilities, and recreational spaces. Integrate golf simulators, putting greens, indoor training areas, or rooftop golf features to create a unique experience around the way you play.",
    images: {
      portrait: "/images/golf-portrait.jpg",
      landscape: "/images/golf-wide.jpg",
      wide: "/images/golf-wide.jpg",
    },
  },
  {
    id: "performance",
    name: "Performance Studio",
    tagline: "Built for movement, performance, and recovery.",
    body: "Purpose-built fitness and wellness environments for private properties, businesses, and athletic facilities. Configure your space for strength training, conditioning, recovery, or a combination of applications, with specialized equipment and design solutions through Fury Co. Gyms.",
    bodyLink: { text: "Fury Co. Gyms", href: "https://fcgyms.com" },
    images: {
      portrait: "/images/gym-portrait.jpg",
      landscape: "/images/gym-interior.jpg",
      wide: "/images/gym-dark.jpg",
      portraitB: "/images/gym-dark-portrait.jpg",
    },
  },
  {
    id: "entertainment",
    name: "Entertainment Studio",
    tagline: "Designed to bring people together.",
    body: "Flexible indoor and outdoor spaces for entertaining, relaxing, and gathering. From poolside lounges and private retreats to hospitality spaces and recreational environments, each studio can incorporate decks, rooftop areas, and custom finishes.",
    images: {
      portrait: "/images/entertainment-portrait-a.jpg",
      portraitB: "/images/entertainment-portrait-b.jpg",
      landscape: "/images/entertainment-wide.jpg",
      wide: "/images/entertainment-wide.jpg",
    },
  },
  {
    id: "casita",
    name: "Casita Studio",
    tagline: "Additional space. Endless possibilities.",
    body: "Versatile detached spaces for guest accommodations, private retreats, and expanded living areas. Designed to complement residential properties and hospitality environments, with interior configurations and optional amenities tailored to the intended use.",
    images: {
      portrait: "/images/casita-portrait-a.jpg",
      portraitB: "/images/casita-portrait-b.jpg",
      landscape: "/images/casita-wide.jpg",
      wide: "/images/casita-wide.jpg",
    },
  },
  {
    id: "custom",
    name: "Custom Studio",
    tagline: "Your vision. Our platform.",
    body: "Have something different in mind? FC Studios offers custom configurations for unique residential, commercial, and recreational applications. From retail and showroom concepts to specialty workspaces and one-of-a-kind environments, we’ll help explore a solution built around your project.",
    images: {
      portrait: "/images/custom-portrait.jpg",
      landscape: "/images/custom-landscape.jpg",
    },
  },
];
