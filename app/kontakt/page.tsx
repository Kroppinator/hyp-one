import type { Metadata } from 'next';
import Spiral from '@/components/Spiral';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Termin vereinbaren bei Isabelle Kroppenstedt – Coaching und Auflösende Hypnose© in Buchholz in der Nordheide. Das Kennenlernen ist kostenfrei.',
};

export default function Kontakt() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <div className="watercolor -top-24 -left-20 h-96 w-96 bg-sage/45" />
        <div className="watercolor top-0 right-0 h-80 w-80 bg-apricot/40" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <Spiral className="h-9 w-9 text-sage-deep/60" />
              <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl">
                Möchtest du einen Termin vereinbaren?
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                Melde dich gern – dann telefonieren wir oder treffen uns persönlich, ganz
                wie du magst. Das Kennenlernen ist natürlich kostenfrei.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden pb-24 md:pb-32">
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <div className="space-y-10">
                  <div>
                    <h2 className="text-xs tracking-[0.25em] text-ink-faint uppercase">
                      Coachingraum
                    </h2>
                    <address className="mt-3 leading-relaxed text-ink-soft not-italic">
                      [Straße und Hausnummer]
                      <br />
                      21244 Buchholz in der Nordheide
                    </address>
                  </div>

                  <div>
                    <h2 className="text-xs tracking-[0.25em] text-ink-faint uppercase">
                      Direkt erreichbar
                    </h2>
                    <div className="mt-3 space-y-1">
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
                    <h2 className="text-xs tracking-[0.25em] text-ink-faint uppercase">
                      Anfahrt
                    </h2>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      [Kurzer Hinweis zur Anfahrt: Parkmöglichkeiten, Bus- oder
                      Bahnanbindung, Hinweise zum Finden des Eingangs.]
                    </p>
                  </div>

                  <div className="rounded-3xl border border-sand bg-shell p-7">
                    <p className="font-display text-xl text-ink">
                      Wie eine Sitzung abläuft
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      Rund 1,5 Stunden Zeitfenster, davon etwa 30 Minuten reine Trance –
                      davor und danach ist Raum für das Gespräch.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={120}>
                <div className="rounded-3xl border border-sand bg-shell/80 p-8 backdrop-blur-sm sm:p-10">
                  <h2 className="font-display text-3xl text-ink">
                    Schreib mir eine Nachricht
                  </h2>
                  <p className="mt-3 mb-8 text-sm leading-relaxed text-ink-soft">
                    Ich melde mich so bald wie möglich bei dir zurück.
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-sand bg-sand/60 py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm leading-relaxed text-ink-soft">
            <span className="text-ink">Wichtiger Hinweis:</span> Die Sitzungen bei mir
            ersetzen keine ärztliche oder psychologische Therapie. Die Klientinnen und
            Klienten tragen die Kosten eigenständig. Ich weise ausdrücklich darauf hin,
            dass ich nicht mehr ärztlich oder therapeutisch tätig bin.
          </p>
        </div>
      </section>
    </>
  );
}
