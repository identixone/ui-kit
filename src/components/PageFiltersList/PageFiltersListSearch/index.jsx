import React from "react";
import PropTypes from "prop-types";

import { useEffect, useRef } from "react";
import { useTranslation } from "../../../hooks";
import { withPageFiltersListContext } from "../PageFiltersListContext";

import PageFiltersListSearchInput from "./PageFiltersListSearchInput";

import { resources } from "./PageFiltersListSearch.resources.js";
import { isUndefined } from "lodash-es";

function PageFiltersListSearch({
  setSearchQuery,
  "data-testid": testId,
  searchQuery,
  placeholder,
  className,
  iconSize,
}) {
  const inputRef = useRef();
  const { t, i18n } = useTranslation("PageFiltersListSearch");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleChange({ target: { value } }) {
    setSearchQuery(value);
  }

  i18n.addResourceBundle("en", "PageFiltersListSearch", resources.en);
  i18n.addResourceBundle("ru", "PageFiltersListSearch", resources.ru);

  const textPlaceholder = isUndefined(placeholder)
    ? t("placeholder")
    : placeholder;

  return (
    <PageFiltersListSearchInput
      className={className}
      iconSize={iconSize}
      data-testid={testId}
      innerRef={inputRef}
      value={searchQuery}
      placeholder={textPlaceholder}
      onChange={handleChange}
    />
  );
}

PageFiltersListSearch.propTypes = {
  className: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  placeholder: PropTypes.string,
  "data-testid": PropTypes.string,
};

export default withPageFiltersListContext(PageFiltersListSearch);
