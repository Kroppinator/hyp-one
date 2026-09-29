import Image from 'next/image';

/**
 * Rahmen für Isas Aquarelle.
 *
 * Die Bilder sind auf weißem Grund gemalt. Die Klasse "aquarell" (siehe
 * globals.css) blendet dieses Weiß per mix-blend-mode in den Seitenhintergrund
 * ein, sodass kein weißer Kasten stehen bleibt. Deshalb gehört diese
 * Komponente nur auf helle Flächen, nicht in den dunklen Abschnitt.
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
  rounded = 'rounded-3xl',
  priority = false,
  blend = true,
  fit = 'object-cover',
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
  priority?: boolean;
  /** Freigestellte Bilder (z. B. das Porträt) brauchen kein Multiply. */
  blend?: boolean;
  fit?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
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
