/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useTextReveal, SplitType } from '../hooks/useTextReveal';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface TextRevealProps {
  text: string;
  className?: string;
  splitType?: SplitType;
  staggerDelay?: number;
  animationDelay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  splitType = 'chars',
  staggerDelay = 0.03,
  animationDelay = 0,
  as: Component = 'span',
}) => {
  const { elements, splitType: type } = useTextReveal({ text, splitType });
  const prefersReducedMotion = useReducedMotion();

  // Simplified animations for reduced motion preference
  const container = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : animationDelay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 20,
      rotateX: prefersReducedMotion ? 0 : -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: prefersReducedMotion
        ? { duration: 0 }
        : {
            type: 'spring',
            damping: 12,
            stiffness: 200,
          },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{
        perspective: prefersReducedMotion ? 'none' : '1000px',
        willChange: prefersReducedMotion ? 'auto' : 'transform, opacity',
      }}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            transformOrigin: '50% 100%',
          }}
          className={type === 'words' ? 'mr-2' : type === 'lines' ? 'block' : ''}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </motion.div>
  );
};
