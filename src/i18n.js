import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "./locales/pt.json";
import en from "./locales/en.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import zh from "./locales/zh.json";
import ru from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
    de: { translation: de },
    es: { translation: es },
    zh: { translation: zh },
    ru: { translation: ru },
  },
  lng: "pt", // idioma inicial
  fallbackLng: "pt",
  interpolation: { escapeValue: false },
});

export default i18n;
