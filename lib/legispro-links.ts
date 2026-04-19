import type { Locale } from "@/i18n-config";

export const LEGISPRO_BASE_URL = "https://legispro.sk";

const SERVICES_SEGMENT: Record<Locale, string> = {
  sk: "sluzby",
  en: "services"
};

export type LegisproServiceKey =
  | "criminal"
  | "litigation"
  | "commercial"
  | "financial"
  | "dueDiligence"
  | "gdpr"
  | "ecommerce"
  | "startups";

const SERVICE_SLUGS: Record<LegisproServiceKey, string> = {
  criminal: "criminal-law",
  litigation: "litigations",
  commercial: "commercial-law",
  financial: "financial-law",
  dueDiligence: "due-diligence",
  gdpr: "gdpr",
  ecommerce: "ecommerce",
  startups: "start-ups-greenfield-projects"
};

export function getLegisproServiceUrl(key: LegisproServiceKey, locale: Locale): string {
  return `${LEGISPRO_BASE_URL}/${locale}/${SERVICES_SEGMENT[locale]}/${SERVICE_SLUGS[key]}`;
}

export function getLegisproHomeUrl(locale: Locale): string {
  return `${LEGISPRO_BASE_URL}/${locale}`;
}

export function getLegisproPrivacyUrl(locale: Locale): string {
  return `${LEGISPRO_BASE_URL}/${locale}/privacy-policy`;
}

export type CrossSellTarget = {
  pageKey:
    | "audit"
    | "formation"
    | "liquidation"
    | "mergers"
    | "contact";
  services: LegisproServiceKey[];
  includeAllServicesLink?: boolean;
};

export const CROSS_SELL_MAP: Record<CrossSellTarget["pageKey"], LegisproServiceKey[]> = {
  audit: ["criminal", "litigation"],
  formation: ["startups", "gdpr", "ecommerce"],
  liquidation: ["commercial", "litigation"],
  mergers: ["dueDiligence", "financial"],
  contact: []
};
