import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ShieldCheck, Workflow } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ContactCards, CtaRow, SectionBadge } from "@/components/site-primitives";
import {
  homeAudiences,
  homeServices,
  homeStats
} from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Úvod",
  description:
    "Úvodná stránka prevereniefirmy.sk s prehľadom služieb: preverenie firmy, compliance, optimalizácia procesov, zakladanie, likvidácia a premeny spoločností.",
  path: "/",
  image: "/images/legal-office.jpg"
});

const overviewPoints = [
  {
    title: "Preverenie tokov firmy",
    description:
      "Zistíme, kam, komu a odkedy odchádzajú peniaze, identifikujeme konflikty záujmov a pripravíme model škody."
  },
  {
    title: "Identifikácia rizík - compliance",
    description:
      "Pomáhame firmám rozpoznať právne, regulačné, reputačné aj zmluvné riziká skôr, než sa stanú problémom."
  },
  {
    title: "Nastavenie procesov - optimalizácia",
    description:
      "Mapujeme vnútorné procesy, odstraňujeme duplicity a nastavujeme kontrolné mechanizmy s merateľným dopadom."
  }
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b border-black/6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div className="space-y-8">
            <SectionBadge>Úvodná stránka</SectionBadge>

            <div className="space-y-5">
              <h1 className="font-display text-5xl leading-[0.95] text-balance text-black sm:text-6xl lg:text-7xl">
                Moderné preverenie firmy s právnym, finančným a procesným pohľadom.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
                Táto stránka funguje ako vstup do jednotlivých podstránok služieb.
                Každá záložka má vlastnú URL a vlastný obsah, aby bol web prehľadný,
                dôveryhodný a pripravený aj pre serióznejšiu firemnú prezentáciu.
              </p>
            </div>

            <CtaRow
              primaryHref="/o-nas-a-kontakt#formular"
              secondaryHref="/preverenie-firmy"
              secondaryLabel="Preskúmať služby"
            />

            <div className="grid gap-4 sm:grid-cols-3">
              {homeStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-black/8 bg-white p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                    {item.label}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-black">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-black/65">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black/45">
                Naša analýza je určená pre
              </p>
              <div className="flex flex-wrap gap-2">
                {homeAudiences.map((audience, index) => (
                  <span
                    key={audience}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      index % 3 === 0
                        ? "bg-blue-50 text-blue-800"
                        : index % 3 === 1
                          ? "bg-neutral-100 text-black"
                          : "bg-red-50 text-red-800"
                    }`}
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-12 hidden h-24 w-24 rounded-full bg-blue-100 blur-3xl lg:block" />
            <div className="absolute -bottom-10 right-0 hidden h-28 w-28 rounded-full bg-red-100 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/legal-office.jpg"
                  alt="Preverenie firmy a právne poradenstvo"
                  width={1200}
                  height={1400}
                  className="aspect-[4/5] w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-white/10" />
              </div>

              <div className="absolute bottom-10 left-10 right-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/30 bg-white/88 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
                    Preverenie tokov
                  </p>
                  <p className="mt-2 text-lg font-semibold text-black">
                    Oddelíme zdravé od toxického a pripravíme obhájiteľný prehľad.
                  </p>
                </div>
                <div className="rounded-[1.4rem] border border-white/30 bg-black p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                    LegisPro
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    Financie, compliance a právo pod jednou strechou.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-5">
          {homeServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group rounded-[1.75rem] border border-black/8 bg-gradient-to-br ${service.accentClass} p-6 transition hover:-translate-y-1 hover:border-black/15`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-black" />
                </div>
                <h2 className="mt-10 text-lg font-semibold text-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-black/65">{service.description}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Otvoriť podstránku
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/6 bg-neutral-50/80 py-18">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <SectionBadge>Jadro služby</SectionBadge>
              <h2 className="font-display text-4xl leading-tight text-balance text-black sm:text-5xl">
                Nie report pre report, ale podklad pre rozhodnutie.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
                Preverenie firmy u nás nekončí zistením problému. Kombinujeme finančnú
                analýzu, účtovníctvo, due diligence, compliance a právne prostriedky,
                aby výsledkom bol jasný prehľad, ochrana a priestor na ďalší rast.
              </p>
            </div>

            <div className="grid gap-4">
              {overviewPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`rounded-[1.6rem] border p-6 ${
                    index === 0
                      ? "border-blue-100 bg-blue-50"
                      : index === 1
                        ? "border-black/8 bg-white"
                        : "border-red-100 bg-red-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === 0 ? (
                      <Workflow className="h-5 w-5 text-blue-700" />
                    ) : index === 1 ? (
                      <ShieldCheck className="h-5 w-5 text-black" />
                    ) : (
                      <BadgeCheck className="h-5 w-5 text-red-700" />
                    )}
                    <h3 className="text-lg font-semibold text-black">{point.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-black/68">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-5 py-18 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <SectionBadge>Kontakt</SectionBadge>
          <h2 className="font-display text-4xl leading-tight text-balance text-black sm:text-5xl">
            Samostatná podstránka kontaktu je pripravená, ale najdôležitejšie údaje sú po ruke aj tu.
          </h2>
        </div>

        <ContactCards />
      </section>
    </SiteShell>
  );
}
