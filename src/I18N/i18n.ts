import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common from "./locales/en/common.json";
import glossary from "./locales/en/glossary.json";
import validations from "./locales/en/validations.json";

export const resources = {
  en: {
    common,
    glossary,
    validations,
  },
} as const;
export const defaultNS = "common";

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["common", "glossary", "validations"],
  // defaultNS,
  resources,
});

export default i18n;
