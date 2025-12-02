/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (threshold: number = 0.1, rootMargin: string = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve after first trigger for performance
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

