import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://deploy-change.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Deploy Change – Software & Webdesign Studio",
    template: "%s | Deploy Change",
  },
  description: "Studio für Software und Webdesign aus Kiel: interne Systeme, KI-Anwendungen und Websites auf hohem Niveau. Von Botswana bis zur Bäckerei um die Ecke.",
  authors: [{ name: "Faris El Mokhtari" }],
  creator: "Deploy Change",
  publisher: "Deploy Change",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deploy Change",
    title: "Deploy Change – Software & Webdesign Studio",
    description: "Studio für Software und Webdesign aus Kiel: interne Systeme, KI-Anwendungen und Websites auf hohem Niveau. Von Botswana bis zur Bäckerei um die Ecke.",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Change – Software & Webdesign Studio",
    description: "Studio für Software und Webdesign aus Kiel: interne Systeme, KI-Anwendungen und Websites auf hohem Niveau. Von Botswana bis zur Bäckerei um die Ecke.",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "de": BASE_URL,
      "x-default": BASE_URL,
    },
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": BASE_URL,
      "name": "Deploy Change",
      "description": "Studio für Software, KI und Webdesign",
      "inLanguage": "de-DE",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#business`,
      "name": "Deploy Change",
      "legalName": "Deploy Web Development",
      "description": "Studio für Software und Webdesign: interne Systeme, Admin-Bereiche, KI-Anwendungen und Websites. Dazu SEO, GEO und Film.",
      "url": BASE_URL,
      "telephone": "+49-151-51045345",
      "email": "info@deploy-change.de",
      "founder": { "@type": "Person", "name": "Faris El Mokhtari" },
      "areaServed": ["DE", "Worldwide"],
      "serviceType": [
        "Individualsoftware",
        "Prozessautomatisierung",
        "KI-Integration",
        "Admin-Dashboard",
        "Kassensystem-Integration",
        "Bestell- und Reservierungssystem",
        "Webentwicklung",
        "Webdesign",
        "Suchmaschinenoptimierung",
        "Generative Engine Optimization",
        "Werbefilm",
      ],
      "priceRange": "€€",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.32340,
        "longitude": 10.13489,
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Holm 17",
        "addressLocality": "Kiel",
        "addressRegion": "Schleswig-Holstein",
        "postalCode": "24107",
        "addressCountry": "DE",
      },
      "sameAs": ["https://www.instagram.com/deploy.change/"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
