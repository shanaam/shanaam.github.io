import Image from "next/image";

const socials = [
  {
    label: "Email",
    value: "s.modcha@gmail.com",
    href: "mailto:s.modcha@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    value: "Scholar profile",
    href: "https://scholar.google.com/citations?user=RHgSyaAAAAAJ&hl=en",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "shanaa-modchalingam",
    href: "https://www.linkedin.com/in/shanaam/",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "shanaam",
    href: "https://github.com/shanaam",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div className="page-container">
      {/* Avatar */}
      <div className="flex items-center gap-5 mb-10">
        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100 flex-shrink-0">
          <Image
            src="/images/avatar_web.png"
            alt="Shanaa Modchalingam"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="section-title mb-0">Shanaa Modchalingam</h1>
        </div>
      </div>

      <p className="section-label">Get in Touch</p>

      <p className="body-text max-w-xl mb-10">
        I&apos;m always happy to hear from anyone
        interested in perception systems, AR/VR, HCI, or sensorimotor neuroscience. Feel free to reach out
        via email or connect on any of the platforms below.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="card flex items-start gap-4 p-5 group"
          >
            <div className="text-gray-400 group-hover:text-accent transition-colors mt-0.5 flex-shrink-0">
              {s.icon}
            </div>
            <div>
              <p className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                {s.label}
              </p>
              <p className="text-sm text-accent font-medium">{s.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
