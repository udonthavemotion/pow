/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  strength?: number;
  range?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
  range = 100,
}) => {
  const { ref, position } = useMagneticEffect({ strength, range });

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      ref={ref as any}
      className={className}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};
