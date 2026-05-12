import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Posts by Luis Henrich-Bandis on building products, engineering, and machine learning.",
};

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className="mx-auto max-w-[720px] px-6 sm:px-12 pb-24">
      <header className="mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          Writing
        </h1>
        <p className="text-text-secondary">
          Notes on solo founding, engineering, and machine learning.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-text-muted">No posts yet.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <time className="text-[13px] font-mono text-text-muted block mb-3 tabular-nums">
                  {formatDate(post.date)} · {post.readingTime}
                </time>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-text-primary group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="text-text-secondary">{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
