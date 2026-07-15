'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    // Add class to body to hide default cursor
    document.documentElement.classList.add('desktop-custom-cursor');

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setIsVisible(true);

      // Instantly position the dot
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.05,
        overwrite: 'auto'
      });

      // Smoothly lag the outer ring
      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Track hovered interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.documentElement.classList.remove('desktop-custom-cursor');
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isHovered ? 'cursor-hover' : ''}`}
    >
      <div ref={dotRef} className="custom-cursor cursor-dot hidden lg:block" />
      <div ref={ringRef} className="custom-cursor cursor-ring hidden lg:block" />
    </div>
  );
}
