import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Sparkles } from 'lucide-react';
import { HeritageItem, CultureCategory } from '../types';
import { HERITAGE_ITEMS } from '../data/heritageItemsData';
import { CULTURAL_CATEGORIES, getCategoryMeta } from '../data/categoriesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: HeritageItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CultureCategory | 'all'>('all');

  const filteredItems = useMemo(() => {
    let list = HERITAGE_ITEMS;
    if (selectedCategoryFilter !== 'all') {
      list = list.filter((i) => i.category === selectedCategoryFilter);
    }
    const q = searchTerm.toLowerCase().trim();
    if (!q) return list;

    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.hindiTitle.includes(q) ||
        item.districtName.toLowerCase().includes(q) ||
        item.stateName.toLowerCase().includes(q) ||
        item.dynastyOrTradition.toLowerCase().includes(q) ||
        item.curatorSummary.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchTerm, selectedCategoryFilter]);

  if (!isOpen) return null;

  return (
    <div
      id="museum-search-modal"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#171A20] border border-[#D4A017]/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[82vh] text-[#D8D4CC] animate-in fade-in zoom-in-95">
        {/* Search Header Input with Saffron/Gold Border on focus & Soft Warm Glow */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#0F1115] focus-within:border-[#F28C28] focus-within:shadow-[0_0_20px_rgba(242,140,40,0.22)] transition-all">
          <Search className="w-5 h-5 text-[#D4A017] shrink-0" />
          <input
            id="museum-search-input"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search monuments, ragas, fabrics, cuisines, crafts, states..."
            className="w-full bg-transparent text-sm text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-[#9B9A96] hover:text-[#FFF3D6]"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#20242B] hover:bg-[#F28C28] text-[#9B9A96] hover:text-[#0F1115] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Quick Filter */}
        <div className="px-4 py-2 bg-[#20242B]/80 border-b border-white/8 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => setSelectedCategoryFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategoryFilter === 'all'
                ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-sm'
                : 'text-[#D8D4CC] hover:text-[#FFF3D6] hover:bg-white/5'
            }`}
          >
            All Categories
          </button>
          {CULTURAL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                style={{
                  backgroundColor: isSelected ? cat.colorAccent : undefined,
                  color: isSelected ? '#0F1115' : undefined,
                  borderColor: isSelected ? cat.colorAccent : undefined,
                }}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'font-extrabold shadow-sm'
                    : 'border-white/8 text-[#9B9A96] hover:text-[#FFF3D6] hover:bg-white/5'
                }`}
              >
                {cat.name.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Results List */}
        <div className="p-3 overflow-y-auto space-y-2 flex-1 divide-y divide-white/5 bg-[#0F1115]/30">
          {filteredItems.length === 0 ? (
            <div className="p-10 text-center text-[#9B9A96] text-xs">
              No museum exhibits match "{searchTerm}". Try searching for Taj Mahal, Veena, Sitar, Madhubani, Kathakali, or an Indian State.
            </div>
          ) : (
            filteredItems.map((item) => {
              const meta = getCategoryMeta(item.category);
              return (
                <div
                  key={item.id}
                  id={`search-item-${item.id}`}
                  onClick={() => {
                    onSelectItem(item);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-[#20242B] cursor-pointer flex items-center gap-3.5 transition-all group border border-transparent hover:border-white/10"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#0F1115] shrink-0 border border-white/10">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <h4 className="text-sm font-bold text-[#FFF3D6] group-hover:text-[#F28C28] truncate font-display">
                        {item.title}
                      </h4>
                      <span className="text-xs text-[#F4D06F] font-serif">
                        {item.hindiTitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      {/* Cultural Color Badge */}
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${meta.colorAccent}25`,
                          color: meta.colorAccent,
                          border: `1px solid ${meta.colorAccent}40`,
                        }}
                      >
                        {item.category.replace('_', ' ')}
                      </span>
                      <span className="text-[11px] text-[#9B9A96] truncate">
                        • {item.districtName}, {item.stateName}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[#9B9A96] group-hover:text-[#F28C28] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#0F1115] border-t border-white/10 flex items-center justify-between text-[11px] text-[#9B9A96]">
          <span>Found <strong className="text-[#FFF3D6]">{filteredItems.length}</strong> authenticated museum records</span>
          <span>Press ESC or click outside to exit</span>
        </div>
      </div>
    </div>
  );
};
