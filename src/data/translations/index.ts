import { en } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";
import { ru } from "./ru";
import { fr } from "./fr";
import { it } from "./it";

export type Language = "en" | "hi" | "mr" | "ru" | "fr" | "it";

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
  nativeName: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: "en", label: "GLOBAL / EN", flag: "🇬🇧", nativeName: "English" },
  { code: "mr", label: "MARATHI / MR", flag: "🇮🇳", nativeName: "मराठी" },
  { code: "hi", label: "HINDI / HI", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "ru", label: "RUSSIAN / RU", flag: "🇷🇺", nativeName: "Русский" },
  { code: "fr", label: "FRENCH / FR", flag: "🇫🇷", nativeName: "Français" },
  { code: "it", label: "ITALIAN / IT", flag: "🇮🇹", nativeName: "Italiano" },
];

export const translations = {
  en,
  mr,
  hi,
  ru,
  fr,
  it,
};

export type TranslationKeys = typeof en;
