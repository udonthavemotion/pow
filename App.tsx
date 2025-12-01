/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusFleet from './components/BusFleet';
import About from './components/About';
import Events from './components/Events';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Bus } from './types';

function App() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
  };

  const scrollToSection = (targetId: string) => {
    if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleBusClick = (bus: Bus) => {
    setSelectedBus(bus);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBus(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar onNavClick={handleNavClick} />
      
      <main>
        <Hero />
        <BusFleet onBusClick={handleBusClick} />
        <HowItWorks />
        <Events />
        <About />
        <Testimonials />
        <FAQ />
      </main>

      <Footer onLinkClick={handleNavClick} />
      
      {selectedBus && (
        <BookingModal bus={selectedBus} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;