import Spiral from './Spiral';
import { text } from '@/lib/inhalt';

type Abschnitt = {
  ueberschrift: string;
  absaetze?: string[];
  liste?: string[];
  schluss?: string[];
};

type Rechtstext = {
  titel: string;
  abschnitte: Abschnitt[];
  hinweisAnDieBetreiberin?: string;
};

/**
 * Rahmen und Darstellung für Impressum und Datenschutzerklärung.
 *
 * Die Texte stehen in inhalte/rechtlich.*.json – diese Komponente setzt sie
 * nur. Zeilenumbrüche innerhalb eines Absatzes (z. B. bei Anschriften) werden
 * über whitespace-pre-line übernommen.
 */
export default function LegalPage({ inhalt }: { inhalt: Rechtstext }) {
  return (
    <article className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="watercolor -top-24 -right-20 h-80 w-80 bg-sage/40" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <Spiral className="h-9 w-9 text-apricot/60" />
        <h1 className="mt-6 font-display text-4xl text-ink sm:text-5xl">{inhalt.titel}</h1>

        <div className="mt-12 space-y-6 leading-relaxed text-ink-soft">
          {inhalt.abschnitte.map((abschnitt) => (
            <section key={abschnitt.ueberschrift}>
              <h2 className="mt-12 mb-4 font-display text-2xl text-ink">
                {abschnitt.ueberschrift}
              </h2>

              {abschnitt.absaetze?.map((absatz, i) => (
                <p key={i} className="mb-4 whitespace-pre-line">
                  {text(absatz)}
                </p>
              ))}

              {abschnitt.liste && (
                <ul className="mb-4 list-disc space-y-1 pl-5">
                  {abschnitt.liste.map((punkt) => (
                    <li key={punkt}>{text(punkt)}</li>
                  ))}
                </ul>
              )}

              {abschnitt.schluss?.map((absatz, i) => (
                <p key={i} className="mb-4">
                  {text(absatz)}
                </p>
              ))}
            </section>
          ))}
        </div>

        {inhalt.hinweisAnDieBetreiberin && (
          <p className="mt-12 rounded-2xl border border-sand bg-shell p-6 text-sm leading-relaxed">
            <strong className="text-ink">Hinweis an die Betreiberin:</strong>{' '}
            {text(inhalt.hinweisAnDieBetreiberin)}
          </p>
        )}
      </div>
    </article>
  );
}
