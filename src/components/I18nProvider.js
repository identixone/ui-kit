import React from "react";
import PropTypes from "prop-types";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locales from "../locales";

function I18nProvider({ children }) {
  i18n.use(LanguageDetector).init({
    resources: locales,
    lng: localStorage.getItem("lng"),
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export { I18nProvider, withTranslation } from "react-i18next";
