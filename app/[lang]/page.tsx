import { redirect } from "next/navigation";
import { getLocalizedPath } from "@/pathnames";
import type { Locale } from "@/i18n-config";

export default async function LangRootPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  redirect(getLocalizedPath("/preverenie-firmy", lang as Locale));
}
