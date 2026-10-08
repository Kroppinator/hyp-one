import Link from 'next/link';
import Spiral from './Spiral';
import rahmen from '@/inhalte/rahmen.json';
import { stammdaten } from '@/lib/inhalt';

const f = rahmen.fusszeile;

const linkKlasse =
  'text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline';

function Spalte({
  ueberschrift,
  eintraege,
}: {
  ueberschrift: string;
  eintraege: { beschriftung: string; ziel: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm tracking-[0.18em] text-sage-deep uppercase">
        {ueberschrift}
      </h3>
      <ul className="space-y-2">
        {eintraege.map((e) => (
          <li key={e.ziel}>
            <Link href={e.ziel} className={linkKlasse}>
              {e.beschriftung}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-sand bg-shell">
      <div className="watercolor -bottom-24 left-1/4 h-64 w-64 bg-sage/40" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-ink">
              {stammdaten.markennameHaupt}{' '}
              <span className="text-apricot-deep italic">
                {stammdaten.markennameZusatz}
              </span>
            </p>
            <p className="mt-2 text-sm tracking-[0.18em] text-sage-deep uppercase">
              {stammdaten.inhaberin}
            </p>
            <p className="mt-5 max-w-xs font-display text-lg text-ink-soft italic">
              {stammdaten.claim}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm tracking-[0.18em] text-sage-deep uppercase">
              {f.ueberschriftKontakt}
            </h3>
            <address className="space-y-1 leading-relaxed text-ink-soft not-italic">
              <p>{stammdaten.ort}</p>
              <p className="text-sm">{stammdaten.adresseHinweis}</p>
            </address>
            <div className="mt-5 space-y-1">
              <p>
                <a href={`mailto:${stammdaten.email}`} className={linkKlasse}>
                  {stammdaten.email}
                </a>
              </p>
              <p>
                <a href={`tel:${stammdaten.telefonLink}`} className={linkKlasse}>
                  {stammdaten.telefonAnzeige}
                </a>
              </p>
            </div>
          </div>

          <Spalte ueberschrift={f.ueberschriftSeiten} eintraege={f.seiten} />
          <Spalte ueberschrift={f.ueberschriftRecht} eintraege={f.recht} />
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-sand pt-8">
          <Spiral className="h-7 w-7 text-apricot/60" />
          <p className="max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
            {f.pflichthinweisKurz}
          </p>
          <p className="text-sm text-ink-soft">
            © {new Date().getFullYear()} {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
