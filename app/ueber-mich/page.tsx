import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import Aquarell from '@/components/Aquarell';

export const metadata: Metadata = {
  title: 'Über mich',
  description:
    'Isabelle Kroppenstedt: vom Studium der Humanmedizin und der Arbeit in der Psychosomatik zur Begleitung mit Coaching, Beratung und Auflösender Hypnose© in Buchholz in der Nordheide.',
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
                {/* Ovaler Farbgrund, etwas größer als das Porträt selbst */}
                <div
                  className="blob blob-morph absolute -inset-5 bg-gradient-to-br from-sage/50 via-shell to-apricot/35"
                  style={{ animationDelay: '-11s' }}
                />
                <Aquarell
                  src="/bilder/isabelle.webp"
                  alt="Porträt von Isabelle Kroppenstedt"
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
                  Über mich
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                  Isabelle Kroppenstedt
                </h1>
                <p className="mt-8 font-display text-2xl leading-relaxed text-ink-soft italic sm:text-3xl">
                  Zwischen dem klassischen „gesund&ldquo; und „krank&ldquo; ist ein großer
                  Raum in unser aller Leben, der unsere Aufmerksamkeit verdient.
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
              <p>
                Nach dem Studium der Humanmedizin arbeitete ich als Ärztin im Bereich
                Psychosomatische Medizin und Psychotherapie (Verhaltenstherapie) in einer
                Klinik in Bayern. Schon immer interessierten mich die Lebenswege und
                Geschichten der Menschen – bei Freunden, in der Familie, bei Kranken genauso
                wie bei Gesunden. Wie sie sich von klein auf entwickelten und aus welchen
                Beweggründen und Überzeugungen sie die Dinge so tun, wie sie sie eben tun.
              </p>
              <p>
                Nach einer Auszeit mit Familie und Co lernte ich die Auflösende Hypnose©
                kennen und lieben. Nach zunächst ärztlicher Tätigkeit mit Hypnose in eigener
                Praxis in Hamburg entstand schnell der Wunsch, damit freier und ohne
                therapeutischen Anlass zu arbeiten. Mein eigener persönlicher Wandel hatte
                längst begonnen.
              </p>
              <p>
                Das Erleben von Energiearbeit, Tanz sowie Klangtherapie und Spiritualität
                mit vielen besonderen Menschen hinterließ bleibenden Eindruck.
              </p>
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
                Was mich besonders inspiriert hat
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Besonders inspirierten mich jene Menschen, die unabhängig von bestehender
                Krankheit an sich arbeiten wollten – oder auch jene, die sich selbst als
                Teil von Prozessen verstanden.
              </p>
              <p>
                So war es stets die innere Arbeit an den eigenen und/oder
                generationsübergreifenden Themen, die nachhaltig etwas bewegte: an ihnen
                selbst und auch im Außen. Sie übernahmen Verantwortung für sich selbst und
                wurden gestaltend tätig, anstatt in passiver Erwartungshaltung zu bleiben.
              </p>
              <p className="font-display text-2xl text-sage-deep italic sm:text-3xl">
                Ihre Selbstwirksamkeit war von nun an durch sie selbst entwickelt und
                gestärkt worden.
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
              Warum ich heute begleite
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
              <p>
                Natürlich gingen all diese Erfahrungen aus Klinik, Praxis und privatem
                Bereich auch an mir nicht spurlos vorüber. So folge ich nun dem Impuls, mit
                Coaching und Beratung eben jene Menschen zu begleiten, die entweder ihren
                Lebensstil optimieren möchten oder sich selbst und ihre Geschichte besser
                kennenlernen wollen. Jene, die aus freien Stücken zu innerer Arbeit bereit
                sind und von Gesprächen und Hypnose profitieren möchten.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 rounded-3xl border border-sage/50 bg-shell p-8 sm:p-10">
              <h3 className="font-display text-2xl text-ink">Wichtig zu wissen</h3>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Die Sitzungen bei mir ersetzen also keine ärztliche oder psychologische
                  Therapie, und die Klienten tragen eigenständig die Kosten.
                </p>
                <p className="text-ink">
                  Ich weise ausdrücklich darauf hin, dass ich nicht mehr ärztlich oder
                  therapeutisch tätig bin.
                </p>
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
                Lass uns kennenlernen
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Melde dich gern – dann telefonieren wir oder treffen uns persönlich, ganz
                wie du magst. Das Kennenlernen ist natürlich kostenfrei.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-sage-deep px-10 py-4 text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/hypnose"
                  className="rounded-full border border-sage-deep/40 px-10 py-4 text-ink-soft transition-all duration-300 hover:border-sage-deep hover:text-ink"
                >
                  Mehr über Hypnose
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
