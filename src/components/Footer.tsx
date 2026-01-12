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
                HANA VISION. Ihr Partner für professionelle Schulbegleitung. Wir unterstützen Kinder im Schulalltag und fördern ihre Entwicklung mit Herz, Struktur und Wirkung.
              </p>
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
                  +49 176 72509138
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <svg className="w-5 h-5 mt-0.5 text-[#f5a623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>
                    Hana Vision<br />
                    Hornauer Straße 85<br />
                    65779 Kelkheim (Taunus)
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
