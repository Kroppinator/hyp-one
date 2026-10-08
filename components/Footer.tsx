import Link from 'next/link';
import Spiral from './Spiral';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sand bg-shell">
      <div className="watercolor -bottom-24 left-1/4 h-64 w-64 bg-sage/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-ink">
              Transformation <span className="italic text-apricot-deep">bei Isa</span>
            </p>
            <p className="mt-2 text-sm tracking-[0.18em] text-sage-deep uppercase">
              Isabelle Kroppenstedt
            </p>
            <p className="mt-5 max-w-xs font-display text-lg text-ink-soft italic">
              Damit das Leben wieder Farbe bekommt…
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-sage-deep uppercase">
              Coachingraum
            </h3>
            <address className="space-y-1 leading-relaxed text-ink-soft not-italic">
              <p>Buchholz in der Nordheide</p>
              <p className="text-sm">
                Die genaue Adresse erhältst du bei der Terminabsprache.
              </p>
            </address>
            <div className="mt-5 space-y-1">
              <p>
                <a
                  href="mailto:isabelle-kroppenstedt@gmx.de"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  isabelle-kroppenstedt@gmx.de
                </a>
              </p>
              <p>
                <a
                  href="tel:+4915560906840"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  0155 60906840
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-sage-deep uppercase">
              Seiten
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hypnose"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Auflösende Hypnose©
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-mich"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Über mich
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-sage-deep uppercase">
              Rechtliches
            </h3>
            <ul className="space-y-2">
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

        {/* Knappe Fassung des Pflichthinweises. Die ausführliche Formulierung
            steht auf jeder Inhaltsseite im eigenen Hinweisband sowie im
            Impressum – hier würde sie sich direkt darüber wiederholen. */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-sand pt-8">
          <Spiral className="h-7 w-7 text-apricot/60" />
          <p className="max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
            Coaching und Begleitung · keine Heilbehandlung · kein Ersatz für ärztliche oder
            psychotherapeutische Behandlung · Selbstzahlerleistung
          </p>
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} Isabelle Kroppenstedt · Auflösende Hypnose©
          </p>
        </div>
      </div>
    </footer>
  );
}
