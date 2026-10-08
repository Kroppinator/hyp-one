'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import rahmen from '@/inhalte/rahmen.json';
import { stammdaten } from '@/lib/inhalt';

const { links, schaltflaeche, schaltflaecheMobil } = rahmen.navigation;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Auf der Startseite führt ein Klick auf das Logo sonst ins Leere, weil die
  // Route dieselbe bleibt. Dann scrollen wir stattdessen nach oben – spart auf
  // dem Handy den langen Weg zurück.
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== '/') return;

    e.preventDefault();
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Seite nicht scrollen lassen, solange das Mobil-Menü offen ist
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`no-print fixed top-0 right-0 left-0 z-100 transition-all duration-500 ${
        scrolled || open
          ? 'bg-cream/90 shadow-[0_1px_0_rgba(58,55,51,0.07)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="group flex items-center gap-0"
        >
          {/* Querformat: Prisma links, Regenbogen läuft nach rechts aus.
              Das Verblassen am rechten Rand steckt in der Bilddatei selbst. */}
          <Image
            src="/bilder/prisma-logo.webp"
            alt=""
            width={640}
            height={342}
            priority
            className="h-10 w-auto shrink-0 object-contain sm:h-12"
          />
          {/* Gleiche Setzung wie in der Fußzeile. */}
          <span className="-ml-3 flex flex-col leading-none sm:-ml-4">
            <span className="font-display text-xl whitespace-nowrap text-ink max-[360px]:text-lg sm:text-2xl">
              {stammdaten.markennameHaupt}{' '}
              <span className="text-apricot-deep italic">
                {stammdaten.markennameZusatz}
              </span>
            </span>
            <span className="mt-1.5 text-[0.7rem] tracking-[0.14em] text-sage-deep uppercase sm:mt-2 sm:text-sm sm:tracking-[0.18em]">
              {stammdaten.inhaberin}
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.ziel}
              href={link.ziel}
              className="relative text-sm text-ink-soft transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-apricot after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.beschriftung}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className="rounded-full bg-sage-deep px-5 py-2.5 text-sm text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
          >
            {schaltflaeche}
          </Link>
        </div>

        {/* Mobil */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobil-Overlay */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pt-2 pb-8">
          {links.map((link) => (
            <Link
              key={link.ziel}
              href={link.ziel}
              onClick={() => setOpen(false)}
              className="border-b border-sand py-4 font-display text-2xl text-ink"
            >
              {link.beschriftung}
            </Link>
          ))}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-sage-deep px-6 py-3.5 text-center text-cream"
          >
            {schaltflaecheMobil}
          </Link>
        </div>
      </div>
    </header>
  );
}
