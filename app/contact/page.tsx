import { Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-amber-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Get in Touch</h1>
        <p className="text-amber-100 text-xl max-w-2xl mx-auto font-medium">
          Have questions about our cookies or want to place a bulk order? We&apos;d love to hear from you.
        </p>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-black text-zinc-900 mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-900 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-1">Our Location</h3>
                  <p className="text-zinc-600 font-medium">Main Campus, Student Center <br />3rd Floor, Booth #12</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-900 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-1">Pick-up Hours</h3>
                  <p className="text-zinc-600 font-medium">Wed & Fri: 12:00 PM – 4:00 PM <br />Mon: Pre-orders only</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-900 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-1">Email Us</h3>
                  <p className="text-zinc-600 font-medium">hello@cookiestogo.edu</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-900 shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-zinc-900 mb-1">Instagram</h3>
                  <p className="text-zinc-600 font-medium">@cookies.to.go</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-50 rounded-3xl border border-zinc-100">
               <h3 className="font-black text-zinc-900 text-xl mb-4">Bulk Orders</h3>
               <p className="text-zinc-600 font-medium mb-6">Planning a club event or a party? We offer special pricing for orders over 48 cookies.</p>
               <button className="text-amber-900 font-black hover:underline underline-offset-4">Learn about bulk pricing &rarr;</button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-10 opacity-50"></div>
            
            <h2 className="text-3xl font-black text-zinc-900 mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition font-medium">
                  <option>General Inquiry</option>
                  <option>Pre-order Question</option>
                  <option>Bulk Order Inquiry</option>
                  <option>Feedback</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition" placeholder="How can we help?"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-zinc-950 text-white py-5 rounded-xl font-black text-xl hover:bg-amber-900 transition shadow-xl shadow-black/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
