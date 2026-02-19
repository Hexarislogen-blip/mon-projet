'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function NextJSPerformanceMasterclassPost() {
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
            <span className="text-sm font-bold">Développement</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Next.js Performance Masterclass : De Zéro à Héro en Production
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <span>8 Février 2026</span>
            <span>•</span>
            <span>10 min de lecture</span>
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
          <div className="w-full h-full bg-gradient-to-br from-gray-900/20 to-blue-900/20 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="text-white/40 text-lg font-medium">Next.js Performance</div>
              <div className="text-white/20 text-sm mt-2">Optimisation production</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Contenu de l'article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none"
        >
          <div className="space-y-8 text-gray-300">
            <p className="text-lg leading-relaxed">
              Le déploiement d'applications Next.js ne devrait plus être un casse-tête. Découvrez les techniques avancées pour optimiser vos builds, réduire vos temps de chargement et atteindre des performances exceptionnelles. Une analyse complète des meilleures pratiques adoptées par les géants de la tech.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Les Fondamentaux de la Performance Next.js</h2>
            <p className="leading-relaxed">
              Next.js a révolutionné le développement React avec son approche hybride qui combine le meilleur du rendu serveur et client. Mais pour exploiter pleinement sa puissance, il faut maîtriser les subtilités de son écosystème de performance.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Les Piliers de la Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">⚡ Build Time</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Incremental Static Regeneration</li>
                    <li>• Parallel Routes</li>
                    <li>• Turbopack optimisation</li>
                    <li>• Bundle splitting intelligent</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">🚀 Runtime</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Edge Runtime optimisation</li>
                    <li>• Middleware performance</li>
                    <li>• Cache strategies</li>
                    <li>• Server Components</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Optimisation Build Time</h2>
            <p className="leading-relaxed">
              La phase de build est critique pour la performance globale. Les techniques modernes permettent de réduire drastiquement les temps de compilation tout en améliorant la qualité du bundle final.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8 font-mono text-sm">
              <div className="text-green-400 mb-2">// next.config.js optimisé</div>
              <div className="text-gray-300">
                <div>module.exports = {'{'}</div>
                <div>  experimental: {'{'}</div>
                <div>    turbo: {'{'}</div>
                <div>      rules: {'{'}</div>
                <div>        '*.svg': ['@svgr/webpack'],</div>
                <div>      {'}'},</div>
                <div>    {'}'},</div>
                <div>  {'}'},</div>
                <div>  swcMinify: true,</div>
                <div>  compiler: {'{'}</div>
                <div>    removeConsole: process.env.NODE_ENV === 'production',</div>
                <div>  {'}'},</div>
                <div>  images: {'{'}</div>
                <div>    domains: ['example.com'],</div>
                <div>    formats: ['image/webp', 'image/avif'],</div>
                <div>  {'}'},</div>
                <div>{'}'}</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Stratégies de Cache Avancées</h2>
            <p className="leading-relaxed">
              Le cache est l'arme secrète des applications Next.js performantes. Comprendre et maîtriser les différentes couches de cache peut multiplier par 10 les performances de votre application.
            </p>

            <div className="space-y-6 my-8">
              <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">📦 Browser Cache</h3>
                <p className="text-sm">Headers Cache-Control optimisés pour chaque type de ressource</p>
              </div>
              <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">🌐 CDN Cache</h3>
                <p className="text-sm">Distribution intelligente au edge avec invalidation granulaire</p>
              </div>
              <div className="bg-black/50 border border-white/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">⚡ ISR Cache</h3>
                <p className="text-sm">Revalidation automatique avec stale-while-revalidate</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Core Web Vitals Optimisation</h2>
            <p className="leading-relaxed">
              Les Core Web Vitals sont devenus un facteur de ranking crucial. Next.js fournit des outils intégrés pour optimiser LCP, FID et CLS de manière proactive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-black/50 border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">LCP</div>
                <div className="text-sm text-gray-300">Largest Contentful Paint</div>
                <div className="text-xs text-gray-400 mt-2">&lt; 2.5s optimal</div>
              </div>
              <div className="bg-black/50 border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-white mb-2">FID</div>
                <div className="text-sm text-gray-300">First Input Delay</div>
                <div className="text-xs text-gray-400 mt-2">&lt; 100ms optimal</div>
              </div>
              <div className="bg-black/50 border border-white/20 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-2">CLS</div>
                <div className="text-sm text-gray-300">Cumulative Layout Shift</div>
                <div className="text-xs text-gray-400 mt-2">&lt; 0.1 optimal</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Monitoring et Debugging</h2>
            <p className="leading-relaxed">
              La performance n'est pas un one-shot. Il faut mettre en place une surveillance continue pour détecter les régressions et optimiser proactivement.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Stack de Monitoring Recommandé</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Real User Monitoring:</span>
                  <span className="text-green-400">Vercel Analytics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Performance Budget:</span>
                  <span className="text-white">Lighthouse CI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Error Tracking:</span>
                  <span className="text-purple-400">Sentry</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bundle Analysis:</span>
                  <span className="text-yellow-400">Webpack Bundle Analyzer</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p className="leading-relaxed">
              Maîtriser la performance Next.js est un voyage continu. Les techniques présentées ici constituent une base solide pour construire des applications web ultra-performantes qui offriront une expérience utilisateur exceptionnelle tout en bénéficiant d'un meilleur référencement.
            </p>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/20 rounded-xl p-8 my-8">
              <p className="leading-relaxed">
                La performance n'est pas une option, c'est une nécessité. Les applications qui chargent rapidement et répondent instantanément convertissent mieux, retiennent leurs utilisateurs plus longtemps, et dominent leur marché.
              </p>
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
            <Link href="/blog/ia-automation-revolution" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Article précédent
            </Link>
            <Link href="/blog/cybersecurity-audit-evolution" className="flex items-center text-gray-300 hover:text-white transition-colors">
              Article suivant
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
