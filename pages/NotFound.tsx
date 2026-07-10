/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NotFound() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // No-op: nav links on this page just use normal client-side routing
  };

  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Page Not Found | Party On Wheels';
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col">
      <Navbar onNavClick={handleNavClick} />
      <main className="flex-grow flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[#FF6B00] font-bold tracking-[0.3em] uppercase mb-4">404</p>
          <h1 className="text-4xl sm:text-5xl font-black font-['Bebas_Neue'] tracking-tight mb-4">
            PAGE NOT FOUND
          </h1>
          <p className="text-gray-600 mb-8">
            That page doesn't exist. Head back home or call us to book your ride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#FF6B00] text-white px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#e56000] transition-colors -skew-x-12 inline-flex items-center justify-center"
            >
              <span className="skew-x-12 inline-block">Back to Home</span>
            </Link>
            <a
              href="tel:+19858561860"
              className="border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors -skew-x-12 inline-flex items-center justify-center"
            >
              <span className="skew-x-12 inline-block">Call (985) 856-1860</span>
            </a>
          </div>
        </div>
      </main>
      <Footer onLinkClick={handleNavClick} />
    </div>
  );
}

export default NotFound;
