'use client';

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const projects = [
    {
      name: "JWT Attack Toolkit",
      description: "Scanne les tokens JWT d'une app, teste 12 vecteurs d'attaque (none algo, key confusion, brute force) et sort un rapport exploitable en 30 secondes.",
      tags: ["Security", "JWT", "Audit"],
      image: "/projects/jwt-toolkit.svg",
      href: "https://jwt-attack-toolkit.netlify.app",
    },
    {
      name: "Passive OSINT Platform",
      description: "Agrège WHOIS, DNS, headers HTTP et metadata sans envoyer un seul paquet au serveur cible. Tout le traitement tourne dans le navigateur.",
      tags: ["OSINT", "Privacy", "JavaScript"],
      image: "/projects/osint-platform.svg",
      href: "https://passive-osint-platform.vercel.app",
    },
    {
      name: "PayloadsAllTheThings",
      description: "Mes contributions au repo : 40+ payloads de bypass WAF Cloudflare/Akamai et une section complète sur les injections NoSQL MongoDB.",
      tags: ["Red Team", "Payloads", "WAF Bypass"],
      image: "/projects/payloads-all-the-things.svg",
      href: "/projets/payloads-all-the-things",
    }
  ];

  const expertises = [
    {
      title: "Frontend",
      description: "Je construis des interfaces React/Next.js typées de bout en bout. Chaque composant est pensé pour le SSR, le cache et un score Lighthouse au-dessus de 95.",
      items: ["Next.js App Router & RSC", "TypeScript strict", "Tailwind CSS", "Optimisation Core Web Vitals"],
    },
    {
      title: "Backend & Infra",
      description: "APIs REST et GraphQL sur Node.js ou Python, conteneurisées avec Docker, déployées sur AWS avec des pipelines CI/CD qui tournent en moins de 3 minutes.",
      items: ["Node.js / Express / FastAPI", "Docker & Kubernetes", "PostgreSQL & Redis", "GitHub Actions & AWS"],
    },
    {
      title: "Sécurité offensive",
      description: "Tests d'intrusion web et API selon la méthodologie OWASP. Je cherche les failles avant que quelqu'un d'autre ne les trouve : injections, IDOR, auth bypass, SSRF.",
      items: ["Pentest web & API", "Audit de code source", "Reverse engineering", "Rédaction de rapports"],
    }
  ];

  const stack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express', 'Python', 'FastAPI', 'Go'],
    Database: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
    Security: ['Burp Suite', 'Metasploit', 'Nmap', 'OWASP ZAP'],
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="section-label">Disponible — Cotonou, Bénin</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Hector Sedo<br />
              <span className="text-[var(--fg-muted)]">Ingénieur logiciel & pentester.</span>
            </h1>

            <p className="text-[var(--fg-muted)] text-base leading-relaxed max-w-lg">
              Je conçois des applications web et mobiles avec Next.js, React et Node.js — puis je les audite pour trouver les failles avant les autres. Fondateur de <span className="text-white font-medium">FluxDev.io</span>, agence dev & cybersécurité propulsée par 1500+ agents IA.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/projets" className="btn-primary">
                Voir mes projets
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-ghost">
                Me contacter
              </Link>
            </div>

            <div className="flex gap-10 pt-4 border-t border-[var(--border)]">
              {[
                { value: "16+", label: "projets livrés" },
                { value: "1500+", label: "agents IA (FluxDev)" },
                { value: "OWASP", label: "méthodologie sécu" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-[var(--fg-dim)] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait with glow + decorative elements */}
          <div className="relative w-72 lg:w-80 mx-auto lg:mx-0">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-[var(--accent)]/5 rounded-3xl blur-[60px] scale-110" />
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--accent)]/30 rounded-tl-lg" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--accent)]/30 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--accent)]/30 rounded-bl-lg" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--accent)]/30 rounded-br-lg" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-hover)]">
              <div className="aspect-[3/4]">
                <Image
                  src="/hector-sedo.png"
                  alt="Hector Sedo"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-50" />
              </div>
            </div>
            {/* Terminal-style badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-[#111111] border border-[var(--border-hover)] rounded-lg font-mono text-xs shadow-lg shadow-black/30">
              <span className="text-[var(--accent)]">$</span>
              <span className="text-[var(--fg-muted)] ml-1.5">whoami</span>
              <span className="text-[var(--fg-dim)] ml-1">→ dev + pentester</span>
            </div>
            {/* Floating status dot */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-[var(--border)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[10px] text-[var(--fg-muted)] font-medium">Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-14 max-w-xl">
            <p className="section-label mb-4">Ce que je fais</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Du code propre.<br />
              <span className="text-[var(--fg-muted)]">Des apps solides.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
            {expertises.map((exp, i) => (
              <div key={i} className="bg-[var(--bg)] p-8 lg:p-10 space-y-5 hover:bg-[var(--surface)] transition-colors duration-200">
                <h3 className="text-lg font-semibold tracking-tight">{exp.title}</h3>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{exp.description}</p>
                <ul className="space-y-2 pt-2">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-[var(--fg-dim)]">
                      <span className="w-1 h-1 rounded-full bg-[var(--fg-dim)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-5">
              <p className="section-label mb-4">Outils</p>
              <h2 className="text-3xl font-bold tracking-tight leading-tight">
                Ma stack<br />
                <span className="text-[var(--fg-muted)]">au quotidien.</span>
              </h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                Les technos que j&apos;utilise en prod, pas celles que je liste pour faire joli.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(stack).map(([key, items]) => (
                <div key={key} className="space-y-4">
                  <h4 className="section-label">{key}</h4>
                  <div className="flex flex-col gap-1.5">
                    {items.map((tech) => (
                      <span key={tech} className="text-sm text-[var(--fg-muted)] hover:text-white transition-colors duration-200 cursor-default py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div className="space-y-4">
              <p className="section-label">Travaux récents</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Ce que j&apos;ai<br />
                <span className="text-[var(--fg-muted)]">construit.</span>
              </h2>
            </div>
            <Link href="/projets" className="group flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-white transition-colors">
              Tout voir
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="space-y-4">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row gap-6 border border-[rgba(255,255,255,0.08)] rounded-xl p-5 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.02)] transition-all duration-200"
              >
                <div className="w-full md:w-56 h-36 md:h-auto relative bg-[rgba(255,255,255,0.03)] rounded-lg shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-2.5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-[#d4a843] transition-colors">
                      {project.name}
                    </h3>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[var(--fg-dim)] group-hover:text-[#d4a843] transition-colors">
                      <path d="M6 3h7v7M13 3L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-medium text-[var(--fg-dim)] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="section-label mb-1">Prochain move</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Un projet en tête ? <span className="text-[var(--fg-muted)]">Parlons-en.</span></h2>
            <p className="text-[var(--fg-muted)] text-sm mt-2 max-w-md">Audit sécu, app from scratch ou bug critique — réponse sous 24h.</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <Link href="/contact" className="btn-primary">
              Me contacter
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="https://wa.me/22901155950828" target="_blank" className="btn-ghost">
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
