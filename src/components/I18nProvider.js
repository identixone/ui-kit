import React from "react";
import PropTypes from "prop-types";

import i18n from "i18next";
import { merge } from "lodash-es";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import locales from "../locales";

function I18nProvider({ children, appLocales }) {
  const resources = merge(appLocales, locales);
  i18n.use(LanguageDetector).init({
    resources: resources,
    lng: localStorage.getItem("lng"),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired]).isRequired,
  appLocales: PropTypes.object,
};

export default I18nProvider;
