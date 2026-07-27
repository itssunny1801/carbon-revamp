import { ogImages } from "@/lib/seo";

export const metadata = {
  title: "Unlock the ESG Calculator | ESG Reporting & Analytics — CarbonTatva AI",
  description:
    "Get access to CarbonTatva AI's ESG calculator and ESG reporting tools to track sustainability KPIs, ESG metrics and Scope 1, 2 & 3 emissions performance.",
  keywords: [
    "ESG reporting software",
    "ESG software India",
    "ESG dashboard software",
    "ESG analytics platform",
    "ESG data management software",
    "sustainability KPI tracking",
  ],
  alternates: { canonical: "/esg-access" },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: "/esg-access",
    title: "Unlock the ESG Calculator | CarbonTatva AI",
    description:
      "Access CarbonTatva AI's ESG calculator and ESG reporting tools.",
    images: ogImages,
  },
};

export default function EsgAccessLayout({ children }) {
  return children;
}
