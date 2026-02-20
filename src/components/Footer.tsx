import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="text-sm font-semibold text-white">Hector / Sedo</Link>
            <p className="text-sm text-[var(--fg-dim)] leading-relaxed max-w-xs">
              Dev fullstack &amp; pentester web, bas&#233; &#224; Cotonou.
            </p>
          </div>
          <div className="space-y-4">
            <p className="section-label">Navigation</p>
            <ul className="space-y-2.5">
              {[
                { label: "Accueil", href: "/" },
                { label: "Projets", href: "/projets" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--fg-muted)] hover:text-white transition-colors duration-200">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="section-label">Contact</p>
            <ul className="space-y-2.5">
              {[
                { label: "WhatsApp", href: "https://wa.me/2290155950828" },
                { label: "Email", href: "mailto:hectorsedo@gmail.com" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--fg-muted)] hover:text-white transition-colors duration-200">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="section-label">Légal</p>
            <ul className="space-y-2.5">
              <li><Link href="/mentions-legales" className="text-sm text-[var(--fg-muted)] hover:text-white transition-colors duration-200">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[var(--fg-dim)]">&copy; 2026 Hector Sedo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
