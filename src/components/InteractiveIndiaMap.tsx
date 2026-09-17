import React, { useState } from 'react';
import { Compass, MapPin, ChevronRight, Sparkles } from 'lucide-react';
import { STATES_DATA, getStateById } from '../data/statesData';
import { IndiaZone } from '../types';

interface InteractiveIndiaMapProps {
  onSelectState: (stateId: string) => void;
}

const ZONES: { id: IndiaZone | 'All'; label: string; hindi: string; color: string }[] = [
  { id: 'All', label: 'All India', hindi: 'सम्पूर्ण भारत', color: '#F28C28' },
  { id: 'North', label: 'North India', hindi: 'उत्तर भारत', color: '#F28C28' },
  { id: 'South', label: 'South India', hindi: 'दक्षिण भारत', color: '#176B87' },
  { id: 'West', label: 'West India', hindi: 'पश्चिम भारत', color: '#D4A017' },
  { id: 'East', label: 'East India', hindi: 'पूर्व भारत', color: '#3155A6' },
  { id: 'Central', label: 'Central India', hindi: 'मध्य भारत', color: '#A85834' },
  { id: 'Northeast', label: 'Northeast India', hindi: 'पूर्वोत्तर भारत', color: '#16745B' },
];

interface MapNode {
  id: string;
  name: string;
  hindi: string;
  cx: number;
  cy: number;
  r: number;
  zone: IndiaZone;
  defaultFill: string;
  defaultStroke: string;
}

const MAP_NODES: MapNode[] = [
  { id: 'jammu-kashmir', name: 'J&K', hindi: 'जम्मू-कश्मीर', cx: 180, cy: 65, r: 23, zone: 'North', defaultFill: '#2E2721', defaultStroke: '#A87A4F' },
  { id: 'punjab', name: 'Punjab', hindi: 'पंजाब', cx: 155, cy: 115, r: 20, zone: 'North', defaultFill: '#352C22', defaultStroke: '#C48E55' },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', hindi: 'उत्तर प्रदेश', cx: 220, cy: 150, r: 28, zone: 'North', defaultFill: '#3D2C1F', defaultStroke: '#D4A017' },
  { id: 'rajasthan', name: 'Rajasthan', hindi: 'राजस्थान', cx: 130, cy: 170, r: 30, zone: 'West', defaultFill: '#3A2719', defaultStroke: '#F28C28' },
  { id: 'gujarat', name: 'Gujarat', hindi: 'गुजरात', cx: 95, cy: 225, r: 24, zone: 'West', defaultFill: '#35291C', defaultStroke: '#D4A017' },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', hindi: 'मध्य प्रदेश', cx: 195, cy: 215, r: 28, zone: 'Central', defaultFill: '#32251D', defaultStroke: '#A85834' },
  { id: 'bihar', name: 'Bihar', hindi: 'बिहार', cx: 275, cy: 175, r: 22, zone: 'East', defaultFill: '#242738', defaultStroke: '#3155A6' },
  { id: 'west-bengal', name: 'W. Bengal', hindi: 'पश्चिम बंगाल', cx: 305, cy: 225, r: 22, zone: 'East', defaultFill: '#20283A', defaultStroke: '#3155A6' },
  { id: 'assam', name: 'Assam', hindi: 'असम', cx: 345, cy: 165, r: 23, zone: 'Northeast', defaultFill: '#1C2E25', defaultStroke: '#16745B' },
  { id: 'odisha', name: 'Odisha', hindi: 'ओडिशा', cx: 270, cy: 260, r: 24, zone: 'East', defaultFill: '#222B3D', defaultStroke: '#3155A6' },
  { id: 'maharashtra', name: 'Maharashtra', hindi: 'महाराष्ट्र', cx: 155, cy: 275, r: 29, zone: 'West', defaultFill: '#38281E', defaultStroke: '#F28C28' },
  { id: 'karnataka', name: 'Karnataka', hindi: 'कर्नाटक', cx: 165, cy: 345, r: 26, zone: 'South', defaultFill: '#1A2C2C', defaultStroke: '#176B87' },
  { id: 'tamil-nadu', name: 'Tamil Nadu', hindi: 'तमिलनाडु', cx: 205, cy: 390, r: 27, zone: 'South', defaultFill: '#172E26', defaultStroke: '#16745B' },
  { id: 'kerala', name: 'Kerala', hindi: 'केरल', cx: 160, cy: 410, r: 20, zone: 'South', defaultFill: '#162C24', defaultStroke: '#16745B' },
];

const ZONE_BADGE_STYLES: Record<IndiaZone, { bg: string; text: string; border: string }> = {
  North: { bg: 'rgba(242, 140, 40, 0.15)', text: '#F4D06F', border: 'rgba(242, 140, 40, 0.4)' },
  South: { bg: 'rgba(23, 107, 135, 0.18)', text: '#64C2DB', border: 'rgba(23, 107, 135, 0.45)' },
  West: { bg: 'rgba(212, 160, 23, 0.16)', text: '#F4D06F', border: 'rgba(212, 160, 23, 0.4)' },
  East: { bg: 'rgba(49, 85, 166, 0.18)', text: '#8FAEFF', border: 'rgba(49, 85, 166, 0.45)' },
  Central: { bg: 'rgba(168, 88, 52, 0.18)', text: '#F2A07B', border: 'rgba(168, 88, 52, 0.45)' },
  Northeast: { bg: 'rgba(22, 116, 91, 0.18)', text: '#52B79C', border: 'rgba(22, 116, 91, 0.45)' },
};

export const InteractiveIndiaMap: React.FC<InteractiveIndiaMapProps> = ({ onSelectState }) => {
  const [selectedZone, setSelectedZone] = useState<IndiaZone | 'All'>('All');
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null);

  const filteredStates =
    selectedZone === 'All'
      ? STATES_DATA
      : STATES_DATA.filter((s) => s.zone === selectedZone);

  const hoveredStateData = hoveredStateId ? getStateById(hoveredStateId) : null;

  return (
    <section id="interactive-india-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F28C28] tracking-wider uppercase mb-1">
            <Compass className="w-4 h-4 text-[#F28C28]" />
            <span>Geographic Discovery Hierarchy • भौगोलिक खोज</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#FFF3D6]">
            Step 1: Discover Bharat by Region & State
          </h2>
          <p className="text-sm text-[#D8D4CC] mt-1 max-w-2xl">
            Select a state to enter its heritage gallery and explore its historic districts and cultural traditions.
          </p>
        </div>

        {/* Zone Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {ZONES.map((zone) => {
            const isSelected = selectedZone === zone.id;
            return (
              <button
                key={zone.id}
                id={`zone-filter-btn-${zone.id.toLowerCase()}`}
                onClick={() => setSelectedZone(zone.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-[0_4px_14px_rgba(242,140,40,0.35)]'
                    : 'bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] hover:bg-[#20242B] border border-white/8'
                }`}
              >
                <span>{zone.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Map Visual on Left & Interactive State Cards on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Geographic Visual Matrix / SVG Schematic Map Representation */}
        <div className="lg:col-span-4 bg-gradient-to-b from-[#171A20] to-[#20242B] rounded-2xl border border-[#D4A017]/30 p-5 shadow-xl relative overflow-hidden">
          {/* Subtle Jaali overlay */}
          <div className="absolute inset-0 bg-jaali-subtle opacity-30 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F28C28]" />
              <h3 className="text-sm font-bold text-[#FFF3D6] tracking-wide font-display">
                Bharat Regional Navigator
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#F4D06F] px-2.5 py-0.5 rounded-full bg-[#D4A017]/15 border border-[#D4A017]/30">
              {filteredStates.length} States / UTs
            </span>
          </div>

          {/* Interactive Geographic Map SVG */}
          <div className="relative w-full aspect-[4/5] bg-[#0F1115] rounded-xl p-2 flex items-center justify-center border border-white/8 shadow-inner">
            <svg
              viewBox="0 0 400 450"
              className="w-full h-full drop-shadow-md select-none"
              aria-label="Interactive India States Schematic Map"
            >
              <defs>
                <filter id="glow-saffron" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Geographic coastline outline */}
              <path
                d="M 180,30 L 220,50 L 250,90 L 280,120 L 330,130 L 370,140 L 380,170 L 350,180 L 310,180 L 280,200 L 270,240 L 260,280 L 230,340 L 200,390 L 190,420 L 180,390 L 150,340 L 130,280 L 100,260 L 70,220 L 90,180 L 120,150 L 140,110 Z"
                fill="#171A20"
                stroke="#D4A017"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-35"
              />

              {/* Geographic Zones as Interactive Nodes with Culturally Derived Hues */}
              {MAP_NODES.map((node) => {
                const isHovered = hoveredStateId === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer transition-transform duration-150"
                    style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                    onClick={() => onSelectState(node.id)}
                    onMouseEnter={() => setHoveredStateId(node.id)}
                    onMouseLeave={() => setHoveredStateId(null)}
                  >
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={node.r}
                      fill={isHovered ? '#F28C28' : node.defaultFill}
                      stroke={isHovered ? '#FFF3D6' : node.defaultStroke}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      filter={isHovered ? 'url(#glow-saffron)' : undefined}
                      className="transition-all duration-200"
                    />
                    <text
                      cx={node.cx}
                      cy={node.cy + 4}
                      textAnchor="middle"
                      fill={isHovered ? '#0F1115' : '#FFF3D6'}
                      fontSize={node.r > 25 ? '8.5' : '7.5'}
                      fontWeight="bold"
                      className="pointer-events-none select-none transition-colors"
                    >
                      {node.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Elegant Tooltip overlay on Map hover */}
            {hoveredStateData && (
              <div className="absolute top-3 inset-x-3 p-2.5 rounded-xl bg-[#171A20]/95 backdrop-blur-md border border-[#F28C28]/60 shadow-xl text-center pointer-events-none animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#FFF3D6]">
                  <span>{hoveredStateData.name}</span>
                  <span className="text-[#F4D06F] font-serif">({hoveredStateData.hindiName})</span>
                </div>
                <p className="text-[10px] text-[#D8D4CC] truncate mt-0.5">
                  Capital: {hoveredStateData.capital} • {hoveredStateData.zone} India
                </p>
              </div>
            )}
          </div>

          <p className="text-[11px] text-[#9B9A96] text-center mt-3 font-medium">
            Click any geographic hub or select from the cards on the right to start exploring.
          </p>
        </div>

        {/* State Heritage Cards Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredStates.map((state) => {
              const isHovered = hoveredStateId === state.id;
              const badge = ZONE_BODY_BADGE(state.zone);
              return (
                <div
                  key={state.id}
                  id={`state-card-${state.id}`}
                  onMouseEnter={() => setHoveredStateId(state.id)}
                  onMouseLeave={() => setHoveredStateId(null)}
                  onClick={() => onSelectState(state.id)}
                  className={`group rounded-2xl border transition-all duration-250 cursor-pointer overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#171A20] to-[#20242B] ${
                    isHovered
                      ? 'border-[#F28C28] shadow-[0_14px_30px_-6px_rgba(0,0,0,0.7),0_0_20px_rgba(242,140,40,0.22)] -translate-y-1.5 ring-1 ring-[#F28C28]/50'
                      : 'border-white/8 hover:border-[#D4A017]/60 shadow-md'
                  }`}
                  style={{
                    boxShadow: isHovered
                      ? undefined
                      : 'inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 6px 18px -4px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  {/* Real Photo Banner with Image Source attribution */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#0F1115]">
                    <img
                      src={state.heroImage}
                      alt={state.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/45 to-transparent" />

                    {/* Zone pill with Cultural Accent */}
                    <div
                      className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm border"
                      style={{
                        backgroundColor: badge.bg,
                        color: badge.text,
                        borderColor: badge.border,
                      }}
                    >
                      {state.zone} India
                    </div>

                    {/* Image Source Caption */}
                    <div className="absolute bottom-1.5 right-2 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded text-[9px] text-[#D8D4CC] border border-white/5">
                      Source: {state.imageSource.split('/')[0]}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display font-bold text-lg text-[#FFF3D6] group-hover:text-[#F28C28] transition-colors">
                          {state.name}
                        </h3>
                        <span className="font-marcellus text-xs text-[#F4D06F] font-medium">
                          {state.hindiName}
                        </span>
                      </div>

                      <p className="text-xs text-[#D8D4CC] mt-1.5 line-clamp-2 leading-relaxed">
                        {state.description}
                      </p>

                      {/* Districts & Highlights snippet */}
                      <div className="mt-3.5 pt-3 border-t border-white/8 flex items-center justify-between text-xs text-[#9B9A96]">
                        <span>
                          Districts: <strong className="text-[#FFF3D6]">{state.districts.length} Featured</strong>
                        </span>
                        <span>
                          Capital: <strong className="text-[#FFF3D6]">{state.capital}</strong>
                        </span>
                      </div>

                      {/* Notable highlights badges */}
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {state.districts.slice(0, 3).map((d) => (
                          <span
                            key={d.id}
                            className="px-2 py-0.5 rounded-md text-[10px] bg-[#20242B] text-[#D8D4CC] border border-white/10"
                          >
                            {d.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Action footer */}
                    <div className="mt-4 pt-3 border-t border-white/8 flex items-center justify-between text-xs font-bold text-[#F28C28] group-hover:text-[#F4D06F] transition-colors">
                      <span>Enter State Heritage Gallery</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

function ZONE_BODY_BADGE(zone: IndiaZone) {
  return ZONE_BADGE_STYLES[zone] || ZONE_BADGE_STYLES.North;
}
