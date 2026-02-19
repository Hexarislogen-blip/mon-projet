'use client';

import Link from "next/link";

export default function CertWatchPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-transparent to-teal-600/5" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-3 py-1">Sécurité</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Cert<span className="text-cyan-400">Watch</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Monitore tes certificats SSL/TLS. Alerte 30 jours avant expiration. Dashboard web, email et Telegram.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Dashboard Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-cyan-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">certwatch — dashboard</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Summary */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Valides", value: "47", color: "text-green-400", bg: "bg-green-500/10" },
                { label: "Bientôt", value: "3", color: "text-amber-400", bg: "bg-amber-500/10" },
                { label: "Critiques", value: "0", color: "text-red-400", bg: "bg-red-500/10" },
              ].map((s, i) => (
                <div key={i} className={`${s.bg} rounded-lg p-4 text-center`}>
                  <div className={`text-2xl font-bold font-mono ${s.color}`}>{s.value}</div>
                  <div className="text-[10px] text-[#666] mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Domain list */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a]">
                <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Domaines monitorés</span>
              </div>
              {[
                { domain: "api.fluxdev.io", issuer: "Let's Encrypt R3", expires: "2025-08-14", days: 178, tls: "1.3", grade: "A+", status: "valid" },
                { domain: "app.vaultkey.io", issuer: "Let's Encrypt R3", expires: "2025-07-22", days: 155, tls: "1.3", grade: "A+", status: "valid" },
                { domain: "staging.bjhunt.com", issuer: "Let's Encrypt R3", expires: "2025-03-28", days: 38, tls: "1.2", grade: "A", status: "valid" },
                { domain: "legacy.client.fr", issuer: "Sectigo RSA", expires: "2025-03-12", days: 22, tls: "1.2", grade: "B", status: "warning" },
                { domain: "old.demo.net", issuer: "Self-signed", expires: "2025-03-05", days: 15, tls: "1.1", grade: "F", status: "warning" },
                { domain: "hashbj.vercel.app", issuer: "Let's Encrypt R3", expires: "2025-09-01", days: 195, tls: "1.3", grade: "A+", status: "valid" },
              ].map((d, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-[#1a1a1a] last:border-0 text-[11px]">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${d.status === 'valid' ? 'bg-green-500' : d.days <= 15 ? 'bg-red-500' : 'bg-amber-500'}`} />
                  <span className="text-cyan-400 font-mono flex-1">{d.domain}</span>
                  <span className="text-[#555] hidden md:inline w-32">{d.issuer}</span>
                  <span className="text-[#888] font-mono w-20">{d.expires}</span>
                  <span className={`font-mono w-12 text-right ${d.days > 60 ? 'text-green-400' : d.days > 14 ? 'text-amber-400' : 'text-red-400'}`}>{d.days}j</span>
                  <span className="text-[#555] w-10 text-center">TLS {d.tls}</span>
                  <span className={`w-8 text-center font-bold text-[10px] ${d.grade === 'A+' ? 'text-green-400' : d.grade === 'A' ? 'text-green-400' : d.grade === 'B' ? 'text-amber-400' : 'text-red-400'}`}>{d.grade}</span>
                </div>
              ))}
            </div>

            {/* Alert preview */}
            <div className="bg-[#0a0a0a] rounded-lg border border-amber-500/20 p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Alerte J-22</span>
              </div>
              <div className="text-[11px] text-[#888]">
                Le certificat de <span className="text-cyan-400 font-mono">legacy.client.fr</span> expire le 12 mars 2025.
                <span className="text-[#555]"> — Envoyé par email et Telegram</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Plus jamais de certificat expiré</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Monitoring SSL/TLS", desc: "Vérification quotidienne. Date d'expiration, SANs, chaîne de certification. Détection auto-signés." },
              { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", title: "Alertes multi-canal", desc: "Email à J-30, J-14, J-7, J-1. Telegram temps réel. Webhook custom. Escalade par domaine." },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Dashboard", desc: "Vue d'ensemble vert/orange/rouge. Historique renouvellements. Détail technique par certificat." },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Audit TLS", desc: "Détection TLS 1.0/1.1. Cipher suites obsolètes. HSTS et OCSP stapling. Score de sécurité." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-cyan-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "50+", label: "Domaines", color: "text-cyan-400" },
              { value: "0", label: "Expirés en prod", color: "text-green-400" },
              { value: "J-30", label: "Première alerte", color: "text-amber-400" },
              { value: "24h", label: "Fréquence check", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Flask", "SQLite", "Telegram API", "SMTP", "OpenSSL"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Zéro certificat expiré</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Monitorez vos domaines, recevez les alertes, dormez tranquille.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
