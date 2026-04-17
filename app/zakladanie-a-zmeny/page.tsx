import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { SiteShell } from "@/components/site-shell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Zakladanie spoločností a zmeny",
  description:
    "Zakladanie obchodných spoločností a zmeny pod vedením advokátskej kancelárie LegisPro, s.r.o.",
  path: "/zakladanie-a-zmeny",
  image: "/images/contact-office.jpg"
});

const setupServices = [
  "Založenie spoločnosti s ručením obmedzeným (S.R.O.)",
  "Založenie akciovej spoločnosti (A.S.)",
  "Registrácia zoznamu akcionárov do Centrálneho depozitára cenných papierov",
  "Založenie občianskeho združenia či neziskovej organizácie",
  "Založenie družstva",
  "Zmeny v existujúcich štruktúrach, ako napr. prevod obchodného podielu, zmena konateľa, konečného užívateľa výhod, adresy sídla alebo predmetov podnikania"
];

const setupBenefits = [
  "Na diaľku, osobná návšteva nie je nevyhnutná",
  "Kompletný servis vrátane získania živnostenského oprávnenia",
  "Expresné vypracovanie dokumentov",
  "Poradenstvo, najmä identifikácia na mieru ušitej formy podnikania, zahrnuté v cene",
  "Bez nutnosti vloženia základného imania na bankový účet",
  "Všetky doklady vypracované našou advokátskou kanceláriou LegisPro, s.r.o."
];

export default function ZakladaniePage() {
  return (
    <SiteShell>
      <PageHero
        badge="Zakladanie obchodných spoločností a zmeny"
        title="Zakladanie obchodných spoločností a zmeny"
        description="Prečo začať s nami? Na rozdiel od bežných „zakladateľských firiem“ sa na Váš nový subjekt pozeráme očami advokátov a compliance špecialistov. Už pri vzniku vám nastavíme základné procesy tak, aby ste od prvého dňa fungovali v súlade so zákonom a vyhli sa budúcim rizikám."
        imageSrc="/images/contact-office.jpg"
        imageAlt="Zakladanie spoločností a korporátne zmeny"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-black/8 bg-neutral-50 p-6">
            <FeatureList items={setupServices} />
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white p-6">
            <FeatureList items={setupBenefits} />
          </div>
        </div>

        <div className="space-y-4 rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6">
          <p className="text-base leading-8 text-black/75">
            Dokumenty sú vypracované tak, aby boli nielen v súlade s právnymi
            predpismi ale najmä aby chránili Vaše záujmy.
          </p>
          <p className="text-base leading-8 text-black/75">
            Všetky dokumenty vypracuje a celý proces zastrešuje naša advokátska
            kancelária.
          </p>
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
