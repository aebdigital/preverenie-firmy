import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import { getAllLocalizedPaths } from "@/pathnames";
import { getLegisproPrivacyUrl } from "@/lib/legispro-links";
import { siteUrl } from "@/lib/seo";

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
  const t = dict.privacy;
  const allPaths = getAllLocalizedPaths("/ochrana-osobnych-udajov");
  const languages: Record<string, string> = {};
  for (const [loc, p] of Object.entries(allPaths)) {
    languages[loc] = `${siteUrl}${p}`;
  }
  return {
    title: t.title,
    description: t.subtitle,
    alternates: { canonical: getLegisproPrivacyUrl(locale), languages },
    robots: { index: true, follow: true }
  };
}

export default async function PrivacyPolicyPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.privacy;

  if (!t) return notFound();

  return (
    <>
      <PageHero
        title={t.title}
        description={t.subtitle}
        imageSrc="/images/legal-office.jpg"
        imageAlt={t.title}
      />

      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
        <article
          className="legal-prose"
          dangerouslySetInnerHTML={{ __html: t.content }}
        />
      </section>
    </>
  );
}
