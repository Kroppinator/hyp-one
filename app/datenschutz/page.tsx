import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <h2>1. Verantwortliche Stelle</h2>
      <p>
        Isabelle Kroppenstedt
        <br />
        [Straße und Hausnummer]
        <br />
        21244 Buchholz in der Nordheide
        <br />
        E-Mail: [E-Mail-Adresse]
        <br />
        Telefon: [Telefonnummer]
      </p>

      <h2>2. Datenschutz auf einen Blick</h2>
      <p>
        Der Schutz deiner persönlichen Daten ist mir wichtig – gerade bei den Themen, um
        die es hier geht. Diese Website setzt <strong>keine Cookies</strong> zu
        Analyse- oder Marketingzwecken ein, bindet keine Social-Media-Plugins ein und
        verwendet kein Tracking. Schriftarten werden lokal vom eigenen Server
        ausgeliefert, es findet also keine Verbindung zu Google Fonts statt.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei [Hosting-Anbieter, z. B. Vercel Inc.] gehostet. Beim
        Aufruf der Seite werden durch den Anbieter automatisch sogenannte Server-Logfiles
        erfasst:
      </p>
      <ul>
        <li>IP-Adresse (gekürzt bzw. kurzzeitig gespeichert)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite und übertragene Datenmenge</li>
        <li>Browsertyp und Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind technisch erforderlich, um die Website sicher und stabil
        auszuliefern. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
        Interesse an einem technisch fehlerfreien Betrieb). Mit dem Anbieter besteht ein
        Vertrag zur Auftragsverarbeitung.
      </p>

      <h2>4. Kontaktformular und E-Mail</h2>
      <p>
        Wenn du mir über das Kontaktformular schreibst, werden die von dir angegebenen
        Daten (Name, E-Mail-Adresse, optional Telefonnummer, Anliegen und Nachricht) per
        E-Mail an mich übermittelt und dort gespeichert. Ich verwende diese Angaben
        ausschließlich zur Bearbeitung deiner Anfrage und gebe sie nicht an Dritte
        weiter.
      </p>
      <p>
        Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie
        Art. 6 Abs. 1 lit. b DSGVO, soweit die Anfrage auf einen Vertragsabschluss
        gerichtet ist. Du kannst deine Einwilligung jederzeit formlos widerrufen. Die
        Daten verbleiben bei mir, bis du die Löschung verlangst oder der Zweck entfällt;
        gesetzliche Aufbewahrungsfristen bleiben unberührt.
      </p>
      <p>
        Der Versand erfolgt über den Mailserver [E-Mail-Anbieter]. Das Formular enthält
        ein verstecktes Feld zur Spam-Abwehr, das keine personenbezogenen Daten erhebt.
      </p>

      <h2>5. Vertraulichkeit der Sitzungsinhalte</h2>
      <p>
        Alles, was du mir in einem Vorgespräch oder in einer Sitzung anvertraust,
        behandle ich vertraulich. Aufzeichnungen zu Sitzungen werden ausschließlich zur
        Begleitung deines Prozesses geführt und nicht über diese Website verarbeitet.
      </p>

      <h2>6. Deine Rechte</h2>
      <p>Du hast jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über die zu dir gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
      </ul>
      <p>
        Außerdem steht dir ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu
        – für Niedersachsen ist das die Landesbeauftragte für den Datenschutz
        Niedersachsen.
      </p>

      <h2>7. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine TLS-Verschlüsselung. Du erkennst
        sie daran, dass die Adresszeile deines Browsers mit „https://" beginnt.
      </p>

      <p className="mt-12 rounded-2xl border border-sand bg-shell p-6 text-sm">
        <strong className="text-ink">Hinweis an die Betreiberin:</strong> Diese
        Datenschutzerklärung ist ein sorgfältig vorbereiteter Entwurf, aber keine
        Rechtsberatung. Bitte ergänze die Angaben in eckigen Klammern und lass den Text
        vor dem Livegang rechtlich prüfen.
      </p>
    </LegalPage>
  );
}
