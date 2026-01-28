'use client';

import { useState } from 'react';
import {
  Send,
  Loader2,
  CheckCircle2,
  Mail,
  Github,
  Linkedin,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '2da9bb80-121f-413a-b4a3-bdf68c2d4610',
          ...formData,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let’s{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-400">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Open to DevOps roles, freelance work, and meaningful collaborations.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT — INFO */}
          <div className="space-y-10">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-3">
                Let’s build something impactful 🚀
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I specialize in DevOps, cloud infrastructure, CI/CD automation,
                and scalable deployments. If you have an idea, project, or role
                in mind — I’m always happy to talk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'pandaysagar2004@gmail.com',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'MySagarGitHub',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: '@sagar-panday',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Nepal',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-orange-400">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-orange-400 opacity-20 blur-2xl rounded-3xl" />

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10">
              {submitStatus === 'success' ? (
                <div className="py-20 flex flex-col items-center text-center gap-6">
                  <CheckCircle2 className="w-14 h-14 text-green-400" />
                  <h3 className="text-2xl font-bold">Message Sent</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. I’ll reply soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-white placeholder:text-gray-500 focus:border-purple-500 outline-none transition"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-white placeholder:text-gray-500 focus:border-purple-500 outline-none transition"
                  />

                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-white placeholder:text-gray-500 focus:border-purple-500 outline-none resize-none transition"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-6 py-4 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 font-bold tracking-wide flex items-center justify-center gap-3 hover:scale-[1.03] transition disabled:opacity-50"
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

                  {submitStatus === 'error' && (
                    <p className="text-center text-red-400">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
