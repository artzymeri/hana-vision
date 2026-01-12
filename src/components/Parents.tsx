'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Parents() {
  return (
    <section
      id="parents"
      className="relative py-32 bg-gradient-to-br from-[#0a2540] via-[#0f3460] to-[#0a2540] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#1a73e8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4">
            Für Eltern
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Für Eltern
          </h2>
        </div>

        {/* Hero Card */}
        <div className="reveal bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Was bedeutet Schulbegleitung für Ihr Kind?
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xl text-white/80 mb-6">
                Schulbegleitung hilft Kindern:
              </p>
              <ul className="space-y-4">
                {[
                  'am Unterricht teilzunehmen',
                  'soziale Sicherheit zu entwickeln',
                  'Herausforderungen zu meistern',
                  'Struktur und Orientierung zu finden',
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
              <p className="mt-8 text-lg text-white/80">
                Wir unterstützen nicht „anstelle des Kindes", sondern <strong className="text-[#f5a623]">an seiner Seite</strong>, damit Selbstständigkeit wachsen kann.
              </p>
              <Link
                href="#services"
                className="mt-6 inline-flex items-center gap-2 bg-[#dc2626] text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-[#b91c1c] hover:scale-105"
              >
                Leistungen
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1557236751-b60abca1479e?q=80&w=1047&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Family support"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="reveal text-center mb-12">
            <span className="text-[#1a73e8] font-medium">Wie läuft</span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mt-2" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Schulbegleitung ab?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', text: 'Sie nehmen Kontakt zu uns auf' },
              { step: '02', text: 'Wir besprechen Bedürfnisse und Ziele' },
              { step: '03', text: 'Das Jugendamt prüft und bewilligt die Begleitung' },
              { step: '04', text: 'Wir starten die Zusammenarbeit. Strukturiert und abgestimmt' },
              { step: '05', text: 'Sie bleiben Teil des Prozesses' },
            ].map((item, index) => (
              <div key={index} className={`reveal reveal-delay-${index + 1} bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all`}>
                <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0a2540] font-bold">
                  {item.step}
                </div>
                <p className="text-white/90 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="reveal text-center text-white/70 mt-8">
            Wir begleiten Sie dabei <strong className="text-white">Schritt für Schritt.</strong>
          </p>
        </div>

        {/* Attitude Section */}
        <div className="reveal bg-[#f8fafc] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#dc2626] font-medium">Unsere Haltung gegenüber Ihrem Kind</span>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0a2540] mt-2 mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Wir sehen Kinder nicht als „Problem", sondern als Menschen mit Potenzial.
              </h3>
              <p className="text-[#0a2540]/70 mb-6">Unsere Schulbegleiter:</p>
              <ul className="space-y-3 text-[#0a2540]/80">
                <li>• arbeiten wertschätzend</li>
                <li>• geben Stabilität</li>
                <li>• fördern Selbstvertrauen</li>
                <li>• kommunizieren offen mit Ihnen</li>
              </ul>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/logo.png"
                alt="HANA VISION"
                width={200}
                height={200}
                className="floating"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 text-center">
          <p className="text-white/80 text-lg mb-6">
            Sie haben Fragen oder möchten eine Schulbegleitung anfragen?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#0a2540] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
