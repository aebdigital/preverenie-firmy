export const i18n = {
  defaultLocale: "sk",
  locales: ["sk", "en"]
} as const;

export type Locale = (typeof i18n)["locales"][number];
