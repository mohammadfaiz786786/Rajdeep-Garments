import { X, MessageCircle, Phone, Calendar, Check, Sparkles, Scissors, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../types';
import { STORE_INFO } from '../data/storeData';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenAppointment: () => void;
}

export function ProductDetailModal({ product, onClose, onOpenAppointment }: ProductDetailModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Rajdeep Garments, I would like to inquire about: "${product.title}" (${product.priceRange}) seen on your website.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-3xl bg-white border border-[#1A1A1A]/20 shadow-2xl overflow-hidden text-[#1A1A1A] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          id="product-modal-close-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 text-[#1A1A1A] hover:bg-[#FAF8F5] border border-[#1A1A1A]/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Image Side */}
          <div className="relative h-72 sm:h-96 md:h-full bg-stone-100 overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent md:hidden" />
            
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#1A1A1A] bg-white/95 backdrop-blur-md px-3.5 py-2 border border-[#1A1A1A]/10 shadow-xs">
              <span className="font-semibold uppercase tracking-wider text-[10px]">{product.category}</span>
              <span className="text-[10px] font-medium text-[#9E7D46]">Master Trial Available</span>
            </div>
          </div>

          {/* Details Side */}
          <div className="p-6 sm:p-8 space-y-5 overflow-y-auto max-h-[80vh] md:max-h-[85vh]">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-[#9E7D46] uppercase tracking-[0.2em] mb-1.5">
                <span>Rajdeep Garments Exclusive</span>
                {product.popular && (
                  <span className="px-2 py-0.5 bg-[#FAF8F5] text-[#1A1A1A] border border-[#1A1A1A]/15 font-medium">
                    Bestseller
                  </span>
                )}
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] leading-snug">
                {product.title}
              </h3>
              <div className="mt-2 text-lg font-bold text-[#1A1A1A]">
                {product.priceRange}{' '}
                <span className="text-xs font-normal text-[#6B6864]">
                  (Estimated range based on custom fabric/work)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#6B6864] text-xs sm:text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Spec Sheet */}
            <div className="space-y-2.5 pt-2 border-t border-[#1A1A1A]/10 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#1A1A1A]/5">
                <span className="text-[#6B6864] font-medium uppercase tracking-wider text-[11px]">Fabric:</span>
                <span className="text-[#1A1A1A] font-semibold text-right">{product.fabric}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1A1A1A]/5">
                <span className="text-[#6B6864] font-medium uppercase tracking-wider text-[11px]">Craft & Work:</span>
                <span className="text-[#1A1A1A] font-semibold text-right">{product.workType}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1A1A1A]/5">
                <span className="text-[#6B6864] font-medium uppercase tracking-wider text-[11px]">Color Options:</span>
                <span className="text-[#1A1A1A] font-semibold text-right">
                  {product.colors.join(', ')}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#1A1A1A]/5">
                <span className="text-[#6B6864] font-medium uppercase tracking-wider text-[11px]">Ideal Occasion:</span>
                <span className="text-[#9E7D46] font-semibold text-right">
                  {product.occasion.join(' • ')}
                </span>
              </div>
            </div>

            {/* Set Includes */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold text-[#1A1A1A] uppercase tracking-[0.15em]">
                What's Included:
              </div>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#6B6864]">
                {product.includes.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#9E7D46] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reassurances */}
            <div className="p-3.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-xs text-[#2D2B2A] space-y-1">
              <div className="flex items-center gap-1.5 font-medium text-[#1A1A1A]">
                <Scissors className="w-3.5 h-3.5 text-[#9E7D46]" />
                <span>Custom Alterations & Master Fit Guarantee</span>
              </div>
              <p className="text-[11px] text-[#6B6864]">
                Trial available at Shop 1 & 2, 2nd Floor, United Residency, Dharavi.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <a
                id="modal-whatsapp-inquiry-btn"
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] font-medium text-xs uppercase tracking-widest shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire Price & Stock on WhatsApp</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="modal-book-trial-btn"
                  onClick={() => {
                    onClose();
                    onOpenAppointment();
                  }}
                  className="flex items-center justify-center gap-1.5 py-3 bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#1A1A1A] font-medium text-xs uppercase tracking-wider border border-[#1A1A1A]/15 transition-all cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#9E7D46]" />
                  <span>Book Trial Visit</span>
                </button>

                <a
                  id="modal-call-store-btn"
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 py-3 bg-white hover:bg-[#FAF8F5] text-[#1A1A1A] font-medium text-xs uppercase tracking-wider border border-[#1A1A1A]/10 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6B6864]" />
                  <span>099309 07300</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
