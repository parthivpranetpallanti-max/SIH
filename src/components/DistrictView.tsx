import React from 'react';
import {
  MapPin,
  ArrowLeft,
  Layers,
  Sparkles,
  ChevronRight,
  Landmark,
} from 'lucide-react';
import { StateData, District, CultureCategory, HeritageItem } from '../types';
import { CULTURAL_CATEGORIES, getCategoryMeta } from '../data/categoriesData';
import { getHeritageItemsByDistrict, getHeritageItemsByState } from '../data/heritageItemsData';

interface DistrictViewProps {
  state: StateData;
  district: District;
  onSelectCategory: (category: CultureCategory | 'all') => void;
  onSelectItem: (item: HeritageItem) => void;
  onBackToState: () => void;
  selectedCategory: CultureCategory | 'all';
}

export const DistrictView: React.FC<DistrictViewProps> = ({
  state,
  district,
  onSelectCategory,
  onSelectItem,
  onBackToState,
  selectedCategory,
}) => {
  const districtItems = getHeritageItemsByDistrict(district.id);
  const fallbackItems = districtItems.length > 0 ? districtItems : getHeritageItemsByState(state.id);

  const displayedItems =
    selectedCategory === 'all'
      ? fallbackItems
      : fallbackItems.filter((i) => i.category === selectedCategory);

  return (
    <div id={`district-view-${district.id}`} className="min-h-screen pb-16 bg-[#0F1115]">
      {/* District Header Banner */}
      <div className="bg-gradient-to-r from-[#0F1115] via-[#171A20] to-[#0F1115] border-b border-[#D4A017]/25 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back to State button */}
          <button
            id="district-view-btn-back-state"
            onClick={onBackToState}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#20242B] text-[#FFF3D6] text-xs font-semibold hover:bg-[#171A20] hover:text-[#F28C28] border border-white/10 mb-4 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>Back to {state.name} State Gallery</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171A20] text-[#F4D06F] text-xs font-semibold border border-[#D4A017]/40 mb-2 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
                <span>Historic District of {state.name} • {district.hindiName}</span>
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FFF3D6]">
                  {district.name}
                </h1>
                <span className="font-marcellus text-xl text-[#F4D06F] font-medium">
                  {district.hindiName}
                </span>
              </div>

              <p className="mt-2 text-sm text-[#D8D4CC] max-w-3xl leading-relaxed">
                {district.description}
              </p>
            </div>

            {/* Notable Highlights pill list */}
            <div className="bg-gradient-to-b from-[#171A20] to-[#20242B] p-4 rounded-xl border border-white/10 max-w-sm shrink-0 shadow-md">
              <span className="text-[11px] font-bold text-[#F4D06F] uppercase tracking-wider block mb-2">
                Notable Heritage Highlights:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {district.notableHighlights.map((hl, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-md text-[11px] bg-[#0F1115] text-[#D8D4CC] border border-white/8"
                  >
                    {hl}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Step 4 Filter: 7 Culture Categories within this District */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#F28C28] uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Cultural Disciplines in {district.name}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FFF3D6] mt-0.5">
              Exhibits from {district.name} District
            </h3>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => onSelectCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-sm'
                  : 'bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/8'
              }`}
            >
              All Exhibits ({fallbackItems.length})
            </button>
            {CULTURAL_CATEGORIES.map((cat) => {
              const count = fallbackItems.filter((i) => i.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
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
                  {count > 0 && <span className="ml-1 text-[10px] opacity-80">({count})</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Exhibits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item) => {
            const meta = getCategoryMeta(item.category);
            return (
              <div
                key={item.id}
                id={`district-item-${item.id}`}
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
                        <span>Dynasty / Tradition:</span>{' '}
                        <strong className="text-[#FFF3D6] font-medium">{item.dynastyOrTradition}</strong>
                      </p>
                      <p>
                        <span>Location:</span>{' '}
                        <strong className="text-[#F4D06F] font-medium">
                          {item.districtName}, {item.stateName}
                        </strong>
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
      </div>
    </div>
  );
};
