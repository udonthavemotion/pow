/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Bus } from '../types';
import { fadeInUp } from '../utils/animations';
import { MagneticButton } from './MagneticButton';
import { useTiltEffect } from '../hooks/useTiltEffect';

interface BusCardProps {
  bus: Bus;
  onBusClick: (bus: Bus) => void;
}

export const BusCard: React.FC<BusCardProps> = ({ bus, onBusClick }) => {
  const tilt = useTiltEffect({ maxTilt: 5, scale: 1.02 });

  return (
    <motion.div
      ref={tilt.ref as any}
      className="group cursor-pointer flex flex-col bg-gray-50 border border-gray-100 shadow-xl rounded-xl overflow-hidden"
      variants={fadeInUp}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={() => onBusClick(bus)}
      whileHover={{ boxShadow: '0 20px 40px -5px rgba(255, 107, 0, 0.3)' }}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
        <motion.img
          src={bus.imageUrl}
          alt={bus.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#39FF14] text-black font-bold px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm uppercase tracking-wide">
          {bus.capacity} Passengers
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2 gap-3">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 uppercase font-['Bebas_Neue']">
            {bus.name}
          </h3>
          <span className="text-lg sm:text-xl font-bold text-[#FF6B00] whitespace-nowrap">
            ${bus.hourlyRate}/hr
          </span>
        </div>

        <p className="text-gray-500 font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
          {bus.tagline}
        </p>
        <p className="text-gray-600 mb-6 sm:mb-8 line-clamp-2 text-sm sm:text-base">
          {bus.description}
        </p>

        <div className="mt-auto">
          <MagneticButton
            onClick={() => onBusClick(bus)}
            className="w-full py-4 sm:py-5 min-h-[56px] bg-black text-white font-bold uppercase tracking-widest hover:bg-[#FF6B00] hover:scale-105 active:scale-95 transition-all rounded-lg text-sm sm:text-base"
            strength={0.35}
            range={100}
          >
            Book This Bus
          </MagneticButton>
        </div>
      </div>
    </motion.div>
  );
};
