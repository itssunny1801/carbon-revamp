// Central SEO configuration for CarbonTatva AI.
// Update SITE_URL here if the production domain changes.

export const SITE_URL = "https://www.carbontatva.com";
export const SITE_NAME = "CarbonTatva AI";
export const DEFAULT_OG_IMAGE = "/CarbonTatvaAi_logo.png";

// Reusable OpenGraph image block.
export const ogImages = [
  {
    url: DEFAULT_OG_IMAGE,
    width: 1200,
    height: 630,
    alt: "CarbonTatva AI — AI-native carbon accounting & ESG platform",
  },
];

// Helper to build a full absolute canonical URL for a given path.
export const canonical = (path = "/") =>
  new URL(path, SITE_URL).toString();
