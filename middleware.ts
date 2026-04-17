import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n, type Locale } from "./i18n-config";
import { findInternalPathFromSegment } from "./pathnames";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const locales = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);
  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }

  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] as Locale;
  if (!i18n.locales.includes(locale)) return NextResponse.next();

  const firstPathSegment = segments[1];
  if (firstPathSegment) {
    const internalPath = findInternalPathFromSegment(firstPathSegment, locale);
    if (internalPath && internalPath !== "/" + firstPathSegment) {
      const restOfPath = segments.slice(2).join("/");
      const rewritePath = `/${locale}${internalPath}${restOfPath ? "/" + restOfPath : ""}`;
      return NextResponse.rewrite(new URL(rewritePath, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|logo.png|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest).*)"
  ]
};
