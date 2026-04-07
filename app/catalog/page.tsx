import Image from 'next/image';
import { Star, Plus } from 'lucide-react';

export default function CatalogPage() {
  const allCookies = [
    {
      id: 'cc01',
      name: 'The Classic Chip',
      description: 'Gooey semi-sweet chunks with sea salt flakes.',
      price: 3.50,
      imageUrl: '/file.svg',
      rating: 5,
      category: 'Classic',
    },
    {
      id: 'rv02',
      name: 'Red Velvet Dream',
      description: 'Soft, vibrant cookie topped with cream cheese drizzle.',
      price: 4.00,
      imageUrl: '/file.svg',
      rating: 4,
      category: 'Specialty',
    },
    {
      id: 'pb03',
      name: 'Peanut Butter Blast',
      description: 'Creamy peanut butter center with a crunchy exterior.',
      price: 3.75,
      imageUrl: '/file.svg',
      rating: 5,
      category: 'Classic',
    },
    {
      id: 'dm04',
      name: 'Dark Chocolate Matcha',
      description: 'Premium ceremonial grade matcha with dark chocolate bits.',
      price: 4.25,
      imageUrl: '/file.svg',
      rating: 5,
      category: 'Specialty',
    },
    {
      id: 'sc05',
      name: 'Salted Caramel Swirl',
      description: 'Handmade caramel swirled into our signature dough.',
      price: 4.00,
      imageUrl: '/file.svg',
      rating: 4,
      category: 'Specialty',
    },
    {
      id: 'od06',
      name: 'Oatmeal Double Raisin',
      description: 'Hearty oats with plump raisins and a hint of cinnamon.',
      price: 3.50,
      imageUrl: '/file.svg',
      rating: 4,
      category: 'Classic',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-zinc-950 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-4 tracking-tight text-center md:text-left">The Cookie Catalog</h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-medium text-center md:text-left">
            All our cookies are baked in small batches to ensure the highest quality. 
            Pre-order now for our next delivery window.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 border-b border-zinc-100 pb-8">
             <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                <button className="bg-amber-900 text-white px-6 py-2 rounded-full font-bold whitespace-nowrap">All Cookies</button>
                <button className="bg-zinc-100 text-zinc-600 px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition whitespace-nowrap">Classic</button>
                <button className="bg-zinc-100 text-zinc-600 px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition whitespace-nowrap">Specialty</button>
                <button className="bg-zinc-100 text-zinc-600 px-6 py-2 rounded-full font-bold hover:bg-zinc-200 transition whitespace-nowrap">Seasonal</button>
             </div>
             <p className="text-zinc-500 font-medium">Showing {allCookies.length} varieties</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCookies.map((cookie) => (
              <div key={cookie.id} className="group flex flex-col border border-zinc-100 rounded-3xl overflow-hidden hover:border-amber-900/20 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] bg-zinc-50 relative flex items-center justify-center p-12">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-amber-900 uppercase tracking-widest border border-amber-900/10">
                      {cookie.category}
                   </div>
                   <Image 
                    src={cookie.imageUrl}
                    alt={cookie.name}
                    width={150}
                    height={150}
                    className="object-contain opacity-10 group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-amber-100/50 rounded-full flex items-center justify-center">
                        <Star className="w-10 h-10 text-amber-900 fill-amber-900 opacity-20" />
                      </div>
                   </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-zinc-950 group-hover:text-amber-900 transition-colors">{cookie.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="font-bold text-zinc-900">{cookie.rating}.0</span>
                    </div>
                  </div>
                  <p className="text-zinc-500 mb-8 font-medium leading-relaxed flex-grow">{cookie.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-3xl font-black text-zinc-900">
                      ${cookie.price.toFixed(2)}
                    </span>
                    <button className="bg-zinc-950 text-white p-4 rounded-2xl hover:bg-amber-900 transition shadow-lg group-hover:scale-105">
                      <Plus className="w-6 h-6" />
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
        <button className="bg-amber-900 text-white px-8 py-4 rounded-full font-black text-lg shadow-2xl flex items-center gap-3 hover:scale-105 transition-transform active:scale-95">
          <span>Your Pre-order</span>
          <span className="bg-amber-800 px-2 py-0.5 rounded text-sm">0 items</span>
        </button>
      </div>
    </div>
  );
}
