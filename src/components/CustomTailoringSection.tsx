import { Scissors, Ruler, Sparkles, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface CustomTailoringProps {
  onOpenAppointment: () => void;
}

export function CustomTailoringSection({ onOpenAppointment }: CustomTailoringProps) {
  const steps = [
    {
      step: '01',
      title: 'Fabric & Cut Selection',
      desc: 'Browse hundreds of fabrics on our 2nd floor showroom racks—raw silks, Banarasi brocades, Italian suiting, and velvets.',
      icon: Sparkles,
    },
    {
      step: '02',
      title: '24-Point Master Measurements',
      desc: 'Our experienced in-house master tailors record detailed posture and fit parameters for a flawless drape.',
      icon: Ruler,
    },
    {
      step: '03',
      title: 'Hand Embroidery & Crafting',
      desc: 'Artisans execute zardozi, resham, cut-dana, or minimalist threadwork according to your design preference.',
      icon: Scissors,
    },
    {
      step: '04',
      title: 'In-Store Trial & Refinement',
      desc: 'Try your outfit at Shop 1 & 2 Dharavi. We make micro-adjustments on the spot so you leave with 100% confidence.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="tailoring" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em]">
            <Scissors className="w-3.5 h-3.5" />
            <span>Master Craftsmanship</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Custom Tailoring & Fast Alteration Services
          </h2>
          <p className="text-[#6B6864] text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Whether you want a bespoke outfit crafted from scratch or quick alterations on your existing attire, our on-site master tailors deliver perfection.
          </p>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-7 bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#FAF8F5] border border-[#1A1A1A]/10 text-[#9E7D46]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-serif font-bold text-xl text-[#6B6864]/50">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6B6864] text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A1A1A]/10 text-[10px] uppercase tracking-wider text-[#9E7D46] font-medium">
                  {idx === 3 ? 'Same-day adjustments available' : 'Step ' + item.step + ' of 4'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Alteration Guarantee Callout */}
        <div className="mt-12 p-6 sm:p-8 bg-white border border-[#1A1A1A]/15 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-7 h-7 text-[#9E7D46] shrink-0" />
            <div>
              <div className="text-sm font-serif font-bold text-[#1A1A1A]">100% Fit Guarantee</div>
              <div className="text-xs text-[#6B6864]">Free alterations until you are completely satisfied</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <Clock className="w-7 h-7 text-[#9E7D46] shrink-0" />
            <div>
              <div className="text-sm font-serif font-bold text-[#1A1A1A]">Express Turnaround</div>
              <div className="text-xs text-[#6B6864]">Urgent wedding date timelines accommodated</div>
            </div>
          </div>

          <div className="text-left md:text-right">
            <button
              id="tailoring-consult-btn"
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] font-medium text-xs uppercase tracking-[0.15em] transition-all cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Book Measurement Session</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
