import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CrossSellCard } from "@/components/cross-sell-card";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import { getAllLocalizedPaths, getLocalizedPath } from "@/pathnames";
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
  const t = dict.liquidation;
  const allPaths = getAllLocalizedPaths("/likvidacia");
  const languages: Record<string, string> = {};
  for (const [loc, p] of Object.entries(allPaths)) {
    languages[loc] = `${siteUrl}${p}`;
  }
  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: { canonical: allPaths[locale], languages },
    openGraph: {
      title: t.seoTitle,
      description: t.seoDescription,
      url: allPaths[locale],
      images: [{ url: "/images/litigation.jpg", width: 1200, height: 900, alt: t.seoTitle }]
    }
  };
}

export default async function LiquidationPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.liquidation;
  const contactHref = getLocalizedPath("/o-nas-a-kontakt", locale) + "#formular";

  return (
    <>
      <PageHero
        title={t.heroTitle}
        description={t.heroDescription}
        imageSrc="/images/closure.jpg"
        imageAlt={t.heroTitle}
      >
        <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.primary} />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <article className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            {t.highlightsLabel}
          </h2>
          <FeatureList items={t.highlights} />
        </article>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-base leading-8 text-black/75">{t.paragraph1}</p>
            <p className="text-base leading-8 text-black/75">{t.paragraph2}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8">
            <Image
              src="/images/liquidation.jpg"
              alt={t.heroTitle}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <article className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            {t.servicesLabel}
          </h2>
          <FeatureList items={t.services} />
          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <CrossSellCard pageKey="liquidation" locale={locale} dictionary={dict} />
      </section>
    </>
  );
}
