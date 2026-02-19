import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Prisma en prod : les pièges de performance que personne ne mentionne"
      date="9 Octobre 2025"
      readTime="12 min"
      category="Backend"
      content={[
        "Prisma est un ORM génial pour le développement. Le typage automatique, les migrations, le studio — tout est bien pensé. Mais après 6 mois en production sur un projet à 50 000 utilisateurs actifs, j'ai découvert des pièges de performance que la documentation ne mentionne pas. Voici ce que j'ai appris.",

        "## Le projet",

        "Une plateforme SaaS avec une API REST en Node.js, PostgreSQL comme base de données, et Prisma comme ORM. 50k utilisateurs actifs, 200 requêtes par seconde en pic, et une base de 15 millions de lignes sur les tables principales.",

        "## Piège 1 : Les N+1 queries cachées",

        "Prisma génère des requêtes SQL propres pour les opérations simples. Mais dès que tu utilises des relations imbriquées avec include, les choses se compliquent. Un findMany avec deux niveaux d'include génère 3 requêtes SQL séparées au lieu d'un JOIN.",

        "Sur notre endpoint /api/projects qui retournait les projets avec leurs tâches et les assignees de chaque tâche, Prisma générait : 1 requête pour les projets, 1 requête pour les tâches (avec un WHERE IN sur les IDs des projets), et 1 requête pour les assignees (avec un WHERE IN sur les IDs des tâches). Sur 100 projets avec 500 tâches, ça faisait 3 requêtes au lieu d'une, mais le vrai problème était le temps de sérialisation côté Node.js pour assembler les résultats.",

        "La solution : utiliser des raw queries avec des JOINs pour les endpoints critiques. Prisma supporte $queryRaw qui retourne des résultats typés. On perd l'élégance du query builder, mais on gagne 60% de temps de réponse.",

        "## Piège 2 : Connection pooling mal configuré",

        "Par défaut, Prisma ouvre un pool de connexions PostgreSQL avec un nombre de connexions égal à num_physical_cpus * 2 + 1. Sur un serveur à 2 vCPUs, ça fait 5 connexions. Avec 200 requêtes par seconde, les connexions étaient saturées et les requêtes attendaient en queue.",

        "J'ai augmenté le pool à 20 connexions via la connection string : postgresql://...?connection_limit=20. Mais attention : PostgreSQL a aussi une limite de connexions (par défaut 100). Avec 4 instances de l'API derrière un load balancer, 4 × 20 = 80 connexions, ce qui laissait peu de marge.",

        "La vraie solution a été d'ajouter PgBouncer en mode transaction pooling entre l'API et PostgreSQL. PgBouncer maintient un pool de connexions réelles vers PostgreSQL et multiplex les connexions des clients. Résultat : chaque instance de l'API peut ouvrir 50 connexions vers PgBouncer, qui les route vers 20 connexions réelles PostgreSQL.",

        "## Piège 3 : Les transactions implicites",

        "Prisma wrappe certaines opérations dans des transactions implicites. Un createMany avec des relations nested ouvre une transaction, insère les enregistrements un par un, et commit. Sur un import de 10 000 lignes, ça prenait 45 secondes.",

        "La solution : utiliser $executeRawUnsafe avec un INSERT INTO ... VALUES (...), (...), (...) pour les imports bulk. On passe de 45 secondes à 1.2 secondes pour 10 000 lignes.",

        "## Piège 4 : Les index manquants",

        "Prisma crée automatiquement des index sur les clés primaires et les champs @unique. Mais il ne crée pas d'index sur les champs utilisés dans les WHERE, ORDER BY ou les relations. Sur notre table de 15 millions de lignes, une requête filtrée par status et triée par createdAt prenait 3 secondes sans index.",

        "J'ai ajouté des index composites dans le schema.prisma avec @@index([status, createdAt]). Après migration, la même requête prenait 12ms. La leçon : toujours vérifier le query plan avec EXPLAIN ANALYZE sur les requêtes lentes.",

        "## Piège 5 : Le logging en production",

        "Prisma peut logger toutes les requêtes SQL avec log: ['query']. C'est utile en développement, mais en production avec 200 req/s, ça génère des milliers de lignes de logs par seconde et consomme 15% de CPU juste pour la sérialisation des logs.",

        "J'ai désactivé le logging SQL en production et ajouté un middleware Prisma qui mesure le temps d'exécution de chaque requête. Seules les requêtes qui dépassent 100ms sont loggées avec leur SQL et leur durée. Ça permet de détecter les régressions de performance sans noyer les logs.",

        "## Ce que je recommande",

        "Prisma est excellent pour le développement rapide et la sécurité des types. Mais sur un projet à fort trafic, il faut être prêt à utiliser des raw queries pour les endpoints critiques, configurer correctement le connection pooling avec PgBouncer, ajouter des index manuellement sur les colonnes filtrées, et monitorer les temps de requête en production.",

        "- Utilisez Prisma pour 80% de vos requêtes (CRUD simple, relations basiques)\n- Passez en raw SQL pour les 20% critiques (rapports, exports, endpoints à fort trafic)\n- Ajoutez PgBouncer dès que vous dépassez 50 req/s\n- Vérifiez vos index avec EXPLAIN ANALYZE régulièrement",

        "> Prisma n'est pas lent. C'est ton utilisation de Prisma qui est lente. Et la différence, c'est 6 mois de production pour la comprendre."
      ]}
    />
  );
}
