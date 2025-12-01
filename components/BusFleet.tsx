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
    <section id="fleet" className="py-24 px-6 md:px-12 bg-white relative">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-lg">Choose Your Ride</span>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue']">THE FLEET</h2>
          <div className="w-24 h-2 bg-[#39FF14] mt-4"></div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {BUSES.map(bus => (
            <div 
                key={bus.id} 
                className="group cursor-pointer flex flex-col bg-gray-50 border border-gray-100 shadow-xl hover:shadow-2xl hover:shadow-[#FF6B00]/20 transition-all duration-500 rounded-xl overflow-hidden"
                onClick={() => onBusClick(bus)}
            >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                    <img 
                      src={bus.imageUrl} 
                      alt={bus.name} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-[#39FF14] text-black font-bold px-4 py-2 rounded-lg text-sm uppercase tracking-wide">
                        {bus.capacity} Passengers
                    </div>
                </div>
                
                {/* Details */}
                <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-4xl font-bold text-gray-900 uppercase font-['Bebas_Neue']">{bus.name}</h3>
                        <span className="text-xl font-bold text-[#FF6B00]">${bus.hourlyRate}/hr</span>
                    </div>
                    
                    <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4">{bus.tagline}</p>
                    <p className="text-gray-600 mb-8 line-clamp-2">{bus.description}</p>
                    
                    <div className="mt-auto">
                        <button 
                            onClick={() => onBusClick(bus)}
                            className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-[#FF6B00] transition-colors rounded-lg"
                        >
                            Book This Bus
                        </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusFleet;