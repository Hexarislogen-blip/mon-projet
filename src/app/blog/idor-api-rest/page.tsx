import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="J'ai trouvé 7 IDOR sur une API REST en 2 heures de test"
      date="21 Septembre 2025"
      readTime="16 min"
      category="Cybersécurité"
      content={[
        "Les IDOR (Insecure Direct Object References) sont la vulnérabilité la plus sous-estimée du web. Pas besoin d'être un hacker chevronné pour les exploiter — il suffit de changer un ID dans l'URL. Sur un audit récent, j'en ai trouvé 7 en 2 heures sur une API REST. Voici ma méthodologie.",

        "## Ce qu'est un IDOR",

        "Un IDOR se produit quand une application utilise un identifiant fourni par l'utilisateur pour accéder à une ressource sans vérifier que l'utilisateur a le droit d'y accéder. Exemple classique : GET /api/users/42/invoices retourne les factures de l'utilisateur 42. Si je suis l'utilisateur 43 et que je change le 42 en 41, je vois les factures de quelqu'un d'autre.",

        "C'est bête, c'est simple, et c'est partout.",

        "## La cible",

        "L'application était une plateforme de gestion de projet pour PME. API REST classique en Node.js/Express, authentification par JWT, base PostgreSQL. Environ 5 000 utilisateurs actifs répartis dans 200 organisations.",

        "## Ma méthodologie en 4 étapes",

        "### Étape 1 : Mapper tous les endpoints avec des IDs",

        "J'ai commencé par utiliser l'application normalement pendant 30 minutes en interceptant toutes les requêtes avec Burp Suite. J'ai identifié 23 endpoints qui utilisaient des IDs dans l'URL ou le body : /api/projects/:id, /api/tasks/:id, /api/users/:id/settings, /api/organizations/:id/members, etc.",

        "### Étape 2 : Créer deux comptes de test",

        "J'ai créé deux comptes dans deux organisations différentes : Alice (org A) et Bob (org B). L'idée est de tester si Alice peut accéder aux ressources de Bob en manipulant les IDs.",

        "### Étape 3 : Tester chaque endpoint",

        "Pour chaque endpoint, je fais la même chose : je récupère un ID valide depuis le compte d'Alice, je remplace le JWT par celui de Bob, et j'envoie la requête. Si la réponse est 200 avec les données d'Alice, c'est un IDOR.",

        "### Étape 4 : Classifier par impact",

        "Chaque IDOR trouvé est classifié par impact : lecture seule (je vois des données), modification (je peux changer des données), suppression (je peux supprimer des données), ou escalade de privilèges (je peux devenir admin).",

        "## Les 7 IDOR trouvés",

        "### IDOR 1 : Lecture des projets (Critique)",
        "GET /api/projects/123 retournait le projet complet avec toutes les tâches, les commentaires et les fichiers attachés. Aucune vérification d'appartenance à l'organisation. N'importe quel utilisateur authentifié pouvait lire n'importe quel projet.",

        "### IDOR 2 : Modification des tâches (Critique)",
        "PUT /api/tasks/456 permettait de modifier le titre, la description et le statut d'une tâche sans vérifier que l'utilisateur appartenait au projet. Un attaquant pouvait modifier les tâches d'une autre organisation.",

        "### IDOR 3 : Téléchargement de fichiers (Haut)",
        "GET /api/files/789/download retournait le fichier sans vérification. Les fichiers étaient stockés avec des IDs séquentiels, ce qui rendait l'énumération triviale. J'ai pu télécharger des contrats et des documents internes d'autres organisations.",

        "### IDOR 4 : Lecture des factures (Haut)",
        "GET /api/organizations/12/invoices retournait toutes les factures de l'organisation. Les IDs d'organisation étaient séquentiels (1, 2, 3...), ce qui permettait d'énumérer toutes les organisations et leurs factures.",

        "### IDOR 5 : Modification du profil utilisateur (Moyen)",
        "PUT /api/users/42/profile permettait de modifier le nom et l'email d'un autre utilisateur. L'impact était limité car ça ne donnait pas accès aux données, mais ça permettait du social engineering.",

        "### IDOR 6 : Suppression de commentaires (Moyen)",
        "DELETE /api/comments/321 supprimait le commentaire sans vérifier l'auteur. Un utilisateur pouvait supprimer les commentaires des autres dans son propre projet, mais aussi dans les projets d'autres organisations.",

        "### IDOR 7 : Ajout de membres (Critique)",
        "POST /api/organizations/12/members avec un body {userId: 43} ajoutait l'utilisateur 43 à l'organisation 12 sans vérification. Un attaquant pouvait s'ajouter lui-même à n'importe quelle organisation et accéder à toutes ses données.",

        "## La cause racine",

        "Le code backend vérifiait l'authentification (le JWT est-il valide ?) mais pas l'autorisation (cet utilisateur a-t-il le droit d'accéder à cette ressource ?). C'est un pattern extrêmement courant dans les API REST où les développeurs se concentrent sur l'auth et oublient l'authz.",

        "## Les corrections",

        "La correction est simple en théorie : chaque endpoint doit vérifier que l'utilisateur authentifié a le droit d'accéder à la ressource demandée. En pratique, j'ai recommandé un middleware d'autorisation qui vérifie l'appartenance à l'organisation avant chaque opération, le remplacement des IDs séquentiels par des UUIDs pour rendre l'énumération plus difficile, et des tests automatisés qui vérifient les IDOR sur chaque endpoint.",

        "> Les IDOR sont la faille la plus simple à exploiter et la plus simple à corriger. Et pourtant, je les trouve sur 60% des API que j'audite."
      ]}
    />
  );
}
