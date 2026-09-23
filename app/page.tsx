import Reveal from '@/components/Reveal';
import Spiral from '@/components/Spiral';
import ImageSlot from '@/components/ImageSlot';
import ContactForm from '@/components/ContactForm';

const nutzen = [
  { nr: '01', text: 'löse alte Muster und Glaubenssätze' },
  { nr: '02', text: 'entlarve Blockaden und Trigger' },
  { nr: '03', text: 'entdecke Wege und Möglichkeiten' },
  {
    nr: '04',
    text: 'schaffe deinem Unterbewusstsein Raum mit Auflösender Hypnose©, damit es für dich arbeiten kann',
  },
];

const situationen = [
  'Vielleicht fragst du dich, welcher Weg der richtige ist für dich.',
  'Du erlebst (kreative) Blockaden oder stehst vor einem Wendepunkt in deinem Leben.',
  'Du hast viel um die Ohren, sehnst dich nach Ruhe und möchtest wieder den Durchblick haben.',
  'Du erlebst wiederkehrende Schwierigkeiten in Beziehungen oder Freundschaften, die dich festfahren lassen – und suchst nach den Ursachen.',
  'Du möchtest spirituell wachsen. Vielleicht hast du einen Menschen verloren oder eine besondere Erfahrung gemacht, die du nicht einordnen kannst.',
  'Du hegst den Wunsch nach Selbstfindung und tiefer Erkenntnis.',
];

const erwartet = [
  {
    titel: 'In deinem Tempo',
    text: 'Fühlen, Erinnern, Reflexion, Klärung, Tiefe, Erkenntnis – nichts davon wird erzwungen. Du bestimmst Weg und Geschwindigkeit.',
  },
  {
    titel: 'Erleichterung',
    text: 'Auf fordernde innere Arbeit folgt in der Regel Erleichterung – der Lohn für deine Mühe.',
  },
  {
    titel: 'Nähe zu dir selbst',
    text: 'Denn nur wer sich selbst gut kennt, kann sich adäquat versorgen.',
  },
];

const methoden = [
  'Lockeres Gespräch',
  'Reflexion',
  'Entspannungsverfahren',
  'Atemtechniken',
  'Auflösende Hypnose©',
  'Raum für Spiritualität',
];

const eckdaten = [
  { wert: '≈ 1,5 Std.', label: 'Zeitfenster pro Sitzung – mit Vorgespräch und Nachklang' },
  { wert: '≈ 30 Min.', label: 'reine Trancezeit, in Einzelfällen auch einmal länger' },
  { wert: 'kostenfrei', label: 'das erste Kennenlernen – telefonisch oder persönlich' },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
        <div className="watercolor -top-20 -left-24 h-[28rem] w-[28rem] bg-sage/50" />
        <div className="watercolor -top-10 right-0 h-96 w-96 bg-apricot/45" />
        <div className="watercolor top-64 left-1/3 h-80 w-80 bg-rose/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-xs tracking-[0.25em] text-ink-faint uppercase">
                  Coaching &amp; Beratung mit Auflösender Hypnose©
                </p>
              </Reveal>

              <Reveal delay={120}>
                <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
                  Damit das Leben
                  <br />
                  wieder <span className="text-apricot-deep italic">Farbe</span> bekommt…
                </h1>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex items-start gap-4">
                  <Spiral className="mt-1 h-10 w-10 shrink-0 text-sage-deep/70" />
                  <div>
                    <p className="font-display text-2xl text-ink sm:text-3xl">
                      Willkommen zu deiner Reise nach Innen.
                    </p>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">
                      Ich freue mich, dich auf deinem individuellen Weg begleiten zu dürfen
                      – denn du bist der beste{' '}
                      <span className="text-ink">Fühlexperte</span> für dich selbst.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={360}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="#kontakt"
                    className="rounded-full bg-sage-deep px-8 py-4 text-center text-cream shadow-sm transition-all duration-300 hover:bg-ink hover:shadow-md"
                  >
                    Kostenlos kennenlernen
                  </a>
                  <a
                    href="#arbeitsweise"
                    className="rounded-full border border-ink-faint/40 px-8 py-4 text-center text-ink-soft transition-all duration-300 hover:border-ink hover:text-ink"
                  >
                    Wie ich arbeite
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={300}>
                <ImageSlot
                  caption="Hier steht Isas Aquarell vom Lebensbaum"
                  className="aspect-square w-full shadow-[0_20px_60px_-30px_rgba(58,55,51,0.35)]"
                  rounded="rounded-[2.5rem]"
                />
              </Reveal>
            </div>
          </div>

          <Reveal delay={420}>
            <p className="mt-20 max-w-3xl border-l-2 border-apricot/50 pl-6 font-display text-xl leading-relaxed text-ink-soft italic sm:text-2xl">
              Manchmal gibt es Themen im Leben, die keinen Krankheitswert haben, aber
              dennoch unsere Aufmerksamkeit brauchen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------- Dein emotionales Coaching */}
      <section id="reise" className="relative overflow-hidden bg-shell py-24 md:py-32">
        <div className="watercolor -right-20 bottom-0 h-96 w-96 bg-apricot/35" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl text-ink sm:text-5xl">
                Dein emotionales Coaching
              </h2>
              <p className="mt-6 font-display text-xl text-ink-soft italic sm:text-2xl">
                …ich begleite dich gerne bei deiner individuellen Reise nach Innen…
              </p>
              <p className="mt-6 text-ink-soft">Lerne dich selbst kennen und:</p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {nutzen.map((item, i) => (
              <Reveal key={item.nr} delay={i * 100}>
                <div className="group h-full rounded-3xl border border-sand bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:border-sage/50 hover:shadow-[0_18px_50px_-32px_rgba(58,55,51,0.45)]">
                  <span className="font-display text-3xl text-apricot/70 transition-colors duration-500 group-hover:text-apricot-deep">
                    {item.nr}
                  </span>
                  <p className="mt-4 text-lg leading-relaxed text-ink">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-14 max-w-2xl font-display text-2xl leading-relaxed text-ink italic sm:text-3xl">
              …all das in deinem ganz eigenen Tempo. Denn sich selbst kennenlernen bedeutet
              auch, <span className="text-rose-deep">sich lieben lernen</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ Kennst du das? */}
      <section id="kennst-du-das" className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor top-1/3 -left-24 h-80 w-80 bg-rose/35" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl text-ink sm:text-5xl">
              Kennst du das?
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {situationen.map((text, i) => (
              <Reveal key={i} delay={(i % 2) * 100}>
                <div className="flex gap-5">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-apricot-deep" />
                  <p className="text-lg leading-relaxed text-ink-soft">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 rounded-3xl bg-shell p-8 sm:p-12">
              <p className="max-w-3xl text-lg leading-relaxed text-ink">
                All das kannst du mit Hilfe von Hypnose in Trance und / oder im Rahmen von
                Gesprächen angehen.
              </p>
              <p className="mt-5 max-w-3xl font-display text-xl leading-relaxed text-ink-soft italic sm:text-2xl">
                Manchmal hilft es, ein neutrales Ohr an seiner Seite zu haben – für Dinge,
                die du sonst mit niemandem teilen magst…
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
        <div className="watercolor -top-32 left-1/2 h-96 w-96 -translate-x-1/2 bg-sage/30" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <Spiral className="h-10 w-10 text-apricot/70" />
              <h2 className="mt-6 font-display text-4xl sm:text-5xl">Was dich erwartet</h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {erwartet.map((item, i) => (
              <Reveal key={item.titel} delay={i * 120}>
                <div className="text-center md:text-left">
                  <h3 className="font-display text-2xl text-apricot">{item.titel}</h3>
                  <p className="mt-4 leading-relaxed text-cream/75">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ Wie ich arbeite */}
      <section id="arbeitsweise" className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor top-10 -right-24 h-96 w-96 bg-sage/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <Reveal>
              <ImageSlot
                caption="Hier steht Isas Aquarell von der Weggabelung"
                className="aspect-4/3 w-full"
              />
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 className="font-display text-4xl text-ink sm:text-5xl">
                  Wie ich arbeite
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                  Vor allem intuitiv – als Mensch und als deine Weg-Begleiterin, mit meinem
                  Erfahrungsschatz aus Leben, Studium, Beruf und Praxis.
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  Daraus entsteht eine Mischung, die sich ganz nach deinem Bedarf richtet.
                  Auch Spiritualität hat Raum, wo sie für dich spürbar sein mag.
                </p>

                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {methoden.map((m) => (
                    <li
                      key={m}
                      className="rounded-full border border-sage/40 bg-shell px-4 py-2 text-sm text-ink-soft"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            {eckdaten.map((item, i) => (
              <Reveal key={item.wert} delay={i * 100}>
                <div className="h-full rounded-3xl border border-sand bg-shell p-8 text-center">
                  <p className="font-display text-3xl text-sage-deep">{item.wert}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ Über mich */}
      <section id="ueber-mich" className="relative overflow-hidden bg-shell py-24 md:py-32">
        <div className="watercolor -bottom-20 left-10 h-80 w-80 bg-rose/35" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <ImageSlot
                caption="Hier steht ein Porträtfoto von Isabelle"
                className="aspect-3/4 w-full max-w-sm"
              />
            </Reveal>

            <Reveal delay={120} className="md:col-span-7">
              <div>
                <p className="text-xs tracking-[0.25em] text-ink-faint uppercase">
                  Über mich
                </p>
                <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
                  Isabelle Kroppenstedt
                </h2>

                <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
                  <p>
                    Nach dem Studium der Humanmedizin arbeitete ich als Ärztin im Bereich
                    Psychosomatische Medizin und Psychotherapie. Schon immer interessierten
                    mich die Lebenswege und Geschichten der Menschen – wie sie sich von
                    klein auf entwickelten und aus welchen Beweggründen sie die Dinge so
                    tun, wie sie sie eben tun.
                  </p>
                  <p>
                    Später lernte ich die Auflösende Hypnose© kennen und lieben. Aus der
                    ärztlichen Arbeit heraus entstand schnell der Wunsch, damit freier und
                    ohne therapeutischen Anlass zu arbeiten. Energiearbeit, Tanz,
                    Klangtherapie und Spiritualität hinterließen bleibenden Eindruck –
                    freies, intuitives Tanzen und Singen lebe ich noch heute.
                  </p>
                  <p className="font-display text-xl text-ink italic sm:text-2xl">
                    Zwischen dem klassischen „gesund&ldquo; und „krank&ldquo; liegt ein
                    großer Raum in unser aller Leben, der unsere Aufmerksamkeit verdient.
                  </p>
                  <p>
                    Heute begleite ich Menschen, die ihren Lebensstil optimieren oder sich
                    selbst und ihre Geschichte besser kennenlernen möchten. Jene, die aus
                    freien Stücken zu innerer Arbeit bereit sind und von Gesprächen und
                    Hypnose profitieren möchten.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Hinweis */}
      <section className="border-y border-sand bg-sand/60 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="text-ink">Wichtiger Hinweis:</span> Die Sitzungen bei mir
            ersetzen keine ärztliche oder psychologische Therapie. Die Klientinnen und
            Klienten tragen die Kosten eigenständig. Ich weise ausdrücklich darauf hin, dass
            ich nicht mehr ärztlich oder therapeutisch tätig bin.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------------- Kontakt */}
      <section id="kontakt" className="relative overflow-hidden py-24 md:py-32">
        <div className="watercolor -top-20 right-1/4 h-96 w-96 bg-apricot/40" />
        <div className="watercolor bottom-0 -left-20 h-80 w-80 bg-sage/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <div>
                  <Spiral className="h-9 w-9 text-sage-deep/60" />
                  <h2 className="mt-6 font-display text-4xl text-ink sm:text-5xl">
                    Möchtest du einen Termin vereinbaren?
                  </h2>
                  <p className="mt-6 leading-relaxed text-ink-soft">
                    Melde dich gern – dann telefonieren wir oder treffen uns persönlich,
                    ganz wie du magst. Das Kennenlernen ist natürlich kostenfrei.
                  </p>

                  <dl className="mt-10 space-y-6 text-sm">
                    <div>
                      <dt className="tracking-[0.18em] text-ink-faint uppercase">
                        Coachingraum
                      </dt>
                      <dd className="mt-2 leading-relaxed text-ink-soft">
                        [Straße und Hausnummer]
                        <br />
                        21244 Buchholz in der Nordheide
                      </dd>
                    </div>
                    <div>
                      <dt className="tracking-[0.18em] text-ink-faint uppercase">E-Mail</dt>
                      <dd className="mt-2">
                        <a
                          href="mailto:[E-Mail-Adresse]"
                          className="text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                        >
                          [E-Mail-Adresse]
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="tracking-[0.18em] text-ink-faint uppercase">
                        Telefon
                      </dt>
                      <dd className="mt-2">
                        <a
                          href="tel:[Telefonnummer]"
                          className="text-ink-soft underline-offset-4 hover:text-ink hover:underline"
                        >
                          [Telefonnummer]
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={120}>
                <div className="rounded-3xl border border-sand bg-shell/80 p-8 backdrop-blur-sm sm:p-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
