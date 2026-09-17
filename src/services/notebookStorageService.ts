import { NotebookEntry } from '../types';

const STORAGE_KEY = 'bharat_museum_notebook';

export const notebookStorageService = {
  loadEntries(): NotebookEntry[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error('[Notebook Storage] Failed to load entries:', err);
      return [];
    }
  },

  saveEntries(entries: NotebookEntry[]): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (err) {
      console.error('[Notebook Storage] Failed to save entries:', err);
    }
  },

  addOrUpdateEntry(entries: NotebookEntry[], newEntry: NotebookEntry): NotebookEntry[] {
    const existingIndex = entries.findIndex((e) => e.itemId === newEntry.itemId);
    let updated: NotebookEntry[];
    if (existingIndex >= 0) {
      updated = [...entries];
      updated[existingIndex] = { ...updated[existingIndex], ...newEntry };
    } else {
      updated = [newEntry, ...entries];
    }
    this.saveEntries(updated);
    return updated;
  },

  removeEntry(entries: NotebookEntry[], itemId: string): NotebookEntry[] {
    const updated = entries.filter((e) => e.itemId !== itemId);
    this.saveEntries(updated);
    return updated;
  },

  exportAsText(entries: NotebookEntry[]): string {
    let output = `=== VIRTUAL BHARAT MUSEUM: STUDENT RESEARCH NOTEBOOK ===\n`;
    output += `Exported: ${new Date().toLocaleString()}\n`;
    output += `Total Entries: ${entries.length}\n\n`;

    entries.forEach((e, i) => {
      output += `[${i + 1}] ${e.customTitle || e.itemId} (${e.studyTag || 'General'})\n`;
      output += `Date: ${new Date(e.savedAt).toLocaleDateString()}\n`;
      if (e.userNotes) {
        output += `Notes:\n${e.userNotes}\n`;
      }
      output += `--------------------------------------------------------\n\n`;
    });

    return output;
  },
};
