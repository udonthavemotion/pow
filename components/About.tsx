/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion } from 'framer-motion';
import { OWNER_NAME } from '../constants';
import { fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import { useCounter } from '../hooks/useCounter';
import { useParallax } from '../hooks/useParallax';
import { TextReveal } from './TextReveal';

const About: React.FC = () => {
  const busesCount = useCounter({ end: 4, duration: 2000, suffix: '+' });
  const partiesCount = useCounter({ end: 1000, duration: 2500, suffix: '+' });
  const localPercent = useCounter({ end: 100, duration: 2000, suffix: '%' });

  const { ref: parallaxRef1, y: parallaxY1 } = useParallax({ speed: 60, direction: 'up' });
  const { ref: parallaxRef2, y: parallaxY2 } = useParallax({ speed: 80, direction: 'down' });

  return (
    <section id="about" className="bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* Abstract Shapes with Parallax */}
      <motion.div
        ref={parallaxRef1 as React.RefObject<HTMLDivElement>}
        style={{ y: parallaxY1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"
      />
      <motion.div
        ref={parallaxRef2 as React.RefObject<HTMLDivElement>}
        style={{ y: parallaxY2 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#39FF14] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"
      />

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-24 relative z-10">

        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInLeft}
        >
          {/* Vertical Video - Full Display */}
          <video
            src="/videos/about-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[400px] md:max-w-[500px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] object-cover"
            style={{ aspectRatio: '9/16', minHeight: '400px' }}
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          className="md:w-1/2 w-full flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInRight}
        >
          {/* Modern 2025 Typography - Refined Badge */}
          <div className="mb-6">
            <span className="inline-block text-[#FF6B00] font-semibold tracking-[0.2em] uppercase mb-5 text-xs sm:text-sm relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#FF6B00]">
              Locally Owned & Operated
            </span>
          </div>

          {/* Modern Heading with Better Hierarchy */}
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 sm:mb-10 leading-[0.9] tracking-tight font-['Bebas_Neue']">
            <TextReveal
              text="PARTY ON WHEELS"
              splitType="words"
              staggerDelay={0.06}
            />
          </h2>

          {/* Refined Body Text - 2025 Style */}
          <div className="space-y-5 sm:space-y-6 mb-10 sm:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light leading-relaxed tracking-tight">
              Owned by <span className="font-semibold text-white">Deric Hebert</span>, Party On Wheels was built with one simple mission: to bring loud, unapologetic fun to South Louisiana.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed tracking-tight">
              We aren't just a transportation company. We are the pre-game, the main event, and the after-party all rolled into one. Whether you are rolling through Houma, Thibodaux, or heading down to the Big Easy, our fleet is designed to keep the energy high.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light leading-relaxed tracking-tight">
              Every bus is equipped with top-tier sound systems and lighting because we know that down here, we don't do quiet.
            </p>
          </div>

          {/* Modern Statistics Grid - 2025 Design */}
          <div className="mt-8 sm:mt-10">
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/10">
              <div ref={busesCount.ref} className="text-center md:text-left">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none tracking-tight">{busesCount.count}</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.15em] font-medium">Custom Buses</span>
              </div>
              <div ref={partiesCount.ref} className="text-center md:text-left">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none tracking-tight">{partiesCount.count}</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.15em] font-medium">Parties Hosted</span>
              </div>
              <div ref={localPercent.ref} className="text-center md:text-left">
                <span className="block text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 leading-none tracking-tight">{localPercent.count}</span>
                <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-[0.15em] font-medium">Local</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;