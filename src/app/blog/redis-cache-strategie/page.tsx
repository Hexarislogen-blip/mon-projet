import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Ma stratégie de cache Redis pour une API à 10k req/min"
      date="15 Juillet 2025"
      readTime="13 min"
      category="Backend"
      content={[
        "Sur un projet client, l'API Node.js tapait PostgreSQL à chaque requête. À 10 000 requêtes par minute, la base de données saturait et les temps de réponse montaient à 2 secondes. J'ai mis en place une stratégie de cache Redis qui a réduit la charge DB de 80% et ramené les temps de réponse sous les 50ms.",

        "## Le problème",

        "L'API servait principalement des données de catalogue : produits, catégories, prix, descriptions. Ces données changeaient rarement — une mise à jour par jour en moyenne. Pourtant, chaque requête GET /api/products/:id faisait un SELECT avec 3 JOINs sur PostgreSQL. Multiplié par 10 000 requêtes par minute, ça faisait 10 000 queries SQL identiques pour des données qui n'avaient pas changé depuis 24 heures.",

        "## Le pattern : Cache-Aside",

        "J'ai implémenté le pattern cache-aside (aussi appelé lazy loading). Le flow est simple : quand une requête arrive, on vérifie d'abord si la donnée est dans Redis. Si oui (cache hit), on la retourne directement. Si non (cache miss), on la récupère depuis PostgreSQL, on la stocke dans Redis avec un TTL, et on la retourne.",

        "```\nasync function getProduct(id: string) {\n  const cached = await redis.get(`product:${id}`);\n  if (cached) return JSON.parse(cached);\n  \n  const product = await prisma.product.findUnique({\n    where: { id },\n    include: { category: true, variants: true }\n  });\n  \n  await redis.set(`product:${id}`, JSON.stringify(product), 'EX', 3600);\n  return product;\n}",

        "## TTL adaptatif selon le type de donnée",

        "Toutes les données n'ont pas la même fréquence de changement. J'ai défini trois niveaux de TTL. Les données statiques comme les catégories et les pages CMS ont un TTL de 24 heures. Les données semi-statiques comme les produits et les prix ont un TTL d'une heure. Les données dynamiques comme le stock et les avis ont un TTL de 5 minutes.",

        "Le choix du TTL est un compromis entre la fraîcheur des données et la charge sur la base. Un TTL trop court annule l'intérêt du cache. Un TTL trop long affiche des données obsolètes. Pour un catalogue e-commerce, 1 heure sur les produits est un bon compromis — les clients ne remarquent pas un délai d'une heure sur un changement de description.",

        "## Invalidation par tags",

        "Le TTL gère l'expiration automatique, mais parfois tu veux invalider le cache immédiatement. Par exemple, quand un admin modifie un produit, le cache doit être mis à jour sans attendre l'expiration du TTL.",

        "J'ai implémenté un système de tags. Chaque entrée de cache est associée à un ou plusieurs tags. Quand un produit est modifié, on invalide toutes les entrées avec le tag product:{id}. Quand une catégorie est modifiée, on invalide toutes les entrées avec le tag category:{id}, ce qui inclut tous les produits de cette catégorie.",

        "```\n// Stocker avec des tags\nawait redis.set(`product:${id}`, data, 'EX', 3600);\nawait redis.sadd(`tag:product:${id}`, `product:${id}`);\nawait redis.sadd(`tag:category:${categoryId}`, `product:${id}`);\n\n// Invalider par tag\nasync function invalidateTag(tag: string) {\n  const keys = await redis.smembers(`tag:${tag}`);\n  if (keys.length) await redis.del(...keys);\n  await redis.del(`tag:${tag}`);\n}",

        "## Cache warming",

        "Au démarrage de l'application ou après un flush du cache, les premières requêtes sont lentes parce qu'elles doivent toutes aller en base. J'ai ajouté un script de cache warming qui pré-charge les 500 produits les plus consultés au démarrage. Le script tourne en 3 secondes et évite le thundering herd des premières minutes.",

        "## Protection contre le cache stampede",

        "Quand un TTL expire sur une clé très demandée, des dizaines de requêtes simultanées vont toutes en base en même temps — c'est le cache stampede. J'ai implémenté un lock distribué avec Redis : la première requête qui détecte un cache miss pose un lock, va en base, et met à jour le cache. Les requêtes suivantes attendent le lock (50ms max) et récupèrent la donnée fraîche du cache.",

        "## Les résultats",

        "Après mise en place du cache Redis, les métriques ont changé radicalement. Le cache hit rate moyen est de 94%. Les requêtes PostgreSQL sont passées de 10 000 par minute à 600 par minute, soit une réduction de 94%. Le temps de réponse moyen est passé de 180ms à 12ms pour les cache hits. La charge CPU de PostgreSQL est passée de 85% à 15%.",

        "## Les pièges à éviter",

        "- Ne cache jamais des données spécifiques à un utilisateur sans inclure le user ID dans la clé\n- Sérialise en JSON, pas en toString() — les objets complexes ne survivent pas au round-trip\n- Monitore le hit rate — s'il descend sous 80%, tes TTL sont probablement trop courts\n- Prévois un fallback si Redis tombe — l'API doit continuer à fonctionner en mode dégradé",

        "## Ce que je recommande",

        "Si ton API sert des données qui changent moins souvent qu'elles ne sont lues, mets du cache. Redis est le choix évident pour sa simplicité et sa performance. Commence par le cache-aside avec des TTL fixes, puis ajoute l'invalidation par tags et le cache warming quand le besoin se présente.",

        "> 80% de charge DB en moins avec 50 lignes de code. Le cache, c'est le meilleur rapport effort/impact en backend."
      ]}
    />
  );
}
