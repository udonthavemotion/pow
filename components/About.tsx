/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import { OWNER_NAME } from '../constants';

const About: React.FC = () => {
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
    <section ref={sectionRef} id="about" className="bg-gradient-to-b from-[#1A1425] via-[#0F0A1F] to-[#1A1425] text-white py-12 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* Abstract Shapes - Luxury Purple & Gold */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className={`max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 relative z-10 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>

        {/* Video Section - Takes More Space, Especially on Mobile */}
        <div className="w-full lg:w-[55%] xl:w-1/2 order-1 lg:order-1">
             <div className="relative group">

                {/* Soft Luxury Glow Effects - Hidden on Mobile for More Space */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                <div className="hidden md:block absolute inset-0 bg-gradient-to-tl from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>

                {/* Main Video Container */}
                <div className="relative transform md:group-hover:scale-[1.02] md:group-hover:-translate-y-2 transition-all duration-500 ease-out">

                  {/* Glassmorphism Border Frame - Simplified on Mobile */}
                  <div className="relative rounded-xl md:rounded-2xl p-[2px] bg-gradient-to-br from-purple-500/60 via-purple-400/50 to-yellow-400/60 shadow-2xl">

                    {/* Inner Frame - Minimal on Mobile */}
                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black/20 md:bg-black/40 backdrop-blur-sm md:backdrop-blur-xl border border-white/5 md:border-white/10">

                      {/* Video Element - Larger on Mobile */}
                      <video
                          src="/videos/about-video.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="relative w-full h-full object-cover"
                          style={{ 
                            aspectRatio: '16/9', 
                            minHeight: '300px',
                            maxHeight: 'none'
                          }}
                      >
                          Your browser does not support the video tag.
                      </video>

                      {/* Subtle Purple Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 md:from-purple-900/40 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Elegant Corner Accents - Hidden on Mobile, Visible on Desktop */}
                  <div className="hidden md:block absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-purple-400/60 rounded-tl-lg shadow-lg shadow-purple-500/30"></div>
                  <div className="hidden md:block absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-yellow-400/60"></div>
                  <div className="hidden md:block absolute -top-3 -right-3 w-12 h-12 border-r-2 border-t-2 border-yellow-400/60 rounded-tr-lg shadow-lg shadow-yellow-400/30"></div>
                  <div className="hidden md:block absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-purple-400/60"></div>
                  <div className="hidden md:block absolute -bottom-3 -left-3 w-12 h-12 border-l-2 border-b-2 border-yellow-400/60 rounded-bl-lg shadow-lg shadow-yellow-400/30"></div>
                  <div className="hidden md:block absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-purple-400/60"></div>
                  <div className="hidden md:block absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-purple-400/60 rounded-br-lg shadow-lg shadow-purple-500/30"></div>
                  <div className="hidden md:block absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-yellow-400/60"></div>
                </div>

                {/* Subtle Floating Geometric Accents - Hidden on Mobile */}
                <div className="hidden lg:block absolute -right-4 top-1/4 w-16 h-16 border-2 border-purple-400/30 rotate-45 opacity-40"></div>
                <div className="hidden lg:block absolute -left-4 bottom-1/4 w-12 h-12 border-2 border-yellow-400/30 rotate-12 opacity-40"></div>
             </div>
        </div>

        {/* Text Content Section */}
        <div className={`w-full lg:w-[45%] xl:w-1/2 order-2 lg:order-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '200ms' }}>
          <span className="text-yellow-400 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 block text-sm sm:text-base">Locally Owned & Operated</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight font-['Bebas_Neue']">
            PARTY ON WHEELS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-400">IS A LIFESTYLE</span>
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-300 font-light leading-relaxed">
            <p>
                Owned by <strong>Deric Hebert</strong>, Party On Wheels was built with one simple mission: to bring loud, unapologetic fun to South Louisiana.
            </p>
            <p>
                We aren't just a transportation company. We are the pre-game, the main event, and the after-party all rolled into one. Whether you are rolling through Houma, Thibodaux, or heading down to the Big Easy, our fleet is designed to keep the energy high.
            </p>
            <p>
                Every bus is equipped with top-tier sound systems and lighting because we know that down here, we don't do quiet.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Stat Card 1 - Custom Buses - Glassmorphism */}
                <div className="relative group">
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-purple-500/50 hover:border-yellow-400/60 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-purple-500/30">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl flex-shrink-0 shadow-lg shadow-yellow-400/50">
                        🚌
                      </div>
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-['Bebas_Neue']">4+</span>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-purple-200 uppercase tracking-wider sm:tracking-widest font-bold text-center sm:text-left">Custom Buses</span>
                  </div>
                </div>

                {/* Stat Card 2 - Parties Hosted - Glassmorphism */}
                <div className="relative group">
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-yellow-400/50 hover:border-purple-500/60 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-yellow-400/30">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl flex-shrink-0 shadow-lg shadow-purple-500/50">
                        🎉
                      </div>
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-['Bebas_Neue']">1000+</span>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-purple-200 uppercase tracking-wider sm:tracking-widest font-bold text-center sm:text-left">Parties Hosted</span>
                  </div>
                </div>

                {/* Stat Card 3 - Local - Glassmorphism */}
                <div className="relative group">
                  <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-yellow-400/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 border border-purple-500/50 hover:border-yellow-400/60 transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-2xl md:hover:shadow-purple-500/30">
                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-yellow-400 rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl flex-shrink-0 shadow-lg shadow-purple-500/50">
                        📍
                      </div>
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white font-['Bebas_Neue']">100%</span>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-purple-200 uppercase tracking-wider sm:tracking-widest font-bold text-center sm:text-left">Local</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;