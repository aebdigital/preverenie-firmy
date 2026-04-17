import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { ContactCards } from "@/components/site-primitives";
import { contactDetails } from "@/lib/site-content";
import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "@/i18n-config";
import { getAllLocalizedPaths } from "@/pathnames";
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
  const t = dict.contact;
  const allPaths = getAllLocalizedPaths("/o-nas-a-kontakt");
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

export default async function ContactPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang as Locale;
  const dict = await getDictionary(locale);
  const t = dict.contact;

  return (
    <>
      <PageHero
        title={t.heroTitle}
        description={t.heroDescription}
        imageSrc="/images/contact-office.jpg"
        imageAlt={t.heroTitle}
        titleClassName="text-4xl sm:text-5xl"
      />

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="space-y-4 rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                {t.missionLabel}
              </p>
              <p className="text-base leading-8 text-black/75">{t.missionText}</p>
            </div>

            <div className="rounded-[1.8rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                {t.valuesLabel}
              </p>
              <div className="mt-4 space-y-3">
                {t.values.map((v) => (
                  <p key={v} className="text-sm leading-7 text-black/75">
                    {v}
                  </p>
                ))}
              </div>
            </div>

            <ContactCards />
          </div>

          <div id="formular" className="space-y-6 scroll-mt-32">
            <div className="rounded-[1.9rem] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                {t.contactLabel}
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                <p>
                  <strong>E-mail:</strong> {contactDetails.email}
                </p>
                <p>
                  <strong>{locale === "en" ? "Phone" : "Telefón"}:</strong>{" "}
                  {contactDetails.phone}
                </p>
                <p>
                  <strong>{locale === "en" ? "Address" : "Adresa"}:</strong>{" "}
                  {contactDetails.address.join(", ")}
                </p>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-black/10 bg-neutral-50 p-6 sm:p-8">
              <div className="mb-6 space-y-3">
                <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                  {t.formTitle}
                </h2>
              </div>
              <ContactForm labels={t.form} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
