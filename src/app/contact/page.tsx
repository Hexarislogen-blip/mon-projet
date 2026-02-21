'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // honeypot
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const contactInfo = [
    { label: "Email", value: "hectorsedo@gmail.com", href: "mailto:hectorsedo@gmail.com" },
    { label: "WhatsApp", value: "+229 01 15 59 50 828", href: "https://wa.me/22901155950828" },
    { label: "Localisation", value: "Cotonou, Bénin", href: null },
    { label: "Statut", value: "Ouvert aux opportunités", href: null },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      } else {
        setStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setResponseMessage(data.error || 'Une erreur est survenue');
        }
      }
    } catch {
      setStatus('error');
      setResponseMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error for this field
    if (errors[e.target.name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[e.target.name];
        return newErrors;
      });
    }
  };

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
              {/* Success Message */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-lg">
                  <p className="text-sm text-[var(--accent)] font-medium">{responseMessage}</p>
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && responseMessage && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-400 font-medium">{responseMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-[var(--fg-dim)]">Nom *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={`w-full bg-transparent border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[var(--fg-dim)] ${
                        errors.name ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-[var(--border-hover)]'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-[var(--fg-dim)]">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full bg-transparent border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[var(--fg-dim)] ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-[var(--border-hover)]'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs text-[var(--fg-dim)]">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Audit de sécurité / Projet Next.js"
                    className={`w-full bg-transparent border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors placeholder:text-[var(--fg-dim)] ${
                      errors.subject ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-[var(--border-hover)]'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-[var(--fg-dim)]">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    className={`w-full bg-transparent border rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors resize-none placeholder:text-[var(--fg-dim)] ${
                      errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-[var(--border-hover)]'
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>

                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute opacity-0 pointer-events-none"
                  aria-hidden="true"
                />

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer'}
                  {status !== 'loading' && (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
