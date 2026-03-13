import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export type ArticleLink = { label: string; href: string };

export type ArticleFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links?: ArticleLink[];
};

export type ArticleMeta = {
  slug: string;
  frontmatter: ArticleFrontmatter;
};

export type Article = ArticleMeta & { content: string };

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf8");
      const { data } = matter(raw);
      return { slug, frontmatter: data as ArticleFrontmatter };
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getArticle(slug: string): Article | null {
  const filePath = path.join(articlesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return { slug, frontmatter: data as ArticleFrontmatter, content };
}
