/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, buttonHover, buttonTap } from '../utils/animations';
import { MagneticButton } from './MagneticButton';
import { TextReveal } from './TextReveal';

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
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm sm:text-lg mb-3 sm:mb-4 block">Simple Process</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-3 sm:mb-4">
            <TextReveal
              text="How It Works"
              splitType="words"
              staggerDelay={0.1}
            />
          </h2>
          <div className="w-20 sm:w-24 h-2 bg-[#39FF14] mx-auto mt-3 sm:mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 group"
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(255, 107, 0, 0.2)' }}
              transition={{ duration: 0.3 }}
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
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <MagneticButton
            href="#fleet"
            className="inline-block bg-[#FF6B00] text-white px-8 sm:px-10 py-4 sm:py-5 min-h-[56px] font-bold uppercase tracking-widest text-base sm:text-lg hover:bg-[#e56000] hover:scale-105 active:scale-95 transition-all -skew-x-12 shadow-lg"
            strength={0.4}
            range={120}
          >
            <span className="block skew-x-12">Get Started Now</span>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;


