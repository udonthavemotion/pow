/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useEffect, useRef, useState } from 'react';
import { BUSES } from '../constants';
import { Bus } from '../types';

interface BusFleetProps {
  onBusClick: (bus: Bus) => void;
  onCardHover?: () => void;
}

const BusFleet: React.FC<BusFleetProps> = ({ onBusClick, onCardHover }) => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const busId = entry.target.getAttribute('data-bus-id');
          if (busId && entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, busId]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  const handleImageLoad = (busId: string) => {
    setLoadedImages((prev) => new Set([...prev, busId]));
  };

  return (
    <section id="fleet" className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00] opacity-[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b9ff66] opacity-[0.02] rounded-full blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto relative">

        {/* Header Area - Enhanced spacing with wave animation */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 sm:mb-28 space-y-4 sm:space-y-6">
          <span className={`text-[#FF6B00] font-bold tracking-[0.3em] uppercase text-sm sm:text-lg transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Choose Your Ride</span>
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black text-gray-900 font-['Bebas_Neue'] tracking-tight">
            {"THE FLEET".split('').map((letter, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 transform ${
                  headerVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75'
                }`}
                style={{
                  transitionDelay: `${0.1 + index * 0.05}s`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h2>
          <div className={`w-24 sm:w-32 h-2 bg-[#b9ff66] mt-3 sm:mt-6 transition-all duration-700 ${
            headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} style={{ transitionDelay: '0.6s', transformOrigin: 'center' }}></div>
        </div>

        {/* Large Grid - Enhanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 lg:gap-20">
          {BUSES.map((bus, index) => (
            <div
                key={bus.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(bus.id, el);
                }}
                data-bus-id={bus.id}
                className={`content-visibility-fleet-card group cursor-pointer flex flex-col bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-[#FF6B00]/30 transition-all duration-700 rounded-2xl overflow-hidden transform hover:-translate-y-2 ${
                  visibleCards.has(bus.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visibleCards.has(bus.id) ? `${index * 0.1}s` : '0s',
                }}
                onClick={() => onBusClick(bus)}
                onMouseEnter={onCardHover}
                onFocus={onCardHover}
            >
                {/* Image with loading state */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 transform-gpu"
                     style={{ backfaceVisibility: 'hidden', perspective: '1000px' }}>
                    {/* Skeleton loader */}
                    {!loadedImages.has(bus.id) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                    )}

                    <img
                      src={bus.imageUrl}
                      alt={bus.name}
                      loading="lazy"
                      onLoad={() => handleImageLoad(bus.id)}
                      className={`w-full h-full object-cover transform-gpu transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-105 will-change-transform ${
                        loadedImages.has(bus.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    {/* Capacity badge with pulse animation */}
                    <div className="absolute top-4 sm:top-5 right-4 sm:right-5 bg-[#b9ff66] text-black font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm uppercase tracking-wide shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[#b9ff66]/50 group-hover:shadow-xl">
                        <span className="inline-block group-hover:animate-pulse">{bus.capacity} Passengers</span>
                    </div>

                </div>

                {/* Details - Enhanced spacing */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3 gap-4">
                        <h3
                          className="text-4xl sm:text-5xl font-bold uppercase font-['Bebas_Neue'] transition-all duration-300 group-hover:scale-105"
                          style={{ color: bus.nameColor || '#1F2937' }}
                        >
                          {bus.name}
                        </h3>
                        <span className="text-xl sm:text-2xl font-bold text-[#FF6B00] whitespace-nowrap group-hover:scale-110 transition-transform duration-300">${bus.hourlyRate}/hr</span>
                    </div>

                    <p className="text-black font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-4 sm:mb-5">{bus.tagline}</p>
                    <p className="text-black mb-8 sm:mb-10 line-clamp-2 text-sm sm:text-base leading-relaxed">{bus.description}</p>

                    <div className="mt-auto">
                        <button
                            onClick={() => onBusClick(bus)}
                            className="relative w-full py-5 sm:py-6 min-h-[60px] bg-black text-white font-bold uppercase tracking-[0.2em] rounded-xl text-sm sm:text-base overflow-hidden group/btn transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B00]/50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B00]/50 focus-visible:ring-offset-2"
                        >
                            {/* Animated background on hover */}
                            <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#ff8533] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-400 origin-left"></span>

                            {/* Button text */}
                            <span className="relative z-10 inline-block group-hover/btn:scale-105 transition-transform duration-200">
                              Book This Bus
                            </span>

                            {/* Shine effect */}
                            <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                              <span className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusFleet;
