import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import Aquarell from '@/components/Aquarell';

export const metadata: Metadata = {
  title: 'Auflösende Hypnose©',
  description:
    'Was Auflösende Hypnose© ist, wie eine Sitzung abläuft, wie sich Trance anfühlt und wann Hypnose nicht in Frage kommt – erklärt von Isabelle Kroppenstedt, Buchholz in der Nordheide.',
};

const inhalt = [
  { id: 'was-ist-das', label: 'Was ist Auflösende Hypnose©?' },
  { id: 'was-moeglich-ist', label: 'Was alles möglich ist' },
  { id: 'ablauf', label: 'Wie läuft Hypnose ab?' },
  { id: 'trance', label: 'Wie fühlt sich Trance an?' },
  { id: 'wirkweise', label: 'Wie funktioniert Hypnose?' },
  { id: 'auswirkungen', label: 'Welche Auswirkungen hat Hypnose?' },
  { id: 'grenzen', label: 'Wann kommt Hypnose nicht in Frage?' },
  { id: 'fuer-jeden', label: 'Ist Hypnose für jeden etwas?' },
  { id: 'dauer', label: 'Wie lange dauert eine Sitzung?' },
  { id: 'gelingen', label: 'Was kann ich selbst tun?' },
  { id: 'honorar', label: 'Honorar' },
];

const gegenanzeigen = [
  'aktive Depression, Epilepsie, floride Schizophrenie oder Psychose, Persönlichkeitsstörungen, Suizidgedanken',
  'kardiovaskuläre Ereignisse (Schlaganfall, Herzinfarkt) und Thrombosen oder Embolien in den letzten 6 Monaten',
  'nach Operationen sollte der vom behandelnden Chirurgen empfohlene Abstand zur körperlichen Belastung eingehalten werden',
  'unter Einfluss von Drogen oder Alkohol',
  'geistige Behinderungen',
];

/** Überschrift eines FAQ-Abschnitts, zugleich Sprungziel der Inhaltsübersicht. */
function Frage({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 font-display text-3xl text-ink sm:text-4xl">
      {children}
    </h2>
  );
}

export default function Hypnose() {
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
                <p className="text-sm tracking-[0.2em] text-sage-deep uppercase">
                  Auflösende Hypnose©
                </p>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                  Dein Unterbewusstsein kommt zu Wort
                </h1>
                <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                  Hier findest du in Ruhe alles, was du vorher wissen möchtest: was diese
                  Form der Hypnose ausmacht, wie eine Sitzung abläuft, wie sich Trance
                  anfühlt – und wann sie nicht das Richtige ist.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={150}>
                <Aquarell
                  src="/bilder/prisma.webp"
                  alt="Aquarell eines Prismas, das weißes Licht in die Farben des Spektrums bricht"
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
              Auf dieser Seite
            </h2>
            <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {inhalt.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline"
                  >
                    {item.label}
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
          <Reveal>
            <div>
              <Frage id="was-ist-das">Was ist Auflösende Hypnose©?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Auflösende Hypnose© ist eine Form der Hypnose, die darauf abzielt, dass
                  der Mensch in einem Zustand der Trance sein Unterbewusstsein „zu
                  Wort&ldquo; kommen lässt und darüber seine persönlichen Themen erreicht –
                  zum Beispiel emotionale Blockaden oder alte Glaubenssätze.
                </p>
                <p>
                  Dem Fühlen wird während der Hypnose optimalerweise mehr Raum gegeben als
                  im Normalzustand. Alte Erinnerungen dürfen gesehen und gefühlt werden. Im
                  Verlauf findet dadurch eine Neubewertung statt.
                </p>
                <p>
                  Ein Unterschied zu einigen anderen Anwendungsformen von Hypnose ist, dass
                  bei dieser Form <span className="text-ink">keinem festgelegten Skript</span>{' '}
                  oder Protokoll gefolgt wird. Der Ablauf ist frei und am Klienten
                  orientiert. Auch die Tiefe der Trance ist individuell und wird für die
                  gemeinsame Arbeit so genutzt, wie sie eben vorhanden ist oder sich
                  entwickelt.
                </p>
                <p>
                  Das heißt also, dass ich mit meiner Aufmerksamkeit vollständig bei dir
                  sein kann, anstatt einem festgelegten Schema zu folgen. Dein Prozess wird
                  begleitet und nach Bedarf gestützt – jedoch möglichst ohne ihn im Fluss zu
                  stören oder zu behindern.
                </p>
                <p>
                  Suggestionen von außen zeigen zwar oft beeindruckende Wirkung, sind aber
                  leider nicht von Nachhaltigkeit geprägt. Daher wird darauf in der Regel
                  verzichtet. Lediglich beim Ein- und Ausleiten verwenden wir Suggestionen,
                  oder bei vorher abgesprochenen Themen – sollte es dir zum Beispiel schwer
                  fallen, Bilder vor deinem inneren Auge erscheinen zu lassen.
                </p>
                <p className="font-display text-xl text-ink italic sm:text-2xl">
                  Alles, was von dir kommt, hat grundsätzlich den größten Wert für dich und
                  deinen Prozess.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="was-moeglich-ist">Was alles möglich ist</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p className="font-display text-xl text-ink italic sm:text-2xl">
                  Das Unterbewusstsein ist ein bisschen wie deine emotionale Schatztruhe.
                </p>
                <p>
                  Erfahrungen, emotional prägende Erlebnisse, Stimmungen, Verknüpfungen mit
                  Körperlichem. Ein bisschen wie eine Blackbox, die bei einem Flug alles
                  mitschreibt. Unser Verstand hat womöglich längst Haken an Themen oder alte
                  Dinge gemacht, die dort aber noch schlummern.
                </p>
                <p>
                  Beginnst du, sie zu öffnen, werden dir wohlbekannte Themen begegnen –
                  genau wie die ein oder andere längst vergessene Erinnerung, zum Beispiel
                  aus der Kindheit, die dich dann gegebenenfalls innerlich bewegen wird.
                </p>
              </div>

              <h3 className="mt-10 font-display text-2xl text-ink">Wirkung</h3>
              <div className="mt-4 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Richtest du deinen Fokus mehr nach innen und wirst spürsamer für deine
                  Gefühlswelt, so kannst du sie nun reflektierter betrachten, für dich lösen
                  oder verabschieden – so wie es dein Prozess dir erlaubt oder du hinschauen
                  magst.
                </p>
                <p>
                  In Kenntnis deiner Themen kannst du dich im Anschluss neu und anders
                  erleben. Meist machen die Menschen dann neue, andere Erfahrungen.
                </p>
                <p className="font-display text-2xl text-sage-deep italic sm:text-3xl">
                  Es entsteht Bewegung, wo zuvor Stillstand war.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="ablauf">Wie läuft Hypnose ab?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Liegend oder sitzend hast du nach Einleitung einer Trance die Augen
                  geschlossen. Mit der Aufmerksamkeit nach innen fokussiert kannst du in
                  Form von Bildern, alten Gedächtnisinhalten, Symbolen, Farben, Gerüchen
                  oder körperlichen Wahrnehmungen deine Themen spüren.
                </p>
                <p>
                  Das in der Hypnose Erlebte ist höchst individuell und unterliegt keiner
                  Bewertung durch mich. Fortlaufend werden wir im Gespräch sein. Im
                  Anschluss wird die Trance wieder ausgeleitet.
                </p>
                <p>
                  In der Regel verspüren die Menschen direkt nach der Sitzung ein erstes
                  angenehmes Gefühl. Wichtig zu verstehen ist jedoch, dass das
                  Unterbewusstsein „nacharbeitet&ldquo;. Nicht nur die Sitzung an sich ist
                  relevant – sie ist als eine Art Anstoß zu verstehen. Ein
                  Perspektivenwechsel, eine Neubewertung und Neulernen finden statt, die
                  wiederum das Erleben nachhaltig verändern.
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-sage/50 bg-shell p-8">
                <p className="font-display text-xl text-ink">Meine Rolle</p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Wie die eines Beifahrers. Ich begleite dich und werde mit Fragen oder
                  Hinweisen aus meiner Wahrnehmung behilflich sein, die Themen anzugehen.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="trance">Wie fühlt sich Trance an?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Die Menschen erleben die Trance in der Hypnose als eine Art
                  Entspannungszustand, ähnlich wie kurz vor dem Einschlafen. Die Augen sind
                  in der Regel geschlossen, und man ist bei vollem Bewusstsein.
                </p>
                <p>
                  Du behältst weiterhin die Kontrolle über das, was du sagst.{' '}
                  <span className="text-ink">
                    Jederzeit bist du in der Lage, eine Sitzung abzubrechen, indem du
                    schlichtweg die Augen öffnest.
                  </span>{' '}
                  Auch erinnerst du dich in der Regel an alles Gesprochene. Du bist mit der
                  Aufmerksamkeit lediglich stark nach innen fokussiert – in dem Maße, in dem
                  es dir eben gelingt und du zulassen magst.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="wirkweise">Wie funktioniert Hypnose?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Durch den Entspannungszustand werden Emotionen leichter zugänglich. Es
                  dürfen andere Bereiche in deinem Gehirn aktiver werden. Das Erspüren und
                  Durchleben der sich zeigenden Gefühle ist Teil deines Prozesses. Weg und
                  Tempo werden automatisch durch dich bestimmt.
                </p>
                <p>
                  Das in der Hypnose Wahrgenommene ist stets subjektiv und wird von mir
                  nicht bewertet.
                </p>
                <p className="font-display text-2xl text-ink italic sm:text-3xl">
                  Es gibt kein Richtig oder Falsch.
                </p>
                <p>
                  Die Themen liefert das Unterbewusstsein so, wie sie gerade anliegen. Du
                  kannst also gar nichts falsch machen.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="auswirkungen">Welche Auswirkungen hat Hypnose?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Je nachdem, wie emotional eine Hypnose verläuft, kannst du im Anschluss
                  sowohl erleichtert als auch erschöpft oder aufgewühlt sein. Die meisten
                  Menschen sind im Nachgang noch etwas in sich vertieft oder beeindruckt von
                  dem gerade Erlebten und Gefühlten.
                </p>
                <p>
                  Mit endender Trance dürfen sich die Augen wieder auf ihre Umgebung
                  fokussieren. Du kommst wieder im Hier und Jetzt an, und wir haben an der
                  Stelle noch Zeit, das Ganze Revue passieren zu lassen.
                </p>
                <p>
                  Im Anschluss macht ein Spaziergang oder ein Snack an der frischen Luft
                  Sinn, um sich wieder zu sammeln und einen klaren Kopf zu bekommen, bevor
                  du zum Beispiel wieder am Straßenverkehr teilnimmst. Wenn inhaltlich große
                  Themen anstehen, solltest du dir und deinem Körper hinterher etwas Ruhe
                  gönnen.
                </p>
                <p>
                  Vermehrtes Träumen ist nach Hypnose normal. Es ist als positiver Effekt zu
                  verstehen und zeigt, dass etwas in Bewegung kommt.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="grenzen">Wann kommt Hypnose nicht in Frage?</Frage>
              <div className="mt-6 rounded-3xl border border-rose-deep/30 bg-rose/10 p-8">
                <p className="leading-relaxed text-ink-soft">
                  In diesen Fällen arbeite ich nicht mit Hypnose:
                </p>
                <ul className="mt-5 space-y-3">
                  {gegenanzeigen.map((g) => (
                    <li key={g} className="flex gap-4">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-deep" />
                      <span className="leading-relaxed text-ink-soft">{g}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-relaxed text-ink-soft">
                  Wenn du unsicher bist, ob einer dieser Punkte auf dich zutrifft, sprich
                  mich einfach im kostenfreien Vorgespräch darauf an.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="fuer-jeden">Ist Hypnose für jeden etwas?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Je nach Typ spürst du nach ein bis zwei Hypnosen, ob du davon profitierst
                  oder nicht. Die Wirkung entfaltet sich meist in den darauffolgenden Tagen.
                  Du merkst das zum Beispiel an vermehrtem Träumen.
                </p>
                <p>
                  Manch einer ist näher am Spüren oder an seinen Themen als ein anderer und
                  kann sich möglicherweise leichter darauf einlassen. Du wirst schnell
                  merken, ob eher Gespräche oder Hypnosen gewinnbringend für dich sind.
                </p>
                <p className="font-display text-xl text-ink italic sm:text-2xl">
                  Ich biete dir daher immer die Kombination an.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="dauer">Wie lange dauert eine Sitzung?</Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Ich peile eine reine Trancezeit von etwa 30 Minuten pro Sitzung an. In
                  Einzelfällen, zum Beispiel wenn man gerade in einem sehr intensiven
                  mentalen Prozess steckt, kann es auch einmal länger dauern.
                </p>
                <p>
                  Wir haben zuvor Zeit, uns zu besprechen, und auch im Nachhinein die
                  Möglichkeit, das Erlebte gemeinsam noch einmal zu betrachten und sacken zu
                  lassen. Eineinhalb Stunden insgesamt sind in der Regel ein gutes
                  Zeitfenster.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="gelingen">
                Was kann ich tun, damit Hypnose gelingt und meine Themen erscheinen?
              </Frage>
              <div className="mt-6 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  Mach es dir gemütlich – so kann das Unterbewusstsein am besten aktiv
                  werden. Ganz von selbst landest du da, wo es für dich von Bedeutung ist.
                  Es kann auch sein, dass dich dann überrascht, was du siehst.
                </p>
                <p className="font-display text-xl text-ink italic sm:text-2xl">
                  Siehst du nichts – arbeiten wir genau damit.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <Frage id="honorar">Honorar</Frage>
              <div className="mt-6 rounded-3xl border border-sand bg-shell p-8">
                <p className="font-display text-3xl text-sage-deep">
                  [Betrag] € <span className="text-xl text-ink-soft">pro Sitzung</span>
                </p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  [Hier trägt Isa ihr Honorar ein – zum Beispiel: Zeitfenster von
                  eineinhalb Stunden, Zahlungsweise, ob Pakete möglich sind.]
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  Das erste Kennenlernen ist kostenfrei. Die Klientinnen und Klienten tragen
                  die Kosten eigenständig; eine Erstattung durch Krankenkassen erfolgt
                  nicht.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- Hinweis */}
      <section className="border-y border-sand bg-sand/60 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="leading-relaxed text-ink-soft">
            <span className="text-ink">Wichtiger Hinweis:</span> Die Sitzungen bei mir
            ersetzen keine ärztliche oder psychologische Therapie. Die Klientinnen und
            Klienten tragen die Kosten eigenständig. Ich weise ausdrücklich darauf hin, dass
            ich nicht mehr ärztlich oder therapeutisch tätig bin.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ Abschluss */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor -top-20 left-1/4 h-96 w-96 bg-sage/50" />

        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center">
              <Spiral className="h-10 w-10 text-sage-deep/60" />
              <h2 className="mt-6 font-display text-4xl text-ink sm:text-5xl">
                Noch Fragen offen?
              </h2>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Melde dich gern – dann telefonieren wir oder treffen uns persönlich, ganz
                wie du magst. Das Kennenlernen ist natürlich kostenfrei.
              </p>
              <Link
                href="/kontakt"
                className="mt-10 rounded-full bg-sage-deep px-10 py-4 text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
