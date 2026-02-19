'use client';

import Link from "next/link";

export default function DriftCTLPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-orange-600/5" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">DevOps</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Drift<span className="text-yellow-400">CTL</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Détecte les drifts entre ton Terraform et l{"'"}état réel AWS. Rapport diff en JSON ou HTML, intégrable dans ton pipeline CI.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Terminal Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-yellow-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">terminal — driftctl scan</span>
          </div>
          <div className="p-5 font-mono text-[12px] leading-relaxed space-y-1">
            <div className="text-[#888]">$ <span className="text-yellow-400">driftctl scan</span> --state terraform.tfstate --region eu-west-1</div>
            <div className="text-[#555] mt-2">Scanning 6 providers...</div>
            <div className="text-[#555]">  EC2 ............ <span className="text-green-400">47 resources</span></div>
            <div className="text-[#555]">  S3 ............. <span className="text-green-400">12 resources</span></div>
            <div className="text-[#555]">  RDS ............ <span className="text-green-400">8 resources</span></div>
            <div className="text-[#555]">  IAM ............ <span className="text-green-400">89 resources</span></div>
            <div className="text-[#555]">  VPC ............ <span className="text-green-400">34 resources</span></div>
            <div className="text-[#555]">  Lambda ......... <span className="text-green-400">15 resources</span></div>
            <div className="text-[#555] mt-2">Comparing with tfstate... <span className="text-yellow-400">205 resources checked</span></div>
            <div className="mt-3 text-white font-semibold">━━━ Drift Report ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
            <div className="mt-2">
              <span className="text-red-400 font-semibold">CRITICAL</span>
              <span className="text-[#888]"> aws_security_group.api_sg</span>
            </div>
            <div className="text-[#555] pl-4">- ingress.0.cidr_blocks: <span className="text-red-400">[&quot;10.0.0.0/8&quot;]</span> → <span className="text-red-400">[&quot;0.0.0.0/0&quot;]</span></div>
            <div className="text-[#555] pl-4">- ingress.0.from_port: <span className="text-[#888]">443</span> → <span className="text-red-400">22</span></div>
            <div className="mt-2">
              <span className="text-yellow-400 font-semibold">WARNING </span>
              <span className="text-[#888]"> aws_s3_bucket.logs</span>
            </div>
            <div className="text-[#555] pl-4">- versioning.enabled: <span className="text-green-400">true</span> → <span className="text-yellow-400">false</span></div>
            <div className="mt-2">
              <span className="text-blue-400 font-semibold">ADDED  </span>
              <span className="text-[#888]"> aws_iam_user.temp_admin</span>
              <span className="text-[#555]"> (not in tfstate)</span>
            </div>
            <div className="mt-3 border-t border-[#1a1a1a] pt-3">
              <span className="text-white">Summary:</span>
              <span className="text-red-400 ml-2">1 critical</span>
              <span className="text-yellow-400 ml-2">1 warning</span>
              <span className="text-blue-400 ml-2">1 unmanaged</span>
              <span className="text-green-400 ml-2">202 in sync</span>
            </div>
            <div className="text-[#555] mt-1">Scan completed in <span className="text-yellow-400">38.4s</span></div>
            <div className="text-red-400 mt-1">Exit code: 1 (critical drift detected)</div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Détection exhaustive</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", title: "Détection de drifts", desc: "Compare tfstate vs état réel AWS. Détecte ajouts manuels, suppressions non trackées, diff attribut par attribut." },
              { icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Rapports", desc: "JSON pour CI/CD, HTML avec diff visuel coloré. Filtrage par sévérité, historique des scans." },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Intégration CI", desc: "Exit code non-zero sur drift critique. GitHub Action, commentaire auto sur PR, notification Slack." },
              { icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", title: "6 Providers AWS", desc: "EC2, S3, RDS, IAM, VPC, Lambda. Scan complet de 200 ressources en moins de 45 secondes." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-yellow-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#888] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Providers ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-3 block">Couverture</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Providers AWS supportés</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "EC2", sub: "Instances, SG, AMIs", count: "47" },
              { name: "S3", sub: "Buckets, policies, lifecycle", count: "12" },
              { name: "RDS", sub: "Instances, snapshots", count: "8" },
              { name: "IAM", sub: "Users, roles, policies", count: "89" },
              { name: "VPC", sub: "Subnets, routes, NAT", count: "34" },
              { name: "Lambda", sub: "Functions, layers", count: "15" },
            ].map((p, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#1a1a1a] bg-[#0d0d0d] hover:border-yellow-500/20 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-bold text-yellow-400">{p.name}</h3>
                  <span className="text-[10px] text-[#555] font-mono">{p.count} res.</span>
                </div>
                <p className="text-[11px] text-[#888]">{p.sub}</p>
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
              { value: "<45s", label: "Scan 200 ressources", color: "text-yellow-400" },
              { value: "6", label: "Providers AWS", color: "text-green-400" },
              { value: "100%", label: "Drifts critiques", color: "text-red-400" },
              { value: "0", label: "Faux positifs IAM", color: "text-cyan-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Go", "AWS SDK", "Terraform", "GitHub Actions", "JSON"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Plus jamais de drift silencieux</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Scannez votre infra en 45 secondes. Détectez chaque changement non autorisé.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
