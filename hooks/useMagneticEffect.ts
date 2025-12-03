/**
 * Custom hook for magnetic button effects
 * Makes buttons subtly follow the cursor when nearby
 */

import { useRef, useState, useEffect } from 'react';

interface MagneticEffectOptions {
  strength?: number;
  range?: number;
}

export const useMagneticEffect = (options: MagneticEffectOptions = {}) => {
  const { strength = 0.3, range = 100 } = options;
  const ref = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < range) {
        const pull = 1 - distance / range;
        setPosition({
          x: distanceX * strength * pull,
          y: distanceY * strength * pull,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, range]);

  return { ref, position };
};
