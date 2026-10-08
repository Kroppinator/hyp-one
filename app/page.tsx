import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import Aquarell from '@/components/Aquarell';
import Pflichthinweis from '@/components/Pflichthinweis';
import inhalt from '@/inhalte/startseite.json';
import { betont, text } from '@/lib/inhalt';

const { kopf, coaching, kennstDuDas, erwartet, arbeitsweise, ueberMich, abschluss } =
  inhalt;

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
        <div className="watercolor -top-24 -left-24 h-[28rem] w-[28rem] bg-sage/60" />
        <div className="watercolor top-72 left-1/4 h-80 w-80 bg-apricot/50" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="max-w-xl text-sm tracking-[0.2em] text-sage-deep uppercase">
                  {kopf.kleineUeberschrift}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] whitespace-pre-line text-ink sm:text-6xl lg:text-7xl">
                  {betont(kopf.ueberschrift, 'text-apricot-deep italic')}
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex items-start gap-4">
                  <Spiral className="mt-1 h-10 w-10 shrink-0 text-sage-deep/70" />
                  <div>
                    <p className="font-display text-2xl text-ink sm:text-3xl">
                      {kopf.begruessung}
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                      {text(kopf.einleitung)}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href="/kontakt"
                    className="rounded-full bg-sage-deep px-8 py-4 text-center text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
                  >
                    {kopf.schaltflaecheHaupt}
                  </Link>
                  <Link
                    href="/hypnose"
                    className="rounded-full border border-sage-deep/40 px-8 py-4 text-center text-ink-soft transition-all duration-300 hover:border-sage-deep hover:text-ink"
                  >
                    {kopf.schaltflaecheZweit}
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={300}>
                <Aquarell
                  src="/bilder/lebensbaum.webp"
                  alt={kopf.bildBeschreibung}
                  className="aspect-square w-full"
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={420}>
            <p className="mt-20 max-w-3xl border-l-2 border-sage pl-6 font-display text-2xl leading-relaxed text-ink italic sm:text-3xl">
              {kopf.leitsatz}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------- Dein emotionales Coaching */}
      <section id="reise" className="relative overflow-hidden bg-shell py-24 md:py-32">
        <div className="watercolor -right-20 bottom-0 h-96 w-96 bg-apricot/45" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl text-ink sm:text-5xl">
                {coaching.ueberschrift}
              </h2>
              <p className="mt-6 font-display text-2xl text-ink italic sm:text-3xl">
                {coaching.unterzeile}
              </p>
              <p className="mt-6 text-ink-soft">{coaching.einleitung}</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {coaching.punkte.map((punkt, i) => (
              <Reveal key={punkt} delay={i * 100}>
                <div className="flex h-full gap-5 rounded-3xl border border-sand bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sage hover:shadow-[0_18px_50px_-32px_rgba(44,56,48,0.5)]">
                  <Image
                    src="/bilder/spirale.webp"
                    alt=""
                    width={56}
                    height={56}
                    className="aquarell blob-weich h-14 w-14 shrink-0"
                  />
                  <p className="text-lg leading-relaxed text-ink">{punkt}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-14 max-w-2xl font-display text-3xl leading-relaxed text-ink italic sm:text-4xl">
              {betont(coaching.schlusssatz, 'text-rose-deep')}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Kennst du das? */}
      <section id="kennst-du-das" className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor top-1/3 -left-24 h-80 w-80 bg-rose/45" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl text-ink sm:text-5xl">
              {kennstDuDas.ueberschrift}
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {kennstDuDas.karten.map((karte, i) => (
              <Reveal key={karte.bild} delay={(i % 2) * 100}>
                <div className="h-full rounded-3xl border border-sand bg-cream p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_-32px_rgba(44,56,48,0.5)]">
                  <Aquarell
                    src={karte.bild}
                    alt={karte.bildBeschreibung}
                    className="aspect-square w-full"
                    shape="rect"
                    rounded="rounded-none"
                    sizes="(max-width: 640px) 100vw, 45vw"
                  />
                  <p className="px-1 pt-6 leading-relaxed text-ink-soft">{karte.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 rounded-3xl bg-shell p-8 sm:p-12">
              <p className="max-w-3xl text-lg leading-relaxed text-ink">
                {kennstDuDas.kastenOben}
              </p>
              <p className="mt-5 max-w-3xl font-display text-2xl leading-relaxed text-ink italic sm:text-3xl">
                {kennstDuDas.kastenUnten}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------- Was dich erwartet */}
      <section
        id="erwartet"
        className="relative overflow-hidden bg-ink py-24 text-cream md:py-32"
      >
        <div className="watercolor -top-32 left-1/2 h-96 w-96 -translate-x-1/2 bg-sage/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <Spiral className="h-10 w-10 text-sage" />
              <h2 className="mt-6 font-display text-4xl sm:text-5xl">
                {erwartet.ueberschrift}
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {erwartet.punkte.map((punkt, i) => (
              <Reveal key={punkt.titel} delay={i * 120}>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl text-sage">{punkt.titel}</h3>
                  <p className="mt-4 leading-relaxed text-cream/75">{punkt.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Wie ich arbeite */}
      <section id="arbeitsweise" className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor top-10 -right-24 h-96 w-96 bg-sage/50" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <Reveal>
              <Aquarell
                src="/bilder/spirale.webp"
                alt={arbeitsweise.bildBeschreibung}
                className="aspect-square w-full"
                morphDelay={-16}
              />
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 className="font-display text-4xl text-ink sm:text-5xl">
                  {arbeitsweise.ueberschrift}
                </h2>
                {arbeitsweise.absaetze.map((absatz, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? 'mt-6 text-lg leading-relaxed text-ink-soft'
                        : 'mt-5 leading-relaxed text-ink-soft'
                    }
                  >
                    {text(absatz)}
                  </p>
                ))}

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {arbeitsweise.methoden.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-sage/60 bg-shell px-4 py-2 text-sm text-ink-soft"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {arbeitsweise.eckdaten.map((eck, i) => (
              <Reveal key={eck.wert} delay={i * 100}>
                <div className="h-full rounded-3xl border border-sand bg-shell p-8 text-center">
                  <p className="font-display text-3xl text-sage-deep">{eck.wert}</p>
                  <p className="mt-3 leading-relaxed text-ink-soft">{eck.beschriftung}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Über mich */}
      <section id="ueber-mich" className="relative overflow-hidden bg-shell py-24 md:py-32">
        <div className="watercolor -bottom-20 left-10 h-80 w-80 bg-rose/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-xs">
                <div
                  className="blob blob-morph absolute -inset-5 bg-gradient-to-br from-sage/50 via-shell to-apricot/35"
                  style={{ animationDelay: '-24s' }}
                />
                <Aquarell
                  src="/bilder/isabelle.webp"
                  alt={ueberMich.bildBeschreibung}
                  className="portraet-weich aspect-2/3 w-full"
                  shape="rect"
                  rounded="rounded-none"
                  blend={false}
                  fit="object-cover object-top"
                  sizes="(max-width: 768px) 70vw, 28vw"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <div>
                <p className="text-sm tracking-[0.2em] text-sage-deep uppercase">
                  {ueberMich.kleineUeberschrift}
                </p>
                <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
                  {ueberMich.ueberschrift}
                </h2>

                <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
                  {ueberMich.absaetze.map((absatz, i) => (
                    <p key={i}>{text(absatz)}</p>
                  ))}
                  <p className="font-display text-2xl text-ink italic sm:text-3xl">
                    {ueberMich.leitsatz}
                  </p>
                  <p>{text(ueberMich.nachsatz)}</p>
                </div>

                <Link
                  href="/ueber-mich"
                  className="mt-8 inline-flex items-center gap-2 text-ink underline decoration-sage decoration-2 underline-offset-8 transition-colors hover:text-sage-deep"
                >
                  {ueberMich.verweis}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Pflichthinweis />

      {/* ------------------------------------------------------------ Abschluss */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor -top-20 right-1/4 h-96 w-96 bg-apricot/45" />
        <div className="watercolor bottom-0 -left-20 h-80 w-80 bg-sage/50" />

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
