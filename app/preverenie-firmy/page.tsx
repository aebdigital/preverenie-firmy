import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import {
  CtaRow,
  FeatureList,
  SectionBadge
} from "@/components/site-primitives";
import { SiteShell } from "@/components/site-shell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Preverenie firmy",
  description:
    "Preverenie tokov firmy, identifikácia rizík - compliance a nastavenie procesov - optimalizácia.",
  path: "/preverenie-firmy",
  image: "/images/tax-law.jpg"
});

const audiences = [
  "Pre majiteľov",
  "Pre spoločníkov",
  "Pre investorov",
  "Konkurzné konania",
  "Likvidácie",
  "Dedičské konania",
  "Rozvody"
];

const auditorChecks = [
  "Váš účtovník postupoval pri zaúčtovaní dokladov v súlade s postupmi účtovania",
  "Vaša účtovná závierka podáva pravdivý a verný obraz",
  "Inak povedané, či Vaše čísla sedia s dokladmi a či sú zaúčtované podľa zákona"
];

const doesNotMean = [
  "firma nebola okradnutá",
  "dodávateľské ceny nie sú nafúknuté",
  "dodávateľ nie je toxicky prepojený s Vami spriaznenou osobou",
  "DPH schéma neexistuje"
];

const auditorDoesNot = [
  "Nevyhľadáva vinníkov",
  "Nezastupuje Vás ako klienta",
  "Neaplikuje právne prostriedky, aby Vás ochránil"
];

const losses = [
  "Fiktívnym faktúram",
  "Nevýhodným zmluvám s dodávateľmi, ktorí sú spriaznení s ich vlastným zamestnancom",
  "DPH schémam",
  "Tunelovaniu",
  "Sporom medzi spoločníkmi"
];

const flowSteps = [
  "Vypracujeme mapu finančných tokov (kam, kto, koľko, od kedy)",
  "Vypracujeme mapu reťazcov",
  "Identifikujeme osoby, ktoré sú s Vami v konflikte záujmov",
  "Vypracujeme model škody",
  "Určíme výšku škody",
  "Identifikujeme toxické subjekty",
  "Predložíme dôkazy",
  "Uplatníme právne prostriedky ochrany"
];

const flowDisciplines = [
  "Finančnej analýzy",
  "Účtovníctva",
  "Due diligence",
  "Compliance",
  "Právnej analýzy",
  "Uplatnenia prostriedkov právnej ochrany"
];

const flowOutcomes = [
  "Budete mať prehľad",
  "Ušetríte neefektívne vynakladanie zdrojov",
  "Získate finančné zdroje naspäť"
];

const packages = [
  {
    name: "Balík GREEN FLAG SCAN",
    description: "rýchly finančný prehľad firmy",
    items: [
      "analýzu účtovníctva za 12 mesiacov",
      "analýzu TOP 20 dodávateľov a odberateľov",
      "mapu toku peňazí",
      "kontrolu spriaznených osôb",
      "identifikáciu rizík",
      "odhad spôsobenej škody"
    ]
  },
  {
    name: "Balík ORANGE FLAG SCAN",
    description: "naviac oproti balíku GREEN FLAG SCAN",
    items: [
      "právnu kvalifikáciu",
      "návrh prostriedkov Vašej právnej ochrany"
    ]
  },
  {
    name: "Balík RED FLAG SCAN",
    description: "naviac oproti balíku ORANGE FLAG SCAN",
    items: [
      "uplatnenie právnych prostriedkov ochrany na súde",
      "zastupovanie v súdnom konaní"
    ]
  }
];

const complianceAreas = [
  "Regulačné riziká: Zmeny v legislatíve (napr. AML, GDPR, ochrana spotrebiteľa) a hrozba sankcií zo strany dozorných orgánov.",
  "Operačné riziká: Nedostatky v interných procesoch, ktoré môžu viesť k neúmyselnému porušeniu predpisov.",
  "Reputačné riziká: Možnosť poškodenia dobrého mena firmy v dôsledku neetického správania alebo korupcie.",
  "Zmluvné riziká: Riziká vyplývajúce zo zmluvných záväzkov."
];

const whistleblowingDuties = [
  "Povinnosť zaviesť vnútorný systém preverovania: Musíte mať zavedený bezpečný kanál na podávanie oznámení (online formulár, linka, pošta).",
  "Povinnosť určenia zodpovednej osoby: Firma musí vymenovať osobu (internú alebo externú), ktorá oznámenia prijíma a nezávisle preveruje.",
  "Povinnosť dodržiavania lehôt: Povinnosť potvrdiť prijatie oznámenia do 7 dní a vyriešiť ho do 90 dní.",
  "Zákaz odvety: Absolútna ochrana oznamovateľa pred výpoveďou či šikanovaním na pracovisku."
];

const processAuditItems = [
  "Zmapujeme súčasný stav",
  "Identifikujeme procesy a činnosti, ktoré neprinášajú žiadnu hodnotu"
];

const processRedesignItems = [
  "Navrhneme štíhlejšie a logickejšie postupy, ktoré zrýchlia vnútropodnikové procesy"
];

const optimizationResults = [
  "Zníženie prevádzkových nákladov: Menej zbytočných krokov znamená nižšie náklady na personál a réžiu.",
  "Vyššia zastupiteľnosť: Jasne definované procesy znamenajú, že odchod jedného človeka neohrozí chod celého oddelenia.",
  "Spokojnejší zamestnanci: Jasné kompetencie znižujú stres a frustráciu z neporiadku."
];

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-7 text-black/75 sm:text-[15px]"
        >
          <span className="font-semibold text-black">{index + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export default function PreverenieFirmyPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Preverenie firmy"
        title="Preverenie firmy"
        description="Preverenie tokov firmy, identifikácia rizík - compliance a nastavenie procesov - optimalizácia."
        imageSrc="/images/tax-law.jpg"
        imageAlt="Preverenie firmy a finančných tokov"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#toky-firmy"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Preverenie tokov firmy
          </a>
          <a
            href="#compliance"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Identifikácia rizík - compliance
          </a>
          <a
            href="#optimalizacia"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Nastavenie procesov - optimalizácia
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Preverenie tokov firmy",
            "Identifikácia rizík - compliance",
            "Nastavenie procesov - optimalizácia"
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[1.75rem] border p-6 ${
                index === 0
                  ? "border-blue-100 bg-blue-50"
                  : index === 1
                    ? "border-black/8 bg-white"
                    : "border-red-100 bg-red-50"
              }`}
            >
              <h2 className="text-xl font-semibold leading-snug text-black">{item}</h2>
            </div>
          ))}
        </div>

        <article
          id="toky-firmy"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-neutral-50/70 p-6 sm:p-8"
        >
          <div className="space-y-4">
            <SectionBadge>Preverenie tokov firmy</SectionBadge>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Poskytujeme preverenie Vašich finančných tokov a identifikáciu rizík.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Podľa štatistiky
              </p>
              <div className="mt-4 space-y-3 text-base leading-8 text-black/75">
                <p>70% firiem má spriaznené osoby</p>
                <p>90% tunelovania ide cez fakturáciu</p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Naša analýza je určená pre
              </p>
              <NumberedList items={audiences} />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Dôvody prečo s nami spolupracovať
              </p>
              <div className="mt-4 space-y-4 text-base leading-8 text-black/75">
                <p>
                  Váš účtovník IBA zaúčtuje doklady, ktoré dostane. Nijako neposudzuje
                  ich opodstatnenie.
                </p>
                <div className="space-y-3">
                  <p>Váš audítor preverí, či:</p>
                  <FeatureList items={auditorChecks} />
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <div className="space-y-4 text-base leading-8 text-black/75">
                <div className="space-y-3">
                  <p>... čo ale neznamená, že:</p>
                  <FeatureList items={doesNotMean} />
                </div>
                <div className="space-y-3">
                  <p>Na druhej strane audítor:</p>
                  <FeatureList items={auditorDoesNot} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Firmy prichádzajú o časť obratu kvôli
              </p>
              <FeatureList className="mt-4" items={losses} />
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Zistíme realitu – oddelíme zdravé od toxického – pripravíme prehľad
              </p>
              <div className="mt-4">
                <NumberedList items={flowSteps} />
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Naša práca spočíva v kombinácii
              </p>
              <FeatureList className="mt-4" items={flowDisciplines} />
            </div>

            <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Výsledkom čoho
              </p>
              <FeatureList className="mt-4" items={flowOutcomes} />
            </div>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-blue-100 bg-blue-50 p-6">
            <p className="text-base leading-8 text-black/75">
              Preverenie tokov nie je len o číslach v tabuľke. Je to hĺbkový sken
              zdravia Vašej firmy. Identifikujeme, kde sa peniaze zbytočne strácajú a
              či sú Vaše transakcie v súlade s Vašimi záujmami a stratégiou.
            </p>
            <p className="text-base leading-8 text-black/75">
              Či už plánujete akvizíciu, alebo chcete upratať vo vlastnom podnikaní,
              detailný audit tokov Vám dodá potrebný pokoj. Preveríme históriu
              transakcií, odhalíme neštandardné operácie a nastavíme zrkadlo Vašej
              finančnej kondícii. S nami budete presne vedieť, odkiaľ peniaze
              prichádzajú a kam skutočne odchádzajú.
            </p>
          </div>

          <div className="space-y-4 rounded-[1.75rem] border border-black/8 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Ponúkané balíky
            </p>
            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`rounded-[1.4rem] border p-5 ${
                    index === 0
                      ? "border-emerald-200 bg-emerald-50"
                      : index === 1
                        ? "border-orange-200 bg-orange-50"
                        : "border-red-200 bg-red-50"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-black">{pkg.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-black/70">{pkg.description}</p>
                  <FeatureList className="mt-4" items={pkg.items} />
                </div>
              ))}
            </div>
          </div>

          <CtaRow />
        </article>

        <article
          id="compliance"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8"
        >
          <div className="space-y-4">
            <SectionBadge>Identifikácia rizík - compliance</SectionBadge>
            <p className="text-base leading-8 text-black/75">
              Proces identifikácie rizík predstavuje jeden zo základných pilierov pre
              úspešné riadenie firmy. Cieľom je včasné rozpoznanie a zaevidovanie
              všetkých faktorov, ktoré by mohli viesť k porušeniu právnych predpisov,
              interných noriem alebo k ich nesúladu s platnými právnymi normami.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-neutral-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Kľúčové oblasti sledovania
            </p>
            <FeatureList className="mt-4" items={complianceAreas} />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-blue-100 bg-blue-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Tip: Viete o povinnosti zaviesť systém ochrany oznamovateľov protispoločenskej činnosti – tzv. Whistleblowing
              </p>
              <p className="mt-4 text-base leading-8 text-black/75">
                Whistleblowing nepredstavuje „donášanie“, ale je to jeden z efektívnych
                spôsobov vnútornej kontroly firmy, ktorý umožňuje odhaliť podvody,
                korupciu alebo iné nekalé praktiky skôr, než spôsobia nenapraviteľné
                škody.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-red-100 bg-red-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                Vaše zákonné povinnosti
              </p>
              <p className="mt-4 text-base leading-8 text-black/75">
                Ak zamestnávate 50 a viac zamestnancov (alebo pôsobíte v špecifických
                sektoroch ako finančné služby), zákon vám ukladá nasledovné povinnosti:
              </p>
              <FeatureList className="mt-4" items={whistleblowingDuties} />
            </div>
          </div>

          <p className="text-base leading-8 text-black/75">
            Neváhajte nás kontaktovať pre viac informácií k tejto téme.
          </p>

          <CtaRow />
        </article>

        <article
          id="optimalizacia"
          className="scroll-mt-32 space-y-8 rounded-[2rem] border border-black/8 bg-neutral-50/80 p-6 sm:p-8"
        >
          <div className="space-y-4">
            <SectionBadge>Nastavenie procesov - optimalizácia</SectionBadge>
            <p className="text-base leading-8 text-black/75">
              Tento segment je pre klientov najatraktívnejší, pretože im priamo sľubuje
              úsporu peňazí a času.
            </p>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Optimalizácia procesov = Od chaosu k efektivite
            </h2>
            <p className="text-base leading-8 text-black/75">
              Máte pocit, že Vaša firma rastie, ale zisky stagnujú? Často sú za tým
              „neviditeľní zlodeji“ – neefektívne nastavené procesy, duplicita úloh a
              zlé odovzdávanie informácií. Naša optimalizácia nie je o teórii, ale o
              odstránení bariér, ktoré brzdia váš biznis.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Čo presne pre vás urobíme
            </p>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
                <h3 className="text-lg font-semibold text-black">Procesný audit</h3>
                <FeatureList className="mt-4" items={processAuditItems} />
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
                <h3 className="text-lg font-semibold text-black">Redizajn tokov</h3>
                <FeatureList className="mt-4" items={processRedesignItems} />
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white p-6">
                <h3 className="text-lg font-semibold text-black">Eliminácia chýb</h3>
                <p className="mt-4 text-sm leading-7 text-black/75">
                  Nastavíme kontrolné mechanizmy tak, aby sa minimalizoval ľudský
                  faktor a potreba neustálych opráv.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-black/8 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
              Merateľné výsledky pre Vašu firmu
            </p>
            <FeatureList className="mt-4" items={optimizationResults} />
          </div>

          <p className="text-base leading-8 text-black/75">
            Neváhajte nás kontaktovať pre viac informácií k tejto téme.
          </p>

          <CtaRow />
        </article>
      </section>
    </SiteShell>
  );
}
