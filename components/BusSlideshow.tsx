/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { BUSES } from '../constants';

interface BusSlideshowProps {
  autoRotateInterval?: number; // milliseconds between slides
  onSlideChange?: (busId: string) => void;
  className?: string;
  showBusInfo?: boolean; // Whether to show bus name, tagline, capacity overlay
  showArrows?: boolean; // Whether to show navigation arrows
}

const BusSlideshow: React.FC<BusSlideshowProps> = ({
  autoRotateInterval = 5000,
  onSlideChange,
  className = '',
  showBusInfo = true,
  showArrows = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<{ [key: number]: boolean }>({});
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Memoize derived bus data so it is not re-allocated on every render.
  // BUSES is a module-level constant so the dependency is stable.
  const busesWithImages = useMemo(
    () =>
      BUSES.map(bus => ({
        ...bus,
        displayImage: bus.images && bus.images.length > 0 ? bus.images[0] : bus.imageUrl,
      })),
    []
  );

  const totalSlides = busesWithImages.length;

  // Only preload the *first* slide image eagerly.  Adjacent slides are
  // preloaded one step ahead as the user navigates, avoiding a burst of
  // network requests for all images on mount.
  useEffect(() => {
    // Preload the first image immediately
    const img = new window.Image();
    img.src = busesWithImages[0].displayImage;
    img.onload = () => {
      setImagesLoaded(prev => ({ ...prev, [0]: true }));
    };
  }, [busesWithImages]);

  // Preload the next slide image when currentIndex changes
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % totalSlides;
    if (!imagesLoaded[nextIndex]) {
      const img = new window.Image();
      img.src = busesWithImages[nextIndex].displayImage;
      img.onload = () => {
        setImagesLoaded(prev => ({ ...prev, [nextIndex]: true }));
      };
    }
  }, [currentIndex, totalSlides, busesWithImages, imagesLoaded]);

  // Auto-rotate logic
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, autoRotateInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isHovered, autoRotateInterval]);

  // Notify parent of slide change
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(busesWithImages[currentIndex].id);
    }
  }, [currentIndex, onSlideChange]);

  const goToNext = useCallback(() => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch/swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        goToNext(); // Swipe left -> next
      } else {
        goToPrev(); // Swipe right -> prev
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const currentBus = busesWithImages[currentIndex];

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gray-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Bus slideshow"
      aria-live="polite"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {busesWithImages.map((bus, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + totalSlides) % totalSlides;
          const isNext = index === (currentIndex + 1) % totalSlides;

          return (
            <div
              key={bus.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? 'opacity-100 z-10 scale-100'
                  : 'opacity-0 z-0 scale-105'
              }`}
              aria-hidden={!isActive}
            >
              {/* Bus Image with Ken Burns effect */}
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={bus.displayImage}
                  alt={`${bus.name} - ${bus.tagline}`}
                  className={`w-full h-full object-cover ${
                    isActive && !prefersReducedMotion
                      ? 'animate-ken-burns'
                      : ''
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  style={{
                    transform: isActive && !prefersReducedMotion ? 'scale(1.1)' : 'scale(1)',
                  }}
                />

                {/* Loading state */}
                {!imagesLoaded[index] && (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-gray-600 border-t-[#FF6B00] rounded-full animate-spin" />
                  </div>
                )}
              </div>

              {/* Gradient overlays for text readability - only show when bus info is displayed */}
              {showBusInfo && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
                </>
              )}

              {/* Bus Info Overlay - only show when enabled */}
              {showBusInfo && isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-20">
                  <h2
                    className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-tight mb-4 drop-shadow-2xl font-['Bebas_Neue'] tracking-tight transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      color: bus.nameColor,
                      textShadow: `0 0 40px ${bus.nameColor}80, 0 0 80px ${bus.nameColor}40`,
                      transitionDelay: '200ms'
                    }}
                  >
                    {bus.name}
                  </h2>
                  <p
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold uppercase tracking-wide drop-shadow-lg transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '400ms' }}
                  >
                    {bus.tagline}
                  </p>

                  {/* Capacity and Rate Info */}
                  <div
                    className={`mt-6 flex flex-wrap justify-center gap-4 text-sm sm:text-base md:text-lg text-white/90 font-semibold transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <span className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      Up to {bus.capacity} guests
                    </span>
                    <span
                      className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"
                      style={{
                        color: bus.nameColor,
                        textShadow: '0 1px 3px rgba(0,0,0,0.9)'
                      }}
                    >
                      <svg className="w-5 h-5 flex-shrink-0 opacity-95" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      ${bus.hourlyRate}/hr
                      {typeof bus.minHours === 'number' ? ` (${bus.minHours}hr min)` : ' (no minimum)'}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows - Only show if showArrows is true */}
      {showArrows && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 group"
            aria-label="Previous bus"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#FF6B00] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50 group"
            aria-label="Next bus"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#FF6B00] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators/Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {busesWithImages.map((bus, index) => (
          <button
            key={bus.id}
            onClick={() => goToSlide(index)}
            className={`group relative transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full ${
              index === currentIndex
                ? 'w-10 sm:w-12'
                : 'w-3 sm:w-4'
            }`}
            aria-label={`Go to ${bus.name}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          >
            <div
              className={`h-3 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg shadow-white/50'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              style={{
                backgroundColor: index === currentIndex ? bus.nameColor : undefined,
                boxShadow: index === currentIndex ? `0 0 20px ${bus.nameColor}80` : undefined
              }}
            />

            {/* Tooltip on hover */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-black/90 text-white text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {bus.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
            </div>
          </button>
        ))}
      </div>

      {/* Pause indicator when hovering */}
      {isHovered && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2 animate-fade-in">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Paused
        </div>
      )}
    </div>
  );
};

export default BusSlideshow;
