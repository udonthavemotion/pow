/**
 * Custom hook for animated number counting
 * Perfect for stats and metrics in the About section
 */

import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface UseCounterOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCounter = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = ''
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = start + (end - start) * easeOutQuart;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, start, end, duration]);

  const formattedCount = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { ref, count: formattedCount };
};
