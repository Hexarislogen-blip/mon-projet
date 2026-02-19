import BlogLayout from "@/components/BlogLayout";

export default function Article() {
  return (
    <BlogLayout
      title="SSRF dans les API routes Next.js : un vecteur sous-estimé"
      date="2 Août 2025"
      readTime="11 min"
      category="Cybersécurité"
      content={[
        "Si ton API route Next.js fait un fetch vers une URL fournie par l'utilisateur sans validation, tu as une SSRF. Et avec les API routes qui tournent côté serveur, l'attaquant peut atteindre ton réseau interne, tes métadonnées cloud et tes services non exposés. Voici comment ça marche et comment s'en protéger.",

        "## Ce qu'est une SSRF",

        "Une Server-Side Request Forgery (SSRF) se produit quand un serveur effectue une requête HTTP vers une URL contrôlée par l'attaquant. La requête part du serveur, pas du navigateur — ce qui signifie qu'elle a accès au réseau interne, aux services localhost et aux métadonnées cloud (169.254.169.254 sur AWS).",

        "## Le pattern vulnérable dans Next.js",

        "Le pattern classique : une API route qui prend une URL en paramètre et fetch son contenu pour le retourner au client. C'est courant pour les previews de liens, les proxies d'images, ou les webhooks.",

        "```\n// app/api/preview/route.ts - VULNÉRABLE\nexport async function GET(request: Request) {\n  const url = new URL(request.url).searchParams.get('url');\n  const response = await fetch(url!); // SSRF ici\n  const html = await response.text();\n  return Response.json({ title: extractTitle(html) });\n}",

        "Un attaquant appelle /api/preview?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/ et récupère les credentials IAM de ton instance EC2. Game over.",

        "## Les 3 vecteurs que j'ai testés",

        "### Vecteur 1 : Métadonnées cloud",
        "Sur AWS, GCP et Azure, les métadonnées de l'instance sont accessibles via une IP locale (169.254.169.254). Ces métadonnées contiennent les credentials IAM temporaires, l'ID de l'instance, la région, et parfois des user-data avec des secrets. Une SSRF permet de les exfiltrer en une seule requête.",

        "### Vecteur 2 : Services internes",
        "Si ton Next.js tourne dans un réseau privé (VPC, Docker network), la SSRF permet d'atteindre les services internes : Redis sur le port 6379, PostgreSQL sur 5432, Elasticsearch sur 9200, ou n'importe quel microservice non exposé publiquement.",

        "### Vecteur 3 : Scan de ports",
        "En variant le port dans l'URL (http://localhost:1 à http://localhost:65535), l'attaquant peut scanner les ports ouverts sur le serveur. Le temps de réponse et le message d'erreur révèlent si le port est ouvert, fermé ou filtré.",

        "## Démo sur une app réelle",

        "Sur un audit récent, j'ai trouvé une SSRF dans une fonctionnalité de preview de liens. L'API route faisait un fetch vers l'URL fournie pour extraire le titre et la description de la page. En remplaçant l'URL par http://169.254.169.254/latest/meta-data/, j'ai obtenu la liste des métadonnées disponibles. En chaînant les requêtes, j'ai récupéré les credentials IAM avec des permissions S3 et DynamoDB.",

        "Avec ces credentials, j'aurais pu lire et écrire dans les buckets S3 de l'application et accéder à toutes les données DynamoDB. Le tout à partir d'un simple paramètre d'URL non validé.",

        "## Les protections",

        "### Protection 1 : Whitelist de domaines",
        "La protection la plus efficace. Maintiens une liste de domaines autorisés et rejette tout le reste. Pour un preview de liens, tu n'as probablement besoin que de domaines publics — bloque les IPs privées, localhost et les domaines internes.",

        "### Protection 2 : Validation d'URL stricte",
        "Parse l'URL avec new URL(), vérifie que le protocole est http ou https (pas file://, pas gopher://), résous le DNS et vérifie que l'IP résultante n'est pas privée (10.x, 172.16-31.x, 192.168.x, 127.x, 169.254.x).",

        "```\nfunction isUrlSafe(urlString: string): boolean {\n  try {\n    const url = new URL(urlString);\n    if (!['http:', 'https:'].includes(url.protocol)) return false;\n    const ip = resolveHostname(url.hostname);\n    if (isPrivateIP(ip)) return false;\n    return true;\n  } catch {\n    return false;\n  }\n}",

        "### Protection 3 : IMDSv2 sur AWS",
        "AWS propose IMDSv2 qui requiert un token pour accéder aux métadonnées. Ce token ne peut être obtenu que via un PUT avec un header spécial, ce qui rend l'exploitation SSRF beaucoup plus difficile. Active IMDSv2 sur toutes tes instances EC2.",

        "### Protection 4 : Network policies",
        "Si tu tournes sur Kubernetes, les network policies peuvent empêcher tes pods d'accéder aux métadonnées cloud et aux services internes non nécessaires. C'est une défense en profondeur qui limite l'impact même si une SSRF passe.",

        "## Ce que je recommande",

        "Chaque fois que ton code serveur fait un fetch vers une URL dynamique, pose-toi la question : est-ce que l'utilisateur contrôle cette URL ? Si oui, valide-la strictement. Les API routes Next.js tournent côté serveur avec un accès réseau complet — une SSRF là-dedans est aussi dangereuse qu'une SSRF dans n'importe quel backend.",

        "> Si ton API route fetch une URL fournie par l'utilisateur, tu as probablement une SSRF. Valide avant de fetch, toujours."
      ]}
    />
  );
}
