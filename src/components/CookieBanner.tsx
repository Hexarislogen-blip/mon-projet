'use client';

import { useState, useEffect } from "react";

interface CookiePrefs {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    essential: true,
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePrefs = (acceptAll: boolean) => {
    const finalPrefs = acceptAll
      ? { essential: true, analytics: true, preferences: true }
      : prefs;
    localStorage.setItem('cookie-consent', JSON.stringify(finalPrefs));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const toggleItems: { key: keyof CookiePrefs; label: string; desc: string; locked?: boolean }[] = [
    {
      key: 'essential',
      label: 'Essentiels',
      desc: 'Navigation, session, consentement. Requis pour le fonctionnement du site.',
      locked: true,
    },
    {
      key: 'analytics',
      label: 'Analytiques',
      desc: 'Mesure d\'audience anonyme pour comprendre quelles pages sont consultées.',
    },
    {
      key: 'preferences',
      label: 'Préférences',
      desc: 'Mémorise vos choix (thème, langue) pour personnaliser votre expérience.',
    },
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[98] w-[calc(100%-2rem)] max-w-lg pointer-events-auto">
      <div className="bg-[#111111] border border-[rgba(255,255,255,0.14)] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-2.5 mb-2">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="text-[var(--fg-muted)]">
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1z" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M8 4.5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-sm font-semibold text-white">Gestion des cookies</h3>
          </div>
          <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
            Ce site utilise des cookies pour fonctionner correctement et mesurer son audience. Vous pouvez choisir lesquels activer ci-dessous.
          </p>
        </div>

        {/* Toggle items */}
        <div className="px-6 pb-4 space-y-3">
          {toggleItems.map((item) => (
            <div key={item.key} className="flex items-start justify-between gap-4 py-2.5 border-t border-[rgba(255,255,255,0.06)]">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium text-white">{item.label}</span>
                  {item.locked && (
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-[rgba(62,207,142,0.1)] border border-[rgba(62,207,142,0.2)] rounded px-1.5 py-0.5">Requis</span>
                  )}
                </div>
                <p className="text-[11px] text-[var(--fg-dim)] leading-relaxed mt-0.5">{item.desc}</p>
              </div>
              <button
                onClick={() => !item.locked && setPrefs(p => ({ ...p, [item.key]: !p[item.key] }))}
                className={`shrink-0 mt-0.5 w-9 h-5 rounded-full relative transition-colors duration-200 ${
                  prefs[item.key]
                    ? 'bg-[var(--accent)]'
                    : 'bg-[rgba(255,255,255,0.12)]'
                } ${item.locked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  prefs[item.key] ? 'left-[18px]' : 'left-0.5'
                }`} />
              </button>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="px-6 pb-5 flex gap-3">
          <button
            onClick={() => savePrefs(false)}
            className="flex-1 py-2.5 text-xs font-semibold text-[var(--fg-muted)] border border-[rgba(255,255,255,0.12)] rounded-lg hover:bg-[rgba(255,255,255,0.04)] hover:text-white transition-colors duration-150"
          >
            Enregistrer mes choix
          </button>
          <button
            onClick={() => savePrefs(true)}
            className="flex-1 py-2.5 text-xs font-semibold bg-white text-[#0a0a0a] rounded-lg hover:bg-[var(--fg-muted)] transition-colors duration-150"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
