/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load page components for optimal performance
const HomePage = lazy(() => import('./components/HomePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * Loading fallback component for Suspense boundaries
 * Provides a minimal loading state while route components are being loaded
 */
const PageLoadingFallback = () => (
  <div className="min-h-screen bg-white flex items-center justify-center" role="status" aria-live="polite">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="progressbar">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
);

/**
 * App - Main application component with React Router setup
 *
 * Implements client-side routing with lazy loading for optimal performance.
 * All route components are code-split and loaded on demand.
 *
 * Routes:
 * - / : HomePage (main landing page with all sections)
 * - /contact : Contact page
 * - /terms : Terms of Service page
 * - /privacy : Privacy Policy page
 * - * : NotFound (404) page
 *
 * @returns {JSX.Element} The application with routing configuration
 */
function App() {
  return (
    <Suspense fallback={<PageLoadingFallback />}>
      <Routes>
        {/* Homepage route - contains Hero, BusFleet, Events, About, etc. */}
        <Route path="/" element={<HomePage />} />

        {/* Static pages */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* 404 fallback - real Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
