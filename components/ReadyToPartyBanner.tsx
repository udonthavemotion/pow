/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

interface ReadyToPartyBannerProps {
  onBookNow?: () => void;
}

const ReadyToPartyBanner: React.FC<ReadyToPartyBannerProps> = ({ onBookNow }) => {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Orange gradient background - darker at edges, brighter in center */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B00] via-[#FF8533] to-[#FF6B00]"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* Limited availability label */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></div>
            <span className="text-white text-sm md:text-base font-medium tracking-wide uppercase">
              LIMITED AVAILABILITY FOR MARDI GRAS
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-['Bebas_Neue'] uppercase mb-2 md:mb-4">
            <span className="text-white">READY TO</span>
            <br />
            <span 
              className="text-[#39FF14]"
              style={{
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(57, 255, 20, 0.3)'
              }}
            >
              PARTY?
            </span>
          </h2>

          {/* Descriptive text */}
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-2 md:mb-4 max-w-2xl mx-auto">
            Book your ride now and let the good times roll.
          </p>
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto">
            Your unforgettable night starts here.
          </p>

          {/* Book Now button */}
          <button
            onClick={onBookNow}
            className="group bg-white text-[#FF6B00] font-bold text-lg md:text-xl lg:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-xl hover:shadow-2xl hover:shadow-white/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto mb-12 md:mb-16"
          >
            <span>BOOK YOUR RIDE NOW</span>
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B00] group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          {/* Feature icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Instant Confirmation */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#39FF14] flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm md:text-base">Instant Confirmation</span>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#39FF14] flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
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
              <span className="text-white font-medium text-sm md:text-base">24/7 Support</span>
            </div>

            {/* Secure Booking */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#39FF14] flex items-center justify-center">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <span className="text-white font-medium text-sm md:text-base">Secure Booking</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReadyToPartyBanner;

