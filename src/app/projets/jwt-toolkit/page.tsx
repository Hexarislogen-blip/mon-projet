'use client';

import Link from "next/link";

export default function JWTToolkitPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/15 via-transparent to-amber-600/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[100px]" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <Link href="/projets" className="inline-flex items-center gap-1.5 text-sm text-[#888] hover:text-white transition-colors mb-12">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Projets
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1">Cybersécurité</span>
            <span className="text-[10px] font-mono text-[#666]">2025</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">JWT Attack<br /><span className="text-rose-500">Toolkit</span></h1>
          <p className="text-lg md:text-xl text-[#999] max-w-2xl leading-relaxed mb-10">
            Colle un token JWT, indique l{"'"}endpoint. 12 vecteurs d{"'"}attaque testés en parallèle, rapport en 30 secondes.
          </p>
          <div className="flex gap-3">
            <a href="https://jwt-attack-toolkit.netlify.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer le scan</a>
          </div>
        </div>
      </section>

      {/* ── Scanner Mockup ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-[#1a1a1a] bg-[#111] overflow-hidden shadow-2xl shadow-rose-500/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a] bg-[#0d0d0d]">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-[11px] text-[#555] font-mono">jwt-attack-toolkit — scan results</span>
          </div>
          <div className="p-6 space-y-5">
            {/* Token input area */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] p-4">
              <div className="text-[10px] text-[#555] uppercase tracking-wider font-semibold mb-2">Token JWT</div>
              <div className="font-mono text-[11px] leading-relaxed break-all">
                <span className="text-rose-400">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                <span className="text-[#555]">.</span>
                <span className="text-amber-400">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>
                <span className="text-[#555]">.</span>
                <span className="text-cyan-400">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
              </div>
            </div>

            {/* Decoded sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#0a0a0a] rounded-lg border border-rose-500/20 p-4">
                <div className="text-[9px] text-rose-400 uppercase tracking-wider font-bold mb-2">Header</div>
                <pre className="text-[11px] font-mono text-[#888]">{`{\n  "alg": "HS256",\n  "typ": "JWT"\n}`}</pre>
              </div>
              <div className="bg-[#0a0a0a] rounded-lg border border-amber-500/20 p-4">
                <div className="text-[9px] text-amber-400 uppercase tracking-wider font-bold mb-2">Payload</div>
                <pre className="text-[11px] font-mono text-[#888]">{`{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}`}</pre>
              </div>
              <div className="bg-[#0a0a0a] rounded-lg border border-cyan-500/20 p-4">
                <div className="text-[9px] text-cyan-400 uppercase tracking-wider font-bold mb-2">Signature</div>
                <div className="text-[11px] font-mono text-[#888]">HMACSHA256(base64UrlEncode(header) + &quot;.&quot; + base64UrlEncode(payload), secret)</div>
              </div>
            </div>

            {/* Scan results */}
            <div className="bg-[#0a0a0a] rounded-lg border border-[#1a1a1a] overflow-hidden">
              <div className="px-4 py-3 border-b border-[#1a1a1a] flex justify-between items-center">
                <span className="text-xs text-[#666] font-semibold uppercase tracking-wider">Résultats du scan — 12 tests</span>
                <span className="text-[10px] font-semibold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-full">3 vulnérabilités</span>
              </div>
              {[
                { test: "None Algorithm", status: "vuln", severity: "CRITICAL", detail: "Le serveur accepte alg: none" },
                { test: "Key Confusion RS256→HS256", status: "safe", severity: "", detail: "Algorithme vérifié côté serveur" },
                { test: "Brute Force Secret", status: "vuln", severity: "HIGH", detail: "Secret trouvé: 'secret123'" },
                { test: "Expiration Check", status: "vuln", severity: "MEDIUM", detail: "Token expiré accepté" },
                { test: "Claims Tampering (sub)", status: "safe", severity: "", detail: "Ownership vérifié" },
                { test: "Claims Tampering (role)", status: "safe", severity: "", detail: "Rôle vérifié côté serveur" },
                { test: "JWK Injection", status: "safe", severity: "", detail: "Header JWK ignoré" },
                { test: "JKU Injection", status: "safe", severity: "", detail: "Header JKU ignoré" },
                { test: "Kid Injection", status: "safe", severity: "", detail: "Pas de paramètre kid" },
                { test: "Token Replay", status: "info", severity: "INFO", detail: "Pas de blacklist détectée" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-4 px-4 py-2.5 border-b border-[#1a1a1a] last:border-0 text-[11px]">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${t.status === 'vuln' ? 'bg-rose-500' : t.status === 'info' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                  <span className="text-[#ccc] w-48 font-medium">{t.test}</span>
                  <span className="text-[#555] flex-1 truncate">{t.detail}</span>
                  {t.severity && (
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                      t.severity === 'CRITICAL' ? 'bg-rose-500/20 text-rose-400' :
                      t.severity === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                      t.severity === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>{t.severity}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Attack Vectors ── */}
      <section className="border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-3 block">Vecteurs</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">12 attaques testées automatiquement</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "None Algorithm", desc: "Change l'algorithme en 'none' et supprime la signature. Si le serveur accepte, c'est game over." },
              { title: "Key Confusion", desc: "Force HS256 sur un endpoint RS256 et signe avec la clé publique du serveur." },
              { title: "Brute Force Secret", desc: "Teste 50k secrets courants. 40% des apps ont un secret qui tombe en moins de 5 minutes." },
              { title: "Claims Tampering", desc: "Modifie sub, role, admin pour tester l'escalade de privilèges via JWT." },
              { title: "JWK/JKU Injection", desc: "Injecte une clé publique custom dans le header pour forger des signatures valides." },
              { title: "Token Replay", desc: "Vérifie si un token révoqué après logout est toujours accepté par le serveur." },
            ].map((v, i) => (
              <div key={i} className="p-5 rounded-xl border border-[#1a1a1a] bg-[#111] hover:border-rose-500/20 transition-colors">
                <h3 className="text-sm font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-[12px] text-[#888] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-t border-[#1a1a1a] bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "12", label: "Vecteurs d'attaque", color: "text-rose-400" },
              { value: "30s", label: "Temps de scan", color: "text-green-400" },
              { value: "9/15", label: "Audits avec faille JWT", color: "text-amber-400" },
              { value: "0", label: "Données envoyées serveur", color: "text-cyan-400" },
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 mb-3 block">Stack</span>
              <h2 className="text-2xl font-bold tracking-tight">100% côté client</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Web Workers", "Web Crypto API", "JWT"].map(t => (
                <span key={t} className="px-4 py-2 text-xs font-semibold text-[#ccc] bg-[#111] border border-[#222] rounded-lg">{t}</span>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Testez vos JWT maintenant</h2>
            <p className="text-sm text-[#888] mb-8 max-w-md mx-auto">Aucun token n{"'"}est envoyé à un serveur. Tout tourne dans votre navigateur.</p>
            <div className="flex justify-center gap-3">
              <a href="https://jwt-attack-toolkit.netlify.app" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg transition-colors">Lancer le scan</a>
              <Link href="/contact" className="px-6 py-3 border border-[#333] hover:border-[#555] text-sm font-semibold rounded-lg transition-colors">Me contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
