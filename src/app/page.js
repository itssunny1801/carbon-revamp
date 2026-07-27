import Home from "./Home/page";
import { SITE_URL, SITE_NAME, ogImages } from "@/lib/seo";

export const metadata = {
  title:
    "Carbon Accounting Software | AI-Native Carbon & ESG Platform — CarbonTatva AI",
  description:
    "CarbonTatva AI is an AI-native carbon accounting and carbon management platform. Automate emissions data, track Scope 1, 2 & 3 carbon footprint, forecast impact and accelerate net zero.",
  keywords: [
    "carbon accounting software",
    "carbon accounting platform",
    "carbon management software",
    "carbon management platform",
    "carbon footprint software",
    "AI carbon accounting",
    "AI sustainability software",
    "AI carbon intelligence",
    "enterprise carbon accounting platform",
    "net zero software",
    "decarbonisation platform",
    "emissions management software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title:
      "Carbon Accounting Software | AI-Native Carbon & ESG Platform — CarbonTatva AI",
    description:
      "Automate emissions data, track Scope 1, 2 & 3 carbon footprint, forecast impact and accelerate net zero with AI-native carbon intelligence.",
    images: ogImages,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL,
    description:
      "AI-native carbon accounting, emissions management and ESG reporting platform to measure, monitor, forecast and reduce Scope 1, 2 & 3 emissions.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Book a demo",
    },
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
