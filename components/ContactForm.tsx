'use client';

import { useState } from 'react';
import Link from 'next/link';
import texte from '@/inhalte/formular.json';
import hinweise from '@/inhalte/rechtlich.hinweise.json';

const SUBJECTS = texte.anliegen;
const f = texte.felder;

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  subject: SUBJECTS[0],
  message: '',
  website: '', // Honeypot – bleibt für Menschen unsichtbar und leer
};

const fieldClass =
  'w-full rounded-xl border border-ink-faint/30 bg-cream px-4 py-3 text-ink placeholder:text-ink-faint transition-colors focus:border-sage-deep focus:outline-none';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState(EMPTY);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData(EMPTY);
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-sage/40 bg-shell p-10 text-center">
        <p className="font-display text-3xl text-sage-deep">{texte.danke.ueberschrift}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">{texte.danke.text}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-ink-soft underline underline-offset-4 hover:text-ink"
        >
          {texte.danke.nochmal}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-ink-soft">
            {f.name}
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-ink-soft">
            {f.email}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-ink-soft">
            {f.telefon} <span className="text-ink-faint">{f.telefonZusatz}</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm text-ink-soft">
            {f.anliegen}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={fieldClass}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink-soft">
          {f.nachricht}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder={f.nachrichtPlatzhalter}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot gegen Spam-Bots – für Menschen nicht sichtbar */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">{texte.honeypot}</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 h-4 w-4 shrink-0 accent-sage-deep"
        />
        <span>
          {hinweise.einwilligung.text}{' '}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:text-ink">
            {hinweise.einwilligung.verweis}
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-sage-deep px-8 py-4 text-cream transition-all duration-300 hover:bg-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? texte.sendet : texte.senden}
      </button>

      {status === 'error' && (
        <p className="rounded-xl border border-rose-deep/30 bg-rose/15 px-4 py-3 text-sm text-rose-deep">
          {texte.fehler}
        </p>
      )}
    </form>
  );
}
