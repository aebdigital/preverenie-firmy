import type { Metadata } from "next";
import { Gavel } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Likvidácia spoločností a neziskoviek",
  description:
    "Expresná likvidácia spoločností, neziskových organizácií a občianskych združení s právnou a daňovou podporou.",
  path: "/likvidacia",
  image: "/images/litigation.jpg"
});

const liquidationItems = [
  "Posúdenie, či Vám nevznikla povinnosť vyhlásiť konkurz",
  "Príprava rozhodnutí, zápisov do príslušného registra a výmazu z neho",
  "Komunikácia s inštitúciami, daňovým úradom a poisťovňami",
  "Príprava a optimalizácia spoločnosti pred samotným výmazom",
  "Odborné vymáhanie pohľadávok",
  "Účtovné a daňové služby vrátane mimoriadnych závierok a daňových priznaní",
  "Definitívne ukončenie existencie subjektu"
];

export default function LikvidaciaPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Likvidácia obchodných spoločností a neziskoviek"
        title="Ukončenie subjektu bez zbytočného chaosu a s maximálnou ochranou štatutárov."
        description="Likvidácia spoločnosti nemusí byť strašiakom. Či už ide o naplnenie podnikateľského cieľa alebo strategické rozhodnutie ukončiť činnosť, prevezmeme celý proces tak, aby prebehol v súlade s legislatívou."
        imageSrc="/images/litigation.jpg"
        imageAlt="Likvidácia spoločností a právna ochrana"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="space-y-4 rounded-[1.8rem] border border-red-100 bg-red-50 p-6">
              <p className="text-base leading-8 text-red-950">
                Neodborné ukončenie firmy môže priniesť riziká, ktoré Vás dobehnú aj po
                rokoch. Detailne preveríme stav záväzkov, pripravíme dokumentáciu a
                prevedieme Vás procesom od vymenovania likvidátora až po záverečné
                rozdelenie likvidačného zostatku.
              </p>
              <p className="text-base leading-8 text-red-950">
                Súčasťou služby je aj daňová optimalizácia a odborné vymáhanie
                pohľadávok, aby za minulosťou ostali len poriadne uzavreté kapitoly.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
              <p className="text-sm leading-7 text-black/75">
                Zabezpečíme expresnú likvidáciu firmy či neziskovej organizácie,
                prevezmeme komunikáciu s úradmi a postaráme sa o korektné vymazanie
                subjektu z príslušného registra.
              </p>
            </div>
          </div>

          <div className="rounded-[1.85rem] border border-black/8 bg-white p-6">
            <div className="flex items-center gap-3">
              <Gavel className="h-5 w-5 text-red-700" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Služba obsahuje najmä
              </p>
            </div>
            <FeatureList className="mt-4" items={liquidationItems} />
          </div>
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
