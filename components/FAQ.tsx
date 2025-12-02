/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 weeks in advance, especially for popular dates like Mardi Gras, Saints game days, and wedding season. However, we often have last-minute availability—just give us a call!'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We primarily serve Houma, Thibodaux, and the greater New Orleans area. We can also travel to nearby cities for longer bookings. Contact us to discuss your specific route.'
    },
    {
      question: 'What\'s included with the rental?',
      answer: 'Each bus comes with a driver, premium sound system, LED lighting, and basic amenities. Some buses have additional features like coolers, dance poles, or karaoke systems—check each bus\'s features for details.'
    },
    {
      question: 'Can we bring our own music?',
      answer: 'Absolutely! All our buses have Bluetooth connectivity so you can play your own playlist. You can also connect via aux cable or USB.'
    },
    {
      question: 'What\'s your cancellation policy?',
      answer: 'Cancellations made 48+ hours before your booking receive a full refund. Cancellations within 48 hours are subject to a 50% fee. Contact us directly to discuss any special circumstances.'
    },
    {
      question: 'Do you provide decorations?',
      answer: 'We can help coordinate decorations for special events like birthdays or bachelorette parties. Additional fees may apply. Let us know what you have in mind when you book!'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, and digital payment methods. A deposit is required to secure your booking, with the balance due before or on the day of your event.'
    },
    {
      question: 'Is there a minimum age requirement?',
      answer: 'All passengers must be 18 or older, or accompanied by a parent/guardian. For certain events like proms, we work with schools and parents to ensure a fun and appropriate experience.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-purple-600 font-bold tracking-widest uppercase text-sm sm:text-lg mb-3 sm:mb-4 block">Got Questions?</span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 sm:w-24 h-2 bg-gradient-to-r from-purple-500 to-yellow-400 mx-auto mt-3 sm:mt-4"></div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-purple-500"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 min-h-[56px] text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 text-base sm:text-lg pr-6 sm:pr-8 group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-6 h-6 sm:w-7 sm:h-7 text-purple-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA - Enhanced Split Design */}
        <div className="mt-10 sm:mt-12 relative overflow-hidden rounded-2xl shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,107,0,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Purple Section */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black rounded-full opacity-10 blur-2xl"></div>

              <div className="relative z-10">
                {/* Phone Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-yellow-500/50 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-4 font-['Bebas_Neue'] text-white leading-tight">
                  Still Have<br/>Questions?
                </h3>
                <p className="text-lg sm:text-xl text-white/90 font-medium">
                  We're here to help! Give us a call or send us a message.
                </p>
              </div>
            </div>

            {/* Right Side - Gold/White Section */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 flex flex-col justify-center items-center text-center relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-yellow-400 opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-purple-600 opacity-30"></div>

              <div className="relative z-10 w-full max-w-sm">
                <div className="mb-6">
                  <p className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-2">Ready to Party?</p>
                  <p className="text-5xl sm:text-6xl font-black text-gray-900 font-['Bebas_Neue'] mb-2">Let's Talk!</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-yellow-400 mx-auto"></div>
                </div>

                {/* Call Button */}
                <a
                  href="tel:+19853339762"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-yellow-400 text-white px-8 py-5 font-black uppercase tracking-widest rounded-xl hover:shadow-2xl hover:shadow-purple-600/30 transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg w-full overflow-hidden"
                >
                  <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span className="relative">985-333-9762</span>
                </a>

                {/* Additional Contact Options */}
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                    <span>Available 24/7</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-2">
                    <span>💬</span>
                    <span>Text Us Too!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


