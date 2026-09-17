import React from 'react';
import { ChevronRight, Home, MapPin, Compass, Landmark, ArrowLeft } from 'lucide-react';
import { CultureCategory } from '../types';
import { getCategoryMeta } from '../data/categoriesData';

interface BreadcrumbBarProps {
  currentStateId?: string;
  stateName?: string;
  currentDistrictId?: string;
  districtName?: string;
  currentCategory?: CultureCategory | 'all';
  currentItemTitle?: string;
  onNavigateIndia: () => void;
  onNavigateState: (stateId: string) => void;
  onNavigateDistrict: (districtId: string) => void;
  onNavigateCategory: (category: CultureCategory | 'all') => void;
}

export const BreadcrumbBar: React.FC<BreadcrumbBarProps> = ({
  currentStateId,
  stateName,
  currentDistrictId,
  districtName,
  currentCategory,
  currentItemTitle,
  onNavigateIndia,
  onNavigateState,
  onNavigateDistrict,
  onNavigateCategory,
}) => {
  const categoryMeta = currentCategory && currentCategory !== 'all' ? getCategoryMeta(currentCategory) : null;

  return (
    <nav
      id="museum-breadcrumb-bar"
      aria-label="Museum Navigation Trail"
      className="sticky top-[73px] z-30 bg-[#171A20]/95 backdrop-blur-md border-b border-[#D4A017]/25 px-4 sm:px-6 lg:px-8 py-2.5 transition-all shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap shrink-0">
          {/* Step 1: India */}
          <button
            id="nav-step-india"
            onClick={onNavigateIndia}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
              !currentStateId
                ? 'bg-[#F28C28]/20 text-[#F4D06F] border border-[#F28C28]/50 shadow-sm'
                : 'text-[#9B9A96] hover:text-[#FFF3D6] hover:bg-white/5'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
            <span className="font-semibold tracking-wide">India (भारत)</span>
          </button>

          {/* Step 2: State */}
          {currentStateId && stateName && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#9B9A96]/60 shrink-0" />
              <button
                id={`nav-step-state-${currentStateId}`}
                onClick={() => onNavigateState(currentStateId)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  !currentDistrictId && (!currentCategory || currentCategory === 'all') && !currentItemTitle
                    ? 'bg-[#F28C28]/20 text-[#F4D06F] border border-[#F28C28]/50 font-semibold shadow-sm'
                    : 'text-[#9B9A96] hover:text-[#FFF3D6] hover:bg-white/5'
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
                <span>State: <strong className="text-[#FFF3D6] font-semibold">{stateName}</strong></span>
              </button>
            </>
          )}

          {/* Step 3: District */}
          {currentDistrictId && districtName && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#9B9A96]/60 shrink-0" />
              <button
                id={`nav-step-district-${currentDistrictId}`}
                onClick={() => onNavigateDistrict(currentDistrictId)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  (!currentCategory || currentCategory === 'all') && !currentItemTitle
                    ? 'bg-[#F28C28]/20 text-[#F4D06F] border border-[#F28C28]/50 font-semibold shadow-sm'
                    : 'text-[#9B9A96] hover:text-[#FFF3D6] hover:bg-white/5'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#16745B] shrink-0" />
                <span>District: <strong className="text-[#FFF3D6] font-semibold">{districtName}</strong></span>
              </button>
            </>
          )}

          {/* Step 4: Culture Category */}
          {categoryMeta && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#9B9A96]/60 shrink-0" />
              <button
                id={`nav-step-category-${categoryMeta.id}`}
                onClick={() => onNavigateCategory(categoryMeta.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  !currentItemTitle
                    ? 'bg-[#F28C28]/20 text-[#F4D06F] border border-[#F28C28]/50 font-semibold shadow-sm'
                    : 'text-[#9B9A96] hover:text-[#FFF3D6] hover:bg-white/5'
                }`}
              >
                <Landmark className="w-3.5 h-3.5 text-[#D4A017] shrink-0" />
                <span>Culture: <strong className="text-[#FFF3D6] font-semibold">{categoryMeta.name}</strong></span>
              </button>
            </>
          )}

          {/* Step 5: Item */}
          {currentItemTitle && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-[#9B9A96]/60 shrink-0" />
              <span
                id="nav-step-current-item"
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#D4A017]/20 text-[#FFF3D6] border border-[#D4A017]/40 font-semibold shrink-0 shadow-sm"
              >
                <span>Exhibit: {currentItemTitle}</span>
              </span>
            </>
          )}
        </div>

        {/* Back Up One Level shortcut */}
        {currentStateId && (
          <button
            id="nav-btn-back-level"
            onClick={() => {
              if (currentItemTitle) {
                onNavigateCategory(currentCategory || 'all');
              } else if (currentCategory && currentCategory !== 'all') {
                onNavigateCategory('all');
              } else if (currentDistrictId) {
                onNavigateState(currentStateId);
              } else {
                onNavigateIndia();
              }
            }}
            className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#F4D06F] hover:text-[#FFF3D6] hover:bg-[#F28C28]/20 rounded-lg border border-[#D4A017]/30 shrink-0 ml-auto transition-colors cursor-pointer"
            title="Step Back One Level"
          >
            <ArrowLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Back</span>
          </button>
        )}
      </div>
    </nav>
  );
};
