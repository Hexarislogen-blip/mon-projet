const legalSections = [
  {
    title: "Propriété Intellectuelle",
    content: "L'ensemble de ce site relève de la législation internationale sur le droit d'auteur. Tous les droits de reproduction sont réservés. La reproduction de tout ou partie de ce site sans autorisation expresse est strictement interdite."
  },
  {
    title: "Cookies & Données",
    content: "Ce site utilise des cookies techniques pour optimiser votre expérience. Conformément au RGPD, vous disposez d'un droit d'accès et de suppression de vos données personnelles sur simple demande par email."
  },
  {
    title: "Responsabilité",
    content: "Nous mettons en œuvre tous les moyens pour assurer une information fiable. Toutefois, des erreurs peuvent survenir. L'internaute est invité à vérifier l'exactitude des informations fournies."
  }
];

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-24 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <p className="section-label">Légal</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Mentions légales<span className="text-[var(--fg-muted)]">.</span>
          </h1>
          <p className="text-[var(--fg-muted)] text-base leading-relaxed max-w-lg">
            Qui est derrière ce site, où il est hébergé, et comment vos données sont traitées.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="bg-[var(--bg)] p-7 space-y-3">
            <p className="section-label">Édition</p>
            <p className="text-base font-semibold">Hector SEDO</p>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
              Professionnel indépendant basé à Cotonou, Bénin.<br />
              Email : hectorsedo@gmail.com<br />
              Tél : +229 01 55 95 08 28
            </p>
          </div>
          <div className="bg-[var(--bg)] p-7 space-y-3">
            <p className="section-label">Hébergement</p>
            <p className="text-base font-semibold">Vercel Inc.</p>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
              440 N Barranca Ave #6133, Covina, CA 91723, USA.<br />
              Plateforme de déploiement cloud haute performance.
            </p>
          </div>
        </div>

        {/* Legal text */}
        <div className="space-y-8">
          {legalSections.map((section, i) => (
            <section key={i} className="space-y-3 border-l border-[var(--border)] pl-6">
              <h2 className="text-base font-semibold tracking-tight">{section.title}</h2>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--fg-dim)]">Dernière mise à jour : 15 février 2026</p>
        </div>
      </div>
    </div>
  );
}
