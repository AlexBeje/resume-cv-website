import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { i18n } from "element-react";
import en from "element-react/src/locale/lang/en";
import es from "element-react/src/locale/lang/es";

import resourcesEN from "./src/Locales/en";
import resourcesES from "./src/Locales/es";

console.log(resourcesEN);

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  es: {
    translation: resourcesES,
  },
  en: {
    translation: resourcesEN,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

i18n.use(es);

export const changeLanguage = (lng) => {
  i18next.changeLanguage(lng);
  lng === "es" ? i18n.use(es) : i18n.use(en);
};

export default i18next;
