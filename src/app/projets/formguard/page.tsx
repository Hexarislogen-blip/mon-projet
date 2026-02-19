'use client';

import Link from "next/link";

export default function FormGuardPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-purple-600/5" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 rounded-full px-3 py-1">Frontend</span>
            <span className="text-[10px] font-mono text-[#666]">2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Form<span className="text-violet-400">Guard</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Validation Zod + sanitization XSS + accessibilité ARIA dans un hook React de 4KB. Zéro dépendance runtime.
          </p>
          <div className="flex gap-3">
            <Link href="/contact" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
          </div>
        </div>
      </section>

      {/* ── Code Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-violet-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">ContactForm.tsx</span>
          </div>
          <div className="p-5 font-mono text-[12px] leading-relaxed">
            <div><span className="text-violet-400">const</span> schema = <span className="text-cyan-400">z</span>.<span className="text-yellow-400">object</span>({`{`}</div>
            <div className="pl-4"><span className="text-[#888]">name:</span> <span className="text-cyan-400">z</span>.<span className="text-yellow-400">string</span>().<span className="text-yellow-400">min</span>(<span className="text-amber-400">2</span>),</div>
            <div className="pl-4"><span className="text-[#888]">email:</span> <span className="text-cyan-400">z</span>.<span className="text-yellow-400">string</span>().<span className="text-yellow-400">email</span>(),</div>
            <div className="pl-4"><span className="text-[#888]">message:</span> <span className="text-cyan-400">z</span>.<span className="text-yellow-400">string</span>().<span className="text-yellow-400">min</span>(<span className="text-amber-400">10</span>).<span className="text-yellow-400">max</span>(<span className="text-amber-400">500</span>),</div>
            <div>{`}`});</div>
            <div className="mt-3"><span className="text-violet-400">const</span> {`{`} fields, errors, handleSubmit {`}`} = <span className="text-cyan-400">useFormGuard</span>(schema);</div>
            <div className="mt-3 text-[#555]">{"// ✓ Validation Zod au blur + submit"}</div>
            <div className="text-[#555]">{"// ✓ Sanitization XSS automatique"}</div>
            <div className="text-[#555]">{"// ✓ Attributs ARIA générés"}</div>
          </div>
        </div>

        {/* Form preview */}
        <div className="mt-6 rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#1a1a1a]">
            <span className="text-[10px] text-[#666] font-semibold uppercase tracking-wider">Rendu du formulaire</span>
          </div>
          <div className="p-6 space-y-4 max-w-md">
            <div>
              <label className="text-[11px] text-[#888] block mb-1.5">Nom</label>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-3 py-2.5 text-sm text-white">Jean Dupont</div>
            </div>
            <div>
              <label className="text-[11px] text-[#888] block mb-1.5">Email</label>
              <div className="bg-[#0a0a0a] border border-red-500/40 rounded-lg px-3 py-2.5 text-sm text-white">jean@</div>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="text-[10px] text-red-400">Email invalide</span>
                <span className="text-[9px] text-[#555] font-mono">aria-invalid=&quot;true&quot;</span>
              </div>
            </div>
            <div>
              <label className="text-[11px] text-[#888] block mb-1.5">Message</label>
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-3 py-2.5 text-sm text-[#555]">
                Votre message...
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="px-4 py-2 bg-violet-600 rounded-lg text-xs font-semibold">Envoyer</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-[10px] text-green-400">XSS sanitized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-[10px] text-violet-400">ARIA ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3 block">Fonctionnalités</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Validation + Sécurité + A11y</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Validation Zod", desc: "Schémas Zod comme source de vérité. Validation au blur, change et submit. Debounce configurable. Schémas conditionnels." },
              { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", title: "Sanitization XSS", desc: "Pipeline maison de 2KB. Neutralise les vecteurs XSS avant le state React. Zéro dépendance externe." },
              { icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", title: "Accessibilité ARIA", desc: "aria-invalid, aria-describedby, aria-live automatiques. Support complet lecteurs d'écran. WCAG 2.1." },
              { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "4KB gzippé", desc: "Tree-shakeable. Hook useFormGuard simple. Formulaires multi-étapes. React 18+ et Next.js App Router." },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-violet-500/20 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} /></svg>
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
              { value: "4KB", label: "Gzippé", color: "text-violet-400" },
              { value: "100%", label: "Coverage tests", color: "text-green-400" },
              { value: "0", label: "Dépendances", color: "text-amber-400" },
              { value: "WCAG", label: "2.1 conforme", color: "text-cyan-400" },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-xl border border-[#1a1a1a]">
                <div className={`text-3xl font-bold font-mono ${s.color}`}>{s.value}</div>
                <div className="text-[11px] text-[#666] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Zod", "ARIA", "Vite", "Vitest"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Formulaires sûrs et accessibles</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Un hook, un schéma Zod, et vos formulaires sont validés, sanitizés et accessibles.</p>
            <div className="flex justify-center gap-3">
              <Link href="/contact" className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
