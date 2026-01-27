'use client';

import React from 'react';

export default function About() {
  const skillCategories = [
    { 
      title: 'DevOps', 
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
      gradient: 'from-[#00D4FF] to-[#0095FF]'
    },
    { 
      title: 'Cloud', 
      skills: ['AWS (EC2, S3)', 'Linux Administration', 'Terraform'],
      gradient: 'from-[#FF6B6B] to-[#FF8E53]'
    },
    { 
      title: 'Tools', 
      skills: ['Git', 'Shell Scripting', 'Prometheus', 'Grafana'],
      gradient: 'from-[#9D50FF] to-[#6A5AF9]'
    },
    { 
      title: 'Frontend', 
      skills: ['Next.js', 'React.js', 'Tailwind CSS'],
      gradient: 'from-[#00E0A3] to-[#00B894]'
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#080808] text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#B44CFF]/5 to-[#FF7A18]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Glass Card */}
        <div className="rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-xl p-10 md:p-16 shadow-2xl shadow-purple-900/20">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              About{' '}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-[#B44CFF] via-[#FF7A18] to-[#FF7A18] bg-clip-text text-transparent animate-gradient">
                  Me
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] rounded-full" />
              </span>
            </h2>
            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
              Who I am, what I'm learning, and where I'm heading 🚀
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                I'm a <span className="text-white font-semibold relative">
                  BSc. CSIT student
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#B44CFF] to-transparent" />
                </span> at Kathmandu BernHardt College,
                focused on mastering{' '}
                <span className="font-semibold bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] bg-clip-text text-transparent">
                  Cloud Infrastructure
                </span>{' '}
                and automation.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                As an aspiring DevOps Engineer, I enjoy building scalable systems, working with containers,
                and automating deployments. I'm actively looking for a{' '}
                <span className="relative">
                  <span className="text-white font-medium">
                    DevOps / Cloud internship
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] animate-pulse" />
                </span>{' '}
                where I can learn and contribute.
              </p>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#B44CFF]/20 to-[#FF7A18]/20 backdrop-blur-lg group hover:scale-105 transition-transform duration-300 shadow-lg shadow-purple-900/20">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-r from-[#B44CFF] to-[#FF7A18]" />
              </span>
              <span className="text-sm font-bold tracking-wider bg-gradient-to-r from-[#B44CFF] to-[#FF7A18] bg-clip-text text-transparent uppercase">
                Actively Seeking Internship
              </span>
              <span className="text-[#FF7A18] animate-bounce ml-2">→</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-24 mb-16">
            {/* Section Title - No decorative lines */}
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#0095FF] to-[#00D4FF] bg-clip-text text-transparent animate-gradient">
                  Skills & Tools
                </span>
              </h3>
              <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Technologies and tools I work with to build scalable infrastructure
              </p>
            </div>

            {/* Skills Grid - No icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((cat, i) => (
                <div 
                  key={i}
                  className="group relative flex flex-col items-center transform hover:scale-[1.02] transition-transform duration-300"
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-3xl`} />
                  
                  {/* Card Container */}
                  <div className="relative w-full rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300 shadow-xl shadow-black/30">
                    
                    {/* Card Header - No icon container */}
                    <div className="mb-10 text-center">
                      <h3 className={`text-2xl font-bold tracking-tight mb-6 bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                        {cat.title}
                      </h3>
                      
                      {/* Animated underline */}
                      <div className="flex justify-center">
                        <div className="relative w-32">
                          <div className={`h-1 w-full bg-gradient-to-r ${cat.gradient} opacity-20 rounded-full`} />
                          <div className={`absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${cat.gradient} rounded-full transition-all duration-500`} />
                        </div>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap justify-center gap-4">
                      {cat.skills.map((skill, idx) => (
                        <div 
                          key={idx}
                          className="relative group/skill"
                        >
                          {/* Skill background with glow */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} opacity-0 group-hover/skill:opacity-20 blur-xl transition-all duration-300 rounded-xl`} />
                          
                          <span
                            className="relative px-6 py-3 rounded-xl
                                     bg-white/[0.08] 
                                     text-gray-200 hover:text-white
                                     transition-all duration-300
                                     backdrop-blur-sm
                                     group-hover/skill:translate-y-[-4px]
                                     text-sm font-medium
                                     hover:shadow-lg hover:shadow-purple-500/20
                                     whitespace-nowrap"
                          >
                            {skill}
                            
                            {/* Inner glow */}
                            <span className="absolute inset-0 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                              <span className={`absolute inset-0 bg-gradient-to-r ${cat.gradient} blur-md opacity-30`} />
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Corner accent - Removed */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="mt-32 pt-16 border-t border-white/5 text-center">
            <p className="text-gray-400 text-sm tracking-wider mb-2">
              Always learning • Always building • Open to collaborations
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <div className="w-2 h-2 bg-[#B44CFF] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#FF7A18] rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse delay-300" />
              <div className="w-2 h-2 bg-[#00E0A3] rounded-full animate-pulse delay-450" />
              <div className="w-2 h-2 bg-[#9D50FF] rounded-full animate-pulse delay-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Extra space at bottom to prevent touching next section */}
      <div className="h-32"></div>
    </section>
  );
}