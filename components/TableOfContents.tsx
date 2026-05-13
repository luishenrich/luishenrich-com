"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id,
            top: e.target.getBoundingClientRect().top,
          }))
          .sort((a, b) => a.top - b.top);

        if (visible.length > 0) {
          setActiveId(visible[0].id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      },
    );

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block fixed left-8 2xl:left-16 top-32 w-52 max-h-[calc(100vh-10rem)] overflow-y-auto"
    >
      <p className="text-[11px] uppercase tracking-[0.16em] text-text-muted font-medium mb-5">
        On this page
      </p>
      <ul className="space-y-3 border-l border-border">
        {headings.map(({ id, text }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block pl-4 -ml-px border-l text-[13px] leading-snug transition-colors duration-150 ${
                  isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-text-secondary hover:text-text-primary"
                }`}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
