import { apiFetch } from './apiClient';
import { HeritageItem, StateData, MonumentMaterial, CultureCategory } from '../types';
import { HERITAGE_ITEMS } from '../data/heritageItemsData';
import { STATES_DATA } from '../data/statesData';
import { MONUMENT_MATERIALS_DATA } from '../data/monumentMaterialsData';
import { CULTURAL_CATEGORIES } from '../data/categoriesData';

export interface HeritageFilterParams {
  stateId?: string;
  districtId?: string;
  category?: CultureCategory | 'all';
  search?: string;
}

export async function fetchHeritageItems(params?: HeritageFilterParams): Promise<HeritageItem[]> {
  const queryParts: string[] = [];
  if (params?.stateId) queryParts.push(`stateId=${encodeURIComponent(params.stateId)}`);
  if (params?.districtId) queryParts.push(`districtId=${encodeURIComponent(params.districtId)}`);
  if (params?.category && params.category !== 'all') queryParts.push(`category=${encodeURIComponent(params.category)}`);
  if (params?.search) queryParts.push(`search=${encodeURIComponent(params.search)}`);

  const qs = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';

  // Local fallback filter if offline or during build
  let fallback = [...HERITAGE_ITEMS];
  if (params?.stateId) fallback = fallback.filter((i) => i.stateId === params.stateId);
  if (params?.districtId) fallback = fallback.filter((i) => i.districtId === params.districtId);
  if (params?.category && params.category !== 'all') fallback = fallback.filter((i) => i.category === params.category);
  if (params?.search) {
    const q = params.search.toLowerCase();
    fallback = fallback.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.hindiTitle.toLowerCase().includes(q) ||
        i.stateName.toLowerCase().includes(q) ||
        i.districtName.toLowerCase().includes(q)
    );
  }

  return apiFetch<HeritageItem[]>(`/heritage/items${qs}`, { method: 'GET' }, fallback);
}

export async function fetchStates(): Promise<StateData[]> {
  return apiFetch<StateData[]>('/heritage/states', { method: 'GET' }, STATES_DATA);
}

export async function fetchCategories() {
  return apiFetch('/heritage/categories', { method: 'GET' }, CULTURAL_CATEGORIES);
}

export async function fetchMonumentMaterials(): Promise<MonumentMaterial[]> {
  return apiFetch<MonumentMaterial[]>('/heritage/materials', { method: 'GET' }, MONUMENT_MATERIALS_DATA);
}
