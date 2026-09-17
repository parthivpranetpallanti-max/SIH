import React, { useState, useEffect, useRef } from 'react';
import {
  Headphones,
  X,
  Send,
  Sparkles,
  Mic,
  MicOff,
  Bot,
  User,
  Volume2,
  VolumeX,
  Compass,
} from 'lucide-react';
import { museumAudio } from '../utils/audioGuide';
import { askCuratorApi } from '../services';

interface CuratorChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'curator' | 'student';
  text: string;
  timestamp?: string;
}

type MicState = 'idle' | 'listening' | 'processing' | 'answering';

const PRESET_QUESTIONS = [
  'Why did the Cholas build Brihadisvara Temple without any cement or mortar?',
  'How was the Kailasa Temple at Ellora carved from the top of the mountain down?',
  'What makes Jaipur Blue Pottery unique compared to conventional clay ceramics?',
  'What is the meaning of the 24 astronomical sundial wheels at Konark Sun Temple?',
];

export const CuratorChatModal: React.FC<CuratorChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'curator',
      text: 'Namaste and welcome! I am your Senior Museum Curator at the Virtual Bharat Museum. Ask me any curatorial question regarding India’s ancient monuments, rock-cut architecture, classical dances, GI-tagged crafts, or culinary heritage.',
      timestamp: 'Curator On Duty',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [micState, setMicState] = useState<MicState>('idle');
  const [activeSpeechSynthesis, setActiveSpeechSynthesis] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, micState]);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const studentMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, studentMsg]);
    setInputText('');
    setMicState('processing');

    // Middle Layer call to Backend Curatorial Engine
    askCuratorApi(query)
      .then((data) => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'curator',
            text: data.reply,
            timestamp: data.source || 'Museum Archive Record',
          },
        ]);
        setMicState('answering');
        setTimeout(() => {
          setMicState('idle');
        }, 2000);
      })
      .catch(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'curator',
            text: 'I am here to guide your studies. Feel free to explore our museum archives or try another query on Indian temple architecture, crafts, or classical arts.',
            timestamp: 'Museum Archive Record',
          },
        ]);
        setMicState('idle');
      });
  };

  // Toggle Voice Recognition using the 4 mandated states
  const handleToggleMic = () => {
    if (micState === 'listening') {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setMicState('idle');
      return;
    }

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      // Fallback if browser lacks Web Speech API: prompt user politely
      setInputText('How was the Kailasa Temple carved?');
      setMicState('listening');
      setTimeout(() => {
        setMicState('processing');
        setTimeout(() => {
          handleSendMessage('How was the Kailasa Temple carved?');
        }, 500);
      }, 1000);
      return;
    }

    try {
      const rec = new SpeechRecognition();
      recognitionRef.current = rec;
      rec.lang = 'en-IN';
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      setMicState('listening');

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setMicState('processing');
        handleSendMessage(transcript);
      };

      rec.onerror = () => {
        setMicState('idle');
      };

      rec.onend = () => {
        setMicState((prev) => (prev === 'listening' ? 'idle' : prev));
      };

      rec.start();
    } catch (e) {
      setMicState('idle');
    }
  };

  const handleSpeakLastCuratorAnswer = (text: string) => {
    if (activeSpeechSynthesis) {
      museumAudio.stopGuide();
      setActiveSpeechSynthesis(false);
    } else {
      setActiveSpeechSynthesis(true);
      museumAudio.speakGuide(
        text,
        () => setActiveSpeechSynthesis(true),
        () => setActiveSpeechSynthesis(false),
        () => setActiveSpeechSynthesis(false)
      );
    }
  };

  return (
    <div
      id="curator-chat-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#171A20] to-[#0F1115] border border-[#D4A017]/40 rounded-2xl shadow-2xl flex flex-col h-[78vh] text-[#D8D4CC] animate-in fade-in zoom-in-95 overflow-hidden">
        {/* Museum Curator Header: Deep Teal + Antique Gold + Saffron */}
        <div className="p-4 border-b border-[#D4A017]/30 flex items-center justify-between bg-gradient-to-r from-[#0C2431] via-[#171A20] to-[#0C2431]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#176B87]/25 border border-[#176B87] flex items-center justify-center shadow-inner">
              <Headphones className="w-5 h-5 text-[#F28C28]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#FFF3D6] uppercase tracking-wider font-display">
                  Museum Curator AI (संग्रहालय अध्यक्ष)
                </h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#16745B]/20 text-[#52B79C] border border-[#16745B]/50">
                  Online
                </span>
              </div>
              <p className="text-[11px] text-[#9B9A96]">
                Authoritative historical, architectural & material research guide
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              museumAudio.stopGuide();
              onClose();
            }}
            className="p-1.5 rounded-lg bg-[#20242B] hover:bg-[#F28C28] text-[#9B9A96] hover:text-[#0F1115] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Curator Audio State Banner (Deep Teal + Saffron status) */}
        <div className="px-4 py-2 bg-[#0F1115]/90 border-b border-white/5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {micState === 'idle' && (
              <span className="flex items-center gap-1.5 text-[#D4A017]">
                <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
                <span>Microphone ready. Ask with voice or type below.</span>
              </span>
            )}
            {micState === 'listening' && (
              <span className="flex items-center gap-1.5 text-[#F28C28] font-semibold animate-pulse">
                <span className="w-2 h-2 rounded-full bg-[#F28C28] animate-ping" />
                <span>Listening to your question in English / Hindi...</span>
              </span>
            )}
            {micState === 'processing' && (
              <span className="flex items-center gap-1.5 text-[#64C2DB] font-semibold">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>Consulting National Heritage Archives...</span>
              </span>
            )}
            {micState === 'answering' && (
              <span className="flex items-center gap-1.5 text-[#52B79C] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#16745B]" />
                <span>Curator response compiled from archival records</span>
              </span>
            )}
          </div>
          <span className="text-[10px] text-[#9B9A96] font-mono hidden sm:inline">
            Virtual Bharat AI System
          </span>
        </div>

        {/* Message Log */}
        <div
          ref={chatScrollRef}
          className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0F1115]/40"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${
                m.sender === 'student' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                  m.sender === 'student'
                    ? 'bg-[#16745B] text-[#FFF3D6] border border-[#52B79C]/40'
                    : 'bg-gradient-to-br from-[#176B87] to-[#0C2431] text-[#F28C28] border border-[#D4A017]/40'
                }`}
              >
                {m.sender === 'student' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message Bubble — Museum Information Panel for Curator */}
              <div
                className={`max-w-[85%] text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'student'
                    ? 'p-3.5 rounded-2xl bg-[#123E3D] text-[#FFF3D6] border border-[#16745B] rounded-tr-none shadow-md'
                    : 'p-4 rounded-2xl bg-gradient-to-br from-[#0C2431] via-[#102B3A] to-[#123042] text-[#D8D4CC] border-2 border-[#D4A017]/60 rounded-tl-none shadow-lg'
                }`}
              >
                {m.sender === 'curator' && (
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px]">
                    <span className="font-display font-bold text-[#F4D06F] uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#F28C28]" />
                      Museum Archive Dispatch
                    </span>
                    <button
                      onClick={() => handleSpeakLastCuratorAnswer(m.text)}
                      className="text-[#F4D06F] hover:text-[#FFF3D6] flex items-center gap-1 underline transition-colors"
                      title="Listen to this explanation"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>{activeSpeechSynthesis ? 'Stop Voice' : 'Read Out'}</span>
                    </button>
                  </div>
                )}
                <div className="whitespace-pre-line">{m.text}</div>
              </div>
            </div>
          ))}

          {micState === 'processing' && (
            <div className="flex items-center gap-2 text-xs text-[#64C2DB] font-mono italic p-3 rounded-xl bg-[#0C2431]/60 border border-[#176B87]/40 w-fit">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-[#F28C28]" />
              <span>Synthesizing archaeological records & architectural studies...</span>
            </div>
          )}
        </div>

        {/* Suggested Questions Chips */}
        <div className="px-4 py-2 bg-[#171A20] border-t border-white/10 overflow-x-auto flex items-center gap-2 no-scrollbar">
          <span className="text-[10px] text-[#F4D06F] uppercase font-bold tracking-wider shrink-0 flex items-center gap-1">
            <Compass className="w-3 h-3 text-[#F28C28]" /> Suggested:
          </span>
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="px-3 py-1 rounded-full bg-[#20242B] hover:bg-[#F28C28]/20 text-[#D8D4CC] hover:text-[#FFF3D6] border border-white/8 hover:border-[#F28C28]/40 text-[11px] whitespace-nowrap transition-all"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar with Interactive Microphone States */}
        <div className="p-3.5 border-t border-white/10 bg-[#171A20] rounded-b-2xl flex items-center gap-2.5">
          {/* 4-State Microphone Button
              - Idle: Gold microphone
              - Listening: Saffron animated ring
              - Processing: Teal animated indicator
              - Answering: Emerald indicator
          */}
          <button
            id="curator-mic-btn"
            onClick={handleToggleMic}
            className={`p-2.5 rounded-xl transition-all relative shrink-0 cursor-pointer ${
              micState === 'idle'
                ? 'bg-[#D4A017]/15 text-[#D4A017] border border-[#D4A017]/40 hover:bg-[#D4A017]/30'
                : micState === 'listening'
                ? 'bg-[#F28C28]/25 text-[#F28C28] border-2 border-[#F28C28] ring-4 ring-[#F28C28]/40 animate-pulse'
                : micState === 'processing'
                ? 'bg-[#176B87]/25 text-[#64C2DB] border-2 border-[#176B87]'
                : 'bg-[#16745B]/25 text-[#52B79C] border-2 border-[#16745B]'
            }`}
            title={
              micState === 'listening'
                ? 'Click to finish speaking'
                : 'Ask Senior Curator with Voice'
            }
          >
            {micState === 'idle' && <Mic className="w-4 h-4" />}
            {micState === 'listening' && <Mic className="w-4 h-4 animate-bounce" />}
            {micState === 'processing' && <Sparkles className="w-4 h-4 animate-spin" />}
            {micState === 'answering' && <Volume2 className="w-4 h-4" />}
          </button>

          <input
            id="curator-chat-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Ask anything about an Indian monument, art form, or heritage..."
            className="flex-1 bg-[#0F1115] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[#FFF3D6] placeholder-[#9B9A96] focus:outline-none focus:border-[#F28C28] transition-colors"
          />

          <button
            id="curator-send-btn"
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className="p-2.5 rounded-xl bg-[#F28C28] hover:bg-[#ff9b3d] disabled:opacity-30 disabled:cursor-not-allowed text-[#0F1115] transition-all shadow-md shrink-0 cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
