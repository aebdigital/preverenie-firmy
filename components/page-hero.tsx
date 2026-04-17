import type { ReactNode } from "react";
import Image from "next/image";
import { SectionBadge } from "@/components/site-primitives";

export function PageHero({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  titleClassName,
  children
}: {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  titleClassName?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-20">
        <div className="space-y-6">
          <SectionBadge>{badge}</SectionBadge>
          <div className="space-y-4">
            <h1
              className={`font-display text-5xl leading-[0.98] text-balance text-black sm:text-6xl ${
                titleClassName ?? ""
              }`}
            >
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
              {description}
            </p>
          </div>
          {children}
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 hidden h-24 w-24 rounded-full bg-blue-100 blur-3xl lg:block" />
          <div className="absolute -bottom-10 right-0 hidden h-28 w-28 rounded-full bg-red-100 blur-3xl lg:block" />
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={1000}
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
