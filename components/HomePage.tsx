/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BusFleet from './BusFleet';
import Events from './Events';
import Footer from './Footer';
import { Bus } from '../types';

const BookingModal = lazy(() => import('./BookingModal'));
const HowItWorks = lazy(() => import('./HowItWorks'));
const About = lazy(() => import('./About'));
const Testimonials = lazy(() => import('./Testimonials'));
const FAQ = lazy(() => import('./FAQ'));

// Service menu embed code - ZeroMotion Marketing main calendar showing all buses (hoisted for perf)
// Updated to use new rental embed code for entire party bus fleet
const SERVICE_MENU_EMBED = `<iframe src="https://link.zeromotionmarketing.com/rentals/party-on-wheels-/rc/69a757a0e50c3b2fb71142cd?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69a757a0e50c3b2fb71142cd_1772651519600"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`;

/**
 * HomePage - Main landing page component containing all homepage sections
 *
 * Contains Hero, BusFleet, HowItWorks, Events, About, Testimonials, FAQ, and Footer sections.
 * Manages booking modal state for bus bookings and the full-fleet service menu.
 *
 * @returns {JSX.Element} The complete homepage layout
 */
function HomePage() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showServiceMenu, setShowServiceMenu] = useState(false);

  const preloadBookingModal = useCallback(() => {
    void import('./BookingModal');
  }, []);

  const handleOpenServiceMenu = useCallback(() => {
    setShowServiceMenu(true);
    document.body.classList.add('modal-open');
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedBus(null);
    setShowServiceMenu(false);
    document.body.classList.remove('modal-open');
  }, []);

  const scrollToSection = useCallback((targetId: string) => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const linkText = e.currentTarget.textContent?.toLowerCase() || '';
    const href = e.currentTarget.getAttribute('href') || '';

    // Handle fleet/bus booking
    if (targetId === 'fleet' && (linkText.includes('book') || href === '#fleet')) {
      const parent = e.currentTarget.closest('nav');
      if (parent || linkText.includes('book')) {
        setShowServiceMenu(true);
        document.body.classList.add('modal-open');
        return;
      }
    }
    scrollToSection(targetId);
  }, [scrollToSection]);

  const handleBusClick = useCallback((bus: Bus) => {
    setSelectedBus(bus);
    document.body.classList.add('modal-open');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a]">
      <Navbar onNavClick={handleNavClick} onBookNow={handleOpenServiceMenu} onBookNowHover={preloadBookingModal} />

      <main>
        <Hero onBookNow={handleOpenServiceMenu} onBookNowHover={preloadBookingModal} />
        <BusFleet onBusClick={handleBusClick} onCardHover={preloadBookingModal} />
        <Suspense fallback={<div className="min-h-[400px]" aria-hidden />}>
          <HowItWorks />
        </Suspense>
        <Events onBookNow={handleOpenServiceMenu} onBookNowHover={preloadBookingModal} />
        <Suspense fallback={<div className="min-h-[400px]" aria-hidden />}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px]" aria-hidden />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px]" aria-hidden />}>
          <FAQ />
        </Suspense>
      </main>

      <Footer onLinkClick={handleNavClick} />

      {(selectedBus || showServiceMenu) && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"><div className="text-white">Loading...</div></div>}>
          <BookingModal
            bus={selectedBus}
            serviceMenuEmbedCode={showServiceMenu ? SERVICE_MENU_EMBED : undefined}
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </div>
  );
}

export default HomePage;
