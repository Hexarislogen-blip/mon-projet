'use client';

import Link from "next/link";

export default function SQLInspectPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/15 via-transparent to-rose-600/5" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">Audit</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">SQL<span className="text-red-500">Inspect</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Extension Burp Suite. Détecte les SQLi time-based et boolean-based avec payloads adaptatifs par SGBD. Trouve ce que sqlmap rate.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Burp Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-red-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">Burp Suite — SQLInspect</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Scan results */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Scan Results — target.com</span>
                <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full font-semibold">3 SQLi found</span>
              </div>
              {[
                { param: "id", location: "GET /api/users?id=1", type: "Time-based blind", sgbd: "MySQL", severity: "Critical", payload: "1 AND SLEEP(5)--", latency: "5.02s vs 0.12s" },
                { param: "search", location: "POST /api/search", type: "Boolean-based", sgbd: "MySQL", severity: "High", payload: "' OR 1=1--", latency: "diff: 847 bytes" },
                { param: "X-User-Id", location: "Header", type: "Error-based", sgbd: "PostgreSQL", severity: "Critical", payload: "' AND 1=CAST(version() AS int)--", latency: "error leak" },
              ].map((r, i) => (
                <div key={i} className="px-4 py-3 border-b border-[#1a1a1a] last:border-0">
                  <div className="flex items-center gap-3 text-[11px] mb-2">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${r.severity === 'Critical' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>{r.severity}</span>
                    <span className="text-red-400 font-semibold">{r.type}</span>
                    <span className="text-[#555]">→</span>
                    <span className="text-[#888] font-mono">{r.location}</span>
                    <span className="ml-auto text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">{r.sgbd}</span>
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-mono pl-2">
                    <span className="text-[#555]">param:</span>
                    <span className="text-red-400">{r.param}</span>
                    <span className="text-[#555]">payload:</span>
                    <span className="text-amber-400">{r.payload}</span>
                    <span className="text-[#555]">proof:</span>
                    <span className="text-green-400">{r.latency}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* SGBD detection */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "MySQL", fn: "SLEEP()", payloads: "62", color: "text-blue-400" },
                { name: "PostgreSQL", fn: "pg_sleep()", payloads: "48", color: "text-cyan-400" },
                { name: "MSSQL", fn: "WAITFOR DELAY", payloads: "41", color: "text-violet-400" },
              ].map((s, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-3">
                  <div className={`text-sm font-bold ${s.color}`}>{s.name}</div>
                  <div className="text-[10px] text-[#555] font-mono mt-1">{s.fn}</div>
                  <div className="text-[10px] text-[#666] mt-1">{s.payloads} payloads</div>
                </div>
              ))}
            </div>

            {/* WAF bypass indicator */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-2">WAF Bypass</div>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                {["URL encode", "Double encode", "Unicode", "Comment injection", "Case switching", "Null bytes"].map((t, i) => (
                  <span key={i} className="text-red-300 bg-red-500/10 border border-red-500/15 px-2 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Capacités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Détection avancée de SQLi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Détection automatique", desc: "Scan GET, POST, headers, cookies. Time-based, boolean-based et error-based. Mesure de latence et comparaison de réponses." },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Payloads adaptatifs", desc: "Détection auto du SGBD. Payloads MySQL, PostgreSQL, MSSQL. Encodage WAF bypass. Import custom JSON." },
              { icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", title: "Intégration Burp", desc: "Tab dédiée. Scan passif et actif. Repeater et Intruder. Issues ajoutées au Scanner auto." },
              { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Reporting", desc: "Rapport HTML avec PoC. Export JSON pour CI. CVSS auto. Recommandations de remédiation." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-red-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "3", label: "SGBD supportés", color: "text-red-400" },
              { value: "150+", label: "Payloads", color: "text-amber-400" },
              { value: "10+", label: "Audits réalisés", color: "text-green-400" },
              { value: "4", label: "SQLi ratées par sqlmap", color: "text-cyan-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Java", "Burp Suite API", "SQL", "JSON", "HTML"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Trouvez ce que sqlmap rate</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Payloads adaptatifs, bypass WAF, preuves de concept automatiques.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
