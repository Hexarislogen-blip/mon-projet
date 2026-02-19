'use client';

import Link from "next/link";

export default function OSINTPlatformPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-transparent to-teal-600/5" />
        <div className="absolute top-10 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">Intelligence</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">OSINT<br /><span className="text-cyan-400">Platform</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Reconnaissance passive 100% côté client. DNS, WHOIS, CT logs, headers HTTP — sans envoyer un seul paquet au serveur cible.
          </p>
          <div className="flex gap-3">
            <a href="https://passive-osint-platform.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer un scan</a>
          </div>
        </div>
      </section>

      {/* ── Recon Dashboard Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-cyan-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">osint-platform — target: example.com</span>
          </div>
          <div className="p-6 space-y-4">
            {/* Search bar */}
            <div className="flex items-center gap-3 bg-[#0a0a0a] border border-cyan-500/20 rounded-xl px-4 py-3">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-sm text-cyan-300 font-mono">example.com</span>
              <span className="ml-auto text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full font-semibold">Scan terminé — 15.2s</span>
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* DNS Records */}
              <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
                <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">DNS Records</span>
                  <span className="ml-auto text-[10px] text-[#555]">8 enregistrements</span>
                </div>
                <div className="p-3 space-y-1 text-[11px] font-mono">
                  {[
                    { type: "A", value: "93.184.216.34" },
                    { type: "AAAA", value: "2606:2800:220:1:248:1893:25c8:1946" },
                    { type: "MX", value: "mail.example.com (pri: 10)" },
                    { type: "NS", value: "ns1.example.com" },
                    { type: "TXT", value: "v=spf1 include:_spf.google.com ~all" },
                  ].map((r, i) => (
                    <div key={i} className="flex gap-3 py-1">
                      <span className="text-cyan-400 w-10">{r.type}</span>
                      <span className="text-[#888] truncate">{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subdomains */}
              <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
                <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Sous-domaines (CT Logs)</span>
                  <span className="ml-auto text-[10px] text-[#555]">12 trouvés</span>
                </div>
                <div className="p-3 space-y-1 text-[11px] font-mono text-[#888]">
                  {["www.example.com", "mail.example.com", "staging.example.com", "api.example.com", "admin.example.com", "dev.example.com"].map((s, i) => (
                    <div key={i} className="py-0.5 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                      <span>{s}</span>
                    </div>
                  ))}
                  <div className="text-[#555] pt-1">+ 6 autres sous-domaines...</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
                <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  <span className="text-[10px] text-violet-400 font-semibold uppercase tracking-wider">Technologies détectées</span>
                </div>
                <div className="p-3 flex flex-wrap gap-2">
                  {["nginx 1.24", "Cloudflare CDN", "React", "Node.js", "PostgreSQL", "Let's Encrypt"].map((t, i) => (
                    <span key={i} className="text-[10px] text-[#ccc] bg-[#1a1a1a] border border-[#222] px-2.5 py-1 rounded-md">{t}</span>
                  ))}
                </div>
              </div>

              {/* Security Headers */}
              <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
                <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] text-green-400 font-semibold uppercase tracking-wider">Headers de sécurité</span>
                </div>
                <div className="p-3 space-y-1.5 text-[11px]">
                  {[
                    { header: "Strict-Transport-Security", status: true },
                    { header: "Content-Security-Policy", status: false },
                    { header: "X-Content-Type-Options", status: true },
                    { header: "X-Frame-Options", status: true },
                    { header: "Referrer-Policy", status: false },
                  ].map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[8px] font-bold ${h.status ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {h.status ? '✓' : '✗'}
                      </span>
                      <span className={`font-mono ${h.status ? 'text-[#888]' : 'text-red-400/80'}`}>{h.header}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data Sources ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Sources</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">5 sources, zéro trace</h2>
            <p className="text-sm text-[#666] mt-4 max-w-lg mx-auto">Toutes les données proviennent d{"'"}APIs publiques. La cible ne sait jamais que vous la regardez.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { name: "DNS-over-HTTPS", desc: "Google DNS, Cloudflare", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" },
              { name: "CT Logs", desc: "crt.sh, Censys", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { name: "WHOIS", desc: "WhoisXML API", icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" },
              { name: "HTTP Cache", desc: "Google Cache, Archive", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
              { name: "Signatures", desc: "Favicon hash, cookies", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
            ].map((s, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-cyan-500/20 transition-colors text-center">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-xs font-semibold text-white mb-1">{s.name}</h3>
                <p className="text-[10px] text-[#666]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Privacy Architecture ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">100% côté client</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { label: "Votre navigateur", sub: "Tout le code tourne ici", color: "border-cyan-500/30", bg: "bg-cyan-500/5", text: "text-cyan-400" },
              { label: "APIs publiques", sub: "Google DNS, crt.sh...", color: "border-amber-500/30", bg: "bg-amber-500/5", text: "text-amber-400" },
            ].map((node, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-52 p-6 rounded-xl border ${node.color} ${node.bg} text-center`}>
                  <div className={`text-sm font-bold ${node.text} mb-1`}>{node.label}</div>
                  <div className="text-[11px] text-[#666]">{node.sub}</div>
                </div>
                {i < 1 && (
                  <div className="hidden md:flex items-center px-4">
                    <div className="w-16 h-[1px] bg-[#333]" />
                    <svg className="w-3 h-3 text-[#555] -ml-1" fill="currentColor" viewBox="0 0 12 12"><path d="M4 2l4 4-4 4V2z"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-[11px] text-red-400 bg-red-500/5 border border-red-500/20 rounded-lg px-4 py-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              Aucune requête directe vers la cible
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "0", label: "Paquets vers la cible", color: "text-cyan-400" },
              { value: "15s", label: "Collecte complète", color: "text-green-400" },
              { value: "200+", label: "Points de données", color: "text-amber-400" },
              { value: "5", label: "Sources de données", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Reconnaissance sans trace</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Collectez du renseignement sans que la cible le sache.</p>
            <div className="flex justify-center gap-3">
              <a href="https://passive-osint-platform.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer un scan</a>
              <Link href="/contact" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
