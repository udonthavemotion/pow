/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useState } from 'react';
import { Bus } from '../types';

interface BookingModalProps {
  bus?: Bus | null;
  serviceMenuEmbedCode?: string;
  onClose: () => void;
}

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const BookingModal: React.FC<BookingModalProps> = ({ bus, serviceMenuEmbedCode, onClose }) => {
  const isServiceMenu = !bus && serviceMenuEmbedCode;
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const [isVisible, setIsVisible] = useState(false);
  const [isCalendarLoading, setIsCalendarLoading] = useState(true);
  onCloseRef.current = onClose;

  useEffect(() => {
    setIsCalendarLoading(true);
    const timer = setTimeout(() => setIsVisible(true), 50);

    // Add body scroll lock
    document.body.classList.add('modal-open');

    return () => {
      clearTimeout(timer);
      // Remove body scroll lock on unmount
      document.body.classList.remove('modal-open');
    };
  }, []);

  // Focus trap + focus close button when modal opens
  useEffect(() => {
    if (!isVisible) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;
      const focusables = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isVisible]);

  // Handle escape key - ref pattern avoids re-subscribing when onClose changes
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Properly load GoHighLevel calendar embed with external script
  useEffect(() => {
    const embedCode = isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode;

    if (!iframeContainerRef.current || !embedCode) {
      setIsCalendarLoading(false);
      return;
    }

    const container = iframeContainerRef.current;

    // Clear previous content completely
    container.innerHTML = '';
    setIsCalendarLoading(true);

    // Parse the embed code to extract iframe and script
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = embedCode;

    // Get iframe element
    const iframe = tempDiv.querySelector('iframe');
    const embedScript = tempDiv.querySelector('script[src]');
    if (iframe) {
      // Create a new iframe with fresh attributes
      const newIframe = document.createElement('iframe');

      // Copy all attributes from the original iframe
      Array.from(iframe.attributes).forEach(attr => {
        // Update the ID with a unique timestamp to prevent caching
        if (attr.name === 'id') {
          newIframe.setAttribute(attr.name, `${attr.value}_${Date.now()}`);
        } else if (attr.name === 'src') {
          // Add cache-busting parameter to the URL
          const url = new URL(attr.value);
          url.searchParams.set('_t', Date.now().toString());
          newIframe.setAttribute(attr.name, url.toString());
        } else {
          newIframe.setAttribute(attr.name, attr.value);
        }
      });

      // Responsive iframe sizing
      newIframe.style.width = '100%';
      newIframe.style.border = 'none';
      newIframe.style.display = 'block';

      // Dynamic height based on device
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Mobile: Use aspect ratio for better responsiveness
        newIframe.style.height = '120vh'; // Taller for mobile to accommodate forms
        newIframe.style.minHeight = '800px';
        newIframe.style.maxHeight = 'none';
      } else {
        // Desktop: Fixed height with scrolling
        newIframe.style.height = '900px';
        newIframe.style.minHeight = '600px';
      }

      // Prevent horizontal scrolling
      newIframe.style.maxWidth = '100%';
      newIframe.style.overflowX = 'hidden';

      // Add class for CSS targeting
      newIframe.className = 'booking-iframe';

      // Mobile-specific optimizations - enhanced
      if (isMobile) {
        newIframe.setAttribute('scrolling', 'yes'); // Allow vertical scrolling
        // Additional mobile constraints for better UX
        newIframe.style.position = 'relative';
        newIframe.style.transform = 'translateZ(0)'; // Hardware acceleration
        newIframe.style.setProperty('-webkit-overflow-scrolling', 'touch'); // Smooth iOS scrolling
        newIframe.style.touchAction = 'pan-y pinch-zoom'; // Allow vertical scroll and zoom
      }

      // Append iframe to container
      container.appendChild(newIframe);

      // Add load event listener to iframe
      newIframe.addEventListener('load', () => {
        // Small delay to ensure content is rendered
        setTimeout(() => {
          setIsCalendarLoading(false);
        }, 500);
      });

      // Fallback timeout in case load event doesn't fire
      setTimeout(() => {
        setIsCalendarLoading(false);
      }, 3000);
    }

    const scriptSrc = embedScript?.getAttribute('src') || 'https://book.partiesonwheels.com/js/form_embed.js';

    // Remove existing script if present
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    // Add script fresh each time
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      if (window.dispatchEvent) {
        window.dispatchEvent(new Event('resize'));
      }
    };

    script.onerror = () => {
      setIsCalendarLoading(false);
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Clean up when modal closes
      if (container) {
        container.innerHTML = '';
      }
    };

  }, [bus?.calendarEmbedCode, serviceMenuEmbedCode, isServiceMenu]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-all duration-300 booking-modal-container ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        overflow: 'hidden',
        touchAction: 'none' // Prevent body scroll on mobile
      }}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className={`fixed inset-0 bg-white overflow-hidden transition-all duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Minimal Design */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Close modal"
          style={{
            minWidth: '44px',
            minHeight: '44px',
            touchAction: 'manipulation'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Direct iframe container - Minimal wrapper */}
        <div className="w-full h-full bg-white overflow-hidden relative">
          {(isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode) ? (
            <>
              {/* Loading Spinner - Minimal */}
              {isCalendarLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                  <div className="text-center space-y-4">
                    <div className="inline-block w-12 h-12 border-3 border-gray-200 border-t-[#FF6B00] rounded-full animate-spin"></div>
                    <p className="text-gray-600 text-sm">Loading...</p>
                  </div>
                </div>
              )}

              {/* Direct iframe container - No headers or extra UI */}
              <div
                className="h-full w-full overflow-y-auto overflow-x-hidden iframe-wrapper"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                  position: 'relative'
                }}
              >
                <div
                  ref={iframeContainerRef}
                  className="w-full h-full bg-white iframe-container"
                  style={{
                    minHeight: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    overflowX: 'hidden',
                    position: 'relative'
                  }}
                />
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center p-8">
              <div className="flex flex-col items-center text-center max-w-md mx-auto">
                {/* Fallback Content - Minimal */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B00]/10 to-[#FF6B00]/20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 text-[#FF6B00]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Online Booking Coming Soon
                </h4>
                <p className="text-gray-600 mb-6">
                  Call us directly to reserve {bus ? <span className="font-medium">{bus.name}</span> : 'your ride'}
                </p>

                <div className="bg-gray-50 p-5 rounded-lg w-full">
                  <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Call to Book</p>
                  <a
                    href="tel:+19858561860"
                    className="text-2xl font-bold text-gray-900 hover:text-[#FF6B00] transition-colors block"
                  >
                    985-856-1860
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
