import { ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "ESG & Carbon Footprint Calculator | Scope 1, 2 & 3 Emissions Calculator",
  description:
    "Use CarbonTatva AI's interactive ESG and carbon footprint calculator to map operational activity against validated emission factors and visualise your Scope 1, 2 & 3 emissions in real time.",
  keywords: [
    "carbon footprint calculator",
    "ESG calculator",
    "scope 2 emissions calculator",
    "scope 3 emissions calculator",
    "corporate carbon calculator",
    "GHG emissions calculator",
    "manufacturing carbon footprint calculator",
    "product carbon footprint calculator",
    "ESG dashboard software",
  ],
  alternates: { canonical: "/esg-calculator" },
  openGraph: {
    type: "website",
    url: "/esg-calculator",
    title:
      "ESG & Carbon Footprint Calculator | Scope 1, 2 & 3 Emissions Calculator",
    description:
      "Interactive ESG and carbon footprint calculator to visualise your Scope 1, 2 & 3 emissions in real time.",
    images: ogImages,
  },
};

export default function EsgCalculatorLayout({ children }) {
  return children;
}
