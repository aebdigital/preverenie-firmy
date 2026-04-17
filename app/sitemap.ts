import type { MetadataRoute } from "next";
import { i18n } from "@/i18n-config";
import { getLocalizedPath, pathnames } from "@/pathnames";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const internal of Object.keys(pathnames)) {
    for (const locale of i18n.locales) {
      entries.push({
        url: `${siteUrl}${getLocalizedPath(internal, locale)}`,
        lastModified: now,
        changeFrequency: internal === "/preverenie-firmy" ? "weekly" : "monthly",
        priority: internal === "/preverenie-firmy" ? 1 : 0.8
      });
    }
  }

  return entries;
}
