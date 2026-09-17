export interface CuratorAnswer {
  reply: string;
  source: string;
  suggestedFollowUps?: string[];
  keyAspects?: string[];
}

export const PRESET_QUESTIONS = [
  'Why did the Cholas build Brihadisvara Temple without any cement or mortar?',
  'How was the Kailasa Temple at Ellora carved from the top of the mountain down?',
  'What makes Jaipur Blue Pottery unique compared to conventional clay ceramics?',
  'What is the meaning of the 24 astronomical sundial wheels at Konark Sun Temple?',
  'What is the special crystalline composition of the Taj Mahal Makrana marble?',
  'How are Patan Patola double-ikat silk saris dyed before weaving?',
];

export function getCuratorResponse(query: string): CuratorAnswer {
  const q = query.toLowerCase().trim();

  if (q.includes('chola') || q.includes('brihadisvara') || q.includes('granite') || q.includes('mortar')) {
    return {
      reply:
        'The Brihadisvara Temple in Thanjavur was consecrated in 1010 CE entirely using interlocking dry granite masonry (puzzle-like gravity joints). Chola engineers cut colossal granite blocks with precision grooves that locked under their own immense gravitational weight, without requiring any binding mortar. This flexible dry-joint design has allowed the 66-meter Vimana tower to withstand earthquakes for over a millennium!',
      source: 'Archaeological Survey of India & Chola Epigraphy Records',
      suggestedFollowUps: [
        'How was the 80-tonne granite Kumbam capstone hoisted to the peak?',
        'Where was the nearest granite quarry for Thanjavur located?',
      ],
      keyAspects: ['Interlocking dry joints', 'Weight: 80-tonne monolith cap', 'Dravidian Vimana architecture'],
    };
  }

  if (q.includes('kailasa') || q.includes('ellora') || q.includes('carve') || q.includes('top')) {
    return {
      reply:
        'Kailasa Temple (Cave 16 at Ellora) is the greatest monolithic rock excavation on earth. Rather than building up from the ground, 8th-century Rashtrakuta guild sculptors started at the very peak of the basalt mountain ridge and worked downward. They removed over 200,000 tonnes of solid volcanic basalt, carving out the roof, shikhara, galleried colonnades, and life-size elephants with zero margin for structural error.',
      source: 'Rashtrakuta Dynasty Inscriptions & UNESCO World Heritage Documentation',
      suggestedFollowUps: [
        'How many decades did the Kailasa monolithic excavation take?',
        'What tools did ancient Indian sculptors use on Deccan basalt?',
      ],
      keyAspects: ['Top-down monolithic excavation', '200,000 tonnes basalt removed', 'Rashtrakuta Patronage (King Krishna I)'],
    };
  }

  if (q.includes('blue pottery') || q.includes('jaipur') || q.includes('clay')) {
    return {
      reply:
        'Jaipur Blue Pottery is extraordinary because it uses NO clay whatsoever! The body dough is blended from crushed quartz stone powder, cullet (recycled glass), Fuller’s earth (Multani mitti), and natural tree gum. It is glazed with cobalt oxide for rich royal blue and copper oxide for turquoise, producing a durable, waterproof ceramic that never cracks from moisture.',
      source: 'Geographical Indications (GI) Registry of India & Sawai Ram Singh II Archives',
      suggestedFollowUps: [
        'What temperature is Jaipur Blue Pottery fired at?',
        'Why does Jaipur Blue Pottery not crack when exposed to water?',
      ],
      keyAspects: ['Clay-free quartz dough', 'Natural cobalt & copper glazes', 'GI Tagged Heritage Craft'],
    };
  }

  if (q.includes('konark') || q.includes('sundial') || q.includes('wheel')) {
    return {
      reply:
        'The 24 carved stone wheels of Konark Sun Temple in Odisha represent the 24 hours of the day and 24 fortnights of the Hindu year. Each wheel has eight major spokes and eight minor spokes. By observing where the shadow of the central axle falls between the spokes and beaded margins, one can read the exact solar time down to three minutes!',
      source: 'Eastern Ganga Dynasty Architectural Treatises & Silpa Sastras',
      suggestedFollowUps: [
        'How do the horses of Konark represent days of the week?',
        'What stones were used to construct Konark Sun Temple?',
      ],
      keyAspects: ['Accurate solar sundial calculation', 'Khondalite & Chlorite masonry', 'Chariot of Surya (Sun God)'],
    };
  }

  if (q.includes('taj mahal') || q.includes('marble')) {
    return {
      reply:
        'The Taj Mahal in Agra was constructed using pure crystalline Makrana marble from Rajasthan, which contains 98% calcium carbonate with negligible iron impurities, giving it high translucency. Under morning sunrise it reflects soft rosy tones, while under the full moon it appears luminous pearlescent white.',
      source: 'Mughal Royal Archives & Geological Survey of India',
      suggestedFollowUps: [
        'What is Pietra Dura (Parchin Kari) inlay work?',
        'How did Makrana marble resist yellowing over centuries?',
      ],
      keyAspects: ['98% pure calcium carbonate', 'Natural crystalline translucency', 'Pietra Dura lapidary inlay'],
    };
  }

  if (q.includes('patola') || q.includes('patan') || q.includes('sari') || q.includes('ikat')) {
    return {
      reply:
        'Patan Patola from Gujarat is the pinnacle of double-ikat silk weaving. Both warp and weft threads are individually tied and resist-dyed with natural plant pigments according to mathematical graphs before weaving. The alignment is so exact that both sides of the textile show identical vibrant patterns and color intensity, taking up to six months to weave a single sari!',
      source: 'Gujarat Handloom & GI Registry Archives',
      suggestedFollowUps: [
        'Which natural dyes are used in authentic Patola saris?',
        'Why are only three Salvi families left who know this craft?',
      ],
      keyAspects: ['Double-ikat warp & weft resist dyeing', 'Identical coloration on both sides', 'Solanki royal heritage'],
    };
  }

  return {
    reply: `That is an insightful inquiry regarding Indian heritage! Indian cultural traditions are deeply anchored in geographic ecosystems — from the granite Dravidian temples of the Cauvery delta to the sandstone desert havelis of the Thar, and the wild silk sericulture of the Brahmaputra valley. Every artifact in the Virtual Bharat Museum reflects centuries of empirical science, community guild knowledge, and artistic devotion.`,
    source: 'National Council of Science Museums & Ministry of Culture, Govt of India',
    suggestedFollowUps: [
      'Tell me about ancient temple acoustics and musical pillars',
      'How did medieval Indian builders transport colossal stones without cranes?',
    ],
    keyAspects: ['Living Traditions', 'Community Guilds', 'Scientific Heritage'],
  };
}
