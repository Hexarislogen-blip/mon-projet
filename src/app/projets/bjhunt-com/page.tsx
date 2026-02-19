'use client';

import Link from "next/link";

export default function BJHUNTPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-cyan-600/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">AI Platform</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">BJ<span className="text-blue-400">HUNT</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Décris ta mission de pentest en langage naturel. BJHUNT orchestre 317+ outils de sécurité et te livre un rapport unifié.
          </p>
          <div className="flex gap-3">
            <a href="https://www.bjhunt.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer BJHUNT</a>
            <a href="#how" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Comment ça marche</a>
          </div>
        </div>
      </section>

      {/* ── Chat Interface Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-blue-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">bjhunt.com — mission #0847</span>
          </div>
          <div className="flex">
            {/* Sidebar tools */}
            <div className="w-48 border-r border-[#1a1a1a] p-3 hidden lg:block">
              <div className="text-[9px] text-[#555] uppercase tracking-wider font-semibold mb-3 px-2">Outils actifs</div>
              {[
                { name: "nmap", status: "done", color: "bg-green-500" },
                { name: "nikto", status: "running", color: "bg-blue-500" },
                { name: "nuclei", status: "queue", color: "bg-[#333]" },
                { name: "sqlmap", status: "queue", color: "bg-[#333]" },
                { name: "ffuf", status: "queue", color: "bg-[#333]" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 px-2 py-1.5 text-[11px]">
                  <span className={`w-1.5 h-1.5 rounded-full ${t.color} ${t.status === 'running' ? 'animate-pulse' : ''}`} />
                  <span className={`font-mono ${t.status === 'done' ? 'text-green-400' : t.status === 'running' ? 'text-blue-400' : 'text-[#555]'}`}>{t.name}</span>
                </div>
              ))}
              <div className="border-t border-[#1a1a1a] mt-3 pt-3">
                <div className="text-[9px] text-[#555] uppercase tracking-wider font-semibold mb-2 px-2">Cible</div>
                <div className="px-2 text-[11px] text-blue-400 font-mono">example.com</div>
                <div className="px-2 text-[10px] text-[#555] mt-1">4 ports ouverts</div>
                <div className="px-2 text-[10px] text-[#555]">2 services web</div>
              </div>
            </div>
            {/* Chat area */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 p-5 space-y-4 min-h-[350px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-md bg-blue-600/20 border border-blue-500/20 rounded-xl rounded-tr-sm px-4 py-3">
                    <p className="text-[13px] text-blue-100">Scanne les ports ouverts de example.com et teste les services web pour des vulnérabilités connues</p>
                  </div>
                </div>
                {/* AI response */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-[10px] font-bold text-blue-400">BJ</span>
                  </div>
                  <div className="max-w-lg space-y-3">
                    <div className="bg-[#1a1a1a] rounded-xl rounded-tl-sm px-4 py-3">
                      <p className="text-[13px] text-[#ccc]">Je lance la mission. Voici le plan d{"'"}exécution :</p>
                    </div>
                    {/* Execution plan */}
                    <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-3 space-y-2">
                      {[
                        { step: 1, tool: "nmap", cmd: "nmap -sV -sC -T4 example.com", status: "done" },
                        { step: 2, tool: "nikto", cmd: "nikto -h http://example.com:80", status: "running" },
                        { step: 3, tool: "nuclei", cmd: "nuclei -u http://example.com -t cves/", status: "pending" },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px] font-mono">
                          <span className={`w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold ${s.status === 'done' ? 'bg-green-500/20 text-green-400' : s.status === 'running' ? 'bg-blue-500/20 text-blue-400' : 'bg-[#1a1a1a] text-[#555]'}`}>
                            {s.status === 'done' ? '✓' : s.step}
                          </span>
                          <span className={`${s.status === 'done' ? 'text-green-400' : s.status === 'running' ? 'text-blue-400' : 'text-[#555]'}`}>{s.tool}</span>
                          <span className="text-[#444] truncate">{s.cmd}</span>
                        </div>
                      ))}
                    </div>
                    {/* Nmap results */}
                    <div className="bg-[#0a0a0a] rounded-lg border border-green-500/20 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] font-semibold text-green-400 uppercase tracking-wider">nmap — terminé</span>
                      </div>
                      <div className="text-[11px] font-mono text-[#888] space-y-0.5">
                        <div>PORT    STATE  SERVICE    VERSION</div>
                        <div className="text-green-400/80">22/tcp  open   ssh        OpenSSH 8.9</div>
                        <div className="text-green-400/80">80/tcp  open   http       nginx 1.24.0</div>
                        <div className="text-green-400/80">443/tcp open   https      nginx 1.24.0</div>
                        <div className="text-yellow-400/80">3306/tcp open  mysql      MySQL 8.0.35</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input bar */}
              <div className="border-t border-[#1a1a1a] p-4">
                <div className="flex items-center gap-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl px-4 py-3">
                  <input type="text" placeholder="Décris ta prochaine action..." className="flex-1 bg-transparent text-sm text-[#888] outline-none placeholder-[#444]" readOnly />
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3 block">Processus</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">3 étapes, zéro commande</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Décris ta mission", desc: "Écris en français ce que tu veux tester. Le LLM comprend le contexte et planifie les outils nécessaires.", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
              { step: "02", title: "BJHUNT orchestre", desc: "Les outils tournent dans des containers isolés. Les résultats sont chaînés automatiquement entre les étapes.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
              { step: "03", title: "Rapport unifié", desc: "Tous les résultats agrégés dans un rapport avec sévérité CVSS. Export en PDF, JSON ou Markdown.", icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
            ].map((s, i) => (
              <div key={i} className="relative p-6 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d]">
                <div className="text-4xl font-black text-blue-500/15 mb-4">{s.step}</div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} /></svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools Grid ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3 block">Arsenal</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">317+ outils intégrés</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {["nmap", "sqlmap", "nikto", "nuclei", "ffuf", "burp", "hydra", "john", "hashcat", "metasploit", "gobuster", "wfuzz", "amass", "subfinder", "httpx", "masscan", "rustscan", "feroxbuster"].map((tool) => (
              <div key={tool} className="px-3 py-3 rounded-lg border border-[#1a1a1a] bg-[#111] text-center hover:border-blue-500/30 transition-colors">
                <span className="text-xs font-mono text-[#ccc]">{tool}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] text-[#555] mt-6">+ 299 autres outils de reconnaissance, exploitation, post-exploitation et reporting</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "317+", label: "Outils intégrés", color: "text-blue-400" },
              { value: "95%", label: "Taux de détection", color: "text-green-400" },
              { value: "<5%", label: "Faux positifs", color: "text-yellow-400" },
              { value: "24/7", label: "Disponibilité", color: "text-violet-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Python", "Docker", "LLM", "React", "Node.js", "PostgreSQL", "Redis", "Kubernetes"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Prêt à automatiser vos audits ?</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Décrivez votre mission, BJHUNT fait le reste.</p>
            <div className="flex justify-center gap-3">
              <a href="https://www.bjhunt.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer BJHUNT</a>
              <Link href="/contact" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
