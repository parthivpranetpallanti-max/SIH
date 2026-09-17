import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ExternalLink,
  BookOpen,
  Bookmark,
  BookmarkCheck,
  Check,
  Share2,
  MapPin,
  Landmark,
  Sparkles,
  Award,
  Maximize2,
  Hammer,
  HelpCircle,
  Ticket,
} from 'lucide-react';
import { HeritageItem, NotebookEntry } from '../types';
import { museumAudio } from '../utils/audioGuide';

interface ItemDetailModalProps {
  item: HeritageItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (item: HeritageItem, userNotes?: string, studyTag?: NotebookEntry['studyTag']) => void;
  savedNotes?: string;
  savedTag?: NotebookEntry['studyTag'];
  onNavigateState?: (stateId: string) => void;
  onNavigateDistrict?: (districtId: string) => void;
  onOpenVisitorDesk?: (monumentTitle?: string) => void;
}

// Material color mapper for earthy stone, terracotta, marble, wood chips
function getMaterialChipStyle(mat: string): { bg: string; text: string; border: string } {
  const m = mat.toLowerCase();
  if (m.includes('marble')) return { bg: 'rgba(255, 243, 214, 0.12)', text: '#FFF3D6', border: 'rgba(255, 243, 214, 0.35)' };
  if (m.includes('sandstone') || m.includes('terracotta') || m.includes('brick')) return { bg: 'rgba(168, 88, 52, 0.22)', text: '#F2A07B', border: 'rgba(168, 88, 52, 0.45)' };
  if (m.includes('granite') || m.includes('basalt') || m.includes('stone')) return { bg: 'rgba(155, 154, 150, 0.18)', text: '#D8D4CC', border: 'rgba(155, 154, 150, 0.35)' };
  if (m.includes('wood') || m.includes('timber') || m.includes('cedar') || m.includes('teak')) return { bg: 'rgba(133, 68, 21, 0.22)', text: '#F4D06F', border: 'rgba(212, 160, 23, 0.4)' };
  if (m.includes('silk') || m.includes('cotton') || m.includes('zari') || m.includes('pigment')) return { bg: 'rgba(168, 58, 104, 0.2)', text: '#F5A3C7', border: 'rgba(168, 58, 104, 0.4)' };
  if (m.includes('bronze') || m.includes('brass') || m.includes('bell metal') || m.includes('iron')) return { bg: 'rgba(212, 160, 23, 0.2)', text: '#F4D06F', border: 'rgba(212, 160, 23, 0.4)' };
  return { bg: 'rgba(23, 107, 135, 0.18)', text: '#64C2DB', border: 'rgba(23, 107, 135, 0.35)' };
}

// Curated "Did You Know?" fact generator based on the item
function getDidYouKnowFact(item: HeritageItem): string {
  if (item.id === 'taj-mahal') {
    return 'The Taj Mahal shifts its visual tint throughout the day — appearing rosy pink in the early dawn, pristine ivory white at noon, and golden bronze beneath the moonlight. Furthermore, its four minarets are tilted slightly outward by 2 degrees so that in the event of an earthquake, they fall away from the sacred tomb.';
  }
  if (item.id === 'sun-temple-konark') {
    return 'The 24 colossal stone wheels of Konark function as precise sundials. By calculating the shadow cast on the central spoke of the wheel, ancient astronomers could calculate the exact local time down to a single minute!';
  }
  if (item.id === 'brihadisvara-temple') {
    return 'The majestic Kumbam (apex dome cap) weighs approximately 80 tons (80,000 kilograms) carved out of a single monolithic granite boulder. It was raised to the 216-foot summit using a 6-kilometer-long inclined ramp with elephants and wooden rollers in 1010 CE.';
  }
  if (item.id === 'qutb-minar') {
    return 'The Iron Pillar standing in the courtyard has stood exposed to Delhi’s rain and humidity for over 1,600 years without rusting, thanks to ancient Indian metallurgists creating a protective high-phosphorus iron-oxide-phosphate film.';
  }
  if (item.id === 'hampi-vijayanagara') {
    return 'The 56 stone pillars of the Vittala Temple are carved out of resonant acoustic granite. When gently tapped with fingers, they produce the seven musical notes (Sa, Re, Ga, Ma, Pa, Dha, Ni) of classical Indian Carnatic octaves.';
  }
  if (item.id === 'meenakshi-amman') {
    return 'The temple houses over 33,000 intricately carved stucco sculptures across its 14 towering gopurams, depicting cosmological battles, celestial musicians, and sacred stories from Tamil Sangam literature.';
  }
  if (item.id === 'fatehpur-sikri') {
    return 'Buland Darwaza is the highest gateway in the world at 54 meters (177 feet). An inscription on its arch reads: "The world is a bridge, pass over it, but build no house upon it," quoting Jesus in Arabic.';
  }
  if (item.category === 'instrument') {
    return `In classical Indian musicology, the sound resonance of the ${item.title} is tuned to the natural frequency of the human voice (Nada Brahma), with sympathetic resonance strings vibrating in acoustic harmony without even being plucked.`;
  }
  if (item.category === 'art') {
    return `Traditional pigments in ${item.title} are derived exclusively from natural minerals, crushed rubies, indigo leaves, soot from mustard-oil lamps, and 24-karat beaten gold leaf (Vark) that never fades over centuries.`;
  }
  return `This master heritage treasure was crafted during the ${item.dynastyOrTradition} era, serving as an irreplaceable anchor of regional identity and artistic genius passed down through generations.`;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item,
  onClose,
  isSaved,
  onToggleSave,
  savedNotes = '',
  savedTag = 'General',
  onNavigateState,
  onNavigateDistrict,
  onOpenVisitorDesk,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAudioPaused, setIsAudioPaused] = useState(false);
  const [notesText, setNotesText] = useState(savedNotes);
  const [selectedTag, setSelectedTag] = useState<NotebookEntry['studyTag']>(savedTag);
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  useEffect(() => {
    setNotesText(savedNotes);
    setSelectedTag(savedTag);
    return () => {
      museumAudio.stopGuide();
      setIsPlayingAudio(false);
      setIsAudioPaused(false);
    };
  }, [item, savedNotes, savedTag]);

  if (!item) return null;

  const handlePlayAudio = () => {
    if (isAudioPaused) {
      museumAudio.resumeGuide();
      setIsAudioPaused(false);
      setIsPlayingAudio(true);
    } else {
      setIsPlayingAudio(true);
      setIsAudioPaused(false);
      museumAudio.speakGuide(
        item.audioGuideScript,
        () => {
          setIsPlayingAudio(true);
          setIsAudioPaused(false);
        },
        () => {
          setIsPlayingAudio(false);
          setIsAudioPaused(false);
        },
        () => {
          setIsPlayingAudio(false);
          setIsAudioPaused(false);
        }
      );
    }
  };

  const handlePauseAudio = () => {
    museumAudio.pauseGuide();
    setIsAudioPaused(true);
  };

  const handleStopAudio = () => {
    museumAudio.stopGuide();
    setIsPlayingAudio(false);
    setIsAudioPaused(false);
  };

  const handleSaveToNotebook = () => {
    onToggleSave(item, notesText, selectedTag);
    if (!isSaved) {
      setNoteSavedFeedback(true);
      setTimeout(() => setNoteSavedFeedback(false), 2500);
    }
  };

  const handleSaveNotesOnly = () => {
    onToggleSave(item, notesText, selectedTag);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2500);
  };

  const handleCopyCitation = () => {
    const citation = `“${item.title} (${item.hindiTitle})”, ${item.dynastyOrTradition}, ${item.districtName}, ${item.stateName}. Virtual Bharat Museum Digital Collection. Image Source: ${item.imageSource}.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  // Derive material chips for monument/art/craft
  const rawMaterials = [
    ...item.architecturalStyleOrMedium.split(/[,&/]/),
    ...(item.category === 'monument' ? ['Sandstone', 'Marble', 'Granite', 'Lime Plaster'] : []),
  ]
    .map((m) => m.trim())
    .filter((m) => m.length > 2 && !m.toLowerCase().includes('architecture') && !m.toLowerCase().includes('style'))
    .slice(0, 5);

  const didYouKnowFact = getDidYouKnowFact(item);

  return (
    <div
      id="museum-item-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-gradient-to-b from-[#171A20] to-[#0F1115] border border-[#D4A017]/35 rounded-2xl shadow-2xl overflow-hidden my-6 text-[#D8D4CC] animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Close Button */}
        <button
          id="modal-btn-close"
          onClick={() => {
            museumAudio.stopGuide();
            onClose();
          }}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0F1115]/80 hover:bg-[#F28C28] text-[#FFF3D6] hover:text-[#0F1115] border border-white/20 transition-all shadow-lg cursor-pointer"
          aria-label="Close Museum Exhibit"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Real Photograph Hero Showcase (NO 3D MODELS) with dark-to-transparent overlay */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[#0F1115]">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className="w-full h-full object-cover object-center scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171A20] via-[#171A20]/40 to-transparent" />

          {/* Fullscreen Button */}
          <button
            id="modal-btn-fullscreen-img"
            onClick={() => setIsFullscreenImage(true)}
            className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0F1115]/80 hover:bg-[#171A20] text-xs text-[#FFF3D6] border border-white/20 backdrop-blur-md shadow-md transition-all hover:border-[#D4A017]"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>High-Res Photo</span>
          </button>

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-6 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-[#F28C28] text-[#0F1115] text-xs font-extrabold uppercase tracking-wider shadow-md">
              {item.category.replace('_', ' ')}
            </span>
            {item.unescoStatus && (
              <span className="px-3 py-1 rounded-lg bg-[#176B87] text-[#FFF3D6] text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1 border border-[#64C2DB]/40">
                <Award className="w-3.5 h-3.5" />
                <span>UNESCO World Heritage</span>
              </span>
            )}
            {item.giTag && (
              <span className="px-3 py-1 rounded-lg bg-[#16745B] text-[#FFF3D6] text-xs font-bold uppercase tracking-wider shadow-md border border-[#52B79C]/40">
                GI Tag Registered
              </span>
            )}
          </div>

          {/* Mandatory Image Source Caption in Photo Corner */}
          <div className="absolute bottom-4 right-4 bg-[#0F1115]/90 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-lg text-[11px] text-[#D8D4CC] flex items-center gap-1.5 shadow-lg">
            <span>Source: <strong className="text-[#FFF3D6]">{item.imageSource.split('/')[0]}</strong></span>
            <a
              href={item.imageSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A017] hover:text-[#F4D06F] underline inline-flex items-center gap-0.5 ml-1"
            >
              <span>Verify</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Modal Main Content Container */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[calc(85vh-20rem)] overflow-y-auto">
          {/* Header & Titles with Large Ivory Typography and Saffron/Gold Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#F28C28] mb-1.5 font-medium">
              <button
                onClick={() => onNavigateState && onNavigateState(item.stateId)}
                className="hover:underline flex items-center gap-1 text-[#F4D06F]"
              >
                <MapPin className="w-3 h-3 text-[#F28C28]" />
                <span>{item.stateName}</span>
              </button>
              <span className="text-[#9B9A96]">/</span>
              <button
                onClick={() => onNavigateDistrict && onNavigateDistrict(item.districtId)}
                className="hover:underline font-semibold text-[#F28C28]"
              >
                {item.districtName} District
              </button>
            </div>

            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#FFF3D6]">
                {item.title}
              </h2>
              <span className="font-marcellus text-xl sm:text-2xl text-[#F4D06F] font-medium">
                {item.hindiTitle}
              </span>
            </div>

            <p className="mt-2 text-sm text-[#D8D4CC] leading-relaxed italic font-serif">
              {item.curatorSummary}
            </p>
          </div>

          {/* Interactive Audio Guide Player Plaque */}
          <div
            id="museum-audio-guide-player"
            className="p-4 rounded-xl bg-gradient-to-r from-[#171A20] via-[#20242B] to-[#171A20] border border-[#D4A017]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center shrink-0">
                <Volume2 className={`w-5 h-5 text-[#F28C28] ${isPlayingAudio && !isAudioPaused ? 'animate-pulse' : ''}`} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                  Virtual Museum Audio Guide (ध्वनि मार्गदर्शिका)
                </h4>
                <p className="text-xs text-[#D8D4CC]">
                  {isPlayingAudio
                    ? isAudioPaused
                      ? 'Narration paused. Click Play to resume.'
                      : 'Now narrating exhibit history & architecture...'
                    : 'Listen to the curated museum audio walkthrough of this exhibit.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              {!isPlayingAudio || isAudioPaused ? (
                <button
                  id="audio-btn-play"
                  onClick={handlePlayAudio}
                  className="px-4 py-2 rounded-lg bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-[#F28C28]/20"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isAudioPaused ? 'Resume Guide' : 'Play Audio Guide'}</span>
                </button>
              ) : (
                <button
                  id="audio-btn-pause"
                  onClick={handlePauseAudio}
                  className="px-4 py-2 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#FFF3D6] font-bold text-xs flex items-center gap-1.5 border border-[#D4A017]/50 transition-all"
                >
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause</span>
                </button>
              )}

              {isPlayingAudio && (
                <button
                  id="audio-btn-stop"
                  onClick={handleStopAudio}
                  className="p-2 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/10 transition-colors"
                  title="Stop audio guide"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Curatorial Plaque Details Grid with Saffron/Gold/Teal Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8">
              <span className="text-[10px] font-bold text-[#9B9A96] uppercase tracking-wider block">
                Dynasty / Tradition
              </span>
              <p className="text-xs font-bold text-[#FFF3D6] mt-1">
                {item.dynastyOrTradition}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8">
              <span className="text-[10px] font-bold text-[#9B9A96] uppercase tracking-wider block">
                Period / Century
              </span>
              <p className="text-xs font-bold text-[#F4D06F] mt-1">
                {item.period} ({item.era})
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8">
              <span className="text-[10px] font-bold text-[#9B9A96] uppercase tracking-wider block">
                Style / Medium
              </span>
              <p className="text-xs font-bold text-[#FFF3D6] mt-1">
                {item.architecturalStyleOrMedium}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8">
              <span className="text-[10px] font-bold text-[#9B9A96] uppercase tracking-wider block">
                Geographic Location
              </span>
              <p className="text-xs font-bold text-[#F28C28] mt-1">
                {item.districtName}, {item.stateName}
              </p>
            </div>
          </div>

          {/* 1. History & Significance: Terracotta / Saffron Accent Plaque */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#171A20] to-[#20242B] border border-white/10 border-l-4 border-l-[#F28C28] space-y-2 shadow-sm">
            <h4 className="text-xs font-bold text-[#F28C28] uppercase tracking-wider flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Historical Context & Cultural Significance</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#D8D4CC] leading-relaxed">
              {item.historicalContext}
            </p>
          </div>

          {/* 2. Architecture & Design: Antique Gold / Sandstone Accent Plaque */}
          {item.architecturalHighlights.length > 0 && (
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#171A20] to-[#20242B] border border-white/10 border-l-4 border-l-[#D4A017] space-y-2.5 shadow-sm">
              <h4 className="text-xs font-bold text-[#F4D06F] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Architecture, Engineering & Design Highlights</span>
              </h4>
              <ul className="space-y-2">
                {item.architecturalHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#D8D4CC]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] mt-1.5 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. Materials Used: Earthy stone / Terracotta / Mineral Chips */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#171A20] to-[#20242B] border border-white/10 border-l-4 border-l-[#16745B] space-y-2.5 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-[#52B79C] uppercase tracking-wider flex items-center gap-2">
                <Hammer className="w-3.5 h-3.5 text-[#16745B]" />
                <span>Primary Materials & Construction Mediums Used</span>
              </h4>
              <span className="text-[10px] text-[#9B9A96]">Archaeological Specification</span>
            </div>
            <p className="text-xs text-[#D8D4CC] leading-relaxed">
              Constructed and forged from authentic indigenous geological stone, timber, and traditional mortars:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {rawMaterials.map((mat, idx) => {
                const style = getMaterialChipStyle(mat);
                return (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold border flex items-center gap-1.5 shadow-xs"
                    style={{
                      backgroundColor: style.bg,
                      color: style.text,
                      borderColor: style.border,
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: style.text }} />
                    <span>{mat}</span>
                  </span>
                );
              })}
            </div>
          </div>

          {/* 4. “DID YOU KNOW?” SECTION (Visually distinctive Discovery Card: Deep teal/dark blue #0C2431 - #123042, Antique Gold border, mandala pattern) */}
          <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0C2431] via-[#102B3A] to-[#123042] border-2 border-[#D4A017]/80 shadow-xl overflow-hidden">
            {/* Subtle Mandala Geometric Pattern Overlay */}
            <div className="absolute inset-0 bg-mandala-subtle opacity-40 pointer-events-none" />

            <div className="relative z-10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#D4A017]/20 border border-[#D4A017] flex items-center justify-center shrink-0 shadow-md">
                <Sparkles className="w-5 h-5 text-[#F4D06F]" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4A017]/20 border border-[#D4A017]/50 text-[10px] font-extrabold uppercase tracking-widest text-[#F4D06F]">
                  <span>🔎 DID YOU KNOW? • क्या आप जानते हैं?</span>
                </div>
                <h4 className="text-sm font-bold text-[#FFF3D6] font-display">
                  Fascinating Museum Revelation: {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#D8D4CC] leading-relaxed pt-0.5">
                  {didYouKnowFact}
                </p>
              </div>
            </div>
          </div>

          {/* 5. Cultural Significance & Fast Facts: Royal Blue / Peacock Teal Accent Plaque */}
          {item.keyFacts.length > 0 && (
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#171A20] to-[#20242B] border border-white/10 border-l-4 border-l-[#176B87] space-y-3 shadow-sm">
              <h4 className="text-xs font-bold text-[#64C2DB] uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#176B87]" />
                <span>Fast Facts for Heritage Researchers & Students</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {item.keyFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#0F1115]/80 border border-white/8 flex items-center justify-between"
                  >
                    <span className="text-[#9B9A96]">{fact.label}:</span>
                    <strong className="text-[#FFF3D6] text-right ml-2">{fact.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Monument Visitor Desk Button for Monuments */}
          {item.category === 'monument' && onOpenVisitorDesk && (
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#171A20] via-[#20242B] to-[#171A20] border border-[#D4A017]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/40 flex items-center justify-center shrink-0">
                  <Ticket className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                    Official Monument Entry Fees, Timings & Visiting Rules
                  </h4>
                  <p className="text-xs text-[#D8D4CC]">
                    Check entry ticket rates for Indian & Foreign visitors, free entry for children under 15, weekly closures, and photo ID rules.
                  </p>
                </div>
              </div>
              <button
                onClick={() => onOpenVisitorDesk(item.title)}
                className="px-4 py-2.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-md transition-all"
              >
                <Ticket className="w-4 h-4 fill-current" />
                <span>Check Entry Fees & Hours</span>
              </button>
            </div>
          )}

          {/* Student Notebook & Personal Study Notes (Cultural Teal Theme #123E3D) */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#123E3D]/40 border border-[#16745B] space-y-3 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#52B79C]" />
                <h4 className="text-xs font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                  Student Museum Notebook & Study Notes
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value as NotebookEntry['studyTag'])}
                  className="bg-[#0F1115] border border-[#16745B] text-[#FFF3D6] text-[11px] rounded-lg px-2.5 py-1.5 focus:outline-none"
                >
                  <option value="General">Tag: General</option>
                  <option value="Exam Topic">Tag: Exam Topic</option>
                  <option value="Need to Revise">Tag: Need to Revise</option>
                  <option value="Research Complete">Tag: Research Complete</option>
                </select>

                <button
                  id="btn-bookmark-exhibit"
                  onClick={handleSaveToNotebook}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    isSaved
                      ? 'bg-[#16745B] text-[#FFF3D6] font-bold shadow-md'
                      : 'bg-[#171A20] hover:bg-[#20242B] text-[#FFF3D6] border border-[#16745B]'
                  }`}
                >
                  {isSaved ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 text-[#52B79C]" />
                      <span>Saved in Notebook</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>Save Exhibit</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <textarea
              id="student-notes-textarea"
              value={notesText}
              onChange={(e) => setNotesText(e.target.value)}
              placeholder="Add your study notes, essay points, or exam questions for school projects here..."
              rows={3}
              className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#0F1115] border border-[#16745B]/50 text-[#D8D4CC] placeholder-[#9B9A96] focus:outline-none focus:border-[#52B79C] resize-none font-mono leading-relaxed"
            />

            <div className="flex items-center justify-between text-xs">
              <span className="text-[11px] text-[#9B9A96]">
                {noteSavedFeedback ? (
                  <span className="text-[#52B79C] font-semibold flex items-center gap-1 animate-in fade-in">
                    <Check className="w-3.5 h-3.5" /> Note Saved to Your Browser!
                  </span>
                ) : (
                  'Notes are automatically saved locally for your revision.'
                )}
              </span>

              <button
                type="button"
                onClick={handleSaveNotesOnly}
                className="px-3.5 py-1.5 rounded-lg bg-[#16745B] hover:bg-[#52B79C] text-[#FFF3D6] hover:text-[#0F1115] font-bold text-xs flex items-center gap-1 shadow-sm transition-all"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Note</span>
              </button>
            </div>
          </div>

          {/* Footer Action Bar: Copy Citation & Tags */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9B9A96] border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[10px] bg-[#20242B] text-[#D8D4CC] border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button
              id="btn-copy-citation"
              onClick={handleCopyCitation}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/10 shrink-0 transition-colors"
            >
              {copiedCitation ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#16745B]" />
                  <span className="text-[#52B79C]">Citation Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Copy Exhibit Citation</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {isFullscreenImage && (
        <div
          id="fullscreen-image-modal"
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4"
          onClick={() => setIsFullscreenImage(false)}
        >
          <button
            onClick={() => setIsFullscreenImage(false)}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#171A20] text-white hover:bg-[#20242B] border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
          <div className="mt-3 text-center text-xs text-[#D8D4CC]">
            <p className="font-semibold text-[#FFF3D6]">{item.title} — {item.districtName}, {item.stateName}</p>
            <p className="text-[11px] text-[#9B9A96] mt-0.5">Image Source: {item.imageSource}</p>
          </div>
        </div>
      )}
    </div>
  );
};
