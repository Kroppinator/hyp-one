import Link from 'next/link';
import Spiral from './Spiral';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sand bg-shell">
      <div className="watercolor -bottom-24 left-1/4 h-64 w-64 bg-sage/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-ink">
              Transformation <span className="italic text-apricot-deep">bei Isa</span>
            </p>
            <p className="mt-2 text-sm tracking-[0.18em] text-ink-faint uppercase">
              Isabelle Kroppenstedt
            </p>
            <p className="mt-5 max-w-xs font-display text-lg text-ink-soft italic">
              Damit das Leben wieder Farbe bekommt…
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-ink-faint uppercase">
              Coachingraum
            </h3>
            <address className="space-y-1 text-sm leading-relaxed text-ink-soft not-italic">
              <p>[Straße und Hausnummer]</p>
              <p>21244 Buchholz in der Nordheide</p>
            </address>
            <div className="mt-5 space-y-1 text-sm">
              <p>
                <a
                  href="mailto:[E-Mail-Adresse]"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  [E-Mail-Adresse]
                </a>
              </p>
              <p>
                <a
                  href="tel:[Telefonnummer]"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  [Telefonnummer]
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-ink-faint uppercase">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-sand pt-8">
          <Spiral className="h-7 w-7 text-apricot/60" />
          <p className="max-w-2xl text-center text-xs leading-relaxed text-ink-faint">
            Die Sitzungen ersetzen keine ärztliche oder psychologische Therapie. Klientinnen
            und Klienten tragen die Kosten eigenständig. Ich weise ausdrücklich darauf hin,
            dass ich nicht mehr ärztlich oder therapeutisch tätig bin.
          </p>
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} Isabelle Kroppenstedt · Auflösende Hypnose©
          </p>
        </div>
      </div>
    </footer>
  );
}
