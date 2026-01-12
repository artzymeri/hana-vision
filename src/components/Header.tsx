'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'Startseite', href: '#home' },
  { label: 'Über Uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Für Eltern', href: '#parents' },
  { label: 'Für Schulen', href: '#schools' },
  { label: 'Karriere', href: '#career' },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({ delay: 4 });
    
    gsap.set([logoRef.current, navRef.current, ctaRef.current], {
      y: -30,
      opacity: 0,
    });

    tl.to(logoRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    })
    .to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .to(ctaRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6');

    // Scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md ${
          isScrolled 
            ? 'bg-white/90 shadow-lg py-3' 
            : 'bg-white/70 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div ref={logoRef}>
              <Link href="#home" className="flex items-center gap-3 group">
                <Image
                  src="/logo.png"
                  alt="HANA VISION"
                  width={50}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="hidden sm:block">
                  <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                    isScrolled ? 'text-[#0a2540]' : 'text-[#0a2540]'
                  }`} style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                    HANA VISION
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav ref={navRef} className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative font-medium text-sm transition-colors duration-300 group ${
                    isScrolled ? 'text-[#0a2540]' : 'text-[#0a2540]'
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f5a623] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              ref={ctaRef}
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:flex items-center gap-2 bg-[#1a73e8] text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:bg-[#0a2540] hover:scale-105 hover:shadow-xl"
            >
              Kontaktiere Uns
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className={`w-6 h-0.5 bg-[#0a2540] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#0a2540] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-[#0a2540] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <nav 
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24">
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-xl font-medium text-[#0a2540] hover:text-[#1a73e8] transition-colors"
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-8 flex items-center justify-center gap-2 bg-[#1a73e8] text-white px-6 py-4 rounded-full font-medium transition-all hover:bg-[#0a2540]"
            >
              Kontaktiere Uns
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
