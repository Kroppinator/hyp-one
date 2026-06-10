export default function Services() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Meine Leistungen</h1>
          <p className="text-lg opacity-95 mt-3">Maßgeschneiderte Coaching-Pakete für Deine Ziele</p>
        </div>
      </section>

      <section className="py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-light p-8 rounded-lg border border-gray-300 hover:shadow-xl hover:border-primary transition-all transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-dark mb-2">Starter Paket</h2>
              <p className="text-primary font-bold text-xl mb-4">€ 149</p>
              <ul className="space-y-3 mt-6 mb-8">
                <li className="text-gray-700">✓ 1 Coaching-Session (60 Min.)</li>
                <li className="text-gray-700">✓ Persönliche Analyse</li>
                <li className="text-gray-700">✓ Konkrete Handlungsschritte</li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-indigo-600 transition-all">
                Buchen
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-light p-8 rounded-lg border-2 border-primary shadow-lg transform -translate-y-2">
              <div className="mb-4">
                <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  POPULAR
                </span>
              </div>
              <h2 className="text-2xl font-bold text-dark mb-2">Coaching Paket</h2>
              <p className="text-primary font-bold text-xl mb-4">€ 449</p>
              <ul className="space-y-3 mt-6 mb-8">
                <li className="text-gray-700">✓ 5 Coaching-Sessions (je 60 Min.)</li>
                <li className="text-gray-700">✓ Detaillierter Entwicklungsplan</li>
                <li className="text-gray-700">✓ Email-Support zwischen Sessions</li>
                <li className="text-gray-700">✓ Persönliche Begleitung</li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-indigo-600 transition-all">
                Buchen
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-light p-8 rounded-lg border border-gray-300 hover:shadow-xl hover:border-primary transition-all transform hover:-translate-y-1">
              <h2 className="text-2xl font-bold text-dark mb-2">Intensive Begleitung</h2>
              <p className="text-primary font-bold text-xl mb-4">€ 999</p>
              <ul className="space-y-3 mt-6 mb-8">
                <li className="text-gray-700">✓ 12 Coaching-Sessions (je 60 Min.)</li>
                <li className="text-gray-700">✓ Umfassender Coaching-Plan</li>
                <li className="text-gray-700">✓ 24/7 Email-Support</li>
                <li className="text-gray-700">✓ Persönliche Telefon-Hotline</li>
              </ul>
              <button className="w-full px-6 py-3 bg-primary text-white rounded font-semibold hover:bg-indigo-600 transition-all">
                Buchen
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-3">Kostenlos kennenlernen?</h2>
            <p className="mb-6 opacity-95">
              Lass uns ein unverbindliches Vorgespräch führen und schauen, welches Paket am besten zu Dir passt.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded hover:bg-gray-100 transition-all"
            >
              Vorgespräch buchen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
