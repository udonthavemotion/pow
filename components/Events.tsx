/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
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
    <section ref={sectionRef} id="events" className="bg-gray-100 py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 border-b-2 border-gray-300 pb-6 sm:pb-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
            <div className="max-w-2xl">
                <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#FF6B00] mb-3 sm:mb-4">What We Do</span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 font-['Bebas_Neue'] uppercase">
                    We Roll For <br/> Any Occasion
                </h2>
            </div>
            <div className="hidden md:block pb-2">
                <span className="text-gray-500 font-bold tracking-widest uppercase text-sm">Serving South Louisiana</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {EVENTS.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`group relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden rounded-xl sm:rounded-2xl cursor-default transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                    {/* Background Image */}
                    <img
                        src={event.image}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-white">
                        <div className="transform translate-y-2 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[#39FF14] font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 block">{event.subtitle}</span>
                            <h3 className="text-3xl sm:text-4xl font-black uppercase mb-3 sm:mb-4 font-['Bebas_Neue'] leading-none">{event.title}</h3>
                            <p className="text-gray-200 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
            <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 uppercase">Got a crazy idea? We can handle it.</p>
            <a href="#fleet" className="inline-block border-b-2 sm:border-b-4 border-[#FF6B00] text-2xl sm:text-3xl font-black text-gray-900 uppercase hover:text-[#FF6B00] transition-colors py-2 min-h-[44px] flex items-center justify-center">
                Book Your Custom Ride
            </a>
        </div>
      </div>
    </section>
  );
};

export default Events;