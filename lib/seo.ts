import type { Metadata } from "next";

function normalizeSiteUrl(value?: string) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return "https://www.prevereniefirmy.sk";
  }

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const siteTitle = "Preverenie firmy | LegisPro, s.r.o.";

export const defaultKeywords = [
  "preverenie firmy",
  "preverenie finančných tokov",
  "compliance",
  "optimalizácia procesov",
  "zakladanie spoločností",
  "likvidácia spoločností",
  "premeny a zlúčenia spoločností",
  "advokátska kancelária Nitra",
  "LegisPro"
];

export function buildPageMetadata({
  title,
  description,
  path,
  image = "/images/legal-office.jpg"
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${title} | Preverenie firmy`,
      description,
      url: path,
      images: [
        {
          url: image,
          width: 1200,
          height: 900,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Preverenie firmy`,
      description,
      images: [image]
    }
  };
}
