/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { BUSES } from '../constants';
import { Bus } from '../types';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BusCard } from './BusCard';
import { TextReveal } from './TextReveal';

interface BusFleetProps {
  onBusClick: (bus: Bus) => void;
}

const BusFleet: React.FC<BusFleetProps> = ({ onBusClick }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="fleet" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative">
      <div className="max-w-[1600px] mx-auto">

        {/* Header Area */}
        <motion.div
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className="flex flex-col items-center text-center mb-12 sm:mb-20 space-y-3 sm:space-y-4"
          initial="hidden"
          animate={headerVisible ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-sm sm:text-lg">Choose Your Ride</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue']">
            <TextReveal
              text="THE FLEET"
              splitType="chars"
              staggerDelay={0.05}
            />
          </h2>
          <div className="w-20 sm:w-24 h-2 bg-[#39FF14] mt-2 sm:mt-4"></div>
        </motion.div>

        {/* Large Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {BUSES.map((bus) => (
            <BusCard key={bus.id} bus={bus} onBusClick={onBusClick} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusFleet;