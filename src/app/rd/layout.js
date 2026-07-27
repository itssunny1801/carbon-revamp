import { ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "Research & Development | AI Carbon Intelligence & Forecasting — CarbonTatva AI",
  description:
    "Explore CarbonTatva AI's research and development in AI carbon accounting, predictive carbon analytics, AI emissions forecasting and power market price prediction.",
  keywords: [
    "AI carbon accounting",
    "AI emissions forecasting",
    "predictive carbon analytics",
    "AI sustainability analytics",
    "machine learning carbon accounting",
    "AI carbon intelligence",
    "power price forecasting",
  ],
  alternates: { canonical: "/rd" },
  openGraph: {
    type: "website",
    url: "/rd",
    title:
      "Research & Development | AI Carbon Intelligence & Forecasting — CarbonTatva AI",
    description:
      "R&D in AI carbon accounting, predictive carbon analytics, emissions forecasting and power market price prediction.",
    images: ogImages,
  },
};

export default function RdLayout({ children }) {
  return children;
}
