import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="Collecter du renseignement OSINT sans toucher au serveur cible"
      date="12 Janvier 2026"
      readTime="20 min"
      category="Intelligence"
      content={[
        "En reconnaissance passive, la règle d'or est simple : la cible ne doit jamais savoir que tu la regardes. Pas un seul paquet réseau, pas une seule requête HTTP directe. Tout doit passer par des intermédiaires publics. C'est le principe fondamental derrière OSINT Platform, et voici comment ça fonctionne concrètement.",

        "## Pourquoi la passivité est critique",

        "Sur un pentest classique, la phase de reconnaissance active (scan nmap, fuzzing de répertoires, brute force DNS) génère du bruit. Les WAF logguent tes requêtes, les IDS alertent l'équipe SOC, et parfois le client te demande pourquoi son monitoring s'est affolé à 3h du matin. La reconnaissance passive élimine ce problème : tu collectes des informations sans jamais interagir avec l'infrastructure cible.",

        "C'est aussi une obligation légale dans certains contextes. Avant d'avoir l'autorisation écrite de tester, tu n'as pas le droit de scanner. Mais tu peux parfaitement consulter des bases de données publiques pour préparer ta mission.",

        "## Les 5 sources de données",

        "### 1. DNS via DNS-over-HTTPS",
        "Au lieu de résoudre les DNS directement (ce qui enverrait des requêtes aux serveurs autoritaires de la cible), on utilise des résolveurs publics via HTTPS. Google DNS (dns.google/resolve), Cloudflare (cloudflare-dns.com/dns-query) et Quad9 exposent des APIs JSON qui retournent les enregistrements DNS sans que la cible voie quoi que ce soit. On récupère les A, AAAA, MX, TXT, NS, CNAME et SOA.",

        "### 2. Certificate Transparency Logs",
        "Chaque certificat SSL/TLS émis par une autorité de certification est enregistré dans des logs publics (RFC 6962). En interrogeant crt.sh, on obtient la liste de tous les certificats émis pour un domaine, y compris les sous-domaines. C'est la méthode la plus fiable pour découvrir des sous-domaines sans faire de brute force DNS.",

        "Sur un audit récent, j'ai trouvé 47 sous-domaines via CT logs, dont staging.client.com, admin-internal.client.com et api-v2-beta.client.com. Trois d'entre eux exposaient des interfaces d'administration sans authentification.",

        "### 3. WHOIS historique",
        "Les données WHOIS actuelles sont souvent masquées par des services de privacy. Mais les données historiques, accessibles via des APIs comme WhoisXML ou SecurityTrails, révèlent les anciens contacts, les changements de registrar, les transferts de domaine et parfois les vrais noms et emails des propriétaires.",

        "### 4. Headers HTTP via proxies",
        "Pour analyser les headers HTTP d'un site sans le visiter directement, on utilise des services de cache et d'archive. Google Cache, Wayback Machine et des services de screenshot en ligne ont déjà visité le site — on récupère leurs données. Les headers révèlent le serveur web (nginx, Apache, IIS), les frameworks (X-Powered-By), les CDN (Cloudflare, Akamai) et les headers de sécurité manquants.",

        "### 5. Technologies via signatures",
        "En analysant les réponses HTTP cachées et les assets publics (favicon hash, structure des URLs, noms de cookies), on identifie les technologies utilisées sans envoyer une seule requête. Le hash du favicon de WordPress est toujours le même. Le cookie JSESSIONID trahit Java. Le header X-Drupal-Cache trahit Drupal.",

        "## Architecture 100% client-side",

        "Tout le code tourne dans le navigateur. Les appels API se font directement depuis le client vers les services publics. Il n'y a pas de backend — pas de serveur qui pourrait logger les domaines que tu analyses. C'est un choix délibéré pour les missions sous NDA où tu ne peux pas envoyer des données client à des tiers.",

        "Les Web Workers parallélisent les requêtes vers les différentes sources. Sur un domaine moyen, les 5 sources sont interrogées simultanément et les résultats agrégés en moins de 15 secondes.",

        "## Le rapport structuré",

        "Le rapport de sortie est un JSON structuré avec les sections suivantes : informations DNS (tous les enregistrements), sous-domaines découverts (via CT logs), données WHOIS (actuelles et historiques), technologies détectées, et headers de sécurité avec leur évaluation.",

        "Chaque point de données est sourcé — tu sais exactement d'où vient l'information et quand elle a été collectée. C'est important pour la traçabilité dans un rapport de pentest.",

        "## Cas concret : audit d'une fintech",

        "Sur un audit récent pour une fintech, la reconnaissance passive a révélé : 47 sous-domaines dont 3 avec des interfaces admin exposées, un ancien domaine WHOIS lié à un compte GitHub personnel d'un développeur, des headers qui trahissaient une version vulnérable de nginx, et l'absence de headers CSP et HSTS sur le domaine principal.",

        "Tout ça sans envoyer un seul paquet au serveur de la fintech. Quand j'ai présenté ces findings au kickoff meeting, le CTO était surpris de la quantité d'informations accessibles publiquement. C'est exactement le genre de prise de conscience que la reconnaissance passive permet.",

        "## Limites de l'approche",

        "La reconnaissance passive ne remplace pas un scan actif. Elle ne détecte pas les ports ouverts, les vulnérabilités applicatives ou les misconfigurations serveur. C'est une première étape qui oriente la phase active : tu sais déjà quels sous-domaines cibler, quelles technologies sont en place, et où chercher les failles.",

        "> La meilleure reconnaissance est celle que la cible ne détecte jamais. Zéro paquet, zéro trace, maximum d'informations."
      ]}
    />
  );
}
