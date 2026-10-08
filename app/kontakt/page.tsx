import type { Metadata } from 'next';
import Spiral from '@/components/Spiral';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import Pflichthinweis from '@/components/Pflichthinweis';
import inhalt from '@/inhalte/kontakt.json';
import { fuelle, stammdaten } from '@/lib/inhalt';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: fuelle(inhalt.seitenbeschreibung),
};

const linkKlasse =
  'text-ink-soft underline-offset-4 transition-colors hover:text-ink hover:underline';

function Rubrik({
  ueberschrift,
  children,
}: {
  ueberschrift: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-sm tracking-[0.2em] text-sage-deep uppercase">{ueberschrift}</h2>
      <div className="mt-3 leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function Kontakt() {
  const s = inhalt.spalte;

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
                {inhalt.ueberschrift}
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-ink-soft">
                {inhalt.einleitung}
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
                  <Rubrik ueberschrift={s.ueberschriftOrt}>
                    <address className="not-italic">
                      {stammdaten.ort}
                      <br />
                      <span className="text-sm">{stammdaten.adresseHinweis}</span>
                    </address>
                  </Rubrik>

                  <Rubrik ueberschrift={s.ueberschriftErreichbar}>
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
                  </Rubrik>

                  <Rubrik ueberschrift={s.ueberschriftAnfahrt}>{s.anfahrt}</Rubrik>

                  <div className="rounded-3xl border border-sand bg-shell p-7">
                    <p className="font-display text-xl text-ink">{s.kastenUeberschrift}</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">{s.kastenText}</p>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <Reveal delay={120}>
                <div className="rounded-3xl border border-sand bg-shell/80 p-8 backdrop-blur-sm sm:p-10">
                  <h2 className="font-display text-3xl text-ink">
                    {inhalt.formular.ueberschrift}
                  </h2>
                  <p className="mt-3 mb-8 leading-relaxed text-ink-soft">
                    {inhalt.formular.einleitung}
                  </p>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Pflichthinweis rahmen="border-t" />
    </>
  );
}
