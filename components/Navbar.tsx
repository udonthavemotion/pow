/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME, LOGO_URL } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  onBookNow?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  // Logic for navbar style: Transparent on top (hero), Glassmorphism when scrolled
  const navClasses = scrolled || mobileMenuOpen
    ? 'bg-black/60 backdrop-blur-xl py-3 shadow-lg border-b border-purple-500/50'
    : 'bg-black/40 backdrop-blur-sm py-6 border-b border-purple-400/20';

  const textClasses = scrolled || mobileMenuOpen
    ? 'text-white'
    : 'text-white';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navClasses}`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); 
            }}
            className="z-50 relative flex items-center gap-2"
          >
            {/* Logo Image */}
            <img 
                src={LOGO_URL} 
                alt={`${BRAND_NAME} Logo`} 
                className={`h-12 md:h-16 w-auto object-contain transition-opacity duration-300 ${scrolled || mobileMenuOpen ? 'opacity-100' : 'opacity-100'}`}
            />
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-lg font-bold tracking-wider uppercase ${textClasses}`}>
            <a href="#fleet" onClick={(e) => handleLinkClick(e, 'fleet')} className="hover:text-yellow-400 transition-colors">The Fleet</a>
            <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="hover:text-yellow-400 transition-colors">How It Works</a>
            <a href="#events" onClick={(e) => handleLinkClick(e, 'events')} className="hover:text-yellow-400 transition-colors">Events</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-yellow-400 transition-colors">FAQ</a>
          </div>

          {/* Right Actions (Mobile Toggle) */}
          <div className={`flex items-center gap-3 md:gap-6 z-50 relative ${textClasses}`}>
            <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBookNow) {
                    onBookNow();
                  } else {
                    handleLinkClick(e, 'fleet');
                  }
                }}
                className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all -skew-x-12"
            >
                <span className="skew-x-12 inline-block">Book Now</span>
            </a>

            <button
              className={`block md:hidden focus:outline-none transition-colors duration-500 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-white">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Luxury Glassmorphism */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-4 sm:space-y-6 text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-white uppercase px-4 sm:px-6 w-full max-w-sm">
            <a href="#fleet" onClick={(e) => handleLinkClick(e, 'fleet')} className="hover:text-yellow-400 transition-colors py-4 min-h-[56px] flex items-center justify-center w-full text-center">Our Buses</a>
            <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="hover:text-yellow-400 transition-colors py-4 min-h-[56px] flex items-center justify-center w-full text-center">How It Works</a>
            <a href="#events" onClick={(e) => handleLinkClick(e, 'events')} className="hover:text-yellow-400 transition-colors py-4 min-h-[56px] flex items-center justify-center w-full text-center">Events</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-yellow-400 transition-colors py-4 min-h-[56px] flex items-center justify-center w-full text-center">FAQ</a>
            <a
                href="#fleet"
                onClick={(e) => {
                  e.preventDefault();
                  if (onBookNow) {
                    onBookNow();
                  } else {
                    handleLinkClick(e, 'fleet');
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl mt-4 sm:mt-8 -skew-x-12 min-h-[56px] flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all w-full"
            >
                <span className="skew-x-12 inline-block">Book A Ride</span>
            </a>
          </div>
      </div>
    </>
  );
};

export default Navbar;