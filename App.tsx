/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useCallback, useRef, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusFleet from './components/BusFleet';
import Events from './components/Events';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import { Bus } from './types';

const HowItWorks = lazy(() => import('./components/HowItWorks'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

// Service menu embed code - ZeroMotion Marketing main calendar showing all buses (hoisted for perf)
const SERVICE_MENU_EMBED = `<iframe src="https://link.zeromotionmarketing.com/booking/partyonwheels/sc/69973c8861f69e3db6e9664f?heightMode=fixed&showHeader=true" style="width: 100%;border:none;overflow: hidden;" scrolling="no" id="69973c8861f69e3db6e9664f_1771570530498"></iframe><br><script src="https://link.zeromotionmarketing.com/js/form_embed.js" type="text/javascript"></script>`;

function App() {
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);
  const [showServiceMenu, setShowServiceMenu] = useState(false);
  const scrollYRef = useRef(0);

  const preloadBookingModal = useCallback(() => {
    void import('./components/BookingModal');
  }, []);

  const lockBodyScroll = useCallback(() => {
    scrollYRef.current = window.scrollY;
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
  }, []);

  const unlockBodyScroll = useCallback(() => {
    document.documentElement.classList.remove('modal-open');
    document.body.classList.remove('modal-open');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    window.scrollTo(0, scrollYRef.current);
  }, []);

  const handleOpenServiceMenu = useCallback(() => {
    setShowServiceMenu(true);
    lockBodyScroll();
  }, [lockBodyScroll]);

  const handleCloseModal = useCallback(() => {
    setSelectedBus(null);
    setShowServiceMenu(false);
    unlockBodyScroll();
  }, [unlockBodyScroll]);

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
    if (targetId === 'fleet' && (linkText.includes('book') || href === '#fleet')) {
      const parent = e.currentTarget.closest('nav');
      if (parent || linkText.includes('book')) {
        setShowServiceMenu(true);
        lockBodyScroll();
        return;
      }
    }
    scrollToSection(targetId);
  }, [scrollToSection, lockBodyScroll]);

  const handleBusClick = useCallback((bus: Bus) => {
    setSelectedBus(bus);
    lockBodyScroll();
  }, [lockBodyScroll]);

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