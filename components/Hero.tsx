/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBookNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If clicking "Pick Your Bus", trigger service menu
    if (targetId === 'fleet' && onBookNow) {
      onBookNow();
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gray-900">

      {/* Background Video - Party Bus Hero Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-60' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Fallback image if video doesn't load */}
        {!videoLoaded && (
          <img
            src="/images/hero/hero-background.jpg"
            alt="Party Bus Atmosphere"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
        )}

        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/10 via-transparent to-[#b9ff66]/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Location badge with glow effect */}
          <span className="inline-block text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#b9ff66] mb-6 sm:mb-8 drop-shadow-[0_0_15px_rgba(57,255,20,0.5)] animate-pulse-glow">
            Houma • Thibodaux • New Orleans
          </span>

          {/* Main headline - increased size and spacing */}
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-black text-white leading-[0.9] mb-6 sm:mb-8 drop-shadow-2xl font-['Bebas_Neue'] tracking-tight">
            LET THE GOOD <br/>
            <span className="text-[#FF6B00] drop-shadow-[0_0_30px_rgba(255,107,0,0.6)]">TIMES ROLL</span>
          </h1>

          {/* Subtitle with better spacing */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 font-medium mb-10 sm:mb-14 drop-shadow-lg px-4 leading-relaxed">
            The wildest party buses in South Louisiana. <br className="hidden sm:block"/>
            <span className="text-[#b9ff66] font-bold">Loud music, good vibes, and unforgettable nights.</span>
          </p>

          {/* CTA Buttons with enhanced effects */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 justify-center px-4">
            <a
                href="#fleet"
                onClick={(e) => handleNavClick(e, 'fleet')}
                className="group relative px-10 sm:px-12 py-5 sm:py-6 min-h-[64px] bg-[#FF6B00] text-white -skew-x-12 hover:bg-[#ff8533] transition-all duration-500 shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:shadow-[0_0_50px_rgba(255,107,0,0.8)] flex items-center justify-center transform hover:scale-105 overflow-hidden"
            >
                {/* Button glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></span>

                <span className="block skew-x-12 text-xl sm:text-2xl font-bold tracking-[0.2em] uppercase relative z-10">
                  Pick Your Bus
                </span>
            </a>
            <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-10 sm:px-12 py-5 sm:py-6 min-h-[64px] bg-transparent border-3 border-white text-white -skew-x-12 hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center transform hover:scale-105 overflow-hidden"
            >
                {/* Border glow on hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.5)]"></span>

                <span className="block skew-x-12 text-xl sm:text-2xl font-bold tracking-[0.2em] uppercase relative z-10">
                  Learn More
                </span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-10 text-sm sm:text-base text-white/80 font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300">
              <span className="text-xl sm:text-2xl">⚡</span>
              <span>Instant Booking</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300">
              <span className="text-xl sm:text-2xl">🎉</span>
              <span>6 Party Buses</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#b9ff66] transition-colors duration-300">
              <span className="text-xl sm:text-2xl">🔒</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced animation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce-slow">
        <span className="text-white/60 text-sm uppercase tracking-widest font-bold">Scroll</span>
        <svg className="w-8 h-8 text-[#b9ff66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(57, 255, 20, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(57, 255, 20, 0.8));
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 10px);
          }
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
