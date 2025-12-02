/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { BRAND_NAME, LOGO_URL } from '../constants';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  return (
    <footer className="bg-gradient-to-b from-[#0F0A1F] via-[#1A1425] to-black pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 text-gray-400 border-t border-purple-500/30 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 relative z-10">

        <div className="md:col-span-5">
          <img
            src={LOGO_URL}
            alt={`${BRAND_NAME} Logo`}
            className="h-14 sm:h-16 w-auto mb-5 sm:mb-6 object-contain"
          />
          <p className="max-w-xs font-medium leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
            South Louisiana's premier party bus rental service.
            Loud music. Good vibes. Unforgettable times.
          </p>
          <div className="flex gap-3 sm:gap-4 items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61579938620708&sk=photos"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/50"
              aria-label="Visit Party On Wheels on Facebook"
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <span className="text-gray-500 text-xs sm:text-sm font-medium">Follow Us</span>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-white mb-5 sm:mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 font-medium text-sm sm:text-base">
            <li><a href="#fleet" onClick={(e) => onLinkClick(e, 'fleet')} className="hover:text-yellow-400 transition-colors inline-block py-2 min-h-[48px] flex items-center">Our Fleet</a></li>
            <li><a href="#how-it-works" onClick={(e) => onLinkClick(e, 'how-it-works')} className="hover:text-yellow-400 transition-colors inline-block py-2 min-h-[48px] flex items-center">How It Works</a></li>
            <li><a href="#events" onClick={(e) => onLinkClick(e, 'events')} className="hover:text-yellow-400 transition-colors inline-block py-2 min-h-[48px] flex items-center">Events</a></li>
            <li><a href="#faq" onClick={(e) => onLinkClick(e, 'faq')} className="hover:text-yellow-400 transition-colors inline-block py-2 min-h-[48px] flex items-center">FAQ</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-5 sm:mb-6 tracking-wide text-sm uppercase">Contact Us</h4>
          <p className="mb-3 sm:mb-2 text-sm sm:text-base">Serving All Of Southern Louisiana</p>
          <a href="tel:+19853339762" className="mb-3 sm:mb-2 text-base sm:text-lg md:text-xl text-white font-bold hover:text-yellow-400 transition-colors block py-2 min-h-[48px] flex items-center">
            +1 985-333-9762
          </a>
          <a href="mailto:partyonwheelspow@gmail.com" className="text-sm hover:text-yellow-400 transition-colors inline-block py-2 min-h-[48px] flex items-center break-all">
            partyonwheelspow@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-purple-500/30 relative z-10">
        <div className="flex flex-col items-center gap-3 sm:gap-2 text-xs sm:text-sm text-center px-4">
          <p className="text-gray-400">
            Serving All Of Southern Louisiana - <a href="tel:+19853339762" className="text-white hover:text-yellow-400 transition-colors font-bold">+1 985-333-9762</a> - <a href="mailto:partyonwheelspow@gmail.com" className="hover:text-yellow-400 transition-colors">partyonwheelspow@gmail.com</a>
          </p>
          <p className="text-gray-500">
            Website Developed By <a href="https://zeromotionmarketing.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-yellow-400 transition-colors">ZeroMotion Marketing</a> &copy; 2025 Party On Wheels Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;