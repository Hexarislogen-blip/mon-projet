'use client';

import Link from "next/link";

export default function VaultKeyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-indigo-600/10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1">Cryptographie</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Vault<span className="text-violet-400">Key</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Gestionnaire de secrets chiffré de bout en bout. AES-256-GCM côté client, partage sécurisé par lien éphémère, zéro connaissance côté serveur.
          </p>
          <div className="flex gap-3">
            <a href="https://vaultkey.dev" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">Essayer VaultKey</a>
          </div>
        </div>
      </section>

      {/* ── App Mockup — Vault Interface ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-violet-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">vaultkey.app — my vault</span>
          </div>
          <div className="flex">
            {/* Sidebar */}
            <div className="w-56 border-r border-[#1a1a1a] p-4 space-y-1 hidden md:block">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-3 px-2">Collections</div>
              {[
                { name: "Production", count: 12, active: true },
                { name: "Staging", count: 8, active: false },
                { name: "Personnel", count: 5, active: false },
                { name: "Partagés", count: 3, active: false },
              ].map((c, i) => (
                <div key={i} className={`flex justify-between items-center px-3 py-2 rounded-lg text-xs ${c.active ? 'bg-violet-500/10 text-violet-300' : 'text-[#888] hover:bg-[#1a1a1a]'}`}>
                  <span>{c.name}</span>
                  <span className="text-[10px] text-[#555]">{c.count}</span>
                </div>
              ))}
              <div className="border-t border-[#1a1a1a] mt-4 pt-4">
                <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-3 px-2">Équipe</div>
                <div className="flex -space-x-2 px-2">
                  {["bg-blue-500", "bg-green-500", "bg-orange-500", "bg-pink-500"].map((c, i) => (
                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-[#111] flex items-center justify-center text-[9px] font-bold`}>
                      {["HS", "MK", "JD", "AL"][i]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Main content */}
            <div className="flex-1 p-5">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-sm font-semibold text-white">Production</h3>
                <button className="px-3 py-1.5 bg-violet-600 text-[11px] font-semibold rounded-md">+ Nouveau secret</button>
              </div>
              <div className="space-y-2">
                {[
                  { key: "DATABASE_URL", value: "postgresql://****:****@db.prod:5432/app", type: "Connection", time: "2h" },
                  { key: "STRIPE_SECRET_KEY", value: "sk_live_****************************Kx4f", type: "API Key", time: "5j" },
                  { key: "JWT_SIGNING_KEY", value: "eyJhbGciOiJSUzI1NiIs**********************", type: "Token", time: "12j" },
                  { key: "AWS_ACCESS_KEY_ID", value: "AKIA****************************", type: "API Key", time: "30j" },
                  { key: "REDIS_PASSWORD", value: "••••••••••••••••••••", type: "Password", time: "45j" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 px-4 py-3 rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] hover:border-violet-500/20 transition-colors group">
                    <div className="w-8 h-8 rounded-md bg-violet-500/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-white font-mono">{s.key}</div>
                      <div className="text-[11px] text-[#555] font-mono truncate">{s.value}</div>
                    </div>
                    <span className="text-[9px] font-semibold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded hidden sm:inline">{s.type}</span>
                    <span className="text-[10px] text-[#555]">{s.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Security Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3 block">Sécurité</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Chiffrement zero-knowledge</h2>
            <p className="text-sm text-[#666] mt-4 max-w-lg mx-auto">Vos secrets sont chiffrés dans votre navigateur avant envoi. Le serveur ne voit jamais les données en clair.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "AES-256-GCM", desc: "Chiffrement symétrique de grade militaire. Chaque secret chiffré avec une clé dérivée de votre master password via Argon2id." },
              { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", title: "Partage éphémère", desc: "Lien de partage qui expire après une lecture ou un délai configurable. Le secret est chiffré dans le fragment URL." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Zero-knowledge", desc: "Le serveur stocke uniquement des blobs chiffrés. Même en cas de breach, les données sont inexploitables sans master password." },
              { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Vaults d'équipe", desc: "Partagez des collections de secrets avec votre équipe. Permissions granulaires par collection et par membre." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-violet-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Encryption Flow ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3 block">Processus</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Flux de chiffrement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Master Password", desc: "Votre mot de passe ne quitte jamais le navigateur" },
              { step: "02", title: "Dérivation Argon2id", desc: "Génération clé de chiffrement via 3 passes Argon2id" },
              { step: "03", title: "Chiffrement AES-256", desc: "Chaque secret chiffré avec un IV unique avant envoi" },
              { step: "04", title: "Stockage chiffré", desc: "Le serveur ne reçoit que des blobs chiffrés opaques" },
            ].map((s, i) => (
              <div key={i} className="relative p-5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]">
                <div className="text-3xl font-black text-violet-500/20 mb-3">{s.step}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[12px] text-[#666] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech + CTA ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3 block">Stack technique</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "Web Crypto API", "Argon2id", "AES-256-GCM", "React", "PostgreSQL", "Redis"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Sécurisez vos secrets</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Chiffrement de bout en bout, partage éphémère, zéro connaissance.</p>
            <div className="flex justify-center gap-3">
              <a href="https://vaultkey.dev" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">Essayer VaultKey</a>
              <Link href="/contact" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
