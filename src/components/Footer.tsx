'use client';

import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030611] border-t border-white/[0.04] py-12 overflow-hidden select-none">
      {/* Background glow spot */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] rounded-full bg-indigo-600/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side Info */}
        <div className="text-center md:text-left">
          <p className="text-xs font-mono text-gray-500 tracking-wide">
            &copy; {currentYear} GUHAN S. All Rights Reserved.
          </p>
          <p className="text-[10px] font-mono text-gray-600 mt-1">
            Designed & Developed by <span className="text-gray-400">GUHAN S</span>
          </p>
        </div>

        {/* Center Tech Stack credit */}
        <div className="text-center">
          <p className="text-[10px] font-mono text-gray-500 tracking-wider">
            Made with <span className="text-red-500 animate-pulse">❤️</span> using Next.js + TailwindCSS + TS
          </p>
        </div>

        {/* Right Side Actions and Social Links */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-500 text-sm">
            <a
              href="https://github.com/GUHAN005"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/s-guhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:guhanguhan529@gmail.com"
              className="hover:text-white transition-colors duration-300"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.04] text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110 active:scale-95"
            title="Back to Top"
          >
            <FaChevronUp className="text-[10px]" />
          </a>
        </div>

      </div>
    </footer>
  );
}
