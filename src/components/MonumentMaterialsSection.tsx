import React, { useState } from 'react';
import {
  ShieldCheck,
  MapPin,
  Compass,
  ArrowRight,
  ExternalLink,
  Hammer,
  Sparkles,
  Search,
} from 'lucide-react';
import { MONUMENT_MATERIALS_DATA } from '../data/monumentMaterialsData';
import { HeritageItem } from '../types';
import { HERITAGE_ITEMS } from '../data/heritageItemsData';

interface MonumentMaterialsSectionProps {
  onSelectItem: (item: HeritageItem) => void;
  onNavigateIndia?: () => void;
}

// Earthy culturally grounded theme mapper
function getMaterialColorTheme(id: string): {
  accent: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  borderHover: string;
} {
  switch (id) {
    case 'granite-stone':
      return {
        accent: '#9B9A96',
        badgeBg: 'rgba(155, 154, 150, 0.2)',
        badgeText: '#D8D4CC',
        badgeBorder: 'rgba(155, 154, 150, 0.45)',
        borderHover: 'rgba(155, 154, 150, 0.7)',
      };
    case 'sandstone-red-buff':
      return {
        accent: '#F2A07B',
        badgeBg: 'rgba(168, 88, 52, 0.22)',
        badgeText: '#F2A07B',
        badgeBorder: 'rgba(168, 88, 52, 0.45)',
        borderHover: 'rgba(242, 140, 40, 0.7)',
      };
    case 'makrana-marble':
      return {
        accent: '#FFF3D6',
        badgeBg: 'rgba(255, 243, 214, 0.18)',
        badgeText: '#FFF3D6',
        badgeBorder: 'rgba(255, 243, 214, 0.4)',
        borderHover: 'rgba(212, 160, 23, 0.7)',
      };
    case 'basalt-rock':
      return {
        accent: '#64C2DB',
        badgeBg: 'rgba(23, 107, 135, 0.22)',
        badgeText: '#64C2DB',
        badgeBorder: 'rgba(23, 107, 135, 0.45)',
        borderHover: 'rgba(23, 107, 135, 0.7)',
      };
    case 'soapstone-schist':
      return {
        accent: '#52B79C',
        badgeBg: 'rgba(22, 116, 91, 0.22)',
        badgeText: '#52B79C',
        badgeBorder: 'rgba(22, 116, 91, 0.45)',
        borderHover: 'rgba(22, 116, 91, 0.7)',
      };
    case 'laterite-stone':
      return {
        accent: '#DE6B48',
        badgeBg: 'rgba(158, 61, 36, 0.25)',
        badgeText: '#DE6B48',
        badgeBorder: 'rgba(158, 61, 36, 0.45)',
        borderHover: 'rgba(222, 107, 72, 0.7)',
      };
    case 'lakhori-brick-surkhi':
      return {
        accent: '#E06D53',
        badgeBg: 'rgba(184, 74, 57, 0.22)',
        badgeText: '#E06D53',
        badgeBorder: 'rgba(184, 74, 57, 0.45)',
        borderHover: 'rgba(184, 74, 57, 0.7)',
      };
    case 'kath-kuni-timber-slate':
      return {
        accent: '#F4D06F',
        badgeBg: 'rgba(133, 68, 21, 0.28)',
        badgeText: '#F4D06F',
        badgeBorder: 'rgba(212, 160, 23, 0.45)',
        borderHover: 'rgba(212, 160, 23, 0.7)',
      };
    default:
      return {
        accent: '#F28C28',
        badgeBg: 'rgba(242, 140, 40, 0.2)',
        badgeText: '#F28C28',
        badgeBorder: 'rgba(242, 140, 40, 0.45)',
        borderHover: 'rgba(242, 140, 40, 0.7)',
      };
  }
}

export const MonumentMaterialsSection: React.FC<MonumentMaterialsSectionProps> = ({
  onSelectItem,
  onNavigateIndia,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Materials' },
    { id: 'igneous', label: 'Igneous (Granite & Basalt)' },
    { id: 'metamorphic', label: 'Metamorphic (Marble & Chlorite)' },
    { id: 'sedimentary', label: 'Sedimentary (Sandstone & Laterite)' },
    { id: 'composite_masonry', label: 'Composite Brick & Mortar' },
    { id: 'organic_timber', label: 'Seismic Timber & Slate' },
  ];

  const filteredMaterials = MONUMENT_MATERIALS_DATA.filter((mat) => {
    const matchesCat = selectedCategory === 'all' || mat.category === selectedCategory;
    const matchesSearch =
      mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.hindiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.quarryRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.monumentsUsed.some((m) => m.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleOpenExhibit = (itemId?: string) => {
    if (!itemId) return;
    const found = HERITAGE_ITEMS.find((h) => h.id === itemId);
    if (found) {
      onSelectItem(found);
    }
  };

  return (
    <div id="monument-materials-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 animate-in fade-in bg-[#0F1115]">
      {/* Section Header with Royal Saffron & Gold Theme */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171A20] border border-[#D4A017]/40 text-[#F4D06F] text-xs font-semibold uppercase tracking-wider shadow-sm">
          <Hammer className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Indigenous Architecture & Mineral Materials Guide</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#FFF3D6] tracking-tight">
          Monument Materials of Bharat
        </h1>
        <p className="font-marcellus text-lg sm:text-xl text-[#F4D06F] font-medium">
          भारतीय स्मारकों में प्रयुक्त प्राचीन निर्माण सामग्री एवं वास्तुकला विज्ञान
        </p>
        <p className="text-sm text-[#D8D4CC] leading-relaxed font-serif pt-1">
          Explore the indigenous stones, hydraulic mortars, and seismic woodcraft that allowed India’s sacred
          monuments to withstand earthquakes, monsoons, and tropical weathering for centuries without modern steel or Portland cement.
        </p>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#171A20] via-[#20242B] to-[#171A20] p-4 rounded-2xl border border-[#D4A017]/30 shadow-md">
        {/* Category filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-md'
                  : 'bg-[#0F1115] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/8'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick search input */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-[#D4A017] absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search stone, timber, or monument..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-[#0F1115] border border-white/10 text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#F28C28] transition-colors"
          />
        </div>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredMaterials.map((mat) => {
          const theme = getMaterialColorTheme(mat.id);
          return (
            <div
              key={mat.id}
              id={`material-card-${mat.id}`}
              className="rounded-2xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/10 shadow-xl overflow-hidden flex flex-col transition-all duration-300 group hover:-translate-y-1"
              style={{
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 10px 24px -6px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Material Real Photo Banner */}
              <div className="relative h-56 sm:h-64 w-full bg-[#0F1115] overflow-hidden">
                <img
                  src={mat.imageUrl}
                  alt={mat.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span
                    className="px-3 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider shadow"
                    style={{
                      backgroundColor: theme.badgeBg,
                      color: theme.badgeText,
                      border: `1px solid ${theme.badgeBorder}`,
                    }}
                  >
                    {mat.category.replace('_', ' ')}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-[#0F1115]/80 backdrop-blur-md text-[#F4D06F] border border-white/10 shadow">
                    {mat.durabilityRating}
                  </span>
                </div>

                {/* Photo Source Tag */}
                <div className="absolute bottom-3 right-3 bg-[#0F1115]/90 backdrop-blur-md px-2.5 py-0.5 rounded text-[10px] text-[#D8D4CC] border border-white/10 flex items-center gap-1">
                  <span>Source: {mat.imageSource.split('/')[0]}</span>
                  <a
                    href={mat.imageSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4A017] hover:text-[#F4D06F]"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Titles */}
                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#FFF3D6] group-hover:text-[#F28C28] transition-colors">
                      {mat.name}
                    </h3>
                    <span className="text-base text-[#F4D06F] font-marcellus">
                      {mat.hindiName}
                    </span>
                  </div>

                  {/* Quarry Region */}
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#9B9A96]">
                    <MapPin className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
                    <span>
                      <strong className="text-[#FFF3D6]">Quarry Source:</strong> {mat.quarryRegion}
                    </span>
                  </div>

                  {/* Scientific Engineering Properties Box */}
                  <div className="mt-4 p-4 rounded-xl bg-[#0F1115]/80 border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#F4D06F] font-bold uppercase tracking-wider text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
                      <span>Scientific & Engineering Properties</span>
                    </div>
                    <p className="text-[#D8D4CC] leading-relaxed">
                      {mat.engineeringProperty}
                    </p>
                  </div>

                  {/* Why Ancient Builders Chose It */}
                  <div className="mt-4 space-y-1.5">
                    <h4 className="text-xs font-bold text-[#F28C28] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
                      <span>Why Ancient Architects Selected It</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#D8D4CC] leading-relaxed font-serif">
                      {mat.whyAncientBuildersChoseIt}
                    </p>
                  </div>

                  {/* Key Characteristics Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {mat.keyCharacteristics.map((char, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] bg-[#20242B] text-[#D8D4CC] border border-white/8"
                      >
                        • {char}
                      </span>
                    ))}
                  </div>

                  {/* Seismic / Weather Resistance */}
                  <div className="mt-3.5 text-[11px] text-[#52B79C] font-mono bg-[#16745B]/15 border border-[#16745B]/30 p-2.5 rounded-xl">
                    <strong className="text-[#FFF3D6]">Seismic / Climate Resilience:</strong> {mat.seismicOrWeatherResistance}
                  </div>
                </div>

                {/* Monuments Built With This Material */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9B9A96] block">
                    Prominent Monuments Built With This Material:
                  </span>
                  <div className="space-y-2">
                    {mat.monumentsUsed.map((mon, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#0F1115]/90 border border-white/8 flex items-center justify-between gap-3 text-xs"
                      >
                        <div>
                          <span className="font-bold text-[#FFF3D6]">{mon.title}</span>
                          <span className="text-[#F4D06F] ml-1.5">({mon.state} • {mon.era})</span>
                          <p className="text-[11px] text-[#9B9A96] mt-0.5">{mon.detail}</p>
                        </div>
                        {mon.itemId && (
                          <button
                            onClick={() => handleOpenExhibit(mon.itemId)}
                            className="px-3 py-1 rounded-lg bg-[#F28C28]/20 hover:bg-[#F28C28] text-[#F28C28] hover:text-[#0F1115] border border-[#F28C28]/40 shrink-0 font-bold text-[11px] flex items-center gap-1 transition-all"
                          >
                            <span>Exhibit</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Knowledge Callout Banner with Royal Palette */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171A20] via-[#20242B] to-[#171A20] border-2 border-[#D4A017]/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="space-y-2 max-w-2xl relative z-10">
          <h3 className="text-lg font-bold text-[#FFF3D6] flex items-center gap-2 font-display">
            <Compass className="w-5 h-5 text-[#F28C28]" />
            <span>Curatorial Lesson for Students: The Mortarless Mystery</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#D8D4CC] leading-relaxed">
            Unlike European Gothic or Roman architecture that relied on lime cements and brick arches, Indian temple architects prioritized dry-stone interlocking masonry. In high-seismic zones like the Himalayas and Deccan, dry joints flex and dissipate ground tremors harmlessly without cracking brittle mortar joints!
          </p>
        </div>
        {onNavigateIndia && (
          <button
            onClick={onNavigateIndia}
            className="px-6 py-3 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-xs shrink-0 transition-all shadow-lg relative z-10 cursor-pointer"
          >
            Explore Geographic Map →
          </button>
        )}
      </div>
    </div>
  );
};
