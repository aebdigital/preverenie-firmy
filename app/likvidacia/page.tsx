import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaRow, FeatureList } from "@/components/site-primitives";
import { SiteShell } from "@/components/site-shell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Likvidácia spoločností a neziskoviek",
  description:
    "Likvidácia obchodných spoločností a neziskoviek s právnou, účtovnou a daňovou podporou.",
  path: "/likvidacia",
  image: "/images/litigation.jpg"
});

const liquidationIntro = [
  "Prevezmeme celý proces",
  "Expresná likvidácia firmy či neziskovej organizácie/občianskeho združenia",
  "Daňová optimalizácia",
  "Vymáhanie pohľadávok"
];

const liquidationItems = [
  "Posúdenie či Vám nevznikla povinnosť vyhlásiť konkurz",
  "Príprava rozhodnutí, zápis do príslušného registra a výmaz z neho, splnenie notifikačných povinností",
  "Komunikácia s inštitúciami: Daňový úrad, poisťovne atď.",
  "Príprava a optimalizácia spoločnosti pred samotným výmazom",
  "Odborné vymáhanie pohľadávok",
  "Účtovné a daňové služby: Zostavenie mimoriadnych závierok a daňových priznaní",
  "Definitívne ukončenie existencie subjektu"
];

export default function LikvidaciaPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Likvidácia obchodných spoločností a neziskoviek"
        title="Likvidácia obchodných spoločností a neziskoviek"
        description="Likvidácia spoločnosti nemusí byť strašiakom. Či už ide o naplnenie podnikateľského cieľa, alebo strategické rozhodnutie o ukončení činnosti, zabezpečíme, aby celý proces prebehol v súlade s legislatívou."
        imageSrc="/images/litigation.jpg"
        imageAlt="Likvidácia spoločností a právna ochrana"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[1.8rem] border border-black/8 bg-neutral-50 p-6">
          <FeatureList items={liquidationIntro} />
        </div>

        <div className="space-y-4 rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6">
          <p className="text-base leading-8 text-black/75">
            Likvidácia spoločnosti nemusí byť strašiakom. Či už ide o naplnenie
            podnikateľského cieľa, alebo strategické rozhodnutie o ukončení činnosti,
            zabezpečíme, aby celý proces prebehol v súlade s legislatívou. Prevezmeme
            komunikáciu s úradmi, správcom dane a postaráme sa o korektné vymazanie
            firmy z obchodného registra. Vy získate istotu, že za vašou minulosťou
            zostali len poriadne uzavreté kapitoly.
          </p>
          <p className="text-base leading-8 text-black/75">
            Neodborné ukončenie firmy môže priniesť riziká, ktoré vás dobehnú aj po
            rokoch. Naša služba likvidácie spoločností sa zameriava na maximálnu
            ochranu štatutárov a spoločníkov. Detailne preveríme stav záväzkov,
            pripravíme potrebnú dokumentáciu a prevedieme vás procesom od vymenovania
            likvidátora až po záverečné rozdelenie likvidačného zostatku, a to vrátane
            daňovej optimalizácie. Neriskujte pokuty – stavte na odbornosť.
          </p>
        </div>

        <div className="rounded-[1.85rem] border border-black/8 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
            Naša služba obsahuje najmä
          </p>
          <FeatureList className="mt-4" items={liquidationItems} />
        </div>

        <CtaRow />
      </section>
    </SiteShell>
  );
}
