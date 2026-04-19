import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CrossSellCard } from "@/components/cross-sell-card";
import { PageHero } from "@/components/page-hero";
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
      >
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-black sm:text-2xl">
            {t.introLabel}
          </h2>
          <p className="text-base leading-8 text-black/75">{t.introText1}</p>
          <p className="text-base leading-8 text-black/75">{t.introText2}</p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 pb-16 pt-2 sm:px-6 lg:px-8">

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            {t.pillarsLabel}
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-[1.2rem] border border-black/8 bg-neutral-50 p-4"
              >
                <h3 className="text-base font-semibold text-black">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="formular" className="grid gap-6 scroll-mt-32 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-black sm:text-3xl">{t.contactLabel}</h2>
              <div className="space-y-3 text-sm leading-7 text-black/72">
                <p>
                  <strong>E-mail:</strong>{" "}
                  <a href={contactDetails.emailHref} className="hover:text-black">
                    {contactDetails.email}
                  </a>
                </p>
                <p>
                  <strong>{locale === "en" ? "Phone" : "Telefón"}:</strong>{" "}
                  <a href={contactDetails.phoneHref} className="hover:text-black">
                    {contactDetails.phone}
                  </a>
                </p>
                <p>
                  <strong>{locale === "en" ? "Address" : "Adresa"}:</strong>{" "}
                  {contactDetails.address.join(", ")}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.8rem] border border-black/8">
              <iframe
                src="https://www.google.com/maps?q=LegisPro+s.r.o.,+Sl%C3%A1dkovi%C4%8Dova+1,+949+01+Nitra&output=embed"
                title={t.heroTitle}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
                allowFullScreen
              />
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

        <CrossSellCard pageKey="contact" locale={locale} dictionary={dict} />
      </section>
    </>
  );
}
