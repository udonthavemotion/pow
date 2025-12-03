/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

/**
 * Custom hook to trap focus within a container (useful for modals and dialogs)
 * Prevents tab navigation from leaving the container and cycles focus within focusable elements
 *
 * @param {boolean} isActive - Whether the focus trap is active
 * @returns {React.RefObject<HTMLDivElement>} Ref to attach to the container element
 *
 * @example
 * const trapRef = useFocusTrap(isModalOpen);
 * return <div ref={trapRef}>...</div>
 */
export const useFocusTrap = (isActive: boolean = true) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const container = containerRef.current;

    // Store the currently focused element to restore later
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Get all focusable elements within the container
    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        '[contenteditable="true"]',
      ].join(', ');

      return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors)).filter(
        (element) => {
          // Filter out elements that are hidden or have negative tabindex
          return (
            element.offsetParent !== null &&
            !element.hasAttribute('aria-hidden') &&
            element.tabIndex >= 0
          );
        }
      );
    };

    // Focus the first focusable element
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    // Handle Tab key to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement as HTMLElement;

      // Shift + Tab (backward)
      if (e.shiftKey) {
        if (activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      }
      // Tab (forward)
      else {
        if (activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Add event listener
    container.addEventListener('keydown', handleKeyDown);

    // Cleanup: restore focus and remove listener
    return () => {
      container.removeEventListener('keydown', handleKeyDown);

      // Restore focus to the previously focused element
      if (previousActiveElement.current && previousActiveElement.current.focus) {
        previousActiveElement.current.focus();
      }
    };
  }, [isActive]);

  return containerRef;
};
