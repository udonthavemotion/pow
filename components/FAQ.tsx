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
    <section id="faq" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] font-bold tracking-widest uppercase text-lg mb-4 block">Got Questions?</span>
          <h2 className="text-6xl md:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-2 bg-[#39FF14] mx-auto mt-4"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:border-[#FF6B00]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 text-lg pr-8 group-hover:text-[#FF6B00] transition-colors">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-6 h-6 text-[#FF6B00] flex-shrink-0 transition-transform duration-300 ${
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
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-[#FF6B00] to-[#39FF14] rounded-xl p-8 text-white">
          <h3 className="text-3xl font-black uppercase mb-4 font-['Bebas_Neue']">Still Have Questions?</h3>
          <p className="text-lg mb-6 opacity-90">We're here to help! Give us a call or send us a message.</p>
          <a 
            href="tel:+19853339762"
            className="inline-block bg-white text-[#FF6B00] px-8 py-4 font-bold uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-colors"
          >
            Call Us: 985-333-9762
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


