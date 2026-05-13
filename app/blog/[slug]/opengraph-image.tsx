import { ogContentType, ogSize, renderOgImage } from "@/lib/og";
import { getAllPosts, getPostMeta } from "@/lib/posts";

export const alt = "Luis Henrich-Bandis";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = await getPostMeta(slug);
  return renderOgImage({
    title: meta?.title ?? "Writing",
    label: "luishenrich.com / blog",
  });
}
