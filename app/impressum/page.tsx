import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        Isabelle Kroppenstedt
        <br />
        Transformation bei Isa – Coaching und Begleitung
        <br />
        [Straße und Hausnummer]
        <br />
        21244 Buchholz in der Nordheide
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 0155 60906840
        <br />
        E-Mail: isabelle-kroppenstedt@gmx.de
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Isabelle Kroppenstedt, Anschrift wie oben.
      </p>

      <h2>Berufsbezeichnung und Hinweise zur Tätigkeit</h2>
      <p>
        Die angebotenen Leistungen sind Coaching und Begleitung in Veränderungs- und
        Entscheidungsprozessen. Sie stellen keine Heilbehandlung dar und sind kein
        Ersatz für ärztliche oder psychotherapeutische Behandlung. Ich weise
        ausdrücklich darauf hin, dass ich nicht mehr ärztlich oder therapeutisch tätig
        bin. Die Kosten tragen die Klientinnen und Klienten eigenständig.
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine
        Gewähr übernehmen. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 DDG bin ich als Diensteanbieterin jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Diese Website enthält gegebenenfalls Links zu externen Webseiten Dritter, auf
        deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf diesen Seiten erstellten Inhalte und Werke unterliegen dem deutschen
        Urheberrecht. „Auflösende Hypnose©" ist eine geschützte Bezeichnung.
      </p>

      <p className="mt-12 rounded-2xl border border-sand bg-shell p-6 text-sm">
        <strong className="text-ink">Hinweis an die Betreiberin:</strong> Für das
        Impressum verlangt § 5 DDG eine vollständige, ladungsfähige Anschrift – Ort und
        Postleitzahl allein genügen hier nicht, auch wenn die Adresse auf den übrigen
        Seiten bewusst nicht genannt wird. Bitte Straße und Hausnummer ergänzen und das
        fertige Impressum vor dem Livegang rechtlich prüfen lassen.
      </p>
    </LegalPage>
  );
}
