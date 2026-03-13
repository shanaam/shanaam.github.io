import ArticleList from "@/components/ArticleList";
import { getAllArticles } from "@/lib/articles";

export default function Work() {
  const articles = getAllArticles();

  return (
    <div className="page-container">
      <p className="section-title">Articles</p>
      <ArticleList articles={articles} />
    </div>
  );
}
