'use client';

import React from 'react';
import { GraduationCap, MapPin, Terminal } from 'lucide-react';

export default function About() {
  const skillCategories = [
    { title: 'DevOps', skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'] },
    { title: 'Cloud', skills: ['AWS (EC2/S3)', 'Linux Admin', 'Terraform'] },
    { title: 'Tools', skills: ['Git', 'Shell Scripting', 'Prometheus', 'Grafana'] },
    { title: 'Frontend', skills: ['Next.js', 'React.js', 'Tailwind CSS'] },
  ];

  return (
    <section id="about" className="py-20 bg-[#080808] text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Centered Card */}
        <div className="bg-[#111] border border-white/5 rounded-[2rem] p-8 md:p-16 text-center">
          
          {/* Section Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B44CFF] to-[#FF7A18]">Me</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] mx-auto rounded-full" />
          </div>

          {/* Internship Focused Bio */}
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              I am a <span className="text-white font-semibold">BSc. CSIT Student</span> at Kathmandu BernHardt College, 
              dedicated to mastering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] font-bold">Cloud Infrastructure</span> and Automation.
            </p>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              As an aspiring DevOps Engineer, I focus on building efficient pipelines and scalable systems. 
              I am currently looking for an <span className="text-white font-medium underline decoration-[#B44CFF] underline-offset-4">internship opportunity</span> where 
              I can contribute my technical skills and learn from industry experts.
            </p>

            {/* Simple Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B44CFF]/10 border border-[#B44CFF]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B44CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B44CFF]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B44CFF]">Seeking Internship</span>
            </div>
          </div>

          {/* Skill Categories (The Grid you liked) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {skillCategories.map((cat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="text-[#B44CFF] text-xs font-black uppercase tracking-[0.2em] mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="text-sm text-gray-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Stats */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 text-gray-500">
           
          </div>

        </div>
      </div>
    </section>
  );
}