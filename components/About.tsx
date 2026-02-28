/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useState } from 'react';
import { OWNER_NAME } from '../constants';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    const countersObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.8 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (countersRef.current) countersObserver.observe(countersRef.current);

    return () => {
      observer.disconnect();
      countersObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="bg-white text-gray-900 py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      {/* Orange and green background blobs - no more blue! */}
      <div
        className={`absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 transition-all duration-1000 ${
          isVisible ? 'translate-y-0' : 'translate-y-[-50px]'
        }`}
        style={{ transitionDelay: '0.2s' }}
      />
      <div
        className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b9ff66] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 transition-all duration-1200 ${
          isVisible ? 'translate-y-0' : 'translate-y-[50px]'
        }`}
        style={{ transitionDelay: '0.3s' }}
      />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10 sm:gap-16 lg:gap-20 relative z-10">

        {/* Video Container - 9:16 Vertical Format */}
        <div
          className={`lg:w-auto w-full flex justify-center transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 scale-100 translate-x-0'
              : 'opacity-0 scale-95 translate-x-[-30px]'
          }`}
        >
          <div className="relative group max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
            {/* Green border - no more blue! */}
            <div className={`absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-full h-full border-2 sm:border-4 border-[#b9ff66] rounded-2xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 translate-x-2 translate-y-2'
            }`}
            style={{ transitionDelay: '0.3s' }}
            />

            {/* 9:16 Vertical Video */}
            <video
              src="/videos/about-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="relative w-full rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ aspectRatio: '9/16', maxHeight: '600px' }}
            >
              Your browser does not support the video tag.
            </video>

          </div>
        </div>

        {/* Text Content - Side by side with video */}
        <div className="flex-1 w-full">
          <span
            className={`text-[#FF6B00] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 block text-sm sm:text-base transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Locally Owned & Operated
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 leading-none font-['Bebas_Neue']">
            <span className="inline-block">
              {"PARTY ON WHEELS".split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    animationDelay: `${0.3 + index * 0.03}s`,
                    transitionDelay: `${0.3 + index * 0.03}s`
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
            <br/>
            <span className="text-[#b9ff66]">
              {"IS A LIFESTYLE".split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75'
                  }`}
                  style={{
                    animationDelay: `${0.6 + index * 0.03}s`,
                    transitionDelay: `${0.6 + index * 0.03}s`
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 font-light">
            <p
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              Owned by <strong>Deric Hebert</strong>, Party On Wheels was built with one simple mission: to bring loud, unapologetic fun to South Louisiana.
            </p>
            <p
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              We aren't just a transportation company. We are the pre-game, the main event, and the after-party all rolled into one. Whether you are rolling through Houma, Thibodaux, or heading down to the Big Easy, our fleet is designed to keep the energy high.
            </p>
            <p
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Every bus is equipped with top-tier sound systems and lighting because we know that down here, we don't do quiet.
            </p>
          </div>

          {/* Animated Stats Counter */}
          <div
            ref={countersRef}
            className={`mt-8 sm:mt-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            <div className="flex flex-wrap gap-6 sm:gap-8 border-t border-gray-200 pt-6 sm:pt-8">
              <div className={`transform transition-all duration-700 ${
                countersVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}>
                <span className="block text-3xl sm:text-4xl font-bold text-[#b9ff66] mb-1">
                  {countersVisible && <CountUp end={4} duration={2000} />}+
                </span>
                <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Custom Buses</span>
              </div>
              <div className={`transform transition-all duration-700 ${
                countersVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}>
                <span className="block text-3xl sm:text-4xl font-bold text-[#b9ff66] mb-1">
                  {countersVisible && <CountUp end={1000} duration={2000} />}+
                </span>
                <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Parties Hosted</span>
              </div>
              <div className={`transform transition-all duration-700 ${
                countersVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}>
                <span className="block text-3xl sm:text-4xl font-bold text-[#b9ff66] mb-1">
                  {countersVisible && <CountUp end={100} duration={2000} />}%
                </span>
                <span className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider">Local</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple count up component
const CountUp: React.FC<{ end: number; duration: number }> = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
};

export default About;