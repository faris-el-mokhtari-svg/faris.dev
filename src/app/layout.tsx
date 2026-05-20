import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const BASE_URL = "https://deploy-change.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Deploy Change – Webentwicklung für Gastronomie & KMU",
    template: "%s | Deploy Change",
  },
  description: "Maßgeschneiderte Websites, Reservierungssysteme und Dashboards für Gastronomie und lokale KMU im DACH-Raum. Live in 4 Tagen.",
  keywords: ["Webentwicklung", "Webdesign", "Gastronomie", "Reservierungssystem", "KMU", "DACH", "Website", "Dashboard"],
  authors: [{ name: "Faris El Mokhtari" }],
  creator: "Deploy Change",
  publisher: "Deploy Change",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deploy Change",
    title: "Deploy Change – Webentwicklung für Gastronomie & KMU",
    description: "Maßgeschneiderte Websites, Reservierungssysteme und Dashboards für Gastronomie und lokale KMU im DACH-Raum. Live in 4 Tagen.",
    url: BASE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Deploy Change – Webentwicklung für Gastronomie & KMU",
    description: "Maßgeschneiderte Websites, Reservierungssysteme und Dashboards für Gastronomie und lokale KMU im DACH-Raum.",
  },
  alternates: {
    canonical: BASE_URL,
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
      "description": "Webentwicklung für Gastronomie und lokale KMU im DACH-Raum",
      "inLanguage": "de-DE",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${BASE_URL}/#business`,
      "name": "Deploy Change",
      "url": BASE_URL,
      "email": "info@deploy-change.de",
      "founder": { "@type": "Person", "name": "Faris El Mokhtari" },
      "areaServed": ["DE", "AT", "CH"],
      "serviceType": ["Webentwicklung", "Webdesign", "Reservierungssystem", "Admin-Dashboard"],
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Holm 17",
        "addressLocality": "Kiel",
        "postalCode": "24107",
        "addressCountry": "DE",
      },
      "sameAs": ["https://www.instagram.com/deploy.change/"],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${barlow.variable} ${barlowCondensed.variable}`}>
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
