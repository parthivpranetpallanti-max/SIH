import React from 'react';
import { Landmark, ExternalLink, Heart, Shield, Compass, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigateIndia: () => void;
  onNavigateGalleries: () => void;
  onOpenQuiz: () => void;
  onOpenNotebook: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateIndia,
  onNavigateGalleries,
  onOpenQuiz,
  onOpenNotebook,
}) => {
  return (
    <footer
      id="museum-footer"
      className="bg-[#0A0C10] border-t border-[#D4A017]/25 text-[#D8D4CC] pt-12 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F28C28] to-[#D4A017] flex items-center justify-center shadow-md">
                <Landmark className="w-5 h-5 text-[#0F1115]" />
              </div>
              <span className="font-display font-bold text-lg text-[#FFF3D6] tracking-wider">
                VIRTUAL BHARAT MUSEUM
              </span>
            </div>
            <p className="font-marcellus text-xs text-[#F4D06F] italic">
              “Explore India. Discover its Culture. Experience its Heritage.”
            </p>
            <p className="text-xs text-[#9B9A96] max-w-md leading-relaxed">
              An open digital museum built for students across India to explore the historic architecture, classical performing arts, sacred music traditions, GI-tagged crafts, and regional culinary legacy of Bharat.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#9B9A96]">
              <Shield className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Authentic photographs from verified public sources & Wikimedia Commons. No 3D models.</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div>
            <h4 className="text-xs font-bold text-[#F4D06F] uppercase tracking-wider mb-3 font-display">
              Museum Exploration
            </h4>
            <ul className="space-y-2 text-xs text-[#9B9A96]">
              <li>
                <button
                  onClick={onNavigateIndia}
                  className="hover:text-[#FFF3D6] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Compass className="w-3 h-3 text-[#F28C28]" />
                  <span>Geographic India Map</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigateGalleries}
                  className="hover:text-[#FFF3D6] transition-colors cursor-pointer"
                >
                  7 Cultural Discipline Galleries
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuiz}
                  className="hover:text-[#FFF3D6] transition-colors cursor-pointer"
                >
                  Student Heritage Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenNotebook}
                  className="hover:text-[#FFF3D6] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3 h-3 text-[#52B79C]" />
                  <span>Student Study Notebook</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Archival & Research Citations */}
          <div>
            <h4 className="text-xs font-bold text-[#F4D06F] uppercase tracking-wider mb-3 font-display">
              Archival & Reference Sources
            </h4>
            <ul className="space-y-2 text-xs text-[#9B9A96]">
              <li>
                <a
                  href="https://asi.nic.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFF3D6] flex items-center gap-1 transition-colors"
                >
                  <span>Archaeological Survey of India (ASI)</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://whc.unesco.org/en/statesparties/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFF3D6] flex items-center gap-1 transition-colors"
                >
                  <span>UNESCO World Heritage Sites in India</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://commons.wikimedia.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFF3D6] flex items-center gap-1 transition-colors"
                >
                  <span>Wikimedia Commons Heritage Media</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://indiaculture.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FFF3D6] flex items-center gap-1 transition-colors"
                >
                  <span>Ministry of Culture, Government of India</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9B9A96]">
          <p>© {new Date().getFullYear()} Virtual Bharat Museum (डिजिटल संग्रहालय). Free educational resource for students.</p>
          <p className="flex items-center gap-1">
            <span>Preserving Indian Heritage with</span>
            <Heart className="w-3 h-3 text-[#A83A68] fill-current" />
            <span>for Bharat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
