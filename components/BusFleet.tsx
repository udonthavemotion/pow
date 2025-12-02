/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { BUSES } from '../constants';
import { Bus } from '../types';

interface BusFleetProps {
  onBusClick: (bus: Bus) => void;
}

const BusFleet: React.FC<BusFleetProps> = ({ onBusClick }) => {
  return (
    <section id="fleet" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>

      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-20 space-y-3 sm:space-y-4">
          <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm sm:text-lg">Choose Your Ride</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-white font-['Bebas_Neue']">THE FLEET</h2>
          <div className="w-20 sm:w-24 h-2 bg-gradient-to-r from-purple-500 to-yellow-400 mt-2 sm:mt-4"></div>
        </div>

        {/* Premium 3D Bus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {BUSES.map((bus, index) => (
            <div
                key={bus.id}
                className="group cursor-pointer relative"
                onClick={() => onBusClick(bus)}
            >
                {/* Multi-layer 3D Shadow Stack */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform translate-y-4 translate-x-4"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 to-yellow-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform -translate-y-2 -translate-x-2"></div>

                {/* Main Card Container */}
                <div className="relative transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-all duration-500 ease-out">

                  {/* Premium Gradient Border */}
                  <div className="relative rounded-2xl p-1 bg-gradient-to-br from-purple-500 via-purple-600 to-yellow-400 shadow-2xl">

                    {/* Inner Card */}
                    <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black flex flex-col">

                      {/* Image Section */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                          <img
                            src={bus.imageUrl}
                            alt={bus.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                          />

                          {/* Premium Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                          {/* VIP Badge - Top Left */}
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-black uppercase tracking-wider px-3 py-1.5 rounded-full text-xs shadow-lg shadow-yellow-500/50">
                              VIP Fleet
                          </div>

                          {/* Capacity Badge - Top Right */}
                          <div className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-lg text-sm uppercase tracking-wide border border-purple-400/50 shadow-lg">
                              {bus.capacity} Guests
                          </div>

                          {/* Decorative Corner Accents on Image */}
                          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-4 border-b-4 border-yellow-400 opacity-50"></div>
                          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-purple-500 opacity-50"></div>
                      </div>

                      {/* Details Section */}
                      <div className="p-6 sm:p-8 flex-1 flex flex-col relative">

                          {/* Name & Price */}
                          <div className="flex justify-between items-start mb-3 gap-3">
                              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase font-['Bebas_Neue'] leading-none">
                                {bus.name}
                              </h3>
                              <div className="flex flex-col items-end">
                                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 whitespace-nowrap font-['Bebas_Neue']">
                                  ${bus.hourlyRate}
                                </span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider">/hour</span>
                              </div>
                          </div>

                          {/* Tagline */}
                          <p className="text-purple-400 font-bold tracking-wide uppercase text-xs sm:text-sm mb-4">{bus.tagline}</p>

                          {/* Description */}
                          <p className="text-gray-300 mb-6 line-clamp-2 text-sm sm:text-base leading-relaxed">{bus.description}</p>

                          {/* Features Pills */}
                          {bus.features && bus.features.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {bus.features.slice(0, 3).map((feature, idx) => (
                                <span key={idx} className="text-xs px-3 py-1 bg-zinc-800 text-gray-300 rounded-full border border-zinc-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Book Button */}
                          <div className="mt-auto">
                              <button
                                  onClick={() => onBusClick(bus)}
                                  className="relative w-full py-4 sm:py-5 min-h-[56px] bg-gradient-to-r from-purple-600 to-yellow-400 text-white font-black uppercase tracking-widest hover:shadow-2xl hover:shadow-purple-600/50 transition-all duration-300 rounded-lg text-sm sm:text-base overflow-hidden group/btn"
                              >
                                  <span className="absolute inset-0 bg-black opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></span>
                                  <span className="relative flex items-center justify-center gap-2">
                                    Book This Bus
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                  </span>
                              </button>
                          </div>
                      </div>

                      {/* Bottom Decorative Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-purple-400 to-yellow-400"></div>
                    </div>
                  </div>

                  {/* Corner Accent Brackets - Outside Card */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 border-l-3 border-t-3 border-yellow-400 opacity-60"></div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 border-r-3 border-t-3 border-purple-500 opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 border-l-3 border-b-3 border-purple-500 opacity-60"></div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 border-r-3 border-b-3 border-yellow-400 opacity-60"></div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusFleet;