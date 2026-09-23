import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Karla } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.transformationbeiisa.de'),
  title: {
    default: 'Transformation bei Isa – Coaching & Beratung mit Auflösender Hypnose©',
    template: '%s | Transformation bei Isa',
  },
  description:
    'Isabelle Kroppenstedt begleitet dich bei deiner Reise nach Innen: emotionales Coaching, Gespräch und Auflösende Hypnose© in Buchholz in der Nordheide. Damit das Leben wieder Farbe bekommt.',
  keywords: [
    'Coaching',
    'Auflösende Hypnose',
    'Hypnose Buchholz',
    'emotionales Coaching',
    'Beratung',
    'Buchholz in der Nordheide',
    'Isabelle Kroppenstedt',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Transformation bei Isa',
    title: 'Damit das Leben wieder Farbe bekommt…',
    description:
      'Emotionales Coaching und Auflösende Hypnose© – ich begleite dich bei deiner individuellen Reise nach Innen.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fdfbf7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${karla.variable}`}>
      <body className="bg-cream text-ink antialiased">
        {/*
          Schaltet die Einblend-Animation ein, bevor die Seite gezeichnet wird.
          Meldet sich Reveal nicht innerhalb von 2 Sekunden zurück (React konnte
          nicht starten), wird die Klasse wieder entfernt und der komplette
          Inhalt ist sichtbar – eine leere Seite kann so nicht entstehen.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');" +
              "setTimeout(function(){if(!d.hasAttribute('data-reveal-ready'))" +
              "d.classList.remove('js');},2000);",
          }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-cream"
        >
          Zum Inhalt springen
        </a>
        <Navbar />
        <main id="inhalt">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
