import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Luis Henrich-Bandis. 23, founder. Running StudyPDF at 140,000+ users."
};

export default function About() {
  return (
    <div className="mx-auto max-w-[720px] px-6 sm:px-12 pb-24">
      <div className="mb-16">
        <Image
          src="/luis-portrait.jpg"
          alt="Luis Henrich-Bandis"
          width={1096}
          height={1588}
          priority
          className="rounded-lg w-[200px] sm:w-[240px] h-auto mb-6 sm:mb-3 sm:float-left sm:mr-8 border border-border"
        />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          Luis Henrich-Bandis
        </h1>
        <p className="text-[13px] font-mono text-text-muted mb-7">
          23 · London · MSc at Imperial College London
        </p>

        <p className="text-text-secondary mb-7">
          Hi, I&rsquo;m Luis. I&rsquo;m 23, I build things, and the last two
          years of my life have basically been one thing:{" "}
          <a
            href="https://studypdf.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            StudyPDF
          </a>
          .
        </p>
        <p className="text-text-secondary mb-7">
          We started it in summer 2024. A friend, his exam prep, and ChatGPT
          failing at PDFs in spectacularly stupid ways. I built the first
          version in three weeks. Two years later it&rsquo;s at 140,000+ users,
          around 1,300 daily actives, 350k+ documents processed, and I run it
          solo from London. I do all of it:
          the AI pipeline, the infra, the support emails, the SEO posts, the
          late-night bug that turned out to be a vector store leaking across
          users while I was on holiday in Madeira. Obviously not everything
          works the first time. You learn by breaking things in production.
        </p>
        <p className="text-text-secondary mb-7">
          Most of the interesting work has been on the AI side. The product
          runs on a two-stage extraction pipeline: an expensive reasoning
          model reads the document once, extracts topics and concepts, and
          every other feature (flashcards, practice questions, mind maps, the
          chat layer) is generated against that same tree. Cost goes down,
          quality goes up. I wrote the long version{" "}
          <Link
            href="/blog/140k-users-and-the-answer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            here
          </Link>
          .
        </p>
        <p className="text-text-secondary">
          I write here when something is actually worth writing about. Usually
          something I learned the hard way. Running a company while still in
          school, using Claude Code as a small team, multi-agent pipelines
          that hold up at exam-season load. No content calendar, no thread
          bait. Six honest posts a year is fine.
        </p>
        <div className="clear-both" />
      </div>

      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-4">
          Currently
        </h2>
        <p className="text-text-secondary mb-4">
          Running{" "}
          <a
            href="https://studypdf.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            StudyPDF
          </a>{" "}
          solo, now past 140,000 registered users. The iPhone, iPad and Android
          apps all shipped this autumn, and Android turned out to be the
          biggest of the three.
        </p>
        <p className="text-text-secondary">
          The part I am actually working on is the one I have not solved.
          Students come for one exam and leave when it is over. I want a reason
          for them to open it again in February.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-4">
          CV
        </h2>
        <a
          href="/docs/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:opacity-80 transition-opacity"
        >
          Download PDF ↓
        </a>
        <p className="text-[13px] font-mono text-text-muted mt-2">
          Last updated October 2026
        </p>
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-8">
          Elsewhere
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://x.com/luisnhenrich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              X / Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luishenrich/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luishenrich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="mailto:hi@luishenrich.com"
              className="text-text-secondary hover:text-accent transition-colors"
            >
              hi@luishenrich.com
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
