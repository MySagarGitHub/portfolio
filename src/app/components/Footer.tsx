'use client';

import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background-primary border-t border-white/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-purple/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 -translate-y-1/2 w-96 h-96 bg-gradient-blue/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="section-container relative z-10">
        <div className="py-20 flex flex-col items-center text-center space-y-12">
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="p-3.5 rounded-full bg-gradient-to-br from-gradient-purple/20 to-gradient-blue/20 border border-white/20 hover:border-white/40 hover:from-gradient-purple/30 hover:to-gradient-blue/30 transition-all hover:scale-110 duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-white group-hover:text-gradient-primary transition-colors" />
          </button>

          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-gradient-purple to-gradient-blue rounded-full animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold">
                <span className="text-white">Sagar</span>
                <span className="text-text-muted font-light ml-2">Pandey</span>
              </h2>
              <div className="w-2 h-2 bg-gradient-to-r from-gradient-blue to-gradient-purple rounded-full animate-pulse delay-100" />
            </div>

            <p className="text-text-muted italic text-sm max-w-xs mx-auto">
              "Automating infrastructure, building scalable systems, crafting DevOps pipelines."
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold uppercase tracking-widest text-text-muted hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gradient-purple to-gradient-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-5">
            {[
              { icon: Github, href: 'https://github.com/MySagarGitHub', label: 'GitHub', color: 'hover:text-white' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-panday-6a12192a4', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Mail, href: 'mailto:pandaysagar2004@gmail.com', label: 'Email', color: 'hover:text-red-400' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl bg-background-card hover:bg-gradient-to-br hover:from-gradient-purple/30 hover:to-gradient-blue/30 border border-white/10 hover:border-white/30 transition-all hover:scale-110 duration-300 group/social ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} className="text-text-muted group-hover/social:text-white transition-colors" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Footer Info */}
          <div className="w-full space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-medium text-text-muted uppercase tracking-wider">
              <p>© {currentYear} Sagar Pandey. All Rights Reserved.</p>
              
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                <span>from Kathmandu, Nepal</span>
              </div>

              <p className="text-gradient bg-gradient-to-r from-gradient-purple to-gradient-blue bg-clip-text text-transparent font-semibold">
                BSc. CSIT &apos;26
              </p>
            </div>

            {/* Additional Note */}
            <p className="text-[11px] text-text-muted/60 italic">
              Focused on DevOps • Cloud Infrastructure • Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}