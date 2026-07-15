'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder, FaDatabase, FaMicrochip, FaChartBar } from 'react-icons/fa';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI / ML', 'Full Stack', 'IoT & Analytics'];

  const projectsData = [
    {
      id: 1,
      title: 'AI Powered Legal Rights Assistant',
      description:
        'An AI-driven platform built using the MERN stack and OpenAI to analyze legal contracts. Features automated clause parsing, risk assessment indices, and simple language explanations to increase legal awareness and efficiency.',
      categories: ['AI / ML', 'Full Stack'],
      technologies: ['MERN Stack', 'OpenAI API', 'Clause Parsing', 'Risk Indexing', 'Tailwind CSS'],
      icon: <FaFolder className="text-indigo-400 text-2xl" />,
      github: 'https://github.com/GUHAN005',
      demo: 'https://github.com/GUHAN005',
    },
    {
      id: 2,
      title: 'IoT Enabled Smart Item Tracker',
      description:
        'A BLE-based real-time tracker using ESP32 chips. Utilizes RSSI (Received Signal Strength Indicator) path loss logs to predict distance and trigger proximity alerts for potential misplacement.',
      categories: ['AI / ML', 'IoT & Analytics'],
      technologies: ['ESP32', 'BLE Protocol', 'RSSI Analysis', 'IoT Sensors', 'Arduino C++'],
      icon: <FaMicrochip className="text-cyan-400 text-2xl" />,
      github: 'https://github.com/GUHAN005',
      demo: 'https://github.com/GUHAN005',
    },
    {
      id: 3,
      title: 'Amazon Sales Data Analysis Dashboard',
      description:
        'A corporate-grade Tableau BI dashboard that digests Amazon sales performance datasets. Visualizes profit margins, seasonal trends, and geographical performance vectors for executive decision making.',
      categories: ['IoT & Analytics'],
      technologies: ['Tableau BI', 'Data Analytics', 'Data Visualisation', 'Spreadsheet ETL'],
      icon: <FaChartBar className="text-purple-400 text-2xl" />,
      github: 'https://github.com/GUHAN005',
      demo: 'https://github.com/GUHAN005', // Redirect to project references
    },
  ];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((proj) => proj.categories.includes(filter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030611]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] pointer-events-none" />
      
      {/* Background glowing circle */}
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Creations
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Filter categories tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Card Grid with dynamic layout transitions */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/20"
              >
                {/* Glowing border hover indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Card Icon & Category Label */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div className="flex gap-1.5">
                      {project.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[8px] text-gray-400 font-mono"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-lg font-bold font-heading text-white tracking-wide mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Technology Badges & Footer Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-[9px] text-gray-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.04]">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="text-sm" />
                      Codebase
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      Live Demo
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
