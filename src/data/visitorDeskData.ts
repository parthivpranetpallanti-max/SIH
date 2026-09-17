import { MonumentVisitorDetail } from '../types';

export const MONUMENTS_VISITOR_DATA: MonumentVisitorDetail[] = [
  {
    id: 'taj-mahal',
    monumentTitle: 'Taj Mahal',
    hindiTitle: 'ताजमहल',
    location: 'Agra',
    state: 'Uttar Pradesh',
    itemId: 'taj-mahal',
    openingTime: '30 Minutes before Sunrise (approx. 6:00 AM)',
    closingTime: '30 Minutes before Sunset (approx. 6:30 PM)',
    closedDays: 'CLOSED EVERY FRIDAY (open only for Friday afternoon prayers for local residents)',
    indianEntryFee: '₹50 (Cashless / Online: ₹45) + ₹200 optional fee to enter the main mausoleum chamber',
    saarcEntryFee: '₹540 + ₹200 for main mausoleum',
    foreignEntryFee: '₹1100 (Cashless / Online: ₹1050) + ₹200 for main mausoleum',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry (both domestic and international, with age/ID proof)',
      'World Heritage Day (April 18) & International Museum Day (May 18)',
      'Full moon night viewing requires separate pre-booked ticket (open 5 nights per lunar month, except Fridays & Ramadan)'
    ],
    requiredDetails: [
      'Original Govt Photo ID (Aadhaar Card, Voter ID, Driving License, or Passport for foreign nationals)',
      'E-ticket with QR code (must be pre-booked online via asi.payumoney.com or ASI monument booking app)',
      'Shoe covers (provided with foreign ticket, or ₹5 disposable covers) required to step on the marble plinth',
      'No large bags, drone cameras, tripods, food, cigarettes, or lighters permitted inside the security perimeter'
    ],
    ticketingMode: '100% Digital / E-Ticketing (No physical paper tickets sold at the gate)',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Sunrise (6:00 AM – 8:00 AM) for soft morning light, cooler temperature, and minimal crowds',
    dressCodeRules: 'Modest casual attire. Shoe covers or barefoot mandatory on upper marble terrace.',
    specialRules: [
      'East Gate and West Gate are primary tourist entrances',
      'Free battery-operated golf carts / e-rickshaws available from vehicle parking to entrance gates (500m eco-zone)',
      'Cloakroom lockers available at gates for bags and electronics'
    ]
  },
  {
    id: 'brihadisvara-temple',
    monumentTitle: 'Brihadisvara Temple (Big Temple)',
    hindiTitle: 'बृहदीश्वर मंदिर (तंजावुर)',
    location: 'Thanjavur',
    state: 'Tamil Nadu',
    itemId: 'brihadisvara-temple',
    openingTime: '6:00 AM',
    closingTime: '8:30 PM (Sanctum closed 12:30 PM – 4:00 PM for afternoon rituals)',
    closedDays: 'OPEN ALL 7 DAYS (No weekly closing day)',
    indianEntryFee: 'FREE ENTRY (₹0) for all visitors',
    saarcEntryFee: 'FREE ENTRY (₹0) for all visitors',
    foreignEntryFee: 'FREE ENTRY (₹0) for all visitors',
    isFreeEntry: true,
    freeEntryEligibility: [
      '100% Free Entry for everyone at all times',
      'Active living place of Hindu worship and UNESCO World Heritage monument managed jointly with ASI'
    ],
    requiredDetails: [
      'Valid Photo ID recommended',
      'Footwear strictly not allowed inside the courtyard (Free footwear storage counters available near entrance Gopuram)',
      'Modest traditional dress code is strictly enforced: Shoulders and knees must be covered (No shorts, sleeveless tops, or miniskirts)',
      'Photography permitted in temple outer courtyards; strictly prohibited inside the inner sanctum sanctorum (Garbhagriha)'
    ],
    ticketingMode: 'Free Walk-in Entry (No ticket required)',
    bookingUrl: 'https://asi.nic.in',
    bestTimeToVisit: 'Early morning (6:30 AM – 9:00 AM) or late evening during sunset lamps illumination (5:30 PM – 8:00 PM)',
    dressCodeRules: 'Traditional/Modest attire required: Dhoti/Kurta/Pants for men; Saree/Salwar/Churidar for women.',
    specialRules: [
      'Free audio guide plaques positioned near the Nandi Mandapam',
      'Special Maha Shivaratri and Chola festival celebrations feature grand classical Bharatanatyam performances'
    ]
  },
  {
    id: 'konark-sun-temple',
    monumentTitle: 'Konark Sun Temple',
    hindiTitle: 'कोणार्क सूर्य मंदिर',
    location: 'Puri District',
    state: 'Odisha',
    itemId: 'konark-sun-temple',
    openingTime: '6:00 AM',
    closingTime: '8:00 PM (Temple is illuminated with architectural floodlights at night)',
    closedDays: 'OPEN ALL 7 DAYS (No weekly closure)',
    indianEntryFee: '₹40 (Cashless / Online: ₹35)',
    saarcEntryFee: '₹40 (Cashless / Online: ₹35)',
    foreignEntryFee: '₹600 (Cashless / Online: ₹550)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry with age proof',
      'World Heritage Day (April 18) and National Heritage Week'
    ],
    requiredDetails: [
      'Govt Photo ID for verification with online QR ticket',
      'Online ticket booking via ASI portal or instant QR code scan at entrance plaza',
      'Sound and Light Show (separate evening ticket at amphitheatre: ₹50 for English/Odia/Hindi shows)'
    ],
    ticketingMode: 'Online E-Ticket via ASI QR Code or Portal',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Dawn (6:00 AM) to witness the first rays of the sun illuminating the chariot wheels, or 6:30 PM for light show',
    dressCodeRules: 'Comfortable casual attire and walking shoes. Sun hats and umbrellas recommended for open stone courtyard.',
    specialRules: [
      'Annual Konark Dance Festival held every December in the open-air Natya Mandap arena',
      'Interpretation Centre with AC auditorium and 3D miniature exhibits located 500m before main gate'
    ]
  },
  {
    id: 'kailasa-temple-ellora',
    monumentTitle: 'Kailasa Temple & Ellora Caves',
    hindiTitle: 'कैलाश मंदिर एवं एलोरा गुफाएँ',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    state: 'Maharashtra',
    itemId: 'kailasa-temple-ellora',
    openingTime: 'Sunrise (approx. 6:00 AM)',
    closingTime: 'Sunset (approx. 6:00 PM)',
    closedDays: 'CLOSED EVERY TUESDAY',
    indianEntryFee: '₹40 (Cashless: ₹35)',
    saarcEntryFee: '₹40 (Cashless: ₹35)',
    foreignEntryFee: '₹600 (Cashless: ₹550)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry',
      'World Heritage Day (April 18)'
    ],
    requiredDetails: [
      'Valid Photo ID (Aadhaar/Passport)',
      'Ticket valid for all 34 rock-cut caves (Buddhist, Hindu & Jain groups)',
      'Flash photography prohibited inside caves with ancient plaster paintings'
    ],
    ticketingMode: 'E-Ticket (ASI Portal / QR Scanner at entrance)',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Post-monsoon (October to March) for pleasant weather and lush green mountain waterfalls',
    dressCodeRules: 'Sturdy walking shoes recommended as terrain involves natural stone steps and uphill rock pathways.',
    specialRules: [
      'Cave 16 is the famous monolithic Kailasa Temple',
      'Internal shuttle golf carts available for senior citizens between Cave 1 and Cave 34'
    ]
  },
  {
    id: 'ajanta-caves',
    monumentTitle: 'Ajanta Caves',
    hindiTitle: 'अजंता गुफाएँ',
    location: 'Chhatrapati Sambhajinagar (Aurangabad)',
    state: 'Maharashtra',
    itemId: 'ajanta-caves',
    openingTime: '9:00 AM',
    closingTime: '5:30 PM',
    closedDays: 'CLOSED EVERY MONDAY',
    indianEntryFee: '₹40 (Cashless: ₹35)',
    saarcEntryFee: '₹40 (Cashless: ₹35)',
    foreignEntryFee: '₹600 (Cashless: ₹550)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry',
      'World Heritage Day (April 18)'
    ],
    requiredDetails: [
      'Govt Photo ID card matching ticket',
      'Green Shuttle Bus ticket (₹25–₹30) from T-Junction parking lot to the cave entrance (mandatory eco-zone)',
      'Strictly NO flash photography, tripods, or artificial lighting inside caves to preserve delicate 2000-year-old fresco murals'
    ],
    ticketingMode: 'Online E-Ticket (ASI Portal)',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'November to February; start early at 9:00 AM to explore all 30 caves with natural diffused lighting',
    dressCodeRules: 'Shoes must be removed at the threshold of caves with original painted plaster floors.',
    specialRules: [
      'ASI guides with optical fiber flashlights available for hire at Cave 1 entrance',
      'Viewpoint hill across the gorge offers panoramic views of the horseshoe rock cliff'
    ]
  },
  {
    id: 'hawa-mahal',
    monumentTitle: 'Hawa Mahal (Palace of Winds)',
    hindiTitle: 'हवा महल',
    location: 'Jaipur',
    state: 'Rajasthan',
    itemId: 'hawa-mahal',
    openingTime: '9:00 AM',
    closingTime: '4:30 PM (Exterior street facade visible and illuminated 24 hours)',
    closedDays: 'OPEN ALL 7 DAYS (No weekly closing)',
    indianEntryFee: '₹50 (Indian Students with valid School/College ID: ₹20)',
    saarcEntryFee: '₹50',
    foreignEntryFee: '₹200 (Foreign Students: ₹100)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Rajasthan Day (March 30), World Heritage Day (April 18), and International Museum Day (May 18)',
      'Children under 7 years: Free entry',
      'Street-level view of iconic 953 Jharokhas facade from Sireh Deori Bazaar is 100% Free 24/7'
    ],
    requiredDetails: [
      'Photo ID (Student ID card for discounted student admission)',
      'Tickets can be bought online via Rajasthan Archaeology portal or at the rear courtyard entrance gate',
      'Composite Ticket option: ₹300 (Indians) / ₹1000 (Foreigners) valid for 2 days across Amber Fort, Albert Hall, Jantar Mantar, Nahargarh & Hawa Mahal'
    ],
    ticketingMode: 'Online or On-site Counter Ticket',
    bookingUrl: 'https://artandculture.rajasthan.gov.in',
    bestTimeToVisit: 'Morning 9:00 AM – 11:00 AM when golden morning sunlight illuminates the stained-glass windows',
    dressCodeRules: 'Casual clothing with comfortable shoes for navigating narrow ramped corridors and stone staircases.',
    specialRules: [
      'Enter from the rear courtyard gate (Sireh Deori Bazaar), not the facade front which has no public entrance',
      'Rooftop pavilion offers breathtaking views of Jantar Mantar and City Palace'
    ]
  },
  {
    id: 'red-fort-delhi',
    monumentTitle: 'Red Fort (Lal Qila)',
    hindiTitle: 'लाल किला (दिल्ली)',
    location: 'Old Delhi',
    state: 'Delhi',
    itemId: 'red-fort-delhi',
    openingTime: '9:30 AM',
    closingTime: '4:30 PM',
    closedDays: 'CLOSED EVERY MONDAY',
    indianEntryFee: '₹35 (Cashless/Online) / ₹50 (Cash counter)',
    saarcEntryFee: '₹35 (Cashless/Online) / ₹50 (Cash counter)',
    foreignEntryFee: '₹500 (Cashless/Online) / ₹550 (Cash counter)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children below 15 years: 100% FREE entry with age ID',
      'World Heritage Day (April 18)'
    ],
    requiredDetails: [
      'Original Photo ID for all adults',
      'Online e-ticket with entry time slot QR code',
      'Strict CISF airport-style security check: No large bags, power banks, tobacco, or food items'
    ],
    ticketingMode: 'Online E-Ticket via ASI QR portal',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Morning 10:00 AM or late afternoon for museum complexes (Kranti Mandir, Subhash Chandra Bose Museum)',
    dressCodeRules: 'Casual, comfortable walking attire. Expect 2–3 km of walking across vast palace courtyards.',
    specialRules: [
      'Evening Sound & Light show (Jai Hind) has separate tickets: ₹80 (weekdays), ₹100 (weekends)',
      'Metro: Direct access via Lal Qila Metro Station (Violet Line) Gate 4'
    ]
  },
  {
    id: 'qutb-minar-delhi',
    monumentTitle: 'Qutb Minar Complex',
    hindiTitle: 'क़ुतुब मीनार',
    location: 'Mehrauli, New Delhi',
    state: 'Delhi',
    itemId: 'qutb-minar-delhi',
    openingTime: '7:00 AM',
    closingTime: '9:00 PM (Complex is illuminated with night floodlighting)',
    closedDays: 'OPEN ALL 7 DAYS (No weekly closure)',
    indianEntryFee: '₹35 (Cashless/Online) / ₹40',
    saarcEntryFee: '₹35 (Cashless/Online) / ₹40',
    foreignEntryFee: '₹550 (Cashless/Online) / ₹600',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry',
      'World Heritage Day (April 18)'
    ],
    requiredDetails: [
      'Photo ID for verification',
      'E-ticket with QR code',
      'Wheelchair access available throughout paved pathways'
    ],
    ticketingMode: 'Online E-Ticket via ASI Portal / QR Scanner',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Late afternoon (4:30 PM) staying until 7:30 PM to enjoy both daytime sunset and evening illumination',
    dressCodeRules: 'Casual attire; footwear allowed throughout the complex (iron pillar and ruins courtyards).',
    specialRules: [
      'Climbing inside the Qutb Minar minaret tower is permanently closed to the public for safety since 1981',
      'The 1,600-year-old rust-resistant Gupta Iron Pillar is located inside the Quwwat-ul-Islam courtyard'
    ]
  },
  {
    id: 'fatehpur-sikri',
    monumentTitle: 'Fatehpur Sikri Royal Complex & Buland Darwaza',
    hindiTitle: 'फ़तेहपुर सीकरी एवं बुलंद दरवाज़ा',
    location: 'Fatehpur Sikri, Agra District',
    state: 'Uttar Pradesh',
    itemId: 'fatehpur-sikri',
    openingTime: 'Sunrise (approx. 6:00 AM)',
    closingTime: 'Sunset (approx. 6:00 PM)',
    closedDays: 'OPEN ALL 7 DAYS (No weekly closing day)',
    indianEntryFee: '₹50 (Cashless/Online: ₹45)',
    saarcEntryFee: '₹50',
    foreignEntryFee: '₹610 (Cashless/Online: ₹550)',
    isFreeEntry: false,
    freeEntryEligibility: [
      'Children under 15 years: 100% FREE entry',
      'Buland Darwaza & Dargah of Sheikh Salim Chishti area: 100% FREE entry to all (no ticket required for the sacred mosque courtyard)'
    ],
    requiredDetails: [
      'Govt Photo ID matching e-ticket',
      'Ticket required for the Palatial Complex (Diwan-i-Khas, Panch Mahal, Jodha Bai Palace)',
      'Head coverings required when entering Salim Chishti Tomb; footwear must be removed'
    ],
    ticketingMode: 'Online ASI E-Ticket',
    bookingUrl: 'https://asi.payumoney.com',
    bestTimeToVisit: 'Morning 7:00 AM – 10:00 AM or late afternoon when Sikri red sandstone turns glowing scarlet',
    dressCodeRules: 'Modest attire. Scarves/caps recommended for shrine entrance.',
    specialRules: [
      'Eco-bus shuttle operates between outer vehicle parking lot and the Buland Darwaza gate (₹10)',
      'Hire only official authorized ASI badge guides; avoid unregistered street touts'
    ]
  },
  {
    id: 'basilica-bom-jesus',
    monumentTitle: 'Basilica of Bom Jesus',
    hindiTitle: 'बेसिलिका ऑफ बॉम जीसस (गोवा)',
    location: 'Old Goa',
    state: 'Goa',
    itemId: 'basilica-bom-jesus',
    openingTime: '9:00 AM (Sundays: 10:30 AM after Mass)',
    closingTime: '6:30 PM',
    closedDays: 'OPEN ALL 7 DAYS',
    indianEntryFee: 'FREE ENTRY (₹0) for all church visitors',
    saarcEntryFee: 'FREE ENTRY (₹0) for all church visitors',
    foreignEntryFee: 'FREE ENTRY (₹0) for all church visitors (Optional ₹10 for upper Sacred Art Gallery)',
    isFreeEntry: true,
    freeEntryEligibility: [
      '100% Free Entry for all visitors to the main Basilica sanctuary',
      'Active UNESCO World Heritage Catholic pilgrimage shrine housing the sacred relics of St. Francis Xavier'
    ],
    requiredDetails: [
      'Modest church dress code strictly enforced: No sleeveless tops, short shorts, or beachwear',
      'Silence and reverence must be observed inside the chapel',
      'Photography without flash is permitted; strictly prohibited during holy Mass'
    ],
    ticketingMode: 'Free Walk-in Entry',
    bookingUrl: 'https://asi.nic.in',
    bestTimeToVisit: 'Morning 9:30 AM – 11:30 AM before tourist buses arrive from North Goa beaches',
    dressCodeRules: 'Modest church etiquette: Covered shoulders and below-knee attire required.',
    specialRules: [
      'Feast of St. Francis Xavier celebrated every year on December 3rd with grand solemn processions'
    ]
  }
];

export const GENERAL_VISITOR_RULES = {
  freeEntrySummary: [
    'Every child under 15 years gets 100% FREE ENTRY across all 3,690+ ASI protected monuments in India regardless of nationality (bring age ID / school card / passport).',
    'World Heritage Day (April 18) and International Museum Day (May 18): Free admission at most ASI national monuments.',
    'Living sacred shrines & active temples (e.g. Brihadisvara Temple, Basilica of Bom Jesus, Golden Temple, Meenakshi Temple) have 100% FREE ENTRY for all visitors year-round.'
  ],
  standardRates: {
    categoryA: {
      description: 'UNESCO World Heritage Monuments (Taj Mahal, Qutb Minar, Red Fort, Ellora, Ajanta, Konark, etc.)',
      indianSaarc: '₹35 – ₹50 (Online/Cashless discount ₹5)',
      foreign: '₹550 – ₹600 (Taj Mahal: ₹1100 + ₹200 for mausoleum)',
      childrenUnder15: 'Free (₹0)'
    },
    categoryB: {
      description: 'Non-World Heritage ASI Ticketed Monuments',
      indianSaarc: '₹20 – ₹25',
      foreign: '₹250 – ₹300',
      childrenUnder15: 'Free (₹0)'
    }
  },
  bookingPortal: {
    name: 'Archaeological Survey of India (ASI) Official E-Ticketing',
    url: 'https://asi.payumoney.com',
    qrPayment: 'Instant UPI / QR Scanner available at monument entrance plazas with ₹5 cashless discount.'
  },
  essentialChecklist: [
    'Carry Original Photo ID (Aadhaar / Voter ID / Passport / Driving License)',
    'Book online via asi.payumoney.com to skip long ticket counter queues and save ₹5 per ticket',
    'Check weekly closing days before planning (e.g. Taj Mahal closed Fridays; Red Fort & Ajanta closed Mondays; Ellora closed Tuesdays)',
    'Strictly avoid bringing drone cameras, tripods, tobacco, or food into inner high-security zones',
    'Follow shoe-removal and dress code rules at active temple and mosque monuments'
  ]
};
