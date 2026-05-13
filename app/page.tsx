import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import now from "@/content/now.json";

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
          I&rsquo;m Luis. 22, Master&rsquo;s at RWTH Aachen, building{" "}
          <a
            href="https://studypdf.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary border-b border-border hover:border-accent transition-colors"
          >
            StudyPDF
          </a>{" "}
          alone from Cologne — 85,000 users, $1.5k MRR, 200+ universities,
          one engineer.
        </p>
        <p className="text-text-secondary mt-8">
          I write here when something&rsquo;s actually worth writing about —
          solo founding, applied AI, what Claude Code can and can&rsquo;t do.
          Usually something I learned the hard way.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.14em] text-text-muted font-medium mb-6">
          Currently
        </h2>
        <ul className="space-y-3">
          {now.items.map((item, i) => (
            <li
              key={i}
              className="text-text-secondary flex gap-3 items-baseline"
            >
              <span
                aria-hidden
                className="inline-block w-1 h-1 rounded-full bg-text-muted shrink-0 translate-y-[-3px]"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
