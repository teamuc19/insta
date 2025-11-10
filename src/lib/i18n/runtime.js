import { writable } from 'svelte/store';

export const availableLanguageTags = ["sq", "en", "de", "it", "zh"];

// globale, reaktive Sprache
export const languageTag = writable("en");

// Helfer für imperative Setzung (optional)
export function setLanguageTag(tag) {
  if (availableLanguageTags.includes(tag)) {
    languageTag.set(tag);
  }
}
