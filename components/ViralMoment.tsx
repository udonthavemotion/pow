/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';

const ViralMoment: React.FC = () => {
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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#0F0A1F] via-[#1A1425] to-[#0F0A1F] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6B00] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
        }`}>
          {/* Quote Mark - Mobile Optimized */}
          <div className="text-[#39FF14] text-6xl sm:text-8xl md:text-9xl font-black mb-4 font-['Bebas_Neue'] leading-none">
            "
          </div>

          {/* Bold Statement - Mobile Optimized */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 sm:mb-8 font-['Bebas_Neue'] leading-tight px-2">
            WE DON'T DO <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#39FF14] to-[#FF6B00]">
              QUIET RIDES
            </span>
          </h2>

          {/* Supporting Text - Mobile Optimized */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Down here in South Louisiana, we turn every trip into a party. 
            <br className="hidden sm:block"/>
            <span className="text-[#39FF14]">That's just how we roll.</span>
          </p>

          {/* Visual Divider */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#FF6B00]"></div>
            <div className="w-3 h-3 bg-[#39FF14] rounded-full animate-pulse"></div>
            <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#FF6B00]"></div>
          </div>

          {/* Social Share Prompt */}
          <div className="pt-8">
            <p className="text-white/90 text-sm sm:text-base mb-6 uppercase tracking-wider font-bold drop-shadow-lg">
              Share The Vibe
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61579938620708&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 min-h-[48px] min-w-[48px] bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Share on Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Party On Wheels',
                      text: 'We don\'t do quiet rides. That\'s just how we roll.',
                      url: window.location.href,
                    });
                  }
                }}
                className="group w-12 h-12 min-h-[48px] min-w-[48px] bg-white/10 rounded-full flex items-center justify-center hover:bg-[#39FF14] transition-all duration-300 hover:scale-110 border border-white/20"
                aria-label="Share"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViralMoment;

