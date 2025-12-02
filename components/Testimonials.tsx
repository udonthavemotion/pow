/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Testimonials: React.FC = () => {
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
    <section id="testimonials" className="py-24 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#39FF14] font-bold tracking-widest uppercase text-lg mb-4 block">What People Say</span>
          <h2 className="text-6xl md:text-8xl font-black text-white font-['Bebas_Neue'] uppercase mb-4">
            Rave Reviews
          </h2>
          <div className="w-24 h-2 bg-[#FF6B00] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#FF6B00] via-[#e56000] to-[#39FF14] rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border-2 border-gray-700 hover:border-[#FF6B00] transition-colors duration-300 shadow-2xl">
                {/* Decorative Quote Mark */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#FF6B00] to-[#39FF14] rounded-full flex items-center justify-center text-4xl text-black font-black shadow-lg">
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FF6B00] text-2xl drop-shadow-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-200 text-lg leading-relaxed mb-6 font-medium">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="border-t-2 border-gray-700 pt-5 mt-6 flex items-center gap-4">
                  {/* Initial Avatar */}
                  <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2dd10f] rounded-full flex items-center justify-center font-black text-xl text-black shadow-lg flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg leading-tight">{testimonial.name}</p>
                    <p className="text-[#39FF14] text-sm uppercase tracking-wider font-bold mt-1">{testimonial.event}</p>
                  </div>
                </div>

                {/* Decorative Corner Accent */}
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-[#39FF14] opacity-30"></div>
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


