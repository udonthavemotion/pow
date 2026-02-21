/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (headerRef.current) headerObserver.observe(headerRef.current);

    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  // Placeholder testimonials - replace with real ones later
  const testimonials = [
    {
      name: 'Sarah M.',
      event: 'Bachelorette Party',
      text: 'Best night ever! The Orange Juice bus was everything we needed. Great sound system and the driver was awesome.',
      rating: 5
    },
    {
      name: 'Mike T.',
      event: 'Saints Game Day',
      text: 'Rolled to the Superdome in style. Green Light was perfect for our crew. Already booking again for next season!',
      rating: 5
    },
    {
      name: 'Jessica L.',
      event: 'Birthday Celebration',
      text: 'Made my 30th unforgettable. Professional service, clean bus, and we had the time of our lives. Highly recommend!',
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 px-6 md:px-12 bg-white text-gray-900">
      <div className="max-w-[1400px] mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <span className={`text-[#FF6B00] font-bold tracking-widest uppercase text-lg mb-4 block
            transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What People Say
          </span>
          <h2 className={`text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-4
            transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '0.15s' }}>
            Word on the Street
          </h2>
          <div className={`w-24 h-2 bg-[#b9ff66] mx-auto mt-4 transition-all duration-700
            ${headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transitionDelay: '0.3s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-orange-50 rounded-xl p-8 border border-orange-100 hover:border-[#FF6B00]
                transition-all duration-700 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF6B00]/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Stars - Sequential reveal */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-[#FF6B00] text-xl transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 0.15 + 0.3 + i * 0.05}s` }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-orange-200 pt-4">
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-[#FF6B00] text-sm uppercase tracking-wide">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future reviews - Animated */}
        <div className={`text-center mt-12 text-gray-600 text-sm transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${testimonials.length * 0.15 + 0.3}s` }}>
          <p>More reviews coming soon. Book your ride and share your experience!</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


