/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { OWNER_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">

      {/* Abstract Shapes - Luxury Purple & Gold */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center gap-10 sm:gap-16 md:gap-24 relative z-10">

        <div className="md:w-1/2 w-full">
             {/* 3D Floating Video Card with Premium Accents */}
             <div className="relative group perspective-[1000px]">

                {/* Multi-layer Shadow Stack for 3D Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 transform translate-y-4 translate-x-4"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform -translate-y-2 -translate-x-2"></div>

                {/* Main Video Container */}
                <div className="relative transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500 ease-out">

                  {/* Premium Border Frame */}
                  <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-purple-600 to-yellow-400 shadow-2xl">

                    {/* Inner Frame */}
                    <div className="relative rounded-xl overflow-hidden bg-black">

                      {/* Video Element */}
                      <video
                          src="/videos/about-video.mp4"
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="relative w-full object-cover"
                          style={{ aspectRatio: '16/9', minHeight: '250px' }}
                      >
                          Your browser does not support the video tag.
                      </video>

                      {/* Subtle Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Decorative Corner Accents - Top Left */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4 border-yellow-400 rounded-tl-lg shadow-lg shadow-yellow-400/50"></div>
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-purple-500"></div>

                  {/* Decorative Corner Accents - Top Right */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 border-r-4 border-t-4 border-purple-500 rounded-tr-lg shadow-lg shadow-purple-500/50"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-r-2 border-t-2 border-yellow-400"></div>

                  {/* Decorative Corner Accents - Bottom Left */}
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-4 border-b-4 border-purple-500 rounded-bl-lg shadow-lg shadow-purple-500/50"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-l-2 border-b-2 border-yellow-400"></div>

                  {/* Decorative Corner Accents - Bottom Right */}
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4 border-yellow-400 rounded-br-lg shadow-lg shadow-yellow-400/50"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>

                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-yellow-400 text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    VIP Experience
                  </div>
                </div>

                {/* Floating Geometric Accents */}
                <div className="absolute -right-4 top-1/4 w-16 h-16 border-2 border-yellow-400 rotate-45 opacity-20"></div>
                <div className="absolute -left-4 bottom-1/4 w-12 h-12 border-2 border-purple-500 rotate-12 opacity-20"></div>
             </div>
        </div>

        <div className="md:w-1/2 w-full">
          <span className="text-yellow-400 font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 block text-sm sm:text-base">Locally Owned & Operated</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-8 leading-none font-['Bebas_Neue']">
            PARTY ON WHEELS <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-yellow-400">IS A LIFESTYLE</span>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-zinc-900 rounded-xl p-6 border-2 border-purple-500 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-yellow-500/50">
                        🚌
                      </div>
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">4+</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-bold">Custom Buses</span>
                  </div>
                </div>

                {/* Stat Card 2 - Parties Hosted */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-zinc-900 rounded-xl p-6 border-2 border-yellow-400 hover:border-purple-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/30">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-purple-500/50">
                        🎉
                      </div>
                      <span className="text-4xl sm:text-5xl font-black text-white font-['Bebas_Neue']">1000+</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest font-bold">Parties Hosted</span>
                  </div>
                </div>

                {/* Stat Card 3 - Local */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-yellow-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-zinc-900 rounded-xl p-6 border-2 border-purple-500 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/30">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-purple-500/50">
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