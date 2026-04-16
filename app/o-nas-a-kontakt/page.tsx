import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import {
  ContactCards,
  SectionBadge
} from "@/components/site-primitives";
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
  "Diskrétnosť: Vaše dáta sú u nás v absolútnom bezpečí.",
  "Objektivita: Neprikrášľujeme realitu, hovoríme fakty.",
  "Praktickosť: Nedávame len reporty, prinášame riešenia fungujúce v praxi.",
  "Odbornosť: Všetky služby zabezpečuje advokátska kancelária."
];

export default function AboutContactPage() {
  return (
    <SiteShell>
      <PageHero
        badge="O nás a kontakt"
        title="LegisPro, s.r.o., advokátska kancelária."
        description="Sme Vaším partnerom pre integritu a rast. Veríme, že zdravá firma nie je len tá, ktorá generuje zisk, ale tá, ktorá má čisté toky, efektívne procesy a rozhodnutia postavené na faktoch."
        imageSrc="/images/contact-office.jpg"
        imageAlt="Kontakt na advokátsku kanceláriu LegisPro"
      />

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <p className="text-base leading-8 text-black/72">
              Spájame odborné znalosti z oblasti financií, legislatívy a procesného
              manažmentu, aby sme Vám dodali podklady pre najdôležitejšie rozhodnutia.
              Ak sa rozhodnete zmeniť formu podnikania alebo podnikanie ukončiť,
              odborne Vás prevedieme celým procesom.
            </p>

            <div className="grid gap-4">
              {aboutPillars.map((pillar) => (
                <div key={pillar} className="rounded-[1.5rem] border border-black/8 bg-neutral-50 p-5">
                  <p className="text-sm leading-7 text-black/76">{pillar}</p>
                </div>
              ))}
            </div>

            <ContactCards />
          </div>

          <div id="formular" className="space-y-6 scroll-mt-32">
            <div className="rounded-[1.9rem] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Informácie o kancelárii
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
                  Napíšte nám a pripravíme ďalší krok.
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
