import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Mon pipeline CI passe en 2 min 30 au lieu de 11 minutes"
      date="18 Août 2025"
      readTime="7 min"
      category="DevOps"
      content={[
        "Mon pipeline GitHub Actions prenait 11 minutes. Chaque push sur une PR, 11 minutes d'attente avant de savoir si les tests passent. Avec 15 PR par semaine, ça fait 2h45 de temps perdu juste à attendre le CI. J'ai réduit ça à 2 minutes 30 avec quatre optimisations.",

        "## L'état initial",

        "Le pipeline faisait dans l'ordre : checkout du code, installation de Node.js, npm install (3 min), lint (45s), tests unitaires (2 min), tests d'intégration (3 min), build (1 min 30), et upload des artifacts. Total : 11 minutes, tout séquentiel.",

        "## Optimisation 1 : Cache des node_modules (-3 min)",

        "La plus évidente. npm install téléchargeait 800MB de dépendances à chaque run. GitHub Actions propose un cache natif qui stocke node_modules entre les runs. Si le package-lock.json n'a pas changé, le cache est réutilisé et l'installation prend 8 secondes au lieu de 3 minutes.",

        "```\n- uses: actions/cache@v4\n  with:\n    path: node_modules\n    key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}\n    restore-keys: ${{ runner.os }}-node-",

        "Gain : 2 minutes 50 secondes en moyenne. Le cache hit rate est de 92% — il ne miss que quand on ajoute ou met à jour une dépendance.",

        "## Optimisation 2 : Jobs parallèles (-3 min)",

        "Au lieu de tout exécuter séquentiellement dans un seul job, j'ai séparé le pipeline en 3 jobs parallèles : lint + type-check, tests unitaires, et tests d'intégration. Les trois jobs démarrent en même temps après l'installation des dépendances.",

        "Le job le plus long (tests d'intégration, 3 min) détermine le temps total. Avant, c'était 3 + 2 + 0.75 = 5.75 min de tests séquentiels. Maintenant, c'est 3 min en parallèle.",

        "## Optimisation 3 : Skip conditionnel (-2 min en moyenne)",

        "Pas besoin de relancer les tests d'intégration si tu as juste modifié le README. J'ai ajouté des filtres de paths sur chaque job. Le lint ne tourne que si des fichiers .ts ou .tsx ont changé. Les tests d'intégration ne tournent que si des fichiers dans src/ ou tests/ ont changé. Le build ne tourne que sur les pushes sur main.",

        "```\non:\n  push:\n    paths:\n      - 'src/**'\n      - 'tests/**'\n      - 'package.json'",

        "En moyenne, 30% des commits ne touchent que la documentation, la config ou les assets. Ces commits skip le pipeline complet et passent en 15 secondes.",

        "## Optimisation 4 : Matrix strategy pour les tests",

        "Les tests unitaires tournaient sur Node 20 uniquement. J'ai ajouté une matrix strategy pour tester sur Node 18 et 20 en parallèle. Ça n'accélère pas le pipeline (les deux tournent en même temps), mais ça détecte les incompatibilités de version sans coût de temps supplémentaire.",

        "## Le résultat",

        "- Avant : 11 minutes (séquentiel, pas de cache)\n- Après cache : 8 minutes\n- Après parallélisation : 4 minutes 30\n- Après skip conditionnel : 2 minutes 30 en moyenne\n- Commits docs-only : 15 secondes",

        "## Bonus : Concurrency groups",

        "Un dernier truc : les concurrency groups. Si tu pushes 3 commits rapides sur une PR, GitHub Actions lance 3 pipelines. Avec un concurrency group, seul le dernier pipeline tourne — les deux premiers sont annulés automatiquement.",

        "```\nconcurrency:\n  group: ${{ github.workflow }}-${{ github.ref }}\n  cancel-in-progress: true",

        "Ça évite de gaspiller des minutes de CI sur des commits intermédiaires qui seront de toute façon écrasés par le suivant.",

        "## Ce que j'ai appris",

        "Le cache des dépendances est le quick win le plus impactant. Si tu ne fais qu'une seule chose, fais ça. Ensuite, la parallélisation des jobs et le skip conditionnel divisent le temps par 2 sans effort. Le tout prend 30 minutes à configurer et se rentabilise dès la première semaine.",

        "> 11 minutes → 2 min 30. Pas de magie, juste du cache, du parallélisme et du bon sens."
      ]}
    />
  );
}
