import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { AppointmentBooking } from '../types';
import { STORE_INFO } from '../data/storeData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<AppointmentBooking>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '02:00 PM – 04:00 PM',
    occasion: 'Groom Wedding Sherwani',
    guestsCount: '2-3 people (Family Trial)',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappAppointmentMsg = encodeURIComponent(
    `Hello Rajdeep Garments, I would like to book a store trial visit:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Date: ${formData.date}\n• Time Slot: ${formData.timeSlot}\n• Occasion: ${formData.occasion}\n• Accompanying guests: ${formData.guestsCount}`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#FDFCFB] border border-[#1A1A1A]/15 shadow-2xl p-6 sm:p-9 text-[#1A1A1A] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 bg-[#FAF8F5] text-[#6B6864] hover:text-[#1A1A1A] hover:bg-[#F4EFEA] border border-[#1A1A1A]/10 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#FAF8F5] text-emerald-700 flex items-center justify-center mx-auto border border-[#1A1A1A]/10">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
              Trial Visit Request Received
            </h3>
            <p className="text-[#6B6864] text-sm max-w-sm mx-auto">
              Thank you, <strong className="text-[#1A1A1A]">{formData.name}</strong>. Our styling team at Shop 1 & 2 Dharavi will call or WhatsApp you at <strong className="text-[#9E7D46]">{formData.phone}</strong> to confirm your appointment.
            </p>

            <div className="p-4 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-xs text-[#2D2B2A] text-left space-y-1.5 font-normal">
              <div><strong className="text-[#1A1A1A]">Date:</strong> {formData.date} ({formData.timeSlot})</div>
              <div><strong className="text-[#1A1A1A]">Occasion:</strong> {formData.occasion}</div>
              <div><strong className="text-[#1A1A1A]">Location:</strong> 2nd Floor, United Residency, Kala Qila, Dharavi</div>
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${whatsappAppointmentMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Instantly on WhatsApp</span>
              </a>

              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-[#FAF8F5] hover:bg-[#F4EFEA] border border-[#1A1A1A]/15 text-[#1A1A1A] font-medium text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 text-[11px] text-[#9E7D46] font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Styling & Master Measurements</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                Book In-Store Trial Visit
              </h3>
              <p className="text-[#6B6864] text-xs">
                Visit Shop 1 & 2, 2nd Floor, United Residency, Dharavi, Mumbai.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6864]" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6864]" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile"
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Occasion / Requirement *
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                  >
                    <option>Groom Wedding Sherwani</option>
                    <option>Sangeet & Indo-Western</option>
                    <option>Reception Tuxedo / Jodhpuri</option>
                    <option>Festive Kurta & Nehru Jacket</option>
                    <option>Custom Fabric Tailoring</option>
                    <option>Family / Bulk Wedding Outfits</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6864]" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6864]" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                    >
                      <option>11:30 AM – 01:30 PM (Morning)</option>
                      <option>02:00 PM – 04:00 PM (Afternoon)</option>
                      <option>04:30 PM – 07:00 PM (Evening)</option>
                      <option>07:30 PM – 10:00 PM (Night)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1A1A1A] mb-1.5 uppercase tracking-wider">
                  Accompanying Family / Guests
                </label>
                <select
                  value={formData.guestsCount}
                  onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                  className="w-full px-3 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#9E7D46]"
                >
                  <option>1 Person (Just me)</option>
                  <option>2-3 people (Family / Groom trial)</option>
                  <option>4-6 people (Full groom party)</option>
                </select>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] font-medium text-xs uppercase tracking-[0.18em] shadow-xs transition-all active:scale-98 cursor-pointer"
                >
                  Confirm Free Trial Booking
                </button>
              </div>

              <p className="text-[11px] text-[#6B6864] text-center">
                *Walk-ins are also welcome anytime between 11 AM and 10:30 PM.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
