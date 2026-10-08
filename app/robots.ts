import type { MetadataRoute } from 'next';
import { suchmaschinenErlaubt } from './layout';

/**
 * Erzeugt /robots.txt passend zur Einstellung aus layout.tsx.
 *
 * Solange SUCHMASCHINEN_ERLAUBEN nicht auf "true" steht, wird die ganze
 * Seite gesperrt – das ist die richtige Vorgabe für einen Testserver.
 */
export default function robots(): MetadataRoute.Robots {
  if (!suchmaschinenErlaubt) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/impressum', '/datenschutz'] },
  };
}
