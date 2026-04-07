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

      {/* 2. VALUE PROPS */}
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

      {/* 3. BEST SELLERS */}
      <section className="py-24 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">Weekly Best Sellers</h2>
              <p className="text-zinc-600 text-lg max-w-xl font-medium">The cookies our classmates can&apos;t get enough of. Grab them before they&apos;re gone!</p>
            </div>
            <Link href="/catalog" className="text-amber-800 font-bold hover:underline flex items-center gap-2 text-lg">
              Full Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {featuredCookies.map((cookie) => (
              <div key={cookie.id} className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] relative bg-zinc-100 p-8 flex items-center justify-center overflow-hidden">
                  <Image
                    src={cookie.imageUrl}
                    alt={cookie.name}
                    width={120}
                    height={120}
                    className="object-contain group-hover:scale-110 transition-transform duration-500 opacity-20"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center text-amber-900 font-black text-lg">
                      YUM!
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-zinc-950">{cookie.name}</h3>
                    <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      <span className="text-amber-900 font-bold text-sm">{cookie.rating}.0</span>
                    </div>
                  </div>
                  <p className="text-zinc-600 mb-8 font-medium leading-relaxed">{cookie.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-900">
                      ${cookie.price.toFixed(2)}
                    </span>
                    <Link 
                      href="/catalog"
                      className="bg-zinc-950 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-900 transition shadow-md"
                    >
                      Pre-order
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION (REVIEWS) */}
      <section className="py-24 px-6 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-zinc-900 mb-4 tracking-tight">Loved by the Class</h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto font-medium">Don&apos;t just take our word for it—here&apos;s what your classmates have to say.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic text-lg mb-6 leading-relaxed">&quot;Seriously the best chocolate chip cookie I&apos;ve ever had. Perfect for late-night studying!&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">S</div>
                <p className="font-bold text-zinc-900">Sarah K., Marketing &apos;24</p>
              </div>
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic text-lg mb-6 leading-relaxed">&quot;The pre-order system is so easy. I ordered on Monday, picked them up on Friday right before the weekend.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center font-bold text-zinc-900">M</div>
                <p className="font-bold text-zinc-900">Mike P., Biz Dev &apos;23</p>
              </div>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-zinc-700 italic text-lg mb-6 leading-relaxed">&quot;These cookies did not survive the 10-minute walk back to my dorm. Absolutely amazing.&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center font-bold text-amber-900">C</div>
                <p className="font-bold text-zinc-900">Chloe L., Finance &apos;25</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/review" className="bg-amber-100 text-amber-900 px-8 py-3 rounded-full font-bold hover:bg-amber-200 transition">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 px-6 bg-amber-900 text-white">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Ready to treat yourself?</h2>
          <p className="text-amber-100 text-xl font-medium max-w-2xl">
            Place your pre-order today and pick up your fresh batch of cookies on our next baking day. 
          </p>
          <Link href="/catalog" className="bg-white text-amber-950 px-12 py-5 rounded-full font-black text-xl hover:bg-amber-50 transition shadow-xl shadow-black/20">
            Start Your Pre-order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
