import React, { useState, useEffect } from 'react';
import {
  Landmark,
  Search,
  Headphones,
  Award,
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Menu,
  X,
  Compass,
  Hammer,
  Ticket,
} from 'lucide-react';
import { museumAudio } from '../utils/audioGuide';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenQuiz: () => void;
  onOpenNotebook: () => void;
  onOpenCurator: () => void;
  onNavigateIndia: () => void;
  onNavigateGalleries: () => void;
  onNavigateMaterials: () => void;
  onOpenVisitorDesk: () => void;
  savedExhibitsCount: number;
  quizScore: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenQuiz,
  onOpenNotebook,
  onOpenCurator,
  onNavigateIndia,
  onNavigateGalleries,
  onNavigateMaterials,
  onOpenVisitorDesk,
  savedExhibitsCount,
  quizScore,
}) => {
  const [isAmbiencePlaying, setIsAmbiencePlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsAmbiencePlaying(museumAudio.getAmbienceState());
  }, []);

  const handleToggleAmbience = () => {
    const active = museumAudio.toggleAmbience();
    setIsAmbiencePlaying(active);
  };

  return (
    <header
      id="museum-main-header"
      className="sticky top-0 z-40 bg-gradient-to-r from-[#0F1115] via-[#171A20] to-[#0F1115] backdrop-blur-md border-b border-[#D4A017]/25 text-[#D8D4CC] shadow-lg shadow-black/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Logo & Title */}
          <div
            id="brand-header-logo"
            onClick={onNavigateIndia}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F28C28] via-[#D4A017] to-[#9E6510] flex items-center justify-center shadow-lg shadow-[#F28C28]/20 ring-1 ring-[#F4D06F]/50 group-hover:ring-[#FFF3D6] group-hover:scale-105 transition-all">
              <Landmark className="w-6 h-6 text-[#0F1115]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-wider text-[#FFF3D6] group-hover:text-[#F4D06F] transition-colors">
                  VIRTUAL BHARAT MUSEUM
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#F28C28]/15 text-[#F4D06F] border border-[#D4A017]/40 shadow-xs">
                  डिजिटल संग्रहालय
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#9B9A96] italic hidden sm:block tracking-wide">
                <span className="text-[#D4A017]/80">“</span>Explore India. Discover its Culture. Experience its Heritage.<span className="text-[#D4A017]/80">”</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Actions */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <button
              id="nav-btn-explore-map"
              onClick={onNavigateIndia}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#F28C28]/10 rounded-lg border border-transparent hover:border-[#F28C28]/30 transition-all hover:shadow-[0_0_12px_rgba(242,140,40,0.15)]"
            >
              <Compass className="w-4 h-4 text-[#D4A017] group-hover:text-[#F28C28] transition-colors" />
              <span>India Map</span>
            </button>

            <button
              id="nav-btn-culture-galleries"
              onClick={onNavigateGalleries}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#F28C28]/10 rounded-lg border border-transparent hover:border-[#F28C28]/30 transition-all hover:shadow-[0_0_12px_rgba(242,140,40,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-[#D4A017] group-hover:text-[#F28C28] transition-colors" />
              <span>7 Culture Galleries</span>
            </button>

            <button
              id="nav-btn-monument-materials"
              onClick={onNavigateMaterials}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#F28C28]/10 rounded-lg border border-transparent hover:border-[#F28C28]/30 transition-all hover:shadow-[0_0_12px_rgba(242,140,40,0.15)]"
            >
              <Hammer className="w-4 h-4 text-[#D4A017] group-hover:text-[#F28C28] transition-colors" />
              <span>Monument Materials</span>
            </button>

            <button
              id="nav-btn-visitor-desk"
              onClick={onOpenVisitorDesk}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FFF3D6] bg-[#D4A017]/15 hover:bg-[#F28C28]/25 border border-[#D4A017]/40 hover:border-[#F28C28]/60 rounded-lg transition-all shadow-xs"
            >
              <Ticket className="w-4 h-4 text-[#F4D06F] group-hover:text-[#FFF3D6] transition-colors" />
              <span>Visitor Fees & Hours</span>
            </button>

            <button
              id="nav-btn-curator-ai"
              onClick={onOpenCurator}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#F28C28]/10 rounded-lg border border-transparent hover:border-[#F28C28]/30 transition-all hover:shadow-[0_0_12px_rgba(242,140,40,0.15)]"
            >
              <Headphones className="w-4 h-4 text-[#D4A017] group-hover:text-[#F28C28] transition-colors" />
              <span>Ask Curator</span>
            </button>

            <button
              id="nav-btn-heritage-quiz"
              onClick={onOpenQuiz}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#F28C28]/10 rounded-lg border border-transparent hover:border-[#F28C28]/30 transition-all relative"
            >
              <Award className="w-4 h-4 text-[#D4A017] group-hover:text-[#F4D06F] transition-colors" />
              <span>Heritage Quiz</span>
              {quizScore > 0 && (
                <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-[#D4A017]/20 text-[#F4D06F] border border-[#D4A017]/40">
                  {quizScore} pts
                </span>
              )}
            </button>

            {/* Student Notebook Button (Cultural Teal theme: #123E3D bg, #16745B border, soft mint/ivory text) */}
            <button
              id="nav-btn-student-notebook"
              onClick={onOpenNotebook}
              className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#FFF3D6] bg-[#123E3D] hover:bg-[#16745B]/80 border border-[#16745B] hover:border-[#16745B] rounded-lg transition-all hover:shadow-[0_0_14px_rgba(22,116,91,0.5)] relative"
            >
              <BookOpen className="w-4 h-4 text-[#52b79c] group-hover:text-[#FFF3D6] transition-colors" />
              <span>Student Notebook</span>
              {savedExhibitsCount > 0 && (
                <span className="w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-full bg-[#16745B] text-[#FFF3D6] border border-[#52b79c]/40">
                  {savedExhibitsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Action Utilities */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <button
              id="nav-btn-search-trigger"
              onClick={onOpenSearch}
              className="px-2.5 py-1.5 text-[#D8D4CC] hover:text-[#F28C28] hover:bg-[#20242B] rounded-lg border border-white/10 transition-all flex items-center gap-2"
              title="Search monuments, arts, crafts, traditions..."
            >
              <Search className="w-4 h-4 text-[#D4A017]" />
              <span className="text-xs text-[#9B9A96] hidden xl:inline">Search Museum...</span>
              <kbd className="hidden xl:inline text-[10px] px-1.5 py-0.5 rounded bg-[#20242B] text-[#9B9A96] font-mono border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Indian Classical Ambient Tanpura Drone Player */}
            <button
              id="nav-btn-ambience-toggle"
              onClick={handleToggleAmbience}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isAmbiencePlaying
                  ? 'bg-[#F28C28]/20 text-[#FFF3D6] border-[#F28C28]/50 shadow-[0_0_12px_rgba(242,140,40,0.25)]'
                  : 'bg-[#171A20] text-[#9B9A96] hover:text-[#D8D4CC] border-white/10'
              }`}
              title={isAmbiencePlaying ? 'Pause Museum Tanpura Ambience' : 'Play Indian Classical Tanpura Ambience'}
            >
              {isAmbiencePlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-[#F28C28] animate-pulse" />
                  <span className="hidden sm:inline font-semibold">Tanpura: On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-[#9B9A96]" />
                  <span className="hidden sm:inline">Ambience</span>
                </>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="nav-btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#D8D4CC] hover:text-[#F28C28] rounded-lg hover:bg-white/5"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-gradient-to-b from-[#171A20] to-[#0F1115] border-b border-[#D4A017]/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in"
        >
          <p className="text-xs text-[#F4D06F] font-serif italic pb-1">
            “Explore India. Discover its Culture. Experience its Heritage.”
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => {
                onNavigateIndia();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20242B] text-[#D8D4CC] hover:text-[#F28C28] text-xs border border-white/10"
            >
              <Compass className="w-4 h-4 text-[#D4A017]" />
              <span>India Map</span>
            </button>
            <button
              onClick={() => {
                onNavigateGalleries();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20242B] text-[#D8D4CC] hover:text-[#F28C28] text-xs border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-[#D4A017]" />
              <span>7 Galleries</span>
            </button>
            <button
              onClick={() => {
                onNavigateMaterials();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20242B] text-[#D8D4CC] hover:text-[#F28C28] text-xs border border-white/10"
            >
              <Hammer className="w-4 h-4 text-[#D4A017]" />
              <span>Materials</span>
            </button>
            <button
              onClick={() => {
                onOpenVisitorDesk();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#D4A017]/15 text-[#FFF3D6] text-xs border border-[#D4A017]/40"
            >
              <Ticket className="w-4 h-4 text-[#F4D06F]" />
              <span>Visitor Fees</span>
            </button>
            <button
              onClick={() => {
                onOpenCurator();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20242B] text-[#D8D4CC] hover:text-[#F28C28] text-xs border border-white/10"
            >
              <Headphones className="w-4 h-4 text-[#D4A017]" />
              <span>Ask Curator</span>
            </button>
            <button
              onClick={() => {
                onOpenQuiz();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-[#20242B] text-[#D8D4CC] hover:text-[#F28C28] text-xs border border-white/10"
            >
              <Award className="w-4 h-4 text-[#D4A017]" />
              <span>Quiz ({quizScore} pts)</span>
            </button>
            <button
              onClick={() => {
                onOpenNotebook();
                setMobileMenuOpen(false);
              }}
              className="col-span-2 flex items-center justify-between p-2.5 rounded-lg bg-[#123E3D] text-[#FFF3D6] text-xs border border-[#16745B]"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#52b79c]" />
                <span>Student Museum Notebook</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#16745B] text-[#FFF3D6] font-bold text-[10px]">
                {savedExhibitsCount} saved
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
