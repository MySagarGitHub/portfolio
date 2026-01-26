'use client';

import React from 'react';
import { Code, Cloud, GitBranch, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'DevOps Tools',
    icon: Server,
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Nginx'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: ['AWS (EC2, S3)', 'Terraform', 'Ansible', 'Linux Server'],
  },
  {
    title: 'CI/CD & Automation',
    icon: GitBranch,
    skills: ['GitHub Actions', 'GitLab CI/CD', 'Next.js', 'Vercel'],
  },
  {
    title: 'Development',
    icon: Code,
    skills: ['Git / GitHub', 'REST APIs', 'Bash / Shell', 'PostgreSQL'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#080808] text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B44CFF] to-[#FF7A18]">Skills</span>
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg font-light max-w-xl mx-auto">
            A curated selection of tools and technologies I use to architect automated and scalable systems.
          </p>
        </div>

        {/* Skills Grid - Clean & Minimalist */}
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-[#111] border border-white/5 p-8 rounded-[2rem] hover:border-[#B44CFF]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 text-[#B44CFF] group-hover:bg-[#B44CFF]/10 transition-colors">
                  <category.icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              {/* Minimalist Skill Tags */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-gray-400 group-hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Toolbelt Footer - Focused Tag Cloud */}
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-600 font-bold mb-8">DevOps Toolbelt</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Prometheus', 'Grafana', 'Bash', 'Ubuntu', 'MongoDB', 'Nginx', 'Vercel'].map((tool, i) => (
              <span key={i} className="text-xs text-gray-500 hover:text-[#FF7A18] cursor-default transition-colors">
                {tool} {i !== 6 && "•"}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}