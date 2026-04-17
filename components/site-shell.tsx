import type { ReactNode } from "react";
import { FadeInUpScope } from "@/components/fade-in-up-scope";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/i18n-config";
import type { Dictionary } from "@/get-dictionary";

export function SiteShell({
  children,
  lang,
  dictionary
}: {
  children: ReactNode;
  lang: Locale;
  dictionary: Dictionary;
}) {
  return (
    <>
      <SiteHeader lang={lang} dictionary={dictionary} />
      <main className="pb-20">
        <FadeInUpScope>{children}</FadeInUpScope>
      </main>
      <FadeInUpScope>
        <SiteFooter lang={lang} dictionary={dictionary} />
      </FadeInUpScope>
    </>
  );
}
