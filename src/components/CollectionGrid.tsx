import { useState, useMemo } from 'react';
import { Sparkles, MessageCircle, Eye, Search, Filter, Check, Star } from 'lucide-react';
import { ProductItem, CategoryType, OccasionType } from '../types';
import { STORE_PRODUCTS, STORE_INFO } from '../data/storeData';
import { ProductDetailModal } from './ProductDetailModal';

interface CollectionGridProps {
  onOpenAppointment: () => void;
}

const CATEGORIES: CategoryType[] = [
  'All',
  'Groom Sherwanis',
  'Indo-Western',
  'Kurta & Nehru Jacket',
  'Jodhpuri & Bandhgala',
  'Tuxedos & Blazers',
  'Royal Accessories',
];

const OCCASIONS: OccasionType[] = [
  'All',
  'Wedding & Groom',
  'Sangeet & Haldi',
  'Reception & Party',
  'Festive & Puja',
];

export function CollectionGrid({ onOpenAppointment }: CollectionGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    return STORE_PRODUCTS.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchOccasion = selectedOccasion === 'All' || item.occasion.includes(selectedOccasion);
      const matchSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchOccasion && matchSearch;
    });
  }, [selectedCategory, selectedOccasion, searchQuery]);

  return (
    <section id="collections" className="py-16 sm:py-24 bg-[#FAF8F5] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#1A1A1A]/10 text-[#9E7D46] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Wedding & Festive Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Designer Ethnic & Celebration Wear
          </h2>
          <p className="text-[#6B6864] text-sm sm:text-base font-normal max-w-2xl mx-auto">
            Every piece is tailored with hand-selected fabrics, heritage embroidery, and custom fitting at our Dharavi showroom.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="space-y-5 mb-10">
          
          {/* Top Row: Search and Occasions */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6864]" />
              <input
                id="collection-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sherwanis, kurtas, velvet, fabrics..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1A1A1A]/15 text-[#1A1A1A] placeholder-[#6B6864]/60 text-xs tracking-wide focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6B6864] hover:text-[#1A1A1A]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Occasion Selector Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full text-xs">
              <span className="text-[#6B6864] font-medium shrink-0 flex items-center gap-1 pl-1 text-[11px] tracking-wider uppercase">
                <Filter className="w-3.5 h-3.5" /> Occasion:
              </span>
              {OCCASIONS.map((occ) => (
                <button
                  key={occ}
                  id={`filter-occasion-${occ.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedOccasion(occ)}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer ${
                    selectedOccasion === occ
                      ? 'bg-[#1A1A1A] text-[#FDFCFB] shadow-xs'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#2D2B2A] border border-[#1A1A1A]/10'
                  }`}
                >
                  {occ}
                </button>
              ))}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#1A1A1A]/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                id={`filter-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-[#FDFCFB]'
                    : 'text-[#6B6864] hover:text-[#1A1A1A] hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white border border-[#1A1A1A]/10 space-y-3 shadow-xs">
            <p className="text-[#1A1A1A] font-serif font-medium text-base">No outfits matched your current filter criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedOccasion('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-[#1A1A1A] text-[#FDFCFB] text-xs font-medium uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => {
              const whatsappLink = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                `Hello Rajdeep Garments, I would like to inquire about "${item.title}" (${item.priceRange}) seen on your website.`
              )}`;

              return (
                <div
                  key={item.id}
                  id={`product-card-${item.id}`}
                  className="group bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
                >
                  {/* Image Container */}
                  <div className="relative h-68 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {item.popular && (
                        <span className="px-2 py-0.5 bg-[#1A1A1A] text-[#FDFCFB] text-[9px] font-medium uppercase tracking-widest">
                          Popular
                        </span>
                      )}
                      {item.isNewArrival && (
                        <span className="px-2 py-0.5 bg-[#9E7D46] text-[#FDFCFB] text-[9px] font-medium uppercase tracking-widest">
                          New
                        </span>
                      )}
                    </div>

                    {/* Quick View Button overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-xs">
                      <button
                        onClick={() => setActiveProduct(item)}
                        className="px-4 py-2 bg-white text-[#1A1A1A] hover:bg-[#FAF8F5] text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 border border-[#1A1A1A]/10 shadow-md cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#9E7D46]" />
                        <span>Quick View</span>
                      </button>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-[10px] text-white font-medium uppercase tracking-wider truncate drop-shadow-sm">
                      {item.fabric}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[10px] font-medium text-[#9E7D46] uppercase tracking-[0.15em]">
                        {item.category}
                      </div>
                      <h3 className="font-serif font-bold text-[#1A1A1A] text-base leading-snug line-clamp-2 mt-0.5 group-hover:text-[#9E7D46] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#6B6864] line-clamp-2 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#6B6864] uppercase tracking-wider">Price Guide:</span>
                        <span className="text-xs font-bold text-[#1A1A1A]">{item.priceRange}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          onClick={() => setActiveProduct(item)}
                          className="w-full py-2 bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#1A1A1A] text-xs font-medium uppercase tracking-wider transition-colors border border-[#1A1A1A]/10 cursor-pointer"
                        >
                          Details
                        </button>
                        <a
                          id={`card-whatsapp-${item.id}`}
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>Inquire</span>
                        </a>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Banner for Custom Requests */}
        <div className="mt-14 p-6 sm:p-8 bg-white border border-[#1A1A1A]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A]">
              Looking for a Custom Color, Size, or Designer Pattern?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B6864]">
              Bring any photo reference or wedding theme palette — our master tailors will craft it to perfection.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-3 bg-[#1A1A1A] hover:bg-[#2D2B2A] text-[#FDFCFB] text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer"
            >
              Book In-Store Trial
            </button>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Rajdeep Garments, I want to discuss a custom design/color scheme.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#FAF8F5] hover:bg-[#F4EFEA] text-[#1A1A1A] text-xs font-medium uppercase tracking-wider border border-[#1A1A1A]/15 transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat with Stylist</span>
            </a>
          </div>
        </div>

      </div>

      {/* Product Detail Zoom Modal */}
      {activeProduct && (
        <ProductDetailModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
          onOpenAppointment={onOpenAppointment}
        />
      )}
    </section>
  );
}
