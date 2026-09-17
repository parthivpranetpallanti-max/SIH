export type CultureCategory =
  | 'monument'
  | 'art'
  | 'instrument'
  | 'clothing'
  | 'food'
  | 'craft'
  | 'performing_art';

export type IndiaZone =
  | 'North'
  | 'South'
  | 'East'
  | 'West'
  | 'Central'
  | 'Northeast';

export interface KeyFact {
  label: string;
  value: string;
}

export interface HeritageItem {
  id: string;
  title: string;
  hindiTitle: string;
  category: CultureCategory;
  stateId: string;
  stateName: string;
  districtId: string;
  districtName: string;
  era: string;
  period: string;
  dynastyOrTradition: string;
  architecturalStyleOrMedium: string;
  unescoStatus?: boolean;
  giTag?: boolean;
  imageUrl: string;
  imageAlt: string;
  imageSource: string;
  imageSourceUrl: string;
  curatorSummary: string;
  historicalContext: string;
  architecturalHighlights: string[];
  audioGuideScript: string;
  keyFacts: KeyFact[];
  tags: string[];
}

export interface District {
  id: string;
  name: string;
  hindiName: string;
  stateId: string;
  description: string;
  notableHighlights: string[];
}

export interface StateData {
  id: string;
  name: string;
  hindiName: string;
  zone: IndiaZone;
  capital: string;
  description: string;
  heroImage: string;
  imageSource: string;
  imageSourceUrl: string;
  emblemTag: string;
  districts: District[];
}

export interface CategoryMeta {
  id: CultureCategory;
  name: string;
  hindiName: string;
  description: string;
  iconName: string;
  colorAccent: string;
  bgAccent: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: CultureCategory;
  state: string;
}

export interface NotebookEntry {
  itemId: string;
  savedAt: string;
  userNotes: string;
  studyTag?: 'General' | 'Exam Topic' | 'Need to Revise' | 'Research Complete';
  customTitle?: string;
}

export interface MonumentMaterial {
  id: string;
  name: string;
  hindiName: string;
  category: 'igneous' | 'metamorphic' | 'sedimentary' | 'composite_masonry' | 'organic_timber';
  quarryRegion: string;
  engineeringProperty: string;
  whyAncientBuildersChoseIt: string;
  durabilityRating: string;
  monumentsUsed: {
    title: string;
    itemId?: string;
    state: string;
    era: string;
    detail: string;
  }[];
  imageUrl: string;
  imageSource: string;
  imageSourceUrl: string;
  keyCharacteristics: string[];
  seismicOrWeatherResistance: string;
}

export interface MonumentVisitorDetail {
  id: string;
  monumentTitle: string;
  hindiTitle: string;
  location: string;
  state: string;
  itemId?: string;
  openingTime: string;
  closingTime: string;
  closedDays: string;
  indianEntryFee: string;
  saarcEntryFee: string;
  foreignEntryFee: string;
  isFreeEntry: boolean;
  freeEntryEligibility: string[];
  requiredDetails: string[];
  ticketingMode: string;
  bookingUrl: string;
  bestTimeToVisit: string;
  dressCodeRules?: string;
  specialRules?: string[];
}
