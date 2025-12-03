/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface ContactCTAProps {
  onBookNow?: () => void;
}

const ContactCTA: React.FC<ContactCTAProps> = ({ onBookNow }) => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {/* Left Column - Dark Background */}
          <div className="bg-gray-900 text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Orange circular icon with green outline */}
            <div className="absolute top-6 left-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF6B00] border-4 border-[#39FF14] flex items-center justify-center z-10">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>

            <div className="mt-16 md:mt-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-['Bebas_Neue'] uppercase mb-4 md:mb-6">
                STILL HAVE QUESTIONS?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                We're here to help! Give us a call or send us a message.
              </p>
            </div>
          </div>

          {/* Right Column - White Background */}
          <div className="bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm mb-2 block">
              READY TO PARTY?
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-['Bebas_Neue'] uppercase text-black mb-4 md:mb-6">
              LET'S TALK!
            </h3>
            
            {/* Gradient underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-[#FF6B00] to-[#39FF14] mb-6 md:mb-8"></div>

            {/* Gradient button */}
            <a
              href="tel:+19853339762"
              className="group relative w-full md:w-auto px-8 py-4 md:py-5 bg-gradient-to-r from-[#FF6B00] to-[#39FF14] text-white font-bold text-lg md:text-xl rounded-lg hover:shadow-lg hover:shadow-[#FF6B00]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 mb-6 md:mb-8"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>985-333-9762</span>
            </a>

            {/* Bottom info items */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
              {/* Available 24/7 */}
              <div className="flex items-center gap-2 text-[#FF6B00]">
                <div className="w-2 h-2 rounded-full bg-[#FF6B00]"></div>
                <span className="font-medium">Available 24/7</span>
              </div>

              {/* Vertical divider */}
              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

              {/* Text Us Too */}
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="font-medium">Text Us Too!</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

