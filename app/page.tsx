import Link from 'next/link';
import Image from 'next/image';
import { Truck, ShieldCheck, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative bg-amber-50 text-amber-950 overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
          <div className="flex flex-col gap-8">
            <div className="flex justify-center md:justify-start">
              <Image 
                src="https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/Logos/Logo%20Full%20Fixed.png"
                alt="Cookies To Go Full Logo"
                width={280}
                height={140}
                className="h-auto w-56 md:w-72 object-contain"
                priority
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1]">
                Freshly Baked, <br />
                <span className="text-amber-700 underline decoration-amber-300">Ready to Roll.</span>
              </h1>
              <p className="text-xl md:text-2xl text-amber-900/80 max-w-xl font-medium leading-relaxed">
                Handcrafted cookies delivered from our kitchen to your doorstep. The perfect treat for your next study session.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link href="/catalog" className="bg-amber-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-800 transition text-lg shadow-lg shadow-amber-900/20">
                View the Catalog
              </Link>
              <Link href="/review" className="bg-white text-amber-950 px-10 py-4 rounded-full font-bold hover:bg-zinc-50 transition text-lg border-2 border-amber-900/10">
                Read Reviews
              </Link>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-auto h-[400px] md:h-[600px] bg-amber-100 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
             <Image 
                src="https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/cookies-images/Ori1.jpg"
                alt="Delicious Chocolate Chip Cookie"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
             />
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
