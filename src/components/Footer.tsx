'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Startseite', href: '#home' },
  { label: 'Über Uns', href: '#about' },
  { label: 'Leistungen', href: '#services' },
  { label: 'Für Eltern', href: '#parents' },
  { label: 'Für Schulen', href: '#schools' },
  { label: 'Karriere', href: '#career' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a2540] overflow-hidden">
      {/* CTA Section */}
      <div className="reveal relative py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#1a73e8] to-[#0a2540] rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5a623]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Bereit für den nächsten Schritt?
              </h3>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Ob Sie Unterstützung für Ihr Kind suchen, eine Zusammenarbeit als Schule wünschen oder Teil unseres Teams werden möchten – wir freuen uns auf Sie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a623] text-[#0a2540] px-8 py-4 rounded-full font-semibold transition-all hover:bg-[#ffc107] hover:scale-105"
                >
                  Kontakt aufnehmen
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#career"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/20"
                >
                  Karriere entdecken
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <Link href="#home" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="HANA VISION"
                  width={150}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-white/70 mb-6 max-w-md">
                HANA VISION – Ihr Partner für professionelle Schulbegleitung. Wir unterstützen Kinder im Schulalltag und fördern ihre Entwicklung mit Herz, Struktur und Wirkung.
              </p>
              <div className="flex gap-4">
                {/* Social Links */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#f5a623] hover:text-[#0a2540] transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#f5a623] hover:text-[#0a2540] transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#f5a623] hover:text-[#0a2540] transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Navigation
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/70 hover:text-[#f5a623] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Kontakt
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@hana-vision.de
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  509-728-8632
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Musterstraße 1<br />
                    12345 Musterstadt
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} HANA VISION. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
