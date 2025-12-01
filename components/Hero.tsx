/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

interface HeroProps {
  onBookNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
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
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="/images/hero/hero-background.jpg" 
            alt="Party Bus Atmosphere" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <span className="block text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-[#39FF14] mb-6 drop-shadow-md">
            Houma • Thibodaux • New Orleans
          </span>
          
          <h1 className="text-7xl md:text-9xl font-black text-white leading-none mb-6 drop-shadow-xl font-['Bebas_Neue']">
            LET THE GOOD <br/>
            <span className="text-[#FF6B00]">TIMES ROLL</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-lg md:text-2xl text-gray-200 font-medium mb-12 drop-shadow-md">
            The wildest party buses in South Louisiana. <br/>
            Loud music, good vibes, and unforgettable nights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
                href="#fleet" 
                onClick={(e) => handleNavClick(e, 'fleet')}
                className="group relative px-10 py-5 bg-[#FF6B00] text-white -skew-x-12 hover:bg-[#ff8533] transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.5)]"
            >
                <span className="block skew-x-12 text-xl font-bold tracking-widest uppercase">Pick Your Bus</span>
            </a>
            <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="group relative px-10 py-5 bg-transparent border-2 border-white text-white -skew-x-12 hover:bg-white hover:text-black transition-all duration-300"
            >
                <span className="block skew-x-12 text-xl font-bold tracking-widest uppercase">Learn More</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;