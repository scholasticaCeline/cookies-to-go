'use client';

import { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string | null }>({ type: null, message: null });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, message: null });

    if (rating === 0) {
      setStatus({ type: 'error', message: 'Please select a rating' });
      return;
    }

    setIsSubmitting(true);
    
    const reviewData: { description: string; rating_number: number; name?: string } = {
      description,
      rating_number: rating,
    };

    if (name.trim()) {
      reviewData.name = name;
    }

    const { error } = await supabase
      .from('reviews')
      .insert([reviewData]);

    setIsSubmitting(false);

    if (error) {
      setStatus({ type: 'error', message: 'Error submitting review: ' + error.message });
    } else {
      setName('');
      setDescription('');
      setRating(0);
      router.refresh();
      setStatus({ type: 'success', message: 'Review submitted successfully!' });
      // Clear success message after 5 seconds
      setTimeout(() => setStatus({ type: null, message: null }), 5000);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl sticky top-28">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-amber-900" />
        <h2 className="text-2xl font-black text-zinc-900">Leave a Review</h2>
      </div>
      <p className="text-zinc-500 mb-8 font-medium">Enjoyed your cookies? Share your thoughts!</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {status.message && (
          <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
            {status.message}
          </div>
        )}
        
        <div>
          <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Rating</label>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  className="transition-transform hover:scale-110 active:scale-95"
                  onClick={() => setRating(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  <Star 
                    className={`w-8 h-8 ${
                      ratingValue <= (hover || rating) 
                        ? 'fill-amber-400 text-amber-400' 
                        : 'text-zinc-200'
                    } transition-colors`} 
                  />
                </button>
              );
            })}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Your Name</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition text-zinc-900" 
            placeholder="e.g. John Doe (Optional)" 
          />
        </div>
        
        <div>
          <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Message</label>
          <textarea 
            rows={4} 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition text-zinc-900" 
            placeholder="How were the cookies?"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-amber-900 text-white py-4 rounded-xl font-black text-lg hover:bg-amber-800 transition shadow-lg shadow-amber-900/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
}
