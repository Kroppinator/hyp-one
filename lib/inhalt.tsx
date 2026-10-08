import type { ReactNode } from 'react';
import stammdaten from '@/inhalte/stammdaten.json';

/**
 * Setzt Platzhalter aus den Stammdaten ein.
 *
 * In den Inhaltsdateien steht zum Beispiel {email} oder {ort}. Hier wird das
 * durch den passenden Wert aus inhalte/stammdaten.json ersetzt. Dadurch muss
 * eine Telefonnummer nur an einer einzigen Stelle gepflegt werden.
 *
 * Unbekannte Platzhalter bleiben sichtbar stehen – ein Tippfehler fällt so im
 * Browser auf, statt stillschweigend eine Lücke zu hinterlassen.
 */
export function fuelle(text: string): string {
  const werte = stammdaten as Record<string, string>;
  return text.replace(/\{(\w+)\}/g, (treffer, schluessel: string) =>
    typeof werte[schluessel] === 'string' ? werte[schluessel] : treffer
  );
}

/**
 * Hebt *mit Sternchen markierte* Stellen hervor.
 *
 * In den Inhaltsdateien schreibt man: "Das ist *besonders wichtig*."
 * Welche Auszeichnung daraus wird, bestimmt die aufrufende Stelle über
 * `klasse` – mal kräftigeres Schwarz, mal eine Akzentfarbe.
 */
export function betont(text: string, klasse = 'text-ink'): ReactNode[] {
  return text.split(/(\*[^*]+\*)/g).map((teil, i) =>
    teil.startsWith('*') && teil.endsWith('*') && teil.length > 2 ? (
      <span key={i} className={klasse}>
        {teil.slice(1, -1)}
      </span>
    ) : (
      teil
    )
  );
}

/** Platzhalter einsetzen und Betonungen auszeichnen – der Normalfall. */
export function text(roh: string, klasse?: string): ReactNode[] {
  return betont(fuelle(roh), klasse);
}

export { stammdaten };
