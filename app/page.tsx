import Image from 'next/image';
import Link from 'next/link';
import { Star, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function HomePage() {
  const featuredCookies = [
    {
      id: 'cc01',
      name: 'The Classic Chip',
      description: 'Gooey semi-sweet chunks with sea salt flakes.',
      price: 3.50,
      imageUrl: '/file.svg', // Placeholder using existing file
      rating: 5,
    },
    {
      id: 'rv02',
      name: 'Red Velvet Dream',
      description: 'Soft, vibrant cookie topped with cream cheese drizzle.',
      price: 4.00,
      imageUrl: '/file.svg', // Placeholder
      rating: 4,
    },
    {
      id: 'pb03',
      name: 'Peanut Butter Blast',
      description: 'Creamy peanut butter center with a crunchy exterior.',
      price: 3.75,
      imageUrl: '/file.svg', // Placeholder
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-amber-50 text-amber-950 overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <div className="flex flex-col gap-6">
            <span className="inline-block px-4 py-1.5 bg-amber-200/50 text-amber-900 rounded-full text-sm font-bold tracking-wide self-center md:self-start">
              BAKED FRESH DAILY
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
              Freshly Baked, <br />
              <span className="text-amber-700 underline decoration-amber-300">Ready to Roll.</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-900/80 max-w-xl font-medium leading-relaxed">
              Handcrafted cookies delivered from our kitchen to your doorstep. The perfect treat for your next study session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link href="/catalog" className="bg-amber-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-800 transition text-lg shadow-lg shadow-amber-900/20">
                View the Catalog
              </Link>
              <Link href="/contact" className="bg-white text-amber-950 px-10 py-4 rounded-full font-bold hover:bg-zinc-50 transition text-lg border-2 border-amber-900/10">
                Find Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex relative aspect-square md:aspect-auto h-[400px] md:h-[600px] bg-amber-100 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 items-center justify-center border-4 border-white">
             {/* Placeholder for cookie image */}
             <div className="text-amber-800 flex flex-col items-center gap-4 p-12 text-center">
                <div className="w-32 h-32 bg-amber-200 rounded-full flex items-center justify-center animate-pulse">
                  <Star className="w-16 h-16 fill-amber-500 text-amber-500" />
                </div>
                <p className="font-black text-3xl">Delicious Cookies <br/> Waiting for You</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl">Fast Delivery</h3>
            <p className="text-zinc-500">Get your cookies warm and fresh within 30 minutes of baking.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl">Quality Ingredients</h3>
            <p className="text-zinc-500">We use only organic flour and premium chocolate chunks.</p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl">Made to Order</h3>
            <p className="text-zinc-500">Every batch is baked specifically for your pre-order.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
