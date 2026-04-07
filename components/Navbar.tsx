import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-amber-900 tracking-tighter hover:opacity-80 transition">
          COOKIES TO GO
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/catalog" className="font-medium text-zinc-600 hover:text-amber-900 transition">
            Catalog
          </Link>
          <Link href="/review" className="font-medium text-zinc-600 hover:text-amber-900 transition">
            Review
          </Link>
          <Link href="/contact" className="font-medium text-zinc-600 hover:text-amber-900 transition">
            Contact
          </Link>
          <Link href="/catalog" className="bg-amber-950 text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-amber-800 transition">
            Pre-order Now
          </Link>
        </div>

        {/* Mobile menu button could be added here */}
      </div>
    </nav>
  );
}
