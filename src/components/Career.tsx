'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Career() {
  return (
    <section
      id="career"
      className="relative py-32 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#0a2540]/5 rounded-full text-[#0a2540] text-sm font-medium mb-4">
            Karriere
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Karriere
          </h2>
        </div>

        {/* Hero Section */}
        <div className="reveal grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-[#dc2626] font-medium">Karriere bei HANA VISION</span>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#0a2540] mt-2 mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Mach den Unterschied. Werde Schulbegleiter
            </h3>
            <p className="text-lg text-[#0a2540]/70 mb-8">
              Kinder brauchen Menschen, die sie sehen, stärken und begleiten. Wenn du Freude daran hast, Kindern Sicherheit und Orientierung zu geben, dann bist du bei uns richtig.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-[#b91c1c] hover:scale-105 hover:shadow-xl"
            >
              Bewirb Dich Jetzt
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1470&auto=format&fit=crop"
              alt="Career opportunities"
              width={500}
              height={500}
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f5a623] rounded-full -z-10" />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="reveal bg-[#dc2626] rounded-3xl p-8 lg:p-12 mb-24">
          <div className="text-center mb-12">
            <span className="text-white/80 text-sm">Was dich bei uns erwartet</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Bei HANA VISION arbeitest du nah am Kind und erlebst täglich, wie kleine Schritte großen Unterschied machen.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'sinnvolle Arbeit mit echtem Einfluss' },
              { icon: '💚', title: 'wertschätzende Teamkultur' },
              { icon: '🎓', title: 'feste Ansprechpartner und fachliche Begleitung' },
            ].map((benefit, index) => (
              <div key={index} className={`reveal reveal-delay-${index + 1} bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center`}>
                <span className="text-4xl mb-4 block">{benefit.icon}</span>
                <p className="text-white font-medium">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Role Description */}
        <div className="reveal text-center mb-16">
          <span className="text-[#dc2626] font-medium">Du bist nicht „nur Betreuung"</span>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0a2540] mt-2" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            du bist Bezugsperson, Wegbegleiter und Stabilität im Schulalltag.
          </h3>
        </div>

        {/* Requirements Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* What we're looking for */}
          <div className="reveal reveal-delay-1 bg-white rounded-2xl p-8 shadow-lg border border-[#0a2540]/5">
            <h4 className="text-xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Wen wir suchen
            </h4>
            <p className="text-[#0a2540]/70 mb-6">Wir freuen uns über Menschen, die:</p>
            <ul className="space-y-3">
              {[
                'empathisch und zuverlässig sind',
                'Kinder ernst nehmen und stärken wollen',
                'gut kommunizieren können',
                'Verantwortung übernehmen',
                'im Schulumfeld arbeiten möchten',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#0a2540]/80">
                  <span className="text-[#f5a623]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div className="reveal reveal-delay-2 bg-white rounded-2xl p-8 shadow-lg border border-[#0a2540]/5">
            <h4 className="text-xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Was du mitbringst
            </h4>
            <ul className="space-y-3">
              {[
                'Interesse an pädagogischer Arbeit',
                'Offenheit für Weiterbildung',
                'Bereitschaft zur Zusammenarbeit im Team',
                'Quereinsteiger sind herzlich willkommen',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-[#0a2540]/80">
                  <span className="text-[#10b981]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[#0a2540]/60">
              Keine pädagogische Ausbildung nötig. Wir begleiten dich fachlich.
            </p>
          </div>
        </div>

        {/* What we offer Section */}
        <div className="reveal bg-white rounded-2xl p-8 shadow-lg border border-[#0a2540]/5 mb-24">
          <h4 className="text-xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Was wir anbieten
          </h4>
          <ul className="space-y-3">
            {[
              'Wertschätzung und Kommunikation im Team',
              'Weiterbildungsangebote',
              'Faire Vergütung',
              'Ferienzeiten = arbeitsfrei und bezahlt',
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-[#0a2540]/80">
                <span className="text-[#f5a623]">★</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
