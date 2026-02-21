/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Shared IntersectionObserver hook - deduplicates visibility logic across components
 */

import { useState, useEffect, useRef, useCallback } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Returns whether the observed element is in view and a ref to attach to it.
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  const setRef = useCallback((el: HTMLElement | null) => {
    ref.current = el;
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { isInView, ref: setRef };
}

/**
 * Observe multiple elements by a key (e.g. bus id, index).
 * Returns a Set of keys that are in view and a ref callback for each item.
 */
export function useInViewMap(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = '50px' } = options;
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const refsMap = useRef<Map<string, HTMLElement>>(new Map());

  const setItemRef = useCallback((key: string) => (el: HTMLElement | null) => {
    if (el) {
      refsMap.current.set(key, el);
    } else {
      refsMap.current.delete(key);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = (entry.target as HTMLElement).getAttribute('data-inview-key');
          if (key && entry.isIntersecting) {
            setVisibleKeys((prev) => new Set([...prev, key]));
          }
        });
      },
      { threshold, rootMargin }
    );

    refsMap.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { visibleKeys, setItemRef };
}
