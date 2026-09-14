import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationUk from "./locales/uk.json";
import translationEn from "./locales/en.json";
import translationPl from "./locales/pl.json";
import translationSv from "./locales/sv.json";
import translationFi from "./locales/fi.json";
import translationIt from "./locales/it.json";
import translationFr from "./locales/fr.json";

export const SUPPORTED_LANGUAGES = [
  { code: "uk", label: "Українська" },
  { code: "en", label: "English" },
  { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" },
  { code: "fi", label: "Suomi" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: translationUk },
      en: { translation: translationEn },
      pl: { translation: translationPl },
      sv: { translation: translationSv },
      fi: { translation: translationFi },
      it: { translation: translationIt },
      fr: { translation: translationFr },
    },
    fallbackLng: "uk",
    supportedLngs: SUPPORTED_LANGUAGES.map(({ code }) => code),
    nonExplicitSupportedLngs: true,
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const applyDocumentMeta = () => {
  document.title = i18n.t("meta.title");
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", i18n.t("meta.description"));
  }
};

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  applyDocumentMeta();
});

if (i18n.isInitialized) {
  applyDocumentMeta();
} else {
  i18n.on("initialized", applyDocumentMeta);
}

export default i18n;
