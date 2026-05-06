import { Star, User } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import ReviewForm from '@/components/ReviewForm';

export const dynamic = 'force-dynamic';

export default async function ReviewPage() {
  const { data: reviews, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reviews:', error);
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      {/* Header */}
      <section className="bg-amber-100 text-amber-950 py-20 px-6 border-b border-amber-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-4 tracking-tight">Customer Reviews</h1>
          <div className="flex items-center justify-center gap-2 mt-8">
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Reviews List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-3xl font-black text-zinc-900">Recent Feedback</h2>
            </div>

            {reviews && reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="font-black text-zinc-950 text-lg">{review.name || 'Anonymous'}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating_number ? 'fill-amber-400 text-amber-400' : 'text-zinc-200'}`} />
                    ))}
                  </div>
                  
                  <p className="text-zinc-700 text-lg leading-relaxed font-medium">{review.description}</p>
                </div>
              ))
            ) : (
              <p className="text-zinc-500 text-center py-12 font-medium">No reviews yet. Be the first to leave one!</p>
            )}
          </div>

          {/* Sidebar / Submit Review */}
          <div className="lg:col-span-1">
            <ReviewForm />
          </div>
        </div>
      </section>
    </div>
  );
}
