"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const animationSelector = [
  "section",
  "article",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "a",
  "button",
  "form",
  "label",
  "input",
  "select",
  "textarea",
  "img"
].join(", ");

export function FadeInUpScope({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const pathname = usePathname();
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const scope = scopeRef.current;

    if (!scope) {
      return;
    }

    const nodes = Array.from(scope.querySelectorAll<HTMLElement>(animationSelector));

    nodes.forEach((node) => {
      node.classList.remove("fade-in-up-enter");
      node.style.removeProperty("--fade-delay");
    });

    const rafId = window.requestAnimationFrame(() => {
      void scope.offsetHeight;

      nodes.forEach((node, index) => {
        node.style.setProperty("--fade-delay", `${Math.min(index * 40, 520)}ms`);
        node.classList.add("fade-in-up-enter");
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [pathname]);

  return (
    <div ref={scopeRef} className={className}>
      {children}
    </div>
  );
}
