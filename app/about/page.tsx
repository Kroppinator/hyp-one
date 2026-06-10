export default function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Über mich</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-4">Wer bin ich?</h2>
              <p className="mb-4 leading-relaxed">
                [Hier kommt Deine persönliche Vorstellung und Dein Hintergrund. Erzähle von Deinem Werdegang, Deinen Erfahrungen und dem, was Dich bewogen hat, Coach zu werden.]
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-4">Mein Ansatz</h3>
              <p className="mb-4 leading-relaxed">
                [Beschreibe hier Deinen Coaching-Ansatz. Was sind Deine Philosophie und Werte? Wie arbeitest Du mit Klienten?]
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-4">Qualifikationen</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>[Qualifikation 1]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>[Qualifikation 2]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>[Qualifikation 3]</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span>[Qualifikation 4]</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark mb-4">Meine Leidenschaft</h3>
              <p className="leading-relaxed">
                [Erkläre, was Dich in Deiner Arbeit erfüllt und warum Du Coaching liebst. Was ist Deine Vision für Deine Klienten?]
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
