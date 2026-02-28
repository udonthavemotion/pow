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
  const scriptLoadedRef = useRef(false);

  onCloseRef.current = onClose;

  useEffect(() => {
    setIsCalendarLoading(true);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
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

      // Force iframe to take full space - responsive for mobile
      newIframe.style.width = '100%';
      newIframe.style.height = '100%';
      newIframe.style.minHeight = window.innerWidth < 768 ? '600px' : '900px';
      newIframe.style.border = 'none';
      newIframe.style.display = 'block';

      // Mobile-specific optimizations
      if (window.innerWidth < 768) {
        newIframe.setAttribute('scrolling', 'auto');
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

    // Always reload the GoHighLevel script to ensure proper initialization
    const scriptSrc = 'https://link.zeromotionmarketing.com/js/form_embed.js';

    // Remove existing script if present
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existingScript) {
      existingScript.remove();
      scriptLoadedRef.current = false;
    }

    // Add script fresh each time
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      scriptLoadedRef.current = true;
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
      className={`fixed inset-0 z-[100] flex items-center justify-center p-0 bg-black/50 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className={`bg-white w-full h-full sm:max-w-[100vw] sm:max-h-[100vh] overflow-hidden flex flex-col shadow-2xl relative transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        } ${
          // On mobile, ensure full screen coverage
          'fixed inset-0 sm:relative'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Optimized for Mobile Touch */}
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white text-gray-600 hover:text-gray-900 flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Main Content Container */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden h-full">

          {/* LEFT SIDE - Minimal Bus Info with Blue Gradient - Collapsed on Mobile */}
          <div className="hidden lg:flex lg:w-[35%] bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-6 sm:p-8 lg:p-10 flex-col justify-between relative overflow-y-auto lg:overflow-hidden lg:max-h-full">

            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              {/* Title Section - Clean Typography */}
              <div className="space-y-2">
                {isServiceMenu ? (
                  <>
                    <h2 id="booking-modal-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Choose Your Ride
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                      Select from our premium fleet
                    </p>
                  </>
                ) : (
                  <>
                    <h2 id="booking-modal-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      {bus.name}
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                      {bus.tagline}
                    </p>
                  </>
                )}
              </div>

              {/* Bus Image - Clean Presentation */}
              {!isServiceMenu && bus?.imageUrl && (
                <div className="relative -mx-6 sm:-mx-8 lg:-mx-10 hidden lg:block">
                  <img
                    src={bus.imageUrl}
                    alt={bus.name}
                    className="w-full h-48 lg:h-56 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              )}

              {/* Trust Signals - Minimal Icons */}
              <div className="hidden sm:flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Confirmation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Party Ready</span>
                </div>
              </div>

              {/* Features - Clean List */}
              {!isServiceMenu && bus?.features && (
                <div className="space-y-3 hidden lg:block">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What's Included
                  </h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {bus.features.slice(0, 6).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pricing - Clean Card */}
              {!isServiceMenu && bus && (
                <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                        ${bus.hourlyRate}
                      </span>
                      <span className="text-lg text-gray-600">/hour</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{bus.minHours} hr minimum</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Up to {bus.capacity} guests</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - Calendar - Full Width on Mobile */}
          <div className="w-full lg:w-[65%] flex flex-col bg-white overflow-hidden flex-1">

            {/* Mobile Header - Shows bus info on small screens */}
            <div className="lg:hidden bg-gradient-to-r from-blue-50 to-white p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {isServiceMenu ? 'Party On Wheels' : bus?.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {isServiceMenu ? 'Choose Your Ride' : bus?.tagline}
                  </p>
                </div>
                {!isServiceMenu && bus && (
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">${bus.hourlyRate}/hr</div>
                    <div className="text-xs text-gray-600">{bus.minHours}hr min</div>
                  </div>
                )}
              </div>
            </div>

            {/* Calendar Header - Minimal */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 sm:p-6 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {isServiceMenu ? 'Select Your Service' : 'Schedule Your Booking'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {isServiceMenu ? 'Browse our fleet and select your preferred bus' : 'Choose your date and time to reserve'}
              </p>
            </div>

            {/* Calendar Container - Optimized for Mobile & Desktop */}
            <div className="flex-1 bg-white overflow-hidden relative min-h-0">
              {(isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode) ? (
                <>
                  {/* Loading Spinner */}
                  {isCalendarLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                      <div className="text-center space-y-4">
                        <div className="inline-block w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        <p className="text-gray-600 font-medium">Loading calendar...</p>
                      </div>
                    </div>
                  )}

                  {/* Calendar iframe container - Full height on mobile */}
                  <div className="h-full w-full overflow-y-auto overflow-x-hidden -webkit-overflow-scrolling-touch">
                    <div
                      ref={iframeContainerRef}
                      className="w-full min-h-full bg-white"
                      style={{
                        minHeight: '100%',
                        height: 'auto'
                      }}
                    />
                  </div>
                </>
              ) : (
                <div className="h-full overflow-y-auto flex items-center justify-center p-8">
                  <div className="flex flex-col items-center text-center max-w-md mx-auto">
                  {/* Fallback Content - Minimal Design */}
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 text-blue-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                    Online Booking Coming Soon
                  </h4>
                  <p className="text-gray-600 mb-8">
                    Call us directly to reserve {bus ? <span className="font-medium text-gray-900">{bus.name}</span> : 'your bus'}
                  </p>

                  {/* Call to Action - Clean Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl w-full">
                    <p className="text-sm text-gray-600 mb-2">
                      Call to Book
                    </p>
                    <a
                      href="tel:+19858561860"
                      className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors block mb-2"
                    >
                      985-856-1860
                    </a>
                    <p className="text-sm text-gray-500">
                      Available 24/7
                    </p>
                  </div>

                  {/* Additional Contact Options */}
                  <div className="grid grid-cols-2 gap-4 mt-6 w-full">
                    <button className="bg-white p-4 rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
                      <div className="text-sm font-medium text-gray-700">Text Message</div>
                      <div className="text-xs text-gray-500 mt-1">Same Number</div>
                    </button>
                    <button className="bg-white p-4 rounded-xl hover:bg-blue-50 transition-colors shadow-sm">
                      <div className="text-sm font-medium text-gray-700">Email Quote</div>
                      <div className="text-xs text-gray-500 mt-1">Quick Reply</div>
                    </button>
                  </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookingModal;