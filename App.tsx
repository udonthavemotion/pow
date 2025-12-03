/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ReadyToPartyBanner from './components/ReadyToPartyBanner';
import ContactCTA from './components/ContactCTA';
import CTASection from './components/CTASection';
import HowItWorks from './components/HowItWorks';
import ErrorBoundary from './components/ErrorBoundary';
import { BusLoadingAnimation } from './components/BusLoadingAnimation';
import { Bus } from './types';

// Lazy load heavy components for better performance
const BusFleet = lazy(() => import('./components/BusFleet'));
const About = lazy(() => import('./components/About'));
const Events = lazy(() => import('./components/Events'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const BookingModal = lazy(() => import('./components/BookingModal'));

function App() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  // Service menu embed code
  const SERVICE_MENU_EMBED = `<iframe src="https://app.partyonwheelspow.com/widget/service-menu/690255e04359bf2cbf1cbad6" style="width: 100%; border:none; overflow:hidden;" scrolling="no" id="690255e04359bf2cbf1cbad6_1764689368370"></iframe><br><script src="https://app.partyonwheelspow.com/js/form_embed.js" type="text/javascript"></script>`;

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
    <ErrorBoundary>
      <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
        <Navbar onNavClick={handleNavClick} onBookNow={handleOpenServiceMenu} />

        <main>
          <Hero
            onBookNow={() => {
              setShowServiceMenu(true);
              document.body.style.overflow = 'hidden';
            }}
          />

          {/* Lazy loaded components with loading fallback */}
          <Suspense
            fallback={
              <div className="min-h-[400px] flex items-center justify-center">
                <BusLoadingAnimation text="Loading our fleet..." />
              </div>
            }
          >
            <BusFleet onBusClick={handleBusClick} />
          </Suspense>

          <CTASection
            title="Ready to book your ride?"
            subtitle="Questions? We're here to help!"
            onBookNow={handleOpenServiceMenu}
          />

          <HowItWorks />

          <Suspense
            fallback={
              <div className="min-h-[300px] flex items-center justify-center">
                <BusLoadingAnimation text="Loading events..." size="sm" />
              </div>
            }
          >
            <Events />
          </Suspense>

          <ReadyToPartyBanner onBookNow={handleOpenServiceMenu} />

          <Suspense
            fallback={
              <div className="min-h-[300px] flex items-center justify-center">
                <BusLoadingAnimation text="Loading about..." size="sm" />
              </div>
            }
          >
            <About />
          </Suspense>

          <Suspense
            fallback={
              <div className="min-h-[300px] flex items-center justify-center">
                <BusLoadingAnimation text="Loading testimonials..." size="sm" />
              </div>
            }
          >
            <Testimonials />
          </Suspense>

          <Suspense
            fallback={
              <div className="min-h-[300px] flex items-center justify-center">
                <BusLoadingAnimation text="Loading FAQ..." size="sm" />
              </div>
            }
          >
            <FAQ />
          </Suspense>

          <ContactCTA onBookNow={handleOpenServiceMenu} />
        </main>

        <Footer onLinkClick={handleNavClick} />

        {(selectedBus || showServiceMenu) && (
          <Suspense
            fallback={
              <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
                <BusLoadingAnimation text="Opening booking..." />
              </div>
            }
          >
            <BookingModal
              bus={selectedBus}
              serviceMenuEmbedCode={showServiceMenu ? SERVICE_MENU_EMBED : undefined}
              onClose={handleCloseModal}
            />
          </Suspense>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;