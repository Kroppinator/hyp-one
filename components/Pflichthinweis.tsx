import hinweis from '@/inhalte/rechtlich.hinweise.json';

/**
 * Das Hinweisband am Fuß jeder Inhaltsseite.
 * Der Text steht in inhalte/rechtlich.hinweise.json und wird dort gepflegt –
 * bewusst an einer einzigen Stelle, damit die Fassungen nicht auseinanderlaufen.
 */
export default function Pflichthinweis({ rahmen = 'border-y' }: { rahmen?: string }) {
  return (
    <section className={`${rahmen} border-sand bg-sand/60 py-12`}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="leading-relaxed text-ink-soft">
          <span className="text-ink">{hinweis.ueberschrift}</span> {hinweis.text}
        </p>
      </div>
    </section>
  );
}
