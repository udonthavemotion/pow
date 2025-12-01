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
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  // Service menu embed code
  const SERVICE_MENU_EMBED = `<iframe src="https://app.partyonwheelspow.com/widget/service-menu/690255e04359bf2cbf1cbad6" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="690255e04359bf2cbf1cbad6_1764628435392"></iframe><br><script src="https://app.partyonwheelspow.com/js/form_embed.js" type="text/javascript"></script>`;

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Check if this is a "Book Now" button by checking href and text content
    const linkText = e.currentTarget.textContent?.toLowerCase() || '';
    const href = e.currentTarget.getAttribute('href') || '';
    
    // If clicking "Book Now" or "Book A Ride" button (targetId is 'fleet'), show service menu
    if (targetId === 'fleet' && (linkText.includes('book') || href === '#fleet')) {
      // Only show service menu if it's explicitly a booking button, not just a fleet link
      // Check if parent has booking-related classes or if it's from navbar Book Now button
      const parent = e.currentTarget.closest('nav');
      if (parent || linkText.includes('book')) {
        setShowServiceMenu(true);
        document.body.style.overflow = 'hidden';
        return;
      }
    }
    
    scrollToSection(targetId);
  };
  
  // Handler specifically for opening service menu
  const handleOpenServiceMenu = () => {
    setShowServiceMenu(true);
    document.body.style.overflow = 'hidden';
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
    setShowServiceMenu(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar onNavClick={handleNavClick} onBookNow={handleOpenServiceMenu} />
      
      <main>
        <Hero onBookNow={() => {
          setShowServiceMenu(true);
          document.body.style.overflow = 'hidden';
        }} />
        <BusFleet onBusClick={handleBusClick} />
        <HowItWorks />
        <Events />
        <About />
        <Testimonials />
        <FAQ />
      </main>

      <Footer onLinkClick={handleNavClick} />
      
      {(selectedBus || showServiceMenu) && (
        <BookingModal 
          bus={selectedBus} 
          serviceMenuEmbedCode={showServiceMenu ? SERVICE_MENU_EMBED : undefined}
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;