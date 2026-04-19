"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { i18n, type Locale } from "@/i18n-config";
import type { Dictionary } from "@/get-dictionary";
import { getInternalPath, getLocalizedPath } from "@/pathnames";

const NAV_ITEMS: { key: keyof Dictionary["nav"]["items"]; internal: string }[] = [
  { key: "audit", internal: "/preverenie-firmy" },
  { key: "formation", internal: "/zakladanie-a-zmeny" },
  { key: "liquidation", internal: "/likvidacia" },
  { key: "mergers", internal: "/premeny-a-zlucenia" },
  { key: "contact", internal: "/o-nas-a-kontakt" }
];

export function SiteHeader({
  lang,
  dictionary
}: {
  lang: Locale;
  dictionary: Dictionary;
}) {
  const pathname = usePathname();

  const isActive = (internal: string) => {
    const localized = getLocalizedPath(internal, lang);
    return pathname === localized || pathname.startsWith(localized + "/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href={getLocalizedPath("/preverenie-firmy", lang)}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="LegisPro"
            width={50}
            height={50}
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            priority
          />
          <div className="min-w-0">
            <p className="font-display truncate text-2xl leading-none font-semibold text-black sm:text-[1.8rem]">
              LegisPro, s.r.o.
            </p>
            <p className="truncate text-[0.75rem] font-normal uppercase tracking-[0.08em] text-black/60">
              {dictionary.nav.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map(({ key, internal }) => {
            const active = isActive(internal);
            return (
              <Link
                key={internal}
                href={getLocalizedPath(internal, lang)}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-black underline decoration-2 underline-offset-8"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {dictionary.nav.items[key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>

      <div className="overflow-x-auto border-t border-black/6 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-5 px-5 py-3 sm:px-6">
          {NAV_ITEMS.map(({ key, internal }) => {
            const active = isActive(internal);
            return (
              <Link
                key={internal}
                href={getLocalizedPath(internal, lang)}
                className={`whitespace-nowrap text-sm font-medium transition ${
                  active
                    ? "text-black underline decoration-2 underline-offset-6"
                    : "text-black/60 hover:text-black"
                }`}
              >
                {dictionary.nav.items[key]}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const labels: Record<Locale, string> = { sk: "SK", en: "EN" };

  const redirectedPath = (target: Locale) => {
    if (!pathname) return `/${target}`;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length <= 1) return getLocalizedPath("/", target);
    const pathAfterLocale = "/" + segments.slice(1).join("/");
    const internalPath = getInternalPath(pathAfterLocale, currentLang);
    return getLocalizedPath(internalPath, target);
  };

  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setTimeout(() => setOpen(false), 120);
        }
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 items-center gap-1 rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-black/90"
      >
        {labels[currentLang]}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open ? (
        <div className="absolute right-0 top-full mt-2 min-w-[7rem] overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg">
          {i18n.locales.map((loc) => (
            <Link
              key={loc}
              href={redirectedPath(loc)}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 text-xs font-semibold transition ${
                loc === currentLang
                  ? "bg-black/5 text-black"
                  : "text-black/70 hover:bg-black/5 hover:text-black"
              }`}
            >
              {labels[loc]}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
