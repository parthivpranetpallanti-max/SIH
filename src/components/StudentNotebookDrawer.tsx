import React, { useState } from 'react';
import {
  BookOpen,
  X,
  Trash2,
  Printer,
  ExternalLink,
  Download,
  Copy,
  Check,
  Edit3,
  Save,
  Plus,
  Search,
} from 'lucide-react';
import { HeritageItem, NotebookEntry } from '../types';
import { HERITAGE_ITEMS } from '../data/heritageItemsData';

interface StudentNotebookDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedEntries: NotebookEntry[];
  onRemoveEntry: (itemId: string) => void;
  onUpdateEntryNote: (itemId: string, newNotes: string, studyTag?: NotebookEntry['studyTag'], customTitle?: string) => void;
  onAddCustomNote: (title: string, content: string, studyTag: NotebookEntry['studyTag']) => void;
  onOpenItem: (item: HeritageItem) => void;
}

export const StudentNotebookDrawer: React.FC<StudentNotebookDrawerProps> = ({
  isOpen,
  onClose,
  savedEntries,
  onRemoveEntry,
  onUpdateEntryNote,
  onAddCustomNote,
  onOpenItem,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editDraftNote, setEditDraftNote] = useState('');
  const [editDraftTag, setEditDraftTag] = useState<NotebookEntry['studyTag']>('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTagFilter, setSelectedTagFilter] = useState<string>('all');
  const [isAddingCustomNote, setIsAddingCustomNote] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customContent, setCustomContent] = useState('');
  const [customTag, setCustomTag] = useState<NotebookEntry['studyTag']>('Exam Topic');

  if (!isOpen) return null;

  const savedList = savedEntries.map((entry) => {
    const item = HERITAGE_ITEMS.find((h) => h.id === entry.itemId);
    return { item, entry };
  });

  const filteredEntries = savedList.filter(({ item, entry }) => {
    const matchesSearch =
      (item?.title.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      (entry.customTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false) ||
      entry.userNotes.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item?.stateName.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);

    const matchesTag =
      selectedTagFilter === 'all' ||
      (entry.studyTag || 'General') === selectedTagFilter;

    return matchesSearch && matchesTag;
  });

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAllNotes = () => {
    if (savedEntries.length === 0) return;
    let fullText = `=== VIRTUAL BHARAT MUSEUM: STUDENT RESEARCH NOTEBOOK ===\n`;
    fullText += `Generated: ${new Date().toLocaleString()}\n\n`;

    savedList.forEach(({ item, entry }, idx) => {
      fullText += `[${idx + 1}] ${item ? item.title : entry.customTitle || 'Custom Topic'} (${entry.studyTag || 'General'})\n`;
      if (item) {
        fullText += `Location: ${item.districtName}, ${item.stateName} | Period: ${item.period} (${item.dynastyOrTradition})\n`;
        fullText += `Curator Summary: ${item.curatorSummary}\n`;
      }
      if (entry.userNotes) {
        fullText += `Student Notes: ${entry.userNotes}\n`;
      }
      fullText += `------------------------------------------------------------\n\n`;
    });

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const handleDownloadTxt = () => {
    if (savedEntries.length === 0) return;
    let fullText = `=== VIRTUAL BHARAT MUSEUM: STUDENT RESEARCH NOTEBOOK ===\n`;
    fullText += `Generated: ${new Date().toLocaleString()}\n\n`;

    savedList.forEach(({ item, entry }, idx) => {
      fullText += `[${idx + 1}] ${item ? item.title : entry.customTitle || 'Custom Topic'} (${entry.studyTag || 'General'})\n`;
      if (item) {
        fullText += `Location: ${item.districtName}, ${item.stateName} | Period: ${item.period} (${item.dynastyOrTradition})\n`;
        fullText += `Curator Summary: ${item.curatorSummary}\n`;
      }
      if (entry.userNotes) {
        fullText += `Student Notes: ${entry.userNotes}\n`;
      }
      fullText += `------------------------------------------------------------\n\n`;
    });

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Virtual-Bharat-Museum-Notes-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleStartEditing = (entry: NotebookEntry) => {
    setEditingId(entry.itemId);
    setEditDraftNote(entry.userNotes);
    setEditDraftTag(entry.studyTag || 'General');
  };

  const handleSaveEdit = (itemId: string, customTitle?: string) => {
    onUpdateEntryNote(itemId, editDraftNote, editDraftTag, customTitle);
    setEditingId(null);
  };

  const handleCreateCustomNote = () => {
    if (!customTitle.trim() && !customContent.trim()) return;
    onAddCustomNote(customTitle.trim() || 'Untitled Study Topic', customContent.trim(), customTag);
    setCustomTitle('');
    setCustomContent('');
    setIsAddingCustomNote(false);
  };

  const tagColors: Record<string, string> = {
    General: 'bg-[#20242B] text-[#D8D4CC] border-white/10',
    'Exam Topic': 'bg-[#F28C28]/20 text-[#F28C28] border-[#F28C28]/40',
    'Need to Revise': 'bg-[#A83A68]/20 text-[#F5A3C7] border-[#A83A68]/40',
    'Research Complete': 'bg-[#16745B]/25 text-[#52B79C] border-[#16745B]/40',
  };

  return (
    <div
      id="student-notebook-drawer"
      className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#171A20] to-[#0F1115] border-l-2 border-[#D4A017]/30 shadow-2xl h-full flex flex-col text-[#D8D4CC] animate-in slide-in-from-right duration-200">
        {/* Drawer Top Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#0F1115] via-[#171A20] to-[#0F1115]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#16745B]/25 flex items-center justify-center border border-[#16745B]/50 shadow-inner">
              <BookOpen className="w-5 h-5 text-[#52B79C]" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                Student Museum Notebook
              </h3>
              <p className="text-xs text-[#9B9A96]">
                {savedEntries.length} saved study entries • Editable & Exportable
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            {savedEntries.length > 0 && (
              <>
                <button
                  onClick={handleDownloadTxt}
                  className="p-2 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/10 text-xs flex items-center gap-1 transition-colors"
                  title="Download notes as text file"
                >
                  <Download className="w-3.5 h-3.5 text-[#52B79C]" />
                  <span className="hidden sm:inline">Export .txt</span>
                </button>

                <button
                  onClick={handleCopyAllNotes}
                  className="p-2 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/10 text-xs flex items-center gap-1 transition-colors"
                  title="Copy all notes to clipboard"
                >
                  {copiedAll ? <Check className="w-3.5 h-3.5 text-[#52B79C]" /> : <Copy className="w-3.5 h-3.5 text-[#D4A017]" />}
                  <span className="hidden sm:inline">{copiedAll ? 'Copied!' : 'Copy'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#9B9A96] hover:text-[#FFF3D6] border border-white/10 text-xs flex items-center gap-1 transition-colors"
                  title="Print Notes for School Project"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
              </>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#20242B] hover:bg-[#F28C28] text-[#9B9A96] hover:text-[#0F1115] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Controls & Search Toolbar */}
        <div className="p-3.5 bg-[#0F1115] border-b border-white/10 space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-[#D4A017] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes, exhibits, or states..."
                className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-[#171A20] border border-white/10 text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#F28C28]"
              />
            </div>
            <button
              onClick={() => setIsAddingCustomNote((prev) => !prev)}
              className="px-3.5 py-2 rounded-xl bg-[#16745B] hover:bg-[#52B79C] text-[#FFF3D6] hover:text-[#0F1115] font-bold text-xs flex items-center gap-1 shrink-0 shadow-sm transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Note</span>
            </button>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px]">
            <span className="text-[#9B9A96] font-bold uppercase tracking-wider text-[10px] shrink-0">
              Filter:
            </span>
            {['all', 'General', 'Exam Topic', 'Need to Revise', 'Research Complete'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTagFilter(tag)}
                className={`px-2.5 py-0.5 rounded-md whitespace-nowrap transition-colors border ${
                  selectedTagFilter === tag
                    ? 'bg-[#F28C28] text-[#0F1115] font-extrabold border-[#F28C28]'
                    : 'bg-[#171A20] text-[#9B9A96] border-white/8 hover:text-[#FFF3D6]'
                }`}
              >
                {tag === 'all' ? 'All Notes' : tag}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Note Creation Form */}
        {isAddingCustomNote && (
          <div className="p-4 bg-[#123E3D]/30 border-b border-[#16745B]/40 space-y-2.5 animate-in fade-in">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#52B79C] uppercase tracking-wider">
                Create New Research Note
              </span>
              <button
                onClick={() => setIsAddingCustomNote(false)}
                className="text-[#9B9A96] hover:text-[#FFF3D6] text-xs"
              >
                Cancel
              </button>
            </div>
            <input
              type="text"
              placeholder="Topic or Title (e.g. Dravidian Temple Architecture essay points)"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-[#0F1115] border border-white/10 text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#52B79C]"
            />
            <textarea
              rows={3}
              placeholder="Write your research findings, homework points, questions for teacher..."
              value={customContent}
              onChange={(e) => setCustomContent(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#0F1115] border border-white/10 text-[#D8D4CC] placeholder-[#9B9A96] focus:outline-none focus:border-[#52B79C] resize-none"
            />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-[#9B9A96] text-[11px]">Tag:</span>
                <select
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value as NotebookEntry['studyTag'])}
                  className="bg-[#0F1115] border border-[#16745B] text-[#FFF3D6] text-xs rounded-lg px-2.5 py-1 focus:outline-none"
                >
                  <option value="General">General</option>
                  <option value="Exam Topic">Exam Topic</option>
                  <option value="Need to Revise">Need to Revise</option>
                  <option value="Research Complete">Research Complete</option>
                </select>
              </div>
              <button
                onClick={handleCreateCustomNote}
                disabled={!customTitle.trim() && !customContent.trim()}
                className="px-3.5 py-1.5 rounded-lg bg-[#16745B] hover:bg-[#52B79C] disabled:opacity-30 text-[#FFF3D6] hover:text-[#0F1115] font-bold text-xs shadow"
              >
                Save Note to Notebook
              </button>
            </div>
          </div>
        )}

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0F1115]/30">
          {filteredEntries.length === 0 ? (
            <div className="text-center py-16 text-[#9B9A96] space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-[#9B9A96]/40 mb-2" />
              <h4 className="text-sm font-bold text-[#FFF3D6]">No Notes Matching Criteria</h4>
              <p className="text-xs max-w-xs mx-auto leading-relaxed">
                Save exhibits while exploring monuments, or click "Add Custom Note" to write study points for your school projects.
              </p>
            </div>
          ) : (
            filteredEntries.map(({ item, entry }) => {
              const isEditing = editingId === entry.itemId;
              const currentTag = entry.studyTag || 'General';

              return (
                <div
                  key={entry.itemId}
                  className="p-4 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/8 hover:border-[#16745B] transition-all space-y-3 shadow-md"
                >
                  {/* Exhibit or Custom Note Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 min-w-0">
                      {item ? (
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-14 h-14 rounded-xl object-cover bg-[#0F1115] shrink-0 cursor-pointer border border-white/10"
                          onClick={() => {
                            onOpenItem(item);
                            onClose();
                          }}
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-xl bg-[#123E3D] border border-[#16745B] flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5 text-[#52B79C]" />
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4
                            className="text-sm font-bold text-[#FFF3D6] hover:text-[#F28C28] cursor-pointer truncate font-display"
                            onClick={() => {
                              if (item) {
                                onOpenItem(item);
                                onClose();
                              }
                            }}
                          >
                            {item ? item.title : entry.customTitle || 'Custom Topic'}
                          </h4>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                              tagColors[currentTag] || tagColors.General
                            }`}
                          >
                            {currentTag}
                          </span>
                        </div>

                        {item && (
                          <p className="text-[11px] text-[#9B9A96] mt-0.5">
                            {item.districtName}, {item.stateName} • <span className="capitalize">{item.category.replace('_', ' ')}</span>
                          </p>
                        )}
                        <p className="text-[10px] text-[#9B9A96] mt-0.5">
                          Saved: {new Date(entry.savedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        onClick={() => {
                          if (isEditing) {
                            handleSaveEdit(entry.itemId, entry.customTitle);
                          } else {
                            handleStartEditing(entry);
                          }
                        }}
                        className="p-1.5 rounded-lg hover:bg-[#171A20] text-[#9B9A96] hover:text-[#52B79C] transition-colors"
                        title={isEditing ? 'Save edits' : 'Edit note'}
                      >
                        {isEditing ? <Save className="w-4 h-4 text-[#52B79C]" /> : <Edit3 className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={() => onRemoveEntry(entry.itemId)}
                        className="p-1.5 rounded-lg hover:bg-[#171A20] text-[#9B9A96] hover:text-rose-400 transition-colors"
                        title="Delete note"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Notes Editor or Static View */}
                  {isEditing ? (
                    <div className="space-y-2 p-3 rounded-xl bg-[#0F1115] border border-[#16745B]/50 animate-in fade-in">
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-[#9B9A96] text-[11px] font-bold">Edit Note:</span>
                        <select
                          value={editDraftTag}
                          onChange={(e) => setEditDraftTag(e.target.value as NotebookEntry['studyTag'])}
                          className="bg-[#171A20] border border-white/10 text-[#FFF3D6] text-[11px] rounded-lg px-2 py-0.5 focus:outline-none"
                        >
                          <option value="General">General</option>
                          <option value="Exam Topic">Exam Topic</option>
                          <option value="Need to Revise">Need to Revise</option>
                          <option value="Research Complete">Research Complete</option>
                        </select>
                      </div>
                      <textarea
                        rows={3}
                        value={editDraftNote}
                        onChange={(e) => setEditDraftNote(e.target.value)}
                        placeholder="Type study notes, key facts to memorize, or research points..."
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#171A20] border border-white/10 text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#52B79C] resize-none font-mono"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-2.5 py-1 text-xs text-[#9B9A96] hover:text-[#FFF3D6]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveEdit(entry.itemId, entry.customTitle)}
                          className="px-3 py-1 rounded-lg bg-[#16745B] hover:bg-[#52B79C] text-[#FFF3D6] hover:text-[#0F1115] font-bold text-xs shadow flex items-center gap-1"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Note</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() => handleStartEditing(entry)}
                      className="p-3 rounded-xl bg-[#0F1115] border border-[#16745B]/25 text-xs text-[#D8D4CC] font-mono cursor-pointer hover:border-[#52B79C]/50 transition-colors group"
                    >
                      <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#52B79C] mb-1">
                        <span>Student Notes:</span>
                        <span className="opacity-0 group-hover:opacity-100 text-[#9B9A96] normal-case font-sans">Click to edit</span>
                      </div>
                      <p className="whitespace-pre-line">
                        {entry.userNotes ? entry.userNotes : <span className="italic text-[#9B9A96]">No notes written yet. Click to add your notes here!</span>}
                      </p>
                    </div>
                  )}

                  {/* Exhibit footer link if item exists */}
                  {item && (
                    <div className="flex items-center justify-between text-[11px] text-[#9B9A96] pt-1 border-t border-white/8">
                      <span>Source: {item.imageSource.split('/')[0]}</span>
                      <button
                        onClick={() => {
                          onOpenItem(item);
                          onClose();
                        }}
                        className="text-[#F4D06F] hover:text-[#FFF3D6] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>View Exhibit Plaque</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-[#0F1115] text-xs text-[#9B9A96] flex items-center justify-between">
          <span>Persisted in browser localStorage</span>
          {savedEntries.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all notebook entries and study notes?')) {
                  savedEntries.forEach((s) => onRemoveEntry(s.itemId));
                }
              }}
              className="text-rose-400 hover:text-rose-300 transition-colors"
            >
              Clear All Notes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
