import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Landmark,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TriangleAlert,
  Workflow
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import {
  CtaRow,
  FeatureList,
  SectionBadge
} from "@/components/site-primitives";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Preverenie firmy",
  description:
    "Preverenie finančných tokov firmy, identifikácia rizík, compliance a optimalizácia procesov pod jednou službou.",
  path: "/preverenie-firmy",
  image: "/images/tax-law.jpg"
});

const losses = [
  "Fiktívne faktúry",
  "Nevýhodné zmluvy s dodávateľmi prepojenými na vlastných zamestnancov",
  "DPH schémy",
  "Tunelovanie",
  "Spory medzi spoločníkmi"
];

const flowSteps = [
  "Vypracujeme mapu finančných tokov: kam, kto, koľko a od kedy.",
  "Vypracujeme mapu reťazcov.",
  "Identifikujeme osoby, ktoré sú s Vami v konflikte záujmov.",
  "Vypracujeme model škody.",
  "Určíme výšku škody.",
  "Identifikujeme toxické subjekty.",
  "Predložíme dôkazy.",
  "Uplatníme právne prostriedky ochrany."
];

const flowDisciplines = [
  "Finančná analýza",
  "Účtovníctvo",
  "Due diligence",
  "Compliance",
  "Právna analýza",
  "Uplatnenie prostriedkov právnej ochrany"
];

const flowOutcomes = [
  "Budete mať prehľad",
  "Ušetríte neefektívne vynakladanie zdrojov",
  "Získate finančné zdroje naspäť"
];

const packages = [
  {
    name: "GREEN FLAG SCAN",
    tone: "Rýchly finančný prehľad firmy",
    description: "Prvá vrstva orientácie v tokoch, vzťahoch a rizikách.",
    accentClass: "border-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-800",
    items: [
      "Analýza účtovníctva za 12 mesiacov",
      "Analýza TOP 20 dodávateľov a odberateľov",
      "Mapa toku peňazí",
      "Kontrola spriaznených osôb",
      "Identifikácia rizík",
      "Odhad spôsobenej škody"
    ]
  },
  {
    name: "ORANGE FLAG SCAN",
    tone: "Rozšírenie o právnu kvalifikáciu",
    description: "Dopĺňa základný scan o právny rámec a návrh ochrany.",
    accentClass: "border-orange-500",
    badgeClass: "bg-orange-50 text-orange-800",
    items: [
      "Všetko z balíka GREEN FLAG SCAN",
      "Právna kvalifikácia zistení",
      "Návrh prostriedkov Vašej právnej ochrany"
    ]
  },
  {
    name: "RED FLAG SCAN",
    tone: "Plná ochrana vrátane súdu",
    description: "Pre prípady, v ktorých treba prejsť od analýzy k aktívnemu vymáhaniu.",
    accentClass: "border-red-600",
    badgeClass: "bg-red-50 text-red-800",
    items: [
      "Všetko z balíka ORANGE FLAG SCAN",
      "Uplatnenie právnych prostriedkov ochrany na súde",
      "Zastupovanie v súdnom konaní"
    ]
  }
];

const complianceAreas = [
  "Regulačné riziká: zmeny v legislatíve, AML, GDPR, ochrana spotrebiteľa a riziko sankcií.",
  "Operačné riziká: nedostatky vo vnútorných procesoch, ktoré vedú k neúmyselnému porušeniu predpisov.",
  "Reputačné riziká: poškodenie dobrého mena firmy v dôsledku neetického správania alebo korupcie.",
  "Zmluvné riziká: riziká vyplývajúce zo zmluvných záväzkov a ich nastavenia."
];

const whistleblowingDuties = [
  "Zaviesť bezpečný vnútorný systém preverovania oznámení.",
  "Určiť zodpovednú osobu, internú alebo externú, ktorá oznámenia prijíma a preveruje.",
  "Potvrdiť prijatie oznámenia do 7 dní a vybaviť ho do 90 dní.",
  "Chrániť oznamovateľa pred odvetou, výpoveďou a šikanou."
];

const optimizationActions = [
  {
    title: "Procesný audit",
    description:
      "Zmapujeme aktuálny stav a identifikujeme procesy a činnosti, ktoré neprinášajú žiadnu hodnotu."
  },
  {
    title: "Redizajn tokov",
    description:
      "Navrhneme štíhlejšie a logickejšie postupy, ktoré zrýchlia vnútropodnikové procesy."
  },
  {
    title: "Eliminácia chýb",
    description:
      "Nastavíme kontrolné mechanizmy tak, aby sa minimalizoval ľudský faktor a potreba neustálych opráv."
  }
];

const optimizationResults = [
  "Zníženie prevádzkových nákladov vďaka odstráneniu zbytočných krokov.",
  "Vyššia zastupiteľnosť a odolnejší chod oddelení.",
  "Spokojnejší zamestnanci s jasnejšími kompetenciami."
];

export default function PreverenieFirmyPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Preverenie firmy"
        title="Toky, riziká a procesy v jednej logike."
        description="Prvá záložka zo zadania je teraz samostatná podstránka. Združuje preverenie tokov firmy, identifikáciu rizík a optimalizáciu procesov tak, aby si klient vedel prejsť tému do hĺbky bez miešania s ostatnými službami."
        imageSrc="/images/tax-law.jpg"
        imageAlt="Preverenie firmy a finančných tokov"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href="#toky-firmy"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Toky firmy
          </a>
          <a
            href="#compliance"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Compliance
          </a>
          <a
            href="#optimalizacia"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black/70 transition hover:border-black/25 hover:text-black"
          >
            Optimalizácia
          </a>
        </div>
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-10 px-5 py-16 sm:px-6 lg:px-8">
        <article
          id="toky-firmy"
          className="scroll-mt-32 grid gap-8 rounded-[2rem] border border-black/8 bg-neutral-50/70 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <SectionBadge>Preverenie tokov firmy</SectionBadge>
              <h2 className="text-3xl font-semibold text-black sm:text-4xl">
                Poskytujeme preverenie Vašich finančných tokov a identifikáciu rizík.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-black/70">
                Zistíme realitu, oddelíme zdravé od toxického a pripravíme prehľad, s
                ktorým sa dá ďalej pracovať manažérsky aj právne.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Dôvod, prečo nás klienti oslovujú
                </p>
                <p className="mt-4 text-sm leading-7 text-black/72">
                  Váš účtovník iba zaúčtuje doklady, ktoré dostane, a nijako neposudzuje
                  ich opodstatnenie.
                </p>
                <div className="mt-4 rounded-2xl bg-neutral-50 p-4">
                  <p className="text-sm leading-7 text-black/72">
                    Audítor preverí, či účtovník postupoval v súlade s postupmi
                    účtovania a či účtovná závierka podáva pravdivý a verný obraz.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Čo to ešte negarantuje
                </p>
                <FeatureList
                  className="mt-4"
                  items={[
                    "Firma nebola okradnutá.",
                    "Dodávateľské ceny nie sú nafúknuté.",
                    "Dodávateľ nie je toxicky prepojený so spriaznenou osobou.",
                    "DPH schéma neexistuje."
                  ]}
                />
                <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm leading-7 text-red-950">
                  Audítor zároveň nevyhľadáva vinníkov, nezastupuje Vás ako klienta a
                  neaplikuje právne prostriedky, aby Vás chránil.
                </div>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <TriangleAlert className="h-5 w-5 text-red-700" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Firmy prichádzajú o časť obratu kvôli
                  </p>
                </div>
                <FeatureList className="mt-4" items={losses} />
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <div className="flex items-center gap-3">
                  <Workflow className="h-5 w-5 text-blue-700" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Zistíme realitu
                  </p>
                </div>
                <FeatureList className="mt-4" items={flowSteps} />
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Naša práca stojí na kombinácii
                </p>
                <FeatureList className="mt-4" items={flowDisciplines} />
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Výsledkom je
                </p>
                <FeatureList className="mt-4" items={flowOutcomes} />
              </div>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-blue-100 bg-blue-50 p-6">
              <p className="text-base leading-8 text-black/75">
                Preverenie tokov nie je len o číslach v tabuľke. Je to hĺbkový sken
                zdravia Vašej firmy. Identifikujeme, kde sa peniaze zbytočne strácajú
                a či sú Vaše transakcie v súlade s Vašimi záujmami a stratégiou.
              </p>
              <p className="text-base leading-8 text-black/75">
                Či už plánujete akvizíciu, alebo chcete upratať vo vlastnom podnikaní,
                detailný audit tokov Vám dodá potrebný pokoj.
              </p>
            </div>

            <CtaRow />
          </div>

          <div className="space-y-6">
            <div className="space-y-4 rounded-[1.8rem] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-3">
                <Landmark className="h-5 w-5 text-black" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Ponúkané balíky
                </p>
              </div>
              <div className="space-y-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={`rounded-[1.4rem] border border-black/8 border-l-4 bg-neutral-50 p-5 ${pkg.accentClass}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-black">{pkg.name}</h3>
                        <p className="text-sm text-black/65">{pkg.tone}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${pkg.badgeClass}`}>
                        {pkg.description}
                      </span>
                    </div>
                    <FeatureList className="mt-4" items={pkg.items} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article
          id="compliance"
          className="scroll-mt-32 grid gap-8 rounded-[2rem] border border-black/8 bg-white p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="space-y-6">
            <SectionBadge>Identifikácia rizík - compliance</SectionBadge>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Riziká treba rozpoznať skôr, než začnú riadiť firmu za Vás.
            </h2>
            <p className="text-base leading-8 text-black/72">
              Proces identifikácie rizík patrí medzi základné piliere úspešného
              riadenia firmy. Cieľom je včas rozpoznať a zaevidovať faktory, ktoré by
              mohli viesť k porušeniu právnych predpisov, interných noriem alebo k
              nesúladu s platnými právnymi normami.
            </p>

            <div className="rounded-[1.75rem] border border-black/8 bg-neutral-50 p-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-blue-700" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Tip: Whistleblowing
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-black/72">
                Whistleblowing nepredstavuje „donášanie“. Je to efektívny nástroj
                vnútornej kontroly firmy, ktorý umožňuje odhaliť podvody, korupciu a
                iné nekalé praktiky skôr, než spôsobia nenapraviteľné škody.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-red-100 bg-red-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-900/75">
                Vaše zákonné povinnosti
              </p>
              <p className="mt-4 text-sm leading-7 text-red-950">
                Ak zamestnávate 50 a viac zamestnancov alebo pôsobíte v špecifických
                sektoroch, napríklad vo finančných službách, zákon Vám ukladá jasné
                povinnosti.
              </p>
              <FeatureList className="mt-4" items={whistleblowingDuties} />
            </div>
          </div>

          <div className="space-y-4">
            {complianceAreas.map((area, index) => (
              <div
                key={area}
                className={`rounded-[1.5rem] border p-5 ${
                  index % 2 === 0
                    ? "border-blue-100 bg-blue-50"
                    : "border-black/8 bg-neutral-50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white">
                    {index === 0 ? (
                      <ShieldCheck className="h-5 w-5 text-blue-700" />
                    ) : index === 1 ? (
                      <SlidersHorizontal className="h-5 w-5 text-black" />
                    ) : index === 2 ? (
                      <Sparkles className="h-5 w-5 text-red-700" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-black" />
                    )}
                  </div>
                  <p className="text-sm leading-7 text-black/78">{area}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article
          id="optimalizacia"
          className="scroll-mt-32 grid gap-8 rounded-[2rem] border border-black/8 bg-neutral-50/80 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="space-y-6">
            <SectionBadge>Nastavenie procesov - optimalizácia</SectionBadge>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl">
              Od chaosu k efektivite.
            </h2>
            <p className="text-base leading-8 text-black/72">
              Tento segment je pre klientov atraktívny preto, že sľubuje priamu úsporu
              peňazí a času. Ak firma rastie, ale zisky stagnujú, často sú za tým
              neviditeľní zlodeji: neefektívne nastavené procesy, duplicita úloh a zlé
              odovzdávanie informácií.
            </p>

            <div className="grid gap-4">
              {optimizationActions.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <Workflow className="h-5 w-5 text-blue-700" />
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/68">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-black/8 bg-white p-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 text-red-700" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                  Merateľné výsledky
                </p>
              </div>
              <FeatureList className="mt-4" items={optimizationResults} />
            </div>

            <div className="rounded-[1.8rem] border border-blue-100 bg-blue-50 p-6">
              <p className="text-sm leading-7 text-black/75">
                Táto podstránka prirodzene nadväzuje aj na ďalšie služby. Ak klient ešte
                len zakladá novú štruktúru, vhodným pokračovaním je{" "}
                <Link
                  href="/zakladanie-a-zmeny"
                  className="font-semibold text-black underline decoration-black/25 underline-offset-4"
                >
                  zakladanie a zmeny
                </Link>
                . Ak naopak rieši reštrukturalizáciu, nadväzuje sekcia{" "}
                <Link
                  href="/premeny-a-zlucenia"
                  className="font-semibold text-black underline decoration-black/25 underline-offset-4"
                >
                  premeny a zlúčenia
                </Link>
                .
              </p>
            </div>

            <CtaRow />
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
