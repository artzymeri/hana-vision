'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Create particles
    if (particlesRef.current) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.bottom = `-10px`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 4}s`;
        particlesRef.current.appendChild(particle);
      }
    }

    // Initial state
    gsap.set(logoRef.current, { 
      scale: 0, 
      opacity: 0, 
      rotationY: -180 
    });
    gsap.set(textRef.current, { 
      y: 50, 
      opacity: 0 
    });
    gsap.set(progressRef.current, { 
      scaleX: 0,
      transformOrigin: 'left center'
    });

    // Animation sequence
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      rotationY: 0,
      duration: 1.2,
      ease: 'back.out(1.7)',
    })
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1,
    })
    .to(textRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.3');

    // Progress animation
    const progressTl = gsap.timeline({ delay: 0.5 });
    progressTl.to({ value: 0 }, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: function() {
        const newProgress = Math.round(this.targets()[0].value);
        setProgress(newProgress);
        if (progressRef.current) {
          gsap.set(progressRef.current, { scaleX: newProgress / 100 });
        }
        if (circleRef.current) {
          const circumference = 2 * Math.PI * 45;
          circleRef.current.style.strokeDashoffset = String(circumference - (newProgress / 100) * circumference);
        }
      },
    });

    // Exit animation
    const exitTl = gsap.timeline({ delay: 3.5 });
    
    exitTl.to(logoRef.current, {
      scale: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.in',
    })
    .to(textRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
    }, '-=0.8')
    .to(progressRef.current?.parentElement || progressRef.current, {
      opacity: 0,
      duration: 0.3,
    }, '-=0.6')
    .to(loaderRef.current, {
      clipPath: 'circle(0% at 50% 50%)',
      duration: 1.2,
      ease: 'power4.inOut',
      onComplete: onComplete,
    }, '-=0.5');

    return () => {
      tl.kill();
      progressTl.kill();
      exitTl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={loaderRef} 
      className="loader-container"
      style={{ clipPath: 'circle(100% at 50% 50%)' }}
    >
      <div className="loader-bg-pattern" />
      <div ref={particlesRef} className="loader-particles" />
      
      {/* Animated circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] border border-white/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with glow */}
        <div 
          ref={logoRef}
          className="relative mb-8"
          style={{ perspective: '1000px' }}
        >
          {/* Glow effect behind logo */}
          <div className="absolute inset-0 bg-[#f5a623] blur-3xl opacity-30 scale-150" />
          
          {/* Circular progress */}
          <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            <circle
              ref={circleRef}
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#f5a623"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: `${2 * Math.PI * 45}`,
                strokeDashoffset: `${2 * Math.PI * 45}`,
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
              }}
            />
          </svg>
          
          <Image
            src="/logo.png"
            alt="HANA VISION"
            width={150}
            height={150}
            className="relative z-10 drop-shadow-2xl invert"
            priority
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            HANA VISION
          </h1>
          <p className="text-white/60 text-lg tracking-widest uppercase">
            Schulbegleitung
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-64">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#f5a623] to-[#1a73e8] rounded-full"
            />
          </div>
          <p className="text-white/40 text-sm mt-3 text-center font-medium">
            {progress}%
          </p>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>
      </div>
    </div>
  );
}
