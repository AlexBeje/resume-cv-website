import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { i18n } from "element-react";
import en from "element-react/src/locale/lang/en";
import es from "element-react/src/locale/lang/es";

import resourcesEN from "./src/Locales/en";
import resourcesES from "./src/Locales/es";

const resources = {
  es: {
    translation: resourcesES,
  },
  en: {
    translation: resourcesEN,
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

i18n.use(es);

export const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
  lng === "es" ? i18n.use(es) : i18n.use(en);
};

export default i18next;
