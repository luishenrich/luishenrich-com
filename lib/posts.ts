import fs from "node:fs/promises";
import path from "node:path";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type Heading = { id: string; text: string };

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  readingTime: string;
};

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
};

export async function getPostSlugs(): Promise<string[]> {
  try {
    const files = await fs.readdir(POSTS_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getPostMeta(slug: string): Promise<PostMeta | null> {
  try {
    const raw = await fs.readFile(
      path.join(POSTS_DIR, `${slug}.mdx`),
      "utf8",
    );
    const mod = (await import(`@/content/blog/${slug}.mdx`)) as {
      meta: PostFrontmatter;
    };
    return {
      slug,
      title: mod.meta.title,
      date: mod.meta.date,
      description: mod.meta.description,
      readingTime: readingTime(raw).text,
    };
  } catch {
    return null;
  }
}

export async function getPostHeadings(slug: string): Promise<Heading[]> {
  try {
    const raw = await fs.readFile(
      path.join(POSTS_DIR, `${slug}.mdx`),
      "utf8",
    );
    const slugger = new GithubSlugger();
    const headings: Heading[] = [];
    let inCodeBlock = false;
    for (const line of raw.split("\n")) {
      if (line.startsWith("```")) {
        inCodeBlock = !inCodeBlock;
        continue;
      }
      if (inCodeBlock) continue;
      const match = line.match(/^##\s+(.+?)\s*$/);
      if (match) {
        const text = match[1].replace(/[*_`]/g, "").trim();
        headings.push({ id: slugger.slug(text), text });
      }
    }
    return headings;
  } catch {
    return [];
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map(getPostMeta));
  return posts
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
