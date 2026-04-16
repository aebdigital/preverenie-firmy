import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/preverenie-firmy`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95
    },
    {
      url: `${siteUrl}/zakladanie-a-zmeny`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${siteUrl}/likvidacia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${siteUrl}/premeny-a-zlucenia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85
    },
    {
      url: `${siteUrl}/o-nas-a-kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    }
  ];
}
