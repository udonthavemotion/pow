/**
 * Custom hook for parallax scroll effects
 * Creates smooth parallax motion based on scroll position
 */

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 50, direction = 'up' } = options;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [speed, -speed] : [-speed, speed]
  );

  return { ref, y };
};

export const useParallaxWithOpacity = (options: ParallaxOptions = {}) => {
  const { speed = 50, direction = 'up' } = options;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [speed, -speed] : [-speed, speed]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return { ref, y, opacity };
};
