import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    id: "jwt-toolkit",
    name: "JWT Attack Toolkit",
    type: "Projet",
    category: "Cybersécurité",
    year: "2025",
    description: "Teste 12 vecteurs d'attaque JWT (none algo, key confusion, brute force) et génère un rapport d'audit exploitable en 30 secondes.",
    tags: ["Security", "JWT", "Audit"],
    href: "/projets/jwt-toolkit",
    image: "/projects/jwt-toolkit.svg",
  },
  {
    id: "osint-platform",
    name: "OSINT Platform",
    type: "Projet",
    category: "Intelligence",
    year: "2025",
    description: "Récupère WHOIS, DNS et headers HTTP d'un domaine sans envoyer un seul paquet au serveur cible. Tout tourne dans le navigateur.",
    tags: ["OSINT", "Privacy", "Web"],
    href: "/projets/osint-platform",
    image: "/projects/osint-platform.svg",
  },
  {
    id: "payloads-all-the-things",
    name: "PayloadsAllTheThings",
    type: "Contribution",
    category: "Audit Web",
    year: "2025",
    description: "40+ payloads de bypass WAF Cloudflare/Akamai et une section complète sur les injections NoSQL MongoDB que j'ai contribués au repo.",
    tags: ["WAF Bypass", "Payloads", "API"],
    href: "/projets/payloads-all-the-things",
    image: "/projects/payloads-all-the-things.svg",
  },
  {
    id: "hashbj",
    name: "HashBJ",
    type: "Contribution",
    category: "Utility",
    year: "2025",
    description: "Colle un hash inconnu, HashBJ identifie l'algorithme parmi 30+ possibilités en moins de 100ms grâce aux optimisations SIMD en Rust.",
    tags: ["Cryptography", "Performance", "Rust"],
    href: "/projets/hashbj",
    image: "/projects/hashbj.svg",
  },
  {
    id: "bjhunt-com",
    name: "BJHUNT.com",
    type: "Projet",
    category: "AI Platform",
    year: "2025",
    description: "Interface en langage naturel qui orchestre 317+ outils de sécurité (nmap, sqlmap, nikto...) sans taper une seule commande.",
    tags: ["AI", "Security", "Automation"],
    href: "/projets/bjhunt-com",
    image: "/projects/bjhunt-com.svg",
  },
  {
    id: "fluxdev-io",
    name: "FluxDev.io",
    type: "Projet",
    category: "SaaS",
    year: "2025",
    description: "Dashboard SaaS qui gère le déploiement, le monitoring et les pipelines CI/CD d'une app depuis une seule interface.",
    tags: ["SaaS", "DevOps", "CI/CD"],
    href: "/projets/fluxdev-io",
    image: "/projects/fluxdev-io.svg",
  },
  {
    id: "sentinel-waf",
    name: "Sentinel WAF",
    type: "Projet",
    category: "Cybersécurité",
    year: "2025",
    description: "Reverse proxy applicatif qui filtre les requêtes malveillantes en temps réel avec des règles OWASP CRS custom et un dashboard de monitoring.",
    tags: ["WAF", "Go", "Security", "Reverse Proxy"],
    href: "/projets/sentinel-waf",
    image: "/projects/jwt-toolkit.svg",
  },
  {
    id: "vaultkey",
    name: "VaultKey",
    type: "Projet",
    category: "Cryptographie",
    year: "2025",
    description: "Gestionnaire de secrets pour équipes dev. Chiffrement AES-256-GCM côté client, partage par lien éphémère, rotation automatique des clés.",
    tags: ["Encryption", "Secrets", "TypeScript", "Redis"],
    href: "/projets/vaultkey",
    image: "/projects/osint-platform.svg",
  },
  {
    id: "driftctl",
    name: "DriftCTL",
    type: "Projet",
    category: "DevOps",
    year: "2024",
    description: "CLI qui détecte les drifts entre ton infrastructure Terraform et l'état réel sur AWS. Rapport diff en JSON ou HTML, intégrable dans un pipeline CI.",
    tags: ["Terraform", "AWS", "Go", "IaC"],
    href: "/projets/driftctl",
    image: "/projects/fluxdev-io.svg",
  },
  {
    id: "apivault",
    name: "APIVault",
    type: "Projet",
    category: "Backend",
    year: "2024",
    description: "API gateway maison avec rate limiting par IP, auth JWT, cache Redis et logging structuré. Gère 15k req/s sur un VPS à 5 euros.",
    tags: ["Node.js", "Redis", "Gateway", "Auth"],
    href: "/projets/apivault",
    image: "/projects/bjhunt-com.svg",
  },
  {
    id: "logpipe",
    name: "LogPipe",
    type: "Projet",
    category: "Monitoring",
    year: "2024",
    description: "Agrégateur de logs temps réel qui collecte stdout/stderr de tes containers Docker et les pousse vers Loki avec des labels auto-détectés.",
    tags: ["Docker", "Loki", "Go", "Observability"],
    href: "/projets/logpipe",
    image: "/projects/hashbj.svg",
  },
  {
    id: "scanport",
    name: "ScanPort",
    type: "Projet",
    category: "Réseau",
    year: "2024",
    description: "Scanner de ports TCP/UDP asynchrone en Python. 65k ports en moins de 40 secondes avec détection de services et fingerprinting basique.",
    tags: ["Python", "Asyncio", "Network", "Scanner"],
    href: "/projets/scanport",
    image: "/projects/payloads-all-the-things.svg",
  },
  {
    id: "formguard",
    name: "FormGuard",
    type: "Projet",
    category: "Frontend",
    year: "2024",
    description: "Librairie React de validation de formulaires avec sanitization XSS intégrée, schémas Zod et messages d'erreur accessibles ARIA.",
    tags: ["React", "Zod", "XSS", "A11y"],
    href: "/projets/formguard",
    image: "/projects/jwt-toolkit.svg",
  },
  {
    id: "deployhook",
    name: "DeployHook",
    type: "Projet",
    category: "CI/CD",
    year: "2024",
    description: "Webhook relay qui écoute les events GitHub, exécute des scripts de déploiement et notifie sur Slack avec le statut et les logs.",
    tags: ["Webhooks", "GitHub", "Slack", "Node.js"],
    href: "/projets/deployhook",
    image: "/projects/fluxdev-io.svg",
  },
  {
    id: "certwatch",
    name: "CertWatch",
    type: "Projet",
    category: "Sécurité",
    year: "2024",
    description: "Monitore les certificats SSL/TLS de tes domaines et t'alerte 30 jours avant expiration. Dashboard web + notifications email et Telegram.",
    tags: ["SSL/TLS", "Monitoring", "Python", "Alerts"],
    href: "/projets/certwatch",
    image: "/projects/osint-platform.svg",
  },
  {
    id: "sqlinspect",
    name: "SQLInspect",
    type: "Contribution",
    category: "Audit",
    year: "2024",
    description: "Extension Burp Suite qui détecte automatiquement les injections SQL time-based et boolean-based avec des payloads adaptatifs selon le SGBD.",
    tags: ["Burp Suite", "SQLi", "Java", "Pentest"],
    href: "/projets/sqlinspect",
    image: "/projects/payloads-all-the-things.svg",
  },
];

export default function ProjetsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="section-label">Portfolio</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Ce que j&apos;ai ship<span className="text-[var(--fg-muted)]">.</span>
          </h1>
          <p className="text-[var(--fg-muted)] text-lg leading-relaxed max-w-lg">
            Des outils de sécurité que j&apos;utilise moi-même, des apps en prod et des contributions open source. Tout est fonctionnel, rien n&apos;est un side project abandonné.
          </p>
        </div>

        {/* Card grid with visible gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden hover:border-[rgba(255,255,255,0.22)] transition-all duration-200 flex flex-col bg-[var(--bg)]"
            >
              {/* Image area */}
              <div className="h-40 relative bg-[rgba(255,255,255,0.03)] border-b border-[rgba(255,255,255,0.06)]">
                <Image src={project.image} alt={project.name} fill className="object-contain p-7 group-hover:scale-[1.04] transition-transform duration-300" />
                <div className="absolute top-3 left-3 flex gap-1.5">
                  <span className={`text-[9px] font-semibold rounded-full px-2 py-0.5 ${
                    project.type === 'Projet'
                      ? 'text-[#3ecf8e] bg-[rgba(62,207,142,0.12)] border border-[rgba(62,207,142,0.25)]'
                      : 'text-[#d4a843] bg-[rgba(212,168,67,0.12)] border border-[rgba(212,168,67,0.25)]'
                  }`}>{project.type}</span>
                  <span className="text-[9px] font-medium text-[var(--fg-muted)] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-full px-2 py-0.5">{project.category}</span>
                </div>
                <span className="absolute top-3 right-3 text-[9px] font-mono text-[var(--fg-dim)]">{project.year}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col space-y-2.5">
                <h3 className="text-sm font-semibold tracking-tight text-white group-hover:text-[#d4a843] transition-colors">{project.name}</h3>
                <p className="text-xs text-[var(--fg-muted)] leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="text-[9px] font-medium text-[var(--fg-dim)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded px-1.5 py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
