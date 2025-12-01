/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Pick Your Bus',
      description: 'Browse our fleet and choose the perfect ride for your crew. Each bus has its own vibe and capacity.',
      icon: '🚌'
    },
    {
      number: '02',
      title: 'Book Your Time',
      description: 'Select your date and time using our online calendar. We\'ll confirm your booking instantly.',
      icon: '📅'
    },
    {
      number: '03',
      title: 'Show Up & Ride',
      description: 'Meet us at your pickup spot. We handle the driving, you handle the party. It\'s that simple.',
      icon: '🎉'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm sm:text-lg mb-3 sm:mb-4 block">Simple Process</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-3 sm:mb-4">
            How It Works
          </h2>
          <div className="w-20 sm:w-24 h-2 bg-[#39FF14] mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-5 sm:-top-6 -left-5 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FF6B00] to-[#39FF14] rounded-full flex items-center justify-center text-white font-black text-xl sm:text-2xl font-['Bebas_Neue'] shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 mt-3 sm:mt-4">{step.icon}</div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase mb-3 sm:mb-4 font-['Bebas_Neue']">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {step.description}
              </p>

              {/* Decorative Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#39FF14] transform -translate-y-1/2"></div>
              )}
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


