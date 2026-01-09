'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbs = containerRef.current.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        x: () => Math.random() * 100 - 50,
        y: () => Math.random() * 100 - 50,
        duration: 10 + index * 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ opacity: 0.5 }}
    >
      {/* Large gradient orbs */}
      <div className="orb absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#1a73e8]/5 to-transparent rounded-full blur-3xl" />
      <div className="orb absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#f5a623]/5 to-transparent rounded-full blur-3xl" />
      <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#0a2540]/3 to-transparent rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(10, 37, 64, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 37, 64, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
