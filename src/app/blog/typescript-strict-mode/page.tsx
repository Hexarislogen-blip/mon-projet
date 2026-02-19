import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Activer le mode strict TypeScript sur un projet existant sans tout casser"
      date="10 Juin 2025"
      readTime="10 min"
      category="Frontend"
      content={[
        "J'ai migré 14 000 lignes de TypeScript lax vers strict en 3 jours. Le projet compilait avec 0 erreurs en mode lax, mais en activant strict, 847 erreurs sont apparues. Voici l'ordre dans lequel j'ai activé les flags et les patterns pour corriger les erreurs les plus courantes.",

        "## Pourquoi activer strict",

        "Le mode strict de TypeScript active 7 flags de vérification supplémentaires. Sans eux, TypeScript laisse passer des erreurs que tu ne découvriras qu'au runtime : des null accédés sans vérification, des types implicitement any qui masquent des bugs, des this mal typés dans les callbacks. Le mode strict transforme ces erreurs runtime en erreurs de compilation.",

        "Sur notre projet, on avait en moyenne 2 bugs par semaine liés à des null non vérifiés. Après l'activation du mode strict, ce chiffre est tombé à 0.",

        "## L'approche : un flag à la fois",

        "Activer strict d'un coup génère trop d'erreurs pour être gérable. J'ai activé les flags un par un, dans un ordre qui minimise les dépendances entre les corrections.",

        "### Jour 1 : noImplicitAny (312 erreurs)",
        "C'est le flag le plus impactant. Il interdit les variables et paramètres sans type explicite. La majorité des erreurs étaient des paramètres de fonctions non typés et des variables déclarées avec let sans annotation.",

        "Le pattern de correction le plus courant : ajouter le type aux paramètres de callback. Les event handlers React (onClick, onChange) étaient les principaux coupables. Au lieu de (e) => ..., il faut écrire (e: React.MouseEvent<HTMLButtonElement>) => ...",

        "Pour les cas où le type est complexe ou inconnu, j'ai utilisé unknown plutôt que any. unknown force une vérification de type avant utilisation, ce qui est exactement le comportement qu'on veut.",

        "### Jour 1 (suite) : noImplicitThis (23 erreurs)",
        "Ce flag interdit l'utilisation de this quand son type est implicitement any. Les erreurs étaient concentrées dans des callbacks passées à des librairies tierces. La correction : utiliser des arrow functions qui capturent le this du scope parent, ou ajouter un paramètre this explicite.",

        "### Jour 2 : strictNullChecks (489 erreurs)",
        "Le flag le plus important pour la qualité du code. Il interdit d'accéder à une valeur potentiellement null ou undefined sans vérification. 489 erreurs — presque la moitié du total.",

        "Les patterns de correction les plus fréquents étaient les suivants. Pour les accès à des propriétés optionnelles, utiliser l'optional chaining : user?.name au lieu de user.name. Pour les valeurs par défaut, utiliser le nullish coalescing : value ?? 'default' au lieu de value || 'default'. Pour les assertions de non-null quand on est sûr que la valeur existe, utiliser le non-null assertion : element! — mais avec parcimonie.",

        "J'ai aussi découvert 12 endroits dans le code où une valeur null était réellement possible mais jamais vérifiée. Ce sont des bugs potentiels que le mode lax masquait. Trois d'entre eux correspondaient à des bugs reportés par les utilisateurs.",

        "### Jour 2 (suite) : strictFunctionTypes (8 erreurs)",
        "Ce flag rend la vérification des types de fonctions contravariante au lieu de bivariante. En pratique, ça signifie que tu ne peux plus passer un callback qui accepte un type plus large que ce qui est attendu. Les 8 erreurs étaient dans des handlers d'événements custom mal typés.",

        "### Jour 3 : strictBindCallApply (3 erreurs)",
        "Ce flag vérifie les types des arguments passés à bind, call et apply. Seulement 3 erreurs — on n'utilisait presque pas ces méthodes.",

        "### Jour 3 (suite) : strictPropertyInitialization (12 erreurs)",
        "Ce flag vérifie que les propriétés de classe sont initialisées dans le constructeur. Les 12 erreurs étaient dans des classes React (class components) et des services avec injection de dépendances. La correction : ajouter le definite assignment assertion (!) pour les propriétés initialisées par le framework.",

        "## Les outils qui m'ont aidé",

        "- ts-migrate de Airbnb pour ajouter automatiquement des @ts-expect-error sur les erreurs complexes\n- Le plugin ESLint @typescript-eslint/no-explicit-any pour traquer les any restants\n- Le script tsc --noEmit pour vérifier les erreurs sans rebuilder le projet",

        "## Les résultats",

        "Après 3 jours de migration, le projet compilait en mode strict avec 0 erreurs. Les métriques de qualité ont changé immédiatement : 0 bugs liés à des null non vérifiés (contre 2 par semaine avant), 15% de couverture de types en plus détectée par le linter, et un temps de debug réduit parce que les erreurs sont catchées à la compilation.",

        "## Ce que je recommande",

        "Si tu as un projet TypeScript sans strict, active les flags un par un en commençant par noImplicitAny. C'est le plus impactant et le plus facile à corriger. Ensuite strictNullChecks — c'est le plus long mais c'est celui qui trouve les vrais bugs. Les autres flags génèrent peu d'erreurs et se corrigent en quelques heures.",

        "> 847 erreurs de compilation, c'est 847 bugs potentiels que tu ne découvriras pas en production. 3 jours de migration, c'est un investissement qui se rentabilise en une semaine."
      ]}
    />
  );
}
