import React from "react";
import PropTypes from "prop-types";

import { StyledSearch } from "./StyledSearch";
import { SearchInput } from "./SearchInput";
import { SearchFakeInputValue } from "./SearchFakeInputValue";
import { SearchIcon } from "./SearchIcon";
import { SearchCompact } from "./SearchCompact";

function Search({
  value,
  onChange,
  placeholder,
  innerRef,
  className,
  "data-testid": testId,
}) {
  return (
    <StyledSearch className={className}>
      <SearchIcon size={24} />
      <SearchInput
        data-testid={testId}
        ref={innerRef}
        placeholder={placeholder ? placeholder : undefined}
        onChange={onChange}
        value={value}
      />
      <SearchFakeInputValue>{value}</SearchFakeInputValue>
    </StyledSearch>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  innerRef: PropTypes.object,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
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
