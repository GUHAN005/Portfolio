'use client';

import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scroll Spy
      const sections = ['hero', 'about', 'experience', 'projects', 'connect', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Connect' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-bg-dark/75 backdrop-blur-lg border-b border-glass-border shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-wider font-heading flex items-center gap-2 group"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
            GUHAN S
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#06b6d4]" />
        </a>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-indigo-600/90 text-white shadow-lg shadow-indigo-600/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button Group */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/GUHAN005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-lg transition-colors duration-300 hover:scale-105"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/s-guhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-lg transition-colors duration-300 hover:scale-105"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold tracking-widest uppercase text-white rounded-full group bg-gradient-to-br from-indigo-600 via-purple-500 to-cyan-400"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-100 bg-bg-dark rounded-full group-hover:bg-opacity-0">
              Hire Me
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
