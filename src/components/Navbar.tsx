import { useState } from 'react';
import { Phone, MapPin, Clock, Calendar, MessageCircle, Menu, X, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface NavbarProps {
  onOpenAppointment: () => void;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ onOpenAppointment, onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDFCFB]/95 backdrop-blur-md text-[#1A1A1A] border-b border-[#1A1A1A]/10 shadow-xs">
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#1A1A1A] text-[#FDFCFB] text-[11px] py-2 px-4 tracking-wider uppercase font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#FAF8F5]">
              <Star className="w-3 h-3 fill-[#C5A880] text-[#C5A880]" />
              <span>4.7 ★ Rated (472+ Reviews)</span>
            </span>
            <span className="hidden sm:inline-block text-stone-500">•</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              <span>United Residency, Kala Qila, Dharavi, Mumbai</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Open Today: 11:00 AM – 10:30 PM</span>
            </span>
            <span className="text-stone-600">•</span>
            <a
              id="top-phone-link"
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-[#FAF8F5] hover:text-[#C5A880] font-semibold transition-colors"
            >
              <Phone className="w-3 h-3" />
              <span>099309 07300</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="text-left group flex items-center gap-3.5 cursor-pointer"
          >
            <div className="w-10 h-10 bg-[#1A1A1A] flex items-center justify-center text-[#FDFCFB] font-serif font-bold text-lg border border-[#1A1A1A]">
              <span className="tracking-tight">RG</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-stone-700 transition-colors">
                  RAJDEEP GARMENTS
                </span>
              </div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#6B6864] uppercase">
                राजदीप गारमेंट्स • Men's Ethnic & Groom Wear
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-medium uppercase tracking-[0.15em] text-[#2D2B2A]">
            <button
              id="nav-collections-btn"
              onClick={() => handleNavClick('collections')}
              className="hover:text-[#9E7D46] transition-colors cursor-pointer"
            >
              Collections
            </button>
            <button
              id="nav-groom-btn"
              onClick={() => handleNavClick('groom-wear')}
              className="hover:text-[#9E7D46] transition-colors cursor-pointer"
            >
              Wedding & Groom
            </button>
            <button
              id="nav-tailoring-btn"
              onClick={() => handleNavClick('tailoring')}
              className="hover:text-[#9E7D46] transition-colors cursor-pointer"
            >
              Custom Tailoring
            </button>
            <button
              id="nav-reviews-btn"
              onClick={() => handleNavClick('reviews')}
              className="hover:text-[#9E7D46] transition-colors cursor-pointer"
            >
              Reviews (4.7★)
            </button>
            <button
              id="nav-location-btn"
              onClick={() => handleNavClick('location')}
              className="hover:text-[#9E7D46] transition-colors cursor-pointer"
            >
              Store & Timings
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Rajdeep Garments, I would like to inquire about your men\'s ethnic wear and wedding sherwanis.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#1A1A1A] text-xs font-medium tracking-wider uppercase transition-colors border border-[#1A1A1A]/15"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              id="nav-book-trial-btn"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] text-xs font-medium uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Store Trial</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-mobile-book-btn"
              onClick={onOpenAppointment}
              className="sm:hidden px-3 py-1.5 bg-[#1A1A1A] text-[#FDFCFB] text-xs font-medium tracking-wider uppercase"
            >
              Book Trial
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-[#FAF8F5] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1A1A1A]/10 bg-[#FDFCFB] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1 pt-2 text-xs uppercase tracking-widest font-medium">
            <button
              onClick={() => handleNavClick('collections')}
              className="text-left px-3 py-2.5 hover:bg-[#FAF8F5] text-[#1A1A1A]"
            >
              Designer Collections
            </button>
            <button
              onClick={() => handleNavClick('groom-wear')}
              className="text-left px-3 py-2.5 hover:bg-[#FAF8F5] text-[#1A1A1A]"
            >
              Wedding & Groom Showcase
            </button>
            <button
              onClick={() => handleNavClick('tailoring')}
              className="text-left px-3 py-2.5 hover:bg-[#FAF8F5] text-[#1A1A1A]"
            >
              Custom Tailoring & Alterations
            </button>
            <button
              onClick={() => handleNavClick('reviews')}
              className="text-left px-3 py-2.5 hover:bg-[#FAF8F5] text-[#1A1A1A]"
            >
              Google Reviews (4.7★ • 472 Reviews)
            </button>
            <button
              onClick={() => handleNavClick('location')}
              className="text-left px-3 py-2.5 hover:bg-[#FAF8F5] text-[#1A1A1A]"
            >
              Store Location & Timings
            </button>
          </div>

          <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-2">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#FAF8F5] text-[#1A1A1A] text-xs font-medium uppercase tracking-wider border border-[#1A1A1A]/10"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Store: 099309 07300</span>
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Rajdeep Garments, I would like to inquire about your collections.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1A1A1A] text-[#FDFCFB] text-xs font-medium uppercase tracking-wider"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
