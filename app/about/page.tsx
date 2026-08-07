import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Luis Henrich-Bandis. 23, founder. Building Lagias, and running StudyPDF at 100,000+ users."
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
          23 · Cologne · Master&rsquo;s at RWTH Aachen
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
          version in three weeks. Two years later it&rsquo;s at 100,000+ users
          across 200+ universities, around 600 daily actives, 150k+
          documents processed, and I run it solo from Cologne. I do all of it:
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
            href="/blog/85k-users-solo"
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
          Building{" "}
          <a
            href="https://lagias.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            Lagias
          </a>{" "}
          with Luca Wuerker. You describe an investment idea in plain English,
          agents research it and write the backtest, and then a deterministic
          harness with no AI anywhere in it grades the result on data the model
          never saw. The AI proposes. The harness decides. Waitlist is open,
          alpha invites start this month.
        </p>
        <p className="text-text-secondary">
          Still running StudyPDF alongside it.
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
          Last updated May 2026
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
