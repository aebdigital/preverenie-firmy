import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { SiteShell } from "@/components/site-shell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Premeny a zlúčenia obchodných spoločností",
  description:
    "Premeny a zlúčenia obchodných spoločností s právnym, daňovým a účtovným plánovaním.",
  path: "/premeny-a-zlucenia",
  image: "/images/litigation.jpg"
});

const transformationTypes = [
  "Fúzie (zlúčenia): Spojenie dvoch alebo viacerých spoločností do jedného silného celku s cieľom dosiahnuť daňovú optimalizáciu alebo znížiť náklady.",
  "Rozdelenia a odštiepenia: Oddelenie časti podniku do novej spoločnosti, ideálne pri diverzifikácii rizík alebo príprave na vstup investora.",
  "Zmeny právnej formy"
];

const transformationIncludes = [
  "Vypracovanie projektu premeny: Základný dokument, ktorý musí spĺňať všetky zákonné náležitosti",
  "Audit a správa audítora: Zabezpečíme povinné preskúmanie projektu premeny nezávislým expertom",
  "Ochrana veriteľov a spoločníkov: Nastavíme proces tak, aby prebehol hladko a bez právnych napadnutí",
  "Komunikácia s registrom: Zabezpečíme uloženie projektu do zbierky listín a finálny zápis zmeny do príslušného registra",
  "Celý proces zabezpečuje naša advokátska kancelária LegisPro, s.r.o."
];

export default function PremenyPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Premeny a zlúčenia obchodných spoločností"
        title="Premeny a zlúčenia obchodných spoločností"
        description="Máte viacero spoločností s rovnakým predmetom podnikania, rastiete, optimalizujete štruktúru alebo pripravujete firmu na predaj? Procesné zmeny v korporátnej štruktúre sú komplexnou operáciou, ktorá si vyžaduje precízne právne, daňové a účtovné plánovanie."
        imageSrc="/images/litigation.jpg"
        imageAlt="Premeny a zlúčenia obchodných spoločností"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
          <FeatureList items={transformationTypes} />
        </div>

        <div className="rounded-[1.85rem] border border-black/8 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Služba zahŕňa
          </p>
          <FeatureList className="mt-4" items={transformationIncludes} />
        </div>

        <div className="rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6">
          <p className="text-base leading-8 text-black/75">
            Vďaka tomu, že ponúkame aj{" "}
            <Link
              href="/preverenie-firmy#toky-firmy"
              className="font-semibold text-black underline decoration-black/25 underline-offset-4"
            >
              Preverenie tokov firmy
            </Link>{" "}
            a{" "}
            <Link
              href="/preverenie-firmy#optimalizacia"
              className="font-semibold text-black underline decoration-black/25 underline-offset-4"
            >
              Optimalizáciu procesov
            </Link>
            , nie sme len „papieroví“ spracovatelia. Pred samotnou premenou analyzujeme
            finančné dopady a po jej skončení vám pomôžeme nastaviť procesy v novej
            štruktúre tak, aby bola od prvého dňa efektívna.
          </p>
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
