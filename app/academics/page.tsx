import Image from "next/image";

const education = [
  {
    degree: "PhD Candidate",
    field: "Kinesiology and Health Science — Sensorimotor Neuroscience",
    institution: "York University, Toronto",
    period: "Sept 2018 – Present",
    icon: "/icons/YorkU_full_icon.png",
  },
  {
    degree: "MSc",
    field: "Kinesiology and Health Science — Sensorimotor Neuroscience",
    institution: "York University, Toronto",
    period: "Sept 2016 – Aug 2018",
    icon: "/icons/YorkU_full_icon.png",
  },
];

const expertise = [
  {
    category: "Research & Domain",
    items: [
      "Sensation & Perception",
      "Human Motor Learning",
      "Machine Learning",
      "Immersive Virtual Reality",
    ],
  },
  {
    category: "Software & Tools",
    items: ["Python", "R", "Unity (C#)", "Inkscape", "Poser Pro"],
  },
  {
    category: "Teaching",
    items: [
      "Sensation & Motor Learning",
      "Human Physiology",
      "Electrophysiological & Biological Data Collection",
    ],
  },
];

const fellowships = [
  {
    title: "NSERC Postgraduate Scholarship – Doctoral",
    org: "Natural Sciences and Engineering Research Council of Canada",
    period: "Sept 2020 – Aug 2022",
    icon: "/icons/NSERC_RGB.png",
  },
  {
    title: "VISTA Doctoral Award",
    org: "Vision: Science to Applications",
    period: "Sept 2018 – Aug 2022",
    icon: "/icons/VISTA2.png",
  },
  {
    title: "NSERC Brain in Action International Research Training Group Doctoral Scholarship",
    org: "Natural Sciences and Engineering Research Council of Canada",
    period: "Sept 2018 – Aug 2021",
    icon: "/icons/NSERC_RGB.png",
  },
];

const community = [
  {
    role: "Voting Member, Trainee Representative",
    org: "VISTA Leadership Committee",
    period: "May 2020 – Present",
    icon: "/icons/VISTA1.png",
  },
  {
    role: "Voting Member",
    org: "Centre for Vision Research Steering Committee",
    period: "Sept 2020 – Dec 2021",
    icon: "/icons/CVR.png",
  },
  {
    role: "Volunteer Organizer",
    org: "Neuromatch Academy",
    period: "July 2021",
    icon: "/icons/NMA.png",
  },
  {
    role: "Member",
    org: "CVR Communications Committee",
    period: "May 2020 – April 2021",
    icon: "/icons/CVR.png",
  },
];

export default function Academics() {
  return (
    <div className="page-container">
      <p className="section-label">Academics</p>
      <h1 className="section-title">Education &amp; Credentials</h1>

      {/* Education */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Education</h2>
        <div className="flex flex-col gap-4">
          {education.map((e) => (
            <div key={e.degree + e.period} className="card flex items-start gap-4 p-5">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image src={e.icon} alt={e.institution} fill className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{e.degree}</p>
                <p className="text-sm text-gray-600 mt-0.5">{e.field}</p>
                <p className="text-sm text-gray-500 mt-0.5">{e.institution}</p>
                <p className="text-xs text-gray-400 mt-1">{e.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Areas of Expertise</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {expertise.map((area) => (
            <div key={area.category} className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                {area.category}
              </p>
              <ul className="space-y-1.5">
                {area.items.map((item) => (
                  <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-accent mt-0.5">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Fellowships */}
      <section className="mb-14">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Fellowships &amp; Awards</h2>
        <div className="flex flex-col gap-4">
          {fellowships.map((f) => (
            <div key={f.title} className="card flex items-start gap-4 p-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src={f.icon} alt={f.org} fill className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{f.org}</p>
                <p className="text-xs text-gray-400 mt-1">{f.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community */}
      <section>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Community Involvement</h2>
        <div className="flex flex-col gap-4">
          {community.map((c) => (
            <div key={c.role + c.org} className="card flex items-start gap-4 p-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src={c.icon} alt={c.org} fill className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{c.role}</p>
                <p className="text-sm text-gray-500 mt-0.5">{c.org}</p>
                <p className="text-xs text-gray-400 mt-1">{c.period}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
