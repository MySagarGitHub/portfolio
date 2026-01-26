'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '2da9bb80-121f-413a-b4a3-bdf68c2d4610',
          ...formData,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) { setSubmitStatus('error'); }
    finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#080808] text-white">
      {/* max-w-2xl ensures the form stays in the middle and doesn't touch the sides */}
      <div className="max-w-2xl mx-auto px-6">
        
        {/* Simplified Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B44CFF] to-[#FF7A18]">touch</span>
          </h2>
          <p className="text-gray-400 text-lg font-light">
            Have a question or want to work together?
          </p>
        </div>

        {/* The Form Box */}
        <div className="bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
          {submitStatus === 'success' ? (
            <div className="py-12 text-center animate-in fade-in duration-500">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Message Sent</h3>
              <p className="text-gray-400 mt-2">I will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-white ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#B44CFF] transition-all placeholder:text-gray-500"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-white ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#B44CFF] transition-all placeholder:text-gray-500"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-white ml-1">Write your message here</label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-[#1A1A1A] border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#B44CFF] transition-all resize-none placeholder:text-gray-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 rounded-full bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] text-white font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>Submit now <Send size={16} /></>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}