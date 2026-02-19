import Link from "next/link";

interface ProjectLayoutProps {
  name: string;
  category: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  longDescription: string[];
  features: { title: string; items: string[] }[];
  technologies: string[];
  stats: { value: string; label: string }[];
  accentColor: string;
}

export default function ProjectLayout({
  name,
  category,
  year,
  liveUrl,
  githubUrl,
  description,
  longDescription,
  features,
  technologies,
  stats,
  accentColor,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Hero */}
      <div className="pt-28 pb-16 px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          href="/projets"
          className="inline-flex items-center gap-1.5 text-sm text-[#666] hover:text-[#111] transition-colors mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Retour aux projets
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ color: accentColor, backgroundColor: `${accentColor}12`, border: `1px solid ${accentColor}30` }}
              >
                {category}
              </span>
              <span className="text-[11px] font-mono text-[#999]">{year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">{name}</h1>
          </div>
          <div className="flex gap-3">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-colors"
                style={{ backgroundColor: accentColor }}
              >
                Voir le projet
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#111] border border-[#ddd] rounded-lg hover:border-[#999] transition-colors"
              >
                GitHub
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        <p className="text-lg text-[#555] leading-relaxed max-w-3xl">{description}</p>
      </div>

      {/* Separator */}
      <div className="border-t border-[#eee]" />

      {/* Description longue */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-6">À propos du projet</h2>
        <div className="space-y-4 max-w-3xl">
          {longDescription.map((p, i) => (
            <p key={i} className="text-[15px] text-[#444] leading-relaxed">{p}</p>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#eee]" />

      {/* Stats */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-8">Chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 rounded-xl border border-[#eee]">
              <div className="text-3xl font-bold tracking-tight" style={{ color: accentColor }}>{stat.value}</div>
              <div className="text-xs text-[#888] mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#eee]" />

      {/* Features */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-8">Fonctionnalités</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border border-[#eee] bg-[#fafafa]">
              <h3 className="text-sm font-semibold text-[#111] mb-4">{feature.title}</h3>
              <ul className="space-y-2">
                {feature.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-[#555]">
                    <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ backgroundColor: accentColor }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-[#eee]" />

      {/* Technologies */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-8">Stack technique</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-4 py-2 text-sm font-medium text-[#333] bg-[#f5f5f5] border border-[#e5e5e5] rounded-lg">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-[#eee]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#111] mb-3">Un projet similaire en tête ?</h2>
          <p className="text-sm text-[#666] mb-6">Je peux construire un outil sur mesure pour votre besoin.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg transition-colors"
            style={{ backgroundColor: accentColor }}
          >
            Discuter du projet
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
