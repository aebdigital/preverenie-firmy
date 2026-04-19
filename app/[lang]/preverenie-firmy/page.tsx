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
  const t = dict.audit;

  const allPaths = getAllLocalizedPaths("/preverenie-firmy");
  const languages: Record<string, string> = {};
  for (const [loc, p] of Object.entries(allPaths)) {
    languages[loc] = `${siteUrl}${p}`;
  }

  return {
    title: t.seoTitle,
    description: t.seoDescription,
    alternates: {
      canonical: allPaths[locale],
      languages
    },
    openGraph: {
      title: t.seoTitle,
      description: t.seoDescription,
      url: allPaths[locale],
      images: [{ url: "/images/tax-law.jpg", width: 1200, height: 900, alt: t.seoTitle }]
    }
  };
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-black/75 sm:text-[15px]"
        >
          <span className="font-semibold text-black">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default async function AuditPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.audit;
  const contactHref = getLocalizedPath("/o-nas-a-kontakt", locale) + "#formular";

  return (
    <>
      <PageHero
        title={t.heroTitle}
        description={t.heroDescription}
        imageSrc="/images/tax-law.jpg"
        imageAlt={t.heroTitle}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: t.heroCards.flows, href: "#toky-firmy", image: "/images/tax-law.jpg" },
            {
              label: t.heroCards.compliance,
              href: "#compliance",
              image: "/images/compliance.jpg"
            },
            {
              label: t.heroCards.optimization,
              href: "#optimalizacia",
              image: "/images/contact-office.jpg"
            }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative flex h-28 items-end overflow-hidden rounded-2xl border border-black/10 transition hover:border-black/30"
            >
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
              <span className="relative px-4 pb-3 text-sm font-semibold leading-tight text-white">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <article
          id="toky-firmy"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-neutral-50/70 p-6 sm:p-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              {t.flows.badge}
            </h2>
            <p className="text-base leading-8 text-black/75">{t.flows.heading}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-black/8">
              <Image
                src="/images/audit-committee.jpg"
                alt={t.flows.audienceLabel}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-4 rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  {t.flows.statsLabel}
                </p>
                <div className="space-y-3">
                  {t.flows.stats.map((s) => (
                    <p key={s} className="text-base leading-8 text-black/80">
                      {s}
                    </p>
                  ))}
                </div>
              </div>
              <h3 className="font-display text-xl text-black sm:text-2xl">
                {t.flows.audienceLabel}
              </h3>
              <NumberedList items={t.flows.audience} />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-black sm:text-3xl">
              {t.flows.reasonsLabel}
            </h3>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  {locale === "en" ? "Accountant" : "Účtovník"}
                </p>
                <p className="text-base leading-8 text-black/75">
                  {t.flows.accountantIntro}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  {locale === "en" ? "Auditor" : "Audítor"}
                </p>
                <div className="space-y-3 text-base leading-8 text-black/75">
                  <p>{t.flows.auditorIntro}</p>
                  <FeatureList items={t.flows.auditorChecks} />
                  <p>{t.flows.doesNotMeanIntro}</p>
                  <FeatureList items={t.flows.doesNotMean} />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                  {locale === "en" ? "Auditor does not" : "Audítor nerobí"}
                </p>
                <div className="space-y-3 text-base leading-8 text-black/75">
                  <p>{t.flows.auditorDoesNotIntro}</p>
                  <FeatureList items={t.flows.auditorDoesNot} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-black sm:text-3xl">
                {t.flows.lossesLabel}
              </h3>
              <FeatureList items={t.flows.losses} />
            </div>

            <div className="space-y-4">
              <h3 className="font-display text-2xl font-semibold text-black sm:text-3xl">
                {t.flows.stepsLabel}
              </h3>
              <NumberedList items={t.flows.steps} />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-xl text-black sm:text-2xl">
                  {t.flows.disciplinesLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {t.flows.disciplines.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-black/10 bg-neutral-50 px-4 py-2 text-sm font-medium text-black/80"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  {t.flows.outcomesLabel}
                </p>
                <FeatureList items={t.flows.outcomes} />
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-black/8">
              <Image
                src="/images/tax-law.jpg"
                alt={t.flows.disciplinesLabel}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem]">
            <p className="text-base leading-8 text-black/75">{t.flows.summary1}</p>
            <p className="text-base leading-8 text-black/75">{t.flows.summary2}</p>
          </div>

          <div className="space-y-4 rounded-[1.75rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              {t.flows.packagesLabel}
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {t.flows.packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col rounded-[1.4rem] border p-5 ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50"
                      : index === 1
                        ? "border-orange-200 bg-orange-50"
                        : "border-red-200 bg-red-50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-black">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-black/70">{pkg.description}</p>
                  <FeatureList className="mt-4" items={pkg.items} />
                </div>
              ))}
            </div>
          </div>

          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <article
          id="compliance"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              {t.compliance.heading}
            </h2>
            <p className="text-base leading-8 text-black/75">{t.compliance.intro}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <h3 className="font-display text-xl text-black sm:text-2xl">
                {t.compliance.areasLabel}
              </h3>
              <FeatureList items={t.compliance.areas} />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-black/8">
              <Image
                src="/images/compliance.jpg"
                alt={t.compliance.areasLabel}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                {t.compliance.whistleblowingTipLabel}
              </p>
              <p className="mt-4 text-base leading-8 text-black/75">
                {t.compliance.whistleblowingTip}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-black sm:text-3xl">
                {t.compliance.dutiesLabel}
              </h3>
              <p className="text-base leading-8 text-black/75">
                {t.compliance.dutiesIntro}
              </p>
              <FeatureList className="mt-4" items={t.compliance.duties} />
            </div>
          </div>

          <p className="text-base leading-8 text-black/75">{t.compliance.outro}</p>

          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <article
          id="optimalizacia"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-neutral-50/80 p-6 sm:p-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              {t.optimization.heading}
            </h2>
            <p className="text-base italic leading-8 text-black/60">
              {t.optimization.preamble}
            </p>
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              {t.optimization.subheading}
            </h3>
            <p className="text-base leading-8 text-black/75">{t.optimization.intro}</p>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-black/8 bg-white p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              {t.optimization.whatLabel}
            </p>

            <div className="grid gap-4 lg:grid-cols-3">
              {t.optimization.cards.map((card) => (
                <div
                  key={card.title}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-semibold text-black">{card.title}</h3>
                  {card.items ? (
                    <FeatureList items={card.items} />
                  ) : null}
                  {card.text ? (
                    <FeatureList items={[card.text]} />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold text-black sm:text-3xl">
              {t.optimization.resultsLabel}
            </h3>
            <FeatureList items={t.optimization.results} />
          </div>

          <p className="text-base leading-8 text-black/75">{t.optimization.outro}</p>

          <CtaRow primaryHref={contactHref} primaryLabel={dict.cta.subsection} />
        </article>

        <CrossSellCard pageKey="audit" locale={locale} dictionary={dict} />
      </section>
    </>
  );
}
