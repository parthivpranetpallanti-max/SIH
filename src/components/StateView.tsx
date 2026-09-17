import React from 'react';
import {
  MapPin,
  Compass,
  ArrowLeft,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronRight,
  Landmark,
} from 'lucide-react';
import { StateData, CultureCategory, HeritageItem } from '../types';
import { CULTURAL_CATEGORIES, getCategoryMeta } from '../data/categoriesData';
import { getHeritageItemsByState } from '../data/heritageItemsData';

interface StateViewProps {
  state: StateData;
  onSelectDistrict: (districtId: string) => void;
  onSelectCategory: (category: CultureCategory | 'all') => void;
  onSelectItem: (item: HeritageItem) => void;
  onBackToIndia: () => void;
  selectedCategory: CultureCategory | 'all';
}

export const StateView: React.FC<StateViewProps> = ({
  state,
  onSelectDistrict,
  onSelectCategory,
  onSelectItem,
  onBackToIndia,
  selectedCategory,
}) => {
  const allStateItems = getHeritageItemsByState(state.id);
  const displayedItems =
    selectedCategory === 'all'
      ? allStateItems
      : allStateItems.filter((i) => i.category === selectedCategory);

  return (
    <div id={`state-view-${state.id}`} className="min-h-screen pb-16 bg-[#0F1115]">
      {/* State Hero Header */}
      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#0F1115] border-b border-[#D4A017]/30">
        <img
          src={state.heroImage}
          alt={state.name}
          className="w-full h-full object-cover object-center scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/75 to-black/40" />

        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-6">
          {/* Back button */}
          <button
            id="state-view-btn-back-india"
            onClick={onBackToIndia}
            className="self-start inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0F1115]/80 backdrop-blur-md text-[#FFF3D6] text-xs font-semibold hover:bg-[#171A20] border border-white/15 transition-all hover:border-[#F28C28] hover:text-[#F28C28]"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>Back to All India Map</span>
          </button>

          {/* Title & Metadata */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A20]/90 backdrop-blur-md text-[#F4D06F] text-xs font-semibold border border-[#D4A017]/40 mb-2.5 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{state.zone} India • {state.emblemTag}</span>
            </div>

            <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#FFF3D6]">
                {state.name}
              </h1>
              <span className="font-marcellus text-xl sm:text-2xl text-[#F4D06F] font-medium">
                {state.hindiName}
              </span>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-[#D8D4CC] max-w-2xl line-clamp-2 leading-relaxed">
              {state.description}
            </p>

            {/* Image Source Caption */}
            <div className="mt-3 flex items-center gap-3 text-[11px] text-[#9B9A96]">
              <span>Capital: <strong className="text-[#FFF3D6]">{state.capital}</strong></span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <span>Source: {state.imageSource.split('/')[0]}</span>
                <a
                  href={state.imageSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A017] hover:text-[#F4D06F] underline inline-flex items-center gap-0.5 ml-1"
                >
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Step 2 Sub-Nav: Districts Selector */}
        <div className="mb-10 bg-gradient-to-b from-[#171A20] to-[#20242B] rounded-2xl border border-[#D4A017]/30 p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-jaali-subtle opacity-25 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Hierarchy Step 2: Select a Historic District (जिला)</span>
              </div>
              <p className="text-xs text-[#D8D4CC] mt-0.5">
                Explore heritage rooted in specific historic cities and cultural centers of {state.name}.
              </p>
            </div>
            <span className="text-xs font-mono text-[#F4D06F] px-2.5 py-0.5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30">
              {state.districts.length} Districts Available
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {state.districts.map((district) => (
              <button
                key={district.id}
                id={`district-select-btn-${district.id}`}
                onClick={() => onSelectDistrict(district.id)}
                className="group p-4 rounded-xl bg-[#171A20]/90 hover:bg-[#20242B] border border-white/8 hover:border-[#F28C28] text-left transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-[0_8px_20px_rgba(242,140,40,0.15)]"
                style={{
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                }}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-[#FFF3D6] group-hover:text-[#F28C28] transition-colors font-display">
                      {district.name}
                    </h4>
                    <span className="text-[11px] text-[#F4D06F] font-serif">
                      {district.hindiName}
                    </span>
                  </div>
                  <p className="text-xs text-[#D8D4CC] mt-1.5 line-clamp-2 leading-relaxed">
                    {district.description}
                  </p>
                </div>
                <div className="mt-3.5 pt-2.5 border-t border-white/8 flex items-center justify-between text-xs font-bold text-[#F28C28] group-hover:text-[#F4D06F]">
                  <span>Enter District Exhibits</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Cultural Categories Filter within this State */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Filter by Cultural Discipline</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FFF3D6] mt-0.5">
                Heritage Exhibits in {state.name}
              </h3>
            </div>

            {/* Category Pill Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              <button
                id="cat-tab-all"
                onClick={() => onSelectCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-sm'
                    : 'bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/8'
                }`}
              >
                All Exhibits ({allStateItems.length})
              </button>
              {CULTURAL_CATEGORIES.map((cat) => {
                const count = allStateItems.filter((i) => i.category === cat.id).length;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`cat-tab-${cat.id}`}
                    onClick={() => onSelectCategory(cat.id)}
                    style={{
                      backgroundColor: isSelected ? cat.colorAccent : undefined,
                      color: isSelected ? '#0F1115' : undefined,
                      borderColor: isSelected ? cat.colorAccent : undefined,
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'font-extrabold shadow-sm'
                        : 'bg-[#171A20] border-white/8 text-[#9B9A96] hover:text-[#FFF3D6]'
                    }`}
                  >
                    <span>{cat.name.split('&')[0].trim()}</span>
                    {count > 0 && (
                      <span className="ml-1 text-[10px] opacity-80">({count})</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exhibits Grid */}
          {displayedItems.length === 0 ? (
            <div className="p-12 text-center bg-[#171A20] rounded-2xl border border-white/8 text-[#9B9A96]">
              No exhibits in {state.name} currently match this category filter. Select another cultural discipline or view all exhibits.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedItems.map((item) => {
                const meta = getCategoryMeta(item.category);
                return (
                  <div
                    key={item.id}
                    id={`state-item-${item.id}`}
                    onClick={() => onSelectItem(item)}
                    className="group rounded-2xl border border-white/8 hover:border-[#F28C28] bg-gradient-to-b from-[#171A20] to-[#20242B] transition-all duration-250 cursor-pointer overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-md hover:shadow-[0_14px_30px_-6px_rgba(0,0,0,0.7),0_0_20px_rgba(242,140,40,0.2)]"
                    style={{
                      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 6px 18px -4px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-[#0F1115]">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-transparent to-black/30" />

                      <div
                        className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm"
                        style={{
                          backgroundColor: `${meta.colorAccent}35`,
                          color: '#FFF3D6',
                          border: `1px solid ${meta.colorAccent}70`,
                        }}
                      >
                        {item.category.replace('_', ' ')}
                      </div>

                      <div className="absolute bottom-1.5 right-2 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] text-[#D8D4CC] border border-white/5">
                        Source: {item.imageSource.split('/')[0]}
                      </div>
                    </div>

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

                        <div className="mt-3.5 pt-3 border-t border-white/8 text-[11px] text-[#9B9A96] space-y-1">
                          <p>
                            <span>District Hub:</span>{' '}
                            <strong className="text-[#FFF3D6] font-medium">{item.districtName}</strong>
                          </p>
                          <p>
                            <span>Dynasty / Tradition:</span>{' '}
                            <strong className="text-[#F4D06F] font-medium">{item.dynastyOrTradition}</strong>
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between text-xs font-bold text-[#F28C28] group-hover:text-[#F4D06F] transition-colors">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Inspect Exhibit & Audio Guide</span>
                        </span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
