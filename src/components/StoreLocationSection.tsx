import { MapPin, Phone, Clock, Navigation, CheckCircle2, MessageCircle, Truck, Building2, Compass, Share2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

export function StoreLocationSection() {
  const fullAddress = `${STORE_INFO.address.shop}, ${STORE_INFO.address.floor}, ${STORE_INFO.address.building}, ${STORE_INFO.address.wing}, ${STORE_INFO.address.area}, ${STORE_INFO.address.locality}, ${STORE_INFO.address.city}, ${STORE_INFO.address.state} ${STORE_INFO.address.pincode}`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Rajdeep Garments Shop 1 & 2 2nd Floor United Residency Kala Qila Dharavi Mumbai'
  )}`;

  const daysSchedule = [
    { day: 'Monday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Tuesday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Wednesday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Thursday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Friday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Saturday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
    { day: 'Sunday', hours: '11:00 AM – 10:30 PM', status: 'Open' },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Store Visit & Timings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Visit Our Mumbai Showroom
          </h2>
          <p className="text-[#6B6864] text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Conveniently located at Kala Qila, Dharavi with dedicated customer trial rooms and master tailoring.
          </p>
        </div>

        {/* Main Grid: Location Details vs Timings/Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Business Card Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Essential Contact Card */}
            <div className="p-6 sm:p-8 bg-white border border-[#1A1A1A]/15 space-y-6 shadow-xs">
              
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#1A1A1A]/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                    Rajdeep Garments
                  </h3>
                  <p className="text-xs text-[#9E7D46] font-medium tracking-wide mt-0.5">
                    राजदीप गारमेंट्स • Ethnic & Celebration Clothing Store
                  </p>
                </div>
                <div className="px-3 py-1 bg-[#FAF8F5] border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs font-medium flex items-center gap-1.5 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Open (Until 10:30 PM)</span>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm text-[#2D2B2A]">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B6864] font-medium uppercase tracking-wider">
                      Store Address
                    </div>
                    <p className="font-serif font-bold text-[#1A1A1A] mt-0.5 leading-relaxed text-sm sm:text-base">
                      Shop no 1 & 2, 2nd Floor, United Residency, A Wing, Kala Qila, Dharavi, Mumbai, Maharashtra 400017
                    </p>
                    <div className="text-xs text-[#6B6864] mt-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#9E7D46]" />
                      <span>Plus Code: <strong className="text-[#1A1A1A]">2VX5+4X Mumbai, Maharashtra</strong></span>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B6864] font-medium uppercase tracking-wider">
                      Phone / Direct Line
                    </div>
                    <a
                      href={`tel:${STORE_INFO.phoneRaw}`}
                      className="font-serif font-bold text-[#1A1A1A] hover:text-[#9E7D46] text-xl transition-colors inline-block mt-0.5"
                    >
                      099309 07300
                    </a>
                    <div className="text-xs text-[#6B6864]">Direct showroom helpline for trial bookings & queries</div>
                  </div>
                </div>

                {/* Delivery */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-emerald-700 shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#6B6864] font-medium uppercase tracking-wider">
                      Services & Delivery
                    </div>
                    <div className="font-medium text-[#1A1A1A] mt-0.5 text-xs sm:text-sm">
                      ✓ In-Store Trials & Master Custom Tailoring &nbsp;•&nbsp; ✓ Doorstep Delivery Across Mumbai & Pan-India
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  id="get-directions-btn"
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] font-medium text-xs uppercase tracking-[0.15em] shadow-xs transition-all cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Google Maps Directions</span>
                </a>

                <a
                  id="whatsapp-location-btn"
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Rajdeep Garments, please share your live showroom location and landmark instructions.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#1A1A1A]/15 text-[#1A1A1A] font-medium text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Location on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Landmark Travel Guide */}
            <div className="p-5 sm:p-6 bg-white border border-[#1A1A1A]/10 space-y-3 text-xs text-[#2D2B2A] shadow-xs">
              <div className="font-serif font-bold text-[#1A1A1A] text-sm flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#9E7D46]" />
                <span>How to Reach United Residency (Kala Qila, Dharavi)</span>
              </div>
              <ul className="space-y-1.5 text-[#6B6864] list-disc list-inside">
                <li><strong className="text-[#1A1A1A]">From BKC / Bandra:</strong> Approx. 10-15 mins via Sion-Bandra Link Road / Dharavi 90 Feet Road.</li>
                <li><strong className="text-[#1A1A1A]">From Dadar / Matunga / Sion:</strong> Approx. 5-10 mins drive to Kala Qila junction.</li>
                <li><strong className="text-[#1A1A1A]">Landmark:</strong> United Residency building, A Wing, take lift to the 2nd Floor, Shop No. 1 & 2.</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Weekly Schedule & Map Preview */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 bg-white border border-[#1A1A1A]/15 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-[#1A1A1A]/10">
                <Clock className="w-4 h-4 text-[#9E7D46]" />
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  Showroom Working Hours
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                {daysSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-2 hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="font-medium text-[#2D2B2A]">{item.day}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[#1A1A1A] font-semibold">{item.hours}</span>
                      <span className="px-1.5 py-0.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-emerald-800 text-[10px] font-bold uppercase">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 text-[11px] text-[#6B6864] border-t border-[#1A1A1A]/10 flex items-center justify-between">
                <span>*Walk-ins welcome all day</span>
                <span className="text-[#9E7D46] font-medium">Closes at 10:30 PM</span>
              </div>
            </div>

            {/* Clean Interactive Map Banner */}
            <div className="bg-white border border-[#1A1A1A]/15 p-5 space-y-4 text-center shadow-xs">
              <div className="h-44 w-full bg-[#FAF8F5] relative overflow-hidden border border-[#1A1A1A]/10 flex items-center justify-center p-4">
                <div className="space-y-2">
                  <div className="w-9 h-9 bg-white border border-[#1A1A1A]/15 text-[#9E7D46] flex items-center justify-center mx-auto shadow-xs">
                    <MapPin className="w-5 h-5 animate-bounce" />
                  </div>
                  <div className="font-serif font-bold text-sm text-[#1A1A1A]">
                    United Residency, Kala Qila, Dharavi
                  </div>
                  <div className="text-[#6B6864] text-xs">
                    Shop 1 & 2, 2nd Floor, A Wing
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors inline-block"
              >
                <Navigation className="w-3.5 h-3.5 text-[#9E7D46]" />
                <span>Open in Google Maps App</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
