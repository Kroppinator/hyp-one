'use client';

import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark text-white p-6 z-50 flex justify-between items-center gap-4 flex-wrap shadow-lg">
      <div className="flex justify-between items-center gap-4 flex-wrap w-full">
        <p className="m-0 flex-1 min-w-[200px]">
          Wir nutzen Cookies für ein besseres Nutzungserlebnis.{' '}
          <a href="/datenschutz" className="text-blue-300 hover:underline">
            Datenschutz
          </a>
        </p>
        <button onClick={handleAccept} className="px-6 py-2 bg-primary text-white rounded hover:bg-indigo-600 transition-all font-semibold text-sm whitespace-nowrap">
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
