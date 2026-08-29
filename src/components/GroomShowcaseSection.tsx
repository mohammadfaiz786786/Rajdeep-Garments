import { Crown, Sparkles, Check, Heart, Calendar, MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface GroomShowcaseProps {
  onOpenAppointment: () => void;
}

export function GroomShowcaseSection({ onOpenAppointment }: GroomShowcaseProps) {
  return (
    <section id="groom-wear" className="py-16 sm:py-24 bg-[#FDFCFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Grid */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden bg-stone-100 border border-[#1A1A1A]/15 h-64 sm:h-72 shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80"
                    alt="Royal Groom Sherwani"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white border border-[#1A1A1A]/10 text-center shadow-xs">
                  <div className="text-[#1A1A1A] font-serif font-bold text-base sm:text-lg">Bespoke Safa & Kalgi</div>
                  <p className="text-[#6B6864] text-xs mt-1">Color-matched with Bride's lehenga</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 bg-white border border-[#1A1A1A]/10 text-center shadow-xs">
                  <div className="text-[#1A1A1A] font-serif font-bold text-base sm:text-lg">Zardozi & Cut-Dana</div>
                  <p className="text-[#6B6864] text-xs mt-1">Hand-embroidered artistry</p>
                </div>
                <div className="overflow-hidden bg-stone-100 border border-[#1A1A1A]/15 h-64 sm:h-72 shadow-xs">
                  <img
                    src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80"
                    alt="Indo Western Groom Ensemble"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Copy & Features */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em]">
              <Crown className="w-3.5 h-3.5" />
              <span>Groom & Wedding Suite</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
              Complete Groom Styling For Your Special Day
            </h2>

            <p className="text-[#6B6864] text-sm sm:text-base leading-relaxed">
              At Rajdeep Garments, we believe the groom deserves as much attention as the bride. From royal entrance Sherwanis to glamorous Reception Tuxedos, we curate complete wedding wardrobes with precision fit.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-[#2D2B2A]">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block text-[#1A1A1A]">Couple Color Matching</span>
                  <span className="text-xs text-[#6B6864]">Harmonize groom tones with bridal attire</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block text-[#1A1A1A]">Complete Set Styling</span>
                  <span className="text-xs text-[#6B6864]">Sherwani, Safa, Dupatta, Mala & Juttis</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block text-[#1A1A1A]">Barati & Family Packages</span>
                  <span className="text-xs text-[#6B6864]">Coordinated Kurta sets for brothers & fathers</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <span className="font-serif font-bold block text-[#1A1A1A]">Private Trial Room</span>
                  <span className="text-xs text-[#6B6864]">Comfortable in-store trials for family</span>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                id="groom-book-btn"
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] font-medium text-xs uppercase tracking-[0.15em] shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Book Groom Trial Session</span>
              </button>

              <a
                id="groom-whatsapp-btn"
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Rajdeep Garments, I am looking for wedding groom wear for my upcoming event.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#1A1A1A]/15 text-[#1A1A1A] font-medium text-xs uppercase tracking-wider transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
