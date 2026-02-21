/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !isNaN(index)) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

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

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <span className={`text-[#FF6B00] font-bold tracking-widest uppercase text-sm sm:text-lg mb-3 sm:mb-4 block
            transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 font-['Bebas_Neue'] uppercase mb-3 sm:mb-4 whitespace-normal">
            {["Frequently", "Asked", "Questions"].map((word, index) => (
              <span
                key={index}
                className={`inline-block transition-all duration-700 ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index === 1 ? 'text-[#FF6B00]' : ''}`}
                style={{
                  transitionDelay: `${0.1 + index * 0.15}s`,
                  marginRight: index < 2 ? '0.3em' : '0'
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <div className={`w-20 sm:w-24 h-2 bg-[#b9ff66] mx-auto mt-3 sm:mt-4 transition-all duration-700
            ${headerVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
            style={{ transitionDelay: '0.2s' }}></div>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current.set(index, el);
              }}
              data-index={index}
              className={`bg-gray-50 rounded-lg border border-gray-200 overflow-hidden
                transition-all duration-300 hover:border-[#FF6B00] hover:shadow-lg ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${openIndex === index ? 'border-l-4 border-l-[#FF6B00] shadow-md' : ''}`}
              style={{ transitionDelay: `${Math.min(index * 0.05, 0.3)}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 min-h-[56px] text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="font-bold text-gray-900 text-base sm:text-lg pr-6 sm:pr-8 group-hover:text-[#FF6B00] transition-colors">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className={`w-6 h-6 sm:w-7 sm:h-7 text-[#FF6B00] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className={`px-4 sm:px-6 pb-4 sm:pb-5 text-gray-600 leading-relaxed text-sm sm:text-base`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 sm:mt-12 text-center bg-gradient-to-r from-[#FF6B00] to-[#b9ff66] rounded-xl p-6 sm:p-8 text-white">
          <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 font-['Bebas_Neue']">Still Have Questions?</h3>
          <p className="text-base sm:text-lg mb-5 sm:mb-6 opacity-90">We're here to help! Give us a call or send us a message.</p>
          <a
            href="tel:+19858561860"
            className="inline-block bg-white text-[#FF6B00] px-6 sm:px-8 py-4 min-h-[56px] font-bold uppercase tracking-widest rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
          >
            Call Us: 985-856-1860
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


