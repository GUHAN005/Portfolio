'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export default function Certifications() {
  const certifications = [
    {
      title: 'Tableau - Data Visualisation',
      issuer: 'Tableau Academy / Coursework',
      desc: 'Mastery in building business intelligence dashboards, extracting insights, and storytelling using corporate sales data.',
    },
    {
      title: 'Frontend Development Workshop',
      issuer: 'APPIN Technology',
      desc: 'Hands-on training in responsive interface systems, DOM manipulation, JS frameworks, and standard styling grids.',
    },
    {
      title: 'Mechanical Workshop',
      issuer: 'KPR College',
      desc: 'Cross-functional training covering hardware fundamentals, engineering tolerances, and mechanical assembly structures.',
    },
  ];

  const codingPlatforms = [
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-yellow-500 text-xl" />,
      desc: 'Problem solving in Data Structures and Algorithms (Java & Python).',
      link: 'https://leetcode.com',
      badge: 'Active Solver',
    },
    {
      name: 'HackerRank',
      icon: <SiHackerrank className="text-green-500 text-xl" />,
      desc: 'Badges in Java programming, SQL scripting, and general software engineering.',
      link: 'https://hackerrank.com',
      badge: 'Gold Badges',
    },
  ];

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-bg-dark grid-bg">
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Achievements
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Credentials</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="inline-flex p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-6">
                  <FaGraduationCap className="text-2xl" />
                </div>
                
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-bold">
                  Degree Program
                </span>
                
                <h4 className="text-2xl font-bold font-heading text-white tracking-wide mt-2 mb-4 leading-tight">
                  B.Tech in Artificial Intelligence & Data Science
                </h4>
                
                <h5 className="text-base font-semibold text-gray-300 mb-6">
                  Nandha Engineering College, Erode
                </h5>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                  Deeply trained in mathematical modeling, statistical analysis, deep neural networks, relational databases, and full stack engineering methodologies.
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                  <div>
                    <span className="text-gray-500">Location:</span> Erode, TN, India
                  </div>
                  <div>
                    <span className="text-gray-500">Duration:</span> 2022 – 2026
                  </div>
                </div>
              </div>

              {/* CGPA display */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">Cumulative GPA Score</span>
                <div className="flex items-baseline gap-1 bg-cyan-500/10 px-3.5 py-1.5 rounded-xl border border-cyan-400/20">
                  <span className="text-xl font-bold text-cyan-400 font-heading">7.3</span>
                  <span className="text-[10px] text-cyan-500 font-mono">/ 10</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Certifications & Coding Platforms */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Certifications List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-panel p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold font-heading text-white mb-6 flex items-center gap-2">
                  <FaCertificate className="text-indigo-400" />
                  Certifications & Workshops
                </h4>
                
                <div className="space-y-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="group flex gap-4 p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all"
                    >
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                      <div>
                        <h5 className="text-sm font-bold text-white tracking-wide">
                          {cert.title}
                        </h5>
                        <p className="text-[10px] text-indigo-400 font-mono mt-0.5">
                          {cert.issuer}
                        </p>
                        <p className="text-gray-400 text-xs mt-1.5 font-sans">
                          {cert.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Coding Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-panel p-6 rounded-2xl"
            >
              <h4 className="text-sm font-bold font-heading tracking-widest uppercase text-gray-400 mb-4 flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                Active Coding Platforms
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.03] hover:border-cyan-400/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/[0.03] rounded-lg group-hover:scale-105 transition-transform">
                        {platform.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white tracking-wide block">
                          {platform.name}
                        </span>
                        <span className="text-[10px] text-gray-400 block mt-1">
                          {platform.desc}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end justify-between h-full gap-2">
                      <FaAward className="text-cyan-400 text-[10px]" />
                      <span className="text-[8px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-widest">
                        {platform.badge}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
