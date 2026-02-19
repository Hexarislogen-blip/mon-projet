'use client';

import Link from "next/link";

export default function ScanPortPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-transparent to-orange-600/5" />
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1">Réseau</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Scan<span className="text-red-400">Port</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Scanner de ports TCP/UDP asynchrone. 65k ports en 40 secondes, fingerprinting de 20+ services, sortie JSON pipeable.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Terminal Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-red-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">terminal — scanport</span>
          </div>
          <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
            <div className="text-[#888]">$ <span className="text-red-400">scanport</span> --target 192.168.1.0/24 --ports 1-65535 --threads 5000</div>
            <div className="text-[#555] mt-2">Starting TCP scan on 192.168.1.0/24...</div>
            <div className="text-[#555]">Threads: <span className="text-red-400">5000</span> | Timeout: <span className="text-[#888]">500ms</span> | Ports: <span className="text-[#888]">65535</span></div>
            <div className="mt-2 text-[#555]">
              <span className="text-green-400">█████████████████████████████████████████</span>
              <span className="text-[#555]">░░░</span>
              <span className="text-[#888] ml-2">92% — 38.2s</span>
            </div>
            <div className="mt-3 text-white font-semibold">━━━ Results: 192.168.1.42 ━━━━━━━━━━━━━━━━━━━━━━━━━</div>
            <div className="mt-2 grid grid-cols-1 gap-0.5">
              {[
                { port: "22", state: "open", service: "SSH", version: "OpenSSH 8.9p1", color: "text-green-400" },
                { port: "80", state: "open", service: "HTTP", version: "nginx/1.24.0", color: "text-green-400" },
                { port: "443", state: "open", service: "HTTPS", version: "nginx/1.24.0 (TLS 1.3)", color: "text-green-400" },
                { port: "3306", state: "open", service: "MySQL", version: "MySQL 8.0.35", color: "text-yellow-400" },
                { port: "5432", state: "open", service: "PostgreSQL", version: "PostgreSQL 16.1", color: "text-yellow-400" },
                { port: "6379", state: "open", service: "Redis", version: "Redis 7.2.3", color: "text-red-400" },
                { port: "8080", state: "open", service: "HTTP", version: "Node.js Express", color: "text-green-400" },
                { port: "9090", state: "open", service: "HTTP", version: "Prometheus", color: "text-green-400" },
              ].map((p, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-red-400 w-12 text-right">{p.port}/tcp</span>
                  <span className={`w-10 ${p.color}`}>{p.state}</span>
                  <span className="text-[#888] w-24">{p.service}</span>
                  <span className="text-[#555]">{p.version}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-[#1a1a1a] pt-3">
              <span className="text-white">Summary:</span>
              <span className="text-green-400 ml-2">8 open</span>
              <span className="text-[#555] ml-2">65527 closed</span>
              <span className="text-[#555] ml-4">Scan completed in <span className="text-red-400">38.4s</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-3 block">Capacités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Scan rapide, résultats précis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Scan TCP", desc: "65535 ports en 40s via asyncio. 5000 connexions simultanées. Timeout configurable. Scan de ranges d'IPs." },
              { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", title: "Scan UDP", desc: "Top 1000 ports en ~2 min. Probes spécifiques par protocole. Détection filtrés vs fermés." },
              { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: "Fingerprinting", desc: "20+ services reconnus. Bannières SSH/FTP/SMTP. Versions HTTP/HTTPS. Détection bases de données." },
              { icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4", title: "Sortie JSON", desc: "Export JSON structuré pipeable. Export CSV pour reporting. Mode silencieux pour scripts automatisés." },
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
              { value: "<40s", label: "65k ports TCP", color: "text-red-400" },
              { value: "20+", label: "Services reconnus", color: "text-green-400" },
              { value: "5k", label: "Connexions simultanées", color: "text-amber-400" },
              { value: "JSON", label: "Format de sortie", color: "text-cyan-400" },
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
              {["Python", "asyncio", "Socket", "JSON", "argparse"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">65k ports, 40 secondes</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Scanner rapide, sortie propre, intégrable dans vos pipelines.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
