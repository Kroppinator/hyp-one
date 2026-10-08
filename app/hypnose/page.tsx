import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import Aquarell from '@/components/Aquarell';
import Pflichthinweis from '@/components/Pflichthinweis';
import inhalt from '@/inhalte/hypnose.json';
import { fuelle, text } from '@/lib/inhalt';

export const metadata: Metadata = {
  title: 'Auflösende Hypnose©',
  description: fuelle(inhalt.seitenbeschreibung),
};

/** Ein Baustein aus der Inhaltsdatei – siehe dort den Schlüssel "_bausteine". */
type Baustein = {
  typ: string;
  text?: string;
  titel?: string;
  einleitung?: string;
  punkte?: string[];
  schluss?: string;
  posten?: { leistung: string; betrag: string }[];
  hinweise?: string[];
};

function Baustein({ baustein }: { baustein: Baustein }) {
  switch (baustein.typ) {
    case 'kursiv':
      return (
        <p className="font-display text-2xl text-ink italic sm:text-3xl">
          {text(baustein.text ?? '')}
        </p>
      );

    case 'aussage':
      return (
        <p className="font-display text-3xl text-sage-deep italic sm:text-4xl">
          {text(baustein.text ?? '')}
        </p>
      );

    case 'zwischenueberschrift':
      return <h3 className="pt-4 font-display text-2xl text-ink">{baustein.text}</h3>;

    case 'kasten':
      return (
        <div className="rounded-3xl border border-sage/50 bg-shell p-8">
          <p className="font-display text-xl text-ink">{baustein.titel}</p>
          <p className="mt-3 leading-relaxed text-ink-soft">{text(baustein.text ?? '')}</p>
        </div>
      );

    case 'warnliste':
      return (
        <div className="rounded-3xl border border-rose-deep/30 bg-rose/10 p-8">
          {/* Leere Einleitung heißt: Die Überschrift führt die Liste bereits ein. */}
          {baustein.einleitung && (
            <p className="mb-5 leading-relaxed text-ink-soft">{baustein.einleitung}</p>
          )}
          <ul className="space-y-3">
            {baustein.punkte?.map((punkt) => (
              <li key={punkt} className="flex gap-4">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-deep" />
                <span className="leading-relaxed text-ink-soft">{punkt}</span>
              </li>
            ))}
          </ul>
          {baustein.schluss && (
            <p className="mt-6 leading-relaxed text-ink-soft">{baustein.schluss}</p>
          )}
        </div>
      );

    case 'preise':
      return (
        <div className="rounded-3xl border border-sand bg-shell p-8">
          <dl className="divide-y divide-sand">
            {baustein.posten?.map((posten, i) => (
              <div
                key={posten.leistung}
                className={`flex flex-wrap items-baseline justify-between gap-3 ${
                  i === 0 ? 'pb-4' : 'py-4 last:pb-0'
                }`}
              >
                <dt className="text-ink">{posten.leistung}</dt>
                <dd className="font-display text-3xl text-sage-deep">{posten.betrag}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-7 space-y-3 leading-relaxed text-ink-soft">
            {baustein.hinweise?.map((hinweis, i) => (
              <p key={i}>{text(hinweis)}</p>
            ))}
          </div>
        </div>
      );

    default:
      return <p className="leading-relaxed text-ink-soft">{text(baustein.text ?? '')}</p>;
  }
}

export default function Hypnose() {
  const { kopf, abschnitte, abschluss } = inhalt;

  return (
    <>
      {/* ------------------------------------------------------------- Auftakt */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="watercolor -top-24 -left-24 h-[26rem] w-[26rem] bg-sage/60" />
        <div className="watercolor top-40 right-0 h-80 w-80 bg-rose/45" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg tracking-[0.15em] text-sage-deep uppercase">
                  {kopf.kleineUeberschrift}
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                  {kopf.ueberschrift}
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                  {kopf.einleitung}
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={150}>
                <Aquarell
                  src="/bilder/prisma.webp"
                  alt={kopf.bildBeschreibung}
                  className="aspect-square w-full"
                  morphDelay={-9}
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Inhaltsliste */}
      <section className="relative mx-auto max-w-6xl px-6 pb-16 lg:px-8">
        <Reveal>
          <nav
            aria-label="Inhalt dieser Seite"
            className="rounded-3xl border border-sand bg-shell p-8"
          >
            <h2 className="text-sm tracking-[0.2em] text-sage-deep uppercase">
              {inhalt.inhaltsuebersicht}
            </h2>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {abschnitte.map((abschnitt) => (
                <li key={abschnitt.id}>
                  <a
                    href={`#${abschnitt.id}`}
                    className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {'kurzform' in abschnitt ? abschnitt.kurzform : abschnitt.frage}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>
      </section>

      {/* --------------------------------------------------------------- Inhalt */}
      <section className="relative overflow-hidden pb-24">
        <div className="watercolor top-1/3 -right-24 h-96 w-96 bg-sage/45" />

        <div className="relative mx-auto max-w-3xl space-y-20 px-6 lg:px-8">
          {abschnitte.map((abschnitt) => (
            <Reveal key={abschnitt.id}>
              <div>
                <h2
                  id={abschnitt.id}
                  className="scroll-mt-28 font-display text-3xl text-ink sm:text-4xl"
                >
                  {abschnitt.frage}
                </h2>
                <div className="mt-6 space-y-5">
                  {abschnitt.bloecke.map((baustein, i) => (
                    <Baustein key={i} baustein={baustein} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Pflichthinweis />

      {/* ------------------------------------------------------------ Abschluss */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor -top-20 left-1/4 h-96 w-96 bg-sage/50" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center">
              <Spiral className="h-10 w-10 text-sage-deep/60" />
              <h2 className="mt-6 font-display text-4xl text-ink sm:text-5xl">
                {abschluss.ueberschrift}
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">{abschluss.text}</p>
              <Link
                href="/kontakt"
                className="mt-10 rounded-full bg-sage-deep px-10 py-4 text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
              >
                {abschluss.schaltflaeche}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
