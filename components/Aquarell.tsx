import Image from 'next/image';

/**
 * Rahmen für Isas Aquarelle.
 *
 * Die Bilder sind auf weißem Grund gemalt. Die Klasse "aquarell" (siehe
 * globals.css) blendet dieses Weiß per mix-blend-mode in den Seitenhintergrund
 * ein, sodass kein weißer Kasten stehen bleibt. Deshalb gehört diese
 * Komponente nur auf helle Flächen, nicht in den dunklen Abschnitt.
 *
 * Standardmäßig bekommen die Bilder eine fließende Form ("blob"): eine
 * organische Silhouette mit weich auslaufendem Rand, die langsam wandert.
 * Freigestellte Bilder wie das Porträt haben ohnehin keinen harten Rand –
 * die bekommen shape="rect".
 *
 * ACHTUNG: Der Rahmen setzt selbst "relative". Über className KEIN "absolute"
 * mitgeben – Tailwind stellt .relative im CSS hinter .absolute, das Bild
 * verliert dadurch seine Höhe und verschwindet. Größe stattdessen über
 * aspect-* und w-* an className übergeben.
 */
export default function Aquarell({
  src,
  alt,
  className = '',
  shape = 'blob',
  rounded = 'rounded-3xl',
  morph = true,
  morphDelay = 0,
  priority = false,
  blend = true,
  fit = 'object-cover',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src: string;
  alt: string;
  className?: string;
  /** "blob" = fließende Form, "rect" = klassisch mit border-radius. */
  shape?: 'blob' | 'rect';
  rounded?: string;
  /** Lässt die fließende Form langsam ihre Kontur verändern. */
  morph?: boolean;
  /** Sekunden Versatz, damit mehrere Bilder nicht im Gleichtakt atmen. */
  morphDelay?: number;
  priority?: boolean;
  /** Freigestellte Bilder (z. B. das Porträt) brauchen kein Multiply. */
  blend?: boolean;
  fit?: string;
  sizes?: string;
}) {
  const form =
    shape === 'blob'
      ? `blob ${morph ? 'blob-morph' : ''}`
      : `overflow-hidden ${rounded}`;

  return (
    <div
      className={`relative ${form} ${className}`}
      style={morphDelay ? { animationDelay: `${morphDelay}s` } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`${blend ? 'aquarell' : ''} ${fit}`}
      />
    </div>
  );
}
