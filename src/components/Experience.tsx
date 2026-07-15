'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      company: 'Ether Infotech',
      role: 'Artificial Intelligence Intern',
      duration: '12/2025 – 01/2026',
      location: 'Coimbatore, Tamil Nadu',
      description:
        'Focused on artificial intelligence pipelines and deep learning systems using Python, TensorFlow, and Keras. Developed scripts for large-scale data preprocessing, model tuning, and accuracy metrics optimization.',
      tags: ['Python', 'TensorFlow', 'Keras', 'Data Preprocessing', 'Model Training'],
    },
    {
      company: 'Trios Technologies',
      role: 'Deep Learning Intern',
      duration: '06/2025 – 07/2025',
      location: 'Chennai, Tamil Nadu',
      description:
        'Acquired core deep learning model architectures, including convolutional neural networks (CNNs) and recurrent neural networks (RNNs). Implemented image Classification pipelines and preprocessed unstructured data feeds.',
      tags: ['Deep Learning', 'TensorFlow', 'Python', 'Classification', 'Data Preprocessing'],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-dark grid-bg">
      {/* Background glow accent spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Journey
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Work <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-6 md:pl-10 space-y-16">
          
          {/* Vertical progress bar line fill */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline circle node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#050816] border-2 border-indigo-500 flex items-center justify-center group-hover:border-cyan-400 transition-colors duration-300 shadow-[0_0_10px_rgba(79,70,229,0.4)] group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)]">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-cyan-400 transition-colors duration-300" />
              </div>

              {/* Glassmorphic Experience Card */}
              <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-cyan-400/25 transition-all">
                {/* Accent glow corner */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-cyan-400 opacity-5 group-hover:opacity-10 blur-xl transition-opacity" />

                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-1">
                      {exp.role}
                    </span>
                    <h4 className="text-xl font-bold font-heading text-white tracking-wide">
                      {exp.company}
                    </h4>
                  </div>
                  
                  {/* Location & Calendar */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-indigo-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description content */}
                <p className="text-gray-300 text-sm font-sans leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Skills/Tools Badges */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/[0.05] text-[10px] text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
