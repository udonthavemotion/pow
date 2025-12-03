/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';
import { WordRotation } from './WordRotation';

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
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-[#39FF14] font-bold tracking-widest uppercase text-lg mb-4 block">What People Say</span>
          <h2 className="text-6xl md:text-8xl font-black text-white font-['Bebas_Neue'] uppercase mb-4">
            <WordRotation
              words={[
                'Game Day',
                'Wedding Day',
                'Mardi Gras',
                'Birthday',
                'Bachelorette',
                'Festival',
                'Parade',
                'Celebration'
              ]}
              staticText=""
              variant="gray-900-bg"
              speed="normal"
            />{' '}Reviews
          </h2>
          <div className="w-24 h-2 bg-[#FF6B00] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800/60 backdrop-blur-md rounded-xl p-8 border border-gray-700/50 shadow-lg"
              variants={staggerItem}
              whileHover={{
                y: -8,
                borderColor: '#FF6B00',
                boxShadow: '0 20px 25px -5px rgba(255, 107, 0, 0.3)'
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient quotation mark icon */}
              <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center opacity-80">
                <svg
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id={`quote-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF6B00" />
                      <stop offset="100%" stopColor="#39FF14" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                    fill={`url(#quote-gradient-${index})`}
                  />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#FF6B00] text-xl">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-200 text-lg leading-relaxed mb-6 italic pl-2">
                "{testimonial.text}"
              </p>

              {/* Author with gradient avatar */}
              <div className="border-t border-gray-700/50 pt-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#39FF14] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-[#39FF14] text-sm uppercase tracking-wide">{testimonial.event}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder for future reviews */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>More reviews coming soon. Book your ride and share your experience!</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


