/**
 * Platzhalter für Isas Aquarell-Bilder.
 * Sobald die echten Dateien unter /public/bilder/ liegen, kann dieser
 * Baustein durch <Image src="/bilder/..." ... /> ersetzt werden.
 */
export default function ImageSlot({
  caption,
  className = '',
  rounded = 'rounded-3xl',
}: {
  caption: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage/30 via-shell to-apricot/30 ${rounded} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-rose/20 via-transparent to-transparent" />
      <span className="relative px-6 text-center font-display text-sm tracking-wide text-ink-soft/70 italic">
        {caption}
      </span>
    </div>
  );
}
