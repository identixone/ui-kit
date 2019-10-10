import React from "react";
import PropTypes from "prop-types";

import { StyledSearch } from "./StyledSearch";
import { SearchInput } from "./SearchInput";
import { SearchIcon } from "./SearchIcon";
import { SearchClearButton } from "./SearchClearButton";

function Search({
  value,
  onChange,
  placeholder,
  innerRef,
  className,
  iconSize,
  ...restProps
}) {
  return (
    <StyledSearch className={className}>
      <SearchIcon size={iconSize} />
      <SearchInput
        data-testid={restProps["data-testid"]}
        ref={innerRef}
        placeholder={placeholder ? placeholder : undefined}
        onChange={onChange}
        value={value}
      />
      {value && (
        <SearchClearButton
          onClick={() => {
            onChange({ target: { value: "" } });
          }}
        />
      )}
    </StyledSearch>
  );
}

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  innerRef: PropTypes.object,
  iconSize: PropTypes.number,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

Search.defaultProps = {
  iconSize: 23,
  "data-testid": "search-input",
};

export { Search, StyledSearch };
