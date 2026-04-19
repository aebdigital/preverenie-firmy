import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n-config";
import type { Dictionary } from "@/get-dictionary";
import {
  CROSS_SELL_MAP,
  getLegisproHomeUrl,
  getLegisproServiceUrl,
  type LegisproServiceKey
} from "@/lib/legispro-links";

type PageKey = keyof typeof CROSS_SELL_MAP;

export function CrossSellCard({
  pageKey,
  locale,
  dictionary
}: {
  pageKey: PageKey;
  locale: Locale;
  dictionary: Dictionary;
}) {
  const t = dictionary.crossSell;
  const copy = t.pages[pageKey];
  const keys: LegisproServiceKey[] = CROSS_SELL_MAP[pageKey];
  const showAllLink = pageKey === "contact" || keys.length === 0;

  return (
    <aside className="rounded-[2rem] border border-black/10 bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="sm:w-24 sm:shrink-0">
          <Image
            src="/logo.png"
            alt="LegisPro"
            width={72}
            height={72}
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />
        </div>

        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-black sm:text-2xl">{copy.heading}</h3>
            <p className="text-sm leading-7 text-black/72 sm:text-base">{copy.description}</p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2">
            {keys.map((key) => (
              <li key={key}>
                <a
                  href={getLegisproServiceUrl(key, locale)}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-3 rounded-[1.1rem] border border-black/10 bg-neutral-50 px-4 py-3 text-sm font-medium text-black transition hover:border-black/30 hover:bg-white"
                >
                  <span>{t.services[key]}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black/55 transition group-hover:text-black" />
                </a>
              </li>
            ))}
            {showAllLink ? (
              <li className="sm:col-span-2">
                <a
                  href={getLegisproHomeUrl(locale)}
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center justify-between gap-3 rounded-[1.1rem] border border-black/10 bg-neutral-50 px-4 py-3 text-sm font-medium text-black transition hover:border-black/30 hover:bg-white"
                >
                  <span>{t.allServices}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-black/55 transition group-hover:text-black" />
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </aside>
  );
}
