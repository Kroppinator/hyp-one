export default function Impressum() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Impressum</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-dark mb-6">Impressum</h2>

          <h3 className="text-xl font-semibold text-dark mb-3">Angaben gemäß § 5 TMG</h3>
          <p className="mb-6">
            [Dein Name]<br />
            [Deine Adresse]<br />
            [PLZ Stadt]<br />
            Deutschland
          </p>

          <h3 className="text-xl font-semibold text-dark mb-3">Kontakt</h3>
          <p className="mb-6">
            Telefon: [Deine Telefonnummer]<br />
            E-Mail: [Deine E-Mail]
          </p>

          <h3 className="text-xl font-semibold text-dark mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p className="mb-6">[Dein Name]</p>

          <h3 className="text-xl font-semibold text-dark mb-3">Haftungsausschluss</h3>

          <h4 className="text-lg font-semibold text-dark mb-2">Haftung für Inhalte</h4>
          <p className="mb-6">
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h4 className="text-lg font-semibold text-dark mb-2">Haftung für Links</h4>
          <p className="mb-6">
            Unsere Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h4 className="text-lg font-semibold text-dark mb-2">Urheberrecht</h4>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Schöpfers.
          </p>
        </div>
      </section>
    </>
  );
}
