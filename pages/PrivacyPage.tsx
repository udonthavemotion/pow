/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PrivacySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

/**
 * PrivacyPage - Enhanced Privacy Policy page
 *
 * Features:
 * - Expandable/collapsible sections for better readability
 * - Cookie consent notice at top
 * - Clear opt-out instructions highlighted
 * - Contact info for privacy inquiries
 * - Smooth animations and transitions
 * - Print-friendly styling
 * - WCAG 2.1 AA compliant
 *
 * @returns {JSX.Element} Privacy Policy page layout
 */
function PrivacyPage() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['information']));
  const [isVisible, setIsVisible] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(true);

  const lastUpdated = 'March 7, 2026';

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Navigation handled by React Router
  };

  const handleBookNow = () => {
    window.location.href = '/#fleet';
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const allIds = privacySections.map(s => s.id);
    setExpandedSections(new Set(allIds));
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  const privacySections: PrivacySection[] = [
    {
      id: 'information',
      title: '1. Information We Collect',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We collect information that you provide directly to us when making a booking or contacting us. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and billing address</li>
            <li><strong>Payment Information:</strong> Credit card details (processed securely through our payment processor)</li>
            <li><strong>Event Details:</strong> Date, time, location, number of passengers, and special requests</li>
            <li><strong>Communication Data:</strong> Messages, emails, and call records with our team</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            We also automatically collect certain information about your device when you visit our website:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on our site</li>
            <li>Referring website and search terms used</li>
            <li>Device information (operating system, screen size, etc.)</li>
          </ul>
        </>
      )
    },
    {
      id: 'use',
      title: '2. How We Use Your Information',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Service Delivery:</strong> Process bookings, coordinate pickups and drop-offs, and provide customer support</li>
            <li><strong>Payment Processing:</strong> Charge for services rendered and handle refunds when applicable</li>
            <li><strong>Communication:</strong> Send booking confirmations, updates, reminders, and respond to inquiries</li>
            <li><strong>Marketing:</strong> Send promotional emails about special offers and new services (with your consent)</li>
            <li><strong>Website Improvement:</strong> Analyze usage patterns to enhance user experience and functionality</li>
            <li><strong>Legal Compliance:</strong> Meet regulatory requirements and protect our legal rights</li>
            <li><strong>Safety and Security:</strong> Prevent fraud, abuse, and ensure passenger safety</li>
          </ul>
        </>
      )
    },
    {
      id: 'sharing',
      title: '3. Information Sharing and Disclosure',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Service Providers:</strong> Payment processors, booking system providers, and email service platforms that help us operate our business</li>
            <li><strong>Drivers and Staff:</strong> Necessary information to coordinate your rental (name, phone, pickup/drop-off details)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of our business assets</li>
            <li><strong>Protection of Rights:</strong> To protect the safety, property, or rights of Party On Wheels, our customers, or the public</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            All third-party service providers are contractually required to protect your information and use it only for the purposes we specify.
          </p>
        </>
      )
    },
    {
      id: 'cookies',
      title: '4. Cookies and Tracking Technologies',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-bold text-yellow-900 mb-1">Cookie Notice</h4>
                <p className="text-sm text-yellow-800">
                  By using our website, you consent to our use of cookies. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Types of cookies we use:</strong>
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality (login, booking system, security)</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site (Google Analytics)</li>
            <li><strong>Marketing Cookies:</strong> Track conversions and ad performance</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">How to Disable Cookies</h4>
            <p className="text-sm text-blue-800 mb-2">
              You can control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 text-sm text-blue-800 space-y-1">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Preferences → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
            </ul>
            <p className="text-sm text-blue-800 mt-2">
              Note: Disabling cookies may affect website functionality.
            </p>
          </div>
        </>
      )
    },
    {
      id: 'security',
      title: '5. Data Security',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure payment processing through PCI-compliant providers</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls limiting employee access to personal data</li>
            <li>Secure data storage with encrypted backups</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </>
      )
    },
    {
      id: 'rights',
      title: '6. Your Privacy Rights',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have the following rights regarding your personal information:
          </p>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4 rounded-r-lg">
            <h4 className="font-bold text-green-900 mb-2">Your Rights:</h4>
            <ul className="list-disc pl-6 text-green-800 space-y-2 text-sm">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong>Object:</strong> Object to processing of your information for certain purposes</li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            To exercise any of these rights, please contact us using the information provided at the end of this policy.
          </p>

          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h4 className="font-bold text-orange-900 mb-2">Opt-Out Instructions</h4>
            <p className="text-sm text-orange-800 mb-2">
              <strong>Marketing Emails:</strong> Click the "Unsubscribe" link at the bottom of any marketing email, or email us at{' '}
              <a href="mailto:getpartyonwheels@gmail.com" className="text-[#FF6B00] hover:text-[#e56000] font-semibold underline">
                getpartyonwheels@gmail.com
              </a>
            </p>
            <p className="text-sm text-orange-800">
              <strong>Analytics:</strong> Use browser settings or opt-out tools like{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:text-[#e56000] font-semibold underline">
                Google Analytics Opt-out Browser Add-on
              </a>
            </p>
          </div>
        </>
      )
    },
    {
      id: 'retention',
      title: '7. Data Retention',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Booking Records:</strong> Retained for 7 years for accounting and legal compliance</li>
            <li><strong>Payment Information:</strong> Tokenized and retained only as long as necessary for transaction processing</li>
            <li><strong>Marketing Contacts:</strong> Retained until you opt out or request deletion</li>
            <li><strong>Website Analytics:</strong> Aggregated data retained indefinitely; individual data retained for 26 months</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            When personal information is no longer needed, we securely delete or anonymize it.
          </p>
        </>
      )
    },
    {
      id: 'children',
      title: '8. Children\'s Privacy',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
          </p>
        </>
      )
    },
    {
      id: 'changes',
      title: '9. Changes to This Policy',
      content: (
        <>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            When we make significant changes, we will:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Update the "Last Updated" date at the top of this policy</li>
            <li>Notify you via email if you have an account with us</li>
            <li>Post a notice on our website homepage</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Your continued use of our services after any changes constitutes acceptance of the updated policy.
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col">
      <Navbar
        onNavClick={handleNavClick}
        onBookNow={handleBookNow}
        onBookNowHover={() => {}}
      />

      {/* Cookie Consent Banner */}
      {showCookieNotice && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] text-white p-4 shadow-2xl border-t-4 border-[#FF6B00]">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm sm:text-base">
                We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our site, you consent to our use of cookies.{' '}
                <a href="#cookies" onClick={() => toggleSection('cookies')} className="text-[#b9ff66] hover:text-[#a3e652] font-semibold underline">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCookieNotice(false)}
                className="px-6 py-2 bg-[#FF6B00] text-white rounded-lg font-semibold hover:bg-[#e56000] transition-colors whitespace-nowrap"
              >
                Accept
              </button>
              <button
                onClick={() => setShowCookieNotice(false)}
                className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors whitespace-nowrap"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1a1a1a] leading-tight mb-4 font-['Bebas_Neue'] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: <time dateTime="2026-03-07">{lastUpdated}</time>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Expand/Collapse Controls */}
            <div className={`flex justify-end gap-3 mb-6 transition-all duration-1000 ease-out delay-100 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <button
                onClick={expandAll}
                className="px-4 py-2 text-sm font-semibold text-[#FF6B00] hover:text-[#e56000] transition-colors"
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors"
              >
                Collapse All
              </button>
            </div>

            {/* Privacy Sections - Expandable */}
            <div className={`space-y-4 transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              {privacySections.map((section) => {
                const isExpanded = expandedSections.has(section.id);

                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow scroll-mt-24"
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      aria-expanded={isExpanded}
                    >
                      <h2 className="text-xl font-bold text-[#1a1a1a]">
                        {section.title}
                      </h2>
                      <svg
                        className={`w-6 h-6 text-[#FF6B00] transition-transform duration-300 flex-shrink-0 ml-4 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      style={{ overflow: isExpanded ? 'visible' : 'hidden' }}
                    >
                      <div className="px-6 py-4 border-t border-gray-200">
                        {section.content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Contact for Privacy Inquiries */}
            <div className={`mt-12 bg-gradient-to-br from-[#FF6B00]/10 to-[#b9ff66]/10 border-2 border-[#FF6B00] rounded-lg p-8 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <h2 className="text-2xl font-bold mb-4 text-[#1a1a1a] font-['Bebas_Neue'] tracking-wide">
                Privacy Questions?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Privacy Contact:</strong>
                </p>
                <p className="text-gray-700">
                  Email:{' '}
                  <a
                    href="mailto:getpartyonwheels@gmail.com"
                    className="text-[#FF6B00] hover:text-[#e56000] font-semibold"
                  >
                    getpartyonwheels@gmail.com
                  </a>
                </p>
                <p className="text-gray-700">
                  Phone:{' '}
                  <a
                    href="tel:+19858561860"
                    className="text-[#FF6B00] hover:text-[#e56000] font-semibold"
                  >
                    +1 985-856-1860
                  </a>
                </p>
                <p className="text-gray-700">
                  General Email:{' '}
                  <a
                    href="mailto:getpartyonwheels@gmail.com"
                    className="text-[#FF6B00] hover:text-[#e56000] font-semibold"
                  >
                    getpartyonwheels@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e56000] transition-all duration-300 shadow-lg hover:shadow-xl min-h-[56px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer onLinkClick={handleNavClick} />
    </div>
  );
}

export default PrivacyPage;
