import ArticleList from "@/components/ArticleList";
import { getAllArticles } from "@/lib/articles";

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
    roles: ["Research Engineer & Data Scientist", "Research Scientist Intern"],
  },
  {
    org: "York University",
    roles: ["PhD (2024)", "MSc (2018)"],
  },
  {
    org: "Marburg University",
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
          <h1 className="section-title mb-0">
            Shanaa Modchalingam
          </h1>
          <span className="secondary-text">Shanaathanan</span>
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
      <section className="mb-12 space-y-3 body-text">
        <p>
          I'm a research engineer and data scientist who works at the intersection of machine learning, neuroscience, and human-computer interaction.
          My career has moved between academic research and industry —
          most recently building and deploying multimodal ML systems for wearables at Meta Reality Labs,
          and before that, earning a PhD in sensorimotor neuroscience at York University.
        </p>
        <p>
          What I enjoy most is taking ownership of ambiguous, high-impact problems.
          At Meta, that meant leading research integration into production ML pipelines and setting org-wide data standards for a team of about 100 people.
          During my PhD, it meant founding a new research workstream, growing it from zero to 15 members,
          and building tools that were adopted across multiple labs.
          I've also held elected leadership positions on committees overseeing significant R&D funding decisions,
          which gave me a perspective on research strategy that goes well beyond any single project.
        </p>

        <p>
          Technically, I work across the stack — Python, C++, PyTorch, React, Unity — and across modalities,
          from computer vision and motion sensing to language models.
          I'm always looking for opportunities where deep technical skill and broad organizational thinking intersect.
        </p>
      </section>

      {/* Articles */}
      <section className="mb-16">
        <p className="section-label">Articles</p>
        <ArticleList articles={articles} />
      </section>

      {/* Previously */}
      <section>
        <p className="section-label">
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
              <span className="secondary-text">
                {p.roles.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
