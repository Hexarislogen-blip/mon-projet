'use client';

import Link from "next/link";

export default function SentinelWAFPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-orange-600/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">Infrastructure</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Sentinel<span className="text-red-500">WAF</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Pare-feu applicatif web temps réel. Analyse chaque requête HTTP en &lt;2ms, bloque les attaques OWASP Top 10 avec 0.1% de faux positifs.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            <a href="#features" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Découvrir</a>
          </div>
        </div>
      </section>

      {/* ── Dashboard Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-red-500/5">
          {/* Window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">sentinel-waf — dashboard</span>
          </div>
          {/* Dashboard content */}
          <div className="p-6 space-y-4">
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {[
                { label: "Requêtes / min", value: "12,847", color: "text-white" },
                { label: "Bloquées", value: "23", color: "text-red-400" },
                { label: "Latence moy.", value: "1.2ms", color: "text-green-400" },
                { label: "Faux positifs", value: "0.08%", color: "text-yellow-400" },
              ].map((s, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg p-4 border border-[#1a1a1a]">
                  <div className="text-[10px] text-[#666] uppercase tracking-wider mb-1">{s.label}</div>
                  <div className={`text-xl font-bold font-mono ${s.color}`}>{s.value}</div>
                </div>
              ))}
            </div>
            {/* Traffic chart mockup */}
            <div className="bg-[#0a0a0a] rounded-lg p-5 border border-[#1a1a1a]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs text-[#666] font-semibold uppercase tracking-wider">Trafic temps réel</span>
                <div className="flex gap-4 text-[10px] text-[#555]">
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" />Légitime</span>
                  <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" />Bloqué</span>
                </div>
              </div>
              <div className="flex items-end gap-[3px] h-32">
                {Array.from({ length: 48 }).map((_, i) => {
                  const h = 20 + Math.sin(i * 0.3) * 30 + Math.random() * 40;
                  const isAttack = i === 18 || i === 19 || i === 33;
                  return (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-[1px]">
                      {isAttack && <div className="rounded-sm bg-red-500/80" style={{ height: `${8 + Math.random() * 15}%` }} />}
                      <div className={`rounded-sm ${isAttack ? 'bg-emerald-500/60' : 'bg-emerald-500/40'}`} style={{ height: `${h}%` }} />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Recent blocks */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#1a1a1a]">
                <span className="text-xs text-[#666] font-semibold uppercase tracking-wider">Requêtes bloquées récentes</span>
              </div>
              {[
                { time: "14:23:07", ip: "185.220.101.34", type: "SQLi", path: "/api/users?id=1' OR 1=1--", severity: "CRITICAL" },
                { time: "14:22:51", ip: "91.132.147.12", type: "XSS", path: "/search?q=<script>alert(1)</script>", severity: "HIGH" },
                { time: "14:22:38", ip: "185.220.101.34", type: "Path Traversal", path: "/files/../../../etc/passwd", severity: "CRITICAL" },
              ].map((log, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1a1a] last:border-0 text-[11px] font-mono">
                  <span className="text-[#555] w-16">{log.time}</span>
                  <span className="text-[#888] w-28">{log.ip}</span>
                  <span className={`w-20 font-semibold ${log.severity === 'CRITICAL' ? 'text-red-400' : 'text-orange-400'}`}>{log.type}</span>
                  <span className="text-[#555] truncate flex-1">{log.path}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${log.severity === 'CRITICAL' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'}`}>{log.severity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section id="features" className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Protection multicouche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z", title: "Détection temps réel", desc: "Chaque requête HTTP analysée en moins de 2ms. Signatures OWASP CRS + détection d'anomalies comportementales." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "OWASP Top 10", desc: "SQLi, XSS, SSRF, path traversal, command injection, SSTI. Toutes les attaques courantes bloquées nativement." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Mode Learning", desc: "7 jours d'observation du trafic légitime pour générer des règles whitelist adaptées à votre application." },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Dashboard live", desc: "Métriques en temps réel, logs de requêtes bloquées, graphiques de trafic et alertes configurables." },
              { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Règles YAML", desc: "Règles custom en YAML simples à écrire. Compatible OWASP CRS. Import/export de configurations." },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Auto-scaling", desc: "Déploiement Docker horizontal. Scale automatique selon le volume de trafic. Zero downtime." },
            ].map((f, i) => (
              <div key={i} className="group p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-red-500/30 hover:bg-[#111] transition-all duration-300">
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

      {/* ── Architecture Diagram ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comment ça fonctionne</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { label: "Client", sub: "HTTP Request", color: "border-blue-500/30", bg: "bg-blue-500/5", text: "text-blue-400" },
              { label: "Sentinel WAF", sub: "Analyse < 2ms", color: "border-red-500/30", bg: "bg-red-500/5", text: "text-red-400" },
              { label: "Backend", sub: "Application", color: "border-green-500/30", bg: "bg-green-500/5", text: "text-green-400" },
            ].map((node, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-48 p-6 rounded-xl border ${node.color} ${node.bg} text-center`}>
                  <div className={`text-sm font-bold ${node.text} mb-1`}>{node.label}</div>
                  <div className="text-[11px] text-[#666]">{node.sub}</div>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex items-center px-3">
                    <div className="w-12 h-[1px] bg-[#333]" />
                    <svg className="w-3 h-3 text-[#555] -ml-1" fill="currentColor" viewBox="0 0 12 12"><path d="M4 2l4 4-4 4V2z"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-6 text-[11px] text-[#555]">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500" />Requête légitime → passée</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500" />Attaque détectée → bloquée</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Stack technique</span>
              <h2 className="text-2xl font-bold tracking-tight">Construit pour la performance</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Rust", "Docker", "YAML", "WebSocket", "Prometheus", "Grafana", "Redis", "eBPF"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Protégez votre application</h2>
          <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Déployez Sentinel WAF en une commande Docker et bloquez les attaques en temps réel.</p>
          <div className="flex justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
