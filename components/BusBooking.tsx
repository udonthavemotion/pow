/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Bus } from '../types';

interface BusBookingProps {
  bus: Bus;
  onBack: () => void;
}

const BusBooking: React.FC<BusBookingProps> = ({ bus, onBack }) => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fade-in-up">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Fleet
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left: Info & Specs */}
          <div>
             <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-2 uppercase font-['Bebas_Neue']">{bus.name}</h1>
             <p className="text-2xl text-[#FF6B00] font-bold mb-8">{bus.tagline}</p>

             <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-lg">
                <img 
                  src={bus.imageUrl} 
                  alt={bus.name} 
                  className="w-full h-full object-cover"
                />
             </div>
             
             <div className="prose prose-lg text-gray-600 mb-8">
               <p>{bus.description}</p>
             </div>

             <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold uppercase mb-6 text-gray-900">Bus Specs</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-[#39FF14] rounded-full"></span>
                        Capacity: {bus.capacity} Guests
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-[#39FF14] rounded-full"></span>
                        Rate: ${bus.hourlyRate}/hr
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-[#39FF14] rounded-full"></span>
                        Min Time: {bus.minHours} Hours
                    </li>
                    {bus.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
                            {feat}
                        </li>
                    ))}
                </ul>
             </div>
          </div>

          {/* Right: Booking Calendar (GHL) */}
          <div className="bg-white rounded-xl shadow-2xl border-t-8 border-[#FF6B00] overflow-hidden flex flex-col">
             <div className="p-8 bg-gray-900 text-white text-center">
                <h2 className="text-3xl font-bold uppercase tracking-wide">Book {bus.name}</h2>
                <p className="text-gray-400 mt-2 text-sm">Select your date and time below to lock in your ride.</p>
             </div>
             
             <div className="flex-1 bg-white min-h-[600px] relative">
                {bus.calendarEmbedCode ? (
                    <div 
                        className="w-full h-full"
                        dangerouslySetInnerHTML={{ __html: bus.calendarEmbedCode }} 
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <p className="font-bold text-gray-900">Calendar Coming Soon</p>
                        <p className="text-sm">Please call to book: 985-555-0123</p>
                    </div>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusBooking;