import type { Metadata } from "next";
import { Fraunces, Raleway } from "next/font/google";
import "../globals.css";
import { i18n, type Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import { getLocalizedPath } from "@/pathnames";
import { contactDetails } from "@/lib/site-content";
import { siteUrl } from "@/lib/seo";
import { SiteShell } from "@/components/site-shell";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  weight: ["600", "700"]
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"]
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  const languages: Record<string, string> = {};
  for (const loc of i18n.locales) {
    languages[loc] = `${siteUrl}${getLocalizedPath("/", loc)}`;
  }

  return {
    metadataBase: new URL(siteUrl),
    applicationName: dict.meta.siteName,
    title: {
      default: dict.meta.siteTitle,
      template: `%s | ${dict.meta.siteName}`
    },
    description: dict.meta.description,
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      shortcut: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/favicon.png", type: "image/png" }]
    },
    alternates: {
      canonical: `/${locale}`,
      languages
    },
    openGraph: {
      type: "website",
      locale: dict.meta.locale,
      siteName: dict.meta.siteName,
      title: dict.meta.siteTitle,
      description: dict.meta.description,
      url: `/${locale}`,
      images: [
        {
          url: "/images/legal-office.jpg",
          width: 1200,
          height: 900,
          alt: dict.meta.siteTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.description,
      images: ["/images/legal-office.jpg"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dictionary = await getDictionary(locale);

  const languageUrls: Record<string, string> = {};
  for (const loc of i18n.locales) {
    languageUrls[loc] = `${siteUrl}${getLocalizedPath("/", loc)}`;
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: contactDetails.company,
    alternateName: "prevereniefirmy.sk",
    url: siteUrl,
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactDetails.address[0],
      postalCode: "949 01",
      addressLocality: "Nitra",
      addressCountry: "SK"
    },
    areaServed: { "@type": "Country", name: "Slovakia" },
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: ["https://legispro.sk"],
    parentOrganization: {
      "@type": "LegalService",
      name: "LegisPro, s.r.o.",
      url: "https://legispro.sk"
    }
  };

  return (
    <html lang={dictionary.meta.htmlLang} className={`${fraunces.variable} ${raleway.variable}`}>
      <head>
        {i18n.locales.map((loc) => (
          <link key={loc} rel="alternate" hrefLang={loc} href={languageUrls[loc]} />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={languageUrls[i18n.defaultLocale]}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SiteShell lang={locale} dictionary={dictionary}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
