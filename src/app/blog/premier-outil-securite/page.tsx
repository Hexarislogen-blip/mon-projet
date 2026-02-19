import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Mon premier outil de sécurité : un scanner de headers HTTP en 200 lignes"
      date="8 Mars 2024"
      readTime="6 min"
      category="Cybersécurité"
      content={[
        "Avant JWT Attack Toolkit, avant OSINT Platform, avant tout le reste, j'ai écrit un script Python de 200 lignes qui vérifie les headers de sécurité d'un site web. C'est simple, c'est basique, et c'est le projet qui m'a appris le plus sur la sécurité web. Voici le code commenté et ce que j'en ai tiré.",

        "## L'idée de départ",

        "En lisant un article sur les headers de sécurité HTTP, j'ai réalisé que la plupart des sites que je visitais n'avaient pas les headers recommandés. Pas de Content-Security-Policy, pas de Strict-Transport-Security, pas de X-Content-Type-Options. J'ai voulu vérifier ça automatiquement.",

        "## Ce que le script vérifie",

        "Le scanner teste 8 headers de sécurité essentiels et attribue une note à chacun :",

        "- Strict-Transport-Security (HSTS) : force le navigateur à utiliser HTTPS. Sans ce header, un attaquant peut intercepter la première requête HTTP et faire un downgrade attack.\n- Content-Security-Policy (CSP) : contrôle quelles ressources le navigateur peut charger. C'est la meilleure protection contre les XSS.\n- X-Content-Type-Options : empêche le navigateur de deviner le type MIME d'une ressource. Sans ce header, un fichier .txt peut être interprété comme du JavaScript.\n- X-Frame-Options : empêche l'inclusion du site dans une iframe. Protection contre le clickjacking.\n- Referrer-Policy : contrôle quelles informations sont envoyées dans le header Referer lors de la navigation.\n- Permissions-Policy : contrôle l'accès aux APIs du navigateur (caméra, micro, géolocalisation).\n- X-XSS-Protection : active le filtre XSS intégré du navigateur. Déprécié mais encore utile pour les vieux navigateurs.\n- Cache-Control : contrôle la mise en cache des réponses. Important pour les pages avec des données sensibles.",

        "## Le code",

        "```\nimport requests\nimport sys\n\nHEADERS_CHECK = {\n    'Strict-Transport-Security': {\n        'required': True,\n        'description': 'Force HTTPS',\n        'recommendation': \"Ajouter: Strict-Transport-Security: max-age=31536000; includeSubDomains\"\n    },\n    'Content-Security-Policy': {\n        'required': True,\n        'description': 'Contrôle les ressources chargées',\n        'recommendation': \"Définir une politique CSP restrictive\"\n    },\n    # ... 6 autres headers\n}\n\ndef scan(url):\n    response = requests.get(url, timeout=10)\n    results = []\n    for header, config in HEADERS_CHECK.items():\n        present = header.lower() in {k.lower(): v for k, v in response.headers.items()}\n        results.append({\n            'header': header,\n            'present': present,\n            'value': response.headers.get(header, 'ABSENT'),\n            'recommendation': config['recommendation'] if not present else 'OK'\n        })\n    return results",

        "Le script fait un GET sur l'URL, récupère les headers de la réponse, et vérifie la présence de chaque header de sécurité. Pour chaque header absent, il affiche une recommandation avec la valeur à ajouter.",

        "## Ce que j'ai appris en le codant",

        "### 1. Les headers ne suffisent pas",
        "Un site peut avoir tous les headers de sécurité et être quand même vulnérable. CSP mal configuré (unsafe-inline, unsafe-eval) est pire que pas de CSP du tout parce que ça donne un faux sentiment de sécurité. Le scanner vérifie la présence des headers, mais pas leur qualité — c'est une limitation que j'ai corrigée dans la v2.",

        "### 2. Les redirections compliquent tout",
        "Beaucoup de sites redirigent HTTP vers HTTPS. Le header HSTS n'est pertinent que sur la réponse HTTPS finale, pas sur la redirection. J'ai dû ajouter un paramètre allow_redirects=True et vérifier les headers de la réponse finale, pas de la première.",

        "### 3. Les CDN ajoutent leurs propres headers",
        "Cloudflare, Akamai et Fastly ajoutent des headers de sécurité automatiquement. Le scanner peut donner un faux positif si le header est ajouté par le CDN et pas par l'application. J'ai ajouté une détection de CDN pour contextualiser les résultats.",

        "## La v2 : analyse de la qualité",

        "La v2 du scanner ne vérifie pas seulement la présence des headers mais aussi leur qualité. Pour CSP, il parse la politique et vérifie l'absence de unsafe-inline et unsafe-eval. Pour HSTS, il vérifie que le max-age est supérieur à 6 mois. Pour Referrer-Policy, il vérifie que la valeur n'est pas unsafe-url.",

        "## Les résultats sur 100 sites",

        "J'ai scanné les 100 sites les plus visités en France. Les résultats étaient surprenants : 73% avaient HSTS, mais seulement 34% avaient une CSP. 89% avaient X-Content-Type-Options (souvent ajouté par le CDN). Seulement 12% avaient une Permissions-Policy. Et 8 sites n'avaient aucun header de sécurité.",

        "## Ce que ce projet m'a apporté",

        "Ce script de 200 lignes m'a appris plus sur la sécurité web que n'importe quel cours en ligne. En codant la vérification de chaque header, j'ai dû comprendre à quoi il sert, quelles attaques il prévient, et comment le configurer correctement. C'est cette approche — apprendre en construisant — qui m'a mené à créer des outils de plus en plus complexes.",

        "Le code est sur GitHub. Il n'est pas parfait, il n'est pas optimisé, mais il fonctionne et il m'a tout appris. Si tu débutes en sécurité, je te recommande de coder ton propre scanner plutôt que d'utiliser un outil existant. Le process d'apprentissage est dans le code, pas dans le résultat.",

        "> 200 lignes de Python, 8 headers vérifiés, et une passion pour la sécurité web qui ne m'a plus quitté."
      ]}
    />
  );
}
