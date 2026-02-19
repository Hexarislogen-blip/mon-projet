import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Contourner un WAF Cloudflare avec des payloads Unicode"
      date="14 Novembre 2025"
      readTime="14 min"
      category="Cybersécurité"
      content={[
        "Lors d'un pentest sur une application protégée par Cloudflare WAF, j'ai découvert que certains caractères Unicode n'étaient pas normalisés avant le filtrage. Cette faille m'a permis de contourner les règles de détection XSS et SQLi avec trois techniques différentes. Voici le détail.",

        "## Le contexte",

        "L'application cible était une plateforme e-commerce avec un formulaire de recherche. Les injections classiques (<script>alert(1)</script>, ' OR 1=1 --) étaient bloquées par Cloudflare avec une page d'erreur 403. Le client voulait savoir si son WAF était suffisant pour protéger l'application.",

        "Spoiler : non.",

        "## Technique 1 : Homoglyphes Unicode",

        "Les homoglyphes sont des caractères Unicode qui ressemblent visuellement à des caractères ASCII mais ont un code point différent. Par exemple, le 'a' latin (U+0061) et le 'а' cyrillique (U+0430) sont visuellement identiques mais techniquement différents.",

        "Cloudflare filtrait le mot 'script' dans les balises HTML. Mais en remplaçant le 's' latin par le 'ѕ' cyrillique (U+0455), le payload <ѕcript>alert(1)</ѕcript> passait le WAF. Le navigateur, après normalisation Unicode, interprétait quand même la balise comme du JavaScript valide.",

        "Cette technique a fonctionné parce que Cloudflare comparait les bytes bruts sans normalisation NFC/NFD préalable. Le backend de l'application, lui, normalisait l'input avant de l'insérer dans le HTML.",

        "## Technique 2 : Encodage UTF-8 overlong",

        "L'encodage UTF-8 overlong consiste à encoder un caractère ASCII avec plus d'octets que nécessaire. Le caractère '<' (U+003C) s'encode normalement en 1 octet (0x3C), mais on peut l'encoder en 2 octets (0xC0 0xBC) ou 3 octets (0xE0 0x80 0xBC).",

        "Les navigateurs modernes rejettent les encodages overlong, mais certains backends les décodent quand même. Dans ce cas, le WAF voyait des octets qui ne matchaient pas ses patterns de détection, tandis que le backend décodait correctement le '<' et l'insérait dans le HTML.",

        "Cette technique est plus ancienne et fonctionne moins souvent, mais elle a marché sur ce cas précis parce que le backend utilisait une librairie de décodage UTF-8 permissive.",

        "## Technique 3 : Normalisation NFKC",

        "La normalisation NFKC (Compatibility Decomposition followed by Canonical Composition) transforme certains caractères Unicode en leurs équivalents ASCII. Par exemple, le caractère '＜' (U+FF1C, fullwidth less-than sign) est normalisé en '<' (U+003C).",

        "En utilisant les versions fullwidth des caractères spéciaux, j'ai pu construire des payloads SQLi qui passaient le WAF : ' ＯＲ １＝１ ーー. Après normalisation NFKC côté backend, ça devenait ' OR 1=1 --.",

        "## L'impact",

        "Avec ces trois techniques combinées, j'ai pu démontrer : une XSS stockée via le champ de recherche (les résultats de recherche affichaient le terme sans sanitization), une injection SQL dans un paramètre de tri qui retournait les données de tous les utilisateurs, et un bypass de l'authentification admin via manipulation de cookie.",

        "## Les corrections recommandées",

        "Le WAF seul ne suffit pas. Les corrections que j'ai recommandées au client étaient les suivantes :",

        "- Normaliser tous les inputs en NFC avant tout traitement côté backend\n- Utiliser des requêtes paramétrées pour toutes les interactions SQL\n- Encoder les outputs HTML avec une librairie dédiée (pas de concaténation manuelle)\n- Configurer Cloudflare en mode 'I'm Under Attack' pour les endpoints sensibles\n- Ajouter des règles WAF custom pour les caractères Unicode fullwidth",

        "## La leçon",

        "Un WAF est une couche de défense, pas LA défense. Il ralentit les attaquants et bloque les scripts automatisés, mais un pentester motivé trouvera toujours un contournement. La vraie sécurité vient du code : requêtes paramétrées, encoding des outputs, validation des inputs côté serveur.",

        "Cloudflare a depuis amélioré sa normalisation Unicode, mais de nouvelles techniques de bypass apparaissent régulièrement. C'est un jeu du chat et de la souris permanent.",

        "> Un WAF sans code sécurisé, c'est un cadenas sur une porte en carton. Ça décourage les curieux, pas les cambrioleurs."
      ]}
    />
  );
}
