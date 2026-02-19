import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Construire un design system complet avec Tailwind et CSS variables"
      date="5 Septembre 2025"
      readTime="9 min"
      category="Frontend"
      content={[
        "Mon portfolio a 6 pages et chaque page doit être visuellement cohérente sans que je copie-colle des classes Tailwind partout. J'ai structuré un design system léger basé sur des CSS custom properties et des conventions Tailwind. Zéro librairie de composants, zéro classe custom — juste des tokens bien organisés.",

        "## Pourquoi des CSS variables plutôt que tailwind.config",

        "Tailwind permet de définir des couleurs custom dans tailwind.config.ts. Mais les CSS variables ont un avantage majeur : elles sont dynamiques. Tu peux les changer au runtime (dark mode, thèmes), les scoper à un composant, et les inspecter facilement dans le DevTools. En plus, elles fonctionnent avec n'importe quelle propriété CSS, pas seulement celles que Tailwind expose.",

        "## Les tokens de couleur",

        "J'ai défini 5 niveaux de gris sémantiques plutôt que des valeurs absolues. Chaque variable a un nom qui décrit son usage, pas sa valeur. --bg pour le fond principal, --fg pour le texte principal, --fg-muted pour le texte secondaire, --fg-dim pour le texte tertiaire, et --border pour les bordures.",

        "```\n:root {\n  --bg: #0a0a0a;\n  --fg: #fafafa;\n  --fg-muted: #a1a1aa;\n  --fg-dim: #52525b;\n  --border: rgba(255, 255, 255, 0.12);\n  --accent-green: #3ecf8e;\n  --accent-gold: #d4a843;\n}",

        "Avec cette approche, changer le thème entier revient à modifier 7 variables. Si demain je veux un mode clair, je change les valeurs dans une media query prefers-color-scheme et tout le site s'adapte.",

        "## Les tokens de typographie",

        "Tailwind gère bien la typographie avec ses classes text-sm, text-lg, etc. Mais j'ai ajouté des conventions pour la hiérarchie : les titres de page utilisent text-4xl md:text-6xl font-bold tracking-tight, les titres de section utilisent text-xl font-semibold, et le body text utilise text-sm text-[var(--fg-muted)] leading-relaxed.",

        "Pour les labels de section (les petits textes en majuscules au-dessus des titres), j'ai créé une classe utilitaire .section-label dans globals.css qui combine text-xs, font-semibold, uppercase, tracking-widest et la couleur accent.",

        "## Les tokens de spacing",

        "Le spacing suit une grille de 4px. Les gaps entre les sections sont de 16 (py-16) ou 20 (py-20). Les gaps internes sont de 4 (space-y-4) ou 6 (space-y-6). Les paddings de conteneur sont de 6 (px-6) sur mobile et 8 (lg:px-8) sur desktop. Le max-width du conteneur principal est 7xl (max-w-7xl).",

        "Cette cohérence est invisible pour l'utilisateur mais elle donne une sensation de propreté et de rigueur. Quand tous les espacements suivent la même grille, le design respire naturellement.",

        "## Les composants récurrents",

        "Plutôt que de créer des composants React pour chaque élément UI, j'utilise des patterns Tailwind répétables. Un card, c'est toujours border border-[var(--border)] rounded-xl p-5. Un badge, c'est toujours text-[10px] font-semibold rounded-full px-2.5 py-1. Un lien avec flèche, c'est toujours group flex items-center gap-2 text-sm.",

        "Ces patterns sont documentés dans un fichier CONVENTIONS.md à la racine du projet. Quand je reviens sur le code 3 mois plus tard, je sais exactement quel pattern utiliser sans chercher dans le code existant.",

        "## Les bordures et séparateurs",

        "Les bordures utilisent toujours la même couleur : var(--border) qui est rgba(255, 255, 255, 0.12). C'est assez visible pour structurer le layout sans être agressif. Les séparateurs horizontaux entre les sections utilisent border-t border-[var(--border)].",

        "Pour les cards avec hover, la bordure passe de 0.12 à 0.2 d'opacité au hover. C'est subtil mais ça donne un feedback visuel clair sans animation flashy.",

        "## Les couleurs d'accent",

        "Deux couleurs d'accent seulement : vert (#3ecf8e) pour les éléments positifs (badges de projet, liens actifs) et or (#d4a843) pour les éléments de mise en avant (page active dans le header, badges vedette). Limiter les couleurs d'accent à deux force la cohérence et évite le syndrome du sapin de Noël.",

        "## Le responsive",

        "Le design suit une approche mobile-first. Les breakpoints utilisés sont md (768px) et lg (1024px). Sur mobile, les grilles passent en une colonne, les cards s'empilent verticalement, et les paddings sont réduits. Sur desktop, les grilles passent en 2 ou 3 colonnes et les conteneurs s'élargissent.",

        "La règle : chaque composant doit être lisible et utilisable sur un écran de 375px de large (iPhone SE). Si ça marche là, ça marche partout.",

        "## Ce que j'ai appris",

        "Un design system n'a pas besoin d'être une librairie de composants avec Storybook et des tokens JSON. Pour un portfolio, 7 CSS variables, 3 patterns de composants et un fichier de conventions suffisent. L'important, c'est la cohérence, pas la complexité.",

        "> 7 variables CSS, 0 librairie de composants, 6 pages cohérentes. Le meilleur design system est celui que tu utilises vraiment."
      ]}
    />
  );
}
