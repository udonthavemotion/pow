/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  variant?: 'card' | 'text' | 'avatar' | 'image' | 'button';
  className?: string;
  count?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'text',
  className = '',
  count = 1
}) => {
  const shimmer = {
    animate: {
      backgroundPosition: ['200% 0', '-200% 0'],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  };

  const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse';
  const backgroundSize = { backgroundSize: '200% 100%' };

  const variantClasses = {
    card: 'h-64 rounded-xl',
    text: 'h-4 rounded',
    avatar: 'h-12 w-12 rounded-full',
    image: 'aspect-video rounded-lg',
    button: 'h-12 rounded-lg',
  };

  const skeletonClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={skeletonClass}
          style={backgroundSize}
          {...shimmer}
        />
      ))}
    </>
  );
};

// Bus Fleet Card Skeleton
export const BusCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-50 border border-gray-100 shadow-xl rounded-xl overflow-hidden">
      <LoadingSkeleton variant="image" />
      <div className="p-6 sm:p-8 space-y-4">
        <div className="flex justify-between">
          <LoadingSkeleton variant="text" className="w-32" />
          <LoadingSkeleton variant="text" className="w-16" />
        </div>
        <LoadingSkeleton variant="text" className="w-24" />
        <LoadingSkeleton variant="text" className="w-full" />
        <LoadingSkeleton variant="text" className="w-3/4" />
        <LoadingSkeleton variant="button" className="w-full mt-4" />
      </div>
    </div>
  );
};

// Testimonial Card Skeleton
export const TestimonialSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <LoadingSkeleton variant="avatar" />
        <div className="flex-1">
          <LoadingSkeleton variant="text" className="w-32 mb-2" />
          <LoadingSkeleton variant="text" className="w-24" />
        </div>
      </div>
      <LoadingSkeleton variant="text" count={3} className="mb-2" />
    </div>
  );
};

// General Content Skeleton
export const ContentSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <LoadingSkeleton variant="text" className="w-3/4" />
      <LoadingSkeleton variant="text" className="w-full" />
      <LoadingSkeleton variant="text" className="w-5/6" />
    </div>
  );
};

export default LoadingSkeleton;
