export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-20 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Deine persönliche Transformation
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Begleitung für Dein bestes Leben – fokussiert, empathisch, ergebnisorientiert
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded font-semibold hover:bg-indigo-600 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-dark">Meine Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-dark mb-2">Persönliches Coaching</h3>
              <p>Individuelle Sessions für Deine persönliche Entwicklung und Zielerreichung.</p>
            </div>
            <div className="bg-light p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-dark mb-2">Berufliche Entwicklung</h3>
              <p>Unterstützung beim Karrierewechsel, Aufbau von Führungskompetenzen.</p>
            </div>
            <div className="bg-light p-8 rounded-lg border-l-4 border-primary hover:shadow-lg transition-all transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-dark mb-2">Work-Life-Balance</h3>
              <p>Strategien für bessere Balance zwischen Beruf und Privatleben.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 md:py-16 px-5 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Veränderung?</h2>
          <p className="text-lg mb-8 opacity-95">
            Lass uns zusammen an Deinen Zielen arbeiten. Vereinbare heute noch ein kostenloses Vorgespräch.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded hover:bg-gray-100 transition-all"
          >
            Kostenloses Vorgespräch
          </a>
        </div>
      </section>
    </>
  );
}
