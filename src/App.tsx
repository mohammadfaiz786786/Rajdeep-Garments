import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickInfoBar } from './components/QuickInfoBar';
import { CollectionGrid } from './components/CollectionGrid';
import { GroomShowcaseSection } from './components/GroomShowcaseSection';
import { CustomTailoringSection } from './components/CustomTailoringSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { StoreLocationSection } from './components/StoreLocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { STORE_INFO } from './data/storeData';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] font-sans text-[#1A1A1A] flex flex-col selection:bg-[#1A1A1A] selection:text-[#FDFCFB]">
      
      {/* Navigation */}
      <Navbar
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('collections')}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Quick Highlights Bar */}
        <QuickInfoBar />

        {/* Designer Catalog & Outfits Grid */}
        <CollectionGrid
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Groom & Wedding Specialist Suite */}
        <GroomShowcaseSection
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Custom Master Tailoring & Alteration Process */}
        <CustomTailoringSection
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Real Customer Google Reviews (4.7★ • 472 Reviews) */}
        <CustomerReviewsSection />

        {/* Showroom Location, Hours, Plus Code & Landmark Directions */}
        <StoreLocationSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
            'Hello Rajdeep Garments, I would like to inquire about your men\'s ethnic collections and trials.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-[#1A1A1A]/20"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#FDFCFB]" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-[11px] font-medium tracking-[0.15em] uppercase">
            WhatsApp Inquiry
          </span>
        </a>

        {/* Mobile Sticky Quick Call & Book Bar (on small screens) */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-t border-[#1A1A1A]/10 p-3 flex items-center gap-2 shadow-2xl">
          <a
            href={`tel:${STORE_INFO.phoneRaw}`}
            className="flex-1 py-3 bg-[#F4EFEA] hover:bg-[#EBE5DE] text-[#1A1A1A] text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 border border-[#1A1A1A]/10 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Store</span>
          </a>
          <button
            onClick={() => setIsAppointmentOpen(true)}
            className="flex-1 py-3 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Trial</span>
          </button>
        </div>
      </div>

      {/* Appointment & Trial Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

    </div>
  );
}
