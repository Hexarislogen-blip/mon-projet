'use client';

import Link from "next/link";

export default function LogPipePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/15 via-transparent to-emerald-600/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">Monitoring</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Log<span className="text-green-400">Pipe</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Sidecar léger qui collecte les logs Docker et les pousse vers Loki. Auto-découverte, parsing JSON, labels automatiques. 8MB, 12MB RAM.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Log Stream Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-green-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">logpipe — live stream</span>
            <span className="ml-auto text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full font-semibold">12 containers</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Container status */}
            <div className="flex flex-wrap gap-2">
              {[
                { name: "api-gateway", status: "streaming" },
                { name: "auth-service", status: "streaming" },
                { name: "user-service", status: "streaming" },
                { name: "payment-svc", status: "streaming" },
                { name: "worker-email", status: "idle" },
                { name: "redis", status: "streaming" },
                { name: "postgres", status: "streaming" },
                { name: "nginx", status: "streaming" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0a0a0a] border border-[#1a1a1a] text-[10px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${c.status === 'streaming' ? 'bg-green-500 animate-pulse' : 'bg-[#444]'}`} />
                  <span className={`font-mono ${c.status === 'streaming' ? 'text-green-400' : 'text-[#555]'}`}>{c.name}</span>
                </div>
              ))}
            </div>

            {/* Log stream */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Stream temps réel</span>
                <span className="text-[10px] text-[#555] font-mono">847 lignes/s</span>
              </div>
              <div className="p-3 space-y-0.5 font-mono text-[11px]">
                {[
                  { time: "14:32:01.234", container: "api-gateway", level: "info", msg: "GET /api/users 200 12ms", color: "text-green-400" },
                  { time: "14:32:01.235", container: "auth-service", level: "info", msg: "Token validated for user_id=4821", color: "text-green-400" },
                  { time: "14:32:01.240", container: "postgres", level: "info", msg: "SELECT * FROM users WHERE id=$1 [2.1ms]", color: "text-green-400" },
                  { time: "14:32:01.312", container: "payment-svc", level: "warn", msg: "Stripe webhook retry #2 for evt_1234", color: "text-yellow-400" },
                  { time: "14:32:01.445", container: "api-gateway", level: "error", msg: "POST /api/orders 500 Internal Server Error", color: "text-red-400" },
                  { time: "14:32:01.446", container: "api-gateway", level: "error", msg: "  at OrderController.create (order.ts:47)", color: "text-red-400" },
                  { time: "14:32:01.446", container: "api-gateway", level: "error", msg: "  at Router.handle (router.ts:112)", color: "text-red-400" },
                  { time: "14:32:01.501", container: "redis", level: "info", msg: "SETEX session:u4821 3600 [0.2ms]", color: "text-green-400" },
                  { time: "14:32:01.612", container: "nginx", level: "info", msg: "192.168.1.42 - GET /api/health 200 0.8ms", color: "text-green-400" },
                ].map((l, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-[#444] shrink-0">{l.time}</span>
                    <span className="text-cyan-400/60 w-24 shrink-0 truncate">{l.container}</span>
                    <span className={`w-10 shrink-0 ${l.color}`}>{l.level}</span>
                    <span className="text-[#888] truncate">{l.msg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Loki push stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Lignes/s", value: "847" },
                { label: "Buffer", value: "23/1000" },
                { label: "Loki push", value: "2.0s" },
                { label: "Erreurs", value: "0" },
              ].map((m, i) => (
                <div key={i} className="bg-[#0a0a0a] rounded-lg p-3 border border-[#1a1a1a] text-center">
                  <div className="text-[9px] text-[#555] uppercase tracking-wider mb-1">{m.label}</div>
                  <div className="text-sm font-bold font-mono text-green-400">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Zéro configuration</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Auto-découverte", desc: "Détecte les containers via Docker socket. S'abonne aux logs sans config. Labels extraits automatiquement." },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Parsing intelligent", desc: "Détection JSON auto. Extraction des champs comme labels Loki. Support multi-lignes pour les stack traces." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Ultra-léger", desc: "Binaire 8MB, 12MB RAM. Buffer 1000 lignes par container. Batch push toutes les 2 secondes." },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Fiabilité", desc: "Retry auto sur erreur Loki. Zéro perte de logs sur restart. Health check et métriques Prometheus." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-green-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "8MB", label: "Binaire", color: "text-green-400" },
              { value: "12MB", label: "RAM moyenne", color: "text-cyan-400" },
              { value: "50+", label: "Containers", color: "text-amber-400" },
              { value: "0", label: "Logs perdus", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Go", "Docker API", "Grafana Loki", "Prometheus", "JSON"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Logs centralisés, zéro config</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Posez LogPipe à côté de vos containers. Il fait le reste.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
