import React from "react";
import PropTypes from "prop-types";

import { useRef } from "react";

import { StyledSearch } from "./StyledSearch";
import { SearchInput } from "./SearchInput";
import { SearchFakeInputValue } from "./SearchFakeInputValue";
import { SearchIcon } from "./SearchIcon";
import { SearchCompact } from "./SearchCompact";
import { SearchClearButton } from "./SearchClearButton";
import { TimesDelete, TimesDeleteBold } from "../icons";

import { setNativeValue } from "../../utils/helpers";

function Search({
  name,
  value,
  onChange,
  placeholder,
  innerRef,
  className,
  "data-testid": testId,
  isCompact,
}) {
  const inputRef = useRef(innerRef ? innerRef.current : null);

  function clearInputValue() {
    setNativeValue(inputRef.current, "");
    inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
  }

  return (
    <StyledSearch className={className}>
      <SearchIcon size={24} />
      <SearchInput
        name={name}
        data-testid={testId}
        ref={inputRef}
        placeholder={placeholder ? placeholder : undefined}
        onChange={onChange}
        value={value}
      />
      <SearchFakeInputValue>{value}</SearchFakeInputValue>
      {value && (
        <SearchClearButton onClick={clearInputValue}>
          {isCompact ? (
            <TimesDeleteBold size={12} />
          ) : (
            <TimesDelete size={24} />
          )}
        </SearchClearButton>
      )}
    </StyledSearch>
  );
}

Search.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  innerRef: PropTypes.object,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
  isCompact: PropTypes.bool,
};

Search.defaultProps = {
  "data-testid": "search-input",
};

Search.Compact = SearchCompact;

export {
  Search,
  SearchCompact,
  StyledSearch,
  SearchInput,
  SearchFakeInputValue,
  SearchIcon,
};
