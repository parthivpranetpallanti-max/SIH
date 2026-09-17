import React, { useState } from 'react';
import {
  Ticket,
  X,
  Send,
  Sparkles,
  Clock,
  ShieldAlert,
  CreditCard,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Bot,
  User,
  Search,
  Building2,
} from 'lucide-react';
import { MONUMENTS_VISITOR_DATA, GENERAL_VISITOR_RULES } from '../data/visitorDeskData';
import { MonumentVisitorDetail } from '../types';
import { inquireVisitorDeskApi } from '../services';

interface VisitorDeskChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  structuredCard?: MonumentVisitorDetail;
  actionUrl?: string;
}

const PRESET_INQUIRIES = [
  'Taj Mahal: Entry fees & Friday closing time',
  'Which monuments have 100% FREE entry?',
  'What are the free entry rules for children under 15?',
  'Brihadisvara Temple timings & dress code',
  'Ellora & Ajanta Caves: Opening hours & weekly closed days',
  'Konark Sun Temple timings & night illumination',
  'Required ID proof & online ASI ticket booking',
  'Camera, tripod & dress code guidelines',
];

export const VisitorDeskChatModal: React.FC<VisitorDeskChatModalProps> = ({
  isOpen,
  onClose,
  initialQuery,
}) => {
  const [activeTab, setActiveTab] = useState<'chat' | 'directory'>('chat');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [directorySearch, setDirectorySearch] = useState('');

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Namaste! Welcome to the ASI Monument Visitor Information Desk. Ask me about entry ticket fees, free entry rules (such as children under 15 or heritage days), opening & closing timings, weekly closure days (e.g., Taj Mahal on Fridays), or required ID documents and online booking details.',
    },
  ]);

  if (!isOpen) return null;

  const handleSendMessage = (userQueryText?: string) => {
    const query = (userQueryText || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Call Middle Layer API -> Backend Engine
    inquireVisitorDeskApi(query)
      .then((res) => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: res.reply,
            structuredCard: res.matchedMonument,
          },
        ]);
        setIsTyping(false);
      })
      .catch(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: 'Here is the general Archaeological Survey of India (ASI) visitor guideline: Most ticketed monuments charge ₹25–₹50 for Indian citizens. Children below 15 years enter FREE nationwide.',
          },
        ]);
        setIsTyping(false);
      });
  };

  const filteredDirectory = MONUMENTS_VISITOR_DATA.filter((m) => {
    const q = directorySearch.toLowerCase();
    return (
      m.monumentTitle.toLowerCase().includes(q) ||
      m.location.toLowerCase().includes(q) ||
      m.state.toLowerCase().includes(q) ||
      m.hindiTitle.toLowerCase().includes(q)
    );
  });

  return (
    <div
      id="visitor-desk-chat-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#171A20] to-[#0F1115] border-2 border-[#D4A017]/40 rounded-2xl shadow-2xl flex flex-col h-[82vh] text-[#D8D4CC] animate-in fade-in zoom-in-95 overflow-hidden">
        {/* Modal Header: Deep Teal + Antique Gold + Saffron */}
        <div className="p-4 border-b border-[#D4A017]/30 flex items-center justify-between bg-gradient-to-r from-[#0C2431] via-[#171A20] to-[#0C2431]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4A017]/15 border border-[#D4A017]/50 flex items-center justify-center shrink-0">
              <Ticket className="w-5 h-5 text-[#F28C28]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                  ASI Monument Visitor Desk & Fee Assistant
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#16745B]/20 text-[#52B79C] border border-[#16745B]/50">
                  Live Rates
                </span>
              </div>
              <p className="text-[11px] text-[#9B9A96]">
                Entry tickets, free child admission, closing days & visitor regulations
              </p>
            </div>
          </div>

          {/* Mode Switcher & Close */}
          <div className="flex items-center gap-2">
            <div className="bg-[#0F1115] p-1 rounded-xl border border-white/10 flex items-center text-xs">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  activeTab === 'chat'
                    ? 'bg-[#F28C28] text-[#0F1115] font-extrabold shadow-sm'
                    : 'text-[#9B9A96] hover:text-[#FFF3D6]'
                }`}
              >
                Chat Assistant
              </button>
              <button
                onClick={() => setActiveTab('directory')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  activeTab === 'directory'
                    ? 'bg-[#D4A017] text-[#0F1115] font-extrabold shadow-sm'
                    : 'text-[#9B9A96] hover:text-[#FFF3D6]'
                }`}
              >
                Rates Directory
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#20242B] hover:bg-[#F28C28] text-[#9B9A96] hover:text-[#0F1115] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab 1: Chat Assistant Mode */}
        {activeTab === 'chat' && (
          <div className="flex-1 flex flex-col min-h-0 bg-[#0F1115]/50">
            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex items-start gap-3 ${
                    m.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                      m.sender === 'user'
                        ? 'bg-[#16745B] text-[#FFF3D6]'
                        : 'bg-[#F28C28] text-[#0F1115] font-bold text-xs'
                    }`}
                  >
                    {m.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div className="max-w-[85%] space-y-3">
                    <div
                      className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                        m.sender === 'user'
                          ? 'bg-[#123E3D] text-[#FFF3D6] border border-[#16745B] rounded-tr-none shadow'
                          : 'bg-[#171A20] text-[#D8D4CC] border border-white/10 rounded-tl-none shadow-md'
                      }`}
                    >
                      {m.text}
                    </div>

                    {/* Structured Monument Card */}
                    {m.structuredCard && (
                      <div className="p-4 rounded-xl bg-gradient-to-br from-[#171A20] via-[#20242B] to-[#171A20] border border-[#D4A017]/40 shadow-lg space-y-3 text-xs animate-in fade-in">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-sm text-[#FFF3D6] font-display">
                                {m.structuredCard.monumentTitle}
                              </h4>
                              {m.structuredCard.isFreeEntry ? (
                                <span className="px-2 py-0.5 rounded-full bg-[#16745B]/30 text-[#52B79C] font-bold text-[10px] border border-[#16745B]/60">
                                  100% FREE ENTRY
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded-full bg-[#F28C28]/20 text-[#F28C28] font-bold text-[10px] border border-[#F28C28]/40">
                                  ASI Ticketed
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#9B9A96]">
                              {m.structuredCard.location}, {m.structuredCard.state}
                            </p>
                          </div>

                          <a
                            href={m.structuredCard.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded-lg bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-[11px] flex items-center gap-1 shadow"
                          >
                            <span>Book ASI Portal</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-[#0F1115] p-3 rounded-xl border border-white/8">
                          <div>
                            <span className="text-[#9B9A96] font-semibold block">Opening Hours:</span>
                            <span className="text-[#F4D06F] font-medium">
                              {m.structuredCard.openingTime} – {m.structuredCard.closingTime}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9B9A96] font-semibold block">Weekly Closed Day:</span>
                            <span className="text-rose-300 font-medium">
                              {m.structuredCard.closedDays}
                            </span>
                          </div>
                          <div>
                            <span className="text-[#9B9A96] font-semibold block">Indian Citizen Fee:</span>
                            <span className="text-[#FFF3D6] font-bold">{m.structuredCard.indianEntryFee}</span>
                          </div>
                          <div>
                            <span className="text-[#9B9A96] font-semibold block">Foreigner Fee:</span>
                            <span className="text-[#FFF3D6] font-bold">{m.structuredCard.foreignEntryFee}</span>
                          </div>
                        </div>

                        <div className="text-[11px] text-[#D8D4CC] space-y-1.5 pt-1">
                          <div className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#52B79C] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-[#52B79C]">Free Entry:</strong> {m.structuredCard.freeEntryEligibility.join(' ')}
                            </span>
                          </div>
                          <div className="flex items-start gap-1.5">
                            <FileCheck className="w-3.5 h-3.5 text-[#D4A017] shrink-0 mt-0.5" />
                            <span>
                              <strong className="text-[#F4D06F]">Required IDs & Details:</strong> {m.structuredCard.requiredDetails.join(' ')}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#F28C28] font-mono italic">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>Checking official ASI monuments entry database...</span>
                </div>
              )}
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-[#171A20] border-t border-white/10 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
              <span className="text-[10px] text-[#9B9A96] uppercase font-bold tracking-wider shrink-0">
                Quick Query:
              </span>
              {PRESET_INQUIRIES.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="px-3 py-1 rounded-full bg-[#20242B] hover:bg-[#F28C28]/20 text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/8 hover:border-[#F28C28]/40 text-[11px] whitespace-nowrap transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <div className="p-3.5 border-t border-white/10 bg-[#171A20] flex items-center gap-2.5">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
                placeholder="Ask about entry fee, free entry rules, closing time, or required ID proof..."
                className="flex-1 bg-[#0F1115] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#F28C28] transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
                className="p-2.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] disabled:opacity-30 disabled:cursor-not-allowed text-[#0F1115] transition-all shadow-md shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Rates Directory Cheat Sheet */}
        {activeTab === 'directory' && (
          <div className="flex-1 flex flex-col min-h-0 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#0F1115]/50">
            {/* Search filter in directory */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <h4 className="font-bold text-sm text-[#FFF3D6] font-display">
                  National Monument Entry Rates & Schedule Directory
                </h4>
                <p className="text-xs text-[#9B9A96]">
                  Verified Archaeological Survey of India (ASI) official schedule
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-[#D4A017] absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Filter by monument or state..."
                  value={directorySearch}
                  onChange={(e) => setDirectorySearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-[#0F1115] border border-white/10 text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#F28C28]"
                />
              </div>
            </div>

            {/* General Free Rule Banner */}
            <div className="p-4 rounded-xl bg-[#123E3D]/50 border border-[#16745B] text-xs text-[#FFF3D6] flex items-start gap-2.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-[#52B79C] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#52B79C]">National Free Entry Rule:</strong> Children under 15 years receive 100% free entry across all ASI monuments in India. Furthermore, living sacred monuments (such as Brihadisvara Temple & Basilica of Bom Jesus) are 100% free for all visitors year-round.
              </div>
            </div>

            {/* Table / Cards List */}
            <div className="space-y-3">
              {filteredDirectory.map((m) => (
                <div
                  key={m.id}
                  className="p-4 rounded-xl bg-gradient-to-b from-[#171A20] to-[#20242B] border border-white/10 hover:border-[#D4A017]/60 transition-all space-y-2.5 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-bold text-sm text-[#FFF3D6] font-display">{m.monumentTitle}</h5>
                        <span className="text-xs text-[#F4D06F] font-marcellus">({m.hindiTitle})</span>
                        {m.isFreeEntry ? (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#16745B]/20 text-[#52B79C] border border-[#16745B]/50">
                            FREE ENTRY
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#F28C28]/20 text-[#F28C28] border border-[#F28C28]/40">
                            Ticketed
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#9B9A96]">
                        {m.location}, {m.state}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-center">
                      <button
                        onClick={() => {
                          setActiveTab('chat');
                          handleSendMessage(`Tell me all entry fees, closing time, and details for ${m.monumentTitle}`);
                        }}
                        className="px-3 py-1 rounded-lg bg-[#20242B] hover:bg-[#171A20] text-[#F4D06F] border border-white/10 text-[11px] font-semibold transition-colors"
                      >
                        Ask Bot Details
                      </button>
                      <a
                        href={m.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-lg bg-[#F28C28] hover:bg-[#ff9b3d] text-[#0F1115] font-extrabold text-[11px] flex items-center gap-1 shadow transition-all"
                      >
                        <span>Book Online</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs bg-[#0F1115] p-3 rounded-xl border border-white/8">
                    <div>
                      <span className="text-[10px] text-[#9B9A96] uppercase font-bold block">Timings</span>
                      <span className="text-[#FFF3D6] font-medium">{m.openingTime} – {m.closingTime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#9B9A96] uppercase font-bold block">Weekly Closure</span>
                      <span className="text-rose-300 font-medium">{m.closedDays}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#9B9A96] uppercase font-bold block">Indian Citizens</span>
                      <span className="text-[#F4D06F] font-bold">{m.indianEntryFee}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#9B9A96] uppercase font-bold block">Foreign Nationals</span>
                      <span className="text-[#F4D06F] font-bold">{m.foreignEntryFee}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#D8D4CC] space-y-1">
                    <p><strong className="text-[#9B9A96]">Required Documents:</strong> {m.requiredDetails.join(' • ')}</p>
                    {m.dressCodeRules && <p><strong className="text-[#9B9A96]">Etiquette:</strong> {m.dressCodeRules}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
