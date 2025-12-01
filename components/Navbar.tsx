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

  // Logic for navbar style: Transparent on top (hero), White when scrolled
  const navClasses = scrolled || mobileMenuOpen 
    ? 'bg-white py-3 shadow-md border-b border-orange-500' 
    : 'bg-black/40 backdrop-blur-sm py-6 border-b border-white/10';

  const textClasses = scrolled || mobileMenuOpen
    ? 'text-gray-900'
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
            <a href="#fleet" onClick={(e) => handleLinkClick(e, 'fleet')} className="hover:text-[#FF6B00] transition-colors">The Fleet</a>
            <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="hover:text-[#FF6B00] transition-colors">How It Works</a>
            <a href="#events" onClick={(e) => handleLinkClick(e, 'events')} className="hover:text-[#FF6B00] transition-colors">Events</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-[#FF6B00] transition-colors">FAQ</a>
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
                className="hidden md:inline-block bg-[#FF6B00] text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#e56000] transition-colors -skew-x-12"
            >
                <span className="skew-x-12 inline-block">Book Now</span>
            </a>

            <button
              className={`block md:hidden focus:outline-none transition-colors duration-500 p-2`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10 text-black">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-6 text-3xl sm:text-4xl font-bold font-serif text-gray-900 uppercase px-6">
            <a href="#fleet" onClick={(e) => handleLinkClick(e, 'fleet')} className="hover:text-[#FF6B00] transition-colors py-3 min-h-[44px] flex items-center">Our Buses</a>
            <a href="#how-it-works" onClick={(e) => handleLinkClick(e, 'how-it-works')} className="hover:text-[#FF6B00] transition-colors py-3 min-h-[44px] flex items-center">How It Works</a>
            <a href="#events" onClick={(e) => handleLinkClick(e, 'events')} className="hover:text-[#FF6B00] transition-colors py-3 min-h-[44px] flex items-center">Events</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, 'faq')} className="hover:text-[#FF6B00] transition-colors py-3 min-h-[44px] flex items-center">FAQ</a>
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
                className="bg-[#FF6B00] text-white px-10 py-5 text-xl sm:text-2xl mt-8 -skew-x-12 min-h-[56px] flex items-center justify-center"
            >
                <span className="skew-x-12 inline-block">Book A Ride</span>
            </a>
          </div>
      </div>
    </>
  );
};

export default Navbar;