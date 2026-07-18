'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  const roles = [
    'AI Engineer',
    'Full Stack Developer',
    'Java Developer',
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Mouse follow glow state
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHoveredImg, setIsHoveredImg] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMoveImg = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x, y });
  };

  useEffect(() => {
    const activeWord = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(activeWord.substring(0, displayText.length + 1));
        if (displayText === activeWord) {
          setIsDeleting(true);
          setTypingSpeed(1800); // pause at full word
        } else {
          setTypingSpeed(80 + Math.random() * 50);
        }
      } else {
        setDisplayText(activeWord.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400); // pause before next word
        } else {
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-bg"
    >
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '-4s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left column: Text content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] tracking-widest text-indigo-300 font-mono uppercase">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-400 font-heading text-xl tracking-wider mb-2"
          >
            Hello 👋
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 font-mono text-sm tracking-wider mb-2"
          >
            I'm
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-4"
          >
            <span className="text-white">GUHAN </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              S
            </span>
          </motion.h1>

          {/* Typing Role Animation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6"
          >
            <span className="text-xl md:text-3xl font-heading font-semibold text-cyan-400 text-glow">
              {displayText}
            </span>
            <span className="inline-block w-[3px] h-7 md:h-9 bg-cyan-400 ml-1.5 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-base max-w-xl leading-relaxed mb-8 font-sans"
          >
            Building Intelligent Software and AI Solutions for Real-World Problems.
          </motion.p>

          {/* Actions Button Panel */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:scale-[1.03] active:scale-[0.98]"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08] hover:border-white/[0.15] text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              View Projects
              <FaArrowRight className="text-sm text-cyan-400" />
            </a>
          </motion.div>
        </div>

        {/* Right column: Circular portrait occupying ~40% space */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            ref={containerRef}
            onMouseMove={handleMouseMoveImg}
            onMouseEnter={() => setIsHoveredImg(true)}
            onMouseLeave={() => {
              setIsHoveredImg(false);
              setCoords({ x: 0, y: 0 });
            }}
            className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] flex items-center justify-center cursor-pointer select-none"
          >
            
            {/* Interactive mouse-follow spotlight glow (cyan-blue backdrop) */}
            <motion.div
              className="absolute inset-[-15px] rounded-full bg-gradient-to-tr from-cyan-400 to-indigo-500 opacity-25 blur-3xl pointer-events-none"
              animate={{
                x: isHoveredImg ? coords.x * 0.35 : 0,
                y: isHoveredImg ? coords.y * 0.35 : 0,
              }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            />

            {/* Neon background blur shadow overlay */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-2xl pointer-events-none" />

            {/* Subtle animated rotating gradient border ring */}
            <div 
              className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-600 animate-glow-spin" 
              style={{ animationDuration: '10s' }} 
            />

            {/* Up and Down Gentle Floating Motion */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="w-full h-full relative"
            >
              {/* Circular Glassmorphism frame wrap */}
              <div className="relative w-full h-full rounded-full p-[3px] bg-white/[0.08] backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="relative w-full h-full rounded-full bg-[#050816] overflow-hidden">
                  <img
                    src="/profile.jpg?v=3"
                    alt="Guhan S Professional Portrait"
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-[1.25] transition-transform duration-700 hover:scale-[1.32]"
                  />
                  {/* Subtle vignette lighting layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>
              </div>

              {/* Floating micro spark particles around avatar */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/80 blur-[0.5px]"
                  style={{
                    top: `${[15, 75, 45, 85, 25][i]}%`,
                    left: `${[80, 15, 95, 70, 5][i]}%`,
                  }}
                  animate={{
                    y: [0, [-25, 20, -15, 30, -20][i], 0],
                    x: [0, [15, -15, 20, -25, 10][i], 0],
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </motion.div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
