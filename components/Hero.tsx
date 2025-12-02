/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import StatsCounter from './StatsCounter';

interface HeroProps {
  onBookNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
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

  const stats = [
    { value: 1000, suffix: '+', label: 'Parties Hosted', icon: '🎉' },
    { value: 4, suffix: '+', label: 'Custom Buses', icon: '🚌' },
    { value: 100, suffix: '%', label: 'Local Owned', icon: '📍' },
  ];

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] overflow-hidden bg-[#0F0A1F]">

      {/* Background Video - Party Bus Hero Video with Parallax Effect */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 hero-video-parallax"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/images/hero/hero-background.jpg"
            alt="Party Bus Atmosphere"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/60 via-black/40 to-black/90"></div>
      </div>

      {/* Luxury Background Accents - Reduced size on mobile */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-yellow-400 rounded-full mix-blend-screen filter blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Content - Optimized for full visibility on initial load */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
        <div className={`max-w-5xl mx-auto w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] text-yellow-400 mb-3 sm:mb-4 md:mb-6 drop-shadow-lg animate-fade-in-up">
            Houma • Thibodaux • New Orleans
          </span>

          {/* Enhanced Typography - Luxury Purple & Gold - Mobile Optimized */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black text-white leading-[0.9] mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl font-['Bebas_Neue'] tracking-tight animate-fade-in-up px-2" style={{ animationDelay: '0.1s' }}>
            LET THE GOOD <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-yellow-400">TIMES ROLL</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-3xl text-gray-100 font-semibold mb-4 sm:mb-6 md:mb-8 drop-shadow-lg px-2 sm:px-4 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The most luxurious party buses in South Louisiana. <br className="hidden sm:block"/>
            <span className="text-yellow-400">Premium sound, VIP vibes, unforgettable nights.</span>
          </p>

          {/* Enhanced CTA Buttons - Luxury Gradient - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center px-2 sm:px-4 mb-4 sm:mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
                href="#fleet"
                onClick={(e) => handleNavClick(e, 'fleet')}
                className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 min-h-[56px] sm:min-h-[60px] bg-gradient-to-r from-purple-600 to-yellow-400 text-white -skew-x-12 hover:shadow-[0_0_40px_rgba(147,51,234,0.6)] transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="block skew-x-12 text-base sm:text-xl md:text-2xl font-black tracking-widest uppercase relative z-10">Pick Your Bus</span>
            </a>
            <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-6 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 min-h-[56px] sm:min-h-[60px] bg-black/40 backdrop-blur-xl border-3 border-purple-400 text-white -skew-x-12 hover:bg-purple-600 hover:border-yellow-400 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
                <span className="block skew-x-12 text-base sm:text-xl md:text-2xl font-black tracking-widest uppercase">Learn More</span>
            </a>
          </div>

          {/* Stats Counter - Animated */}
          <div className="animate-fade-in-up px-2" style={{ animationDelay: '0.4s' }}>
            <StatsCounter stats={stats} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-purple-400/70 hidden sm:block">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;