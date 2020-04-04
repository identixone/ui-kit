import React from "react";
import PropTypes from "prop-types";

import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

function I18nProvider({ children, i18n }) {
  i18n.init({
    resources: {},
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

I18nProvider.propTypes = {
  i18n: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

I18nProvider.defaultProps = {
  i18n,
};

export { withTranslation } from "react-i18next";
export { I18nProvider };
