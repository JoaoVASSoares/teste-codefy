import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/en.json";
import pt from "./locales/pt/pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt", 
    lng: "pt",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
  });

export default i18n;
