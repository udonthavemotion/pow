/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, buttonHover, buttonTap } from '../utils/animations';
import { MagneticButton } from './MagneticButton';
import { useParallax } from '../hooks/useParallax';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { TextReveal } from './TextReveal';
import { WordRotation } from './WordRotation';

interface HeroProps {
  onBookNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const prefersReducedMotion = useReducedMotion();
  const { ref: parallaxRef, y: parallaxY } = useParallax({ speed: 100, direction: 'down' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If clicking "Pick Your Bus", trigger service menu
    if (targetId === 'fleet' && onBookNow) {
      onBookNow();
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      ref={parallaxRef as React.RefObject<HTMLElement>}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gray-900"
      aria-label="Hero section"
    >
      {/* Background Video - Party Bus Hero Video */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: prefersReducedMotion ? 0 : parallaxY,
          willChange: prefersReducedMotion ? 'auto' : 'transform',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/images/hero/hero-background.jpg"
            alt="Party Bus Atmosphere"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="block text-base sm:text-xl md:text-2xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#39FF14] mb-4 sm:mb-6 drop-shadow-md"
            variants={staggerItem}
          >
            Houma • Thibodaux • New Orleans
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-7xl md:text-9xl font-black text-white leading-none mb-4 sm:mb-6 drop-shadow-xl font-['Bebas_Neue']"
            variants={staggerItem}
          >
            <TextReveal
              text="LET THE GOOD"
              splitType="words"
              staggerDelay={0.08}
              animationDelay={0.3}
            />
            <br/>
            <TextReveal
              text="TIMES ROLL"
              splitType="words"
              staggerDelay={0.08}
              animationDelay={0.5}
              className="text-[#FF6B00]"
            />
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-2xl text-gray-200 font-medium mb-8 sm:mb-12 drop-shadow-md px-4 leading-relaxed"
            variants={staggerItem}
          >
            The wildest party buses in South Louisiana for your{' '}
            <WordRotation
              words={[
                'wedding',
                'game day',
                'birthday',
                'bachelorette party',
                'bachelor party',
                'Mardi Gras',
                'festival',
                'parade',
                'corporate event',
                'prom',
                'graduation',
                'anniversary',
                'reunion',
                'night out',
                'concert',
                'celebration'
              ]}
              variant="transparent"
              speed="normal"
              className="text-[#FF6B00] font-bold"
            />
            .
            <br className="hidden sm:block"/>
            Loud music, good vibes, and unforgettable nights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            variants={staggerItem}
          >
            <MagneticButton
                href="#fleet"
                onClick={(e) => handleNavClick(e, 'fleet')}
                className="group relative px-8 sm:px-10 py-4 sm:py-5 min-h-[56px] bg-[#FF6B00] text-white -skew-x-12 hover:bg-[#ff8533] transition-all duration-300 shadow-[0_0_20px_rgba(255,107,0,0.5)] flex items-center justify-center hover:scale-105 active:scale-95"
                strength={0.4}
                range={120}
            >
                <span className="block skew-x-12 text-lg sm:text-xl font-bold tracking-widest uppercase">Book Your Ride</span>
            </MagneticButton>
            <motion.a
                href="tel:985-333-9762"
                className="text-white/90 hover:text-[#39FF14] transition-colors duration-300 text-lg sm:text-xl font-bold tracking-wide"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                or call <span className="text-[#39FF14]">985-333-9762</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;