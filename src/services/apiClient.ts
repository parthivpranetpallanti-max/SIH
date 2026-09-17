/**
 * Middle Layer: Core API Client
 * Manages HTTP communication between the Frontend UI and Backend Express APIs.
 * Includes graceful fallback to local memory/data for offline or resilient rendering.
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  count?: number;
  error?: {
    message: string;
    status?: number;
  };
}

const API_BASE = '/api';

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
  fallbackData?: T
): Promise<T> {
  try {
    const url = endpoint.startsWith('/') ? `${API_BASE}${endpoint}` : `${API_BASE}/${endpoint}`;
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(options?.headers || {}),
      },
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const json: ApiResponse<T> = await res.json();
    if (json.data !== undefined) {
      return json.data;
    }
    return json as unknown as T;
  } catch (err) {
    console.warn(`[Middle Layer API Warning] ${endpoint} request failed:`, err);
    if (fallbackData !== undefined) {
      console.info(`[Middle Layer Fallback] Serving local fallback dataset for ${endpoint}`);
      return fallbackData;
    }
    throw err;
  }
}
