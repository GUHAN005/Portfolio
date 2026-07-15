'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/ThreeBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import SocialSection from '@/components/SocialSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Block viewport scrolling during the terminal bootloader sequence
  useEffect(() => {
    if (isLoading) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      <div className={`relative min-h-screen transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Interactive 3D starfield backdrop */}
        <ThreeBackground />
        
        {/* Floating nav header */}
        <Navbar />
        
        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certifications />
          <SocialSection />
          <Contact />
        </main>
        
        {/* Footer Area */}
        <Footer />
      </div>
    </>
  );
}
