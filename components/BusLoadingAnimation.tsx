/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface BusLoadingAnimationProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BusLoadingAnimation: React.FC<BusLoadingAnimationProps> = ({
  text = 'Loading your ride...',
  size = 'md',
}) => {
  const prefersReducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: 'text-4xl',
    md: 'text-6xl',
    lg: 'text-8xl',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      {/* Road and Bus Container */}
      <div className="relative w-full max-w-md">
        {/* Road */}
        <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
          {/* Road lines */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-1 w-full flex gap-4"
            animate={{
              x: [0, -40],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-8 h-0.5 bg-[#39FF14] shrink-0" />
            ))}
          </motion.div>
        </div>

        {/* Bus */}
        <motion.div
          className="absolute -top-8 left-0"
          animate={
            prefersReducedMotion
              ? { x: '50%' }
              : {
                  x: ['0%', '100%'],
                  y: [0, -3, 0, -2, 0],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  x: {
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  y: {
                    duration: 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }
          }
          style={{
            willChange: prefersReducedMotion ? 'auto' : 'transform',
          }}
        >
          <motion.div
            className={`${sizeClasses[size]} filter drop-shadow-lg`}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    rotate: [-1, 1, -1],
                  }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : {
                    duration: 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          >
            🚌
          </motion.div>

          {/* Exhaust smoke */}
          {!prefersReducedMotion && (
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                scale: [0, 1, 1.5],
                x: [-10, -20, -30],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            >
              <div className="w-4 h-4 rounded-full bg-gray-400 blur-sm" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Loading Text */}
      <motion.div
        className="text-center"
        initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.2 }}
      >
        <motion.p
          className="text-xl font-bold text-gray-900 mb-2"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  opacity: [1, 0.5, 1],
                }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }
          }
        >
          {text}
        </motion.p>

        {/* Loading dots */}
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#FF6B00]"
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : {
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }
              }
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.2,
                    }
              }
            />
          ))}
        </div>
      </motion.div>

      {/* Party lights effect - hidden for reduced motion */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? '#FF6B00' : '#39FF14',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
