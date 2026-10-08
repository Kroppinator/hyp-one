import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import Aquarell from '@/components/Aquarell';
import inhalt from '@/inhalte/ueber-mich.json';
import hinweis from '@/inhalte/rechtlich.hinweise.json';
import { fuelle, text } from '@/lib/inhalt';

export const metadata: Metadata = {
  title: 'Über mich',
  description: fuelle(inhalt.seitenbeschreibung),
};

export default function UeberMich() {
  return (
    <>
      {/* ------------------------------------------------------------- Auftakt */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="watercolor -top-24 right-0 h-[26rem] w-[26rem] bg-sage/60" />
        <div className="watercolor top-60 -left-20 h-80 w-80 bg-apricot/45" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              {/* Freigestelltes Porträt vor einem weichen Aquarellkreis */}
              <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs">
                <div
                  className="blob blob-morph absolute -inset-5 bg-gradient-to-br from-sage/50 via-shell to-apricot/35"
                  style={{ animationDelay: '-11s' }}
                />
                <Aquarell
                  src="/bilder/isabelle.webp"
                  alt={inhalt.bildBeschreibung}
                  className="portraet-weich aspect-2/3 w-full"
                  shape="rect"
                  rounded="rounded-none"
                  blend={false}
                  fit="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 70vw, 28vw"
                />
              </div>
            </Reveal>

            <div className="md:col-span-7">
              <Reveal delay={120}>
                <p className="text-sm tracking-[0.2em] text-sage-deep uppercase">
                  {inhalt.kleineUeberschrift}
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                  {inhalt.ueberschrift}
                </h1>
                <p className="mt-8 font-display text-3xl leading-relaxed text-ink italic sm:text-4xl">
                  {inhalt.leitsatz}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Mein Weg */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink-soft">
              {inhalt.meinWeg.map((absatz, i) => (
                <p key={i}>{text(absatz)}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------- Was mich inspiriert */}
      <section className="relative overflow-hidden bg-shell py-20 md:py-28">
        <div className="watercolor -right-20 bottom-0 h-80 w-80 bg-rose/40" />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start">
              <Spiral className="h-10 w-10 text-sage-deep/60" />
              <h2 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
                {inhalt.inspiration.ueberschrift}
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              {inhalt.inspiration.absaetze.map((absatz, i) => (
                <p key={i}>{text(absatz)}</p>
              ))}
              <p className="font-display text-3xl text-sage-deep italic sm:text-4xl">
                {inhalt.inspiration.schlusssatz}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------- Warum Coaching */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="watercolor top-10 -left-24 h-96 w-96 bg-sage/50" />

        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-3xl text-ink sm:text-4xl">
              {inhalt.heute.ueberschrift}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              {inhalt.heute.absaetze.map((absatz, i) => (
                <p key={i}>{text(absatz)}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 rounded-3xl border border-sage/50 bg-shell p-8 sm:p-10">
              <h3 className="font-display text-2xl text-ink">
                {hinweis.ueberMich.ueberschrift}
              </h3>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                {hinweis.ueberMich.absaetze.map((absatz, i) => (
                  <p key={i}>{text(absatz)}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------ Abschluss */}
      <section className="relative overflow-hidden border-t border-sand py-24 md:py-32">
        <div className="watercolor -top-20 right-1/4 h-96 w-96 bg-apricot/45" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center">
              <h2 className="font-display text-4xl text-ink sm:text-5xl">
                {inhalt.abschluss.ueberschrift}
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">{inhalt.abschluss.text}</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-sage-deep px-10 py-4 text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
                >
                  {inhalt.abschluss.schaltflaecheHaupt}
                </Link>
                <Link
                  href="/hypnose"
                  className="rounded-full border border-sage-deep/40 px-10 py-4 text-ink-soft transition-all duration-300 hover:border-sage-deep hover:text-ink"
                >
                  {inhalt.abschluss.schaltflaecheZweit}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
