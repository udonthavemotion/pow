/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import { BUSES } from '../constants';
import { Bus } from '../types';

interface BusFleetProps {
  onBusClick: (bus: Bus) => void;
}

const BusFleet: React.FC<BusFleetProps> = ({ onBusClick }) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(BUSES.length).fill(false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger card animations
            BUSES.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newCards = [...prev];
                  newCards[index] = true;
                  return newCards;
                });
              }, index * 200); // 200ms delay between cards for elegant reveal
            });
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fleet"
      className="py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-b from-[#0F0A1F] via-[#1A1425] to-[#0F0A1F] relative overflow-hidden"
    >
      {/* Luxury Purple & Gold Background Accents - Enhanced */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600 rounded-full mix-blend-screen filter blur-[140px] opacity-[0.12] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-yellow-400 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.12] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08]"></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header Area - Enhanced Typography & Visual Hierarchy */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6">

          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-yellow-400/20 border border-purple-400/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
            <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
              Luxury Transportation
            </span>
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Main Title - Enhanced with Better Gradient - Mobile Optimized */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-yellow-400 font-['Bebas_Neue'] tracking-tight leading-none drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] px-2">
            THE FLEET
          </h2>

          {/* Decorative Underline */}
          <div className="flex items-center gap-3">
            <div className="w-12 sm:w-16 h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-purple-400 to-yellow-400"></div>
            <div className="w-20 sm:w-28 h-[3px] bg-gradient-to-r from-purple-500 via-yellow-400 to-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 rotate-45 bg-gradient-to-br from-yellow-400 to-purple-400"></div>
            <div className="w-12 sm:w-16 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle - Professional & Engaging */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light tracking-wide">
            Choose your luxury ride and experience party transportation like never before
          </p>
        </div>

        {/* Premium Glassmorphism Bus Cards - Optimized for 2-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 max-w-[1200px] mx-auto">
          {BUSES.map((bus, index) => (
            <div
                key={bus.id}
                className={`group cursor-pointer relative transition-all duration-700 ease-out ${
                  visibleCards[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                onClick={() => onBusClick(bus)}
            >
                {/* Soft Luxury Glow Effects - Enhanced */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/25 to-purple-800/25 rounded-3xl blur-3xl opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"></div>
                <div className="absolute -inset-4 bg-gradient-to-tl from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"></div>

                {/* Main Glassmorphism Card Container */}
                <div className="relative transform group-hover:scale-[1.02] group-hover:-translate-y-4 transition-all duration-700 ease-out">

                  {/* Glassmorphism Border with Purple-Gold Gradient - Enhanced */}
                  <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-purple-500/70 via-purple-400/60 to-yellow-400/70 shadow-2xl group-hover:shadow-purple-500/30 group-hover:shadow-[0_20px_60px_-15px] transition-all duration-700">

                    {/* Inner Frosted Glass Card */}
                    <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-2xl flex flex-col border border-white/10 group-hover:border-white/20 transition-all duration-700">

                      {/* Image Section - Enhanced - Mobile Optimized */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden">
                          <img
                            src={bus.imageUrl}
                            alt={`${bus.name} - Luxury party bus`}
                            className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110"
                            loading="lazy"
                            style={{ maxWidth: '100%', height: 'auto' }}
                          />

                          {/* Premium Glassmorphism Overlay - Enhanced */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-purple-900/30 to-transparent"></div>

                          {/* Capacity Badge - Premium Glassmorphism */}
                          <div className="absolute top-5 right-5 bg-gradient-to-br from-purple-600/90 to-purple-700/90 backdrop-blur-xl text-white font-bold px-5 py-3 rounded-xl text-sm uppercase tracking-[0.15em] border border-yellow-400/50 shadow-lg shadow-purple-500/50 group-hover:scale-105 transition-transform duration-500">
                              <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-yellow-400">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>
                                <span>{bus.capacity} Guests</span>
                              </div>
                          </div>

                          {/* Pricing Badge - New Premium Addition */}
                          <div className="absolute top-5 left-5 bg-gradient-to-br from-yellow-400/95 to-yellow-500/95 backdrop-blur-xl text-purple-950 font-black px-5 py-3 rounded-xl shadow-lg shadow-yellow-400/50 group-hover:scale-105 transition-transform duration-500">
                            <div className="text-xs uppercase tracking-wider opacity-90">From</div>
                            <div className="text-2xl font-['Bebas_Neue'] leading-none tracking-tight">${bus.hourlyRate}/hr</div>
                          </div>

                          {/* Decorative Corner Accents - Enhanced */}
                          <div className="absolute bottom-5 left-5 w-16 h-16 border-l-[3px] border-b-[3px] border-purple-400/60 opacity-70 rounded-bl-lg group-hover:border-purple-400/90 transition-all duration-500"></div>
                          <div className="absolute bottom-5 right-5 w-16 h-16 border-r-[3px] border-b-[3px] border-yellow-400/60 opacity-70 rounded-br-lg group-hover:border-yellow-400/90 transition-all duration-500"></div>
                      </div>

                      {/* Details Section - Enhanced Layout & Typography */}
                      <div className="p-7 sm:p-9 flex-1 flex flex-col relative bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-black/40 backdrop-blur-sm">

                          {/* Name & Tagline Section - Improved Hierarchy */}
                          <div className="mb-5">
                              <h3 className="text-4xl sm:text-5xl font-black text-white uppercase font-['Bebas_Neue'] leading-none drop-shadow-[0_2px_20px_rgba(168,85,247,0.5)] mb-2 tracking-tight">
                                {bus.name}
                              </h3>
                              <p className="text-yellow-400 font-bold tracking-wide uppercase text-sm sm:text-base flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-gradient-to-r from-yellow-400 to-transparent"></span>
                                {bus.tagline}
                              </p>
                          </div>

                          {/* Description - Enhanced Readability */}
                          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed line-clamp-3 font-light">
                            {bus.description}
                          </p>

                          {/* Features Pills - Premium Design */}
                          <div className="flex flex-wrap gap-2 mb-7">
                            {bus.features.slice(0, 4).map((feature, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600/30 backdrop-blur-sm border border-purple-400/30 rounded-lg text-xs font-semibold text-purple-200 uppercase tracking-wider hover:bg-purple-600/40 hover:border-purple-400/50 transition-all duration-300"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-yellow-400">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                                </svg>
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Book Button - Maximum Impact Design - Mobile Optimized */}
                          <div className="mt-auto">
                              <button
                                  onClick={() => onBusClick(bus)}
                                  aria-label={`Book ${bus.name} luxury party bus`}
                                  className="relative w-full py-4 sm:py-5 md:py-6 min-h-[56px] sm:min-h-[64px] bg-gradient-to-r from-purple-600 via-purple-500 to-yellow-400 text-white font-black uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-purple-500/60 transition-all duration-500 rounded-xl text-sm sm:text-base overflow-hidden group/btn"
                              >
                                  {/* Animated Shine Effect */}
                                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></span>

                                  {/* Hover Overlay */}
                                  <span className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"></span>

                                  {/* Button Content */}
                                  <span className="relative flex items-center justify-center gap-3">
                                    <span className="text-base sm:text-lg">Book This Bus</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 group-hover/btn:translate-x-1 transition-transform duration-300">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                  </span>
                              </button>

                              {/* Minimum Hours Notice - Professional Detail */}
                              <div className="mt-3 text-center">
                                <p className="text-xs text-gray-400 tracking-wide">
                                  <span className="text-purple-300 font-semibold">{bus.minHours} hour minimum</span>
                                  {' '} • View full details
                                </p>
                              </div>
                          </div>
                      </div>

                      {/* Bottom Decorative Gradient Line - Enhanced */}
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-purple-400 to-yellow-400 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Subtle Corner Accent Brackets - Refined */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-l-[3px] border-t-[3px] border-purple-400/60 opacity-60 rounded-tl-xl group-hover:border-purple-400/90 group-hover:w-14 group-hover:h-14 transition-all duration-500"></div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-r-[3px] border-t-[3px] border-yellow-400/60 opacity-60 rounded-tr-xl group-hover:border-yellow-400/90 group-hover:w-14 group-hover:h-14 transition-all duration-500"></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-[3px] border-b-[3px] border-yellow-400/60 opacity-60 rounded-bl-xl group-hover:border-yellow-400/90 group-hover:w-14 group-hover:h-14 transition-all duration-500"></div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-[3px] border-b-[3px] border-purple-400/60 opacity-60 rounded-br-xl group-hover:border-purple-400/90 group-hover:w-14 group-hover:h-14 transition-all duration-500"></div>
                </div>
            </div>
          ))}
        </div>

        {/* Professional Call-to-Action Footer */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-black/20 backdrop-blur-sm border border-purple-400/20">
            <p className="text-gray-300 text-sm sm:text-base max-w-md">
              Not sure which bus is right for you? Our team can help you choose the perfect ride for your event.
            </p>
            <a
              href="tel:+15555555555"
              className="inline-flex items-center gap-2 text-yellow-400 font-bold hover:text-yellow-300 transition-colors duration-300 text-sm sm:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call Us for Personalized Recommendations
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusFleet;
