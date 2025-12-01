/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { EVENTS } from '../constants';

const Events: React.FC = () => {
  return (
    <section id="events" className="bg-gray-100 py-32 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-gray-300 pb-8">
            <div className="max-w-2xl">
                <span className="block text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-4">What We Do</span>
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 font-['Bebas_Neue'] uppercase">
                    We Roll For <br/> Any Occasion
                </h2>
            </div>
            <div className="hidden md:block pb-2">
                <span className="text-gray-500 font-bold tracking-widest uppercase">Serving South Louisiana</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((event) => (
                <div key={event.id} className="group relative h-[500px] overflow-hidden rounded-2xl cursor-default">
                    {/* Background Image */}
                    <img 
                        src={event.image} 
                        alt={event.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-50"
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="text-[#39FF14] font-bold uppercase tracking-wider text-sm mb-2 block">{event.subtitle}</span>
                            <h3 className="text-4xl font-black uppercase mb-4 font-['Bebas_Neue'] leading-none">{event.title}</h3>
                            <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-2xl font-bold text-gray-800 mb-6 uppercase">Got a crazy idea? We can handle it.</p>
            <a href="#fleet" className="inline-block border-b-4 border-[#FF6B00] text-3xl font-black text-gray-900 uppercase hover:text-[#FF6B00] transition-colors">
                Book Your Custom Ride
            </a>
        </div>
      </div>
    </section>
  );
};

export default Events;