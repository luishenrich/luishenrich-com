"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

export default function DeckGallery({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setActive(Math.max(0, Math.min(slides.length - 1, i)));
  }, [slides.length]);

  const goTo = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  }, []);

  const step = useCallback(
    (dir: -1 | 1) => goTo(Math.max(0, Math.min(slides.length - 1, active + dir))),
    [active, goTo, slides.length],
  );

  // Lightbox: lock scroll + keyboard controls while open.
  useEffect(() => {
    if (zoom === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
      if (e.key === "ArrowRight") setZoom((z) => (z === null ? z : Math.min(slides.length - 1, z + 1)));
      if (e.key === "ArrowLeft") setZoom((z) => (z === null ? z : Math.max(0, z - 1)));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom, slides.length]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, i) => (
          <div key={slide.src} className="flex-none w-full snap-center px-1 sm:px-2">
            <button
              type="button"
              onClick={() => setZoom(i)}
              aria-label={`Enlarge slide ${i + 1} of ${slides.length}`}
              className="group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1040px) 100vw, 1040px"
                  className="object-contain"
                />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Prev / next (desktop) */}
      <button
        type="button"
        onClick={() => step(-1)}
        disabled={active === 0}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-text-primary shadow-md transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        disabled={active === slides.length - 1}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/95 text-text-primary shadow-md transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 sm:flex"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots + counter */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-5 bg-text-primary" : "w-1.5 bg-border hover:bg-text-muted"
            }`}
          />
        ))}
        <span className="ml-3 text-[12px] tabular-nums text-text-muted">
          {active + 1} / {slides.length}
        </span>
      </div>

      {/* Lightbox */}
      {zoom !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Slide ${zoom + 1} of ${slides.length}, enlarged`}
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-10"
        >
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slides[zoom].src}
            alt={slides[zoom].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-[1400px] w-auto rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
