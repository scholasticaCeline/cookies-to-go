import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-100 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-black text-amber-900 tracking-tighter mb-4">COOKIES TO GO</h2>
          <p className="text-zinc-500 max-w-sm">
            Handcrafted cookies delivered from our kitchen to your doorstep. Freshly baked every day, ready to roll.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold text-zinc-950 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-zinc-600">
            <li><Link href="/catalog" className="hover:text-amber-800 transition">Catalog</Link></li>
            <li><Link href="/review" className="hover:text-amber-800 transition">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-amber-800 transition">Contact Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold text-zinc-950 mb-4">Social</h3>
          <ul className="space-y-2 text-zinc-600">
            <li><a href="#" className="hover:text-amber-800 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-amber-800 transition">TikTok</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200 text-center text-zinc-400 text-sm font-medium">
        &copy; {new Date().getFullYear()} Cookies to Go. All rights reserved.
      </div>
    </footer>
  );
}
