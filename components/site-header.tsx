"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site-content";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
            LegisPro, s.r.o.
          </p>
          <p className="truncate text-sm font-semibold text-black sm:text-base">
            prevereniefirmy.sk
          </p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-black" : "text-black/60 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/o-nas-a-kontakt#formular"
          className="inline-flex h-11 items-center justify-center rounded-full bg-black px-5 text-sm font-semibold text-white transition hover:bg-black/90"
        >
          Vyžiadať ponuku
        </Link>
      </div>

      <div className="overflow-x-auto border-t border-black/6 lg:hidden">
        <div className="mx-auto flex max-w-7xl gap-5 px-5 py-3 sm:px-6">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium ${
                  active ? "text-black" : "text-black/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
