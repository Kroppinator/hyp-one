import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import inhalt from '@/inhalte/rechtlich.datenschutz.json';

export const metadata: Metadata = {
  title: 'Datenschutz',
  robots: { index: false, follow: true },
};

export default function Datenschutz() {
  return <LegalPage inhalt={inhalt} />;
}
