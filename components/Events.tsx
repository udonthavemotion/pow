/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import { EVENTS } from '../constants';

interface EventsProps {
  onBookNow?: () => void;
}

const Events: React.FC<EventsProps> = ({ onBookNow }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Resume auto-play after user interaction
  useEffect(() => {
    if (!isAutoPlaying) {
      const resumeTimer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000); // Resume after 8 seconds of no interaction

      return () => clearTimeout(resumeTimer);
    }
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % EVENTS.length);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  return (
    <section id="events" className="bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 mt-16 sm:mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20">
            <div className="max-w-2xl">
                <span className="block text-sm sm:text-base md:text-lg font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#b9ff66] mb-4 sm:mb-6 drop-shadow-[0_0_10px_rgba(185,255,102,0.4)] animate-fadeInDown" style={{ opacity: 0 }}>
                    What We Do • South Louisiana
                </span>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#b9ff66] font-['Bebas_Neue'] uppercase leading-tight drop-shadow-[0_0_25px_rgba(185,255,102,0.5)] will-animate hardware-accelerated" aria-label="We Roll For Any Occasion">
                    {"WE ROLL FOR".split('').map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-wave-cascade"
                        style={{
                          animationDelay: `${index * 35}ms`,
                          opacity: 0
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                    <br className="sm:hidden" />
                    <br className="hidden sm:block" />
                    {"ANY OCCASION".split('').map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block animate-wave-cascade"
                        style={{
                          animationDelay: `${(index + 12) * 35}ms`,
                          opacity: 0
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </span>
                    ))}
                </h2>
            </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Main Carousel */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {EVENTS.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 px-2">
                <div className="group relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl cursor-default transition-shadow duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  {/* Background Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                  />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 text-white">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 max-w-2xl">
                      <span className="text-[#b9ff66] font-bold uppercase tracking-wider text-sm sm:text-base mb-3 block">
                        {event.subtitle}
                      </span>
                      <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4 sm:mb-6 font-['Bebas_Neue'] leading-none">
                        {event.title}
                      </h3>
                      <p className="text-gray-200 text-base sm:text-lg md:text-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows removed - carousel auto-rotates and supports swipe */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {EVENTS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 h-3 bg-[#FF6B00]'
                  : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
              } rounded-full`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>

        {/* Event Thumbnails - Desktop Only */}
        <div className="hidden md:grid grid-cols-3 gap-4 mt-8">
          {EVENTS.map((event, index) => (
            <button
              key={event.id}
              onClick={() => handleDotClick(index)}
              className={`relative h-32 overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-[#FF6B00] scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                <span className="text-white font-bold text-sm">{event.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase">Ready to party on one of our wheels?</p>
            <button
                onClick={onBookNow}
                className="inline-block bg-[#FF6B00] text-white px-8 py-4 text-2xl sm:text-3xl font-black uppercase hover:bg-[#e56000] transition-colors -skew-x-12 shadow-lg hover:shadow-xl"
            >
                <span className="skew-x-12 inline-block">Book Now</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default Events;