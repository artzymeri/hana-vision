'use client';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Schulbegleitung',
    description: 'Individuelle Unterstützung im Schulalltag',
    features: [
      'Struktur im Tagesablauf',
      'Konzentration & Arbeitsverhalten',
      'Übergänge und neue Situationen',
      'Sozialverhalten und Konfliktlösung',
      'Selbstständigkeit und Motivation',
    ],
    color: 'from-[#1a73e8] to-[#4a90e8]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Soziale Teilhabe',
    description: 'Begleitung im sozialen Umfeld & Freizeit',
    features: [
      'Selbstbewusstsein',
      'Interaktion mit Mitschülern',
      'Konflikt- & Kommunikationsfähigkeit',
      'Mut, sich einzubringen',
    ],
    color: 'from-[#f5a623] to-[#ffc107]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Förderung & Entwicklung',
    description: 'Stärken erkennen, Selbstständigkeit wachsen lassen',
    features: [
      'Emotionale Entwicklung',
      'Soziale Reife',
      'Lern- & Alltagsstrategien',
      'Eigene Lösungswege',
    ],
    color: 'from-[#10b981] to-[#34d399]',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Eltern- & Schulpartnerschaft',
    description: 'Gemeinsam für das Kind',
    features: [
      'Offen mit Lehrkräften',
      'Transparent mit Eltern',
      'Konstruktiv mit Jugendämtern',
      'Gemeinsame Ziele & Abläufe',
    ],
    color: 'from-[#8b5cf6] to-[#a78bfa]',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 bg-[#0a2540] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1a73e8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Was wir für
            <span className="text-[#f5a623]"> Ihr Kind </span>
            tun
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Wir begleiten nicht nur. Wir geben Halt, Orientierung und Unterstützung in der Schule.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} service-card group bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20`}
              style={{ perspective: '1000px' }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 relative z-10" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-white/60 mb-6 relative z-10">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-white/70">
                    <svg className="w-4 h-4 text-[#f5a623] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="reveal mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <div className="w-3 h-3 bg-[#f5a623] rounded-full animate-pulse" />
            <p className="text-white/80">
              Jedes Kind verdient eine Chance. Wir helfen dabei, sie zu nutzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
