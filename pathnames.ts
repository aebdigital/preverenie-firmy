import { i18n, type Locale } from "./i18n-config";

export const pathnames: Record<string, Record<Locale, string>> = {
  "/": { sk: "/", en: "/" },
  "/preverenie-firmy": {
    sk: "/preverenie-firmy",
    en: "/company-audit"
  },
  "/zakladanie-a-zmeny": {
    sk: "/zakladanie-a-zmeny",
    en: "/company-formation"
  },
  "/likvidacia": {
    sk: "/likvidacia",
    en: "/liquidation"
  },
  "/premeny-a-zlucenia": {
    sk: "/premeny-a-zlucenia",
    en: "/mergers-and-transformations"
  },
  "/o-nas-a-kontakt": {
    sk: "/o-nas-a-kontakt",
    en: "/about-and-contact"
  },
  "/ochrana-osobnych-udajov": {
    sk: "/ochrana-osobnych-udajov",
    en: "/privacy-policy"
  }
};

export function getLocalizedPath(internalPath: string, locale: Locale): string {
  const segments = internalPath.split("/").filter(Boolean);
  if (segments.length === 0) return `/${locale}`;

  const firstSegment = "/" + segments[0];
  const translation = pathnames[firstSegment];

  if (translation) {
    const translatedFirst = translation[locale];
    const rest = segments.slice(1).join("/");
    return `/${locale}${translatedFirst}${rest ? "/" + rest : ""}`;
  }

  return `/${locale}${internalPath}`;
}

export function getInternalPath(localizedPath: string, locale: Locale): string {
  const pathWithoutSlash = localizedPath.startsWith("/")
    ? localizedPath.slice(1)
    : localizedPath;
  const segments = pathWithoutSlash.split("/").filter(Boolean);
  if (segments.length === 0) return "/";

  const firstSegment = "/" + segments[0];
  for (const [internal, translations] of Object.entries(pathnames)) {
    if (translations[locale] === firstSegment) {
      const rest = segments.slice(1).join("/");
      return `${internal}${rest ? "/" + rest : ""}`;
    }
  }
  return localizedPath.startsWith("/") ? localizedPath : "/" + localizedPath;
}

export function getAllLocalizedPaths(internalPath: string): Record<Locale, string> {
  const result = {} as Record<Locale, string>;
  for (const locale of i18n.locales) {
    result[locale] = getLocalizedPath(internalPath, locale);
  }
  return result;
}

export function findInternalPathFromSegment(
  segment: string,
  locale: Locale
): string | null {
  const pathToCheck = "/" + segment;
  for (const [internal, translations] of Object.entries(pathnames)) {
    if (translations[locale] === pathToCheck) return internal;
  }
  return null;
}
