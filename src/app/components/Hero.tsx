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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">

      {/* ================= SOCIAL SIDEBAR ================= */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
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
            aria-label={social.label}
            className="p-3 rounded-xl
                       bg-violet-500/10 hover:bg-violet-500/20
                       border border-violet-400/30
                       shadow-md hover:shadow-lg
                       transition-all duration-300 hover:scale-110"
          >
            <social.icon className="w-6 h-6 text-violet-400 hover:text-violet-300 transition-colors" />
          </a>
        ))}
      </div>
      {/* =================================================== */}

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
            <div className="absolute -inset-4 rounded-full border-2 border-gradient-purple/30 animate-ping" />
          </div>

          {/* Headline */}
          <div className="space-y-8 max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-background-section border border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-text-muted font-medium">
                DevOps & Cloud Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Sagar Pandey,{' '}
              <span className="gradient-text">
                {rotatingRoles[roleIndex]}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">
                Crafting scalable cloud infrastructure
              </span>{' '}
              and automating deployments from Nepal.
              <span className="block mt-3 bg-gradient-to-r from-gradient-purple to-gradient-blue bg-clip-text text-transparent font-semibold">
                Passionate about DevOps practices, containerization, and building systems that scale.
              </span>
            </p>
          </div>

          {/* ================= INTERN PHRASES CARD ================= */}
          <div className="glass-card max-w-xl w-full text-center px-6 py-5">
            <p className="text-gray-300">
              🚀 Aspiring DevOps Engineer eager to learn and build real-world systems
            </p>
            <p className="mt-2 text-gray-400">
              ⚙️ Hands-on with cloud platforms, automation, and CI/CD pipelines
            </p>
            <p className="mt-3 text-violet-400 font-medium">
              Actively seeking DevOps / Cloud Internship opportunities
            </p>
          </div>
          {/* ======================================================== */}

          {/* Primary CTA (UNCHANGED) */}
          <div className="pt-2">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Let's Connect
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Resume Button (Cyan Accent for Dark UI) */}
          <div className="pt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm
                         rounded-lg border border-cyan-400/30
                         bg-cyan-400/5 hover:bg-cyan-400/10
                         text-cyan-300 hover:text-cyan-200
                         transition-all duration-300"
            >
              <FileText className="w-4 h-4" />
              View My Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
