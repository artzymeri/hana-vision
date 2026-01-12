'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Schools() {
  return (
    <section
      id="schools"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(#0a2540 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0a2540]/5 rounded-full text-[#0a2540] text-sm font-medium mb-4">
            Für Schulen
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Für Schulen
          </h2>
        </div>

        {/* Hero Section */}
        <div className="reveal relative bg-gradient-to-br from-[#0a2540] to-[#0f3460] rounded-3xl p-8 lg:p-12 mb-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#1a73e8]/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Unsere Schulbegleiter:
            </h3>
            
            <ul className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'schaffen Orientierung für das Kind',
                'begleiten Übergänge und Arbeitsphasen',
                'stärken soziales Verhalten und Kommunikation',
                'unterstützen Konfliktbewältigung',
                'fördern Selbstständigkeit',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-xl text-white">
              Damit schaffen wir <strong className="text-[#f5a623]">mehr Ruhe, Klarheit und Teilhabe</strong> im Klassenraum.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#f5a623] text-[#0a2540] px-6 py-3 rounded-full font-semibold transition-all hover:bg-[#ffc107] hover:scale-105"
            >
              Kontakt
            </Link>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal-left">
            <span className="text-[#0a2540]/60 text-sm uppercase tracking-wider">Für Schulen</span>
            <h3 className="text-3xl font-bold text-[#0a2540] mt-2 mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Schulbegleitung ist eine wertvolle Ressource
            </h3>
            <p className="text-[#0a2540]/70 mb-6">
              nicht nur für Kinder mit Unterstützungsbedarf, sondern auch für den schulischen Alltag.
            </p>
            <p className="text-[#0a2540]/70">
              Wir verstehen uns als <strong className="text-[#0a2540]">pädagogische Partner</strong>, die entlasten, strukturieren und dazu beitragen, dass Lernen gelingt.
            </p>
          </div>
          <div className="reveal-right relative">
            <Image
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop"
              alt="School environment"
              width={500}
              height={400}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#f5a623] rounded-2xl -z-10" />
          </div>
        </div>

        {/* How we support schools */}
        {/* Our Approach */}
        <div className="reveal bg-[#f8fafc] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#1a73e8] font-medium">Unsere Arbeitsweise</span>
              <h3 className="text-3xl font-bold text-[#0a2540] mt-2 mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Gemeinsam. Nie gegeneinander.
              </h3>
              <p className="text-[#0a2540]/70 mb-6">
                Unsere Schulbegleiter arbeiten <strong className="text-[#0a2540]">im Team mit Lehrkräften</strong>. Respektvoll, strukturiert und immer im Sinne des Kindes.
              </p>
              <ul className="space-y-3 text-[#0a2540]/80">
                <li className="flex items-center gap-2">
                  <span className="text-[#10b981]">✓</span> Klare Kommunikation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10b981]">✓</span> Abgestimmte Ziele
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#10b981]">✓</span> Transparente Dokumentation
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1470&auto=format&fit=crop"
                alt="Classroom support"
                width={450}
                height={350}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 text-center">
          <p className="text-[#0a2540]/70 text-lg mb-6">
            Sie möchten eine Zusammenarbeit besprechen?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#0a2540] text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105"
          >
            Kontakt aufnehmen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
