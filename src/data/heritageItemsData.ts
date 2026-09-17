import { HeritageItem } from '../types';

export const HERITAGE_ITEMS: HeritageItem[] = [
  // ==========================================
  // 1. MONUMENTS (स्मारक)
  // ==========================================
  {
    id: 'taj-mahal',
    title: 'Taj Mahal',
    hindiTitle: 'ताजमहल',
    category: 'monument',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'agra',
    districtName: 'Agra',
    era: 'Mughal Empire',
    period: '1631 – 1648 CE',
    dynastyOrTradition: 'Mughal Architecture (Shah Jahan)',
    architecturalStyleOrMedium: 'Indo-Islamic White Makrana Marble Mausoleum with Pietra Dura Inlay',
    unescoStatus: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'The ivory-white marble Taj Mahal reflected across the Yamuna garden pool in Agra',
    imageSource: 'Wikimedia Commons / Yann Forget',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'Universally recognized as the jewel of Muslim art in India and one of the universally admired masterpieces of world heritage, commissioned by Mughal Emperor Shah Jahan in memory of his beloved empress Mumtaz Mahal.',
    historicalContext: 'Constructed over seventeen years utilizing artisans from Persia, the Ottoman Empire, and across Hindustan, the Taj Mahal integrates symmetric Persian Charbagh garden philosophy with indigenous Indian craft skills, particularly stone lapidary and dome masonry.',
    architecturalHighlights: [
      'Central bulbous onion dome rising 73 meters (240 ft) above the marble plinth.',
      'Four three-tiered minarets designed with a deliberate outward inclination to prevent structural damage during earthquakes.',
      'Intricate floral Parchin Kari (Pietra Dura) inlays using lapis lazuli, carnelian, jasper, jade, and malachite set into white Makrana marble.',
      'Calligraphic Quranic inscriptions designed by master calligrapher Amanat Khan Shirazi.'
    ],
    audioGuideScript: 'Welcome to Agra, on the banks of the Yamuna River. Before you stands the Taj Mahal, an architectural symphonic poem in pure Makrana marble. Notice the flawless bilateral symmetry extending from the four flanking minarets to the central dome. When dawn breaks, the translucent marble reflects soft pink hues; by midday it glistens in brilliant ivory, and under moonlight, it gleams with a hypnotic, pearlescent glow.',
    keyFacts: [
      { label: 'UNESCO World Heritage', value: 'Inscribed 1983' },
      { label: 'Chief Architect', value: 'Ustad Ahmad Lahori' },
      { label: 'Primary Stone', value: 'Makrana Marble from Rajasthan' },
      { label: 'River Border', value: 'Yamuna River' }
    ],
    tags: ['UNESCO', 'Mughal', 'Marble', 'Agra', 'Indo-Islamic', 'Seven Wonders']
  },
  {
    id: 'brihadisvara-temple',
    title: 'Brihadisvara Temple (Peruvudaiyar Kovil)',
    hindiTitle: 'बृहदीश्वर मंदिर (तंजावुर)',
    category: 'monument',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'thanjavur',
    districtName: 'Thanjavur',
    era: 'Chola Dynasty',
    period: 'Completed 1010 CE',
    dynastyOrTradition: 'Great Living Chola Temples (Rajaraja Chola I)',
    architecturalStyleOrMedium: 'Pure Granite Dravidian Temple Architecture (Dravida Vimana)',
    unescoStatus: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageAlt: 'The colossal granite Vimana tower of Brihadisvara Temple under blue skies in Thanjavur',
    imageSource: 'Wikimedia Commons / ASI',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    curatorSummary: 'One of the largest Hindu temples in India and an exemplary pinnacle of Dravidian architecture, built entirely of interlocking granite blocks without binding mortar by King Rajaraja Chola I.',
    historicalContext: 'Commissioned to celebrate Rajaraja Chola’s imperial triumphs across Southern India, Sri Lanka, and the Indian Ocean trade network, the temple served not only as a religious sanctum for Lord Shiva but also as an immense cultural hub for classical dance, bronze casting, and Vedic scholarship.',
    architecturalHighlights: [
      'The 16-storey Vimana tower rises to an astounding 66 meters (216 ft), dominating the Cauvery delta skyline.',
      'The crowning Kumbam (apex dome) is carved from a monolithic block of granite weighing an estimated 80 tonnes.',
      'Monolithic Nandi bull sculpture at the entrance measuring 6 meters long and 3.7 meters high, carved from a single stone.',
      'Exquisite Chola and Nayak wall frescoes lining the inner ambulatory corridor depicting Lord Shiva and imperial court scenes.'
    ],
    audioGuideScript: 'Stand in awe before the Brihadisvara Temple of Thanjavur. Notice that this entire monumental edifice was assembled from over 130,000 tonnes of solid granite, in a river delta where not a single rock quarry naturally exists. An earthen ramp stretching over six kilometers was constructed by Chola master engineers to haul the 80-tonne granite capstone to the summit of the tower.',
    keyFacts: [
      { label: 'UNESCO World Heritage', value: 'Inscribed 1987 (Chola Temples)' },
      { label: 'Commissioned By', value: 'Emperor Rajaraja Chola I' },
      { label: 'Total Height', value: '66 meters (216 feet)' },
      { label: 'Presiding Deity', value: 'Lord Shiva (Peruvudaiyar)' }
    ],
    tags: ['UNESCO', 'Chola', 'Granite', 'Dravidian', 'Thanjavur', 'Great Living Temples']
  },
  {
    id: 'hampi-stone-chariot',
    title: 'Stone Chariot at Vittala Temple',
    hindiTitle: 'विट्ठल मंदिर का प्रस्तर रथ (हम्पी)',
    category: 'monument',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    districtId: 'bellary',
    districtName: 'Vijayanagara (Hampi)',
    era: 'Vijayanagara Empire',
    period: '16th Century CE',
    dynastyOrTradition: 'Tuluva Dynasty (King Krishnadevaraya)',
    architecturalStyleOrMedium: 'Monolithic Style Interlocking Carved Granite Garuda Shrine',
    unescoStatus: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vittala_Temple_Stone_Chariot_Hampi_India.jpg/1280px-Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    imageAlt: 'The intricately carved stone chariot shrine inside the courtyard of Vittala Temple in Hampi',
    imageSource: 'Wikimedia Commons / Dey.sandip',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    curatorSummary: 'An internationally celebrated icon of Vijayanagara architectural ingenuity, this ornate stone chariot is a dedicated shrine to Garuda, the celestial mount of Lord Vishnu, situated within the sacred Vittala Temple complex.',
    historicalContext: 'King Krishnadevaraya was deeply inspired by the Konark Sun Temple chariot during his eastern military campaign in Kalinga (Odisha), and commissioned this monument at his capital Vijayanagara on the banks of the Tungabhadra River.',
    architecturalHighlights: [
      'Engineered from multiple carved granite stone slabs with concealed interlocking joints giving the illusion of a monolithic sculpture.',
      'The chariot wheels are adorned with concentric lotus floral carvings; historically they were capable of rotating on their stone axles.',
      'Flanked by two stone elephants standing guard at the entry stairway, with traces of original multi-color mineral paintings still visible under crevices.',
      'Situated directly opposite the Maha Mantapa, renowned for its 56 musical granite pillars that resonate musical notes when struck.'
    ],
    audioGuideScript: 'Welcome to the boulder-strewn landscape of Hampi, once one of the wealthiest metropolis capitals on earth. Here in the central courtyard of Vittala Temple stands the Stone Chariot. Though it appears to have been chiselled from a single granite boulder, close inspection reveals precision-cut interlocking stone slabs fitted together so seamlessly that the seams remain virtually invisible.',
    keyFacts: [
      { label: 'UNESCO World Heritage', value: 'Inscribed 1986 (Hampi Monuments)' },
      { label: 'Currency Feature', value: 'Featured on Reserve Bank of India ₹50 note' },
      { label: 'Dedicated Deity', value: 'Garuda (Vahana of Vishnu)' },
      { label: 'River', value: 'Tungabhadra' }
    ],
    tags: ['UNESCO', 'Vijayanagara', 'Hampi', 'Granite', 'Stone Chariot', 'Carnatic']
  },
  {
    id: 'kailasa-temple-ellora',
    title: 'Kailasa Temple (Cave 16, Ellora)',
    hindiTitle: 'कैलाश मंदिर (गुफा 16, एलोरा)',
    category: 'monument',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    districtId: 'aurangabad',
    districtName: 'Chhatrapati Sambhaji Nagar',
    era: 'Rashtrakuta Dynasty',
    period: '8th Century CE (c. 756 – 773 CE)',
    dynastyOrTradition: 'Rashtrakuta Dynasty (King Krishna I)',
    architecturalStyleOrMedium: 'Monolithic Top-Down Vertical Excavation from Basalt Rock Cliff',
    unescoStatus: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kailash_temple%2C_cave_16%2C_Ellora%2C_front_view.jpg/1280px-Kailash_temple%2C_cave_16%2C_Ellora%2C_front_view.jpg',
    imageAlt: 'The monolithic rock-cut Kailasa Temple carved vertically out of the basalt cliffside at Ellora',
    imageSource: 'Wikimedia Commons / Pratheepps',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kailash_temple,_cave_16,_Ellora,_front_view.jpg',
    curatorSummary: 'The largest monolithic rock-cut monument on earth. Sculptors carved vertically downward from the summit of the volcanic basalt hillside, excavating over 200,000 tonnes of solid rock without modern machinery.',
    historicalContext: 'Commissioned by Rashtrakuta King Krishna I to symbolize Mount Kailash, the divine Himalayan abode of Lord Shiva. The project required generations of master guild sculptors to execute the design top-down, meaning zero margin for architectural error.',
    architecturalHighlights: [
      'Top-down quarrying method where master sculptors finished the shikharas, roof ornaments, and decorative ceilings first before excavating lower halls.',
      'Massive two-storey multi-pillared sabha mandapa surrounded by life-sized carved stone elephants and mythological friezes.',
      'Famous narrative bas-relief panel of "Ravana Shaking Mount Kailash", capturing kinetic drama and sculptural depth.',
      'Originally coated in radiant white plaster (chuna) to simulate the snow-capped Himalayan peaks of sacred Kailash.'
    ],
    audioGuideScript: 'Gaze into the cavernous basalt chasm of Ellora Cave 16. What you are witnessing is not a building erected from stone blocks, but a colossal temple carved entirely out of living mountain rock. The ancient sculptors began at the top of the cliff and worked downward, chiselling out pillars, galleried shrines, vaulted ceilings, and elephant friezes without leaving any room for revision.',
    keyFacts: [
      { label: 'UNESCO World Heritage', value: 'Inscribed 1983 (Ellora Caves)' },
      { label: 'Excavated Volume', value: 'Approx. 200,000 tonnes of Basalt rock' },
      { label: 'Dynasty', value: 'Rashtrakuta (King Krishna I)' },
      { label: 'Cave Number', value: 'Cave 16' }
    ],
    tags: ['UNESCO', 'Rashtrakuta', 'Monolithic', 'Rock-Cut', 'Ellora', 'Shiva']
  },
  {
    id: 'konark-sun-temple',
    title: 'Konark Sun Temple (Black Pagoda)',
    hindiTitle: 'कोणार्क सूर्य मंदिर (ओडिशा)',
    category: 'monument',
    stateId: 'odisha',
    stateName: 'Odisha',
    districtId: 'puri',
    districtName: 'Puri',
    era: 'Eastern Ganga Dynasty',
    period: 'c. 1250 CE',
    dynastyOrTradition: 'Kalinga Architecture (King Narasimhadeva I)',
    architecturalStyleOrMedium: 'Kalinga Architectural Style with Khondalite and Chlorite Stone Sculpting',
    unescoStatus: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg',
    imageAlt: 'The majestic stone chariot of the Sun Temple at Konark standing on the shores of Odisha',
    imageSource: 'Wikimedia Commons / ASI',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Konarka_Temple.jpg',
    curatorSummary: 'A monumental stone chariot conceived as the cosmic chariot of Surya, the Hindu Sun God, drawn by seven caparisoned horses and borne on 24 intricately sculpted stone wheels that function as precision sundials.',
    historicalContext: 'Erected by King Narasimhadeva I of the Eastern Ganga Dynasty on the shores of the Bay of Bengal. European sailors navigating the coastline called it the "Black Pagoda" because its dark stone tower served as a prominent maritime landmark.',
    architecturalHighlights: [
      '24 carved stone chariot wheels measuring 3 meters in diameter, each acting as an accurate sundial with spokes tracking time down to minutes.',
      'Seven rearing war horses symbolizing the seven days of the week and seven sacred musical notes (sapta swaras).',
      'The Natya Mandapa (Hall of Dance) carved with hundreds of celestial musicians, drummers, and dancers reflecting the roots of classical Odissi.',
      'Legendary stories of a heavy magnetic lodestone iron-beam system embedded inside the central sanctuary tower.'
    ],
    audioGuideScript: 'Welcome to the shores of the Bay of Bengal at Konark. Imagine the sun god Surya rising out of the eastern sea, his golden chariot blazing across the heavens. That poetic vision is materialized here in solid stone. Look closely at the carved spokes of the sundial wheels: the shadows cast by the central axle still tell the exact hour of the day with astonishing astronomical precision.',
    keyFacts: [
      { label: 'UNESCO World Heritage', value: 'Inscribed 1984' },
      { label: 'Commissioned By', value: 'King Narasimhadeva I' },
      { label: 'Astronomical Feature', value: '24 Functional Stone Sundial Wheels' },
      { label: 'Coastline', value: 'Bay of Bengal, Puri Coast' }
    ],
    tags: ['UNESCO', 'Kalinga', 'Sun Temple', 'Sundial', 'Puri', 'Eastern Ganga']
  },
  {
    id: 'hawa-mahal',
    title: 'Hawa Mahal (Palace of Winds)',
    hindiTitle: 'हवा महल (जयपुर)',
    category: 'monument',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    districtId: 'jaipur',
    districtName: 'Jaipur',
    era: 'Kachhwaha Rajput Dynasty',
    period: '1799 CE',
    dynastyOrTradition: 'Rajput & Mughal Synthesis (Maharaja Sawai Pratap Singh)',
    architecturalStyleOrMedium: 'Red and Pink Sandstone Five-Storey Screen Facade with Jharokhas',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hawa_Mahal_2011.jpg/1280px-Hawa_Mahal_2011.jpg',
    imageAlt: 'The pink sandstone pyramidal facade of Hawa Mahal adorned with 953 jharokha casements in Jaipur',
    imageSource: 'Wikimedia Commons / Funtours',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_2011.jpg',
    curatorSummary: 'An extraordinary five-storey pyramidal facade resembling the crown of Lord Krishna, engineered with 953 latticed sandstone windows (jharokhas) that funnel cool desert air using the Venturi airflow effect.',
    historicalContext: 'Built by Maharaja Sawai Pratap Singh, an ardent devotee of Lord Krishna. Designed by master architect Lal Chand Ustad, it enabled the royal women of the zenana to observe daily street festivals and royal processions without violating the purdah customs of the era.',
    architecturalHighlights: [
      'Total of 953 finely carved sandstone jharokha casements fitted with intricate miniature lattice stonework.',
      'Unique five-storey structure with no foundation plinth on the street front, rising only 50 feet high while barely 1.5 feet deep at its crest.',
      'Natural architectural air-conditioning system based on the Venturi wind tunnel principle.',
      'Internal access achieved through sloping ramps rather than stairs to facilitate the movement of royal palanquins.'
    ],
    audioGuideScript: 'Notice how the facade of Hawa Mahal rises like an ornate honeycomb against Jaipur’s skyline. The name translates to "Palace of Winds". When hot desert breezes enter through the hundreds of miniature stone perforations, the constriction accelerates the airflow, causing it to drop in temperature and keeping the internal chambers pleasantly cool even in scorching Rajasthani summers.',
    keyFacts: [
      { label: 'UNESCO City', value: 'Part of Jaipur Walled City UNESCO World Heritage' },
      { label: 'Windows (Jharokhas)', value: '953 Carved Casements' },
      { label: 'Architect', value: 'Lal Chand Ustad' },
      { label: 'Color Palette', value: 'Terracotta Pink Sandstone' }
    ],
    tags: ['Rajput', 'Pink City', 'Jaipur', 'Jharokhas', 'Sandstone', 'Krishna Crown']
  },
  {
    id: 'golden-temple-amritsar',
    title: 'Sri Harmandir Sahib (Golden Temple)',
    hindiTitle: 'श्री हरमंदिर साहिब (स्वर्ण मंदिर)',
    category: 'monument',
    stateId: 'punjab',
    stateName: 'Punjab',
    districtId: 'amritsar',
    districtName: 'Amritsar',
    era: 'Sikh Heritage & Sikh Empire',
    period: 'Founded 1577 CE; Gilded 1830 CE',
    dynastyOrTradition: 'Guru Ram Das, Guru Arjan Dev & Maharaja Ranjit Singh',
    architecturalStyleOrMedium: 'Indo-Islamic & Rajput Fusion Gilded with 500+ kg of 24-Karat Pure Gold',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amritsar_02.jpg/1280px-The_Golden_Temple_of_Amritsar_02.jpg',
    imageAlt: 'The golden sanctum of Sri Harmandir Sahib gleaming amidst the sacred Amrit Sarovar lake in Amritsar',
    imageSource: 'Wikimedia Commons / Geri',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Golden_Temple_of_Amritsar_02.jpg',
    curatorSummary: 'The holiest shrine of Sikhism, set in the center of the sacred pool of nectar (Amrit Sarovar), symbolizing spiritual transcendence, universal equality, and selfless community service (Langar).',
    historicalContext: 'The fifth Sikh Guru, Guru Arjan Dev, designed the temple with entrances facing all four cardinal directions to proclaim that people of all castes, creeds, and backgrounds are welcome. In 1830, Maharaja Ranjit Singh gilded the upper storeys with pure gold leaf.',
    architecturalHighlights: [
      'Four open entrances facing North, South, East, and West affirming universal brotherhood.',
      'Connected to the circumambulatory marble parikrama by a causeway bridge known as the Guru’s Bridge.',
      'Intricate marble Pietra Dura inlays depicting birds and flora executed by Sikh and Rajasthani master craftsmen.',
      'Houses the world’s largest community kitchen (Langar) feeding up to 100,000 free hot meals daily to all visitors.'
    ],
    audioGuideScript: 'Listen to the soothing strains of Gurbani kirtan floating across the tranquil waters of the Amrit Sarovar. The Golden Temple was deliberately constructed at a lower elevation than the surrounding city streets, requiring every visitor to physically step downward to enter, teaching the virtue of humility before God and humanity.',
    keyFacts: [
      { label: 'Foundation Laid By', value: 'Sufi Saint Mian Mir (at Guru Arjan Dev’s request)' },
      { label: 'Gold Leafing', value: 'Maharaja Ranjit Singh (c. 1830)' },
      { label: 'Community Service', value: 'World’s Largest Free Langar Kitchen' },
      { label: 'Sacred Water', value: 'Amrit Sarovar' }
    ],
    tags: ['Sikh Heritage', 'Amritsar', 'Gold Leaf', 'Langar', 'Spiritual Sanctuary']
  },

  // ==========================================
  // 2. ART (चित्रकला एवं लोक कला)
  // ==========================================
  {
    id: 'madhubani-painting',
    title: 'Madhubani / Mithila Painting',
    hindiTitle: 'मधुबनी / मिथिला चित्रकला',
    category: 'art',
    stateId: 'bihar',
    stateName: 'Bihar',
    districtId: 'madhubani',
    districtName: 'Madhubani',
    era: 'Ancient Vedic Roots to Living Tradition',
    period: 'Practiced for over 2,500 years',
    dynastyOrTradition: 'Mithila Folk Tradition (King Janaka Legend)',
    architecturalStyleOrMedium: 'Natural Pigments from Plants, Soot & Minerals on Handmade Canvas or Mud Walls',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mahabodhi_Temple%2C_Bodh_Gaya.jpg/1280px-Mahabodhi_Temple%2C_Bodh_Gaya.jpg',
    imageAlt: 'A vibrant Madhubani painting depicting nature, fish, birds, and divine motifs with double-line borders',
    imageSource: 'Wikimedia Commons / ASI / Ministry of Culture',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Mahabodhi_Temple,_Bodh_Gaya.jpg',
    curatorSummary: 'One of the world’s most celebrated folk art traditions, practiced by women in the Mithila region of Bihar, characterized by complex geometric line patterns and vivid natural dyes without leaving empty space.',
    historicalContext: 'Tradition narrates that King Janaka commissioned artists to paint the entire town of Mithila for the wedding of his daughter Sita to Prince Rama. Passed down matrilineally through generations, it was traditionally painted on freshly plastered mud walls (Kohbar).',
    architecturalHighlights: [
      'Distinctive double-line contours filled with intricate cross-hatching and dotting (katchni and bharni styles).',
      'Use of exclusively natural dyes: yellow from turmeric, blue from indigo, black from lamp soot, green from crushed leaves, and red from kusum flowers.',
      'No negative space left unadorned; empty gaps are systematically filled with leaves, flowers, birds, and geometric glyphs.',
      'Symbolic motifs: Fish (fertility and auspiciousness), Peacock (love and royalty), Lotus (purity), and Sun/Moon (divine harmony).'
    ],
    audioGuideScript: 'Look into the intricate linear world of Madhubani art. Traditionally, women drew these sacred frescoes using bamboo twigs wrapped in cotton or sharpened bird quills. Notice that not a single square millimeter of canvas is left vacant; where characters end, vines, sacred turtles, and sun rays bloom.',
    keyFacts: [
      { label: 'GI Tag Status', value: 'Registered Geographical Indication (Bihar)' },
      { label: 'Major Styles', value: 'Bharni, Katchni, Tantrik, Godna, Gobar' },
      { label: 'Primary Medium', value: 'Natural Mineral & Vegetable Dyes' },
      { label: 'Core Themes', value: 'Nature, Sita-Rama, Krishna Leela, Fertility' }
    ],
    tags: ['Mithila', 'Folk Art', 'GI Tag', 'Bihar', 'Natural Dyes', 'Handmade']
  },
  {
    id: 'tanjore-painting',
    title: 'Thanjavur (Tanjore) Gold Foil Painting',
    hindiTitle: 'तंजौर स्वर्ण पत्र चित्रकला',
    category: 'art',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'thanjavur',
    districtName: 'Thanjavur',
    era: 'Maratha Rule in Thanjavur',
    period: 'Late 16th – 18th Century CE',
    dynastyOrTradition: 'Chola, Nayak & Maratha Court Patronage (King Serfoji II)',
    architecturalStyleOrMedium: 'Gesso Relief Work Embellished with 22-Karat Pure Gold Foil & Semi-Precious Gemstones',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageAlt: 'Rich Tanjore gold-leaf painting of child Krishna adorned with radiant 22k gold foil and ruby gemstones',
    imageSource: 'Wikimedia Commons / ASI Archives',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    curatorSummary: 'Distinguished by rich, vivid colors, iconic compositions, and glittering relief ornamentation crafted from pure 22-karat gold leaf sheets and cut glass or semi-precious stones embedded on seasoned teakwood boards.',
    historicalContext: 'Thriving under the patronage of the Maratha rulers of Thanjavur, particularly Maharaja Serfoji II, Tanjore paintings served as sacred devotional devotional focal points in temple sanctums and royal pooja rooms.',
    architecturalHighlights: [
      'Layered gesso substrate crafted from limestone powder (sukka matti) and gum resin to create high-relief three-dimensional forms.',
      'Delicate application of authentic 22-karat gold leaf (thanga thagadu) over carved draperies, halos, and architectural arches.',
      'Iconic depiction of divine figures with large almond eyes, rounded contours, and serene expressions, especially Bala Krishna.',
      'Framed traditionally in seasoned Chettinad teakwood frames to preserve gold luster for centuries.'
    ],
    audioGuideScript: 'Behold the brilliance of a Thanjavur gold painting. In dimly lit traditional temple sanctuaries, oil lamps would catch the three-dimensional gold foil and sparkling ruby stones, illuminating the divine icons with a divine, otherworldly radiance that never fades over generations.',
    keyFacts: [
      { label: 'GI Tag', value: 'Registered GI of Tamil Nadu (2007)' },
      { label: 'Signature Element', value: '22-Karat Pure Gold Leaf Foil (Varak)' },
      { label: 'Base Board', value: 'Seasoned Teakwood with Cotton Cloth Plaster' },
      { label: 'Patron Monarch', value: 'Maharaja Serfoji II' }
    ],
    tags: ['Tanjore', 'Gold Leaf', 'GI Tag', 'Thanjavur', 'Carnatic Devotional', 'Teakwood']
  },
  {
    id: 'warli-art',
    title: 'Warli Tribal Wall Art',
    hindiTitle: 'वारली जनजातीय भित्ति चित्रकला',
    category: 'art',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    districtId: 'palghar',
    districtName: 'Palghar & Thane',
    era: 'Neolithic Indigenous Continuity',
    period: 'Practiced since 2500 – 3000 BCE',
    dynastyOrTradition: 'Warli Adivasi Tribe of the Sahyadri Foothills',
    architecturalStyleOrMedium: 'Rice Flour Paste & Water-Gum on Ochre Mud-Cowdung Washed Walls',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kailash_temple%2C_cave_16%2C_Ellora%2C_front_view.jpg/1280px-Kailash_temple%2C_cave_16%2C_Ellora%2C_front_view.jpg',
    imageAlt: 'Warli tribal mural depicting the Tarpa spiral circle dance painted in white rice paste on red ochre background',
    imageSource: 'Wikimedia Commons / Tribal Cooperative Marketing Dev Federation (TRIFED)',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Kailash_temple,_cave_16,_Ellora,_front_view.jpg',
    curatorSummary: 'One of India’s oldest living tribal art styles, expressing ecological harmony, fertility rituals, and community joy through elemental geometric shapes — circles, triangles, and dashes.',
    historicalContext: 'Painted by Warli tribal women (Suhasinis) during wedding ceremonies and harvest thanksgiving. The art avoids depiction of religious deities in conventional temple forms, focusing instead on mother nature (Palghat), harvests, and circular dances.',
    architecturalHighlights: [
      'Basic geometric vocabulary: The circle represents the Sun and Moon; the triangle comes from mountains and pointed trees; the square denotes sacred ground.',
      'Human bodies constructed from two opposing triangles joined at the tip, signifying physical balance and kinetic movement.',
      'The iconic Tarpa dance spiral, where dozens of villagers clasp hands in concentric waves around a central wind instrument player.',
      'Eco-friendly materials: Rice powder mixed with water and edible gum, painted with chewed bamboo twigs.'
    ],
    audioGuideScript: 'Observe the elegance in simplicity of Warli art. With just white rice paste against earthen mud walls, the Warli artists capture the pulse of collective life. The central spiral dance mirrors the movement of the universe itself — without beginning and without end.',
    keyFacts: [
      { label: 'GI Tag', value: 'Geographical Indication (Maharashtra, 2014)' },
      { label: 'Color Pigment', value: 'White Rice Flour with Water and Acacia Gum' },
      { label: 'Central Dance', value: 'Tarpa Spiral Dance' },
      { label: 'Core Philosophy', value: 'Ecological balance & Animistic harmony' }
    ],
    tags: ['Warli', 'Tribal Art', 'GI Tag', 'Maharashtra', 'Rice Paste', 'Adivasi']
  },
  {
    id: 'pattachitra-art',
    title: 'Odisha Pattachitra Scroll Painting',
    hindiTitle: 'ओडिशा पट्टचित्र (कपड़े पर चित्रांकन)',
    category: 'art',
    stateId: 'odisha',
    stateName: 'Odisha',
    districtId: 'puri',
    districtName: 'Puri',
    era: 'Kalinga Devotional Heritage',
    period: '5th Century BCE – Present',
    dynastyOrTradition: 'Chitrakar Community of Raghurajpur Heritage Crafts Village',
    architecturalStyleOrMedium: 'Natural Stone & Conch Shell Pigments on Treated Cotton Cloth (Patta)',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg',
    imageAlt: 'Detailed Pattachitra scroll depicting Lord Jagannath, Balabhadra, and Subhadra with intricate floral margins',
    imageSource: 'Wikimedia Commons / Ministry of Textiles',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Konarka_Temple.jpg',
    curatorSummary: 'A traditional cloth-based scroll painting renowned for intricate brushwork, mythological narratives of Lord Jagannath, and strictly natural pigment formulation derived from river conches, minerals, and wild lampblack.',
    historicalContext: 'When the wooden idols of Lord Jagannath undergo their sacred ritual bath (Snana Yatra) and are kept in seclusion for fifteen days (Anavasara), large Pattachitra cloth paintings called Anavasara Patti are placed in the sanctum sanctorum for worship.',
    architecturalHighlights: [
      'Canvas preparation: Fine cotton sari cloth is treated with tamarind seed paste (niryas kalpa) and crushed chalk stone powder to create a leather-smooth surface.',
      'Natural white derived from ground coastal sea conch shells (sankha bhasma); black from burning camphor and mustard oil lamps.',
      'Finished with a protective natural lacquer coat applied by holding the painting over heated charcoal, rendering it water-resistant for centuries.',
      'Strict adherence to Shilpa Shastra aesthetic facial conventions: razor-sharp profile eyes, curved eyebrows, and decorative borders.'
    ],
    audioGuideScript: 'Every Pattachitra scroll is an act of prayer. In the artisan village of Raghurajpur near Puri, every household is an open-air art studio. The brushes used for microscopic lines are made from delicate hairs taken from the belly of local squirrels and mongoose.',
    keyFacts: [
      { label: 'GI Tag', value: 'Registered GI of Odisha' },
      { label: 'Artisan Village', value: 'Raghurajpur Heritage Crafts Village' },
      { label: 'Canvas Substrate', value: 'Tamarind-gum starched cotton cloth' },
      { label: 'Core Deity', value: 'Lord Jagannath of Puri' }
    ],
    tags: ['Pattachitra', 'Odisha', 'Puri', 'Raghurajpur', 'GI Tag', 'Jagannath']
  },

  // ==========================================
  // 3. MUSICAL INSTRUMENTS (पारंपरिक वाद्ययंत्र)
  // ==========================================
  {
    id: 'saraswati-veena',
    title: 'Saraswati Veena',
    hindiTitle: 'सरस्वती वीणा (तंजौर)',
    category: 'instrument',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'thanjavur',
    districtName: 'Thanjavur',
    era: 'Carnatic Classical Heritage',
    period: 'Refined in 17th Century (Raghunatha Nayak)',
    dynastyOrTradition: 'Nayak Kings of Thanjavur & Sangita Ratnakara Tradition',
    architecturalStyleOrMedium: 'Carved Aged Jackfruit Wood (Palamaram) with Brass Frets and Wax Setting',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageAlt: 'A masterfully crafted Thanjavur Saraswati Veena carved from jackfruit wood with yali dragon head resonator',
    imageSource: 'Wikimedia Commons / ASI Heritage Archive',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    curatorSummary: 'The queen of Indian stringed instruments, revered as the sacred instrument of Goddess Saraswati and the fundamental acoustic reference for Carnatic classical musical gamakas (microtonal oscillations).',
    historicalContext: 'Standardized in Thanjavur under King Raghunatha Nayak and his minister Govinda Dikshitar into the 24-fret instrument known today as the Raghunatha Mela Veena.',
    architecturalHighlights: [
      'Carved from a single mature block of Jackfruit wood (Artocarpus heterophyllus), renowned for its resonant acoustic timbre.',
      'Features 24 fixed brass frets set precisely in a beeswax and charcoal resin ledge along the neck.',
      'Four primary melody playing strings and three side drone/rhythm strings (talam).',
      'The neck terminates in a sculptural Yali (mythological lion-serpent beast) head, counterbalanced by a gourd resonator.'
    ],
    audioGuideScript: 'Listen to the deep, soul-stirring resonance of the Saraswati Veena. Unlike fretted instruments of the West, the veena’s curved brass frets allow the musician to gently pull the brass strings sideways across the fingerboard, producing the delicate gliding microtones known as Gamakas.',
    keyFacts: [
      { label: 'GI Tag', value: 'Thanjavur Veena (Registered GI 2013)' },
      { label: 'Acoustic Wood', value: 'Mature Wild Jackfruit Wood' },
      { label: 'Fret System', value: '24 Fixed Brass Frets on Wax Ledge' },
      { label: 'Tradition', value: 'Carnatic Classical Music' }
    ],
    tags: ['Veena', 'Carnatic', 'Thanjavur', 'GI Tag', 'Jackfruit Wood', 'Classical Music']
  },
  {
    id: 'sitar',
    title: 'Hindustani Classical Sitar',
    hindiTitle: 'शास्त्रीय सितार (वाराणसी घराना)',
    category: 'instrument',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'varanasi',
    districtName: 'Varanasi (Kashi)',
    era: 'Mughal & Hindustani Confluence',
    period: '18th Century CE – Present',
    dynastyOrTradition: 'Amir Khusrau Roots, Senia & Varanasi Gharana',
    architecturalStyleOrMedium: 'Seasoned Toon/Teak Wood Neck with Dried Gourd (Kadu) Resonator and Curved Frets',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'A classical concert sitar with carved floral peghead and dried gourd acoustic soundbox',
    imageSource: 'Wikimedia Commons / Yann Forget',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'The iconic long-necked plucked lute of North Indian Hindustani music, celebrated worldwide through masters like Pandit Ravi Shankar and Ustad Vilayat Khan for its mesmerizing sympathetic resonance.',
    historicalContext: 'Evolving from ancient Indian veenas and Central Asian lutes, the modern sitar reached its acoustic perfection in the workshops of Varanasi and Kolkata luthiers, incorporating movable curved arched frets and sympathetic strings.',
    architecturalHighlights: [
      'The primary sound chamber is crafted from a hand-selected, specially dried wild bottle gourd (kaddu).',
      'Fitted with 11 to 13 sympathetic resonating strings (tarab) that vibrate naturally in harmonic resonance with melody notes.',
      'Wide bone or stag horn bridges (jawari) filed to microscopic curvature to produce the characteristic buzzing overtones.',
      'Movable arched brass or metal frets tied with durable silk or nylon threads.'
    ],
    audioGuideScript: 'When a sitarist plucks a single string with a wire plectrum (mizrab), a shimmering cascade of sound awakens. This is caused by the sympathetic strings beneath the frets, which vibrate on their own in response to matching acoustic frequencies, creating a celestial acoustic hall effect.',
    keyFacts: [
      { label: 'Playing Plectrum', value: 'Mizrab (worn on index finger)' },
      { label: 'Soundboard', value: 'Tabli made of Tun or Teak wood' },
      { label: 'Acoustic Chamber', value: 'Dried Bottle Gourd' },
      { label: 'Sympathetic Strings', value: '11 to 13 Tarab strings' }
    ],
    tags: ['Sitar', 'Hindustani', 'Varanasi', 'Ravi Shankar', 'Classical Music', 'Strings']
  },
  {
    id: 'mridangam',
    title: 'Mridangam Percussion',
    hindiTitle: 'मृदंगम् (शास्त्रीय ताल वाद्य)',
    category: 'instrument',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'thanjavur',
    districtName: 'Thanjavur',
    era: 'Ancient Natya Shastra Heritage',
    period: 'Over 2,000 Years Old',
    dynastyOrTradition: 'Carnatic Classical Tala Tradition (Thanjavur Baani)',
    architecturalStyleOrMedium: 'Hollow Jackfruit Trunk with Multi-Layered Goatskin and Iron-Slag Tuning Paste',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Madurai_Meenakshi_Amman_Temple_Gopuram.jpg/1280px-Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    imageAlt: 'The dual-headed barrel drum Mridangam resting on a silk ring cushion for Carnatic concert performance',
    imageSource: 'Wikimedia Commons / ASI',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    curatorSummary: 'The primary rhythmic accompaniment of Carnatic classical music, this double-headed barrel drum produces harmonic pitches and complex mathematical rhythmic cycles (Talas).',
    historicalContext: 'Mentioned in Valmiki’s Ramayana and Bharata Muni’s Natya Shastra as the divine drum of Lord Nandi. Its acoustic design creates pure tonal harmonics rarely found in percussion drums.',
    architecturalHighlights: [
      'Dual heads: The right head (Valanthalai) is tuned to a precise musical pitch; the left head (Thoppi) produces deep bass notes.',
      'Right head incorporates the Soru (Karanai), a permanent black paste circle made from iron slag filings, boiled rice, and mineral powder.',
      'Tensioned with continuous braided water buffalo hide straps interlaced with wooden tuning pegs.',
      'A temporary semolina or wet flour paste is applied to the bass head before concerts to lower pitch and sustain tone.'
    ],
    audioGuideScript: 'The word Mridangam derives from Sanskrit "Mrid" meaning clay and "Anga" meaning body. It is capable of producing not just noise or beats, but pure, singing musical notes. The black circle on the right drumhead acts as a harmonic dampener, allowing the drum to produce clean fundamental pitch.',
    keyFacts: [
      { label: 'Primary Wood', value: 'Mature Jackfruit Tree Core' },
      { label: 'Black Harmonic Spot', value: 'Karanai / Soru' },
      { label: 'Music System', value: 'Carnatic Classical Tala System' },
      { label: 'Drummer Master Style', value: 'Thanjavur & Pudukkottai Styles' }
    ],
    tags: ['Mridangam', 'Carnatic', 'Thanjavur', 'Percussion', 'Rhythm', 'Natya Shastra']
  },
  {
    id: 'shehnai',
    title: 'Varanasi Shehnai',
    hindiTitle: 'शहनाई (मंगल वाद्य, वाराणसी)',
    category: 'instrument',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'varanasi',
    districtName: 'Varanasi (Kashi)',
    era: 'Medieval to Modern Concert Stage',
    period: 'Immortalized by Ustad Bismillah Khan',
    dynastyOrTradition: 'Varanasi Mangal Vadya Tradition & Royal Naubat Khana',
    architecturalStyleOrMedium: 'Conical Burma Teak Wood Tube with Quadruple Reed and Flared Brass Bell',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'A classical Shehnai with dark teakwood barrel, quadruple reeds, and polished golden brass bell',
    imageSource: 'Wikimedia Commons / Ministry of Culture',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'The quintessential Indian wind instrument of auspicious celebrations and classical Hindustani ragas, elevated from temple gateways to international concert halls by Bharat Ratna Ustad Bismillah Khan.',
    historicalContext: 'Traditionally played in royal palace gateways (Naubat Khana) and Hindu temple rituals to herald weddings and festivals. Bismillah Khan practiced for decades on the ghats of the Ganga at Balaji Temple in Varanasi.',
    architecturalHighlights: [
      'Quadruple reed (two sets of double reeds) crafted from specially dried river reeds (pala grass).',
      'Carved from dense dark teak or blackwood with seven finger holes along the conical bore.',
      'Terminates in an acoustic flared brass or silver metal bell that projects high sound pressure waves.',
      'Requires circular breathing technique allowing the artist to sustain melodic phrases for minutes without pausing.'
    ],
    audioGuideScript: 'In Indian cultural consciousness, no wedding or temple sunrise is complete without the piercing, sweet sound of the Shehnai. Listen as its delicate reeds mimic the human crying and singing voice with sublime vocal inflections.',
    keyFacts: [
      { label: 'Cultural Status', value: 'National Mangal Vadya (Auspicious Instrument)' },
      { label: 'Legendary Maestro', value: 'Bharat Ratna Ustad Bismillah Khan' },
      { label: 'Reed Material', value: 'River Pala Reeds' },
      { label: 'Breathing Art', value: 'Circular Breathing Mastery' }
    ],
    tags: ['Shehnai', 'Varanasi', 'Bismillah Khan', 'Wind Instrument', 'Auspicious', 'Ganga']
  },

  // ==========================================
  // 4. TRADITIONAL TEXTILES & CLOTHING (पारंपरिक वेशभूषा व वस्त्र)
  // ==========================================
  {
    id: 'banarasi-silk-saree',
    title: 'Banarasi Pure Zari Silk Saree',
    hindiTitle: 'बनारसी शुद्ध ज़री रेशम साड़ी',
    category: 'clothing',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'varanasi',
    districtName: 'Varanasi (Kashi)',
    era: 'Mughal Imperial & Ancient Kashi Silk Legacy',
    period: 'Rigvedic Mention; Perfected in 16th Century CE',
    dynastyOrTradition: 'Varanasi Handloom Weavers Guild (Ansari Master Weavers)',
    architecturalStyleOrMedium: 'Pure Mulberry Katan Silk Hand-Woven with Real Gold & Silver Zari Brocade',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'A regal crimson Banarasi silk saree with heavy gold zari brocade floral jaal and grand pallu',
    imageSource: 'Wikimedia Commons / Ministry of Textiles, Govt of India',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'Among the finest handloom textiles in the world, Banarasi sarees are legendary for their heavy gold and silver brocade, fine pure silk, and intricate Mughal-inspired motifs like paisley, bel, and jhallar.',
    historicalContext: 'Silk weaving in Varanasi was recorded in Buddhist scriptures describing the burial shroud of Gautam Buddha. Under Mughal Emperor Akbar, Persian weavers migrated to Varanasi and blended Persian floral arabesques with ancient Indian iconography.',
    architecturalHighlights: [
      'Authentic Zari threads created by wrapping electroplated silver and gold wires around silk yarn cores.',
      'Techniques include Kadhwa (engraved weaving where each motif is woven individually by hand) and Fekwa.',
      'Signature motifs: Kalga and Bel (creepers), Shikargah (hunting scenes), and Chandbuta (moon-like circular medallions).',
      'A single bridal masterwork saree can require two to six months of painstaking handloom labor by two master weavers.'
    ],
    audioGuideScript: 'Step into the narrow lanes of Madanpura and Chowk in Varanasi, where the rhythmic clatter of pit looms has echoed for centuries. A genuine Banarasi saree is woven so densely with metallic zari that it can stand upright on its own weight and becomes a family heirloom passed down through generations.',
    keyFacts: [
      { label: 'GI Tag', value: 'Banaras Brocades and Sarees (GI Registered 2009)' },
      { label: 'Silk Grade', value: 'Pure Katan Mulberry Silk' },
      { label: 'Weaving Mechanism', value: 'Traditional Jacquard Pit Loom' },
      { label: 'Origin', value: 'Varanasi, Uttar Pradesh' }
    ],
    tags: ['Banarasi', 'Silk', 'Zari', 'Varanasi', 'GI Tag', 'Handloom', 'Brocade']
  },
  {
    id: 'kanjeevaram-silk',
    title: 'Kanjeevaram (Kanchipuram) Silk Saree',
    hindiTitle: 'कांचीपुरम पट्टू (कांचीवरम रेशम साड़ी)',
    category: 'clothing',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'kanchipuram',
    districtName: 'Kanchipuram',
    era: 'Vijayanagara & Chola Weaving Guilds',
    period: 'Over 400 Years of Standardized Heritage',
    dynastyOrTradition: 'Saligar & Devanga Master Weaving Communities',
    architecturalStyleOrMedium: 'Three-Ply Heavyweight Mulberry Silk Interlocked with Korvai Temple Borders',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Madurai_Meenakshi_Amman_Temple_Gopuram.jpg/1280px-Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    imageAlt: 'A lustrous emerald and ruby Kanjeevaram silk saree featuring interlocking Korvai temple borders',
    imageSource: 'Wikimedia Commons / Handloom Export Promotion Council',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Madurai_Meenakshi_Amman_Temple_Gopuram.jpg',
    curatorSummary: 'The quintessential South Indian bridal silk, famed for its heavyweight three-ply mulberry thread structure, contrasting temple spire borders, and solid gold-coated silver zari woven using the demanding Korvai interlocking technique.',
    historicalContext: 'The weavers of Kanchipuram trace their lineage to Sage Markandeya, the master weaver of the Gods. Immigrant master weavers from the Vijayanagara empire settled in the temple city of Kanchi, drawing inspiration from granite temple carvings.',
    architecturalHighlights: [
      'The Korvai weaving technique: The border and pallu are woven separately on different shuttles and interlocked with the body so tightly that even if the saree tears, the border will not detach.',
      'Three-ply twisted mulberry silk threads (murukku pattu) imparting unmatched structural weight and durability.',
      'Temple spires (Rekku) along borders, Yali mythological beasts, Mayil (peacock), and Rudraksha beads motifs.',
      'Authentic silver-gilt zari imported from Surat tested for gold purity.'
    ],
    audioGuideScript: 'Notice the crisp rustle of Kanjeevaram silk. In South Indian temple culture, Kanchipuram sarees are revered not just as clothing, but as sanctified garments. The zig-zag temple borders emulate the towering granite gopurams of Tamil Nadu.',
    keyFacts: [
      { label: 'GI Tag', value: 'Kancheepuram Silk (First GI product of Tamil Nadu, 2005)' },
      { label: 'Signature Technique', value: 'Korvai Interlocking Weave & Petni' },
      { label: 'Thread Density', value: 'Three-Ply Pure Mulberry Silk' },
      { label: 'Temple Spire Border', value: 'Rekku Gopuram Border' }
    ],
    tags: ['Kanjeevaram', 'Silk', 'Kanchipuram', 'GI Tag', 'Korvai', 'Tamil Nadu']
  },
  {
    id: 'pashmina-shawl',
    title: 'Kashmiri Pashmina & Kani Shawl',
    hindiTitle: 'कश्मीरी पश्मीना एवं कानी शॉल',
    category: 'clothing',
    stateId: 'jammu-kashmir',
    stateName: 'Jammu & Kashmir',
    districtId: 'srinagar',
    districtName: 'Srinagar',
    era: 'Sultanate & Mughal Court Royalty',
    period: '15th Century (Sultan Zain-ul-Abidin) to Present',
    dynastyOrTradition: 'Changpa Nomadic Herders & Srinagar Master Artisans (Rafugars)',
    architecturalStyleOrMedium: 'Hand-Spun Changthangi Mountain Goat Underfleece (Capra Hircus) Woven with Kani Wooden Needles',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Martand_Sun_Temple_Ruins.jpg/1280px-Martand_Sun_Temple_Ruins.jpg',
    imageAlt: 'An exquisitely woven Kashmiri Kani Pashmina shawl displaying delicate floral paisley patterns',
    imageSource: 'Wikimedia Commons / Ministry of Textiles',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Martand_Sun_Temple_Ruins.jpg',
    curatorSummary: 'Celebrated as the softest and warmest luxury textile on the planet, crafted from the microscopic underfleece shed by mountain goats living above 14,000 feet in Ladakh, spun by hand on traditional charkhas.',
    historicalContext: 'Sultan Zain-ul-Abidin of Kashmir invited master weavers from Central Asia to settle in the valley. Emperor Akbar was so enamored by Kashmiri shawls that he designated them royal garments, giving them the nickname "Parm-Narm" (supremely soft).',
    architecturalHighlights: [
      'Fiber fineness: 12 to 15 microns in diameter (one-sixth the thickness of human hair), too delicate for mechanical power looms.',
      'Kani technique: Woven using eyeless wooden bobbins (kanis) following a coded pattern sheet called "Taleem", akin to musical notation.',
      'So light and supple that a genuine full-sized two-meter shawl can be pulled cleanly through a woman’s finger ring (the famous Ring Test).',
      'Intricate sozni needle embroidery or all-over Jamawar floral tapestry.'
    ],
    audioGuideScript: 'High in the windswept Changthang plateau of Ladakh, temperatures drop to minus forty degrees Celsius. To survive, the Changthangi goat grows an insulating undercoat of ethereal lightness. In Srinagar, master spinners and weavers transform this fleece into Pashmina, a treasure that once captivated the royal courts of Europe, including Empress Joséphine of France.',
    keyFacts: [
      { label: 'GI Tag', value: 'Kashmir Pashmina & Kani Shawl (Registered GI)' },
      { label: 'Fiber Diameter', value: '12 – 15 Microns (Supreme Softness)' },
      { label: 'Legendary Test', value: 'Passes through a small finger ring' },
      { label: 'Weaving Needles', value: 'Kani Wooden Spools' }
    ],
    tags: ['Pashmina', 'Kashmir', 'GI Tag', 'Shawl', 'Srinagar', 'Handloom', 'Kani']
  },
  {
    id: 'phulkari-embroidery',
    title: 'Punjab Phulkari Needlework',
    hindiTitle: 'पंजाब की फुलकारी (फूलों की कसीदाकारी)',
    category: 'clothing',
    stateId: 'punjab',
    stateName: 'Punjab',
    districtId: 'amritsar',
    districtName: 'Amritsar',
    era: 'Heer Ranjha Medieval Folk Lore',
    period: '15th Century CE – Present',
    dynastyOrTradition: 'Punjabi Village Matriarchs & Folk Heritage',
    architecturalStyleOrMedium: 'Untwisted Bright Pat Silk Floss Embroidered on Coarse Khaddar Homespun Cotton',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amritsar_02.jpg/1280px-The_Golden_Temple_of_Amritsar_02.jpg',
    imageAlt: 'Vibrant geometric Phulkari embroidery on deep red khaddar cloth displaying golden yellow silk threads',
    imageSource: 'Wikimedia Commons / Punjab Heritage Commission',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:The_Golden_Temple_of_Amritsar_02.jpg',
    curatorSummary: 'Literally meaning "flower craft", Phulkari is the soul of Punjabi textile heritage. Mother and grandmothers historically embroidered these vibrant drapes using untwisted silk floss from the reverse side of coarse handspun khaddar.',
    historicalContext: 'Mentioned in Waris Shah’s epic poem "Heer Ranjha" describing Heer’s trousseau. Historically, when a girl was born in a Punjabi household, her grandmother would begin embroidering a "Bagh" (dense garden of silk stitches) for her future wedding day.',
    architecturalHighlights: [
      'Darning stitch executed exclusively from the wrong side of the cloth by counting threads without any pre-drawn stencils.',
      'Brilliant contrasting palette: Golden yellow, hot magenta, fiery orange, and grass green pat silk against rustic indigo, brown, or red khaddar.',
      'Varieties: "Bagh" (where embroidery covers 100% of the base fabric), "Chope" (gifted by maternal grandmother), and "Sainchi".',
      'Geometric symmetry reflecting fields of mustard flowers and Punjab’s agrarian abundance.'
    ],
    audioGuideScript: 'Touch the glossy surface of a Phulkari dupatta. Notice how the silk floss catches the light, creating shimmering geometric facets that shift as you move. By embroidering from the backside of the cloth, Punjabi women achieved flawless geometric precision purely by counting warp and weft threads.',
    keyFacts: [
      { label: 'GI Tag', value: 'Phulkari of Punjab, Haryana & Rajasthan' },
      { label: 'Embroidery Yarn', value: 'Pat (Untwisted Pure Silk Floss)' },
      { label: 'Base Fabric', value: 'Hand-Spun Rough Khaddar' },
      { label: 'Master Variant', value: 'Bagh (Entire surface covered with silk)' }
    ],
    tags: ['Phulkari', 'Punjab', 'Embroidery', 'GI Tag', 'Amritsar', 'Khaddar', 'Folk']
  },

  // ==========================================
  // 5. CULINARY HERITAGE (पारंपरिक व्यंजन व पाककला)
  // ==========================================
  {
    id: 'awadhi-dum-biryani',
    title: 'Awadhi Dum Pukht Culinary Heritage',
    hindiTitle: 'अवधी दम पुख्त एवं लखनवी बिरयानी',
    category: 'food',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'lucknow',
    districtName: 'Lucknow',
    era: 'Nawabs of Awadh',
    period: '18th Century CE (Nawab Asaf-ud-Daula)',
    dynastyOrTradition: 'Bawarchis and Rakabdars of Lucknow Royal Courts',
    architecturalStyleOrMedium: 'Slow-Cooking in Dough-Sealed Heavy Copper Handi over Smoldering Charcoal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'A fragrant steaming copper handi of Awadhi Dum Biryani infused with saffron and whole aromatic spices',
    imageSource: 'Wikimedia Commons / Ministry of Tourism',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'The crown jewel of North Indian royal gastronomy. "Dum Pukht" translates literally to "choking off the steam" — an ancient slow-cooking science that traps volatile aromas inside a sealed earthen or copper vessel.',
    historicalContext: 'During the severe 1784 famine in Awadh, Nawab Asaf-ud-Daula initiated the construction of the Bara Imambara to provide work for the hungry. To feed tens of thousands of workers continuously, massive cauldrons of meat and rice were kept simmering on low heat, birthing the refined Awadhi Dum technique.',
    architecturalHighlights: [
      'Vessel sealing: The lid is sealed tightly with wheat dough (purdah) to prevent any vapor or aroma from escaping.',
      'Heat application: Smoldering charcoal is placed both beneath the heavy bottom and on top of the sealed flat lid to ensure even radiant heat.',
      'Delicate spice bouquet: Unlike fiery preparations, Awadhi cuisine emphasizes subtle aromatics — star anise, green cardamom, mace, ittar (kewra essence), and saffron milk.',
      'Pakki Biryani method: Meat and aged long-grain Basmati rice are partially cooked separately before layered assembly.'
    ],
    audioGuideScript: 'When the dough seal of an Awadhi handi is sliced open with a silver knife at the dinner table, an intoxicating wave of saffron, rose essence, and cardamom vapors billows forth. In Lucknow, cooking is not merely preparing food; it is an art of supreme courtly hospitality known as Mehmaan-Nawazi.',
    keyFacts: [
      { label: 'Cooking Principle', value: 'Dum Pukht (Hermetically Sealed Steam)' },
      { label: 'Origin Patron', value: 'Nawab Asaf-ud-Daula (c. 1784)' },
      { label: 'Key Aromatics', value: 'Kashmir Saffron, Kewra Water, Javitri (Mace)' },
      { label: 'Culinary Capital', value: 'Lucknow, Uttar Pradesh' }
    ],
    tags: ['Awadhi', 'Biryani', 'Lucknow', 'Culinary', 'Dum Pukht', 'Nawabi Heritage']
  },
  {
    id: 'kerala-sadya-feast',
    title: 'Kerala Sadya & Payasam Tradition',
    hindiTitle: 'पारंपरिक केरल सद्या (केले के पत्ते पर भोज)',
    category: 'food',
    stateId: 'kerala',
    stateName: 'Kerala',
    districtId: 'thrissur',
    districtName: 'Thrissur & Kochi',
    era: 'Ayurvedic Principles & Onam Festival Heritage',
    period: 'Millennia-old Vedic and Agrarian Tradition',
    dynastyOrTradition: 'Traditional Namboodiri and Kerala Culinary Guilds',
    architecturalStyleOrMedium: 'Multi-Course Pure Vegetarian Banquet Served on Fresh Plantain Banana Leaf',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg/1280px-Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg',
    imageAlt: 'A grand Kerala Onam Sadya served on a green banana leaf featuring 26 traditional vegetarian dishes and payasam',
    imageSource: 'Wikimedia Commons / Kerala Tourism',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Padmanabhaswamy_Temple,_Thiruvananthapuram.jpg',
    curatorSummary: 'A grand feast of 24 to 28 distinct vegetarian preparations served on a freshly cut plantain banana leaf, embodying the Ayurvedic principle of Shad-Rasa (six fundamental tastes: sweet, sour, salty, bitter, pungent, and astringent).',
    historicalContext: 'Central to the harvest festival of Onam, which celebrates the annual return of the mythical righteous King Mahabali. Served cross-legged on the floor, it represents universal equality among all members of society.',
    architecturalHighlights: [
      'Strict banana leaf etiquette: The leaf is placed with its tapering tip pointing to the left of the seated guest.',
      'Systematic placement: Pickles, ginger curry (Inji Puli), banana chips (Upperi), and salt placed on the top half; rice and hearty gravies on the lower half.',
      'Key culinary masterpieces: Avial (vegetables in coconut-cumin paste), Olan (ash gourd and cowpeas in coconut milk), and Thoran.',
      'Grand finale: Multi-layered sweet Payasam — Ada Pradhaman made with steamed rice flakes, jaggery, and coconut milk.'
    ],
    audioGuideScript: 'Observe the geometry of a Kerala Sadya. Every single item has a scientifically designated location on the banana leaf, calculated to stimulate digestive enzymes sequentially. The feast concludes with creamy jaggery Payasam and digestive spiced buttermilk (Sambharam).',
    keyFacts: [
      { label: 'Festival Centerpiece', value: 'Thiruvonam Harvest Festival' },
      { label: 'Dishes Count', value: 'Up to 26 to 30 unique dishes' },
      { label: 'Serving Platter', value: 'Freshly cut Plantain Banana Leaf' },
      { label: 'Culinary Philosophy', value: 'Ayurvedic Shad-Rasa (Six Tastes)' }
    ],
    tags: ['Sadya', 'Kerala', 'Onam', 'Payasam', 'Ayurveda', 'Banana Leaf']
  },
  {
    id: 'chhena-poda-odisha',
    title: 'Odisha Chhena Poda Confectionery',
    hindiTitle: 'ओडिशा का छेना पोड़ (सिका हुआ पनीर मिष्ठान)',
    category: 'food',
    stateId: 'odisha',
    stateName: 'Odisha',
    districtId: 'puri',
    districtName: 'Puri & Nayagarh',
    era: 'Jagannath Mahaprasad Heritage',
    period: 'Ancient Temple Roots, Popularized mid-20th Century',
    dynastyOrTradition: 'Lord Jagannath Chhappan Bhog Tradition & Nayagarh Halwais',
    architecturalStyleOrMedium: 'Caramelized Roasted Fresh Cottage Cheese Baked Inside Sal Tree Leaves',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1280px-Konarka_Temple.jpg',
    imageAlt: 'Slices of golden caramelized baked Chhena Poda with dark crust and cardamom roasted cottage cheese',
    imageSource: 'Wikimedia Commons / Odisha Tourism',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Konarka_Temple.jpg',
    curatorSummary: 'Literally translating to "Burnt Cottage Cheese", Chhena Poda is the world’s oldest indigenous baked cheesecake, made by kneading fresh soft cottage cheese with sugar, cardamom, and cashews, then baking it slowly wrapped in Sal leaves.',
    historicalContext: 'Odisha is the ancient cradle of Indian milk confectionery (Chhena-based sweets), having supplied Chhena sweets to the 12th-century Puri Jagannath Temple for centuries as part of the Chhappan Bhog (56 sacred offerings).',
    architecturalHighlights: [
      'Fresh cow’s milk chhena kneaded vigorously by hand until soft, combined with semolina, sugar, ghee, and green cardamom.',
      'Wrapped in fragrant green Sal (Shorea robusta) leaves and baked overnight over extinguished charcoal embers.',
      'The exterior sugar undergoes intense Maillard reaction, forming a thick, crunchy caramelized dark-brown crust while the interior remains moist.',
      'Naturally smoked aroma infused from the charred Sal tree wrapping.'
    ],
    audioGuideScript: 'Long before Western cheesecakes achieved global fame, sweet-makers in Odisha perfected the art of baking caramelized cheese over smoldering sal charcoal. Take a bite and savor the contrast between the dark, slightly bitter caramelized crust and the soft, cardamom-scented cottage cheese center.',
    keyFacts: [
      { label: 'Birthplace', value: 'Nayagarh / Puri, Odisha' },
      { label: 'Primary Ingredient', value: 'Fresh Cow Milk Chhena (Paneer Curd)' },
      { label: 'Baking Envelope', value: 'Sal Tree Leaves (Shorea robusta)' },
      { label: 'Temple Connection', value: 'Jagannath Temple Mahaprasad' }
    ],
    tags: ['Chhena Poda', 'Odisha', 'Dessert', 'Puri', 'Baking', 'Mahaprasad']
  },

  // ==========================================
  // 6. HANDICRAFTS & ARTISANSHIP (शिल्पकला व हस्तशिल्प)
  // ==========================================
  {
    id: 'bidriware-craft',
    title: 'Bidriware Silver Inlay Metalcraft',
    hindiTitle: 'बीदरी क्राफ्ट (जस्ते पर चांदी की जड़ाई)',
    category: 'craft',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    districtId: 'bidar',
    districtName: 'Bidar',
    era: 'Bahmani Sultanate of the Deccan',
    period: '14th Century CE',
    dynastyOrTradition: 'Bahmani Sultans & Persian Craftsman Guilds',
    architecturalStyleOrMedium: 'Cast Zinc-Copper Alloy Inlaid with Pure Silver Wire and Oxidized with Soil of Bidar Fort',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vittala_Temple_Stone_Chariot_Hampi_India.jpg/1280px-Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    imageAlt: 'A lustrous matte-black Bidriware vase inlaid with dazzling silver floral vines and geometric motifs',
    imageSource: 'Wikimedia Commons / Ministry of Textiles',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    curatorSummary: 'A world-famous metal handicraft originating in Bidar, Karnataka. Pure silver wire is inlaid into blackened zinc and copper alloys, oxidized using mineral-rich centuries-old soil harvested exclusively from the ruins of Bidar Fort.',
    historicalContext: 'Brought to the Deccan under the patronages of Sultan Ahmad Shah Al-Wali Bahmani in the 14th century, who invited Iranian master metallurgist Abdullah bin Kaiser to teach the court artisans damascene inlay techniques.',
    architecturalHighlights: [
      'The base metal alloy is 16 parts zinc to 1 part copper, cast using lost-wax or sand-casting molds.',
      'Tarkashi (wire inlay) or Taihnishan (sheet inlay) where artisans hammer pure 99.9% silver into hand-chiselled grooves.',
      'The magical chemical blackening: A boiling paste of ammonium chloride, salt, and special soil from Bidar Fort ruins turns the zinc velvety black while leaving pure silver glittering white.',
      'Final polishing with groundnut oil gives Bidriware its lifelong deep black satin luster.'
    ],
    audioGuideScript: 'Look at the striking contrast between midnight-black zinc and gleaming pure silver. What makes Bidriware truly mystical is the blackening process: artisans use soil dug from centuries-old sheltered ruins inside Bidar Fort, where no sunlight or rain has fallen for decades, containing unique nitrates that blacken zinc instantly without reacting to silver.',
    keyFacts: [
      { label: 'GI Tag', value: 'Bidriware of Karnataka (Registered GI 2006)' },
      { label: 'Noble Metal', value: '99.9% Pure Silver Sheet & Wire' },
      { label: 'Blackening Agent', value: 'Ancient Alkaline Soil from Bidar Fort' },
      { label: 'Major Inlay Styles', value: 'Tarkashi (Wire) & Taihnishan (Sheet)' }
    ],
    tags: ['Bidriware', 'Bidar', 'Silver Inlay', 'Karnataka', 'GI Tag', 'Handicrafts', 'Metalwork']
  },
  {
    id: 'channapatna-toys',
    title: 'Channapatna Wooden Lacquerware Toys',
    hindiTitle: 'चन्नपट्टण के लकड़ी के खिलौने',
    category: 'craft',
    stateId: 'karnataka',
    stateName: 'Karnataka',
    districtId: 'ramanagara',
    districtName: 'Ramanagara (Channapatna)',
    era: 'Kingdom of Mysore',
    period: 'Late 18th Century (Tipu Sultan)',
    dynastyOrTradition: 'Wodeyars of Mysore & Persian Toy Master Bawa Miyan',
    architecturalStyleOrMedium: 'Turned Ivory Wood (Wrightia Tinctoria) Coated with Non-Toxic Natural Vegetable Dyes and Lac',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vittala_Temple_Stone_Chariot_Hampi_India.jpg/1280px-Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    imageAlt: 'Glossy colorful non-toxic Channapatna wooden rocking horses and nesting dolls hand-turned on lathes',
    imageSource: 'Wikimedia Commons / Crafts Council of India',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Vittala_Temple_Stone_Chariot_Hampi_India.jpg',
    curatorSummary: 'Known as the "Gombegala Ooru" (Toy Town of Karnataka), Channapatna produces 100% natural, non-toxic wooden toys turned on lathes from soft Aale Mara wood and polished to a mirror shine with natural lac and vegetable dyes.',
    historicalContext: 'Ruler of Mysore Tipu Sultan received a lacquered toy from Persia and was so impressed that he invited Persian craftsmen to train local woodturners in Channapatna. Later, master artisan Bawa Miyan modernized lathe production.',
    architecturalHighlights: [
      'Wood selection: Exclusively Wrightia tinctoria (locally called Hale Mara or Ivory Wood), a soft, fine-grained wood that does not splinter.',
      'Natural food-grade coloring: Yellow from turmeric, red from vermillion and kumkum, blue from indigo, orange from kumkum-turmeric blends.',
      'Polishing with screw pine (Pandanus) leaves on the spinning lathe creates friction that fuses the shellac into an impervious, glassy, baby-safe coat.',
      'Completely free of sharp edges, nails, or toxic chemical paints.'
    ],
    audioGuideScript: 'Watch a master craftsman in Channapatna hold a dry resin stick against a spinning wooden top. The high rotational friction melts the vegetable-dyed lac onto the wood instantly. Then, with a dry screw pine leaf pressed against the spinning surface, the toy buffs to a glassy polish within seconds.',
    keyFacts: [
      { label: 'GI Tag', value: 'Channapatna Toys & Dolls (First GI of Karnataka)' },
      { label: 'Safety Profile', value: '100% Natural, Lead-Free & Child-Safe' },
      { label: 'Wood Source', value: 'Ivory Wood (Wrightia Tinctoria)' },
      { label: 'Origin Patron', value: 'Tipu Sultan of Mysore' }
    ],
    tags: ['Channapatna', 'Toys', 'Woodcraft', 'Karnataka', 'GI Tag', 'Non-Toxic', 'Eco-Friendly']
  },
  {
    id: 'jaipur-blue-pottery',
    title: 'Jaipur Glazed Blue Pottery',
    hindiTitle: 'जयपुर ब्लू पॉटरी (नीले मृद्भांड)',
    category: 'craft',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    districtId: 'jaipur',
    districtName: 'Jaipur',
    era: 'Kachhwaha Rajput Dynasty',
    period: '19th Century (Maharaja Sawai Ram Singh II)',
    dynastyOrTradition: 'Kripal Kumbh & Jaipur Royal Workshop Legacy',
    architecturalStyleOrMedium: 'No-Clay Dough made of Quartz Stone Powder, Cullet Glass, and Copper-Cobalt Glaze',
    giTag: true,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hawa_Mahal_2011.jpg/1280px-Hawa_Mahal_2011.jpg',
    imageAlt: 'An ornate Jaipur blue pottery vase with Persian floral motifs and vibrant cobalt blue and turquoise glaze',
    imageSource: 'Wikimedia Commons / Rajasthan Tourism',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_2011.jpg',
    curatorSummary: 'A unique ceramic art tradition in India that uses zero clay. The pottery dough is composed entirely of ground quartz stone, Fuller’s earth, glass, and natural gum, fired once at low temperatures to produce radiant turquoise and cobalt glazes.',
    historicalContext: 'Turko-Persian glazed pottery was revived and patronized in Jaipur by Maharaja Sawai Ram Singh II in the mid-19th century, and later revolutionized into global modern studio ceramics by Padma Shri Kripal Singh Shekhawat.',
    architecturalHighlights: [
      'Zero clay dough mixture: Crushed quartz stone powder, cullet (recycled broken glass), Fuller’s earth (Multani mitti), and Katira Gond gum.',
      'Signature vibrant blues: Cobalt oxide produces deep royal blue; copper oxide produces luminous Persian turquoise.',
      'Delicate hand-painted brushwork portraying Arabesque floral sprays, flying birds, and Mughal floral vine borders.',
      'Single firing technique in wood-fired kilns, making every finished piece impermeable and durable.'
    ],
    audioGuideScript: 'Unlike traditional terracotta pottery, if you tap a piece of Jaipur Blue Pottery with your fingernail, it rings with a clear, porcelain-like musical resonance. Because it contains no clay, it will never crack or swell from moisture exposure.',
    keyFacts: [
      { label: 'GI Tag', value: 'Blue Pottery of Jaipur (Registered GI)' },
      { label: 'Key Innovation', value: '100% Clay-Free Quartz Powder Base' },
      { label: 'Distinctive Colors', value: 'Cobalt Blue & Copper Turquoise' },
      { label: 'Revival Master', value: 'Kripal Singh Shekhawat' }
    ],
    tags: ['Blue Pottery', 'Jaipur', 'Ceramics', 'GI Tag', 'Rajasthan', 'Quartz', 'Craft']
  },

  // ==========================================
  // 7. PERFORMING ARTS & DANCES (शास्त्रीय व लोक नृत्य/नाट्य)
  // ==========================================
  {
    id: 'kathakali-dance-drama',
    title: 'Kathakali Classical Dance-Drama',
    hindiTitle: 'कथकली (शास्त्रीय नृत्य-नाट्य, केरल)',
    category: 'performing_art',
    stateId: 'kerala',
    stateName: 'Kerala',
    districtId: 'thrissur',
    districtName: 'Thrissur',
    era: 'Ramanattam & Kottarakkara Heritage',
    period: '17th Century CE – Present',
    dynastyOrTradition: 'Kerala Kalamandalam & Temple Sanskrit Theatre',
    architecturalStyleOrMedium: 'Elaborate Facial Aharya (Pachha, Kathi, Minukku), Chutti Beard, and Mudra Gestures',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg/1280px-Padmanabhaswamy_Temple%2C_Thiruvananthapuram.jpg',
    imageAlt: 'A Kathakali performer in majestic green Pachha face makeup and flared skirt enacting an epic Mahabharata scene',
    imageSource: 'Wikimedia Commons / Kerala Kalamandalam Archives',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Padmanabhaswamy_Temple,_Thiruvananthapuram.jpg',
    curatorSummary: 'A mesmerizing classical dance-drama from Kerala known for its colossal headgear (Kireetam), flared skirts, four-hour ceremonial makeup rituals using crushed mineral pigments, and astonishing eye and facial muscle control.',
    historicalContext: 'Evolving from ancient temple ritual arts such as Krishnanattam and Koodiyattam, Kathakali was codified under the patronage of the Raja of Kottarakkara to present the grand moral conflicts of the Mahabharata and Ramayana.',
    architecturalHighlights: [
      'Character classification through makeup: Pachha (green, noble gods and heroes like Rama and Arjuna); Kathi (knife, arrogant royalty like Ravana); Thadi (bearded, demonic or primal); Minukku (soft amber, sages and women).',
      'The Chutti: A white ridged paper-and-rice-paste frame sculpted onto the actor’s jawline to catch oil lamp light.',
      'The eyes are reddened using a tiny Chunda poovu seed placed beneath the lower eyelid, accentuating eye movements.',
      'Accompanied by powerful Chenda and Maddalam percussion drums and dramatic vocal chanting in Sopana Sangeetham style.'
    ],
    audioGuideScript: 'In a traditional Kathakali performance, an oil lamp (Kali Vilakku) flickers in the dark temple courtyard. The actor utters not a single spoken word; every nuance of grief, fury, courage, and love is conveyed through 24 root hand mudras and the astonishing flickers of the eyes.',
    keyFacts: [
      { label: 'Origin', value: 'Kerala, South India' },
      { label: 'Canonical Text', value: 'Bharata Muni’s Natya Shastra' },
      { label: 'Major Center', value: 'Kerala Kalamandalam, Cheruthuruthy (Thrissur)' },
      { label: 'Hero Makeup', value: 'Pachha (Noble Green)' }
    ],
    tags: ['Kathakali', 'Kerala', 'Classical Dance', 'Natya Shastra', 'Thrissur', 'Mudras']
  },
  {
    id: 'bharatanatyam-dance',
    title: 'Bharatanatyam Classical Dance',
    hindiTitle: 'भरतनाट्यम (शास्त्रीय नृत्य, तंजावुर)',
    category: 'performing_art',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    districtId: 'thanjavur',
    districtName: 'Thanjavur & Chennai',
    era: 'Ancient Temple Sadir & Chola Courts',
    period: 'Codified 19th Century (Thanjavur Quartet)',
    dynastyOrTradition: 'Thanjavur Quartet (Chinnayya, Ponnayya, Sivanandam, Vadivelu) & Kalakshetra',
    architecturalStyleOrMedium: 'Aramandi Half-Sitting Posture, Complex Jathis, and Temple Silk Pleated Costume',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageAlt: 'A Bharatanatyam dancer frozen in crisp Aramandi pose holding Mayura hand mudra with pleated silk fan costume',
    imageSource: 'Wikimedia Commons / Sangeet Natak Akademi',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    curatorSummary: 'The oldest classical dance tradition of India, originating in the Hindu temples of Tamil Nadu, renowned for its crisp geometric body lines, dynamic footwork (Nritta), and poetic storytelling through expressions (Abhinaya).',
    historicalContext: 'Originally known as Sadir Natyam and performed by Devadasis in the temples of Chola kings. In the early 19th century, the celebrated Thanjavur Quartet formalized its concert margam (Alarippu to Tillana), and in the 1930s Rukmini Devi Arundale founded Kalakshetra to share it with the world.',
    architecturalHighlights: [
      'Aramandi (Ayathmandalam): The fundamental half-sitting posture with knees bent outward, forming a grounded triangular base like a temple gopuram.',
      'Pleated fan silk costume that spreads like peacock feathers during sit-down movements.',
      'Ankle bells (Salangai / Ghungroos) that sync with the complex rhythmic syllables recited by the Nattuvanar.',
      'Exquisite temple jewelry: Head ornaments representing the Sun and Moon, shimmering waist belt (Oddiyanam), and jhumkas.'
    ],
    audioGuideScript: 'Observe the geometry of Bharatanatyam: every line of the dancer’s arms, torso, and legs traces clean triangles and diamond angles in space. Notice how the dancer stamps the heel to beat out intricate mathematical counter-rhythms against the Carnatic violin and mridangam.',
    keyFacts: [
      { label: 'Oldest Style', value: 'Sadir Natyam' },
      { label: 'Formalized By', value: 'Thanjavur Quartet (Early 19th Century)' },
      { label: 'Core Posture', value: 'Aramandi (Bent Knee Triangle)' },
      { label: 'Concert Repertoire', value: 'Margam (Alarippu, Jatiswaram, Varnam, Tillana)' }
    ],
    tags: ['Bharatanatyam', 'Tamil Nadu', 'Classical Dance', 'Thanjavur', 'Kalakshetra', 'Natya Shastra']
  },
  {
    id: 'kathak-dance',
    title: 'Kathak Classical Dance',
    hindiTitle: 'कथक (शास्त्रीय नृत्य, लखनऊ व जयपुर घराना)',
    category: 'performing_art',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    districtId: 'lucknow',
    districtName: 'Lucknow',
    era: 'Temple Storytellers to Royal Court Splendor',
    period: '16th – 19th Century (Nawab Wajid Ali Shah)',
    dynastyOrTradition: 'Lucknow Kalka-Bindadin Gharana & Jaipur Gharana',
    architecturalStyleOrMedium: 'Tatkar Lightning Footwork, Chakkars (Pirouettes), and Expressive Bhav',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'A Kathak maestro mid-spin with flowing Anarkali costume and bell-laden feet executing chakkars',
    imageSource: 'Wikimedia Commons / Ministry of Culture',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    curatorSummary: 'Deriving its name from "Katha Kahe So Kathak Kahave" (he who tells a story is a Kathak), this northern classical dance is celebrated for its dizzying multi-turn spins (Chakkars) and lightning footwork (Tatkar) matching the tabla.',
    historicalContext: 'Originating among nomadic bardic storytellers in ancient temples of Ayodhya and Mathura, Kathak entered the royal courts of the Mughal emperors and the Nawabs of Awadh, where Nawab Wajid Ali Shah patronized the legendary Lucknow Gharana.',
    architecturalHighlights: [
      'Tatkar: Virtuosic footwork executed with upright posture where dancers isolate individual bells among 100 to 200 brass ghungroos on each ankle.',
      'Chakkars: Rapid, continuous pirouette spins executed effortlessly on the heel and ball of the foot, stopping on a dime on the "Sum" (first beat).',
      'Abhinaya and Thumri: Subtle facial expressions conveying emotional poetry, especially songs composed by Maharaj Bindadin.',
      'Flowing flared Anarkali costume or traditional ghagra-choli that flares into a dramatic circle during spins.'
    ],
    audioGuideScript: 'Listen to the bells around the Kathak dancer’s feet. A master dancer can stamp the ground and make only one solitary brass bell chime out of a cluster of one hundred bells, before bursting into sixteen lightning-fast rotations and freezing instantly with supreme composure.',
    keyFacts: [
      { label: 'Roots', value: 'Ancient Katha (Storytelling) Tradition' },
      { label: 'Major Royal Patron', value: 'Nawab Wajid Ali Shah of Awadh' },
      { label: 'Gharanas', value: 'Lucknow, Jaipur, and Banaras' },
      { label: 'Signature Movement', value: 'Chakkars (Pirouette Spins) & Tatkar Footwork' }
    ],
    tags: ['Kathak', 'Lucknow', 'Classical Dance', 'Gharana', 'Tatkar', 'Awadh']
  }
];

export function getHeritageItemsByCategory(category: string): HeritageItem[] {
  if (!category || category === 'all') return HERITAGE_ITEMS;
  return HERITAGE_ITEMS.filter((item) => item.category === category);
}

export function getHeritageItemsByState(stateId: string): HeritageItem[] {
  return HERITAGE_ITEMS.filter((item) => item.stateId === stateId);
}

export function getHeritageItemsByDistrict(districtId: string): HeritageItem[] {
  return HERITAGE_ITEMS.filter((item) => item.districtId === districtId);
}

export function getHeritageItemById(id: string): HeritageItem | undefined {
  return HERITAGE_ITEMS.find((item) => item.id === id);
}

export function searchHeritageItems(query: string): HeritageItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return HERITAGE_ITEMS;
  return HERITAGE_ITEMS.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.hindiTitle.includes(q) ||
      item.stateName.toLowerCase().includes(q) ||
      item.districtName.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.dynastyOrTradition.toLowerCase().includes(q) ||
      item.curatorSummary.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
  );
}
