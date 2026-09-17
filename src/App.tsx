import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BreadcrumbBar } from './components/BreadcrumbBar';
import { HeroSection } from './components/HeroSection';
import { InteractiveIndiaMap } from './components/InteractiveIndiaMap';
import { StateView } from './components/StateView';
import { DistrictView } from './components/DistrictView';
import { CultureGalleriesSection } from './components/CultureGalleriesSection';
import { MonumentMaterialsSection } from './components/MonumentMaterialsSection';
import { ItemDetailModal } from './components/ItemDetailModal';
import { SearchModal } from './components/SearchModal';
import { StudentQuizModal } from './components/StudentQuizModal';
import { StudentNotebookDrawer } from './components/StudentNotebookDrawer';
import { CuratorChatModal } from './components/CuratorChatModal';
import { VisitorDeskChatModal } from './components/VisitorDeskChatModal';
import { Footer } from './components/Footer';
import { Ticket } from 'lucide-react';

import { CultureCategory, HeritageItem, NotebookEntry, StateData, District } from './types';
import { STATES_DATA, getStateById, getDistrictById } from './data/statesData';
import { notebookStorageService } from './services';

type ViewMode = 'home' | 'state' | 'district' | 'galleries' | 'materials';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedStateId, setSelectedStateId] = useState<string | null>(null);
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CultureCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<HeritageItem | null>(null);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);
  const [isCuratorOpen, setIsCuratorOpen] = useState(false);
  const [isVisitorDeskOpen, setIsVisitorDeskOpen] = useState(false);
  const [visitorDeskInitialQuery, setVisitorDeskInitialQuery] = useState<string | undefined>(undefined);

  // Student notebook persistence via Middle Layer Service
  const [savedEntries, setSavedEntries] = useState<NotebookEntry[]>(() => {
    return notebookStorageService.loadEntries();
  });

  // Quiz Score persistence
  const [quizScore, setQuizScore] = useState<number>(() => {
    try {
      const stored = localStorage.getItem('bharat_museum_quiz_score');
      return stored ? parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  });

  // Keyboard shortcut for Search (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save notebook changes to localStorage
  const handleToggleSaveItem = (
    item: HeritageItem,
    userNotes?: string,
    studyTag?: NotebookEntry['studyTag']
  ) => {
    setSavedEntries((prev) => {
      const existsIndex = prev.findIndex((e) => e.itemId === item.id);
      let updated: NotebookEntry[];
      if (existsIndex >= 0) {
        if (userNotes !== undefined || studyTag !== undefined) {
          updated = [...prev];
          updated[existsIndex] = {
            ...updated[existsIndex],
            userNotes: userNotes !== undefined ? userNotes : updated[existsIndex].userNotes,
            studyTag: studyTag || updated[existsIndex].studyTag || 'General',
          };
        } else {
          updated = prev.filter((e) => e.itemId !== item.id);
        }
      } else {
        updated = [
          ...prev,
          {
            itemId: item.id,
            savedAt: new Date().toISOString(),
            userNotes: userNotes || '',
            studyTag: studyTag || 'General',
          },
        ];
      }
      notebookStorageService.saveEntries(updated);
      return updated;
    });
  };

  const handleUpdateEntryNote = (
    itemId: string,
    newNotes: string,
    studyTag?: NotebookEntry['studyTag'],
    customTitle?: string
  ) => {
    setSavedEntries((prev) => {
      const updated = prev.map((entry) => {
        if (entry.itemId === itemId) {
          return {
            ...entry,
            userNotes: newNotes,
            studyTag: studyTag || entry.studyTag || 'General',
            customTitle: customTitle || entry.customTitle,
          };
        }
        return entry;
      });
      notebookStorageService.saveEntries(updated);
      return updated;
    });
  };

  const handleAddCustomNote = (
    title: string,
    content: string,
    studyTag: NotebookEntry['studyTag'] = 'General'
  ) => {
    const newEntry: NotebookEntry = {
      itemId: `custom_${Date.now()}`,
      savedAt: new Date().toISOString(),
      userNotes: content,
      studyTag,
      customTitle: title,
    };
    setSavedEntries((prev) => {
      const updated = [newEntry, ...prev];
      notebookStorageService.saveEntries(updated);
      return updated;
    });
  };

  const handleRemoveNotebookEntry = (itemId: string) => {
    setSavedEntries((prev) => {
      const updated = notebookStorageService.removeEntry(prev, itemId);
      return updated;
    });
  };

  const handleUpdateQuizScore = (score: number) => {
    setQuizScore(score);
    try {
      localStorage.setItem('bharat_museum_quiz_score', score.toString());
    } catch (err) {
      console.error('Failed to save quiz score', err);
    }
  };

  // Navigation handlers
  const handleNavigateHome = () => {
    setViewMode('home');
    setSelectedStateId(null);
    setSelectedDistrictId(null);
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToState = (stateId: string) => {
    setSelectedStateId(stateId);
    setSelectedDistrictId(null);
    setViewMode('state');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToDistrict = (districtId: string) => {
    setSelectedDistrictId(districtId);
    setViewMode('district');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToGalleries = () => {
    setViewMode('galleries');
    setSelectedStateId(null);
    setSelectedDistrictId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToMaterials = () => {
    setViewMode('materials');
    setSelectedStateId(null);
    setSelectedDistrictId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromHero = (category: CultureCategory) => {
    setSelectedCategory(category);
    setViewMode('galleries');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenVisitorDesk = (monumentTitle?: string) => {
    setVisitorDeskInitialQuery(monumentTitle ? `Tell me entry fees and closing time for ${monumentTitle}` : undefined);
    setIsVisitorDeskOpen(true);
  };

  const currentState: StateData | undefined = selectedStateId
    ? getStateById(selectedStateId)
    : undefined;

  const currentDistrict: District | undefined =
    selectedStateId && selectedDistrictId
      ? getDistrictById(selectedStateId, selectedDistrictId)
      : undefined;

  const currentItemEntry = selectedItem
    ? savedEntries.find((e) => e.itemId === selectedItem.id)
    : undefined;

  const isCurrentItemSaved = !!currentItemEntry;
  const currentItemSavedNotes = currentItemEntry?.userNotes || '';
  const currentItemSavedTag = currentItemEntry?.studyTag || 'General';

  return (
    <div id="virtual-bharat-museum-app" className="min-h-screen flex flex-col bg-[#0c0d15] text-[#ede8df]">
      {/* Top Main Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenNotebook={() => setIsNotebookOpen(true)}
        onOpenCurator={() => setIsCuratorOpen(true)}
        onNavigateIndia={handleNavigateHome}
        onNavigateGalleries={handleNavigateToGalleries}
        onNavigateMaterials={handleNavigateToMaterials}
        onOpenVisitorDesk={() => handleOpenVisitorDesk()}
        savedExhibitsCount={savedEntries.length}
        quizScore={quizScore}
      />

      {/* Hierarchical Breadcrumb Navigation */}
      <BreadcrumbBar
        currentStateId={currentState?.id}
        stateName={currentState?.name}
        currentDistrictId={currentDistrict?.id}
        districtName={currentDistrict?.name}
        currentCategory={selectedCategory}
        currentItemTitle={selectedItem?.title}
        onNavigateIndia={handleNavigateHome}
        onNavigateState={handleNavigateToState}
        onNavigateDistrict={handleNavigateToDistrict}
        onNavigateCategory={(cat) => {
          setSelectedCategory(cat);
          if (viewMode === 'home' || viewMode === 'materials') setViewMode('galleries');
        }}
      />

      {/* Main Content Area Driven by Navigation Hierarchy */}
      <main className="flex-1">
        {viewMode === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onExploreMap={() => {
                const mapEl = document.getElementById('interactive-india-section');
                mapEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectCategory={handleSelectCategoryFromHero}
              onExploreStates={() => {
                const mapEl = document.getElementById('interactive-india-section');
                mapEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenNotebook={() => setIsNotebookOpen(true)}
            />

            {/* Geographic Interactive India Explorer (India → State) */}
            <InteractiveIndiaMap onSelectState={handleNavigateToState} />
          </>
        )}

        {viewMode === 'state' && currentState && (
          /* State Level View (State → District → Exhibits) */
          <StateView
            state={currentState}
            onSelectDistrict={handleNavigateToDistrict}
            onSelectCategory={setSelectedCategory}
            onSelectItem={setSelectedItem}
            onBackToIndia={handleNavigateHome}
            selectedCategory={selectedCategory}
          />
        )}

        {viewMode === 'district' && currentState && currentDistrict && (
          /* District Level View (District → Culture Category → Exhibits) */
          <DistrictView
            state={currentState}
            district={currentDistrict}
            onSelectCategory={setSelectedCategory}
            onSelectItem={setSelectedItem}
            onBackToState={() => handleNavigateToState(currentState.id)}
            selectedCategory={selectedCategory}
          />
        )}

        {viewMode === 'galleries' && (
          /* Thematic 7 Culture Galleries View */
          <CultureGalleriesSection
            onSelectItem={setSelectedItem}
            onNavigateState={handleNavigateToState}
            onNavigateDistrict={handleNavigateToDistrict}
          />
        )}

        {viewMode === 'materials' && (
          /* Monument Materials & Ancient Civil Engineering Section */
          <MonumentMaterialsSection
            onSelectItem={setSelectedItem}
            onNavigateIndia={handleNavigateHome}
          />
        )}
      </main>

      {/* Floating Action Button: Quick Visitor Desk & Ticket Fees Chatbot */}
      <button
        id="floating-btn-visitor-desk"
        onClick={() => handleOpenVisitorDesk()}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-stone-950 font-bold text-xs sm:text-sm shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all flex items-center gap-2 border-2 border-stone-900 ring-2 ring-amber-400/50"
        title="Ask Entry Fees, Closing Times & Free Entry rules"
      >
        <Ticket className="w-4 h-4 fill-stone-950" />
        <span className="hidden sm:inline font-extrabold tracking-wide">Ticket Fees & Timings Bot</span>
        <span className="sm:hidden font-extrabold">Fees & Hours</span>
      </button>

      {/* Museum Exhibit Detail Modal (Audio Guide + Curatorial Plaque + Real Photo with Image Source) */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        isSaved={isCurrentItemSaved}
        onToggleSave={handleToggleSaveItem}
        savedNotes={currentItemSavedNotes}
        savedTag={currentItemSavedTag}
        onNavigateState={(stId) => {
          setSelectedItem(null);
          handleNavigateToState(stId);
        }}
        onNavigateDistrict={(distId) => {
          setSelectedItem(null);
          handleNavigateToDistrict(distId);
        }}
        onOpenVisitorDesk={handleOpenVisitorDesk}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={setSelectedItem}
      />

      {/* Bharat Heritage Scholar Student Quiz */}
      <StudentQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onUpdateScore={handleUpdateQuizScore}
      />

      {/* Student Study Notebook Drawer */}
      <StudentNotebookDrawer
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        savedEntries={savedEntries}
        onRemoveEntry={handleRemoveNotebookEntry}
        onUpdateEntryNote={handleUpdateEntryNote}
        onAddCustomNote={handleAddCustomNote}
        onOpenItem={setSelectedItem}
      />

      {/* Senior Curator AI Interactive Assistant */}
      <CuratorChatModal
        isOpen={isCuratorOpen}
        onClose={() => setIsCuratorOpen(false)}
      />

      {/* Visitor Information & Entry Fees Chatbot Modal */}
      <VisitorDeskChatModal
        isOpen={isVisitorDeskOpen}
        onClose={() => {
          setIsVisitorDeskOpen(false);
          setVisitorDeskInitialQuery(undefined);
        }}
        initialQuery={visitorDeskInitialQuery}
      />

      {/* Museum Footer */}
      <Footer
        onNavigateIndia={handleNavigateHome}
        onNavigateGalleries={handleNavigateToGalleries}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenNotebook={() => setIsNotebookOpen(true)}
      />
    </div>
  );
}
