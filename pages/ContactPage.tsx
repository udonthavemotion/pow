/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import BusSlideshow from '../components/BusSlideshow';
import { useInView } from '../hooks/useInView';

const FLIP_WORDS = ['PARTY', 'BIRTHDAY BASH', 'BACHELOR PARTY', 'MARDI GRAS RIDE', 'NIGHT OUT'];

function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);
  const [waving, setWaving] = useState(false);

  // Scroll-triggered animations for below-the-fold sections
  const { isInView: contactInView, ref: contactRef } = useInView({ threshold: 0.1 });

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Wait for wave-cascade to finish before starting flips
  useEffect(() => {
    const timer = setTimeout(() => setEntranceDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Cycle words after entrance
  useEffect(() => {
    if (!entranceDone) return;
    const timer = setInterval(() => {
      setWaving(false);
      setFlipping(true);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % FLIP_WORDS.length);
        setFlipping(false);
        // Trigger wave after the flip lands
        setTimeout(() => setWaving(true), 50);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, [entranceDone]);

  // Load GoHighLevel form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://book.partiesonwheels.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Navigation handled by React Router for internal links
  };

  const handleBookNow = () => {
    setBookingModalOpen(true);
  };

  // Embed code for service menu
  const serviceMenuEmbedCode = '<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rc/69a757a0e50c3b2fb71142cd?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a757a0e50c3b2fb71142cd_1772651519600"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>';

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col">
      <Navbar
        onNavClick={handleNavClick}
        onBookNow={handleBookNow}
        onBookNowHover={() => {}}
      />

      <main className="flex-grow">
        {/* Hero Section with Bus Slideshow - Full height matching homepage */}
        <section className="relative w-full h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden">
          {/* Bus Slideshow Background */}
          <div className="absolute inset-0 w-full h-full">
            <BusSlideshow
              autoRotateInterval={6000}
              className="w-full h-full"
              showBusInfo={false}
              showArrows={false}
            />
            {/* Gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
            {/* Brand gradient overlay matching homepage */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 via-transparent to-[#b9ff66]/10"></div>
          </div>

          {/* Content - spacer reserves navbar height, content centered in remaining space */}
          <div className="relative z-10 h-full flex flex-col items-center text-center px-4 sm:px-6">
            <div className="h-20 md:h-24 lg:h-28 flex-shrink-0" aria-hidden />
            <div className={`flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h1 className="text-[5rem] sm:text-8xl md:text-[10rem] lg:text-[9rem] xl:text-[10rem] font-black text-white leading-[0.85] sm:leading-[0.9] lg:leading-[1.1] mb-6 sm:mb-8 drop-shadow-2xl font-['Bebas_Neue'] tracking-tight">
                {!entranceDone ? (
                  // Wave-cascade entrance for "PLAN "
                  <>
                    {"PLAN ".split('').map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-wave-cascade"
                        style={{
                          animationDelay: `${index * 40}ms`,
                          opacity: 0
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </>
                ) : (
                  // Continuous wave for "PLAN "
                  <>
                    {"PLAN ".split('').map((letter, i) => (
                      <span
                        key={`plan-${i}`}
                        className={waving ? 'animate-letter-wave' : ''}
                        style={{
                          display: 'inline-block',
                          animationDelay: waving ? `${i * 40}ms` : undefined,
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                  </>
                )}
                <br/>
                <span className="text-[#FF6B00] drop-shadow-[0_0_30px_rgba(255,107,0,0.6)]">
                  {!entranceDone ? (
                    // Wave-cascade entrance for initial load
                    <>
                      {"YOUR ".split('').map((letter, index) => (
                        <span
                          key={`your-${index}`}
                          className="inline-block animate-wave-cascade"
                          style={{
                            animationDelay: `${(index + 5) * 40}ms`,
                            opacity: 0
                          }}
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      ))}
                      {"PARTY".split('').map((letter, index) => (
                        <span
                          key={`word-${index}`}
                          className="inline-block animate-wave-cascade"
                          style={{
                            animationDelay: `${(index + 10) * 40}ms`,
                            opacity: 0
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </>
                  ) : (
                    // Flipping word cycle after entrance — wave runs across all letters
                    <>
                      {"YOUR ".split('').map((letter, i) => (
                        <span
                          key={`your-${i}`}
                          className={waving ? 'animate-letter-wave' : ''}
                          style={{
                            display: 'inline-block',
                            animationDelay: waving ? `${(i + 5) * 40}ms` : undefined,
                          }}
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      ))}
                      <span style={{ display: 'inline-block', perspective: '600px' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            transition: 'transform 0.3s ease-in-out',
                            transform: flipping ? 'rotateX(90deg)' : 'rotateX(0deg)',
                            transformOrigin: 'center bottom',
                          }}
                        >
                          {FLIP_WORDS[wordIndex].split('').map((letter, i) => (
                            <span
                              key={`${wordIndex}-${i}`}
                              className={waving ? 'animate-letter-wave' : ''}
                              style={{
                                display: 'inline-block',
                                animationDelay: waving ? `${(i + 10) * 40}ms` : undefined,
                              }}
                            >
                              {letter === ' ' ? '\u00A0' : letter}
                            </span>
                          ))}
                        </span>
                      </span>
                    </>
                  )}
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium mb-6 sm:mb-8 drop-shadow-lg px-4 leading-relaxed max-w-2xl mx-auto animate-subtitle-fade"
                 style={{ animationDelay: '1s', opacity: 0 }}>
                Browse the fleet, pick your ride, and lock in your date.{' '}
                <span className="text-[#b9ff66] font-bold">Your party bus or limo is one booking away.</span>
              </p>

              {/* Quick Action Buttons - Now inside the hero */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center px-4 animate-buttons-slide"
                   style={{ animationDelay: '1.2s', opacity: 0 }}>
                <a
                  href="tel:+19858561860"
                  className="group relative px-7 sm:px-9 py-3.5 sm:py-4 min-h-[52px] bg-[#FF6B00] text-white -skew-x-12 hover:bg-[#ff8533] transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.9)] flex items-center justify-center transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B00]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Call us at 985-856-1860"
                >
                  {/* Button glow effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>
                  <span className="block skew-x-12 text-base sm:text-lg font-bold tracking-[0.2em] uppercase relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: (985) 856-1860
                  </span>
                </a>

                <Link
                  to="/#fleet"
                  className="group relative px-7 sm:px-9 py-3.5 sm:py-4 min-h-[52px] bg-transparent border-3 border-white text-white -skew-x-12 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="View our fleet"
                >
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"></span>
                  <span className="block skew-x-12 text-base sm:text-lg font-bold tracking-[0.2em] uppercase relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Fleet
                  </span>
                </Link>

                <button
                  onClick={handleBookNow}
                  className="group relative px-7 sm:px-9 py-3.5 sm:py-4 min-h-[52px] bg-[#b9ff66] text-[#1a1a1a] -skew-x-12 hover:bg-[#a3e652] transition-all duration-300 shadow-[0_0_30px_rgba(185,255,102,0.4)] hover:shadow-[0_0_50px_rgba(185,255,102,0.7)] flex items-center justify-center transform hover:scale-[1.03] active:scale-[0.98] overflow-hidden focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#b9ff66]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Book a party bus now"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>
                  <span className="block skew-x-12 text-base sm:text-lg font-bold tracking-[0.2em] uppercase relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Now
                  </span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" ref={contactRef as React.Ref<HTMLElement>}>
          <div className="max-w-7xl mx-auto">
            {/* Section heading */}
            <div className={`text-center mb-12 transition-all duration-1000 ease-out ${
              contactInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-['Bebas_Neue'] tracking-tight text-[#1a1a1a]">
                GET IN <span className="text-[#FF6B00]">TOUCH</span>
              </h2>
              <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
                Call us, send a message, or fill out the form — we usually respond within the hour.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Column - Business Info Card */}
              <div className={`transition-all duration-1000 ease-out delay-200 ${
                contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1a1a1a]">Phone</h3>
                        <a
                          href="tel:+19858561860"
                          className="text-[#FF6B00] hover:text-[#e56000] transition-colors text-lg font-semibold"
                        >
                          +1 985-856-1860
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1a1a1a]">Email</h3>
                        <a
                          href="mailto:getpartyonwheels@gmail.com"
                          className="text-[#FF6B00] hover:text-[#e56000] transition-colors break-all font-semibold"
                        >
                          getpartyonwheels@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Service Area */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1a1a1a]">Service Area</h3>
                        <p className="text-gray-700 font-medium">
                          Houma • Thibodaux • Raceland • Morgan City
                          <br />
                          <span className="text-sm text-gray-600">New Orleans & Baton Rouge (additional travel rate)</span>
                        </p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-[#1a1a1a]">Availability</h3>
                        <p className="text-gray-700 font-medium">24/7 Booking</p>
                        <p className="text-sm text-gray-600">Call or book online anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className={`transition-all duration-1000 ease-out delay-400 ${
                contactInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden relative">
                  {/* Loading skeleton for iframe */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50 pointer-events-none">
                    <div className="text-center">
                      <div className="w-10 h-10 border-4 border-[#FF6B00]/30 border-t-[#FF6B00] rounded-full animate-spin mx-auto mb-3"></div>
                      <p className="text-gray-400 text-sm font-medium">Loading booking form...</p>
                    </div>
                  </div>
                  {/* GoHighLevel Contact Form Embed */}
                  <iframe
                    src="https://book.partiesonwheels.com/widget/form/FcOBrAmHxt0vVTMFms0Y"
                    style={{ width: '100%', height: '1208px', border: 'none', borderRadius: '3px', position: 'relative', zIndex: 1 }}
                    id="inline-FcOBrAmHxt0vVTMFms0Y"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Party Bus Rental Booking Form"
                    data-height="1208"
                    data-layout-iframe-id="inline-FcOBrAmHxt0vVTMFms0Y"
                    data-form-id="FcOBrAmHxt0vVTMFms0Y"
                    title="Party Bus Rental Booking Form"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onLinkClick={handleNavClick} />

      {/* Booking Modal */}
      {bookingModalOpen && (
        <BookingModal
          serviceMenuEmbedCode={serviceMenuEmbedCode}
          onClose={() => setBookingModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ContactPage;
