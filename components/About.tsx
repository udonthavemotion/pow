/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { OWNER_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#39FF14] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-24 relative z-10">

        <div className="md:w-1/2 w-full">
             <div className="relative">
                <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-full h-full border-2 sm:border-4 border-[#39FF14] rounded-xl"></div>
                {/* ABOUT VIDEO: Party bus lifestyle video */}
                <video
                    src="/videos/about-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative w-full rounded-xl shadow-2xl object-cover"
                    style={{ aspectRatio: '16/9', minHeight: '250px' }}
                >
                    Your browser does not support the video tag.
                </video>
             </div>
        </div>

        <div className="md:w-1/2 w-full">
          <span className="text-[#FF6B00] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 block text-sm sm:text-base">Locally Owned & Operated</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 leading-none font-['Bebas_Neue']">
            PARTY ON WHEELS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#39FF14]">IS A LIFESTYLE</span>
          </h2>

          <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 font-light">
            <p>
                Owned by <strong>Deric Hebert</strong>, Party On Wheels was built with one simple mission: to bring loud, unapologetic fun to South Louisiana.
            </p>
            <p>
                We aren't just a transportation company. We are the pre-game, the main event, and the after-party all rolled into one. Whether you are rolling through Houma, Thibodaux, or heading down to the Big Easy, our fleet is designed to keep the energy high.
            </p>
            <p>
                Every bus is equipped with top-tier sound systems and lighting because we know that down here, we don't do quiet.
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {/* Stat Card 1 - Custom Buses */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] to-[#e56000] rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 border-2 border-[#FF6B00] hover:border-[#39FF14] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#e56000] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        🚌
                      </div>
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">4+</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-bold">Custom Buses</span>
                  </div>
                </div>

                {/* Stat Card 2 - Parties Hosted */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#39FF14] to-[#2dd10f] rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 border-2 border-[#39FF14] hover:border-[#FF6B00] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#39FF14]/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#39FF14] to-[#2dd10f] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        🎉
                      </div>
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">1000+</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-bold">Parties Hosted</span>
                  </div>
                </div>

                {/* Stat Card 3 - Local */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] via-[#e56000] to-[#39FF14] rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-800 rounded-xl p-6 border-2 border-[#FF6B00] hover:border-[#39FF14] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF6B00]/20">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#39FF14] rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        📍
                      </div>
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">100%</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-bold">Local</span>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;