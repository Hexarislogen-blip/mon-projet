import Link from "next/link";

const blogPosts = [
  {
    id: "jwt-12-failles-automatisees",
    title: "Comment j'ai automatisé la détection de 12 failles JWT courantes",
    excerpt: "J'ai codé un outil qui teste none algorithm, key confusion et brute force sur n'importe quel endpoint JWT. Retour sur l'architecture et les choix techniques.",
    date: "15 Fév 2026",
    readTime: "18 min",
    category: "Cybersécurité",
    featured: true,
  },
  {
    id: "hashbj-rust-simd",
    title: "Identifier un hash en moins de 100ms avec Rust et SIMD",
    excerpt: "HashBJ reconnaît 30+ algorithmes de hachage instantanément. Voici comment j'ai utilisé les instructions SIMD pour battre les outils existants en vitesse.",
    date: "28 Jan 2026",
    readTime: "16 min",
    category: "Performance",
    featured: true,
  },
  {
    id: "osint-zero-trace",
    title: "Collecter du renseignement OSINT sans toucher au serveur cible",
    excerpt: "WHOIS, DNS, headers HTTP : tout est récupéré côté client via des APIs publiques. Zéro requête directe vers la cible. Voici le fonctionnement.",
    date: "12 Jan 2026",
    readTime: "20 min",
    category: "Intelligence",
    featured: true,
  },
  {
    id: "ia-scan-pre-deploy",
    title: "J'utilise l'IA pour scanner mon code avant chaque deploy",
    excerpt: "Mon pipeline CI/CD intègre un scan automatique des dépendances, des secrets exposés et des patterns vulnérables. Setup concret avec GitHub Actions.",
    date: "18 Déc 2025",
    readTime: "15 min",
    category: "DevSecOps",
  },
  {
    id: "nextjs-lighthouse-98",
    title: "Passer de 62 à 98 sur Lighthouse avec Next.js App Router",
    excerpt: "Lazy loading des images, streaming SSR, cache headers agressifs et suppression de 40kb de JS inutile. Les optimisations concrètes qui ont fait la différence.",
    date: "3 Déc 2025",
    readTime: "10 min",
    category: "Frontend",
  },
  {
    id: "waf-bypass-cloudflare",
    title: "Contourner un WAF Cloudflare avec des payloads Unicode",
    excerpt: "Lors d'un pentest, j'ai trouvé que Cloudflare ne normalisait pas certains caractères Unicode avant le filtrage. 3 techniques de bypass documentées ici.",
    date: "14 Nov 2025",
    readTime: "14 min",
    category: "Cybersécurité",
  },
  {
    id: "docker-multi-stage-node",
    title: "Réduire une image Docker Node.js de 1.2GB à 89MB",
    excerpt: "Multi-stage build, distroless base, .dockerignore strict et suppression des devDependencies. Mon process pour des images de prod légères.",
    date: "28 Oct 2025",
    readTime: "8 min",
    category: "DevOps",
  },
  {
    id: "prisma-postgresql-perf",
    title: "Prisma en prod : les pièges de performance que personne ne mentionne",
    excerpt: "N+1 queries cachées, connection pooling mal configuré, et des raw queries nécessaires. Ce que j'ai appris après 6 mois de Prisma sur un projet à 50k users.",
    date: "9 Oct 2025",
    readTime: "12 min",
    category: "Backend",
  },
  {
    id: "idor-api-rest",
    title: "J'ai trouvé 7 IDOR sur une API REST en 2 heures de test",
    excerpt: "Endpoints avec des IDs séquentiels, pas de vérification d'ownership, et des réponses trop verbeuses. Méthodologie complète pour tester les IDOR.",
    date: "21 Sep 2025",
    readTime: "16 min",
    category: "Cybersécurité",
    featured: true,
  },
  {
    id: "tailwind-design-system",
    title: "Construire un design system complet avec Tailwind et CSS variables",
    excerpt: "Comment j'ai structuré les tokens de couleur, typographie et spacing pour un portfolio qui reste cohérent sur 6 pages sans écrire une seule classe custom.",
    date: "5 Sep 2025",
    readTime: "9 min",
    category: "Frontend",
  },
  {
    id: "github-actions-ci-rapide",
    title: "Mon pipeline CI passe en 2 min 30 au lieu de 11 minutes",
    excerpt: "Cache des node_modules, jobs parallèles, skip conditionnel des tests et matrix strategy. Les optimisations GitHub Actions qui ont divisé le temps par 4.",
    date: "18 Août 2025",
    readTime: "7 min",
    category: "DevOps",
  },
  {
    id: "ssrf-nextjs-api-routes",
    title: "SSRF dans les API routes Next.js : un vecteur sous-estimé",
    excerpt: "Si ton API route fetch une URL fournie par l'utilisateur sans validation, c'est open bar sur ton réseau interne. Démo et fix.",
    date: "2 Août 2025",
    readTime: "11 min",
    category: "Cybersécurité",
  },
  {
    id: "redis-cache-strategie",
    title: "Ma stratégie de cache Redis pour une API à 10k req/min",
    excerpt: "Cache-aside pattern, TTL adaptatif selon le type de donnée, invalidation par tags. Comment j'ai réduit la charge DB de 80% sur un projet client.",
    date: "15 Juil 2025",
    readTime: "13 min",
    category: "Backend",
  },
  {
    id: "pentest-methodologie-web",
    title: "Ma checklist de pentest web en 47 points",
    excerpt: "De la reconnaissance passive jusqu'au rapport final. La méthodologie que j'applique systématiquement sur chaque audit, basée sur OWASP WSTG.",
    date: "28 Juin 2025",
    readTime: "22 min",
    category: "Cybersécurité",
    featured: true,
  },
  {
    id: "typescript-strict-mode",
    title: "Activer le mode strict TypeScript sur un projet existant sans tout casser",
    excerpt: "J'ai migré 14 000 lignes de TS lax vers strict en 3 jours. Voici l'ordre dans lequel activer les flags et les patterns pour corriger les erreurs les plus courantes.",
    date: "10 Juin 2025",
    readTime: "10 min",
    category: "Frontend",
  },
  {
    id: "nosql-injection-mongodb",
    title: "Injection NoSQL sur MongoDB : pourquoi $gt et $ne passent encore en 2025",
    excerpt: "Beaucoup de devs pensent que MongoDB est safe par défaut. J'ai testé 15 apps Node.js/Express et 9 étaient vulnérables. Exemples et corrections.",
    date: "22 Mai 2025",
    readTime: "15 min",
    category: "Cybersécurité",
  },
  {
    id: "premier-outil-securite",
    title: "Mon premier outil de sécurité : un scanner de headers HTTP en 200 lignes",
    excerpt: "Avant JWT Attack Toolkit, j'ai commencé par un script Python qui vérifie les headers de sécurité d'un site. Simple mais formateur. Voici le code commenté.",
    date: "8 Mars 2024",
    readTime: "6 min",
    category: "Cybersécurité",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="section-label">Blog</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Notes techniques<span className="text-[var(--fg-muted)]">.</span>
          </h1>
          <p className="text-[var(--fg-muted)] text-lg leading-relaxed max-w-lg">
            Ce que j&apos;apprends en buildant des apps et en cassant celles des autres. Retours d&apos;expérience concrets, pas de théorie creuse.
          </p>
        </div>

        {/* Single unified grid */}
        <div className="border border-[rgba(255,255,255,0.12)] rounded-xl overflow-hidden">
          {/* Grid header */}
          <div className="grid grid-cols-[1fr_100px_80px] md:grid-cols-[1fr_140px_100px_80px] bg-[rgba(255,255,255,0.04)] border-b border-[rgba(255,255,255,0.12)] px-5 py-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--fg-dim)]">Article</span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--fg-dim)] hidden md:block">Catégorie</span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--fg-dim)]">Date</span>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--fg-dim)] text-right">Lecture</span>
          </div>

          {/* Grid rows */}
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group grid grid-cols-[1fr_100px_80px] md:grid-cols-[1fr_140px_100px_80px] items-center px-5 py-4 border-b border-[rgba(255,255,255,0.08)] last:border-b-0 hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-150"
            >
              {/* Title + excerpt */}
              <div className="pr-4 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-semibold tracking-tight text-white group-hover:text-[#d4a843] transition-colors truncate">{post.title}</h3>
                  {post.featured && (
                    <span className="shrink-0 text-[9px] font-bold uppercase tracking-wider text-[#d4a843] bg-[rgba(212,168,67,0.1)] border border-[rgba(212,168,67,0.25)] rounded px-1.5 py-0.5">Vedette</span>
                  )}
                </div>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed line-clamp-1 hidden md:block">{post.excerpt}</p>
              </div>

              {/* Category badge */}
              <div className="hidden md:block">
                <span className="inline-block text-[10px] font-medium text-[var(--fg-muted)] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-full px-2.5 py-0.5">{post.category}</span>
              </div>

              {/* Date */}
              <div>
                <span className="text-[11px] text-[var(--fg-dim)]">{post.date}</span>
              </div>

              {/* Read time */}
              <div className="text-right">
                <span className="text-[11px] font-mono text-[var(--fg-dim)]">{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <section className="border border-[rgba(255,255,255,0.12)] rounded-xl p-10 md:p-16 text-center space-y-6">
          <p className="section-label">Newsletter</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Un article par mois<span className="text-[var(--fg-muted)]">.</span>
          </h2>
          <p className="text-sm text-[var(--fg-muted)] max-w-md mx-auto leading-relaxed">
            Je partage un write-up technique par mois : failles trouvées, outils codés, optimisations appliquées. Zéro spam.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 bg-transparent border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-hover)] transition-colors placeholder:text-[var(--fg-dim)]"
            />
            <button className="btn-primary">S&apos;abonner</button>
          </div>
        </section>
      </div>
    </div>
  );
}
