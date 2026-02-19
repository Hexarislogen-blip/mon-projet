'use client';

import Link from "next/link";

export default function HashBJPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-transparent to-orange-600/5" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">Utility</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Hash<span className="text-amber-400">BJ</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Colle un hash inconnu. HashBJ identifie l{"'"}algorithme parmi 30+ possibilités en moins de 100ms. Rust + WASM, 45KB, zéro backend.
          </p>
          <div className="flex gap-3">
            <a href="https://hashbj.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors">Identifier un hash</a>
          </div>
        </div>
      </section>

      {/* ── Hash Identifier Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-amber-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">hashbj — identifier</span>
          </div>
          <div className="p-6 space-y-5">
            {/* Input */}
            <div className="bg-[#0a0a0a] rounded-lg border border-amber-500/20 p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] text-[#555] uppercase tracking-wider font-semibold">Hash à identifier</span>
                <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full font-semibold">Identifié — 12ms</span>
              </div>
              <div className="font-mono text-sm text-amber-300 break-all">$2b$12$WApznUPhDubN0oeveSXHp.Rn5HEOoKelBJa8M/CvMO3S5a5aVMVPi</div>
            </div>

            {/* Results */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#1a1a1a]">
                <span className="text-xs text-[#666] font-semibold uppercase tracking-wider">Résultats</span>
              </div>
              <div className="divide-y divide-[#1a1a1a]">
                {[
                  { algo: "bcrypt", confidence: 99.9, match: "Préfixe $2b$, longueur 60, format standard", primary: true },
                  { algo: "bcrypt (Blowfish)", confidence: 99.5, match: "Variante $2b$ (2011+)", primary: false },
                ].map((r, i) => (
                  <div key={i} className="flex items-center gap-4 px-4 py-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${r.primary ? 'bg-amber-500/20 text-amber-400' : 'bg-[#1a1a1a] text-[#666]'}`}>
                      #{i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{r.algo}</span>
                        {r.primary && <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">BEST MATCH</span>}
                      </div>
                      <span className="text-[11px] text-[#666]">{r.match}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-amber-400">{r.confidence}%</div>
                      <div className="text-[10px] text-[#555]">confiance</div>
                    </div>
                    <div className="w-24 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${r.confidence}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hash details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Longueur", value: "60 chars" },
                { label: "Charset", value: "Base64 + $" },
                { label: "Préfixe", value: "$2b$12$" },
                { label: "Temps", value: "12ms" },
              ].map((d, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-3 text-center">
                  <div className="text-[10px] text-[#555] uppercase tracking-wider mb-1">{d.label}</div>
                  <div className="text-sm font-mono font-semibold text-white">{d.value}</div>
                </div>
              ))}
            </div>

            {/* Batch mode preview */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] text-[#555] uppercase tracking-wider font-semibold">Mode batch — 5 hashes</span>
                <span className="text-[10px] text-[#555]">Total: 47ms</span>
              </div>
              <div className="space-y-1.5 text-[11px] font-mono">
                {[
                  { hash: "5d41402abc4b2a76b9719d911017c592", result: "MD5", time: "8ms", color: "text-green-400" },
                  { hash: "aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d", result: "SHA-1", time: "9ms", color: "text-green-400" },
                  { hash: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824", result: "SHA-256", time: "10ms", color: "text-green-400" },
                  { hash: "$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHQ$...", result: "Argon2id", time: "11ms", color: "text-green-400" },
                  { hash: "b4b9b02e6f09a9bd760f388b67351e2b", result: "MD5 / MD4", time: "9ms", color: "text-amber-400" },
                ].map((h, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <span className="text-[#555] truncate flex-1 max-w-[300px]">{h.hash}</span>
                    <span className={`font-semibold ${h.color}`}>{h.result}</span>
                    <span className="text-[#444] w-12 text-right">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Supported Algorithms ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">Algorithmes</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">30+ formats reconnus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Hashes classiques", items: ["MD5", "SHA-1", "SHA-256", "SHA-512", "SHA-3", "RIPEMD-160"], color: "amber" },
              { title: "Mots de passe", items: ["bcrypt ($2b$)", "scrypt", "Argon2id", "PBKDF2", "phpass", "Django PBKDF2"], color: "orange" },
              { title: "Systèmes", items: ["NTLM", "LM", "MySQL 4.1+", "PostgreSQL MD5", "Oracle 11g", "CRC32"], color: "yellow" },
            ].map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111]">
                <h3 className="text-sm font-semibold text-white mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((algo) => (
                    <span key={algo} className="text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/15 px-2.5 py-1 rounded-md">{algo}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">Moteur</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Rust + WASM + SIMD</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Analyse structurelle", desc: "Longueur, charset, préfixe et suffixe du hash sont analysés pour éliminer les candidats impossibles." },
              { step: "02", title: "Heuristiques", desc: "Patterns statistiques et fréquences de caractères pour départager les candidats restants (MD5 vs MD4)." },
              { step: "03", title: "Classement", desc: "Les algorithmes candidats sont classés par probabilité. Le résultat est retourné en moins de 100ms." },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]">
                <div className="text-3xl font-black text-amber-500/20 mb-3">{s.step}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats + CTA ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { value: "<100ms", label: "Identification", color: "text-amber-400" },
              { value: "30+", label: "Algorithmes", color: "text-green-400" },
              { value: "45KB", label: "WASM binary", color: "text-cyan-400" },
              { value: "99.8%", label: "Précision", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Rust", "WebAssembly", "SIMD", "TypeScript", "React"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Hash inconnu ?</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Collez-le, HashBJ fait le reste. 100ms, 30+ algorithmes, zéro backend.</p>
            <div className="flex justify-center gap-3">
              <a href="https://hashbj.vercel.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors">Identifier un hash</a>
              <Link href="/contact" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
