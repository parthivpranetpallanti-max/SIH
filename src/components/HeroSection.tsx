import React from 'react';
import {
  Compass,
  Sparkles,
  MapPin,
  Landmark,
  Layers,
  ExternalLink,
  BookOpen,
  Palette,
  Music,
  Utensils,
  Hammer,
  Drama,
} from 'lucide-react';
import { CULTURAL_CATEGORIES } from '../data/categoriesData';
import { CultureCategory } from '../types';

interface HeroSectionProps {
  onExploreMap: () => void;
  onSelectCategory: (category: CultureCategory) => void;
  onExploreStates: () => void;
  onOpenNotebook: () => void;
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

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreMap,
  onSelectCategory,
  onExploreStates,
  onOpenNotebook,
}) => {
  return (
    <section
      id="museum-hero-section"
      className="relative overflow-hidden border-b border-[#D4A017]/25 bg-[#0F1115]"
    >
      {/* Background layer 1: Real heritage photograph of Taj Mahal & ancient temples with atmospheric sandstone & teal glow */}
      <div className="absolute inset-0 z-0 opacity-22 mix-blend-luminosity pointer-events-none">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg"
          alt="Taj Mahal Agra Heritage"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/80 to-transparent" />
      </div>

      {/* Background layer 2: Curated Indian Heritage Atmosphere — Saffron glow top-left, Peacock Teal glow bottom-right */}
      <div className="absolute top-[-10%] left-[15%] w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#F28C28]/15 via-[#D4A017]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[#176B87]/18 via-[#16745B]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Background layer 3: Subtle Indian Jaali & Mandala Geometry (Very low opacity 3-4%) */}
      <div className="absolute inset-0 bg-jaali-subtle pointer-events-none opacity-40" />

      {/* Decorative Traditional Indian Arch / Top Border Accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#F28C28] via-[#D4A017] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-18 lg:pt-20 lg:pb-24 text-center">
        {/* Museum Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171A20]/90 border border-[#D4A017]/40 text-[#F4D06F] text-xs font-semibold tracking-wider uppercase mb-6 shadow-md backdrop-blur-sm">
          <Landmark className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>National Digital Heritage Sanctuary • भारतीय विरासत संग्रहालय</span>
        </div>

        {/* Main Title: Warm Ivory with subtle antique-gold highlight */}
        <h1
          id="hero-museum-title"
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFF3D6] via-[#FFF3D6] to-[#F4D06F] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          VIRTUAL BHARAT MUSEUM
        </h1>

        {/* Subtitle: Warm saffron / soft gold tone */}
        <p
          id="hero-museum-subtitle"
          className="font-marcellus text-xl sm:text-2xl md:text-3xl text-[#F4D06F] italic mt-4 max-w-3xl mx-auto tracking-wide font-medium drop-shadow-sm"
        >
          “Explore India. Discover its Culture. Experience its Heritage.”
        </p>

        {/* Curator Mission Description */}
        <p className="mt-5 text-sm sm:text-base text-[#D8D4CC] max-w-2xl mx-auto leading-relaxed">
          A digital museum designed for students and heritage researchers across Bharat.
          Navigate through the authentic geographic and cultural hierarchy:
          <span className="block mt-2 font-semibold text-[#FFF3D6] text-xs sm:text-sm tracking-wide bg-[#171A20]/70 py-1.5 px-3 rounded-lg border border-white/5 inline-block">
            India → State → District → Culture → Monument • Art • Instrument • Clothing • Food • Craft • Performing Art
          </span>
        </p>

        {/* Hero Interactive Primary CTAs */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          {/* Primary Button: Rich Indian Saffron (#F28C28), dark charcoal text (#0F1115) */}
          <button
            id="hero-btn-explore-map"
            onClick={onExploreMap}
            className="px-6 py-3.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-sm tracking-wide shadow-[0_8px_22px_rgba(242,140,40,0.32)] flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Compass className="w-4 h-4 text-[#0F1115]" />
            <span>Explore Geographic India Map</span>
          </button>

          {/* Secondary Button: Transparent dark surface + Antique gold border + Ivory text */}
          <button
            id="hero-btn-explore-states"
            onClick={onExploreStates}
            className="px-6 py-3.5 rounded-xl bg-[#171A20]/80 hover:bg-[#D4A017]/25 text-[#FFF3D6] font-semibold text-sm border border-[#D4A017] hover:border-[#F4D06F] shadow-md flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
          >
            <MapPin className="w-4 h-4 text-[#D4A017]" />
            <span>Browse by State & District</span>
          </button>

          {/* Student Notebook Button: Cultural Teal theme (#123E3D bg, #16745B border, soft mint/ivory text) */}
          <button
            id="hero-btn-student-notebook"
            onClick={onOpenNotebook}
            className="px-5 py-3.5 rounded-xl bg-[#123E3D] hover:bg-[#16745B]/70 text-[#FFF3D6] font-semibold text-sm border border-[#16745B] hover:border-[#52b79c] flex items-center gap-2.5 transition-all duration-200 hover:shadow-[0_0_18px_rgba(22,116,91,0.45)] hover:-translate-y-0.5"
          >
            <BookOpen className="w-4 h-4 text-[#52b79c]" />
            <span>Student Notebook</span>
          </button>
        </div>

        {/* Source citation watermark on hero */}
        <div className="mt-7 flex items-center justify-center gap-2 text-[11px] text-[#9B9A96]">
          <span>Authentic photographs verified via Wikimedia Commons & Archaeological Survey of India (ASI). Zero 3D models.</span>
          <a
            href="https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4A017] hover:text-[#F4D06F] inline-flex items-center gap-0.5 underline transition-colors"
          >
            <span>Image Source</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* 7 Cultural Pillar Cards with Controlled Cultural Color Identity */}
        <div className="mt-12 pt-8 border-t border-white/8">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Layers className="w-4 h-4 text-[#F28C28]" />
            <span className="text-xs font-bold text-[#F4D06F] tracking-wider uppercase">
              The 7 Cultural Pillars of Bharat (सात सांस्कृतिक आयाम)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {CULTURAL_CATEGORIES.map((cat) => {
              const IconComponent = CATEGORY_ICON_MAP[cat.id] || Sparkles;
              return (
                <button
                  key={cat.id}
                  id={`hero-category-chip-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    // @ts-ignore
                    '--card-accent': cat.colorAccent,
                  }}
                  className="group relative p-3 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8 hover:border-[var(--card-accent)] transition-all duration-200 text-left flex flex-col justify-between shadow-md hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(0,0,0,0.6)] overflow-hidden"
                >
                  {/* Subtle Colored Top Indicator Line */}
                  <div
                    className="absolute top-0 inset-x-0 h-[3px] transition-opacity"
                    style={{ backgroundColor: cat.colorAccent }}
                  />

                  {/* Subtle Ambient Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: cat.colorAccent }}
                  />

                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${cat.colorAccent}20`,
                        border: `1px solid ${cat.colorAccent}40`,
                        color: cat.colorAccent,
                      }}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.colorAccent }}
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#FFF3D6] group-hover:text-white leading-tight">
                      {cat.name.split('&')[0].trim()}
                    </h4>
                    <p className="text-[10px] text-[#9B9A96] group-hover:text-[#D8D4CC] truncate mt-0.5">
                      {cat.hindiName}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
