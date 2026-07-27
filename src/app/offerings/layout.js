import { ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "Emissions Management & GHG Accounting Software | CarbonTatva AI Offerings",
  description:
    "Explore CarbonTatva AI's product suite for carbon accounting, Scope 1, 2 & 3 emissions tracking, GHG Protocol reporting, CBAM & CCTS compliance, emissions forecasting and power market (GDAM/DAM) price prediction.",
  keywords: [
    "emissions management software",
    "GHG protocol software",
    "GHG reporting software",
    "Scope 1 2 3 tracking software",
    "Scope 3 emissions software",
    "CBAM compliance software",
    "CCTS software",
    "carbon data management software",
    "emissions forecasting software",
    "GDAM price forecasting",
    "DAM price prediction",
    "energy procurement software",
    "carbon reduction software",
  ],
  alternates: { canonical: "/offerings" },
  openGraph: {
    type: "website",
    url: "/offerings",
    title:
      "Emissions Management & GHG Accounting Software | CarbonTatva AI Offerings",
    description:
      "A full AI-native suite for carbon accounting, Scope 1, 2 & 3 tracking, GHG Protocol reporting, CBAM/CCTS compliance and power market price forecasting.",
    images: ogImages,
  },
};

export default function OfferingsLayout({ children }) {
  return children;
}
