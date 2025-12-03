/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

interface StickyCTAProps {
  onBookNow: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onBookNow }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past 80vh (hero section)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#ff8533] shadow-2xl border-t-2 border-white/20">
        <div className="max-w-screen mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-white font-bold text-sm uppercase tracking-wide">
              Ready to Party?
            </p>
            <p className="text-white/90 text-xs">
              Book your ride now
            </p>
          </div>
          <button
            onClick={onBookNow}
            className="bg-white text-[#FF6B00] px-5 sm:px-6 py-3 font-black uppercase tracking-widest text-sm rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200 shadow-lg min-h-[48px] flex items-center justify-center flex-shrink-0"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;

