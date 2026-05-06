'use client';

import React, { useState } from 'react';
import { X, Trash2, Upload, CheckCircle2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { supabase } from '@/lib/supabase';
import Image from 'next/image';

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { cart, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiptFile) {
      alert('Please upload your payment receipt');
      return;
    }
    if (!customerName) {
      alert('Please enter your name');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload receipt to Supabase Storage
      const fileExt = receiptFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `receipts/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('payment_images')
        .upload(filePath, receiptFile);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('payment_images')
        .getPublicUrl(filePath);

      // 2. Insert order into database
      const { error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            customer_name: customerName,
            items: cart,
            total_price: totalPrice,
            status: 'pending',
            receipt_url: publicUrl
          }
        ]);

      if (orderError) throw orderError;

      setIsSuccess(true);
      clearCart();
    } catch (error: any) {
      console.error('Checkout error:', error);
      alert('Checkout failed: An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/40 backdrop-blur-sm">
        <div className="bg-white w-full max-w-md rounded-[2.5rem] p-12 text-center shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-black text-zinc-900 mb-4">Order Received!</h2>
          <p className="text-zinc-500 font-medium mb-8">We&apos;ve received your pre-order and payment receipt. We&apos;ll process it shortly!</p>
          <button 
            onClick={() => { setIsSuccess(false); onClose(); }}
            className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-bold hover:bg-zinc-800 transition"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-zinc-950/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-8 duration-300">
        {/* Header */}
        <div className="px-8 py-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
          <div>
            <h2 className="text-2xl font-black text-zinc-900">Your Pre-order</h2>
            <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider">{totalItems} items selected</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition">
            <X className="w-6 h-6 text-zinc-400" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {cart.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-zinc-400 font-medium text-lg">Your cart is empty</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white border border-zinc-200">
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-zinc-900">{item.name}</h4>
                      <p className="text-zinc-500 text-sm">{(item.price).toLocaleString()} IDR each</p>
                    </div>
                    <div className="flex items-center gap-3 bg-white px-3 py-1 rounded-xl border border-zinc-100">
                      <button onClick={() => updateQuantity(item.id, -2)} className="text-zinc-400 hover:text-amber-900 font-bold px-1">-</button>
                      <span className="font-black text-zinc-900 min-w-[1.5rem] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 2)} className="text-zinc-400 hover:text-amber-900 font-bold px-1">+</button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="p-2 text-zinc-300 hover:text-red-500 transition">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Customer Name</label>
                  <input 
                    type="text" 
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-900/20 transition text-zinc-900 font-medium" 
                    placeholder="Enter your full name" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-zinc-700 uppercase tracking-widest mb-2">Payment Receipt</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden" 
                      id="receipt-upload"
                    />
                    <label 
                      htmlFor="receipt-upload"
                      className="flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50 hover:bg-zinc-100/50 hover:border-amber-900/20 transition cursor-pointer group"
                    >
                      {receiptFile ? (
                        <div className="flex items-center gap-3 text-emerald-600 font-bold">
                          <CheckCircle2 className="w-6 h-6" />
                          <span>{receiptFile.name}</span>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-zinc-300 group-hover:text-amber-900 transition mb-2" />
                          <span className="text-zinc-500 font-bold">Upload Transfer Receipt</span>
                          <span className="text-zinc-400 text-xs mt-1">PNG, JPG or WEBP (Max 5MB)</span>
                        </>
                      )}
                    </label>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 bg-zinc-50 border-t border-zinc-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-zinc-500 font-bold uppercase tracking-wider">Total Amount</span>
            <span className="text-3xl font-black text-zinc-900">{(totalPrice).toLocaleString()} IDR</span>
          </div>
          <button 
            type="submit"
            form="checkout-form"
            disabled={cart.length === 0 || isSubmitting}
            className="w-full bg-amber-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-amber-800 transition shadow-xl shadow-amber-900/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {isSubmitting ? 'Processing...' : 'Complete Pre-order'}
          </button>
        </div>
      </div>
    </div>
  );
}
