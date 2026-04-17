import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { ContactCards, SectionBadge } from "@/components/site-primitives";
import { contactDetails } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "O nás a kontakt",
  description:
    "LegisPro, s.r.o., advokátska kancelária. Informácie o kancelárii, kontakt a formulár pre dopyt.",
  path: "/o-nas-a-kontakt",
  image: "/images/contact-office.jpg"
});

const aboutPillars = [
  "Diskrétnosť: Vaše dáta sú u nás v absolútnom bezpečí",
  "Objektivita: Neprikrášľujeme realitu, hovoríme fakty",
  "Praktickosť: Nedávame len reporty, prinášame riešenia, ktoré fungujú v praxi",
  "Odbornosť: Všetky služby zabezpečuje naša advokátska kancelária"
];

export default function AboutContactPage() {
  return (
    <SiteShell>
      <PageHero
        badge="O nás a kontakt"
        title="LegisPro, s.r.o., advokátska kancelária."
        description="Sme Vaším partnerom pre integritu a rast. Našou snahou je vnášať transparentnosť tam, kde vládne neistota. Veríme, že zdravá firma nie je len tá, ktorá generuje zisk, ale tá, ktorá má čisté toky a efektívne procesy."
        imageSrc="/images/contact-office.jpg"
        imageAlt="Kontakt na advokátsku kanceláriu LegisPro"
        titleClassName="text-4xl sm:text-5xl"
      />

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="space-y-4 rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
              <p className="text-base leading-8 text-black/75">
                Spájame odborné znalosti z oblasti financií, legislatívy a procesného
                manažmentu, aby sme vám dodali podklady pre tie najdôležitejšie
                rozhodnutia.
              </p>
              <p className="text-base leading-8 text-black/75">
                V prípade, ak sa rozhodnete zmeniť formu podnikania, alebo podnikanie
                ukončiť, odborne Vás prevedieme celým procesom.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Naše piliere
              </p>
              <div className="mt-4 space-y-3">
                {aboutPillars.map((pillar) => (
                  <p key={pillar} className="text-sm leading-7 text-black/75">
                    {pillar}
                  </p>
                ))}
              </div>
            </div>

            <ContactCards />
          </div>

          <div id="formular" className="space-y-6 scroll-mt-32">
            <div className="rounded-[1.9rem] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Kontakt
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-black/72">
                <p>
                  <strong>E-mail:</strong> {contactDetails.email}
                </p>
                <p>
                  <strong>Telefón:</strong> {contactDetails.phone}
                </p>
                <p>
                  <strong>Adresa:</strong> {contactDetails.address.join(", ")}
                </p>
                <p>
                  <strong>Otváracie hodiny:</strong> {contactDetails.officeHours}
                </p>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-black/10 bg-neutral-50 p-6 sm:p-8">
              <div className="mb-6 space-y-3">
                <SectionBadge>Kontaktný formulár</SectionBadge>
                <h2 className="text-2xl font-semibold text-black sm:text-3xl">
                  Dohodnite si stretnutie / Vyžiadajte cenovú ponuku
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
