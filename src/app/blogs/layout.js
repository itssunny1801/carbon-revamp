import { ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "Carbon, ESG & Compliance Blog | CBAM, BRSR, Scope 3 Guides — CarbonTatva AI",
  description:
    "Insights and guides on carbon accounting, ESG reporting and compliance — including what is CBAM, what is BRSR, what is CCTS, Scope 3 emissions, GHG Protocol and net zero.",
  keywords: [
    "what is CBAM",
    "what is BRSR",
    "what is CCTS",
    "what is carbon accounting",
    "what is scope 3 emissions",
    "what is GHG protocol",
    "what is net zero",
    "ESG reporting checklist",
    "carbon accounting checklist",
    "carbon accounting software india",
    "CBAM compliance software india",
    "BRSR core reporting india",
    "CCTS carbon credit trading scheme",
    "scope 3 calculation software india",
    "industrial decarbonization platform india",
  ],
  alternates: { canonical: "/blogs" },
  openGraph: {
    type: "website",
    url: "/blogs",
    title:
      "Carbon, ESG & Compliance Blog | CBAM, BRSR, Scope 3 Guides — CarbonTatva AI",
    description:
      "Guides on carbon accounting, ESG reporting and compliance — CBAM, BRSR, CCTS, Scope 3, GHG Protocol and net zero.",
    images: ogImages,
  },
};

export default function BlogsLayout({ children }) {
  return children;
}
