/**
 * Custom hook for 3D tilt effect on hover
 * Creates immersive card interactions
 */

import { useRef, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

interface TiltOptions {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const useTiltEffect = (options: TiltOptions = {}) => {
  const { maxTilt = 10, perspective = 1000, scale = 1.02 } = options;

  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scaleValue = useSpring(useMotionValue(1), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;

    const rotateXValue = (mouseY / (rect.height / 2)) * maxTilt;
    const rotateYValue = (mouseX / (rect.width / 2)) * maxTilt;

    rotateX.set(-rotateXValue);
    rotateY.set(rotateYValue);
    scaleValue.set(scale);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scaleValue.set(1);
  };

  return {
    ref,
    style: {
      rotateX,
      rotateY,
      scale: scaleValue,
      transformPerspective: perspective,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};
