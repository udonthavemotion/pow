/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  onBookNow?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to book your ride?",
  subtitle = "Questions? We're here to help!",
  phoneNumber = "985-333-9762",
  onBookNow
}) => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="bg-gradient-to-r from-[#FF6B00] to-[#39FF14] rounded-2xl p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-['Bebas_Neue'] uppercase text-white mb-4">
            {title}
          </h3>
          <p className="text-white text-lg md:text-xl mb-6 md:mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:+1${phoneNumber.replace(/\D/g, '')}`}
              className="bg-white text-[#FF6B00] font-bold text-lg px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-white/30 transition-all duration-300 hover:scale-105"
            >
              Call {phoneNumber}
            </a>
            {onBookNow && (
              <button
                onClick={onBookNow}
                className="bg-black text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                Book Now
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

