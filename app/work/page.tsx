import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "What I've built. StudyPDF, an AI study platform with 92,000 users running solo.",
};

const numbers = [
  { value: "92,000", label: "Registered users" },
  { value: "200+", label: "Universities" },
  { value: "150k+", label: "Documents processed" },
  { value: "99%", label: "Organic growth" },
  { value: "600+", label: "Daily active users" },
  { value: "1", label: "Engineer" },
];

const stack = [
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Pinecone",
  "Anthropic API",
  "OpenAI API",
  "Cloudflare R2",
  "Monorepo",
  "Self-hosted",
  "Claude Code",
];

export default function Work() {
  return (
    <div className="mx-auto max-w-[720px] px-6 sm:px-12 pb-24">
      <header className="mb-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          Work
        </h1>
        <p className="text-text-secondary">
          What I&rsquo;ve built. More to come.
        </p>
      </header>

      <section className="mb-24">
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] mb-4">
            StudyPDF
          </h2>
          <p className="text-text-secondary mb-6">
            An AI study tool built around one AI study companion named Bo. You
            upload your course (lectures, slides, scanned notes, even a YouTube
            lecture), then you talk to Bo. It answers from your own material
            and builds flashcards, quizzes, practice exams, study guides, cheat
            sheets, and mind maps inside the chat, as you ask. Everything stays
            scoped to your course and is cited back to the exact page, so you
            study from your material and not the open internet.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a
              href="https://studypdf.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:opacity-80 transition-opacity"
            >
              studypdf.net ↗
            </a>
            <Link
              href="/deck"
              className="text-accent hover:opacity-80 transition-opacity"
            >
              See the pitch deck →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 mb-20 pt-10 border-t border-border">
          {numbers.map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-text-primary mb-1.5 tabular-nums">
                {value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-text-muted font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-5">
              How it works
            </h3>
            <p className="text-text-secondary mb-6">
              One expensive read at upload time. A reasoning model reads the
              whole course once and pulls out the structure: the{" "}
              <span className="text-text-primary">topics</span>, the{" "}
              <span className="text-text-primary">concepts</span> inside each
              topic, and how they connect. That graph is stored at the course
              level and de-duplicated across lectures, so lecture five knows it
              is talking about the same idea lecture two introduced.
            </p>
            <p className="text-text-secondary mb-6">
              Everything hangs off that one graph. When you ask Bo for
              something, a separate Researcher agent searches your course, and
              every concept or figure that lands in an answer or an artifact
              comes from those verified results, never invented. Citations
              point back to the lecture and the page.
            </p>
            <p className="text-text-secondary mb-6">
              And every time you study, the result writes back: what you got
              right, what you stumbled on. That running record is the{" "}
              <span className="text-text-primary">mastery layer</span>, a
              per-student picture of what you know that compounds across the
              semester. The model is not the moat. The memory is.
            </p>
            <Image
              src="/blog/bo-relaunch/chart-05-architecture.svg"
              alt="StudyPDF architecture: one deep read builds a course concept graph that Bo and every study tool reuse, and the mastery layer feeds back into it"
              width={900}
              height={560}
              unoptimized
              className="rounded-lg border border-border w-full h-auto mt-6"
            />
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-5">
              Stack
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center px-3 py-1 text-[12px] font-mono text-text-secondary border border-border rounded-md"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[13px] text-text-muted mt-4">
              The rest of the infrastructure is boring on purpose. Boring tech
              is what runs alone.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-5">
              My role
            </h3>
            <p className="text-text-secondary">
              Solo. I built and run all of it. The AI pipeline, the backend,
              the database, storage, auth, the growth side, the support
              inbox. Between March and December 2025, Moritz Kindler was
              co-founder and ran the UI/UX and brand work. What you see in
              the product today is largely his visual identity. We ended
              things cleanly when the logistics stopped working, and
              I&rsquo;ve been running it alone again since January 2026.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <Link
            href="/blog/the-bo-rewrite"
            className="text-accent hover:opacity-80 transition-opacity text-sm"
          >
            Read the long version →
          </Link>
        </div>
      </section>

      <section className="text-text-muted text-[13px] border-t border-border pt-10">
        More projects below as I write them up.
      </section>
    </div>
  );
}
