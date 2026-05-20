import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://deploy-change.de";

  return [
    { url: base, lastModified: new Date("2026-05-20"), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/leistungen`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kundenstimmen`, lastModified: new Date("2026-05-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ueber-uns`, lastModified: new Date("2026-05-01"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: new Date("2026-05-20"), changeFrequency: "yearly", priority: 0.8 },
  ];
}
