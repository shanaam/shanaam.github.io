import Image from "next/image";

const affiliations = [
  {
    name: "Sensorimotor Control Lab (SMCL)",
    role: "Researcher",
    href: "https://smcl.lab.yorku.ca/",
    icon: "/icons/YorkU_vertical_icon.png",
  },
  {
    name: "Centre for Vision Research",
    role: "Leadership Committee Member",
    href: "https://www.cvr.yorku.ca/",
    icon: "/icons/CVR.png",
  },
  {
    name: "VISTA Research Program",
    role: "Leadership Committee Member",
    href: "https://vista.info.yorku.ca/",
    icon: "/icons/VISTA1.png",
  },
  {
    name: "Neuromatch Academy",
    role: "Volunteer Organizer",
    href: "https://neuromatch.io/",
    icon: "/icons/NMA.png",
  },
];

export default function About() {
  return (
    <div className="page-container">
      {/* Hero row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-16">
        <div className="relative w-36 h-36 rounded-2xl overflow-hidden ring-4 ring-white shadow-md flex-shrink-0">
          <Image
            src="/images/avatar.png"
            alt="Shanaa Modchalingam"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center sm:text-left">
          <p className="section-label">About me</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shanaathanan Modchalingam
          </h1>
          <p className="text-gray-500 mb-4">
            PhD Candidate &middot; Kinesiology &amp; Health Science &middot; York University, Toronto
          </p>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3">
            <a
              href="/docs/Shanaathanan_Modchalingam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="/docs/ShanaaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Full Academic CV
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-16">
        <p className="section-label">Background</p>
        <h2 className="section-title">Research focus</h2>
        <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
          <p>
            I am a researcher at the{" "}
            <a
              href="https://smcl.lab.yorku.ca/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sensorimotor Control Lab (SMCL)
            </a>{" "}
            at York University, supervised by{" "}
            <a
              href="https://smcl.lab.yorku.ca/people/dr-denise-henriques/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Denise Henriques
            </a>
            . I am also a member of the{" "}
            <a
              href="https://www.cvr.yorku.ca/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centre for Vision Research
            </a>{" "}
            and the{" "}
            <a
              href="https://vista.info.yorku.ca/"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              VISTA
            </a>{" "}
            (Vision: Science to Applications) research program, where I hold
            leadership committee positions in both groups.
          </p>
          <p>
            I lead the XR research program in our lab, studying human motor
            behavior in virtual environments. My research focuses on
            understanding the <strong>explicit and implicit neural processes</strong> that
            contribute to learning in virtual environments, with the aim of
            improving training and rehabilitation paradigms that use immersive
            virtual reality.
          </p>
          <p>
            I have been a visiting researcher at{" "}
            <a
              href="https://www.uni-marburg.de/en"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Philipps University of Marburg
            </a>{" "}
            in Germany, working in theoretical neuroscience.
          </p>
        </div>
      </section>

      {/* Affiliations */}
      <section>
        <p className="section-label">Affiliations</p>
        <h2 className="section-title">Research groups &amp; organizations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {affiliations.map((a) => (
            <a
              key={a.name}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-4 group"
            >
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src={a.icon}
                  alt={a.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-accent transition-colors text-sm">
                  {a.name}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{a.role}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
