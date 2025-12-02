/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

const StatsCounter: React.FC<StatsCounterProps> = ({ stats }) => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.value / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters((prev) => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, stepDuration);
    });
  };

  return (
    <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-16 px-2 sm:px-0">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 drop-shadow-lg">{stat.icon}</div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white font-['Bebas_Neue'] mb-2 sm:mb-3 drop-shadow-2xl">
            {counters[index]}{stat.suffix}
          </div>
          <div className="text-white/90 text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest drop-shadow-lg px-2">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCounter;

