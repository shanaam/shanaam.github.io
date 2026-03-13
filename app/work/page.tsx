import { getAllArticles } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";

export default function Work() {
  const articles = getAllArticles();

  return (
    <div className="page-container">
      <p className="section-label">Work</p>
      <h1 className="section-title">Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
