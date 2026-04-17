import Link from "next/link";
import type { Locale } from "@/i18n-config";
import type { Dictionary } from "@/get-dictionary";
import { getLocalizedPath } from "@/pathnames";
import { contactDetails } from "@/lib/site-content";

const NAV_ITEMS: { key: keyof Dictionary["nav"]["items"]; internal: string }[] = [
  { key: "audit", internal: "/preverenie-firmy" },
  { key: "formation", internal: "/zakladanie-a-zmeny" },
  { key: "liquidation", internal: "/likvidacia" },
  { key: "mergers", internal: "/premeny-a-zlucenia" },
  { key: "contact", internal: "/o-nas-a-kontakt" }
];

export function SiteFooter({
  lang,
  dictionary
}: {
  lang: Locale;
  dictionary: Dictionary;
}) {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
              prevereniefirmy.sk
            </p>
            <h2 className="max-w-lg text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {contactDetails.company}
            </h2>
            <p className="max-w-xl text-base leading-8 text-white/72">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">
              {dictionary.footer.columnsNav}
            </h3>
            <div className="grid gap-3">
              {NAV_ITEMS.map(({ key, internal }) => (
                <Link
                  key={internal}
                  href={getLocalizedPath(internal, lang)}
                  className="text-base text-white/72 transition hover:text-white"
                >
                  {dictionary.nav.items[key]}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-semibold text-white">
              {dictionary.footer.columnsContact}
            </h3>
            <div className="grid gap-3 text-base text-white/72">
              <a href={contactDetails.emailHref} className="transition hover:text-white">
                {contactDetails.email}
              </a>
              <a href={contactDetails.phoneHref} className="transition hover:text-white">
                {contactDetails.phone}
              </a>
              <a
                href={contactDetails.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {contactDetails.address.join(", ")}
              </a>
              <p>
                <span className="text-white/40">{dictionary.footer.officeHoursLabel}: </span>
                {contactDetails.officeHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} prevereniefirmy.sk. {dictionary.footer.rights}
            {" | "}
            <a href="#" className="transition hover:text-white">
              {dictionary.footer.privacyPolicy}
            </a>
            {" | "}
            <a href="#" className="transition hover:text-white">
              {dictionary.footer.cookies}
            </a>
          </p>
          <a
            href="https://aebdigital.sk"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/14 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/6"
          >
            Tvorba webu - AEB Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
