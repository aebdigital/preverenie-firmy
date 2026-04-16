import type { Metadata } from "next";
import { Fraunces, Raleway } from "next/font/google";
import "./globals.css";
import { contactDetails } from "@/lib/site-content";
import { defaultKeywords, siteTitle, siteUrl } from "@/lib/seo";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Preverenie firmy",
  title: {
    default: siteTitle,
    template: "%s | Preverenie firmy"
  },
  description:
    "Preverenie finančných tokov firmy, compliance, optimalizácia procesov a korporátne zmeny pod dohľadom advokátskej kancelárie LegisPro, s.r.o.",
  keywords: defaultKeywords,
  category: "legal services",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "sk_SK",
    siteName: "prevereniefirmy.sk",
    title: siteTitle,
    description:
      "Preverenie finančných tokov firmy, compliance, optimalizácia procesov a korporátne zmeny pod dohľadom advokátskej kancelárie LegisPro, s.r.o.",
    url: "/",
    images: [
      {
        url: "/images/legal-office.jpg",
        width: 1200,
        height: 900,
        alt: "Preverenie firmy - LegisPro, s.r.o."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Preverenie finančných tokov firmy, compliance, optimalizácia procesov a korporátne zmeny pod dohľadom advokátskej kancelárie LegisPro, s.r.o.",
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    areaServed: {
      "@type": "Country",
      name: "Slovakia"
    },
    openingHours: "Mo-Fr 08:00-17:00"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "prevereniefirmy.sk",
    url: siteUrl,
    inLanguage: "sk-SK"
  };

  return (
    <html lang="sk" className={`${fraunces.variable} ${raleway.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
        {children}
      </body>
    </html>
  );
}
