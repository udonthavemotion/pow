/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      const isInteractive = target.closest('a, button, [role="button"], .cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsHidden(false);
    };

    const handleMouseUp = () => {
      setIsHidden(false);
    };

    // Add listeners for all interactive elements
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Don't render custom cursor if user prefers reduced motion
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="w-6 h-6 rounded-full border-2 border-white"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          willChange: 'transform',
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
          opacity: isHidden ? 0 : 0.6,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 150, damping: 15 },
          opacity: { duration: 0.2 },
        }}
      >
        <div
          className="w-2 h-2 rounded-full bg-white"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
    </>
  );
};
