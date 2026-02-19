import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="J'utilise l'IA pour scanner mon code avant chaque deploy"
      date="18 Décembre 2025"
      readTime="15 min"
      category="DevSecOps"
      content={[
        "Chaque push sur main déclenche un pipeline qui scanne mon code avant le déploiement. Pas juste un linter — un vrai scan de sécurité qui vérifie les dépendances vulnérables, les secrets exposés et les patterns de code dangereux. Voici comment j'ai mis ça en place avec GitHub Actions et quelques outils open source.",

        "## Le problème que je résolvais",

        "Sur un projet client, un développeur avait commité une clé API Stripe en dur dans un fichier de config. Le commit est resté 3 jours sur main avant que quelqu'un le remarque. Pendant ce temps, la clé était indexée par des bots qui scannent GitHub en continu. Le client a dû révoquer la clé et auditer toutes les transactions. Depuis, j'intègre un scan automatique dans chaque pipeline.",

        "## Les 3 couches de scan",

        "### Couche 1 : Secrets exposés",
        "J'utilise Gitleaks pour scanner chaque commit à la recherche de secrets. L'outil détecte les clés API, les tokens, les mots de passe, les clés privées SSH et les certificats. Il supporte des patterns custom — j'ai ajouté des regex pour les tokens Supabase, les clés Resend et les secrets Stripe spécifiques à mes projets.",

        "Le scan tourne en pre-commit hook localement et dans le pipeline CI. Si un secret est détecté, le push est bloqué et le développeur reçoit un message clair avec le fichier et la ligne concernés.",

        "### Couche 2 : Dépendances vulnérables",
        "npm audit est un début, mais il rate beaucoup de choses. J'utilise Trivy de Aqua Security qui scanne le package-lock.json et compare chaque dépendance contre la base NVD (National Vulnerability Database) et les advisories GitHub. Le scan prend 8 secondes et retourne les CVE avec leur sévérité CVSS.",

        "Le pipeline échoue sur les vulnérabilités critiques et hautes. Les moyennes et basses génèrent un warning mais ne bloquent pas le deploy. J'ai aussi configuré Dependabot pour ouvrir des PR automatiques quand un patch est disponible.",

        "### Couche 3 : Patterns de code dangereux",
        "C'est là que l'IA entre en jeu. J'utilise Semgrep avec des règles custom pour détecter les patterns de code vulnérables : eval() avec des données utilisateur, innerHTML sans sanitization, SQL queries construites par concaténation, fetch() vers des URLs non validées (SSRF), et des dizaines d'autres patterns.",

        "Semgrep analyse le code statiquement — il comprend la structure AST, pas juste le texte. Il peut suivre le flux de données d'un paramètre de requête jusqu'à un appel dangereux à travers plusieurs fonctions.",

        "## Le pipeline GitHub Actions",

        "```\nname: Security Scan\non: [push, pull_request]\njobs:\n  scan:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n        with:\n          fetch-depth: 0\n      - name: Gitleaks\n        uses: gitleaks/gitleaks-action@v2\n      - name: Trivy\n        uses: aquasecurity/trivy-action@master\n        with:\n          scan-type: fs\n          severity: CRITICAL,HIGH\n      - name: Semgrep\n        uses: semgrep/semgrep-action@v1\n        with:\n          config: p/owasp-top-ten",

        "Le pipeline complet prend environ 45 secondes. Les trois outils tournent en parallèle grâce aux jobs GitHub Actions. Le résultat est un rapport unifié posté en commentaire sur la PR.",

        "## Résultats après 6 mois",

        "En 6 mois d'utilisation sur 4 projets, le pipeline a détecté : 3 secrets commités accidentellement (2 clés API, 1 token JWT), 12 dépendances avec des CVE critiques, 8 patterns de code vulnérables (dont 2 SSRF et 1 injection SQL), et 1 clé privée SSH dans un Dockerfile.",

        "Le plus important : aucun de ces problèmes n'est arrivé en production. Le pipeline les a tous bloqués avant le merge.",

        "## Les faux positifs",

        "Le principal défi est la gestion des faux positifs. Gitleaks détecte parfois des strings qui ressemblent à des secrets mais n'en sont pas (des hashes de test, des exemples dans la documentation). J'ai créé un fichier .gitleaksignore pour les exclure.",

        "Semgrep est plus précis mais génère quand même 2-3 faux positifs par semaine. J'ai ajouté des commentaires nosemgrep sur les lignes validées manuellement. Le taux de faux positifs est passé de 15% à 3% après un mois de tuning.",

        "## Ce que je recommande",

        "Si tu ne fais qu'une seule chose, mets Gitleaks en pre-commit hook. C'est 5 minutes de setup et ça évite le scénario catastrophe du secret en production. Ensuite, ajoute Trivy dans ton CI pour les dépendances. Et si tu veux aller plus loin, Semgrep avec les règles OWASP Top 10 est un excellent point de départ.",

        "> Un secret en production, c'est pas un bug. C'est un incident de sécurité. Autant l'éviter avec 45 secondes de CI."
      ]}
    />
  );
}
