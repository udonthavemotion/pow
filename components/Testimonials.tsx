/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';

const Testimonials: React.FC = () => {
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
    <section ref={sectionRef} id="testimonials" className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#0F0A1F] via-[#1A1425] to-[#0F0A1F] text-white relative overflow-hidden">
      {/* Luxury Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-400 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-lg mb-4 block">What People Say</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-yellow-400 font-['Bebas_Neue'] uppercase mb-4">
            Who Dat Says
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative group hover:-translate-y-2 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Luxury Glassmorphism Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/40 to-yellow-400/30 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

              {/* Glassmorphism Card Content */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-purple-500/50 hover:border-yellow-400/60 transition-colors duration-300 shadow-2xl">
                {/* Decorative Quote Mark - Glassmorphism */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-yellow-400 rounded-full flex items-center justify-center text-4xl text-white font-black shadow-lg shadow-purple-500/50">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl drop-shadow-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-200 text-lg leading-relaxed mb-6 font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t border-purple-500/30 pt-5 mt-6 flex items-center gap-4">
                  {/* Initial Avatar - Glassmorphism */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-yellow-400 rounded-full flex items-center justify-center font-black text-xl text-white shadow-lg shadow-purple-500/50 flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">{testimonial.name}</p>
                    <p className="text-yellow-400 text-sm uppercase tracking-wider font-bold mt-1">{testimonial.event}</p>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-purple-400/50 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder for future reviews */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>More reviews coming soon. Book your ride and share your experience!</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


