import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  sk: () => import("./dictionaries/sk.json").then((m) => m.default),
  en: () => import("./dictionaries/en.json").then((m) => m.default)
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.sk();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
