'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaReact, FaNodeJs, FaJava, FaCogs, FaUsers, FaLightbulb, FaCheck } from 'react-icons/fa';

export default function About() {
  const highlights = [
    { name: 'Artificial Intelligence', icon: <FaBrain className="text-indigo-400" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-purple-400" /> },
    { name: 'React & Frontend', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Node.js & Backend', icon: <FaNodeJs className="text-green-400" /> },
    { name: 'Java Development', icon: <FaJava className="text-red-400" /> },
    { name: 'Problem Solving', icon: <FaCogs className="text-yellow-400" /> },
    { name: 'Teamwork & Synergy', icon: <FaUsers className="text-blue-400" /> },
    { name: 'Innovation Focused', icon: <FaLightbulb className="text-orange-400" /> },
  ];

  const skillGroups = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'SQL'],
      color: 'from-indigo-500 to-indigo-700',
    },
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3'],
      color: 'from-cyan-400 to-blue-600',
    },
    {
      title: 'Backend & APIs',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Postman'],
      color: 'from-green-400 to-emerald-600',
    },
    {
      title: 'Machine Learning & NLP',
      skills: ['Regression', 'Classification', 'Sentiment Analysis', 'Data Preprocessing'],
      color: 'from-purple-500 to-violet-700',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Docker', 'Git', 'GitHub', 'Tableau'],
      color: 'from-yellow-400 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  } as const;

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#030611]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-transparent to-[#050816] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-gray-400 font-mono text-xs tracking-widest uppercase mb-3">
            Discovery
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            About & <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-indigo-500 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Summary & Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 rounded-full blur-xl group-hover:bg-indigo-600/10 transition-colors" />
              <h4 className="text-lg font-bold font-heading text-white mb-4">Professional Profile</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-sans">
                I am a final-year B.Tech student in Artificial Intelligence and Data Science at Nandha Engineering College. I have a deep passion for constructing intelligent software that solves real-world issues. With hands-on experience as an intern in Deep Learning and AI, I develop both responsive web applications and data-driven models.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed font-sans mt-4">
                I combine a analytical, problem-solving mindset with a solid full-stack skill set. I enjoy collaborating with teams, optimizing architectures, and working across frontend interfaces, RESTful API services, and backend databases.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-sm font-bold font-heading tracking-widest uppercase text-indigo-400 ml-1">
                Core Assets & Principles
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((hl, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-default"
                  >
                    <div className="text-base shrink-0 p-1.5 rounded-lg bg-white/[0.03]">{hl.icon}</div>
                    <span className="text-[11px] font-semibold text-gray-200 tracking-wide">{hl.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Skill Groups */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            {skillGroups.map((group, groupIdx) => (
              <motion.div
                key={groupIdx}
                variants={itemVariants}
                className="glass-panel p-6 rounded-2xl relative overflow-hidden group/card hover:border-indigo-500/20"
              >
                {/* Visual hover color bar on top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${group.color} opacity-30 group-hover/card:opacity-100 transition-opacity`} />

                <h4 className="text-xs font-bold font-heading tracking-widest uppercase text-gray-400 group-hover/card:text-white transition-colors mb-4 flex items-center justify-between">
                  {group.title}
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60" />
                </h4>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.05] hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default text-xs text-gray-300 font-mono"
                    >
                      <FaCheck className="text-[8px] text-cyan-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
