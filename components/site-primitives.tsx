import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails } from "@/lib/site-content";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/70">
      <span className="h-1.5 w-1.5 rounded-full bg-black" />
      {children}
    </span>
  );
}

export function SectionTitle({
  badge,
  title,
  description
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <SectionBadge>{badge}</SectionBadge>
      <h1 className="font-display text-4xl leading-tight text-balance text-black sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-8 text-black/70 sm:text-lg">{description}</p>
    </div>
  );
}

export function FeatureList({
  items,
  className = ""
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-black/75 sm:text-[15px]">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-black" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaRow({
  primaryHref = "/o-nas-a-kontakt#formular",
  primaryLabel = "Dohodnite si stretnutie",
  secondaryHref = "/o-nas-a-kontakt#formular",
  secondaryLabel = "Vyžiadať cenovú ponuku"
}: {
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Link
        href={primaryHref}
        className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-black/90"
      >
        {primaryLabel}
      </Link>
      <Link
        href={secondaryHref}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/12 bg-white px-6 text-sm font-semibold text-black transition hover:border-black/30"
      >
        {secondaryLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <a
        href={contactDetails.emailHref}
        className="rounded-[1.5rem] border border-black/8 bg-white p-5 transition hover:border-black/18"
      >
        <Mail className="h-5 w-5 text-blue-700" />
        <p className="mt-4 text-sm font-semibold text-black">{contactDetails.email}</p>
        <p className="mt-1 text-sm text-black/55">E-mail</p>
      </a>
      <a
        href={contactDetails.phoneHref}
        className="rounded-[1.5rem] border border-black/8 bg-white p-5 transition hover:border-black/18"
      >
        <Phone className="h-5 w-5 text-red-700" />
        <p className="mt-4 text-sm font-semibold text-black">{contactDetails.phone}</p>
        <p className="mt-1 text-sm text-black/55">Telefón</p>
      </a>
      <a
        href={contactDetails.mapsHref}
        target="_blank"
        rel="noreferrer"
        className="rounded-[1.5rem] border border-black/8 bg-white p-5 transition hover:border-black/18"
      >
        <MapPin className="h-5 w-5 text-black" />
        <p className="mt-4 text-sm font-semibold text-black">
          {contactDetails.address.join(", ")}
        </p>
        <p className="mt-1 text-sm text-black/55">Adresa</p>
      </a>
    </div>
  );
}
