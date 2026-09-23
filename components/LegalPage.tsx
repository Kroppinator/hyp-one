import Spiral from './Spiral';

/** Gemeinsamer Rahmen für Impressum und Datenschutz. */
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="watercolor -top-24 -right-20 h-80 w-80 bg-sage/40" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <Spiral className="h-9 w-9 text-apricot/60" />
        <h1 className="mt-6 font-display text-4xl text-ink sm:text-5xl">{title}</h1>

        <div className="mt-12 space-y-6 leading-relaxed text-ink-soft [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-ink [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:text-ink [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </article>
  );
}
