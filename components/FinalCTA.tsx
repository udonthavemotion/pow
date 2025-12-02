/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';

interface FinalCTAProps {
  onBookNow: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onBookNow }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.2 }
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#FF6B00] via-[#ff8533] to-[#FF6B00] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#39FF14] rounded-full filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse"></span>
            <span className="text-white font-bold text-sm uppercase tracking-wider drop-shadow-lg">
              Limited Availability for Mardi Gras
            </span>
          </div>

          {/* Headline - Mobile Optimized */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 font-['Bebas_Neue'] leading-tight px-2">
            READY TO <br/>
            <span className="text-[#39FF14] drop-shadow-lg">PARTY?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your ride now and let the good times roll. 
            <br className="hidden sm:block"/>
            <span className="font-bold">Your unforgettable night starts here.</span>
          </p>

          {/* CTA Button - Mobile Optimized */}
          <button
            onClick={onBookNow}
            className="group relative inline-flex items-center justify-center gap-3 sm:gap-4 bg-white text-[#FF6B00] px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 min-h-[56px] sm:min-h-[64px] font-black uppercase tracking-widest text-base sm:text-lg md:text-xl rounded-xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-3xl overflow-hidden w-full sm:w-auto"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#39FF14] to-[#FF6B00] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3">
              Book Your Ride Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#39FF14]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Secure Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

