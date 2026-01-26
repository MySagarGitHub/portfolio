'use client';

import React from 'react';
import { ExternalLink, Github, Folder, Zap, Cloud, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Infrastructure as Code',
    description: 'Automated cloud infrastructure deployment focusing on scalability and security using industry-standard tools.',
    tech: ['Terraform', 'AWS', 'Ansible'],
    github: 'https://github.com/MySagarGitHub',
    demo: '#',
    icon: Cloud,
  },
  {
    title: 'CI/CD Pipeline',
    description: 'Developed automated deployment workflows to reduce manual errors and increase delivery speed.',
    tech: ['Jenkins', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/MySagarGitHub',
    demo: '#',
    icon: Zap,
  },
  {
    title: 'Containerization',
    description: 'Optimizing application environments using container orchestration for high availability.',
    tech: ['Kubernetes', 'Docker', 'Helm'],
    github: 'https://github.com/MySagarGitHub',
    demo: '#',
    icon: Cpu,
  },
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Centered Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 font-heading">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B44CFF] to-[#FF7A18]">Projects</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            Practical implementations of DevOps methodologies, from infrastructure automation to continuous delivery.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-[2.5rem] hover:border-[#B44CFF]/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Icon Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 rounded-2xl bg-white/5 text-[#B44CFF] group-hover:scale-110 transition-transform duration-300">
                  <project.icon size={28} />
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#B44CFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-[#FF7A18]/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/MySagarGitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            <Folder className="w-5 h-5 text-[#FF7A18]" />
            <span className="text-sm font-semibold tracking-wide">Explore Full Repository</span>
          </a>
        </div>
        
      </div>
    </section>
  );
}