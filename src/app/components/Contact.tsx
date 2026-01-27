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
    } catch (error) {
      setSubmitStatus('error');
    }
    finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-background-primary relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-purple/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-gradient-blue/15 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-card border border-white/10 mb-6">
              <span className="text-sm font-medium text-text-muted">03 — GET IN TOUCH</span>
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Let's Build
              <br />
              <span className="gradient-text">Something Amazing</span>
            </h2>

            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Got a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          {/* Contact Card */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-gradient-purple via-gradient-blue to-gradient-purple opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl" />

            {/* Card Container */}
            <div className="relative bg-gradient-to-br from-background-card to-background-section border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
              
              {submitStatus === 'success' ? (
                // Success State
                <div className="py-16 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in duration-500">
                  <div className="p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                    <CheckCircle2 className="w-12 h-12 text-green-400" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold">Message Sent! 🚀</h3>
                    <p className="text-text-muted text-lg">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              ) : (
                // Form
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name Field */}
                  <div className="space-y-3 group/field">
                    <label className="text-sm font-semibold text-white">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Sagar Pandey"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-background-section hover:bg-white/[0.08] focus:bg-white/[0.08] border border-white/15 hover:border-white/20 focus:border-white/30 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none placeholder:text-text-muted/60"
                      />
                      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none border border-gradient-primary/50 shadow-lg shadow-gradient-purple/20" />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="space-y-3 group/field">
                    <label className="text-sm font-semibold text-white">
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-background-section hover:bg-white/[0.08] focus:bg-white/[0.08] border border-white/15 hover:border-white/20 focus:border-white/30 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none placeholder:text-text-muted/60"
                      />
                      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none border border-gradient-primary/50 shadow-lg shadow-gradient-purple/20" />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-3 group/field">
                    <label className="text-sm font-semibold text-white">
                      Your Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or idea..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-background-section hover:bg-white/[0.08] focus:bg-white/[0.08] border border-white/15 hover:border-white/20 focus:border-white/30 rounded-xl px-6 py-4 text-white transition-all duration-300 focus:outline-none resize-none placeholder:text-text-muted/60"
                      />
                      <div className="absolute inset-0 rounded-xl opacity-0 group-focus-within/field:opacity-100 transition-opacity duration-300 pointer-events-none border border-gradient-primary/50 shadow-lg shadow-gradient-purple/20" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                      className="px-10 py-4 rounded-full bg-gradient-to-r from-gradient-purple to-gradient-blue text-white font-bold uppercase tracking-widest text-sm flex items-center gap-3 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-gradient-purple/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Error State */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
                      <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>
                    </div>
                  )}

                </form>
              )}
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Email', value: 'pandaysagar2004@gmail.com' },
              { label: 'GitHub', value: 'MySagarGitHub' },
              { label: 'LinkedIn', value: '@sagar-panday' },
            ].map((method, i) => (
              <div 
                key={i}
                className="bg-background-card border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-colors"
              >
                <h3 className="text-sm font-semibold text-text-muted mb-2">{method.label}</h3>
                <p className="text-white font-medium text-sm">{method.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}