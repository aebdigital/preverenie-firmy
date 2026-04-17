import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
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
        imageSrc="/images/litigation.jpg"
        imageAlt={t.heroTitle}
      >
        <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.primary} />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <article className="space-y-6 rounded-[2rem] border border-black/8 bg-neutral-50/70 p-6 sm:p-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              {t.processLabel}
            </p>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              {t.processHeading}
            </h2>
            <p className="text-base leading-8 text-black/75">{t.processIntro}</p>
          </div>
          <FeatureList items={t.processItems} />
        </article>

        <article className="space-y-6 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            {t.assistanceLabel}
          </p>
          <FeatureList items={t.assistanceItems} />
          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.primary} />
        </article>
      </section>
    </>
  );
}
