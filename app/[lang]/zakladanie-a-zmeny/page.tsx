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
  const t = dict.formation;
  const allPaths = getAllLocalizedPaths("/zakladanie-a-zmeny");
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
      images: [{ url: "/images/contact-office.jpg", width: 1200, height: 900, alt: t.seoTitle }]
    }
  };
}

export default async function FormationPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.formation;
  const contactHref = getLocalizedPath("/o-nas-a-kontakt", locale) + "#formular";

  return (
    <>
      <PageHero
        title={t.heroTitle}
        description={t.heroDescription}
        imageSrc="/images/zakladanie.jpg"
        imageAlt={t.heroTitle}
      >
        <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.primary} />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-black/8">
            <Image
              src="/images/zakladanie-2.jpg"
              alt={t.servicesLabel}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-black sm:text-4xl">
              {t.servicesLabel}
            </h2>
            <FeatureList items={t.services} />
            <ul className="ml-6 space-y-2 text-sm leading-7 text-black/70 sm:text-[15px]">
              {t.changesSubItems.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <article className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            {t.benefitsLabel}
          </h2>
          <p className="text-base leading-8 text-black/75">{t.whyText}</p>
          <FeatureList items={t.benefits} />
        </article>

        <article className="space-y-4 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8">
          <p className="text-base leading-8 text-black/75">{t.closing1}</p>
          <p className="text-base leading-8 text-black/75">{t.closing2}</p>
          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <CrossSellCard pageKey="formation" locale={locale} dictionary={dict} />
      </section>
    </>
  );
}
