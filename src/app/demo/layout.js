import { ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "Book a Demo | Carbon Accounting & ESG Software Demo — CarbonTatva AI",
  description:
    "Book a personalised demo of CarbonTatva AI's carbon accounting, emissions management and ESG reporting platform and see how to automate Scope 1, 2 & 3 tracking and compliance.",
  keywords: [
    "carbon accounting software demo",
    "ESG software demo",
    "carbon management platform",
    "emissions management software",
    "sustainability reporting software",
  ],
  alternates: { canonical: "/demo" },
  openGraph: {
    type: "website",
    url: "/demo",
    title: "Book a Demo | Carbon Accounting & ESG Software — CarbonTatva AI",
    description:
      "Book a personalised demo of CarbonTatva AI's carbon accounting and ESG platform.",
    images: ogImages,
  },
};

export default function DemoLayout({ children }) {
  return children;
}
