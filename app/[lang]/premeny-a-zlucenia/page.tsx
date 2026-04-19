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
  const t = dict.mergers;
  const allPaths = getAllLocalizedPaths("/premeny-a-zlucenia");
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

export default async function MergersPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.mergers;
  const contactHref = getLocalizedPath("/o-nas-a-kontakt", locale) + "#formular";

  return (
    <>
      <PageHero
        title={t.heroTitle}
        description={t.heroDescription}
        imageSrc="/images/merger.webp"
        imageAlt={t.heroTitle}
      >
        <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.primary} />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <article className="space-y-4 rounded-[2rem] border border-black/8 bg-neutral-50/70 p-6 sm:p-8">
          <p className="text-base leading-8 text-black/75">{t.intro}</p>
        </article>

        <article className="space-y-6">
          <h2 className="font-display text-3xl font-semibold text-black sm:text-4xl">
            {t.typesLabel}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {t.types.map((type) => (
              <div
                key={type.title}
                className="rounded-[1.5rem] border border-black/8 bg-neutral-50 p-5"
              >
                <h3 className="text-lg font-semibold text-black">{type.title}</h3>
                {type.description ? (
                  <p className="mt-3 text-sm leading-7 text-black/72">{type.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </article>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl text-black sm:text-4xl">
              {t.servicesLabel}
            </h2>
            <FeatureList items={t.services} />
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-black/8">
            <Image
              src="/images/mergers.jpg"
              alt={t.servicesLabel}
              width={1200}
              height={900}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <article className="space-y-4 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8">
          <p className="text-base leading-8 text-black/75">{t.closing}</p>
          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <CrossSellCard pageKey="mergers" locale={locale} dictionary={dict} />
      </section>
    </>
  );
}
