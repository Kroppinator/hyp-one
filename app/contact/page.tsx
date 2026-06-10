'use client';

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Kontakt</h1>
          <p className="text-lg opacity-95 mt-3">Lass uns ins Gespräch kommen</p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-dark mb-6">Schreib mir eine Nachricht</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-dark font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Betreff</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  />
                </div>
                <div>
                  <label className="block text-dark font-semibold mb-2">Nachricht</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-indigo-600 transition-all disabled:opacity-50"
                >
                  {status === 'loading' ? 'Wird versendet...' : 'Senden'}
                </button>

                {status === 'success' && (
                  <div className="p-4 bg-green-100 text-green-800 border border-green-300 rounded">
                    Danke! Deine Nachricht wurde erfolgreich versendet.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 border border-red-300 rounded">
                    Ein Fehler ist aufgetreten. Bitte versuche es später erneut.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Kontaktinfos</h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:contact@example.com" className="text-primary hover:underline">
                  contact@example.com
                </a>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-2">Telefon</h3>
                <a href="tel:+49123456789" className="text-primary hover:underline">
                  +49 (0) 123 456 789
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Öffnungszeiten</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>Montag - Freitag: 09:00 - 18:00</li>
                  <li>Samstag: nach Vereinbarung</li>
                  <li>Sonntag: geschlossen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
