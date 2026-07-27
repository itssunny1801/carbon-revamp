import { ogImages } from "@/lib/seo";

export const metadata = {
  title: "About CarbonTatva AI | AI-Native Carbon & Sustainability Platform",
  description:
    "Learn about CarbonTatva AI, an AI-native carbon accounting and sustainability platform helping enterprises and SMEs measure, monitor, forecast and reduce their carbon footprint and reach net zero.",
  keywords: [
    "CarbonTatva AI",
    "carbon accounting platform",
    "AI sustainability software",
    "enterprise sustainability software",
    "corporate sustainability software",
    "carbon management platform",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: "/about",
    title: "About CarbonTatva AI | AI-Native Carbon & Sustainability Platform",
    description:
      "An AI-native carbon accounting and sustainability platform for enterprises and SMEs.",
    images: ogImages,
  },
};

export default function AboutLayout({ children }) {
  return children;
}
