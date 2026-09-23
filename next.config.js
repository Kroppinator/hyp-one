/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js blockiert Dev-Ressourcen (HMR, Chunks), die von einer anderen
  // Herkunft als localhost angefragt werden. Für Tests vom Handy oder Tablet
  // im selben WLAN muss die IP des Entwicklungsrechners hier stehen.
  // Ändert sich die IP im Netz, diesen Eintrag anpassen und `npm run dev` neu starten.
  // Betrifft ausschließlich die Entwicklung – in Produktion hat es keine Wirkung.
  allowedDevOrigins: ['192.168.178.21'],
};

module.exports = nextConfig;
