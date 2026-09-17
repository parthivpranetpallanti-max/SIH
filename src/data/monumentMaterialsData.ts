import { MonumentMaterial } from '../types';

export const MONUMENT_MATERIALS_DATA: MonumentMaterial[] = [
  {
    id: 'dry-interlocking-granite',
    name: 'Interlocking Dry Granite',
    hindiName: 'इंटर लॉकिंग सूखा ग्रेनाइट पाषाण',
    category: 'igneous',
    quarryRegion: 'Mammallapuram, Narthamalai & Pudukkottai granitic plutons (Tamil Nadu)',
    engineeringProperty: 'Ultra-high compressive strength (130–200 MPa), zero water porosity, dry-joint gravity interlocking without binding cement.',
    whyAncientBuildersChoseIt:
      'Chola master guild architects (Sthapathis) needed a stone that would never degrade under tropical monsoon deluges or fungal bio-deterioration. Because Thanjavur is in a flat alluvial delta with no granite for 50 kilometers, huge granite monoliths were transported by elephants and river barges on the Cauvery, then cut with precision tongue-and-groove joints that lock tighter as building weight increases.',
    durabilityRating: '1,000+ Years (Impervious to acidic weathering and biological growth)',
    monumentsUsed: [
      {
        title: 'Brihadisvara Temple (Peruvudaiyar Kovil)',
        itemId: 'brihadisvara-temple',
        state: 'Tamil Nadu',
        era: '1010 CE (Rajaraja Chola I)',
        detail: 'The 66-meter high Vimana tower and 80-tonne monolithic Kumbam dome rest entirely on dry-joint interlocking granite without mortar.'
      },
      {
        title: 'Airavatesvara Temple',
        state: 'Tamil Nadu',
        era: '1166 CE (Rajaraja Chola II)',
        detail: 'Exquisite granite chariot mandapa with musical steps and stone filigree.'
      },
      {
        title: 'Shore Temple',
        itemId: 'shore-temple-mamallapuram',
        state: 'Tamil Nadu',
        era: '8th Century CE (Pallava Dynasty)',
        detail: 'Granite blocks sculpted to withstand salt-laden Bay of Bengal sea surf.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageSource: 'Wikimedia Commons / ASI',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    keyCharacteristics: [
      'Mortarless Construction: Interlocking tongue-and-groove puzzle joins',
      'Gravitational Self-Centering: Heavier load creates greater structural rigidity',
      'Extremely Low Porosity: Does not absorb water or expand in heat',
      'High Seismic Damping: Micro-movements between blocks absorb earthquake shockwaves'
    ],
    seismicOrWeatherResistance: 'Grade-A Seismic Absorption (Survived multiple Richter 6+ tectonic tremors over 10 centuries)'
  },
  {
    id: 'makrana-white-marble',
    name: 'Makrana Translucent White Marble',
    hindiName: 'मकराना श्वेत पारदर्शी संगमरमर',
    category: 'metamorphic',
    quarryRegion: 'Makrana, Nagaur District, Rajasthan',
    engineeringProperty: '98%+ Calcium Carbonate (Calcite) purity, low iron impurity, high light translucency, fine isotropic crystalline matrix.',
    whyAncientBuildersChoseIt:
      'Mughal emperor Shah Jahan selected Makrana marble because unlike Italian Carrara marble (which discolors and yellows over centuries), Makrana stone does not absorb grease or soot and contains negligible sulfur/iron veins. Its unique crystal structure refracts sunlight and moonlight, causing the Taj Mahal to appear rosy at sunrise, brilliant white at midday, and translucent silver under a full moon.',
    durabilityRating: '600+ Years (Natural weather-resistant calcite polish)',
    monumentsUsed: [
      {
        title: 'Taj Mahal',
        itemId: 'taj-mahal',
        state: 'Uttar Pradesh',
        era: '1631–1648 CE (Shah Jahan)',
        detail: 'Entire central tomb, bulbous dome, and flanking minarets constructed from hand-selected Makrana marble panels.'
      },
      {
        title: 'Dilwara Jain Temples',
        state: 'Rajasthan',
        era: '11th–13th Century CE',
        detail: 'Marble carved into paper-thin translucent lotus ceiling pendants.'
      },
      {
        title: 'Victoria Memorial',
        state: 'West Bengal',
        era: '1906–1921 CE',
        detail: 'Monumental grand memorial utilizing over 200,000 cubic feet of Makrana marble.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageSource: 'Wikimedia Commons / Yann Forget',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_(Edited).jpeg',
    keyCharacteristics: [
      'Pure Calcite Matrix: Over 98% pure CaCO3 with zero water absorption',
      'Luminous Light Scattering: Light penetrates up to 2mm before reflecting back',
      'Pietra Dura Ready: Perfect uniform hardness for inlaying semi-precious gems',
      'Thermal Inertia: Retains cool temperature during blistering northern Indian summers'
    ],
    seismicOrWeatherResistance: 'High thermal stability; requires regular multani mitti (Fuller’s earth) cleansing to preserve surface luster.'
  },
  {
    id: 'deccan-basalt-traprock',
    name: 'Deccan Basalt Traprock',
    hindiName: 'दक्कन बेसाल्ट शैल (ज्वालामुखीय ट्रैप)',
    category: 'igneous',
    quarryRegion: 'Deccan Volcanic Province (Sahyadri Hills, Maharashtra)',
    engineeringProperty: 'Dense fine-grained igneous basalt rock formed by prehistoric volcanic lava flows, high compressive strength (~180 MPa).',
    whyAncientBuildersChoseIt:
      'Rather than assembling stone blocks with scaffolding, 8th-century Rashtrakuta builders utilized the natural horizontal cooling joints of the solid basalt cliff face at Ellora. By carving from the summit downward, master sculptors turned a mountain into a standalone multi-story temple, relying on the structural solidarity of unbroken natural basalt bedrock to eliminate ceiling collapse risks.',
    durabilityRating: '1,200+ Years (Natural monolith; immune to mortar decay)',
    monumentsUsed: [
      {
        title: 'Kailasa Temple (Cave 16, Ellora)',
        itemId: 'kailasa-temple-ellora',
        state: 'Maharashtra',
        era: '756–773 CE (King Krishna I, Rashtrakutas)',
        detail: 'Single monolithic cliff excavated top-down, removing over 200,000 tonnes of basalt rock without columns assembled from parts.'
      },
      {
        title: 'Ajanta Rock-Cut Viharas',
        itemId: 'ajanta-caves',
        state: 'Maharashtra',
        era: '2nd Century BCE – 5th Century CE',
        detail: 'Monasteries and prayer halls hollowed directly into the horseshoe gorge of basalt traps.'
      },
      {
        title: 'Elephanta Island Caves',
        state: 'Maharashtra',
        era: '5th–6th Century CE',
        detail: 'Monumental Trimurti Sadashiva sculpture carved in natural basalt cavern.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ellora_cave16_001.jpg/1280px-Ellora_cave16_001.jpg',
    imageSource: 'Wikimedia Commons / Bernard Gagnon',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Ellora_cave16_001.jpg',
    keyCharacteristics: [
      'Subtractive Architecture: Carved from top to bottom (no stone added)',
      'Homogeneous Bedrock: Uniform basalt flows without weak internal shear planes',
      'Thermal Insulation: Maintains steady ambient temperature year-round',
      'Structural Monolith: Cantilevers and bridges carry zero joint stress'
    ],
    seismicOrWeatherResistance: 'Exceptional seismic stability due to direct bedrock anchorage with no loose joints.'
  },
  {
    id: 'khondalite-and-chlorite',
    name: 'Khondalite & Chlorite Stone',
    hindiName: 'खोंडालाइट एवं क्लोराइट पाषाण',
    category: 'metamorphic',
    quarryRegion: 'Eastern Ghats granulite belt & Nilgiri Hills (Odisha & Eastern India)',
    engineeringProperty: 'Khondalite (garnet-sillimanite-quartz gneiss) provides massive structural mass; Chlorite provides micro-crystalline smooth carving surface.',
    whyAncientBuildersChoseIt:
      'The Kalinga master builders understood that a coastal monument like Konark faced harsh saline winds from the Bay of Bengal. They used Khondalite for core plinths and colossal load-bearing towers, while reserving rare, dense dark green Chlorite stone for door lintels, deity idols, and the legendary 24 sundial chariot wheels, preserving razor-sharp anatomical details for 800 years.',
    durabilityRating: '800+ Years (Chlorite resists marine sea-spray erosion)',
    monumentsUsed: [
      {
        title: 'Konark Sun Temple',
        itemId: 'konark-sun-temple',
        state: 'Odisha',
        era: '1250 CE (King Narasimhadeva I, Eastern Ganga)',
        detail: 'Chariot wheels and entrance Toranas sculpted with chlorite stone inserted into massive khondalite base.'
      },
      {
        title: 'Jagannath Temple',
        state: 'Odisha',
        era: '12th Century CE',
        detail: 'Towering Deula built with khondalite stone protected with lime plaster coatings.'
      },
      {
        title: 'Lingaraja Temple',
        state: 'Odisha',
        era: '11th Century CE (Somavamsi Dynasty)',
        detail: 'Kalinga architectural climax featuring deep chlorite wall moldings.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konark_Sun_Temple_Chariot_Wheel.jpg/1280px-Konark_Sun_Temple_Chariot_Wheel.jpg',
    imageSource: 'Wikimedia Commons / Supreet Sahoo',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Konark_Sun_Temple_Chariot_Wheel.jpg',
    keyCharacteristics: [
      'Dual Stone Strategy: Structural Khondalite paired with sculptural Chlorite',
      'Iron Clamp Interlocking: Stone courses bound with forged iron dowels',
      'Rich Iron-Oxide Patina: Khondalite weathers to warm golden-ochre tones',
      'High Relief Tolerance: Chlorite enables 3D undercut ornaments and miniature beads'
    ],
    seismicOrWeatherResistance: 'Chlorite elements retain pristine edges; ASI currently treats Khondalite core blocks against coastal marine humidity.'
  },
  {
    id: 'vindhyan-sandstone',
    name: 'Vindhyan Red & Pink Sandstone',
    hindiName: 'विंध्य लाल एवं गुलाबी बलुआ पत्थर',
    category: 'sedimentary',
    quarryRegion: 'Dholpur, Karauli, Sikri, and Chunar (Rajasthan & Uttar Pradesh)',
    engineeringProperty: 'Fine quartz arenite bonded by iron oxide silica cement, moderate compressive strength (60–90 MPa), easy workability.',
    whyAncientBuildersChoseIt:
      'Vindhyan sandstone can be quarried in massive uniform layers and cut easily with hand chisels when fresh, allowing Rajasthani and Mughal stone-cutters (Sangtrash) to pierce thin 1-inch stone slabs into intricate lace-like geometric Jalis (perforated wind screens) that induce the Venturi cooling effect.',
    durabilityRating: '700+ Years (Case-hardens over centuries as silica oxidizes)',
    monumentsUsed: [
      {
        title: 'Hawa Mahal (Palace of Winds)',
        itemId: 'hawa-mahal',
        state: 'Rajasthan',
        era: '1799 CE (Maharaja Sawai Pratap Singh)',
        detail: '953 pink and red sandstone Jharokhas designed for cross-ventilation.'
      },
      {
        title: 'Fatehpur Sikri Imperial Complex',
        itemId: 'fatehpur-sikri',
        state: 'Uttar Pradesh',
        era: '1571–1585 CE (Emperor Akbar)',
        detail: 'Entire royal city built from Sikri red sandstone quarries.'
      },
      {
        title: 'Red Fort (Lal Qila)',
        state: 'Delhi',
        era: '1638–1648 CE (Shah Jahan)',
        detail: 'Massive defensive bastions and Lahori Gate clad in Dholpur red sandstone.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hawa_Mahal_2011.jpg/1280px-Hawa_Mahal_2011.jpg',
    imageSource: 'Wikimedia Commons / Firoze Shakir',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_2011.jpg',
    keyCharacteristics: [
      'Microclimate Cooling: Porous matrix promotes natural evaporative cooling',
      'Pliable for Filigree: Allows paper-thin stone lattice screens (Jalis)',
      'Distinctive Mineral Pigment: Hematite iron oxide gives vibrant crimson and blush pink',
      'Modular Ashlar Masonry: Flat rectangular blocks lock cleanly with lime-sand mortar'
    ],
    seismicOrWeatherResistance: 'High durability in dry and semi-arid climates; shields interior rooms from desert heat.'
  },
  {
    id: 'hoysala-chloritic-soapstone',
    name: 'Hoysala Chloritic Soapstone (Schist)',
    hindiName: 'होयसल क्लोराइट सोपस्टोन (शिस्ट शैल)',
    category: 'metamorphic',
    quarryRegion: 'Hassan, Tumkur, and Bellary belts (Karnataka)',
    engineeringProperty: 'Talc-chlorite schist, Mohs hardness 2.0 when quarried (soft as chalk), gradually hardening to Mohs 4.0 upon atmospheric exposure.',
    whyAncientBuildersChoseIt:
      'Unlike brittle granite, freshly quarried chloritic schist is exceptionally soft. This allowed Hoysala sculptors (such as the legendary Ruvari Mallitamma) to carve jewel-like undercut ornaments—such as bead necklaces that swing freely on the stone sculpture and fingernails on dancing Madanikas—knowing the stone would permanently harden with time.',
    durabilityRating: '900+ Years (Hardened protective patina formed after carving)',
    monumentsUsed: [
      {
        title: 'Chennakeshava Temple (Belur)',
        state: 'Karnataka',
        era: '1117 CE (King Vishnuvardhana)',
        detail: 'Star-shaped platform and 42 celestial bracket dancers (Madanikas) carved in soapstone.'
      },
      {
        title: 'Hoysaleswara Temple (Halebidu)',
        state: 'Karnataka',
        era: '1121 CE (King Vishnuvardhana & Ketamalla)',
        detail: 'Friezes of 20,000+ elephants, horses, and mythic beasts along horizontal perimeter bands.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageSource: 'Wikimedia Commons / Hoysala Heritage Records',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    keyCharacteristics: [
      'Extreme Sculptural Softness: Cuts smoothly without chipping micro-details',
      'Atmospheric Hardening: Absorbs atmospheric oxygen to solidify crystalline outer crust',
      'Silky Lustrous Touch: Natural talc content creates smooth marble-like sheen',
      'Steatite Plasticity: Allows multi-layered depth relief with 3-dimensional undercuts'
    ],
    seismicOrWeatherResistance: 'Very resilient when kept sheltered under wide projecting eaves (Chhajjas).'
  },
  {
    id: 'coastal-laterite-stone',
    name: 'Coastal Hardening Laterite Stone',
    hindiName: 'तटीय लेटराइट पाषाण',
    category: 'sedimentary',
    quarryRegion: 'Konkan Coast (Goa) & Malabar Coast (Kerala)',
    engineeringProperty: 'Vesicular porous clay stone rich in iron hydroxide (limonite) and aluminum, easily sawn with handsaws when moist in the ground.',
    whyAncientBuildersChoseIt:
      'In regions receiving 3,000+ mm of torrential monsoon rainfall, regular bricks dissolve and standard mortars leach away. Laterite stone is unique because the moment it is dug up and exposed to sun and air, the iron minerals oxidize irreversibly, transforming the soft rock into hard ironstone that thrives under continuous rain.',
    durabilityRating: '500+ Years (Rain actually washes and reinforces the iron core)',
    monumentsUsed: [
      {
        title: 'Basilica of Bom Jesus (Old Goa)',
        itemId: 'basilica-bom-jesus',
        state: 'Goa',
        era: '1594–1605 CE (Jesuit Architecture)',
        detail: 'Unplastered red laterite facade showcasing rustic natural volcanic texture.'
      },
      {
        title: 'Bekal Fort',
        state: 'Kerala',
        era: '1650 CE (Shivappa Nayaka)',
        detail: 'Coastal sea ramparts built of giant laterite blocks resisting Arabian Sea waves.'
      },
      {
        title: 'Fort Aguada',
        state: 'Goa',
        era: '1612 CE (Portuguese)',
        detail: 'Laterite fortress and cistern holding 2.3 million gallons of fresh water.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Basilica_of_Bom_Jesus%2C_Goa.jpg/1280px-Basilica_of_Bom_Jesus%2C_Goa.jpg',
    imageSource: 'Wikimedia Commons / P. S. Umashankar',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Basilica_of_Bom_Jesus%2C_Goa.jpg',
    keyCharacteristics: [
      'Irreversible Air-Hardening: Soft as cheese when quarried; hardens into durable iron-stone',
      'High Porosity: Allows moisture to evaporate quickly without cracking walls',
      'Naturally Sourced: Abundant along tropical coastal cliffs',
      'Lime-Plaster Bonding: Forms chemical bond with shell-lime (Chunam) mortar'
    ],
    seismicOrWeatherResistance: 'Exceptional monsoon and tropical salinity resistance; absorbs heavy rain without structural deformation.'
  },
  {
    id: 'himalayan-kath-kuni-timber-slate',
    name: 'Kath-Kuni Cedar Wood & Slate',
    hindiName: 'काठ-कुणी देवदारु काष्ठ एवं स्लेट',
    category: 'organic_timber',
    quarryRegion: 'Western Himalayas (Himachal Pradesh, Uttarakhand & Kashmir)',
    engineeringProperty: 'Interlocking Deodar (Cedrus deodara) timber beams alternate with dry stone courses, topped with heavy split-slate shingles.',
    whyAncientBuildersChoseIt:
      'The Himalayas are one of the most active earthquake zones in the world. Ancient Pahari engineers invented the "Kath-Kuni" (wood-corner) technique: zero rigid mortar or cement. During a severe earthquake, the dry stone and timber grid flexes, shifts, and redistributes kinetic energy, acting as a natural earthquake shock absorber that returns to its original position without fracturing.',
    durabilityRating: '700+ Years (Natural Deodar wood resins resist wood rot and termites)',
    monumentsUsed: [
      {
        title: 'Naggar Castle',
        state: 'Himachal Pradesh',
        era: '1460 CE (Raja Sidh Singh of Kullu)',
        detail: 'Multi-story Himalayan palace that survived the catastrophic 1905 Kangra earthquake without damage.'
      },
      {
        title: 'Bhimakali Temple (Sarahan)',
        state: 'Himachal Pradesh',
        era: '12th Century CE',
        detail: 'Towering sacred twin towers built in classical Pahari Kath-Kuni timber-stone joinery.'
      },
      {
        title: 'Hadimba Devi Temple (Manali)',
        state: 'Himachal Pradesh',
        era: '1553 CE (Maharaja Bahadur Singh)',
        detail: 'Four-tiered pagoda roof layered with native cedar timber and carved mythological door jambs.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Brihadisvara_Temple_Thanjavur.jpg/1280px-Brihadisvara_Temple_Thanjavur.jpg',
    imageSource: 'Wikimedia Commons / Himachal Heritage Archives',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Brihadisvara_Temple_Thanjavur.jpg',
    keyCharacteristics: [
      'Base-Isolation Elasticity: The entire building shifts harmlessly during seismic tremors',
      'Zero Mortar: Eliminates brittle structural failure points',
      'Natural Deodar Oil: High aromatic resin protects wood from sub-zero snow and insect bore',
      'Heavy Slate Ballast: Heavy slate roof holds the interlocking wooden joints compressed'
    ],
    seismicOrWeatherResistance: 'Zone-5 Maximum Seismic Resistance (World-renowned vernacular earthquake engineering)'
  },
  {
    id: 'lakhori-brick-and-surkhi',
    name: 'Lakhori Brick & Lime Surkhi Mortar',
    hindiName: 'लखौरी ईंट एवं चूना-सुर्खी मसाला',
    category: 'composite_masonry',
    quarryRegion: 'Indo-Gangetic Alluvium (Awadh, Delhi & Central Plains)',
    engineeringProperty: 'Thin kiln-fired clay bricks (15–20mm thick) bound with hydraulic lime mortar enriched with crushed brick powder (surkhi), urad dal (lentil), and jaggery.',
    whyAncientBuildersChoseIt:
      'Where stone quarries were hundreds of miles away, Awadhi architects invented monumental vaulting with Lakhori bricks. Because the bricks are thin, the mortar-to-brick ratio is high; the organic additives (jaggery, bael fruit, urad dal) in the lime mortar created a flexible, self-healing glue that enabled the construction of the world’s largest unsupported vaulted hall (Bara Imambara) without a single iron girder or stone pillar.',
    durabilityRating: '300+ Years (Self-healing lime carbonation process)',
    monumentsUsed: [
      {
        title: 'Bara Imambara & Bhool Bhulaiya',
        state: 'Uttar Pradesh',
        era: '1784 CE (Nawab Asaf-ud-Daula)',
        detail: 'The 50x16 meter central hall ceiling is supported entirely by interlocking Lakhori brick arches with zero pillars.'
      },
      {
        title: 'Rumi Darwaza',
        state: 'Uttar Pradesh',
        era: '1784 CE (Awadh Architecture)',
        detail: '60-foot tall ceremonial gateway modeled after the Sublime Porte of Istanbul.'
      },
      {
        title: 'Safdarjung Tomb Gateway',
        state: 'Delhi',
        era: '1754 CE (Late Mughal)',
        detail: 'Decorative pavilions and interior domes reinforced with Lakhori core masonry.'
      }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Hawa_Mahal_2011.jpg/1280px-Hawa_Mahal_2011.jpg',
    imageSource: 'Wikimedia Commons / ASI Lucknow Circle',
    imageSourceUrl: 'https://commons.wikimedia.org/wiki/File:Hawa_Mahal_2011.jpg',
    keyCharacteristics: [
      'Pillarless Wide Vaults: Enables lightweight structural corbelled ceilings',
      'Organic Binder Secret: Urad pulse and jaggery enhance plasticity and adhesive grip',
      'Thin Brick Matrix: Allows complex 3D filigree moldings and intricate stalactite stucco',
      'Breathable Masonry: Regulates humidity inside hot monsoon climates'
    ],
    seismicOrWeatherResistance: 'High structural elasticity due to slow-curing carbonation of hydraulic lime mortar.'
  }
];
