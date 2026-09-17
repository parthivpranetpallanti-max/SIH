import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  ChevronRight,
  Landmark,
  Palette,
  Music,
  Utensils,
  Hammer,
  Drama,
} from 'lucide-react';
import { CultureCategory, HeritageItem } from '../types';
import { CULTURAL_CATEGORIES, getCategoryMeta } from '../data/categoriesData';
import { HERITAGE_ITEMS } from '../data/heritageItemsData';

interface CultureGalleriesSectionProps {
  onSelectItem: (item: HeritageItem) => void;
  onNavigateState: (stateId: string) => void;
  onNavigateDistrict: (districtId: string) => void;
}

const CATEGORY_ICON_MAP: Record<CultureCategory, React.ComponentType<{ className?: string }>> = {
  monument: Landmark,
  art: Palette,
  instrument: Music,
  clothing: Sparkles,
  food: Utensils,
  craft: Hammer,
  performing_art: Drama,
};

export const CultureGalleriesSection: React.FC<CultureGalleriesSectionProps> = ({
  onSelectItem,
}) => {
  const [activeCategory, setActiveCategory] = useState<CultureCategory>('monument');

  const categoryMeta = getCategoryMeta(activeCategory);
  const items = HERITAGE_ITEMS.filter((i) => i.category === activeCategory);
  const ActiveIcon = CATEGORY_ICON_MAP[activeCategory] || Sparkles;

  return (
    <section id="culture-galleries-view" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] tracking-wider uppercase mb-1">
          <Layers className="w-4 h-4 text-[#F28C28]" />
          <span>The Seven Cultural Pillars of Bharat • सात सांस्कृतिक धरोहर</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF3D6]">
          Museum Thematic Galleries
        </h2>
        <p className="text-sm text-[#D8D4CC] mt-1 max-w-3xl">
          Immerse yourself in India’s monumental architecture, timeless musical instruments, classical dance forms, master craftsmanship, and ancient culinary traditions.
        </p>
      </div>

      {/* Category Navigation Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
        {CULTURAL_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = HERITAGE_ITEMS.filter((i) => i.category === cat.id).length;
          const Icon = CATEGORY_ICON_MAP[cat.id] || Sparkles;

          return (
            <button
              key={cat.id}
              id={`gallery-cat-btn-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                borderColor: isActive ? cat.colorAccent : undefined,
                backgroundColor: isActive ? `${cat.colorAccent}18` : undefined,
                boxShadow: isActive ? `0 0 16px -2px ${cat.colorAccent}40` : undefined,
              }}
              className={`p-3 rounded-xl border text-left transition-all duration-250 flex flex-col justify-between relative overflow-hidden ${
                isActive
                  ? 'border-opacity-100 ring-1'
                  : 'bg-gradient-to-b from-[#171A20] to-[#20242B] border-white/8 hover:border-white/20 text-[#9B9A96] hover:text-[#D8D4CC]'
              }`}
            >
              {/* Colored top indicator */}
              <div
                className="absolute top-0 inset-x-0 h-[3px]"
                style={{ backgroundColor: cat.colorAccent }}
              />

              <div className="flex items-center justify-between mb-2">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: `${cat.colorAccent}25`,
                    color: cat.colorAccent,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-mono text-[#9B9A96]">
                  {count} items
                </span>
              </div>
              <div>
                <h4
                  className={`text-xs font-bold leading-snug ${
                    isActive ? 'text-[#FFF3D6]' : 'text-[#D8D4CC]'
                  }`}
                >
                  {cat.name.split('&')[0].trim()}
                </h4>
                <p className="text-[10px] text-[#9B9A96] truncate mt-0.5">
                  {cat.hindiName}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Curator Introduction Plaque */}
      <div
        style={{
          borderLeftColor: categoryMeta.colorAccent,
          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px -6px rgba(0,0,0,0.5)`,
        }}
        className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#171A20] via-[#20242B] to-[#171A20] border border-white/10 border-l-4 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden"
      >
        {/* Subtle ambient jewel-tone corner glow */}
        <div
          className="absolute right-0 top-0 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: categoryMeta.colorAccent }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: `${categoryMeta.colorAccent}25`,
                color: categoryMeta.colorAccent,
              }}
            >
              <ActiveIcon className="w-4 h-4" />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-[#FFF3D6]">
              {categoryMeta.name} Gallery
            </h3>
            <span
              className="text-xs font-serif italic"
              style={{ color: categoryMeta.colorAccent }}
            >
              ({categoryMeta.hindiName})
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#D8D4CC] mt-2 max-w-2xl leading-relaxed">
            {categoryMeta.description}
          </p>
        </div>

        <div className="relative z-10 px-3.5 py-2 rounded-xl bg-[#0F1115]/80 border border-white/10 text-xs text-[#D8D4CC] self-start md:self-center shrink-0 shadow-inner">
          Showing <strong style={{ color: categoryMeta.colorAccent }}>{items.length}</strong> master exhibits
        </div>
      </div>

      {/* Exhibits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => onSelectItem(item)}
            className="group rounded-2xl border border-white/8 hover:border-[#F28C28] bg-gradient-to-b from-[#171A20] to-[#20242B] transition-all duration-250 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-md hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.7),0_0_20px_rgba(242,140,40,0.2)]"
            style={{
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 6px 18px -4px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Real Photograph with Source Overlay */}
            <div className="relative h-50 w-full overflow-hidden bg-[#0F1115]">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-transparent to-black/30" />

              {/* Badges */}
              {item.unescoStatus && (
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#176B87]/90 backdrop-blur-md text-[10px] font-bold text-[#FFF3D6] border border-[#64C2DB]/40 shadow-sm">
                  UNESCO World Heritage
                </div>
              )}
              {item.giTag && (
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#16745B]/90 backdrop-blur-md text-[10px] font-bold text-[#FFF3D6] border border-[#52B79C]/40 shadow-sm">
                  GI Tag Registered
                </div>
              )}

              {/* Mandatory Image Source Caption */}
              <div className="absolute bottom-1.5 right-2 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] text-[#D8D4CC] border border-white/5">
                Source: {item.imageSource.split('/')[0]}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-display font-bold text-base text-[#FFF3D6] group-hover:text-[#F28C28] transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-marcellus text-xs text-[#F4D06F] font-medium shrink-0">
                    {item.hindiTitle}
                  </span>
                </div>

                <p className="text-xs text-[#D8D4CC] mt-2 line-clamp-2 leading-relaxed">
                  {item.curatorSummary}
                </p>

                {/* Location & Dynasty Tagging */}
                <div className="mt-3.5 pt-3 border-t border-white/8 text-[11px] text-[#9B9A96] space-y-1">
                  <p>
                    <span>Dynasty / Tradition:</span>{' '}
                    <strong className="text-[#FFF3D6] font-medium">{item.dynastyOrTradition}</strong>
                  </p>
                  <p>
                    <span>Origin:</span>{' '}
                    <strong className="text-[#F4D06F] font-medium">
                      {item.districtName}, {item.stateName}
                    </strong>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between text-xs font-bold text-[#F28C28] group-hover:text-[#F4D06F] transition-colors">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inspect Exhibit & Audio Guide</span>
                </span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
