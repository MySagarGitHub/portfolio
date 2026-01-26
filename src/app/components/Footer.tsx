'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] py-16 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="mb-12 p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#B44CFF]/50 transition-all group"
        >
          <ArrowUp size={20} className="text-gray-500 group-hover:text-white transition-colors" />
        </button>

        {/* Branding */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] rounded-full" />
            <span className="text-2xl font-bold tracking-tighter font-heading text-white">
              Sagar <span className="text-gray-500 font-light">Pandey</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed italic">
            "Automating the future, one pipeline at a time."
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Social Connect */}
        <div className="flex gap-6 mb-12">
          {[
            { icon: Github, href: 'https://github.com/MySagarGitHub', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-panday-6a12192a4', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:pandaysagar2004@gmail.com', label: 'Email' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#B44CFF] transition-all duration-300 transform hover:-translate-y-1"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium tracking-widest text-gray-600 uppercase">
          <p>© {currentYear} All Rights Reserved</p>
          
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart size={10} className="text-[#FF7A18] fill-[#FF7A18]" />
            <span>in Kathmandu</span>
          </div>

          <p className="text-gray-500">BSc. CSIT &apos;26</p>
        </div>
      </div>
    </footer>
  );
}