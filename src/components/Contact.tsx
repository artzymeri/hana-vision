'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="relative py-32 bg-[#0a2540] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1a73e8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium mb-4">
            Kontakt
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
            Kontakt
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: 'Telefon',
              value: '+49 176 72509138',
              subtitle: 'Montag – Freitag',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: 'Email',
              value: 'info@hana-vision.de',
              subtitle: '',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: 'Büro',
              value: 'Hornauer Straße 85',
              subtitle: '65779 Kelkheim (Taunus)',
            },
          ].map((contact, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="w-16 h-16 bg-[#1a73e8]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1a73e8]">
                {contact.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a2540] mb-2" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                {contact.title}
              </h3>
              <p className="text-[#0a2540] font-medium">{contact.value}</p>
              {contact.subtitle && (
                <p className="text-[#0a2540]/60 text-sm mt-1">{contact.subtitle}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="reveal bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0a2540] mb-4" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
                Bei HANA VISION nehmen wir uns Zeit für Austausch, Klärung und Beratung
              </h3>
              <p className="text-[#0a2540]/70 mb-8">
                Sie haben Fragen, möchten Unterstützung beantragen oder sich über eine Zusammenarbeit informieren? Wir sind gern für Sie da.
              </p>

              {submitted ? (
                <div className="bg-[#10b981]/10 border border-[#10b981]/20 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#0a2540] mb-2">Vielen Dank!</h4>
                  <p className="text-[#0a2540]/70">
                    Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0a2540] mb-2">
                      Email<span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0a2540]/20 focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0a2540] mb-2">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#0a2540]/20 focus:border-[#1a73e8] focus:ring-2 focus:ring-[#1a73e8]/20 outline-none transition-all resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0a2540] text-white py-4 rounded-xl font-semibold transition-all hover:bg-[#0f3460] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Senden...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
          </div>
        </div>

        {/* Trust message */}
        <div className="reveal mt-16 text-center">
          <p className="text-white/60 text-sm">
            Wir freuen uns auf Ihre Nachricht und melden uns zeitnah zurück.
          </p>
        </div>
      </div>
    </section>
  );
}
