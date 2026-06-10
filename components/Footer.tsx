import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-8 text-center mt-12">
      <div className="max-w-6xl mx-auto px-5">
        <p className="mb-4">&copy; 2026 Coaching. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <Link href="/impressum" className="text-gray-400 hover:text-white transition-all">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-all">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
