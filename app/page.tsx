import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export default async function Home() {
  const posts = (await getAllPosts()).slice(0, 5);

  return (
    <div className="mx-auto max-w-[720px] px-6 sm:px-12 pb-24">
      <section className="mb-20">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.15] mb-6 flex items-baseline gap-3">
          Luis Henrich-Bandis
          <span
            aria-hidden
            className="inline-block w-2 h-2 rounded-full bg-accent translate-y-[-2px]"
          />
        </h1>
        <p className="text-text-secondary">
          I&rsquo;m a 22-year-old solo founder of{" "}
          <a
            href="https://studypdf.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            StudyPDF
          </a>
          , used by 85,000 students to learn from their documents with AI.
          I&rsquo;m also finishing my Master&rsquo;s at RWTH Aachen.
        </p>
        <p className="text-text-secondary mt-8">
          I write here about building products solo, the strange dual life of
          running a company while still in school, and occasional notes on
          engineering and machine learning.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-8">
          Writing
        </h2>
        {posts.length === 0 ? (
          <p className="text-text-muted text-[15px]">Coming soon.</p>
        ) : (
          <ul className="space-y-5">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <time className="text-[13px] font-mono text-text-muted shrink-0 sm:w-28 tabular-nums">
                    {formatDate(post.date)}
                  </time>
                  <span className="text-text-primary group-hover:text-accent transition-colors">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {posts.length > 0 && (
          <div className="mt-8">
            <Link
              href="/blog"
              className="text-sm text-accent hover:opacity-80 transition-opacity"
            >
              All posts →
            </Link>
          </div>
        )}
      </section>

      <section>
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-8">
          Elsewhere
        </h2>
        <ul className="space-y-3">
          <li>
            <a
              href="https://x.com/kinglhb03"
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
              href="https://github.com/"
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
