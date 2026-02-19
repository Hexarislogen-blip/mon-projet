import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Réduire une image Docker Node.js de 1.2GB à 89MB"
      date="28 Octobre 2025"
      readTime="8 min"
      category="DevOps"
      content={[
        "Mon image Docker Node.js pesait 1.2GB. Le pull prenait 45 secondes sur une connexion fibre et le déploiement était lent. En appliquant quatre optimisations simples, je l'ai réduite à 89MB. Voici le process étape par étape.",

        "## Le Dockerfile de départ",

        "Le Dockerfile original était classique : FROM node:20, COPY tout le projet, RUN npm install, CMD node server.js. Simple, fonctionnel, et catastrophiquement lourd. L'image node:20 seule pèse 1.1GB parce qu'elle inclut l'OS Debian complet avec tous les outils de build.",

        "## Étape 1 : Multi-stage build (-800MB)",

        "Le multi-stage build sépare le build de l'exécution. Le premier stage installe les dépendances et compile le code. Le second stage copie uniquement les fichiers nécessaires à l'exécution dans une image propre.",

        "```\n# Build stage\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nRUN npm run build\n\n# Production stage\nFROM node:20-alpine\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/package.json ./\nCMD [\"node\", \"dist/server.js\"]",

        "En passant de node:20 (Debian) à node:20-alpine, l'image de base passe de 1.1GB à 180MB. Le multi-stage élimine les devDependencies et les fichiers source du build final.",

        "## Étape 2 : .dockerignore strict (-50MB)",

        "Sans .dockerignore, Docker copie tout le répertoire dans le contexte de build, y compris node_modules, .git, les fichiers de test et la documentation. J'ai créé un .dockerignore strict qui exclut tout sauf les fichiers nécessaires au build.",

        "```\nnode_modules\n.git\n*.md\ntests/\ncoverage/\n.env*\n.vscode/\ndist/",

        "## Étape 3 : Distroless base (-60MB)",

        "Alpine est déjà léger, mais on peut aller plus loin avec les images distroless de Google. Ces images ne contiennent que le runtime Node.js — pas de shell, pas de package manager, pas d'utilitaires système. C'est plus sécurisé (moins de surface d'attaque) et plus léger.",

        "```\n# Production stage\nFROM gcr.io/distroless/nodejs20-debian12\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nCOPY --from=builder /app/package.json ./\nCMD [\"dist/server.js\"]",

        "L'image distroless Node.js pèse 120MB au lieu de 180MB pour Alpine. Et comme il n'y a pas de shell, un attaquant qui exploite une faille dans l'app ne peut pas exécuter de commandes système.",

        "## Étape 4 : Pruning des node_modules (-20MB)",

        "npm ci --only=production installe uniquement les dépendances de production, mais certains packages incluent des fichiers inutiles (README, tests, exemples, TypeScript sources). J'utilise node-prune pour les supprimer après l'installation.",

        "```\nRUN npm ci --only=production && \\\n    npx node-prune && \\\n    rm -rf /root/.npm",

        "node-prune supprime les fichiers .md, .ts (sources), les tests, les exemples et les fichiers de documentation dans node_modules. Gain typique : 15-25% de la taille de node_modules.",

        "## Résultat final",

        "- Image originale : 1.2GB\n- Après Alpine + multi-stage : 340MB\n- Après .dockerignore : 290MB\n- Après distroless : 110MB\n- Après node-prune : 89MB",

        "Le pull de l'image prend maintenant 4 secondes au lieu de 45. Le déploiement est quasi instantané. Et la surface d'attaque est réduite au minimum.",

        "## Bonus : layer caching",

        "L'ordre des instructions dans le Dockerfile impacte le cache. Les instructions qui changent rarement (COPY package*.json, RUN npm ci) doivent être avant celles qui changent souvent (COPY . .). Comme ça, quand tu modifies ton code, Docker réutilise le cache des dépendances et ne rebuild que la dernière couche.",

        "> 1.2GB → 89MB. Pas de magie, juste un Dockerfile bien écrit. Tes déploiements te remercieront."
      ]}
    />
  );
}
