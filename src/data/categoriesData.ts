import { CategoryMeta, CultureCategory } from '../types';

export const CULTURAL_CATEGORIES: CategoryMeta[] = [
  {
    id: 'monument',
    name: 'Monuments & Architecture',
    hindiName: 'ऐतिहासिक स्मारक व स्थापत्य कला',
    description: 'Ancient rock-cut temples, soaring minarets, grand forts, stepwells, and UNESCO World Heritage sanctuaries.',
    iconName: 'Landmark',
    colorAccent: '#F28C28', // Indian Saffron
    bgAccent: 'rgba(242, 140, 40, 0.14)',
  },
  {
    id: 'art',
    name: 'Visual & Folk Arts',
    hindiName: 'चित्रकला एवं लोक कला',
    description: 'Traditional miniature paintings, sacred scroll arts, tribal wall murals, and millennia-old indigenous iconography.',
    iconName: 'Palette',
    colorAccent: '#A83A68', // Indian Textile Magenta
    bgAccent: 'rgba(168, 58, 104, 0.14)',
  },
  {
    id: 'instrument',
    name: 'Musical Instruments',
    hindiName: 'पारंपरिक वाद्ययंत्र',
    description: 'Acoustic marvels of Hindustani and Carnatic classical traditions, folk resonance, percussion, and plucked strings.',
    iconName: 'Music',
    colorAccent: '#3155A6', // Indian Royal Blue
    bgAccent: 'rgba(49, 85, 166, 0.14)',
  },
  {
    id: 'clothing',
    name: 'Traditional Textiles & Clothing',
    hindiName: 'पारंपरिक वेशभूषा व वस्त्र',
    description: 'Pure mulberry silks, intricate zari brocades, hand-spun khadi, and indigenous embroidery preserving artisanal mastery.',
    iconName: 'Sparkles',
    colorAccent: '#8A3B8B', // Royal Purple / Textile Magenta
    bgAccent: 'rgba(138, 59, 139, 0.14)',
  },
  {
    id: 'food',
    name: 'Culinary Heritage',
    hindiName: 'पारंपरिक व्यंजन व पाककला',
    description: 'Ancient Ayurvedic recipes, royal Mughlai & Nizami feasts, coastal coconut curries, and GI-tagged indigenous delicacies.',
    iconName: 'Utensils',
    colorAccent: '#D4A017', // Turmeric & Antique Gold
    bgAccent: 'rgba(212, 160, 23, 0.14)',
  },
  {
    id: 'craft',
    name: 'Handicrafts & Artisanship',
    hindiName: 'शिल्पकला व हस्तशिल्प',
    description: 'Lost-wax metal casting, wooden lacquerware, glazed pottery, damascened bidriware, and gemstone lapidary.',
    iconName: 'Hammer',
    colorAccent: '#16745B', // Emerald Green
    bgAccent: 'rgba(22, 116, 91, 0.14)',
  },
  {
    id: 'performing_art',
    name: 'Performing Arts & Dances',
    hindiName: 'शास्त्रीय व लोक नृत्य-नाट्य',
    description: 'Natya Shastra expressions, temple mudras, vibrant folk celebrations, rhythm cycles, and ancient Sanskrit theatre.',
    iconName: 'Drama',
    colorAccent: '#176B87', // Peacock Teal
    bgAccent: 'rgba(23, 107, 135, 0.14)',
  },
];

export function getCategoryMeta(id: CultureCategory): CategoryMeta {
  return CULTURAL_CATEGORIES.find((c) => c.id === id) || CULTURAL_CATEGORIES[0];
}
