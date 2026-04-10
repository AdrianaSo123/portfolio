export type SystemProject = {
  id: string;
  title: string;
  summary: string;
  description: string;
  links?: { label: string; url: string }[];
};

export const systems: SystemProject[] = [
  {
    id: "so-studio",
    title: "SO Studio",
    summary: "An automated web generation AI system.",
    description: "An AI system built to intelligently automate site generation and layout configurations. Designed for speed and minimal manual intervention. Built on a Next.js framework for fast edge-rendering.",
    links: [
      { label: "Live Deployment ↗", url: "https://so-studio-pi.vercel.app" },
      { label: "View Source ↗", url: "https://github.com/AdrianaSo123/autoSite" }
    ]
  },
  {
    id: "unmuted-theme",
    title: "Unmuted eCommerce",
    summary: "A modern, highly optimized Shopify theme.",
    description: "A custom headless-capable Shopify architecture. Built from the ground up to prioritize performance, accessibility, and high-end DTC visual standards. Used a stripped-back styling approach for lightning-fast First Contentful Paint.",
    links: [
      { label: "Live Deployment ↗", url: "https://unmuted-shop.myshopify.com" },
      { label: "View Source ↗", url: "https://github.com/AdrianaSo123/unmuted-theme" }
    ]
  }
];
