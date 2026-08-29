import { Star, Truck, Scissors, Clock, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export function QuickInfoBar() {
  return (
    <section className="bg-[#FDFCFB] border-b border-[#1A1A1A]/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-4 sm:p-5 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0">
              <Star className="w-4 h-4 fill-[#9E7D46] text-[#9E7D46]" />
            </div>
            <div>
              <div className="text-[#1A1A1A] font-serif font-bold text-sm sm:text-base">
                4.7 ★ Rated
              </div>
              <div className="text-[#6B6864] text-xs mt-0.5 leading-relaxed">
                472+ Google Reviews from wedding shoppers
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0">
              <Scissors className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#1A1A1A] font-serif font-bold text-sm sm:text-base">
                Master Tailoring
              </div>
              <div className="text-[#6B6864] text-xs mt-0.5 leading-relaxed">
                Custom fits, alterations & personalized styling
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#1A1A1A] font-serif font-bold text-sm sm:text-base">
                Delivery Available
              </div>
              <div className="text-[#6B6864] text-xs mt-0.5 leading-relaxed">
                Across Mumbai & Pan-India door delivery
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#1A1A1A] font-serif font-bold text-sm sm:text-base">
                11 AM – 10:30 PM
              </div>
              <div className="text-[#6B6864] text-xs mt-0.5 leading-relaxed">
                Open all 7 days (Monday to Sunday)
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
