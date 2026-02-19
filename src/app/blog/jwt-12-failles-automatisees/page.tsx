import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Comment j'ai automatisé la détection de 12 failles JWT courantes"
      date="15 Février 2026"
      readTime="18 min"
      category="Cybersécurité"
      content={[
        "Les JSON Web Tokens sont partout. Chaque app moderne qui gère de l'authentification utilise probablement des JWT quelque part dans sa stack. Et pourtant, après une quinzaine de pentests web, je constate toujours les mêmes erreurs d'implémentation. J'ai donc décidé d'automatiser la détection de ces failles récurrentes dans un outil dédié.",

        "## Le constat de départ",

        "Sur mes 15 derniers audits de sécurité, 9 applications avaient au moins une vulnérabilité liée aux JWT. Pas des trucs exotiques — des failles basiques que n'importe quel pentester junior peut exploiter en 10 minutes. Le problème, c'est que tester manuellement chaque vecteur prend du temps. Entre le none algorithm, la key confusion, le brute force de secrets et la manipulation de claims, il faut facilement 45 minutes par endpoint.",

        "J'ai listé les 12 vecteurs d'attaque que je teste systématiquement et j'ai codé un outil qui les exécute tous en parallèle. Résultat : ce qui prenait 45 minutes se fait maintenant en 30 secondes.",

        "## Les 12 vecteurs testés",

        "### 1. None Algorithm Attack",
        "Le classique. On change l'algorithme dans le header JWT de RS256 à 'none' et on supprime la signature. Si le serveur accepte le token, c'est game over. Ça paraît stupide, mais j'ai trouvé cette faille sur 3 apps en production l'année dernière.",

        "### 2. Algorithm Confusion (RS256 → HS256)",
        "Quand une app utilise RS256 (asymétrique), on peut parfois forcer HS256 (symétrique) et signer le token avec la clé publique du serveur. Si le backend ne vérifie pas explicitement l'algorithme attendu, il accepte le token forgé.",

        "### 3. Brute Force du Secret HS256",
        "Beaucoup de devs utilisent des secrets faibles pour signer leurs JWT. Mon outil teste un dictionnaire de 50 000 secrets courants (password, secret, jwt-secret, le nom de l'app...) plus des patterns générés (company-name-2024, app-jwt-key, etc.). Sur les 9 apps vulnérables, 4 avaient un secret qui tombait en moins de 5 minutes.",

        "### 4-6. Manipulation des claims temporels",
        "L'outil teste trois choses : un token avec une date d'expiration dans le passé (le serveur vérifie-t-il exp ?), un token avec un 'not before' dans le futur (nbf est-il respecté ?), et un token avec un 'issued at' aberrant. Ces tests révèlent si la validation temporelle est correctement implémentée.",

        "### 7-8. Injection dans les claims",
        "On modifie le claim 'sub' (subject) pour accéder au compte d'un autre utilisateur, et on modifie le claim 'role' ou 'admin' pour escalader les privilèges. C'est de l'IDOR via JWT, et c'est étonnamment courant.",

        "### 9-10. JWK et JKU Injection",
        "Si le header JWT contient un champ 'jwk' (JSON Web Key) ou 'jku' (JWK Set URL), on peut injecter notre propre clé publique ou pointer vers un serveur qu'on contrôle. Le serveur utilise alors notre clé pour vérifier la signature — qu'on a évidemment générée nous-mêmes.",

        "### 11. Kid Injection",
        "Le champ 'kid' (Key ID) dans le header est parfois utilisé pour construire un chemin de fichier ou une requête SQL côté serveur. On peut tenter une path traversal (../../dev/null) ou une injection SQL pour contourner la vérification de signature.",

        "### 12. Token Replay",
        "On vérifie si un token révoqué (après logout) est toujours accepté. Beaucoup d'apps ne maintiennent pas de blacklist de tokens, ce qui permet de réutiliser un token volé même après que l'utilisateur s'est déconnecté.",

        "## Architecture de l'outil",

        "Le moteur de test tourne entièrement dans le navigateur en TypeScript. Aucun token n'est envoyé à un serveur tiers — c'est critique pour les pentests sous NDA. L'outil utilise des Web Workers pour paralléliser les tests sans bloquer l'interface.",

        "Le flow est simple : tu colles ton token JWT valide, tu indiques l'URL de l'endpoint et le header d'authentification utilisé (Authorization: Bearer, cookie, custom header). L'outil décode le token, génère les variantes pour chaque test, et envoie les requêtes en parallèle.",

        "Pour chaque test, l'outil compare la réponse avec celle du token original. Si le status code et le body sont similaires, le test est marqué comme potentiellement vulnérable. Un diff visuel montre exactement ce qui a changé entre la réponse légitime et la réponse au token modifié.",

        "## Le rapport généré",

        "À la fin du scan, l'outil génère un rapport HTML avec pour chaque faille trouvée : la description de la vulnérabilité, le payload exact qui a fonctionné, la requête et la réponse complètes, un score de sévérité CVSS, et une recommandation de correction.",

        "Ce rapport est directement utilisable dans un livrable de pentest. Je l'inclus tel quel dans mes rapports d'audit, ce qui me fait gagner facilement 2 heures de rédaction par mission.",

        "## Résultats concrets",

        "Depuis que j'utilise cet outil, mon temps de test JWT est passé de 45 minutes à 30 secondes par endpoint. Sur les 6 derniers mois, il a détecté 23 vulnérabilités JWT sur 15 audits. La faille la plus courante reste le secret HS256 faible (40% des cas), suivie par l'absence de vérification d'expiration (25%).",

        "L'outil est disponible en open source. Si tu fais du pentest web, je t'encourage à l'essayer et à me remonter les faux positifs — c'est comme ça qu'on l'améliore.",

        "> Le code est 100% côté client. Tes tokens ne quittent jamais ton navigateur. C'est non négociable pour un outil de sécurité."
      ]}
    />
  );
}
