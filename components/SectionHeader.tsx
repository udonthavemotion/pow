/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  subtitleColor?: string;
  underlineColor?: string;
  darkMode?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  subtitleColor = '#FF6B00',
  underlineColor = '#b9ff66',
  darkMode = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Split title into words for individual animation
  const titleWords = title.split(' ');

  return (
    <div ref={headerRef} className="flex flex-col items-center text-center mb-16 sm:mb-20 space-y-4 sm:space-y-6">
      {/* Subtitle - Fades in first */}
      <span
        className={`font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sm sm:text-lg transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ color: subtitleColor }}
      >
        {subtitle}
      </span>

      {/* Main Title - Words animate in with stagger */}
      <h2 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-['Bebas_Neue'] tracking-tight overflow-hidden ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <span className="block">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0 rotate-0'
                  : 'opacity-0 translate-y-20 rotate-[-5deg]'
              }`}
              style={{
                transitionDelay: `${0.1 + index * 0.1}s`,
                marginRight: index < titleWords.length - 1 ? '0.25em' : '0',
              }}
            >
              {word}
            </span>
          ))}
        </span>
      </h2>

      {/* Underline - Scales in last */}
      <div
        className={`w-24 sm:w-32 h-2 transition-all duration-700 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{
          backgroundColor: underlineColor,
          transitionDelay: `${0.1 + titleWords.length * 0.1}s`
        }}
      />
    </div>
  );
};

export default SectionHeader;