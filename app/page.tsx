import { getAllArticles } from "@/lib/articles";
import ArticleList from "@/components/ArticleList";

const tags = [
  "Multimodal ML",
  "Wearable Technology",
  "Sensorimotor Neuroscience",
  "Data Science",
  "VR / XR",
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
    <div className="page-container">
      {/* Name & tags */}
      <section className="mb-8">
        <div className="flex items-baseline gap-3 mb-5">
          <h1 className="text-3xl font-bold text-gray-900">
            Shanaathanan Modchalingam
          </h1>
          <span className="text-gray-400">Shanaa</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Blurb */}
      <section className="mb-12 space-y-3 text-gray-600 leading-relaxed text-sm">
        <p>
          Contributed to the ETL pipelines, development, and end-to-end testing
          of productionized multimodal machine learning solutions for wearables
          at Meta.
        </p>
        <p>
          Leveraging extensive experience in contextual AI, multimodal modeling,
          user experience research, and data science, my work focuses on
          combining modalities such as EMG, IMU, and computer vision to create
          innovative advancements in wearable technology.
        </p>
        <p>
          Over seven years of experience in sensorimotor neuroscience and novel
          interaction paradigms.
        </p>
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
            <div
              key={p.org}
              className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3"
            >
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
