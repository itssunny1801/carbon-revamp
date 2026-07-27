import "./globals.css";
import Navbar from "@/components/navbar";
import ScrollManager from "@/components/scrollmanager";
import Footer from "@/components/footer";
import { SITE_URL, SITE_NAME, ogImages } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "CarbonTatva AI | AI-Native Carbon Accounting & ESG Software India",
    template: "%s | CarbonTatva AI",
  },
  description:
    "CarbonTatva AI is an AI-native carbon accounting and ESG reporting platform. Measure, monitor, forecast and reduce Scope 1, 2 & 3 emissions with CBAM, BRSR and GHG Protocol compliance built in.",
  keywords: [
    "carbon accounting software",
    "carbon accounting platform",
    "carbon management software",
    "carbon footprint software",
    "ESG software India",
    "ESG reporting software",
    "sustainability reporting software",
    "emissions management software",
    "GHG accounting software",
    "AI carbon accounting",
    "AI sustainability platform",
    "net zero platform",
    "CBAM compliance software",
    "BRSR reporting software",
    "BRSR core ESG assurance India",
    "CCTS compliance software",
    "carbon credit trading scheme India",
    "Scope 3 emissions software",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title:
      "CarbonTatva AI | AI-Native Carbon Accounting & ESG Software India",
    description:
      "AI-native carbon intelligence to measure, forecast and reduce Scope 1, 2 & 3 emissions — with CBAM, BRSR and GHG Protocol compliance built in.",
    images: ogImages,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "CarbonTatva AI | AI-Native Carbon Accounting & ESG Software",
    description:
      "Measure, monitor, forecast and reduce emissions with an AI-native carbon accounting & ESG platform.",
    images: ogImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/CarbonTatvaAi_logo.png`,
  description:
    "AI-native carbon accounting, emissions management and ESG reporting platform for enterprises and SMEs in India.",
  email: "info@carbontatva.com",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <ScrollManager />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}