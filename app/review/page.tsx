import { Star, MessageSquare, User } from 'lucide-react';

export default function ReviewPage() {
  const reviews = [
    {
      id: 1,
      user: "Sarah K.",
      major: "Marketing '24",
      content: "Seriously the best chocolate chip cookie I’ve ever had. Perfect for late-night studying! I've ordered twice already and the quality is consistent every time.",
      rating: 5,
      date: "2 days ago"
    },
    {
      id: 2,
      user: "Mike P.",
      major: "Biz Dev '23",
      content: "The pre-order system is so easy. I ordered on Monday, picked them up on Friday right before the weekend. The Red Velvet is a must-try.",
      rating: 5,
      date: "1 week ago"
    },
    {
      id: 3,
      user: "Chloe L.",
      major: "Finance '25",
      content: "These cookies did not survive the 10-minute walk back to my dorm. Absolutely amazing. Wish they had a subscription service!",
      rating: 4,
      date: "2 weeks ago"
    },
    {
      id: 4,
      user: "James W.",
      major: "CS '26",
      content: "A bit pricier than store-bought, but the quality difference is massive. You can tell they use real butter and high-end chocolate.",
      rating: 5,
      date: "3 weeks ago"
    }
  ];

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Header */}
      <section className="bg-amber-100 text-amber-950 py-20 px-6 border-b border-amber-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-4 tracking-tight">Customer Reviews</h1>
          <p className="text-amber-900/70 text-xl max-w-2xl mx-auto font-medium">
            See what your fellow classmates are saying about our fresh-baked treats.
          </p>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex text-amber-500">
               <Star className="w-6 h-6 fill-current" />
               <Star className="w-6 h-6 fill-current" />
               <Star className="w-6 h-6 fill-current" />
               <Star className="w-6 h-6 fill-current" />
               <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="font-bold text-2xl text-amber-950">4.9/5.0</span>
            <span className="text-amber-800 font-medium ml-2">from 120+ reviews</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-black text-zinc-900">Recent Feedback</h2>
               <select className="bg-white border border-zinc-200 rounded-lg px-4 py-2 font-bold text-zinc-600 outline-none focus:ring-2 focus:ring-amber-900/20">
                  <option>Most Recent</option>
                  <option>Highest Rated</option>
               </select>
            </div>

            {reviews.map((review) => (
              <div key={review.id} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-zinc-400" />
                    </div>
                    <div>
                      <h3 className="font-black text-zinc-950 text-lg">{review.user}</h3>
                      <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">{review.major}</p>
                    </div>
                  </div>
                  <span className="text-zinc-400 text-sm font-medium">{review.date}</span>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`} />
                  ))}
                </div>
                
                <p className="text-zinc-700 text-lg leading-relaxed font-medium">&quot;{review.content}&quot;</p>
              </div>
            ))}

            <button className="w-full py-4 bg-zinc-200 text-zinc-600 rounded-2xl font-black hover:bg-zinc-300 transition mt-8">
               Load More Reviews
            </button>
          </div>

          {/* Sidebar / Submit Review */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl sticky top-28">
               <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-amber-900" />
                  <h2 className="text-2xl font-black text-zinc-900">Leave a Review</h2>
               </div>
               <p className="text-zinc-500 mb-8 font-medium">Enjoyed your cookies? Share your thoughts with the class!</p>
               
               <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Rating</label>
                    <div className="flex gap-2">
                       {[...Array(5)].map((_, i) => (
                         <button key={i} type="button" className="text-zinc-300 hover:text-amber-400 transition">
                           <Star className="w-8 h-8 fill-current" />
                         </button>
                       ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Your Name</label>
                    <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="e.g. John Doe" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="How were the cookies?"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-amber-900 text-white py-4 rounded-xl font-black text-lg hover:bg-amber-800 transition shadow-lg shadow-amber-900/20">
                    Submit Review
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
