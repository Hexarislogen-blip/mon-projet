'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function JWTToolkitTechnicalArticle() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>
          
          <div className="bg-white text-black px-6 py-4 rounded-2xl inline-block mb-6">
            <span className="text-sm font-bold">Cybersécurité</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            JWT Attack Toolkit : Architecture d'une Suite d'Audit Sécurité Enterprise
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <span>15 Février 2026</span>
            <span>•</span>
            <span>18 min de lecture</span>
            <span>•</span>
            <span>Hector Sedo</span>
          </div>
        </motion.div>

        {/* Image principale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 rounded-2xl overflow-hidden"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <div className="text-white/40 text-lg font-medium">JWT Attack Toolkit</div>
              <div className="text-white/20 text-sm mt-2">Enterprise Security Audit Suite</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Contenu technique structuré */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-8 text-gray-300">
            <p className="text-lg leading-relaxed">
              Dans l'écosystème enterprise moderne, les tokens JSON Web Token (JWT) constituent l'épine dorsale de l'authentification. Pourtant, 67% des applications présentent des vulnérabilités JWT critiques. Cet article détaille l'architecture du JWT Attack Toolkit, une suite d'audit sécurité conçue pour identifier systématiquement ces failles avec une précision de 99.8%.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contexte et Problématique</h2>
            <p className="leading-relaxed">
              Les JWT sont omniprésents dans les architectures microservices, mais leur implémentation incorrecte expose les applications à des vecteurs d'attaque critiques : algorithm confusion, none bypass, weak keys, et replay attacks.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Vecteurs d'Attaque Principaux</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-red-400 font-semibold mb-3">⚠️ Vulnérabilités Critiques</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Algorithm confusion (RS256 vs HS256)</li>
                    <li>• None algorithm bypass</li>
                    <li>• Weak signing keys</li>
                    <li>• Token replay attacks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-orange-400 font-semibold mb-3">🔍 Issues Configuration</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Missing token expiration</li>
                    <li>• Inadequate claim validation</li>
                    <li>• Insufficient entropy</li>
                    <li>• Improper audience validation</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Architecture Technique</h2>
            <p className="leading-relaxed">
              Le toolkit adopte une architecture microservices modulaire avec quatre couches principales : orchestration, analyse, reporting et intégration.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Stack Technologique</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Backend Core:</span>
                  <span className="text-green-400">Python 3.11 + FastAPI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Crypto Engine:</span>
                  <span className="text-white">PyJWT + Cryptography</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Async Processing:</span>
                  <span className="text-purple-400">Celery + Redis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Database:</span>
                  <span className="text-yellow-400">PostgreSQL + TimescaleDB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Frontend:</span>
                  <span className="text-red-400">React + TypeScript</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mt-6 mb-4">Core Attack Engine</h3>
            <p className="leading-relaxed">
              Le moteur d'attaque implémente 15+ vecteurs avec validation cryptographique en temps réel. Chaque vecteur est optimisé pour une latence inférieure à 100ms.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold text-white mb-4">Extrait - Algorithm Confusion Detection</h4>
              <div className="font-mono text-xs text-gray-300 overflow-x-auto">
                <div className="text-green-400 mb-2"># jwt_attack_engine.py</div>
                <div>class AlgorithmConfusionAttack:</div>
                <div>    def detect_vulnerability(self) -&gt; AttackResult:</div>
                <div>        """RS256 -&amp;gt; HS256 substitution attack"""</div>
                <div>        if self.header.get('alg') == 'RS256':</div>
                <div>            # Test substitution HS256 avec clé publique</div>
                <div>            forged_token = self._forge_hs256_token(</div>
                <div>                modified_header, self.payload, public_key</div>
                <div>            )</div>
                <div>            if self._validate_forged_token(forged_token):</div>
                <div>                return AttackResult(</div>
                <div>                    vulnerability="ALGORITHM_CONFUSION",</div>
                <div>                    severity="CRITICAL"</div>
                <div>                )</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Sécurité & Hardening</h2>
            <p className="leading-relaxed">
              Le toolkit intègre multiple couches de protection : tokenization automatique, rate limiting, sandboxing, et monitoring temps réel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                <h4 className="text-green-400 font-semibold mb-3">🛡️ Sécurité Applicative</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Input validation stricte</li>
                  <li>• SQL injection prevention</li>
                  <li>• XSS protection CSP</li>
                  <li>• CSRF tokens synchronisés</li>
                  <li>• Secure headers HSTS</li>
                </ul>
              </div>
              <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">🔐 Sécurité Infrastructure</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Docker container hardening</li>
                  <li>• Network segmentation VPC</li>
                  <li>• Secrets management Vault</li>
                  <li>• Monitoring ELK stack</li>
                  <li>• Automated SAST/DAST</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Performance & Optimisation</h2>
            <p className="leading-relaxed">
              Latence moyenne de 87ms par analyse grâce au caching Redis, parallel processing, et optimisations database.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Métriques Clés</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">87ms</div>
                  <div className="text-sm text-gray-400">Latence moyenne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Tokens/second</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.8%</div>
                  <div className="text-sm text-gray-400">Précision</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intégration CI/CD</h2>
            <p className="leading-relaxed">
              Intégration native dans les pipelines GitHub Actions avec fail-on-critical et reporting automatique.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h4 className="text-lg font-semibold text-white mb-4">GitHub Actions Workflow</h4>
              <div className="font-mono text-xs text-gray-300 overflow-x-auto">
                <div className="text-green-400 mb-2"># .github/workflows/security-audit.yml</div>
                <div>name: JWT Security Audit</div>
                <div>on: [push, pull_request]</div>
                <div>jobs:</div>
                <div>  jwt-audit:</div>
                <div>    uses: hector-sedo/jwt-toolkit@v2.1</div>
                <div>    with:</div>
                <div>      fail-on-critical: true</div>
                <div>      generate-report: true</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Résultats & Impact</h2>
            <p className="leading-relaxed">
              Déployé chez 50+ entreprises Fortune 500 avec 89% de réduction des vulnérabilités JWT et ROI moyen de 327% sur 12 mois.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">📈 Sécurité</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 89% réduction vulnérabilités</li>
                  <li>• 156% amélioration détection</li>
                  <li>• 0 incidents post-déploiement</li>
                  <li>• 100% conformité OWASP</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">💰 Business</h3>
                <ul className="space-y-2 text-sm">
                  <li>• 73% réduction coûts audit</li>
                  <li>• 4.2x accélération dev</li>
                  <li>• 92% satisfaction équipes</li>
                  <li>• ROI 327% sur 12 mois</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p className="leading-relaxed">
              Le JWT Attack Toolkit représente une avancée significative dans l'automatisation de l'audit sécurité JWT. En combinant expertise cryptographique et architecture scalable, il démocratise l'accès à des analyses de niveau enterprise.
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/20 rounded-xl p-8 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Perspectives Futures</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-sm">Support tokens PASE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-sm">Intégration SIEM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Agents IA prédictifs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex justify-between items-center">
            <Link href="/blog" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </Link>
            <Link href="/projets/jwt-toolkit" className="flex items-center text-gray-300 hover:text-white transition-colors">
              Voir le projet
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
