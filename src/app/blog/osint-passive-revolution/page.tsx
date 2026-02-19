'use client';

import { motion } from "framer-motion";
import Link from "next/link";

export default function OSINTPlatformTechnicalArticle() {
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
            <span className="text-sm font-bold">Intelligence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            OSINT Platform : Architecture Zero-Backend pour Intelligence Discrète
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <span>12 Février 2026</span>
            <span>•</span>
            <span>20 min de lecture</span>
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
          <div className="w-full h-full bg-gradient-to-br from-green-900/20 to-blue-900/20 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-24 h-24 text-white/60 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div className="text-white/40 text-lg font-medium">OSINT Platform</div>
              <div className="text-white/20 text-sm mt-2">Zero-Backend Intelligence</div>
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
              L'intelligence économique moderne exige discrétion absolue et conformité légale parfaite. L'OSINT Platform révolutionne la collecte d'informations avec une architecture zero-backend qui garantit zero interaction avec les cibles et zero trace laissée. Découvrez l'architecture d'une plateforme qui traite 10M+ de points de données quotidiennement avec une latence inférieure à 200ms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contexte et Problématique</h2>
            <p className="leading-relaxed">
              L'OSINT traditionnel souffre de trois limitations critiques : traces numériques laissées sur les cibles, questions légales complexes, et dépendance infrastructurelle. L'approche zero-backend élimine ces contraintes en traitant exclusivement les données publiques sans jamais interagir directement avec les systèmes cibles.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Principes Fondamentaux Zero-Backend</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">✅ Avantages Clés</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Zero interaction avec cibles</li>
                    <li>• Conformité légale 100%</li>
                    <li>• Discrétion absolue</li>
                    <li>• Scalabilité infinie</li>
                    <li>• Résilience infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">🎯 Cas d'Usage</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Due diligence entreprise</li>
                    <li>• Veille concurrentielle</li>
                    <li>• Analyse de marché</li>
                    <li>• Risk assessment</li>
                    <li>• Compliance monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Architecture Technique Innovante</h2>
            <p className="leading-relaxed">
              L'architecture adopte une approche client-side pure avec traitement distribué dans le navigateur, éliminant complètement le besoin d'infrastructure backend pour les opérations sensibles.
            </p>

            <div className="bg-black/50 border border-white/20 rounded-xl p-6 my-8">
              <h3 className="text-xl font-semibold text-white mb-4">Stack Technologique</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Frontend Core:</span>
                  <span className="text-green-400">React + TypeScript + Web Workers</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Processing:</span>
                  <span className="text-white">WebAssembly + IndexedDB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Networking:</span>
                  <span className="text-purple-400">Service Workers + Cache API</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage:</span>
                  <span className="text-yellow-400">Local Storage + Crypto Keys</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security:</span>
                  <span className="text-red-400">Content Security Policy + SRI</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>
            <p className="leading-relaxed">
              L'OSINT Platform représente une rupture paradigmatique dans l'intelligence économique. En éliminant complètement l'infrastructure backend pour les opérations sensibles, elle garantit discrétion absolue et conformité parfaite tout en offrant des performances exceptionnelles.
            </p>
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
            <Link href="/projets/osint-platform" className="flex items-center text-gray-300 hover:text-white transition-colors">
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
