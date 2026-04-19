"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n-config";
import { getLocalizedPath } from "@/pathnames";

type Preferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

type ConsentData = {
  timestamp: string;
  preferences: Preferences;
  version: string;
};

type Copy = {
  bannerTitle: string;
  bannerText: string;
  acceptAll: string;
  rejectAll: string;
  settings: string;
  privacyPolicy: string;
  modalTitle: string;
  modalText: string;
  save: string;
  essentialTitle: string;
  essentialText: string;
  analyticsTitle: string;
  analyticsText: string;
  marketingTitle: string;
  marketingText: string;
};

const COPY: Record<Locale, Copy> = {
  sk: {
    bannerTitle: "Súbory cookies a ochrana súkromia",
    bannerText:
      "Používame súbory cookies na zlepšenie vašej skúsenosti na našej webovej stránke. Niektoré sú nevyhnutné pre fungovanie stránky, iné nám pomáhajú analyzovať a zlepšovať naše služby.",
    acceptAll: "Prijať všetko",
    rejectAll: "Odmietnuť všetko",
    settings: "Nastavenia",
    privacyPolicy: "Zásady ochrany súkromia",
    modalTitle: "Nastavenia súborov cookies",
    modalText:
      "Spravujte svoje preferencie súborov cookies. Môžete povoliť alebo zakázať rôzne typy súborov cookies podľa svojich potrieb.",
    save: "Uložiť nastavenia",
    essentialTitle: "Nevyhnutné súbory cookies",
    essentialText:
      "Tieto súbory cookies sú nevyhnutné pre základnú funkcionalitu webovej stránky a nemožno ich zakázať.",
    analyticsTitle: "Analytické súbory cookies",
    analyticsText:
      "Tieto súbory cookies nám pomáhajú pochopiť, ako návštevníci používajú našu webovú stránku zbieraním a hlásením informácií anonymne.",
    marketingTitle: "Marketingové súbory cookies",
    marketingText:
      "Tieto súbory cookies sa používajú na sledovanie návštevníkov naprieč webovými stránkami na účely zobrazovania relevantných a zaujímavých reklám."
  },
  en: {
    bannerTitle: "Cookies and Privacy",
    bannerText:
      "We use cookies to improve your experience on our website. Some are essential for site functionality, others help us analyze and improve our services.",
    acceptAll: "Accept All",
    rejectAll: "Reject All",
    settings: "Settings",
    privacyPolicy: "Privacy Policy",
    modalTitle: "Cookie Settings",
    modalText:
      "Manage your cookie preferences. You can enable or disable different types of cookies according to your needs.",
    save: "Save Settings",
    essentialTitle: "Essential Cookies",
    essentialText:
      "These cookies are necessary for the basic functionality of the website and cannot be disabled.",
    analyticsTitle: "Analytics Cookies",
    analyticsText:
      "These cookies help us understand how visitors use our website by collecting and reporting information anonymously.",
    marketingTitle: "Marketing Cookies",
    marketingText:
      "These cookies are used to track visitors across websites for the purpose of displaying relevant and engaging advertisements."
  }
};

const COOKIE_NAME = "prevereniefirmy_cookie_consent";
const COOKIE_EXPIRY_DAYS = 365;

function readCookie(name: string) {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() ?? null;
  return null;
}

function writeCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

function deleteCookie(name: string) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
}

export function CookieConsent({ lang }: { lang: Locale }) {
  const t = COPY[lang] ?? COPY.sk;
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<Preferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  const persist = useCallback((prefs: Preferences) => {
    const data: ConsentData = {
      timestamp: new Date().toISOString(),
      preferences: prefs,
      version: "1.0"
    };
    writeCookie(COOKIE_NAME, JSON.stringify(data), COOKIE_EXPIRY_DAYS);
  }, []);

  useEffect(() => {
    const stored = readCookie(COOKIE_NAME);
    if (stored) {
      try {
        const parsed = JSON.parse(decodeURIComponent(stored)) as ConsentData;
        setPreferences(parsed.preferences);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }

    (window as unknown as { openCookieSettings?: () => void }).openCookieSettings = () =>
      setShowModal(true);

    return () => {
      delete (window as unknown as { openCookieSettings?: () => void }).openCookieSettings;
    };
  }, []);

  useEffect(() => {
    if (!showModal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [showModal]);

  const acceptAll = () => {
    const prefs: Preferences = { essential: true, analytics: true, marketing: true };
    setPreferences(prefs);
    persist(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const rejectAll = () => {
    const prefs: Preferences = { essential: true, analytics: false, marketing: false };
    setPreferences(prefs);
    persist(prefs);
    deleteCookie("_ga");
    deleteCookie("_gid");
    setShowBanner(false);
    setShowModal(false);
  };

  const save = () => {
    persist(preferences);
    if (!preferences.analytics) {
      deleteCookie("_ga");
      deleteCookie("_gid");
    }
    setShowBanner(false);
    setShowModal(false);
  };

  const privacyHref = getLocalizedPath("/ochrana-osobnych-udajov", lang);

  return (
    <>
      {showBanner ? (
        <div className="fixed inset-x-3 bottom-3 z-[60] sm:inset-x-6 sm:bottom-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-black/10 bg-white/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.14)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="space-y-1">
              <h4 className="font-display text-lg font-semibold text-black">
                {t.bannerTitle}
              </h4>
              <p className="text-sm leading-6 text-black/72">
                {t.bannerText}{" "}
                <Link href={privacyHref} className="underline underline-offset-4 hover:text-black">
                  {t.privacyPolicy}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex h-10 items-center justify-center rounded-full px-4 text-xs font-semibold text-black/70 transition hover:text-black"
              >
                {t.settings}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex h-10 items-center justify-center rounded-full border border-black/12 px-4 text-xs font-semibold text-black transition hover:border-black/25"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-xs font-semibold text-white transition hover:bg-black/90"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showModal ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/40 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,0,0,0.2)]">
            <div className="flex items-center justify-between border-b border-black/8 px-6 py-5">
              <h3 className="font-display text-xl font-semibold text-black">
                {t.modalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black/60 transition hover:bg-black/5 hover:text-black"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="space-y-4 overflow-y-auto px-6 py-5">
              <p className="text-sm leading-6 text-black/72">{t.modalText}</p>

              <CookieRow
                title={t.essentialTitle}
                description={t.essentialText}
                checked
                disabled
              />
              <CookieRow
                title={t.analyticsTitle}
                description={t.analyticsText}
                checked={preferences.analytics}
                onChange={(v) => setPreferences((p) => ({ ...p, analytics: v }))}
              />
              <CookieRow
                title={t.marketingTitle}
                description={t.marketingText}
                checked={preferences.marketing}
                onChange={(v) => setPreferences((p) => ({ ...p, marketing: v }))}
              />
            </div>
            <div className="flex flex-wrap justify-end gap-2 border-t border-black/8 px-6 py-4">
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex h-10 items-center justify-center rounded-full border border-black/12 px-4 text-xs font-semibold text-black transition hover:border-black/25"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={save}
                className="inline-flex h-10 items-center justify-center rounded-full border border-black/12 px-4 text-xs font-semibold text-black transition hover:border-black/25"
              >
                {t.save}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-xs font-semibold text-white transition hover:bg-black/90"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function CookieRow({
  title,
  description,
  checked,
  disabled,
  onChange
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="rounded-2xl border border-black/8 bg-neutral-50/70 p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="font-semibold text-black">{title}</p>
          <p className="text-sm leading-6 text-black/70">{description}</p>
        </div>
        <label className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.checked)}
            className="peer sr-only"
          />
          <span className="h-6 w-11 rounded-full bg-black/15 transition peer-checked:bg-black peer-disabled:cursor-not-allowed peer-disabled:opacity-60" />
          <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
        </label>
      </div>
    </div>
  );
}
