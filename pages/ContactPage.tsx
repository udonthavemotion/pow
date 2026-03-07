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

/**
 * ContactPage - Professional contact page for Party On Wheels
 *
 * Features:
 * - Professional hero section with subtle bus slideshow background (40vh height)
 * - Clean, corporate-friendly header without duplicate bus information
 * - Quick action buttons with improved accessibility
 * - Two-column layout (business info + contact form)
 * - Smooth entrance animations
 * - Full WCAG 2.1 AA accessibility support
 * - Responsive mobile-first design
 *
 * Design Philosophy:
 * - Maintains brand identity while projecting professionalism
 * - Subtle use of fleet imagery to build trust without being overly playful
 * - Clear calls-to-action for business inquiries
 * - Optimized for conversion and lead generation
 *
 * @returns {JSX.Element} Contact page layout
 */
function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
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
          </div>

          {/* Content - spacer reserves navbar height, content centered in remaining space */}
          <div className="relative z-10 h-full flex flex-col items-center text-center px-4 sm:px-6">
            <div className="h-20 md:h-24 lg:h-28 flex-shrink-0" aria-hidden />
            <div className={`flex-1 flex flex-col justify-center items-center w-full max-w-5xl mx-auto transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-2xl">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 max-w-2xl mx-auto font-medium mb-10 drop-shadow-lg leading-relaxed">
                Partner with South Louisiana's premier party bus service for your next event.
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

        {/* Prominent Logo Section with Creative Design */}
        <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Animated gradient orbs */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#b9ff66]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className={`relative max-w-5xl mx-auto text-center transition-all duration-1200 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Logo Container with Animation */}
            <div className="relative inline-block group">
              {/* Animated glow ring */}
              <div className="absolute inset-0 -m-4 sm:-m-6 bg-gradient-to-r from-[#FF6B00] via-[#b9ff66] to-[#FF6B00] rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-spin-slow"></div>

              {/* Logo wrapper with hover effect */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/5 via-transparent to-[#b9ff66]/5 rounded-3xl"></div>

                <img
                  src="/images/buses/Untitled design - 2026-03-03T194725.612.png"
                  alt="Party On Wheels - South Louisiana's Premier Party Bus Service"
                  className="relative w-48 h-auto sm:w-56 md:w-64 lg:w-72 xl:w-80 mx-auto object-contain drop-shadow-2xl animate-float"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-[#FF6B00] rounded-tl-lg opacity-60"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-[#FF6B00] rounded-tr-lg opacity-60"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-[#b9ff66] rounded-bl-lg opacity-60"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-[#b9ff66] rounded-br-lg opacity-60"></div>
            </div>

            {/* Tagline with gradient text */}
            <div className="mt-10 sm:mt-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-[#FF6B00] via-[#1a1a1a] to-[#FF6B00] bg-clip-text text-transparent font-['Bebas_Neue'] tracking-wide animate-gradient-x">
                South Louisiana's Premier Party Bus Service
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Experience unforgettable celebrations with our luxury fleet. Professional, reliable, and ready to make your event extraordinary.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B00] to-[#e56000] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">Licensed & Insured</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-[#b9ff66] to-[#a3e652] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-[#1a1a1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">24/7 Availability</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B00] to-[#e56000] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm sm:text-base">5-Star Service</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Two Column Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

              {/* Left Column - Business Info Card */}
              <div className={`transition-all duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
                  <h2 className="text-3xl font-bold mb-6 text-[#1a1a1a] font-['Bebas_Neue'] tracking-wide">
                    Get In Touch
                  </h2>

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
                          href="mailto:info@partyonwheelspow.com"
                          className="text-[#FF6B00] hover:text-[#e56000] transition-colors break-all font-semibold"
                        >
                          info@partyonwheelspow.com
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

                  {/* Map/Location Graphic */}
                  <div className="mt-8 bg-white rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center justify-center text-center">
                      <div>
                        <img
                          src="/images/buses/Untitled design - 2026-03-03T194725.612.png"
                          alt="Party On Wheels Logo"
                          className="w-24 h-auto mx-auto mb-3 object-contain drop-shadow-md"
                        />
                        <h4 className="font-bold text-lg mb-2">Serving Houma, Thibodaux, Raceland, and Morgan City</h4>
                        <p className="text-sm text-gray-600">
                          Additionally New Orleans and Baton Rouge at an additional travel rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className={`transition-all duration-1000 ease-out delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}>
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  {/* GoHighLevel Contact Form Embed */}
                  <iframe
                    src="https://link.zeromotionmarketing.com/widget/form/SJ6QVJFvKD4x5dUBHypc"
                    style={{ width: '100%', height: '805px', border: 'none' }}
                    id="inline-SJ6QVJFvKD4x5dUBHypc"
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Contact Us Form"
                    data-height="805"
                    data-layout-iframe-id="inline-SJ6QVJFvKD4x5dUBHypc"
                    data-form-id="SJ6QVJFvKD4x5dUBHypc"
                    title="Contact Us Form"
                    loading="lazy"
                  />
                  <script src="https://link.zeromotionmarketing.com/js/form_embed.js" async />
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
