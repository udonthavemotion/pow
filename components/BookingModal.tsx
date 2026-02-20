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

const BookingModal: React.FC<BookingModalProps> = ({ bus, serviceMenuEmbedCode, onClose }) => {
  const isServiceMenu = !bus && serviceMenuEmbedCode;
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Ensure iframe loads and adjust height dynamically
  useEffect(() => {
    const embedCode = isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode;
    if (iframeContainerRef.current && embedCode) {
      const iframe = iframeContainerRef.current.querySelector('iframe');
      if (iframe) {
        // Ensure iframe has proper attributes for visibility
        iframe.style.width = '100%';
        iframe.style.minHeight = '750px';
        iframe.style.height = 'auto';
        iframe.style.border = 'none';
        iframe.setAttribute('scrolling', 'yes');
      }

      // Load any scripts in the embed code
      const scripts = iframeContainerRef.current.querySelectorAll('script');
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = oldScript.textContent;
        oldScript.parentNode?.replaceChild(newScript, oldScript);
      });
    }
  }, [bus?.calendarEmbedCode, serviceMenuEmbedCode, isServiceMenu]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white w-full h-full sm:max-w-7xl sm:max-h-[90vh] sm:rounded-2xl overflow-hidden flex flex-col shadow-2xl relative transition-all duration-500 ${
          isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Minimal and Clean */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white text-gray-500 hover:text-gray-700 flex items-center justify-center transition-all duration-200 shadow-lg"
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
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

          {/* LEFT SIDE - Minimal Bus Info with Blue Gradient */}
          <div className="lg:w-2/5 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden max-h-[35vh] lg:max-h-full">

            {/* Subtle Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4 sm:space-y-6">
              {/* Title Section - Clean Typography */}
              <div className="space-y-2">
                {isServiceMenu ? (
                  <>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                      Choose Your Ride
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg">
                      Select from our premium fleet
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
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

          {/* RIGHT SIDE - Calendar - Completely Seamless */}
          <div className="lg:w-3/5 flex flex-col bg-white overflow-hidden flex-1">

            {/* Calendar Header - Minimal */}
            <div className="bg-gradient-to-r from-blue-50 to-white p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {isServiceMenu ? 'Select Your Service' : 'Schedule Your Booking'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1">
                {isServiceMenu ? 'Browse our fleet and select your preferred bus' : 'Choose your date and time to reserve'}
              </p>
            </div>

            {/* Calendar Container - No Borders, Completely Seamless */}
            <div className="flex-1 overflow-auto bg-white p-4 sm:p-6">
              {(isServiceMenu ? serviceMenuEmbedCode : bus?.calendarEmbedCode) ? (
                <div
                  ref={iframeContainerRef}
                  className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] bg-white"
                  dangerouslySetInnerHTML={{ __html: isServiceMenu ? serviceMenuEmbedCode! : bus!.calendarEmbedCode! }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center min-h-[600px] text-center p-8 max-w-md mx-auto">
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
                      href="tel:+19853339762"
                      className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors block mb-2"
                    >
                      985-333-9762
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
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Mobile Only - Minimal */}
        <div className="lg:hidden bg-gradient-to-r from-blue-50 to-white px-5 py-4">
          {!isServiceMenu && bus && (
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-4 text-gray-600">
                <span className="font-semibold text-gray-900">${bus.hourlyRate}/hr</span>
                <span className="text-gray-400">•</span>
                <span>{bus.minHours}hr min</span>
              </div>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 font-medium uppercase text-xs tracking-wider"
              >
                Close
              </button>
            </div>
          )}
          {isServiceMenu && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700 font-medium">Choose your bus</span>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 font-medium uppercase text-xs tracking-wider"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;