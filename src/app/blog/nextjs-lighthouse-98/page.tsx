import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Passer de 62 à 98 sur Lighthouse avec Next.js App Router"
      date="3 Décembre 2025"
      readTime="10 min"
      category="Frontend"
      content={[
        "Mon portfolio affichait un score Lighthouse de 62. Pas catastrophique, mais pas acceptable non plus pour un dev qui prétend savoir ce qu'il fait. En un week-end, je l'ai monté à 98. Voici les optimisations concrètes qui ont fait la différence, dans l'ordre d'impact.",

        "## Le diagnostic initial",

        "Lighthouse pointait trois problèmes majeurs : un LCP (Largest Contentful Paint) à 4.2 secondes, un TBT (Total Blocking Time) de 890ms, et un CLS (Cumulative Layout Shift) de 0.18. En clair : la page mettait trop longtemps à afficher le contenu principal, le JavaScript bloquait le thread principal, et des éléments bougeaient après le chargement.",

        "## Optimisation 1 : Images (LCP -2.1s)",

        "Le plus gros gain. Ma photo de profil était un PNG de 2.4MB chargé sans lazy loading. Le composant next/image avec le format WebP automatique et les attributs priority sur l'image above-the-fold ont réduit le LCP de 2.1 secondes d'un coup.",

        "J'ai aussi ajouté des placeholders blur pour toutes les images. Next.js génère un placeholder de 10x10 pixels en base64 au build time, ce qui élimine le CLS causé par les images qui se chargent en retard.",

        "## Optimisation 2 : Bundle JS (-40KB)",

        "J'utilisais framer-motion pour des animations simples (fade-in, slide-up). La librairie pèse 35KB gzippée. Je l'ai remplacée par des animations CSS natives avec @keyframes et transition. Résultat : -35KB de JavaScript et des animations plus fluides parce qu'elles tournent sur le GPU via transform et opacity.",

        "J'ai aussi supprimé un import de date-fns qui tirait 5KB pour formater une seule date. Un Intl.DateTimeFormat natif fait le même job en 0 bytes.",

        "## Optimisation 3 : Streaming SSR",

        "Next.js App Router supporte le streaming SSR nativement. Au lieu d'attendre que toute la page soit rendue côté serveur avant de l'envoyer, le HTML est envoyé par chunks. Le header et le hero arrivent en premier, puis les sections suivantes se chargent progressivement.",

        "J'ai ajouté des composants Suspense autour des sections non critiques (projets, blog, footer) avec des fallbacks légers. Le FCP (First Contentful Paint) est passé de 1.8s à 0.6s.",

        "## Optimisation 4 : Cache headers",

        "Les assets statiques (images, fonts, CSS, JS) n'avaient pas de cache headers. J'ai ajouté dans next.config.ts des headers Cache-Control avec max-age=31536000 et immutable pour les assets hashés, et stale-while-revalidate pour les pages HTML.",

        "```\nasync headers() {\n  return [{\n    source: '/_next/static/:path*',\n    headers: [{\n      key: 'Cache-Control',\n      value: 'public, max-age=31536000, immutable'\n    }]\n  }]\n}",

        "## Optimisation 5 : Fonts",

        "J'utilisais Google Fonts avec un lien externe. Chaque visite déclenchait une requête DNS + connexion TLS vers fonts.googleapis.com. J'ai migré vers next/font/google qui télécharge les fonts au build time et les sert depuis le même domaine. Gain : -200ms sur le LCP.",

        "## Optimisation 6 : Preconnect et prefetch",

        "Pour les liens externes (GitHub, LinkedIn), j'ai ajouté des balises link rel=preconnect dans le head. Pour la navigation interne, Next.js prefetch automatiquement les pages visibles dans le viewport. J'ai vérifié que le prefetch fonctionnait correctement en inspectant le network tab — les pages /projets et /blog sont pré-chargées dès que leurs liens sont visibles.",

        "## Le résultat final",

        "- Performance : 98 (était 62)\n- Accessibility : 100 (était 95)\n- Best Practices : 100 (était 83)\n- SEO : 100 (était 90)",

        "Le LCP est passé de 4.2s à 1.1s. Le TBT de 890ms à 50ms. Le CLS de 0.18 à 0.01. Le bundle JS total est passé de 187KB à 142KB gzippé.",

        "## Ce que j'ai appris",

        "La majorité des gains viennent de choses simples : optimiser les images, supprimer le JavaScript inutile, et activer le cache. Pas besoin de techniques exotiques. Les outils natifs de Next.js (next/image, next/font, Suspense, streaming SSR) font 80% du travail si tu les utilises correctement.",

        "> Un score Lighthouse de 98, c'est pas de la magie. C'est juste ne pas charger 2.4MB de PNG et 35KB d'animations JavaScript."
      ]}
    />
  );
}
