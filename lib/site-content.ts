import type { LucideIcon } from "lucide-react";
import { Building2, FileSearch, Gavel, GitMerge, Handshake } from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type HomeService = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
};

export const navigation: NavItem[] = [
  { href: "/preverenie-firmy", label: "Preverenie firmy" },
  { href: "/zakladanie-a-zmeny", label: "Zakladanie a zmeny" },
  { href: "/likvidacia", label: "Likvidácia" },
  { href: "/premeny-a-zlucenia", label: "Premeny a zlúčenia" },
  { href: "/o-nas-a-kontakt", label: "O nás a kontakt" }
];

export type { NavItem as _NavItem };

export const contactDetails = {
  company: "LegisPro, s.r.o.",
  subtitle: "advokátska kancelária",
  email: "office@legispro.sk",
  phone: "+421 948 528 265",
  phoneHref: "tel:+421948528265",
  emailHref: "mailto:office@legispro.sk",
  address: ["Sládkovičova 1", "949 01 Nitra"],
  mapsHref: "https://maps.google.com/?q=Sl%C3%A1dkovi%C4%8Dova+1+949+01+Nitra",
  officeHours: "Pondelok - Piatok: 8:00 - 17:00, Sobota - Nedeľa: Zatvorené"
};

export const homeStats = [
  {
    label: "Podľa štatistiky",
    value: "70%",
    description: "firiem má spriaznené osoby."
  },
  {
    label: "Kritické miesto",
    value: "90%",
    description: "tunelovania ide cez fakturáciu."
  },
  {
    label: "Výstup",
    value: "8 krokov",
    description: "od mapy tokov až po právnu ochranu."
  }
];

export const homeAudiences = [
  "Pre majiteľov",
  "Pre spoločníkov",
  "Pre investorov",
  "Konkurzné konania",
  "Likvidácie",
  "Dedičské konania",
  "Rozvody"
];

export const homeServices: HomeService[] = [
  {
    href: "/preverenie-firmy",
    title: "Preverenie firmy",
    description:
      "Finančné toky, compliance a optimalizácia procesov v jednej logike.",
    icon: FileSearch,
    accentClass: "from-blue-50 to-white"
  },
  {
    href: "/zakladanie-a-zmeny",
    title: "Zakladanie spoločností a zmeny",
    description:
      "Právne aj procesné nastavenie nového subjektu od prvého dňa.",
    icon: Building2,
    accentClass: "from-neutral-100 to-white"
  },
  {
    href: "/likvidacia",
    title: "Likvidácia spoločností a neziskoviek",
    description:
      "Riadené ukončenie subjektu s dôrazom na ochranu štatutárov a poriadok v dokumentoch.",
    icon: Gavel,
    accentClass: "from-red-50 to-white"
  },
  {
    href: "/premeny-a-zlucenia",
    title: "Premeny a zlúčenia",
    description:
      "Fúzie, rozdelenia a zmeny právnej formy s právnym, daňovým a účtovným dohľadom.",
    icon: GitMerge,
    accentClass: "from-blue-50 to-white"
  },
  {
    href: "/o-nas-a-kontakt",
    title: "O nás a kontakt",
    description:
      "LegisPro, s.r.o. prepája financie, compliance a právo do praktických riešení.",
    icon: Handshake,
    accentClass: "from-neutral-100 to-white"
  }
];
