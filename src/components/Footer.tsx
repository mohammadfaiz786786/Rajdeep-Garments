import { Phone, MapPin, Clock, MessageCircle, Star, Heart, Navigation, ShieldCheck, Truck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAppointment: () => void;
}

export function Footer({ onNavigate, onOpenAppointment }: FooterProps) {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF8F5] border-t border-[#1A1A1A]/10">
      
      {/* Top Pre-Footer Reassurance */}
      <div className="border-b border-[#FAF8F5]/10 py-10 bg-[#22201F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="p-3 bg-[#1A1A1A] text-[#9E7D46] border border-[#FAF8F5]/10">
                <Star className="w-5 h-5 fill-[#9E7D46] text-[#9E7D46]" />
              </div>
              <div>
                <div className="text-[#FDFCFB] font-serif font-bold text-sm sm:text-base">4.7 Star Google Rating</div>
                <div className="text-xs text-[#FAF8F5]/60 mt-0.5">472+ verified real customer reviews</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="p-3 bg-[#1A1A1A] text-[#9E7D46] border border-[#FAF8F5]/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#FDFCFB] font-serif font-bold text-sm sm:text-base">In-House Master Tailors</div>
                <div className="text-xs text-[#FAF8F5]/60 mt-0.5">Perfect fitting trials & speedy alterations</div>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="p-3 bg-[#1A1A1A] text-[#9E7D46] border border-[#FAF8F5]/10">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[#FDFCFB] font-serif font-bold text-sm sm:text-base">Pan-India Delivery</div>
                <div className="text-xs text-[#FAF8F5]/60 mt-0.5">Doorstep shipping for outstation clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-[#FDFCFB] text-[#1A1A1A] flex items-center justify-center font-serif font-bold text-xl border border-[#FAF8F5]/20">
                RG
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#FDFCFB] tracking-wider">
                  RAJDEEP GARMENTS
                </div>
                <div className="text-xs text-[#C5A880] font-medium tracking-[0.15em] uppercase">
                  राजदीप गारमेंट्स • Dharavi, Mumbai
                </div>
              </div>
            </div>

            <p className="text-[#FAF8F5]/70 text-xs sm:text-sm leading-relaxed max-w-md">
              Specialists in Royal Groom Sherwanis, Designer Indo-Western sets, Lucknowi Chikankari Kurtas, Jodhpuri Bandhgala Suits, and custom ethnic tailoring for weddings, sangeet, and festivals.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider">
              <span className="px-3 py-1 bg-[#282625] border border-[#FAF8F5]/10 text-[#FAF8F5]/80">
                Men's Traditional Wear
              </span>
              <span className="px-3 py-1 bg-[#282625] border border-[#FAF8F5]/10 text-[#FAF8F5]/80">
                Groom Specialists
              </span>
              <span className="px-3 py-1 bg-[#282625] border border-[#FAF8F5]/10 text-[#FAF8F5]/80">
                Custom Fitting
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#FDFCFB] uppercase tracking-[0.2em]">
              Explore Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/70">
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Royal Groom Sherwanis
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Indo-Western & Achkans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Lucknowi Chikankari Kurtas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Jodhpuri & Tuxedo Suits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('collections')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Safas, Turbans & Mojaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tailoring')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  Bespoke Tailoring Process
                </button>
              </li>
            </ul>
          </div>

          {/* Store Coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-[#FDFCFB] uppercase tracking-[0.2em]">
              Showroom Location
            </h4>
            <div className="space-y-3 text-xs text-[#FAF8F5]/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#FAF8F5]/90">
                  Shop no 1 & 2, 2nd Floor, United Residency, A Wing, Kala Qila, Dharavi, Mumbai, Maharashtra 400017
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#9E7D46] shrink-0" />
                <span className="text-[#FAF8F5]/90 font-medium">11:00 AM – 10:30 PM (All 7 Days)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9E7D46] shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="font-serif font-bold text-[#FDFCFB] hover:text-[#C5A880] text-sm"
                >
                  099309 07300
                </a>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Rajdeep Garments, I would like to inquire about showroom timings and visiting.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#282625] hover:bg-[#33302E] border border-[#FAF8F5]/15 text-[#FDFCFB] text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-2.5 bg-[#FDFCFB] hover:bg-[#FAF8F5] text-[#1A1A1A] font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Trial
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-8 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50">
          <div>
            © {new Date().getFullYear()} Rajdeep Garments (राजदीप गारमेंट्स). All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>United Residency, Kala Qila, Dharavi, Mumbai</span>
            <span>•</span>
            <span className="text-[#FAF8F5]/70">099309 07300</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
