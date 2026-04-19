import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import type { Dictionary } from "@/get-dictionary";
import { getLocalizedPath } from "@/pathnames";
import { contactDetails } from "@/lib/site-content";
import { CookiesSettingsButton } from "@/components/cookies-settings-button";

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
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="LegisPro"
                width={56}
                height={56}
                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              />
              <div className="min-w-0">
                <p className="font-display text-2xl font-semibold leading-none text-white sm:text-[1.8rem]">
                  {contactDetails.company}
                </p>
                <p className="text-[0.75rem] font-normal uppercase tracking-[0.08em] text-white/60">
                  {dictionary.nav.subtitle}
                </p>
              </div>
            </div>
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
            © {new Date().getFullYear()} {contactDetails.company}. {dictionary.footer.rights}
            {" | "}
            <Link
              href={getLocalizedPath("/ochrana-osobnych-udajov", lang)}
              className="transition hover:text-white"
            >
              {dictionary.footer.privacyPolicy}
            </Link>
            {" | "}
            <CookiesSettingsButton className="transition hover:text-white">
              {dictionary.footer.cookies}
            </CookiesSettingsButton>
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
