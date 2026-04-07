'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Catalog', href: '/catalog' },
    { name: 'Review', href: '/review' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-amber-900 tracking-tighter hover:opacity-80 transition">
          COOKIES TO GO
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-medium text-zinc-600 hover:text-amber-900 transition">
              {link.name}
            </Link>
          ))}
          <Link href="/catalog" className="bg-amber-950 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-amber-800 transition">
            Pre-order Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-zinc-600 hover:text-amber-900 transition">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-100 py-6 px-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block font-bold text-lg text-zinc-900 hover:text-amber-900 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/catalog" 
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-amber-900 text-white py-4 rounded-xl font-bold"
          >
            Pre-order Now
          </Link>
        </div>
      )}
    </nav>
  );
}
