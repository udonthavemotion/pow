/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

/**
 * Utility functions for scroll-triggered animations
 * Uses Intersection Observer API for performance
 */

export const useScrollReveal = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Optionally unobserve after first trigger
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

export const useStaggerReveal = (itemCount: number, threshold: number = 0.1) => {
  const [visibleItems, setVisibleItems] = React.useState<boolean[]>(
    new Array(itemCount).fill(false)
  );
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal items with stagger delay
            visibleItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
                  const newItems = [...prev];
                  newItems[index] = true;
                  return newItems;
                });
              }, index * 100); // 100ms delay between items
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [itemCount, threshold, visibleItems]);

  return { ref, visibleItems };
};

