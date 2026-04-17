import type { ReactNode } from "react";
import { FadeInUpScope } from "@/components/fade-in-up-scope";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="pb-20">
        <FadeInUpScope>{children}</FadeInUpScope>
      </main>
      <FadeInUpScope>
        <SiteFooter />
      </FadeInUpScope>
    </>
  );
}
