'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Hero animates after loader (4.2s)
    const tl = gsap.timeline({ delay: 4.2 });

    // Set initial states
    gsap.set(headingRef.current, { y: 100, opacity: 0 });
    gsap.set(subheadingRef.current, { y: 50, opacity: 0 });
    gsap.set(buttonsRef.current, { y: 30, opacity: 0 });
    gsap.set(imageRef.current, { x: 100, opacity: 0, scale: 0.9 });
    gsap.set(decorRef.current, { scale: 0, opacity: 0 });
    gsap.set(statsRef.current, { y: 30, opacity: 0 });

    // Animate in sequence
    tl.to(headingRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
    .to(subheadingRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .to(buttonsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5')
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'power3.out',
    }, '-=0.8')
    .to(decorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.8')
    .to(statsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f8fafc] to-[#e8f4fc]"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large decorative circle */}
        <div 
          ref={decorRef}
          className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#1a73e8]/10 to-[#f5a623]/10 blur-3xl"
        />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#f5a623]/20 rounded-full floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-[#1a73e8]/20 rounded-full floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-[#0a2540]/10 rounded-full floating" style={{ animationDelay: '2s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#0a2540 1px, transparent 1px), linear-gradient(90deg, #0a2540 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0a2540] leading-tight"
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              Wir begleiten Kinder
              <br />
              <span className="text-[#1a73e8]">mit Herz,</span>
              <br />
              <span className="gradient-text">Struktur und Wirkung.</span>
            </h1>

            <p
              ref={subheadingRef}
              className="mt-6 text-lg sm:text-xl text-[#0a2540]/70 max-w-xl mx-auto lg:mx-0"
            >
              Individuelle Schulbegleitung, die stärkt, versteht und Teilhabe ermöglicht.
            </p>

            <div ref={buttonsRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#about"
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-[#0a2540] px-8 py-4 rounded-full font-semibold text-base border-2 border-[#0a2540] overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="absolute inset-0 bg-[#0a2540] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">Über Uns</span>
              </Link>
              <Link
                href="#services"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#0a2540] text-white px-8 py-4 rounded-full font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0a2540]/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] to-[#f5a623] transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">Leistungen</span>
                <svg className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators - removed */}
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop"
                alt="Kinder lernen zusammen"
                width={600}
                height={700}
                className="w-full h-[500px] lg:h-[600px] object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -left-8 bottom-20 bg-white rounded-2xl p-6 shadow-2xl z-20 hidden lg:block floating" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#f5a623]/20 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-[#0a2540]">Mit Herz & Verstand</p>
                  <p className="text-sm text-[#0a2540]/60">Für jedes Kind</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 top-10 w-24 h-24 bg-[#f5a623] rounded-2xl -z-10 rotate-12" />
            <div className="absolute -bottom-4 right-10 w-20 h-20 bg-[#1a73e8]/30 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
