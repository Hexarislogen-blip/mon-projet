'use client';

import Link from "next/link";

export default function DeployHookPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/15 via-transparent to-amber-600/5" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">CI/CD</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Deploy<span className="text-orange-400">Hook</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Push sur main → webhook GitHub → build → deploy → notification Slack. 45 secondes, zéro Kubernetes.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Deploy Timeline Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-orange-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">deployhook — dashboard</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Deploy history */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Déploiements récents</span>
                <button className="text-[10px] text-orange-400 font-semibold">Redeploy</button>
              </div>
              {[
                { commit: "a3f8b21", msg: "fix: rate limiter config", branch: "main", time: "2 min ago", dur: "42s", status: "live", steps: "4/4" },
                { commit: "e7c4d09", msg: "feat: add webhook retry logic", branch: "main", time: "3h ago", dur: "48s", status: "success", steps: "4/4" },
                { commit: "b1a2c33", msg: "refactor: auth middleware", branch: "staging", time: "5h ago", dur: "51s", status: "success", steps: "4/4" },
                { commit: "f9d0e12", msg: "fix: memory leak in ws handler", branch: "main", time: "1d ago", dur: "45s", status: "failed", steps: "3/4" },
              ].map((d, i) => (
                <div key={i} className="px-4 py-3 border-b border-[#1a1a1a] last:border-0">
                  <div className="flex items-center gap-3 text-[11px]">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${d.status === 'live' ? 'bg-orange-500' : d.status === 'failed' ? 'bg-red-500' : 'bg-green-500'}`} />
                    <span className="text-orange-400 font-mono w-16">{d.commit}</span>
                    <span className="text-[#888] flex-1 truncate">{d.msg}</span>
                    <span className="text-[#555] font-mono hidden sm:inline">{d.branch}</span>
                    <span className="text-[#555]">{d.dur}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${d.status === 'live' ? 'bg-orange-500/20 text-orange-400' : d.status === 'failed' ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{d.status}</span>
                  </div>
                  {d.status === 'live' && (
                    <div className="mt-2 ml-5 flex gap-2">
                      {["git pull", "npm install", "npm run build", "pm2 restart"].map((step, j) => (
                        <div key={j} className="flex items-center gap-1 text-[10px]">
                          <span className="w-3.5 h-3.5 rounded flex items-center justify-center bg-green-500/20 text-green-400 text-[8px] font-bold">✓</span>
                          <span className="text-[#666] font-mono">{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {d.status === 'failed' && (
                    <div className="mt-2 ml-5 flex gap-2">
                      {["git pull", "npm install", "npm run build"].map((step, j) => (
                        <div key={j} className="flex items-center gap-1 text-[10px]">
                          <span className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[8px] font-bold ${j < 2 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>{j < 2 ? '✓' : '✗'}</span>
                          <span className={`font-mono ${j < 2 ? 'text-[#666]' : 'text-red-400'}`}>{step}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Slack notification preview */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-3">Notification Slack</div>
              <div className="bg-[#111] rounded-lg border-l-4 border-green-500 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold text-white">DeployHook</span>
                  <span className="text-[10px] text-[#555]">il y a 2 min</span>
                </div>
                <div className="text-[11px] text-[#888]">
                  ✅ <span className="font-semibold text-green-400">Deploy success</span> on <span className="text-orange-400">main</span>
                </div>
                <div className="text-[10px] text-[#666] mt-1 font-mono">
                  a3f8b21 — fix: rate limiter config (42s)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Push → Deploy → Notify</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1", title: "Webhooks GitHub", desc: "Vérification HMAC SHA-256. Events push, release, tag. Filtrage par branche. Queue anti-conflits." },
              { icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", title: "Scripts YAML", desc: "Séquence de commandes configurable. Rollback auto sur échec. Timeout par étape. Env vars injectées." },
              { icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", title: "Notifications", desc: "Slack avec commit, durée et logs. @channel sur échec critique. Webhook custom pour intégrations." },
              { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Dashboard", desc: "Historique des deploys. Logs temps réel via SSE. Stats succès/échec. Redeploy en un clic." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-orange-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "45s", label: "Push → live", color: "text-orange-400" },
              { value: "4", label: "Projets en prod", color: "text-green-400" },
              { value: "99.2%", label: "Taux de succès", color: "text-amber-400" },
              { value: "0", label: "Deploys perdus", color: "text-cyan-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "YAML", "Slack API", "GitHub Webhooks", "PM2"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">CI/CD pour VPS à 5€</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Push, build, deploy, notify. Sans Kubernetes, sans cloud CI.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
