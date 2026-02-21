/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Pick Your Bus',
      description: 'Browse our fleet and choose the perfect ride for your crew. Each bus has its own vibe and capacity.',
      icon: '🚌',
      time: '2 min'
    },
    {
      number: '02',
      title: 'Book Your Time',
      description: 'Select your date and time using our online calendar. We\'ll confirm your booking instantly.',
      icon: '📅',
      time: 'Instant'
    },
    {
      number: '03',
      title: 'Show Up & Ride',
      description: 'Meet us at your pickup spot. We handle the driving, you handle the party. It\'s that simple.',
      icon: '🎉',
      time: 'Party time!'
    },
    {
      number: '04',
      title: 'Custom Rides',
      description: 'Got a crazy idea? We can handle it. Special requests, unique routes, themed parties - just ask!',
      icon: '🎨',
      time: 'Let\'s talk',
      isCustom: true
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm sm:text-lg mb-3 sm:mb-4 block">Simple Process</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-3 sm:mb-4">
            How It Works
          </h2>
          <div className="w-20 sm:w-24 h-2 bg-[#b9ff66] mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Visual Timeline for Desktop */}
        <div className="hidden lg:block relative mb-16 mt-8">
          {/* Base Timeline */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 transform -translate-y-1/2"></div>

          {/* Animated Progress Line */}
          <div className={`absolute top-1/2 left-[12.5%] h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#b9ff66] transform -translate-y-1/2 transition-all ease-out ${
            isVisible ? 'w-[75%]' : 'w-0'
          }`} style={{ transitionDuration: '2500ms', transitionDelay: '0.5s' }}></div>

          {/* Timeline Dots - positioned for 4 steps */}
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                left: `${12.5 + (index * 25)}%`,
                transitionDelay: `${0.8 + index * 0.2}s`
              }}
            >
              {/* Outer ring */}
              <div className={`w-6 h-6 rounded-full border-2 ${
                index === 3 ? 'border-[#b9ff66]' : 'border-[#FF6B00]'
              } bg-white shadow-lg flex items-center justify-center`}>
                {/* Inner dot */}
                <div className={`w-2.5 h-2.5 rounded-full ${
                  index === 3 ? 'bg-[#b9ff66]' : 'bg-[#FF6B00]'
                } ${isVisible ? 'animate-pulse' : ''}`}></div>
              </div>

              {/* Step number below dot */}
              <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold ${
                index === 3 ? 'text-[#b9ff66]' : 'text-[#FF6B00]'
              }`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                step.isCustom ? 'border-[#b9ff66] border-2' : 'border-gray-100'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Number Badge with Animation */}
              <div className={`absolute -top-5 sm:-top-6 -left-5 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-black text-xl sm:text-2xl font-['Bebas_Neue'] shadow-lg group-hover:scale-110 transition-all duration-300 ${
                step.isCustom ? 'bg-[#b9ff66] text-gray-900' : 'bg-gradient-to-br from-[#FF6B00] to-[#FF8533]'
              } ${isVisible ? 'scale-100' : 'scale-0'}`}
              style={{ transitionDelay: `${index * 0.15 + 0.1}s` }}>
                {step.number}
              </div>


              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 mt-3 sm:mt-4">{step.icon}</div>

              {/* Content */}
              <h3 className={`text-2xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 font-['Bebas_Neue'] ${
                step.isCustom ? 'text-[#b9ff66]' : 'text-gray-900'
              }`}>
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4">
                {step.description}
              </p>

              {/* Time Badge */}
              <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                {step.time}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="#fleet"
            className="inline-block bg-[#FF6B00] text-white px-8 sm:px-10 py-4 sm:py-5 min-h-[56px] font-bold uppercase tracking-widest text-base sm:text-lg hover:bg-[#e56000] transition-colors -skew-x-12 shadow-lg hover:shadow-xl"
          >
            <span className="block skew-x-12">Get Started Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


