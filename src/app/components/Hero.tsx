'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const rotatingRoles = ['DevOps Engineer', 'Cloud Specialist', 'Automation Expert'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-container">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="profile-image overflow-hidden">
              <Image
                src="/photo.jpg"
                alt="Sagar Pandey"
                width={160}
                height={160}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Animated Ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-gradient-purple/30 animate-ping" />
          </div>

          {/* Headline */}
          <div className="space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-background-card px-4 py-2 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse" />
              <span className="text-sm text-text-muted">Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold">
              Sagar Pandey,{' '}
              <span className="gradient-text">{rotatingRoles[roleIndex]}</span>
            </h1>
            
            <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              DevOps Engineer from Nepal with expertise in cloud computing, automation, 
              and modern software deployment practices. Building scalable infrastructure 
              and efficient systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Connect with me
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn-secondary inline-flex items-center gap-2">
              <FileText className="w-5 h-5" />
              My Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/MySagarGitHub', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-panday-6a12192a4', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:pandaysagar2004@gmail.com', label: 'Email' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background-card rounded-full hover:bg-background-section transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-text-muted hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}