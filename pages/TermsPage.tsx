/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface TableOfContentsItem {
  id: string;
  title: string;
}

/**
 * TermsPage - Enhanced Terms of Service page
 *
 * Features:
 * - Clean, readable typography
 * - Sticky table of contents on desktop
 * - Section anchors for navigation
 * - Print-friendly styling
 * - Last updated date
 * - Proper heading hierarchy
 * - Smooth scroll behavior
 * - WCAG 2.1 AA compliant
 *
 * @returns {JSX.Element} Terms of Service page layout
 */
function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  const lastUpdated = 'March 7, 2026';

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'agreement', title: 'Agreement to Terms' },
    { id: 'booking', title: 'Booking and Reservations' },
    { id: 'payment', title: 'Payment Terms' },
    { id: 'cancellation', title: 'Cancellation Policy' },
    { id: 'responsibilities', title: 'User Responsibilities' },
    { id: 'conduct', title: 'Code of Conduct' },
    { id: 'damages', title: 'Damages and Fees' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'insurance', title: 'Insurance' },
    { id: 'modifications', title: 'Modifications to Service' },
    { id: 'contact', title: 'Contact Information' }
  ];

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Track active section for TOC highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = tableOfContents.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tableOfContents[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Navigation handled by React Router
  };

  const handleBookNow = () => {
    window.location.href = '/#fleet';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1a1a1a] flex flex-col">
      <Navbar
        onNavClick={handleNavClick}
        onBookNow={handleBookNow}
        onBookNowHover={() => {}}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
          <div className={`max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1a1a1a] leading-tight mb-4 font-['Bebas_Neue'] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Please read these terms carefully before using our party bus rental services.
            </p>
            <p className="text-sm text-gray-500">
              Last updated: <time dateTime="2026-03-07">{lastUpdated}</time>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

              {/* Sticky Table of Contents - Desktop Only */}
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <nav aria-label="Table of contents" className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h2 className="text-lg font-bold mb-4 text-[#1a1a1a] font-['Bebas_Neue'] tracking-wide">
                      Contents
                    </h2>
                    <ul className="space-y-2">
                      {tableOfContents.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className={`text-left w-full px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              activeSection === item.id
                                ? 'bg-[#FF6B00] text-white'
                                : 'text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* Print Button */}
                    <button
                      onClick={() => window.print()}
                      className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      Print
                    </button>
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <article className="lg:col-span-9">
                <div className={`prose prose-lg max-w-none transition-all duration-1000 ease-out delay-200 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>

                  {/* Section 1: Agreement to Terms */}
                  <section id="agreement" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      1. Agreement to Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By accessing and using Party On Wheels party bus rental services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Service.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms apply to all visitors, users, and others who access or use the Service. Your use of the Service constitutes your acceptance of these Terms.
                    </p>
                  </section>

                  {/* Section 2: Booking and Reservations */}
                  <section id="booking" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      2. Booking and Reservations
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All bookings are subject to availability and confirmation by Party On Wheels. A reservation is not confirmed until you receive written confirmation from us via email or phone.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Reservations can be made online, by phone, or through email</li>
                      <li>All bookings require accurate contact and payment information</li>
                      <li>We reserve the right to refuse service to anyone for any lawful reason</li>
                      <li>Minimum rental periods apply as specified for each vehicle</li>
                    </ul>
                  </section>

                  {/* Section 3: Payment Terms */}
                  <section id="payment" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      3. Payment Terms
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A deposit is required to secure your reservation. The deposit amount will be specified at the time of booking.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Deposits are non-refundable unless otherwise specified</li>
                      <li>Full payment is due before or upon pickup, unless other arrangements have been made</li>
                      <li>We accept credit cards, debit cards, and cash payments</li>
                      <li>Additional fees may apply for extended hours, route changes, or damages</li>
                      <li>Gratuity for the driver is not included but is appreciated</li>
                    </ul>
                  </section>

                  {/* Section 4: Cancellation Policy */}
                  <section id="cancellation" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      4. Cancellation Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Cancellations must be made in writing via email or through our online system.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li><strong>More than 30 days before event:</strong> Full refund minus deposit</li>
                      <li><strong>15-30 days before event:</strong> 50% refund</li>
                      <li><strong>Less than 15 days before event:</strong> No refund</li>
                      <li>Weather-related cancellations will be handled on a case-by-case basis</li>
                      <li>Party On Wheels reserves the right to cancel due to mechanical issues; full refunds will be provided</li>
                    </ul>
                  </section>

                  {/* Section 5: User Responsibilities */}
                  <section id="responsibilities" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      5. User Responsibilities
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      As a renter of our party bus services, you are responsible for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Ensuring all passengers follow safety guidelines and driver instructions</li>
                      <li>Maintaining the cleanliness of the vehicle during rental period</li>
                      <li>Preventing damage to the vehicle and its equipment</li>
                      <li>Ensuring all passengers are of legal drinking age if alcohol is present</li>
                      <li>Not exceeding the maximum passenger capacity</li>
                      <li>Following all local, state, and federal laws during the rental</li>
                    </ul>
                  </section>

                  {/* Section 6: Code of Conduct */}
                  <section id="conduct" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      6. Code of Conduct
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All passengers must adhere to the following code of conduct:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li><strong>No illegal drugs</strong> or controlled substances are permitted</li>
                      <li><strong>No smoking</strong> inside the vehicle</li>
                      <li>Respect the driver and follow all instructions promptly</li>
                      <li>No standing through the roof hatch while the vehicle is in motion</li>
                      <li>No vandalism, graffiti, or intentional damage to the vehicle</li>
                      <li>Inappropriate or threatening behavior will result in immediate termination of service without refund</li>
                    </ul>
                  </section>

                  {/* Section 7: Damages and Fees */}
                  <section id="damages" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      7. Damages and Fees
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The renter is financially responsible for any damages caused to the vehicle during the rental period.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Excessive cleaning fees will be charged for spills, stains, or excessive mess</li>
                      <li>Damage to upholstery, sound systems, lighting, or other equipment will be billed at repair cost</li>
                      <li>A cleaning fee of up to $500 may be charged for bodily fluid incidents</li>
                      <li>Lost or stolen items from the vehicle will be charged at replacement cost</li>
                      <li>All damage assessments will be documented with photos and invoiced within 7 days</li>
                    </ul>
                  </section>

                  {/* Section 8: Limitation of Liability */}
                  <section id="liability" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      8. Limitation of Liability
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Party On Wheels, its owners, employees, and drivers are not liable for:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Personal injuries sustained during the rental period, except where caused by gross negligence</li>
                      <li>Loss or damage to personal property left in the vehicle</li>
                      <li>Delays caused by traffic, weather, accidents, or other unforeseen circumstances</li>
                      <li>Missed events or appointments due to circumstances beyond our control</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      All passengers ride at their own risk. We strongly recommend that renters obtain appropriate insurance coverage for their event.
                    </p>
                  </section>

                  {/* Section 9: Insurance */}
                  <section id="insurance" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      9. Insurance
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Party On Wheels maintains commercial liability insurance and vehicle insurance as required by Louisiana law. However, this insurance does not cover:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Personal injuries to passengers not caused by our negligence</li>
                      <li>Damage to personal property</li>
                      <li>Losses due to cancellations or delays</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Renters are encouraged to obtain event insurance for additional protection.
                    </p>
                  </section>

                  {/* Section 10: Modifications to Service */}
                  <section id="modifications" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      10. Modifications to Service
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Party On Wheels reserves the right to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>Modify or discontinue services at any time</li>
                      <li>Update these Terms of Service without prior notice</li>
                      <li>Substitute vehicles of equal or greater value if mechanical issues arise</li>
                      <li>Refuse service or terminate rentals for violation of these Terms</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Continued use of the Service after any modifications constitutes acceptance of the new Terms.
                    </p>
                  </section>

                  {/* Section 11: Contact Information */}
                  <section id="contact" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1a1a1a] border-b-2 border-[#FF6B00] pb-2">
                      11. Contact Information
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      For questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gray-50 border-l-4 border-[#FF6B00] p-6 rounded-r-lg">
                      <p className="text-gray-700 mb-2">
                        <strong>Party On Wheels</strong>
                      </p>
                      <p className="text-gray-700 mb-2">
                        Phone: <a href="tel:+19858561860" className="text-[#FF6B00] hover:text-[#e56000] font-semibold">+1 985-856-1860</a>
                      </p>
                      <p className="text-gray-700 mb-2">
                        Email: <a href="mailto:info@partyonwheelspow.com" className="text-[#FF6B00] hover:text-[#e56000] font-semibold">info@partyonwheelspow.com</a>
                      </p>
                      <p className="text-gray-700">
                        Service Area: Southern Louisiana (Houma, Thibodaux, New Orleans)
                      </p>
                    </div>
                  </section>

                  {/* Back to Home Button */}
                  <div className="mt-12 pt-8 border-t border-gray-200 text-center">
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
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer onLinkClick={handleNavClick} />
    </div>
  );
}

export default TermsPage;
