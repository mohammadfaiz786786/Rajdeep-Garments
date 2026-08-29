import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { STORE_FAQS, STORE_INFO } from '../data/storeData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FDFCFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Planning Your Visit to Rajdeep Garments
          </h2>
          <p className="text-[#6B6864] text-xs sm:text-sm max-w-xl mx-auto">
            Everything you need to know about our products, custom tailoring, trials, and delivery.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {STORE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#1A1A1A]/10 shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-[#1A1A1A] font-serif font-bold text-sm sm:text-base hover:text-[#9E7D46] transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#9E7D46] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#6B6864] border-t border-[#1A1A1A]/10 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help footer */}
        <div className="mt-10 p-5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs shadow-xs">
          <span className="text-[#2D2B2A] font-medium">
            Have a specific custom inquiry? Reach our showroom master stylist:
          </span>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="font-serif font-bold text-[#1A1A1A] hover:text-[#9E7D46] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9E7D46]" /> 099309 07300
            </a>
            <span className="text-[#1A1A1A]/20">•</span>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Rajdeep Garments, I have a question regarding an outfit.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A1A1A] hover:text-emerald-700 font-medium flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
