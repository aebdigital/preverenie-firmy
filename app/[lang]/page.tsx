import { notFound, redirect } from "next/navigation";
import { getLocalizedPath } from "@/pathnames";
import { isLocale } from "@/i18n-config";

export default async function LangRootPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  redirect(getLocalizedPath("/preverenie-firmy", lang));
}
