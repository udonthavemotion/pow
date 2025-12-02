/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';
import { Bus } from '../types';

interface BookingModalProps {
  bus?: Bus | null;
  serviceMenuEmbedCode?: string;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ bus, serviceMenuEmbedCode, onClose }) => {
  const isServiceMenu = !bus && serviceMenuEmbedCode;
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Ensure iframe loads and adjust height dynamically
  useEffect(() => {
    const embedCode = isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode;
    if (iframeContainerRef.current && embedCode) {
      // Use setTimeout to ensure DOM is updated after dangerouslySetInnerHTML
      const timeoutId = setTimeout(() => {
        const iframe = iframeContainerRef.current?.querySelector('iframe');
        if (iframe) {
          // Ensure iframe has proper attributes for mobile scrolling
          iframe.style.width = '100%';
          iframe.style.border = 'none';
          // Set scrolling="no" to avoid inner scrollbar - page scroll handles it
          iframe.setAttribute('scrolling', 'no');
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allowtransparency', 'true');
          // Add class if not already present
          if (!iframe.classList.contains('pow-booking-frame')) {
            iframe.classList.add('pow-booking-frame');
          }
          // Set ID for service menu iframe
          if (isServiceMenu && !iframe.id) {
            iframe.id = 'pow-service-menu-iframe';
          }
          // Set minimum height for mobile - GHL's form_embed.js will adjust
          const isMobile = window.innerWidth <= 768;
          iframe.style.minHeight = isMobile ? '100vh' : '90vh';
        }

        // Load any scripts in the embed code
        const scripts = iframeContainerRef.current?.querySelectorAll('script');
        scripts?.forEach((oldScript) => {
          // Skip if script already executed
          if (oldScript.getAttribute('data-executed') === 'true') return;
          
          const newScript = document.createElement('script');
          Array.from(oldScript.attributes).forEach(attr => {
            if (attr.name !== 'data-executed') {
              newScript.setAttribute(attr.name, attr.value);
            }
          });
          newScript.textContent = oldScript.textContent;
          newScript.setAttribute('data-executed', 'true');
          oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [bus?.calendarEmbedCode, serviceMenuEmbedCode, isServiceMenu]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 bg-black/95 backdrop-blur-xl animate-fade-in-up overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-gradient-to-b from-[#1A1425] to-black w-full min-h-full sm:h-full sm:max-w-7xl sm:max-h-[95vh] sm:rounded-3xl sm:overflow-hidden flex flex-col shadow-[0_0_100px_rgba(147,51,234,0.4)] sm:border-2 border-2 border-purple-500/60 animate-fade-in-up relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Top Right - Luxury Style - Mobile Optimized */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-purple-600 to-yellow-400 hover:from-yellow-400 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg shadow-purple-500/50 group min-h-[48px] min-w-[48px]"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 sm:w-7 sm:h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

          {/* LEFT SIDE - Bus Showcase - Mobile Optimized */}
          <div className="lg:w-2/5 bg-gradient-to-br from-[#1A1425] via-[#0F0A1F] to-black p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden lg:border-r-2 border-b-2 lg:border-b-0 border-purple-500/50 max-h-[35vh] sm:max-h-[40vh] lg:max-h-full">

            {/* Luxury Background Accents */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>

            {/* Content */}
            <div className="relative z-10 space-y-3 sm:space-y-6">
              {/* Title Section */}
              <div className="space-y-1 sm:space-y-2">
                <div className="inline-block bg-gradient-to-r from-purple-600 to-yellow-400 px-3 sm:px-4 py-1 -skew-x-12 mb-1 sm:mb-2">
                  <span className="text-white font-black text-xs sm:text-sm uppercase tracking-wider skew-x-12 inline-block">
                    Book Now
                  </span>
                </div>
                {isServiceMenu ? (
                  <>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-['Bebas_Neue'] text-white leading-none">
                      Choose Your Ride
                    </h2>
                    <p className="text-yellow-400 text-lg sm:text-xl font-bold italic">
                      Select from our fleet
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-['Bebas_Neue'] text-white leading-none">
                      {bus.name}
                    </h2>
                    <p className="text-yellow-400 text-lg sm:text-xl font-bold italic">
                      {bus.tagline}
                    </p>
                  </>
                )}
              </div>

              {/* Bus Image - Hidden on mobile to save space */}
              {!isServiceMenu && bus?.imageUrl && (
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 hidden sm:block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-yellow-400 opacity-20 mix-blend-overlay"></div>
                  <img
                    src={bus.imageUrl}
                    alt={bus.name}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover border-y-2 sm:border-y-2 border-purple-500/50"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
                </div>
              )}

              {/* Trust Signals - Hidden on mobile to save space */}
              <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/50 p-2 sm:p-3 text-center hover:bg-purple-600 hover:text-white transition-all duration-300 group">
                  <div className="text-xl sm:text-2xl mb-1">⚡</div>
                  <div className="text-xs font-bold uppercase text-white">
                    Instant Confirm
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-yellow-400/50 p-2 sm:p-3 text-center hover:bg-yellow-400 hover:text-black transition-all duration-300 group">
                  <div className="text-xl sm:text-2xl mb-1">🔒</div>
                  <div className="text-xs font-bold uppercase text-white group-hover:text-black">
                    Secure Payment
                  </div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm border border-purple-500/50 p-2 sm:p-3 text-center hover:bg-purple-600 hover:text-white transition-all duration-300 group">
                  <div className="text-xl sm:text-2xl mb-1">🎉</div>
                  <div className="text-xs font-bold uppercase text-white">
                    Party Ready
                  </div>
                </div>
              </div>

              {/* Features Highlight - Hidden on mobile to save space */}
              {!isServiceMenu && bus?.features && (
                <div className="space-y-2 sm:space-y-3 hidden sm:block">
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-yellow-400 font-['Bebas_Neue'] tracking-wide">
                    What's Included
                  </h3>
                  <div className="space-y-2 max-h-32 sm:max-h-40 lg:max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-zinc-900">
                    {bus.features.slice(0, 8).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 sm:gap-3 text-white group hover:text-yellow-400 transition-colors"
                      >
                        <span className="text-purple-400 text-lg sm:text-xl flex-shrink-0 group-hover:text-yellow-400">✓</span>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing Card - Luxury Glassmorphism */}
              {!isServiceMenu && bus && (
                <div className="bg-gradient-to-br from-purple-600 to-yellow-400 p-3 sm:p-5 -skew-x-3 shadow-2xl border-2 border-white/20">
                  <div className="skew-x-3 space-y-1 sm:space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">
                        ${bus.hourlyRate}
                      </span>
                      <span className="text-lg sm:text-xl text-white/90 font-bold">/hour</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white text-xs sm:text-sm font-bold">
                      <div className="flex items-center gap-1">
                        <span className="text-base sm:text-lg">⏱</span>
                        <span>{bus.minHours} hr minimum</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-base sm:text-lg">👥</span>
                        <span>Up to {bus.capacity} guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Accent - Hidden on mobile */}
            <div className="relative z-10 mt-3 sm:mt-6 hidden sm:block">
              <div className="flex items-center gap-2 text-zinc-500 text-xs">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
                <span className="uppercase tracking-wider font-bold">Select Your Date →</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Calendar - Mobile Optimized */}
          <div className="lg:w-3/5 flex flex-col bg-white overflow-visible sm:overflow-hidden flex-1">

            {/* Calendar Header - Mobile Optimized */}
            <div className="bg-gradient-to-r from-purple-900 to-black border-b-2 border-purple-500/50 p-3 sm:p-4 lg:p-6 flex-shrink-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase text-white font-['Bebas_Neue'] tracking-wide">
                {isServiceMenu ? 'Select Your Service' : 'Choose Your Party Date'}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {isServiceMenu ? 'Browse our fleet and select your preferred bus' : 'Select your date and time to secure your booking'}
              </p>
            </div>

            {/* Calendar Container - Mobile Optimized */}
            <div className="flex-1 bg-white p-0 sm:p-3 md:p-4 lg:p-6 overflow-y-visible sm:overflow-y-auto min-h-0 w-full">
              {(isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode) ? (
                <section id="pow-booking-section" className="pow-booking w-full h-full min-h-[600px] sm:min-h-[500px]">
                  <div 
                    ref={iframeContainerRef}
                    className="pow-booking-frame-wrapper w-full overflow-visible"
                  >
                    <div
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: isServiceMenu ? serviceMenuEmbedCode! : bus!.calendarEmbedCode! }}
                    />
                  </div>
                </section>
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[750px] text-center p-8">
                  {/* Fallback Content */}
                  <div className="relative mb-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#FF6B00] to-[#39FF14] rounded-full flex items-center justify-center animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-16 h-16 text-black"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-3xl font-black uppercase text-black font-['Bebas_Neue'] mb-3 tracking-wide">
                    Calendar Coming Soon
                  </h4>
                  <p className="text-zinc-600 text-lg mb-8 max-w-md">
                    Ready to party? Contact us directly to book {bus ? <span className="text-[#FF6B00] font-bold">{bus.name}</span> : 'your ride'}
                  </p>

                  {/* Call to Action */}
                  <div className="bg-gradient-to-br from-[#FF6B00] to-[#e56000] p-8 rounded-2xl border-4 border-[#39FF14] -skew-x-3 shadow-2xl">
                    <div className="skew-x-3">
                      <p className="text-black font-black text-lg uppercase mb-3 tracking-wide">
                        📞 Call To Book Now
                      </p>
                      <a
                        href="tel:+19853339762"
                        className="text-5xl font-black text-white hover:text-[#39FF14] transition-colors font-['Bebas_Neue'] tracking-tight block"
                      >
                        985-333-9762
                      </a>
                      <p className="text-black/80 text-sm mt-3 font-bold">
                        Available 24/7 for immediate bookings
                      </p>
                    </div>
                  </div>

                  {/* Additional Features */}
                  <div className="grid grid-cols-2 gap-4 mt-8 max-w-lg">
                    <div className="bg-black text-white p-4 rounded-lg border-2 border-[#FF6B00]">
                      <div className="text-2xl mb-2">💬</div>
                      <div className="text-xs font-bold uppercase">Text Us</div>
                      <div className="text-[#FF6B00] text-sm font-bold mt-1">Same Number</div>
                    </div>
                    <div className="bg-black text-white p-4 rounded-lg border-2 border-[#39FF14]">
                      <div className="text-2xl mb-2">📧</div>
                      <div className="text-xs font-bold uppercase">Email Quote</div>
                      <div className="text-[#39FF14] text-sm font-bold mt-1">Quick Response</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Quick Info - Luxury Style */}
        <div className="bg-gradient-to-r from-purple-900 to-black border-t-2 border-purple-500/50 px-4 lg:px-8 py-4 flex flex-wrap gap-4 items-center justify-between text-white">
          {!isServiceMenu && bus && (
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">💰</span>
                <span className="font-bold">${bus.hourlyRate}/hr</span>
              </div>
              <div className="h-4 w-px bg-purple-500/30"></div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400 text-lg">⏱</span>
                <span className="font-bold">{bus.minHours} hour minimum</span>
              </div>
              <div className="h-4 w-px bg-purple-500/30"></div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">👥</span>
                <span className="font-bold">Up to {bus.capacity} guests</span>
              </div>
            </div>
          )}
          {isServiceMenu && (
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400 text-lg">🚌</span>
                <span className="font-bold">Multiple Buses Available</span>
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="text-purple-400 hover:text-white font-black uppercase text-sm transition-colors tracking-wider px-4 py-2 border-2 border-purple-500/50 hover:bg-purple-600 hover:border-yellow-400 rounded min-h-[44px] flex items-center justify-center"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
