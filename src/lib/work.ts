// Single source for project listings. Case study pages (phase 2) read from here too.
export type Work = {
  slug: string;
  title: string;
  what: string;
  sector: string;
  image?: string;
  href?: string;
};

export const work: Work[] = [
  {
    slug: "safari-specialists",
    title: "Safari Specialists",
    what: "Website, Admin, interaktive Karte",
    sector: "Reisen · Botswana",
    image: "/work/safari/hero.jpg",
  },
  {
    slug: "arztbrief",
    title: "Arztbrief",
    what: "KI-Dokumentation für Praxen",
    sector: "Gesundheit",
  },
  {
    slug: "schoene-brot",
    title: "Schoene Brot",
    what: "Bestell-Admin & Sortimentssteuerung",
    sector: "Bäckerei",
    image: "/work/systems/schoene-admin.jpg",
  },
  {
    slug: "cafe-alte-schule",
    title: "Café Alte Schule",
    what: "Website, Reservierung, Kassen-Anbindung",
    sector: "Gastronomie",
    image: "/cafe-alte-schule-preview.png",
    href: "https://cafe-alte-schule.com",
  },
  {
    slug: "shayo",
    title: "ShaYo Barber Shop",
    what: "Website, Social, Film",
    sector: "Barbershop · Kiel",
    image: "/shayo-preview.png",
    href: "https://www.shayo-barbershop.de",
  },
  {
    slug: "geoscope",
    title: "GeoScope",
    what: "Sichtbarkeit in KI-Antworten messen",
    sector: "Eigenes Produkt",
  },
  {
    slug: "bachbaecker",
    title: "Bachbäcker",
    what: "Website",
    sector: "Bäckerei",
    image: "/bachbaecker-preview.png",
    href: "https://www.bachbaecker.de/",
  },
];
