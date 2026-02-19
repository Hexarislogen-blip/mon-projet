'use client';

import Link from "next/link";

export default function APIVaultPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/15 via-transparent to-blue-600/5" />
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-full px-3 py-1">Backend</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">API<span className="text-sky-400">Vault</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            API gateway maison. Rate limiting, auth JWT, cache Redis, logging structuré. 15k req/s sur un VPS à 5€.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Gateway Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-sky-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">apivault — live traffic</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Req/s", value: "14,847", color: "text-sky-400" },
                { label: "Latence", value: "2.3ms", color: "text-green-400" },
                { label: "Cache Hit", value: "87%", color: "text-amber-400" },
                { label: "Rate Limited", value: "0.4%", color: "text-red-400" },
              ].map((m, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a]">
                  <div className="text-[9px] text-[#555] uppercase tracking-wider mb-1">{m.label}</div>
                  <div className={`text-lg font-bold font-mono ${m.color}`}>{m.value}</div>
                </div>
              ))}
            </div>
            {/* Request log */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a]">
                <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Requêtes récentes</span>
              </div>
              {[
                { method: "GET", path: "/api/users", status: 200, time: "1.2ms", cache: "HIT", ip: "92.168.1.42" },
                { method: "POST", path: "/api/auth/login", status: 200, time: "45ms", cache: "—", ip: "185.12.4.88" },
                { method: "GET", path: "/api/products?page=2", status: 200, time: "0.8ms", cache: "HIT", ip: "78.250.3.11" },
                { method: "GET", path: "/api/users/me", status: 401, time: "0.3ms", cache: "—", ip: "45.33.12.7" },
                { method: "POST", path: "/api/webhooks", status: 429, time: "0.1ms", cache: "—", ip: "203.0.113.5" },
                { method: "GET", path: "/api/orders/latest", status: 200, time: "2.1ms", cache: "MISS", ip: "10.0.0.15" },
              ].map((r, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2 border-b border-[#1a1a1a] last:border-0 text-[11px] font-mono">
                  <span className={`w-12 font-semibold ${r.method === 'GET' ? 'text-green-400' : 'text-sky-400'}`}>{r.method}</span>
                  <span className="text-[#888] flex-1 truncate">{r.path}</span>
                  <span className={`w-8 text-center font-semibold ${r.status === 200 ? 'text-green-400' : r.status === 401 ? 'text-yellow-400' : 'text-red-400'}`}>{r.status}</span>
                  <span className="text-[#555] w-12 text-right">{r.time}</span>
                  <span className={`w-10 text-center text-[9px] font-bold ${r.cache === 'HIT' ? 'text-amber-400' : 'text-[#444]'}`}>{r.cache}</span>
                  <span className="text-[#444] w-24 text-right hidden sm:inline">{r.ip}</span>
                </div>
              ))}
            </div>
            {/* Rate limit config */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-3">Configuration rate limiting</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] font-mono">
                {[
                  { route: "/api/public/*", limit: "100 req/min", window: "sliding" },
                  { route: "/api/auth/*", limit: "1000 req/min", window: "sliding" },
                  { route: "/api/webhooks", limit: "50 req/min", window: "fixed" },
                ].map((c, i) => (
                  <div key={i} className="flex flex-col gap-1 p-3 rounded-lg border border-[#1a1a1a]">
                    <span className="text-sky-400">{c.route}</span>
                    <span className="text-[#888]">{c.limit}</span>
                    <span className="text-[#555] text-[10px]">{c.window} window</span>
                  </div>
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
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Gateway intelligent</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Rate Limiting", desc: "Sliding window Redis. Limites par IP, route et user. Headers X-RateLimit-*. Bypass pour IPs whitelistées." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Auth JWT", desc: "RS256 et HS256. Extraction auto des claims, injection dans headers upstream. Blacklist via Redis." },
              { icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", title: "Cache Redis", desc: "Cache GET avec TTL par route. Invalidation par pattern ou tag. Cache-Control headers respectés." },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Observabilité", desc: "Logging JSON structuré. Métriques Prometheus. Request ID end-to-end. Health check détaillé." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-sky-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "15k", label: "Req/seconde", color: "text-sky-400" },
              { value: "<3ms", label: "Latence ajoutée", color: "text-green-400" },
              { value: "5€", label: "Coût serveur/mois", color: "text-amber-400" },
              { value: "99.98%", label: "Uptime 6 mois", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-sky-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Redis", "JWT", "Prometheus", "Docker", "TypeScript"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">15k req/s pour 5€/mois</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Un gateway léger, rapide et configurable pour vos APIs.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
