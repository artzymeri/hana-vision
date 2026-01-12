'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-white overflow-hidden animated-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="reveal text-center mb-24">
          <span className="inline-block px-4 py-2 bg-[#0a2540]/5 rounded-full text-[#0a2540] text-sm font-medium mb-4">
            Unsere Mission
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a2540] mb-8" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Mission
          </h2>
          <p className="text-xl text-[#0a2540]/70 max-w-3xl mx-auto mb-4">
            Bei HANA VISION unterstützen wir Kinder im Schulalltag, fördern ihre Entwicklung und schaffen Wege, wie Lernen, Teilhabe und Selbstvertrauen möglich werden.
          </p>
          <p className="text-xl font-semibold text-[#0a2540]">
            Wir begleiten nicht nur. Wir geben Halt, Orientierung und ein Stück Zuhause in der Schule.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Card 1 */}
          <div className="reveal reveal-delay-1 group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1540151812223-c30b3fab58e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/40 to-transparent transition-all duration-500 group-hover:from-[#0a2540]/70 group-hover:via-[#0a2540]/20" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Was uns ausmacht
              </h3>
              <p className="text-[#0a2540]/70 mb-4">
                <strong className="text-[#0a2540]">Wir sehen das Kind als Ganzes.</strong>
              </p>
              <ul className="space-y-2 text-[#0a2540]/70">
                <li>Wir begleiten mit Struktur, Respekt und Kompetenz.</li>
                <li>Wir schaffen Teilhabe. Nicht nur organisatorisch, sondern emotional.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="reveal reveal-delay-2 group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Teaching support"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/90 via-[#0a2540]/40 to-transparent transition-all duration-500 group-hover:from-[#0a2540]/70 group-hover:via-[#0a2540]/20" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Unser Versprechen
              </h3>
              <p className="text-[#0a2540]/70 mb-4">
                Jedes Kind verdient Menschen, die es sehen, ernst nehmen und an es glauben.
              </p>
              <p className="text-[#0a2540]/70">
                Wir sind da, damit Lernen gelingt, Beziehungen wachsen und Zukunft möglich wird.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Image */}
          <div className="reveal-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1740635341299-3b8e3490f546?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Child learning"
                width={600}
                height={500}
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f5a623] rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="reveal-right">
            <h3 className="text-3xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Gemeinsam für Ihr Kind.
            </h3>
            <p className="text-lg text-[#0a2540]/70 mb-8">
              Wir glauben daran, dass jedes Kind Chancen verdient. Unterstützung, Sicherheit und Menschen, die an es glauben. Wenn Sie Begleitung suchen, die stärkt und versteht, sind Sie bei uns richtig.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-[#1a73e8] font-semibold hover:gap-4 transition-all duration-300"
            >
              Kontakt aufnehmen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Why HANA VISION Section */}
        <div className="reveal grid lg:grid-cols-2 gap-16 items-center bg-[#f8fafc] rounded-3xl p-12">
          {/* Left - Content */}
          <div>
            <h3 className="text-3xl font-bold text-[#0a2540] mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Warum HANA VISION?
            </h3>
            <p className="text-[#0a2540]/70 mb-6">
              Der Name <em>HANA</em> leitet sich ab von Mond (Hënë, Albanisch). Ein Symbol, das wir bewusst gewählt haben. Der Mond leuchtet, wenn es dunkel ist, spendet Orientierung, wirkt sanft, aber beständig.
            </p>
            <p className="text-[#0a2540]/70 mb-6">
              <strong className="text-[#0a2540]">Genau das ist unsere Haltung:</strong> Wir sind <strong>ruhige Begleiter</strong>, Stabilität im Hintergrund, Licht in herausfordernden Momenten.
            </p>
            <p className="text-[#0a2540]/70">
              Wir glauben daran, dass jedes Kind sein eigenes Licht besitzt. Unsere Aufgabe ist nicht, es zu ersetzen. Wir sorgen dafür, <strong>dass es gesehen wird.</strong>
            </p>
          </div>

          {/* Right - Logo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f5a623]/20 rounded-full blur-3xl scale-150" />
              <Image
                src="/logo.png"
                alt="HANA VISION Logo"
                width={300}
                height={300}
                className="relative z-10 floating"
              />
            </div>
          </div>
        </div>

        {/* Philosophy List */}
        <div className="mt-24">
          <div className="reveal text-center mb-12">
            <h3 className="text-3xl font-bold text-[#0a2540]" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
              Unsere Philosophie
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: 'Jedes Kind verdient Menschen, die an es glauben.', icon: '✨' },
              { text: 'Teilhabe entsteht dort, wo Vertrauen wächst.', icon: '🌱' },
              { text: 'Entwicklung beginnt, wenn ein Kind sich gesehen fühlt.', icon: '💫' },
            ].map((item, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#0a2540]/5 text-center`}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <p className="text-lg font-medium text-[#0a2540]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
