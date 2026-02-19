'use client';

import Link from "next/link";

export default function FluxDevPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/15 via-transparent to-teal-600/5" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">Agence IA</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Flux<span className="text-emerald-400">Dev</span><span className="text-[#555]">.io</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Agence de développement web et cybersécurité propulsée par 1500+ agents IA. Sites, apps mobiles, SaaS, IoT — de l{"'"}idée à la production.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            <a href="#services" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Services</a>
          </div>
        </div>
      </section>

      {/* ── AI Agents Orchestration Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-emerald-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">fluxdev.io — orchestration IA</span>
            <span className="ml-auto text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">1500+ agents actifs</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Agent grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "ATLAS", role: "Orchestration", status: "active" },
                { name: "NEXUS", role: "Backend & API", status: "active" },
                { name: "PIXEL", role: "Frontend & UI", status: "active" },
                { name: "BRIDGE", role: "DevOps", status: "active" },
                { name: "SENTINEL", role: "Vulnérabilités", status: "active" },
                { name: "GUARDIAN", role: "Protection runtime", status: "active" },
                { name: "PHANTOM", role: "Tests d'intrusion", status: "idle" },
                { name: "INSPECTOR", role: "Review de code", status: "active" },
              ].map((a, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${a.status === 'active' ? 'bg-emerald-500 animate-pulse' : 'bg-[#444]'}`} />
                    <span className="text-[11px] font-bold text-emerald-400">{a.name}</span>
                  </div>
                  <div className="text-[10px] text-[#666]">{a.role}</div>
                </div>
              ))}
            </div>

            {/* Methodology pipeline */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-3">Processus de livraison</div>
              <div className="flex flex-col md:flex-row gap-3">
                {[
                  { step: "01", title: "Audit & Découverte", dur: "1-2 jours", desc: "Analyse besoins, concurrence, contraintes" },
                  { step: "02", title: "Conception & Design", dur: "1-2 sem.", desc: "Maquettes Figma, architecture technique" },
                  { step: "03", title: "Dev & Sécurité", dur: "4-12 sem.", desc: "Code, tests auto, audit sécurité" },
                  { step: "04", title: "Production & Suivi", dur: "Continu", desc: "Déploiement, monitoring 24/7, support" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 p-3 rounded-lg border border-[#1a1a1a] bg-[#111]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">{s.step}</span>
                      <span className="text-[10px] text-[#555] font-mono">{s.dur}</span>
                    </div>
                    <div className="text-[11px] font-semibold text-white mb-0.5">{s.title}</div>
                    <div className="text-[10px] text-[#666]">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Agents IA", value: "1500+", color: "text-emerald-400" },
                { label: "Réponse", value: "24h", color: "text-cyan-400" },
                { label: "Sécurité", value: "E2E", color: "text-amber-400" },
                { label: "Accompagnement", value: "360°", color: "text-violet-400" },
              ].map((m, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a] text-center">
                  <div className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</div>
                  <div className="text-[9px] text-[#555] uppercase tracking-wider mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Expertises</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">8 domaines de compétence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", title: "Développement Web", desc: "Sites vitrine, e-commerce, apps web complexes. Next.js, React, Node.js. SEO et performances optimisées." },
              { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", title: "Applications Mobile", desc: "iOS natif (Swift), Android natif (Kotlin), React Native cross-platform. De la conception UX au déploiement stores." },
              { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", title: "Solutions SaaS", desc: "Plateformes cloud scalables, architecture microservices, multi-tenancy, facturation et analytics intégrés." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Cybersécurité", desc: "Audit de sécurité, tests d'intrusion, sécurisation code, mise en place SOC. Protection E2E." },
              { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", title: "Systèmes IoT", desc: "Firmware embarqué, systèmes RTOS, protocoles MQTT/CoAP. Du capteur au cloud." },
              { icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", title: "Design UI/UX", desc: "Maquettes Figma, prototypes interactifs, rendus 3D. Design system complet pour cohérence visuelle." },
              { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Logiciels Desktop", desc: "Applications Windows et macOS. Electron, .NET ou natif selon les besoins de performance." },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Accompagnement 360°", desc: "RSSI externalisé, comptabilité, conformité RGPD. On gère tout pour que vous vous concentriez sur votre métier." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-emerald-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + Tech + CTA ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "1500+", label: "Agents IA actifs", color: "text-emerald-400" },
              { value: "50+", label: "Projets livrés", color: "text-green-400" },
              { value: "8", label: "Domaines d'expertise", color: "text-amber-400" },
              { value: "24h", label: "Temps de réponse", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Next.js 14", "React 18", "TypeScript", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Tailwind CSS"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Conçu, développé et sécurisé par l{"'"}IA</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Audit gratuit de 30 minutes. Particuliers, entreprises, gouvernements, ONG.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
