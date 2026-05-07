'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import CheckoutModal from '@/components/CheckoutModal';

export default function CatalogPage() {
  const { addToCart, totalItems } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const allCookies = [
    {
      id: 'cc-01',
      name: 'Choco Chip',
      description: 'The timeless classic loaded with premium semi-sweet chocolate chips.',
      imageUrl: 'https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/cookies-images/Ori1.jpg',
      price: 10000,
    },
    {
      id: 'dc-02',
      name: 'Double Choco',
      description: 'Rich cocoa dough packed with dark chocolate chunks for the ultimate indulgence.',
      imageUrl: 'https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/cookies-images/Darkchoco.png',
      price: 10000,
    },
    {
      id: 'ma-03',
      name: 'Matcha',
      description: 'Earthy ceremonial grade matcha balanced with the crispiness of almonds.',
      imageUrl: 'https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/cookies-images/Matcha.jpg',
      price: 10000,
    },
    {
      id: 'rv-04',
      name: 'Red Velvet',
      description: 'Soft, vibrant cocoa cookie with a hint of vanilla and white chocolate chips.',
      imageUrl: 'https://gjbrctwfehdmodvvwbbe.supabase.co/storage/v1/object/public/cookies-images/Redvelvet.png',
      price: 10000,
    },
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* Header */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-4 tracking-tight text-center md:text-left">The Cookie Catalog</h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-medium text-center md:text-left">
            All our cookies are baked in small batches to ensure the highest quality. 
            Every <span className="text-white font-bold">2 cookies</span> are priced at <span className="text-white font-bold">15.000</span>. Individual cookies are priced at <span className="text-white font-bold">10.000.</span>
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 border-b border-zinc-100 pb-8">
             <h2 className="text-2xl font-bold text-zinc-900">Our Menu</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCookies.map((cookie) => (
              <div key={cookie.id} className="group flex flex-col border border-zinc-100 rounded-3xl overflow-hidden hover:border-amber-900/20 hover:shadow-xl transition-all duration-300 bg-white">
                <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden">
                   <Image 
                    src={cookie.imageUrl}
                    alt={cookie.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-zinc-950 group-hover:text-amber-900 transition-colors">{cookie.name}</h3>
                  </div>
                  <p className="text-zinc-500 mb-8 font-medium leading-relaxed flex-grow">{cookie.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-zinc-50">
                    <span className="text-xl font-black text-zinc-900">{(cookie.price).toLocaleString()} IDR</span>
                    <button 
                      onClick={() => addToCart(cookie)}
                      className="bg-zinc-950 text-white p-4 rounded-2xl hover:bg-amber-900 transition shadow-lg group-hover:scale-105 active:scale-95 flex items-center gap-2"
                    >
                      <Plus className="w-6 h-6" />
                      <span className="font-bold pr-2">Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Preview (Fixed) */}
      <div className="fixed bottom-8 right-8 z-40">
        <button 
          onClick={() => setIsCheckoutOpen(true)}
          className="bg-amber-900 text-white px-8 py-5 rounded-full font-black text-xl shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform active:scale-95 group"
        >
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-amber-900 text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black animate-in zoom-in duration-300">
                {totalItems}
              </span>
            )}
          </div>
          <span>Your Pre-order</span>
          <span className="bg-amber-800/50 px-3 py-1 rounded-lg text-sm font-bold">
            Checkout
          </span>
        </button>
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}
