/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const SocialProofBar: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F0A1F] via-[#1A1425] to-[#0F0A1F] py-3 sm:py-4 px-4 border-y border-purple-500/20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-wrap">
          {/* Trust Badges - Mobile Optimized */}
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors min-h-[44px]">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#39FF14] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base font-medium">Secure Booking</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors min-h-[44px]">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#39FF14] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base font-medium">Professional Service</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 hover:text-white transition-colors min-h-[44px]">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#39FF14] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="text-xs sm:text-sm md:text-base font-medium">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;

