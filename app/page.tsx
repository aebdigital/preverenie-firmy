import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { CtaRow } from "@/components/site-primitives";
import { SiteShell } from "@/components/site-shell";
import { navigation } from "@/lib/site-content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Úvod",
  description:
    "Úvodná stránka prevereniefirmy.sk s prehľadom služieb: preverenie firmy, compliance, optimalizácia procesov, zakladanie, likvidácia a premeny spoločností.",
  path: "/",
  image: "/images/legal-office.jpg"
});

export default function HomePage() {
  const overviewItems = navigation.filter((item) => item.href !== "/");

  return (
    <SiteShell>
      <PageHero
        badge="Úvodná stránka"
        title="Preverenie firmy"
        description="Preverenie tokov firmy, identifikácia rizík - compliance, nastavenie procesov - optimalizácia, zakladanie obchodných spoločností a zmeny, likvidácia obchodných spoločností a neziskoviek, premeny a zlúčenia obchodných spoločností."
        imageSrc="/images/legal-office.jpg"
        imageAlt="Preverenie firmy a právne poradenstvo"
      >
        <CtaRow />
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {overviewItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-[1.75rem] border p-6 transition hover:-translate-y-1 hover:border-black/18 ${
                index % 3 === 0
                  ? "border-blue-100 bg-blue-50"
                  : index % 3 === 1
                    ? "border-black/8 bg-white"
                    : "border-red-100 bg-red-50"
              }`}
            >
              <h2 className="text-xl font-semibold leading-snug text-black">{item.label}</h2>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
