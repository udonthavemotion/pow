/**
 * Common animation variants and utilities for Framer Motion
 * Used across the Aura Quiet Living website for consistent micro-interactions
 */

import { Variants } from 'framer-motion';

// Fade in animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Button interactions
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: 'easeInOut' }
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1, ease: 'easeInOut' }
};

// Card interactions
export const cardHover = {
  y: -8,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: { duration: 0.3, ease: 'easeOut' }
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

// Smooth scroll reveal configuration
export const scrollRevealConfig = {
  threshold: 0.1,
  triggerOnce: true
};

// Easing functions
export const easings = {
  easeInOut: [0.43, 0.13, 0.23, 0.96],
  easeOut: [0.16, 1, 0.3, 1],
  easeIn: [0.7, 0, 0.84, 0],
  spring: { type: 'spring', stiffness: 100, damping: 15 }
};

// Transition presets
export const transitions = {
  smooth: { duration: 0.6, ease: easings.easeOut },
  quick: { duration: 0.3, ease: easings.easeInOut },
  bouncy: { type: 'spring', stiffness: 300, damping: 20 }
};
