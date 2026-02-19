'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleDispo = useCallback(() => {
    setShowPopup(true);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-1 h-11 px-5 bg-[#111111]/90 backdrop-blur-sm border border-[var(--border-hover)] rounded-full shadow-[0_2px_16px_rgba(0,0,0,0.4)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 pr-3 border-r border-[var(--border)] mr-1">
            <span className="text-sm font-semibold tracking-tight text-white">H</span>
            <span className="text-sm text-[var(--fg-dim)]">/</span>
            <span className="text-sm font-semibold tracking-tight text-white">S</span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 rounded-full ${
                  isActive(link.href)
                    ? 'text-[#d4a843] bg-[rgba(212,168,67,0.08)]'
                    : 'text-[var(--fg-muted)] hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Status */}
          <div className="pl-2 border-l border-[var(--border)] ml-1">
            <button
              onClick={handleDispo}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium text-[var(--fg-muted)] hover:text-white transition-colors duration-150 rounded-full hover:bg-white/[0.06] cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Dispo
            </button>
          </div>
        </div>
      </header>

      {/* Dispo popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto animate-[popIn_0.3s_ease-out] bg-[#111]/95 backdrop-blur-md border border-[var(--border-hover)] rounded-2xl px-8 py-6 shadow-2xl shadow-black/50 text-center max-w-sm">
            <div className="text-4xl mb-3 leading-relaxed">
              👍👍🏻👍🏼👍🏽👍🏾👍🏿👍👍🏻👍🏼👍🏽
            </div>
            <p className="text-white font-semibold text-sm">Je suis disponible !</p>
            <p className="text-[var(--fg-muted)] text-xs mt-1">Contactez-moi pour discuter de votre projet</p>
            <div className="mt-3 h-0.5 bg-[var(--border)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--accent)] rounded-full animate-[shrink_3s_linear]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
