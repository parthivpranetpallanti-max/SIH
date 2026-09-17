import { apiFetch } from './apiClient';

export interface CuratorAskResponse {
  question: string;
  reply: string;
  source: string;
  suggestedFollowUps?: string[];
  keyAspects?: string[];
  timestamp: string;
}

const LOCAL_PRESETS = [
  'Why did the Cholas build Brihadisvara Temple without any cement or mortar?',
  'How was the Kailasa Temple at Ellora carved from the top of the mountain down?',
  'What makes Jaipur Blue Pottery unique compared to conventional clay ceramics?',
  'What is the meaning of the 24 astronomical sundial wheels at Konark Sun Temple?',
  'What is the special crystalline composition of the Taj Mahal Makrana marble?',
];

export async function askCuratorApi(question: string): Promise<CuratorAskResponse> {
  const fallbackResponse: CuratorAskResponse = {
    question,
    reply:
      'Indian cultural traditions are deeply anchored in geographic ecosystems — from the granite Dravidian temples of the Cauvery delta to the sandstone desert havelis of the Thar. Every artifact reflects centuries of empirical science, guild knowledge, and devotion.',
    source: 'Virtual Bharat Museum Archival Knowledge Engine',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  return apiFetch<CuratorAskResponse>(
    '/curator/ask',
    {
      method: 'POST',
      body: JSON.stringify({ question }),
    },
    fallbackResponse
  );
}

export async function getCuratorPresets(): Promise<string[]> {
  return apiFetch<string[]>('/curator/presets', { method: 'GET' }, LOCAL_PRESETS);
}
