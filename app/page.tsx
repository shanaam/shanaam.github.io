import { getAllArticles } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";

const tags = [
  "Sensorimotor Neuroscience",
  "VR / XR Research",
  "Human Motor Learning",
  "Open Science",
];

const positions = [
  {
    org: "Meta",
    roles: ["Research Scientist Intern", "Research Engineer & Data Scientist"],
  },
  {
    org: "York University",
    roles: ["PhD Candidate (2018–Present)", "MSc (2016–2018)"],
  },
  {
    org: "Philipps University of Marburg",
    roles: ["Visiting Researcher"],
  },
];

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="page-container max-w-2xl">
      {/* Name & tags */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">
          Shanaathanan Modchalingam
        </h1>
        <p className="text-gray-500 mb-4">Shanaa</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mb-16">
        <ArticleList articles={articles} />
      </section>

      {/* Previously */}
      <section>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Previously at
        </p>
        <div className="flex flex-col gap-3">
          {positions.map((p) => (
            <div key={p.org} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
              <span className="font-medium text-gray-700 sm:w-56 flex-shrink-0">
                {p.org}
              </span>
              <span className="text-sm text-gray-400">
                {p.roles.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
