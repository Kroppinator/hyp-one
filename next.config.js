/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js blockiert Dev-Ressourcen (HMR, Chunks), die von einer anderen
  // Herkunft als localhost angefragt werden. Für Tests vom Handy oder Tablet
  // im selben WLAN muss die IP des Entwicklungsrechners hier stehen.
  // Ändert sich die IP im Netz, diesen Eintrag anpassen und `npm run dev` neu starten.
  // Betrifft ausschließlich die Entwicklung – in Produktion hat es keine Wirkung.
  allowedDevOrigins: ['192.168.178.21'],

  // ---------------------------------------------------------------------
  // Nur auf diesem Branch: Vorbereitung für das Hosting bei Uberspace.
  // ---------------------------------------------------------------------

  // "standalone" legt unter .next/standalone einen fertigen Server ab, der
  // nur die tatsächlich benötigten Pakete enthält. Statt mehrerer hundert
  // Megabyte node_modules werden so nur wenige Megabyte hochgeladen.
  output: 'standalone',

  images: {
    // Ohne Vercel müsste die Bildgrößen-Berechnung auf dem Server laufen.
    // Das bräuchte "sharp" – ein Paket mit kompiliertem Anteil, das zur
    // Plattform des Servers passen muss und beim Hochladen aus der
    // Build-Umgebung gern Ärger macht.
    //
    // Wir brauchen es nicht: Alle Bilder in public/bilder sind bereits
    // als WebP mit höchstens 1200 Pixel Kantenlänge abgelegt, zusammen
    // rund 1 MB. Der Gewinn durch zusätzliche Verkleinerung wäre gering,
    // das Risiko beim Ausliefern dagegen real.
    //
    // Folge: next/image liefert die Datei unverändert aus. Verzögertes
    // Laden und das Freihalten des Platzes bleiben erhalten.
    unoptimized: true,
  },
};

module.exports = nextConfig;
