import type { Metadata } from "next";
import Link from "next/link";
import DeckGallery from "./DeckGallery";

export const metadata: Metadata = {
  title: "StudyPDF pitch deck",
  description:
    "The pitch deck for StudyPDF, the AI study tool I built and run solo. Built for your course, not the internet.",
  openGraph: {
    title: "StudyPDF pitch deck",
    description:
      "The pitch deck for StudyPDF, the AI study tool I built and run solo.",
    type: "article",
  },
};

// Slide 07 is the revenue slide and is intentionally left out of the public
// gallery. The other ten slides show in deck order.
const slides = [
  {
    src: "/deck/slides/slide-01.webp",
    alt: "Title slide: Built for your course, not the internet. Bo, the StudyPDF study companion, waves from the right.",
  },
  {
    src: "/deck/slides/slide-02.webp",
    alt: "The problem: students study with the wrong tool. Generic AI answers from the whole internet, has no memory of your course, and gives no source you can trust.",
  },
  {
    src: "/deck/slides/slide-03.webp",
    alt: "The solution: meet Bo, your course in one chat. Upload lectures, slides, scanned notes, or a YouTube lecture, and every answer is cited to the exact page or second.",
  },
  {
    src: "/deck/slides/slide-04.webp",
    alt: "Everything you need from your own material: flashcards, practice exams, mind maps, quizzes, cheat sheets, and study guides.",
  },
  {
    src: "/deck/slides/slide-05.webp",
    alt: "The wedge: StudyPDF starts where studying is most visual, medicine. It pulls real figures from your slides and masks every label for image-occlusion cards you can export to Anki.",
  },
  {
    src: "/deck/slides/slide-06.webp",
    alt: "Traction: 92,000 students as a team of one. Growth is 99 percent organic, daily actives up six times in five months, a 56 percent product-market-fit score, one founder with AI agents as the team.",
  },
  {
    src: "/deck/slides/slide-08.webp",
    alt: "Why we win: three advantages that compound. Speed from a solo founder plus AI agents, trust from answers cited to the student's own course, and range across the whole study workflow.",
  },
  {
    src: "/deck/slides/slide-09.webp",
    alt: "Market and path: hundreds of millions of students, one habit to own. Land in medicine first, expand to every field and student, then monetize B2B with schools and universities.",
  },
  {
    src: "/deck/slides/slide-10.webp",
    alt: "Founder: Luis Henrich-Bandis. Built StudyPDF to 92,000 users solo with AI agents as the team. AI engineer at BMW, Industrial Engineering at RWTH Aachen, CS50 from Harvard.",
  },
  {
    src: "/deck/slides/slide-11.webp",
    alt: "The next six months: turn on growth, hire a founding engineer, open a B2B channel, and grow in the EU. Built for your course, not the internet.",
  },
];

export default function Deck() {
  return (
    <div className="pb-24">
      <header className="mx-auto max-w-[720px] px-6 sm:px-12 mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          StudyPDF pitch deck
        </h1>
        <p className="text-text-secondary mb-8">
          The deck for StudyPDF, the AI study tool I built and run solo. Built
          for your course, not the internet.
        </p>
        <a
          href="/deck/StudyPDF-Pitch-Deck.pdf"
          className="inline-block rounded-md bg-text-primary px-4 py-2.5 transition-opacity hover:opacity-85"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download the full deck (PDF)
          </span>
        </a>
      </header>

      <section
        aria-label="StudyPDF pitch deck slides"
        className="mx-auto max-w-[1040px] px-4 sm:px-8"
      >
        <DeckGallery slides={slides} />
      </section>

      <div className="mx-auto max-w-[720px] px-6 sm:px-12 mt-16 pt-10 border-t border-border">
        <Link
          href="/work"
          className="text-accent hover:opacity-80 transition-opacity text-sm"
        >
          ← Back to work
        </Link>
      </div>
    </div>
  );
}
