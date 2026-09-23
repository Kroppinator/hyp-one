'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Blendet seinen Inhalt sanft ein, sobald er in den Sichtbereich scrollt.
 * Respektiert "prefers-reduced-motion" (siehe globals.css).
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Signal an das Wächter-Skript in app/layout.tsx: React läuft,
    // die Einblend-Animation darf aktiv bleiben.
    document.documentElement.setAttribute('data-reveal-ready', '');

    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
