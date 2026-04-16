import type { Metadata } from "next";
import Link from "next/link";
import { GitMerge, Scale } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Premeny a zlúčenia obchodných spoločností",
  description:
    "Fúzie, rozdelenia a zmeny právnej formy s právnym, daňovým a účtovným plánovaním.",
  path: "/premeny-a-zlucenia",
  image: "/images/litigation.jpg"
});

const transformationTypes = [
  "Fúzie a zlúčenia s cieľom daňovej optimalizácie alebo zníženia nákladov.",
  "Rozdelenia a odštiepenia pri diverzifikácii rizík alebo príprave na vstup investora.",
  "Zmeny právnej formy podľa aktuálnej legislatívy."
];

const transformationIncludes = [
  "Vypracovanie projektu premeny",
  "Audit a správa audítora",
  "Ochrana veriteľov a spoločníkov",
  "Komunikácia s registrom a uloženie projektu do zbierky listín",
  "Finálny zápis zmeny do príslušného registra",
  "Celý proces zabezpečuje advokátska kancelária LegisPro, s.r.o."
];

export default function PremenyPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Premeny a zlúčenia obchodných spoločností"
        title="Komplexné korporátne zmeny, ktoré majú právnu aj finančnú logiku."
        description="Ak máte viacero spoločností s rovnakým predmetom podnikania, rastiete, optimalizujete štruktúru alebo pripravujete firmu na predaj, prevedieme Vás celým procesom bezpečne a pod dohľadom aktuálnej legislatívy."
        imageSrc="/images/litigation.jpg"
        imageAlt="Premeny a zlúčenia obchodných spoločností"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <div className="grid gap-4">
              {transformationTypes.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.5rem] border p-5 ${
                    index === 0
                      ? "border-blue-100 bg-blue-50"
                      : index === 1
                        ? "border-black/8 bg-neutral-50"
                        : "border-red-100 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                      <GitMerge className="h-5 w-5 text-black" />
                    </div>
                    <p className="text-sm leading-7 text-black/78">{item}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
              <p className="text-sm leading-7 text-black/75">
                Vďaka tomu, že ponúkame aj{" "}
                <Link
                  href="/preverenie-firmy#toky-firmy"
                  className="font-semibold text-black underline decoration-black/25 underline-offset-4"
                >
                  preverenie tokov firmy
                </Link>{" "}
                a{" "}
                <Link
                  href="/preverenie-firmy#optimalizacia"
                  className="font-semibold text-black underline decoration-black/25 underline-offset-4"
                >
                  optimalizáciu procesov
                </Link>
                , nie sme len papieroví spracovatelia. Pred samotnou premenou analyzujeme
                finančné dopady a po jej skončení pomáhame nastaviť procesy v novej
                štruktúre.
              </p>
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-black/8 bg-white p-6">
            <div className="flex items-center gap-3">
              <Scale className="h-5 w-5 text-blue-700" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Služba zahŕňa
              </p>
            </div>
            <FeatureList className="mt-4" items={transformationIncludes} />
          </div>
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
