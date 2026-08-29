import { Star, Phone, MessageCircle, Calendar, ArrowRight, ShieldCheck, MapPin, Sparkles, Truck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenAppointment: () => void;
}

export function HeroSection({ onExploreClick, onOpenAppointment }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF8F5] text-[#1A1A1A] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#1A1A1A]/10">
      {/* Background Subtle Texture / Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Top Verified Google Business Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5 px-3.5 py-1.5 bg-white border border-[#1A1A1A]/10 text-xs text-[#2D2B2A] shadow-xs">
              <div className="flex items-center text-[#9E7D46]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#9E7D46] text-[#9E7D46]" />
                ))}
              </div>
              <span className="font-bold text-[#1A1A1A]">4.7 / 5.0</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#6B6864]">472+ Verified Reviews</span>
              <span className="text-stone-300">•</span>
              <span className="text-[#1A1A1A] font-medium flex items-center gap-1">
                <Truck className="w-3 h-3 text-[#9E7D46]" /> Worldwide Delivery
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3.5">
              <div className="text-[#9E7D46] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase">
                राजदीप गारमेंट्स • Kala Qila, Dharavi, Mumbai
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.12]">
                Timeless Elegance for <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#9E7D46]">
                  Grooms & Celebrations
                </span>
              </h1>
              <p className="text-[#6B6864] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Discover bespoke Royal Sherwanis, Indo-Western sets, Lucknowi Chikankari kurtas, Jodhpuris, and tailored suits. Handcrafted perfection with in-store master tailoring at United Residency, Dharavi.
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-3.5 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-xs">
                <Sparkles className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#1A1A1A] uppercase">1000+ Designs</div>
                  <div className="text-[11px] text-[#6B6864]">Ready & Custom Made</div>
                </div>
              </div>
              <div className="p-3.5 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#1A1A1A] uppercase">Master Tailoring</div>
                  <div className="text-[11px] text-[#6B6864]">Precision Custom Fit</div>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3.5 bg-white border border-[#1A1A1A]/10 flex items-start gap-3 shadow-xs">
                <MapPin className="w-4 h-4 text-[#9E7D46] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold tracking-wide text-[#1A1A1A] uppercase">Shop 1 & 2, 2nd Flr</div>
                  <div className="text-[11px] text-[#6B6864]">United Residency, Mumbai</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                id="hero-explore-btn"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] text-xs font-medium uppercase tracking-[0.15em] transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="hero-trial-btn"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-[#FAF8F5] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5 text-[#9E7D46]" />
                <span>Book In-Store Trial</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-transparent hover:bg-white text-[#1A1A1A] border border-[#1A1A1A]/10 text-xs font-medium uppercase tracking-wider transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#6B6864]" />
                <span>099309 07300</span>
              </a>
            </div>

            {/* Quick WhatsApp note */}
            <div className="text-xs text-[#6B6864] pt-1">
              Have photos of a design you like?{' '}
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Rajdeep Garments, I have a specific design in mind for my wedding/event.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A] font-semibold underline underline-offset-4 hover:text-[#9E7D46] inline-flex items-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                Send design on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Visual Boutique Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border frame */}
              <div className="absolute -inset-2.5 border border-[#1A1A1A]/10 -z-10 bg-transparent" />

              {/* Main Showroom Card */}
              <div className="bg-white border border-[#1A1A1A]/15 shadow-xl overflow-hidden">
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80"
                    alt="Rajdeep Garments Designer Ethnic Collection"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                  
                  {/* Badge floating */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A1A1A]/90 backdrop-blur-md text-[#FDFCFB] text-[10px] font-medium uppercase tracking-widest border border-white/10">
                    Showroom Experience • Shop 1 & 2
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#FDFCFB]/95 backdrop-blur-md border border-[#1A1A1A]/10 shadow-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[#1A1A1A] font-serif font-bold text-sm sm:text-base">
                          Rajdeep Garments Showroom
                        </div>
                        <div className="text-[#6B6864] text-xs">
                          United Residency, 2nd Floor, Dharavi
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-700 font-semibold text-xs flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                          Open 11 AM - 10:30 PM
                        </div>
                        <div className="text-[#9E7D46] text-xs font-medium">
                          All 7 Days Open
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-gallery preview thumbnails */}
                <div className="p-3.5 grid grid-cols-3 gap-2 bg-[#FAF8F5] border-t border-[#1A1A1A]/10 text-center">
                  <div className="p-2.5 bg-white border border-[#1A1A1A]/10">
                    <div className="text-[#1A1A1A] font-serif font-semibold text-sm">Groom</div>
                    <div className="text-[10px] text-[#6B6864] tracking-wider uppercase">Sherwanis & Safas</div>
                  </div>
                  <div className="p-2.5 bg-white border border-[#1A1A1A]/10">
                    <div className="text-[#1A1A1A] font-serif font-semibold text-sm">Indo-Western</div>
                    <div className="text-[10px] text-[#6B6864] tracking-wider uppercase">Achkans & Kurtas</div>
                  </div>
                  <div className="p-2.5 bg-white border border-[#1A1A1A]/10">
                    <div className="text-[#1A1A1A] font-serif font-semibold text-sm">Suits</div>
                    <div className="text-[10px] text-[#6B6864] tracking-wider uppercase">Jodhpuris & Blazers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
