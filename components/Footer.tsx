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
    <footer className="bg-black pt-24 pb-12 px-6 text-gray-400 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5">
          <img 
            src={LOGO_URL} 
            alt={`${BRAND_NAME} Logo`} 
            className="h-16 w-auto mb-6 object-contain"
          />
          <p className="max-w-xs font-medium leading-relaxed mb-6">
            South Louisiana's premier party bus rental service. 
            Loud music. Good vibes. Unforgettable times.
          </p>
          <div className="flex gap-4">
            {/* Social Placeholders */}
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors cursor-pointer">FB</div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors cursor-pointer">IG</div>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
          <ul className="space-y-4 font-medium">
            <li><a href="#fleet" onClick={(e) => onLinkClick(e, 'fleet')} className="hover:text-[#39FF14] transition-colors">Our Fleet</a></li>
            <li><a href="#how-it-works" onClick={(e) => onLinkClick(e, 'how-it-works')} className="hover:text-[#39FF14] transition-colors">How It Works</a></li>
            <li><a href="#events" onClick={(e) => onLinkClick(e, 'events')} className="hover:text-[#39FF14] transition-colors">Events</a></li>
            <li><a href="#faq" onClick={(e) => onLinkClick(e, 'faq')} className="hover:text-[#39FF14] transition-colors">FAQ</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-4">
          <h4 className="font-bold text-white mb-6 tracking-wide text-sm uppercase">Contact Us</h4>
          <p className="mb-2">Serving All Of Southern Louisiana</p>
          <a href="tel:+19853339762" className="mb-2 text-xl text-white font-bold hover:text-[#FF6B00] transition-colors block">
            +1 985-333-9762
          </a>
          <a href="mailto:partyonwheelspow@gmail.com" className="text-sm hover:text-[#39FF14] transition-colors">
            partyonwheelspow@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-gray-800">
        <div className="flex flex-col items-center gap-2 text-sm text-center">
          <p className="text-gray-400">
            Serving All Of Southern Louisiana - <a href="tel:+19853339762" className="text-white hover:text-[#FF6B00] transition-colors font-bold">+1 985-333-9762</a> - <a href="mailto:partyonwheelspow@gmail.com" className="hover:text-[#39FF14] transition-colors">partyonwheelspow@gmail.com</a>
          </p>
          <p className="text-gray-500">
            Website Developed By <a href="https://zeromotionmarketing.com" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-[#FF6B00] transition-colors">ZeroMotion Marketing</a> &copy; 2025 Party On Wheels Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;