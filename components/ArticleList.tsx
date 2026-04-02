import Link from "next/link";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  return (
    <ul className="divide-y divide-gray-100 dark:divide-stone-700">
      {articles.map((article) => (
        <li key={article.slug}>
          <Link
            href={`/work/${article.slug}`}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-4 hover:text-accent transition-colors"
          >
            <div>
              <span className="text-base font-medium text-gray-900 dark:text-stone-100 group-hover:text-accent transition-colors">
                {article.frontmatter.title}
              </span>
              <p className="secondary-text mt-0.5">
                {article.frontmatter.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:flex-shrink-0 sm:ml-6">
              {article.frontmatter.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="tag text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
