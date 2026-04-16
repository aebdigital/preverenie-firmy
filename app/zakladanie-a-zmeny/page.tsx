import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Users } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Zakladanie spoločností a zmeny",
  description:
    "Založenie spoločností, registrácie a zmeny v existujúcich štruktúrach pod vedením advokátskej kancelárie LegisPro, s.r.o.",
  path: "/zakladanie-a-zmeny",
  image: "/images/contact-office.jpg"
});

const setupServices = [
  "Založenie spoločnosti s ručením obmedzeným (S.R.O.)",
  "Založenie akciovej spoločnosti (A.S.)",
  "Registrácia zoznamu akcionárov do Centrálneho depozitára cenných papierov",
  "Založenie občianskeho združenia či neziskovej organizácie",
  "Založenie družstva",
  "Zmeny v existujúcich štruktúrach, napríklad prevod obchodného podielu, zmena konateľa, konečného užívateľa výhod, sídla alebo predmetov podnikania"
];

const setupBenefits = [
  "Na diaľku, bez nevyhnutnosti osobnej návštevy",
  "Kompletný servis vrátane získania živnostenského oprávnenia",
  "Expresné vypracovanie dokumentov",
  "Poradenstvo a identifikácia vhodnej formy podnikania zahrnuté v cene",
  "Bez nutnosti vloženia základného imania na bankový účet",
  "Všetky doklady vypracované advokátskou kanceláriou LegisPro, s.r.o."
];

export default function ZakladaniePage() {
  return (
    <SiteShell>
      <PageHero
        badge="Zakladanie obchodných spoločností a zmeny"
        title="Nový subjekt nastavený tak, aby chránil Vaše záujmy od prvého dňa."
        description="Na rozdiel od bežných zakladateľských firiem sa na nový subjekt pozeráme očami advokátov a compliance špecialistov. Už pri vzniku nastavujeme základné procesy tak, aby firma fungovala v súlade so zákonom a vyhla sa budúcim rizikám."
        imageSrc="/images/contact-office.jpg"
        imageAlt="Zakladanie spoločností a korporátne zmeny"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6">
          <p className="text-sm leading-7 text-black/78">
            Táto služba prirodzene nadväzuje na{" "}
            <Link
              href="/preverenie-firmy#compliance"
              className="font-semibold text-black underline decoration-black/25 underline-offset-4"
            >
              compliance
            </Link>
            . Dokumenty nevyzerajú len dobre na papieri, ale chránia Vaše záujmy a sú
            pripravené tak, aby od prvého dňa vytvárali stabilný právny rámec.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-black/8 bg-neutral-50 p-6">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-black" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Čo zabezpečujeme
              </p>
            </div>
            <FeatureList className="mt-4" items={setupServices} />
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white p-6">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-700" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Výhody spolupráce
              </p>
            </div>
            <FeatureList className="mt-4" items={setupBenefits} />
            <p className="mt-5 text-sm leading-7 text-black/68">
              Všetky dokumenty vypracuje a celý proces zastrešuje advokátska kancelária
              LegisPro, s.r.o. Dokumenty sú nastavené tak, aby boli nielen v súlade s
              právnymi predpismi, ale najmä aby chránili Vaše záujmy.
            </p>
          </div>
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
