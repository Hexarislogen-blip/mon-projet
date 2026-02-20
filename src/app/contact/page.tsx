export default function ContactPage() {
  const contactInfo = [
    { label: "Email", value: "contact@hectorsedo.com", href: "mailto:contact@hectorsedo.com" },
    { label: "WhatsApp", value: "+229 01 5 59 50 828", href: "https://wa.me/2290155950828" },
    { label: "Localisation", value: "Cotonou, Bénin", href: null },
    { label: "Statut", value: "Ouvert aux opportunités", href: null },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-24 space-y-20">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="section-label">Contact</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Discutons<span className="text-[var(--fg-muted)]">.</span>
          </h1>
          <p className="text-[var(--fg-muted)] text-lg leading-relaxed max-w-lg">
            Besoin d&apos;un pentest, d&apos;une app Next.js ou d&apos;un fix urgent ? Décrivez le problème, je reviens vers vous sous 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-5">
              <p className="section-label">Coordonnées</p>
              <div className="border border-[var(--border)] rounded-xl overflow-hidden divide-y divide-[var(--border)]">
                {contactInfo.map((item, i) => (
                  <div key={i} className="p-5 hover:bg-[var(--surface)] transition-colors duration-200">
                    <p className="text-xs text-[var(--fg-dim)] mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-white hover:text-[var(--fg-muted)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="border border-[var(--border)] rounded-xl p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-[var(--fg-dim)]">Nom</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-hover)] transition-colors placeholder:text-[var(--fg-dim)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-[var(--fg-dim)]">Email</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-transparent border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-hover)] transition-colors placeholder:text-[var(--fg-dim)]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-[var(--fg-dim)]">Sujet</label>
                  <input
                    type="text"
                    placeholder="Audit de sécurité / Projet Next.js"
                    className="w-full bg-transparent border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-hover)] transition-colors placeholder:text-[var(--fg-dim)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-[var(--fg-dim)]">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    className="w-full bg-transparent border border-[var(--border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--border-hover)] transition-colors resize-none placeholder:text-[var(--fg-dim)]"
                  ></textarea>
                </div>
                <button className="btn-primary w-full justify-center">
                  Envoyer
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
