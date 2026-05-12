import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { ReadingProgress } from "@/components/ReadingProgress";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  if (!meta) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <ReadingProgress />
      <article className="mx-auto max-w-[760px] px-6 sm:px-12 pb-24">
        <header className="mb-14">
          <time className="text-[13px] font-mono text-text-muted block mb-5 tabular-nums">
            {formatDate(meta.date)} · {meta.readingTime}
          </time>
          <h1 className="text-3xl sm:text-[2.625rem] font-semibold tracking-[-0.025em] leading-[1.1]">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="text-text-secondary mt-5 text-lg leading-[1.55]">
              {meta.description}
            </p>
          )}
        </header>
        <div className="prose">
          <Post />
        </div>
      </article>
    </>
  );
}
