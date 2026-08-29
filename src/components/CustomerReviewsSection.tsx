import { Star, CheckCircle, Quote, ThumbsUp, MessageCircle } from 'lucide-react';
import { STORE_REVIEWS, STORE_INFO } from '../data/storeData';

export function CustomerReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FDFCFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#9E7D46] text-[#9E7D46]" />
              <span>Google Verified Reviews</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Trusted by 470+ Grooms & Families
            </h2>
            <p className="text-[#6B6864] text-sm sm:text-base mt-2">
              Read what customers say about our quality, fitting, and hospitality in Dharavi, Mumbai.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="p-4 sm:p-5 bg-white border border-[#1A1A1A]/15 flex items-center gap-5 shrink-0 shadow-xs">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-[#1A1A1A]">4.7</div>
              <div className="flex text-[#9E7D46] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#9E7D46] text-[#9E7D46]" />
                ))}
              </div>
            </div>
            <div className="h-10 w-px bg-[#1A1A1A]/10" />
            <div className="text-xs text-[#2D2B2A]">
              <div className="font-serif font-bold text-[#1A1A1A]">Google Rating</div>
              <div className="text-[#6B6864]">472 verified reviews</div>
              <div className="text-[#9E7D46] font-medium tracking-wide">★★★★★ 94% positive</div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STORE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex flex-col justify-between space-y-4 shadow-xs"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1A1A1A] text-[#FDFCFB] font-serif font-bold flex items-center justify-center text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-1.5">
                        <span>{rev.author}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-[#9E7D46]" />
                      </div>
                      <div className="text-[#6B6864] text-xs">{rev.occasion}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex text-[#9E7D46]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#9E7D46] text-[#9E7D46]" />
                      ))}
                    </div>
                    <div className="text-[10px] text-[#6B6864] mt-0.5">{rev.date}</div>
                  </div>
                </div>

                <p className="text-[#2D2B2A] text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[11px] text-[#6B6864]">
                <span className="flex items-center gap-1 text-[#1A1A1A] font-medium">
                  <ThumbsUp className="w-3 h-3 text-[#9E7D46]" /> Recommended for wedding wear
                </span>
                <span className="text-[#6B6864]/80">Google Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Write / Check on Google Callout */}
        <div className="mt-10 text-center text-xs text-[#6B6864]">
          Have you visited Rajdeep Garments recently?{' '}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rajdeep+Garments+Dharavi+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A1A1A] hover:text-[#9E7D46] font-semibold underline underline-offset-2 ml-1"
          >
            Check all 472+ reviews on Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
