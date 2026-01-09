'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const Loader = dynamic(() => import('@/components/Loader'), { ssr: false });
const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Parents = dynamic(() => import('@/components/Parents'), { ssr: false });
const Schools = dynamic(() => import('@/components/Schools'), { ssr: false });
const Career = dynamic(() => import('@/components/Career'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false });
const ScrollRevealInit = dynamic(() => import('@/components/ScrollRevealInit'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Preload images
    const images = [
      '/logo.png',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1422&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <main className="relative">
      {/* Loader */}
      {isLoading && <Loader onComplete={handleLoadComplete} />}

      {/* Main Content */}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <AnimatedBackground />
        <ScrollRevealInit />
        <Header />
        <Hero />
        <Services />
        <About />
        <Parents />
        <Schools />
        <Career />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
