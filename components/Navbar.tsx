'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-100 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-5 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Coaching</div>
        <button
          className="md:hidden text-2xl bg-none border-none cursor-pointer text-dark"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } md:flex absolute md:static top-16 left-0 right-0 md:top-auto bg-white flex-col md:flex-row border-b md:border-b-0 border-gray-300`}
        >
          <li className="border-b md:border-b-0 border-gray-300">
            <Link href="/" className="block px-5 py-4 md:px-4 md:py-2 text-gray-700 hover:bg-light hover:text-primary transition-all" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="border-b md:border-b-0 border-gray-300">
            <Link href="/about" className="block px-5 py-4 md:px-4 md:py-2 text-gray-700 hover:bg-light hover:text-primary transition-all" onClick={closeMenu}>
              Über mich
            </Link>
          </li>
          <li className="border-b md:border-b-0 border-gray-300">
            <Link href="/services" className="block px-5 py-4 md:px-4 md:py-2 text-gray-700 hover:bg-light hover:text-primary transition-all" onClick={closeMenu}>
              Leistungen
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-5 py-4 md:px-4 md:py-2 text-gray-700 hover:bg-light hover:text-primary transition-all" onClick={closeMenu}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
