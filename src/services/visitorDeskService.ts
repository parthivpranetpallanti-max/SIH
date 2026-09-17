import { apiFetch } from './apiClient';
import { MonumentVisitorDetail } from '../types';
import { MONUMENTS_VISITOR_DATA, GENERAL_VISITOR_RULES } from '../data/visitorDeskData';

export interface VisitorInquiryApiResponse {
  reply: string;
  matchedMonument?: MonumentVisitorDetail;
  rules?: typeof GENERAL_VISITOR_RULES;
  isGeneralQuery?: boolean;
}

export async function fetchAllMonumentVisitorDetails(): Promise<MonumentVisitorDetail[]> {
  return apiFetch<MonumentVisitorDetail[]>(
    '/visitor-desk/monuments',
    { method: 'GET' },
    MONUMENTS_VISITOR_DATA
  );
}

export async function inquireVisitorDeskApi(query: string): Promise<VisitorInquiryApiResponse> {
  const fallbackResult: VisitorInquiryApiResponse = {
    reply: `Here are general Archaeological Survey of India (ASI) visitor guidelines: Children under 15 years enter FREE nationwide. Ticketed monuments typically range from ₹25 to ₹50 for Indian citizens and ₹300 to ₹600 for foreigners.`,
    rules: GENERAL_VISITOR_RULES,
    isGeneralQuery: true,
  };

  return apiFetch<VisitorInquiryApiResponse>(
    '/visitor-desk/inquire',
    {
      method: 'POST',
      body: JSON.stringify({ query }),
    },
    fallbackResult
  );
}
