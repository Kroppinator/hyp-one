import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import inhalt from '@/inhalte/rechtlich.impressum.json';

export const metadata: Metadata = {
  title: 'Impressum',
  robots: { index: false, follow: true },
};

export default function Impressum() {
  return <LegalPage inhalt={inhalt} />;
}
