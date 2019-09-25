import React from "react";
import PropTypes from "prop-types";

import SearchInputWrapper from "./SearchInputWrapper";
import SearchInputIcon from "./SearchInputIcon";
import StyledSearchInput from "./StyledSearchInput";
import { SearchInputClearButton } from "./SearchInputClearButton";

export function SearchInput({
  value,
  onChange,
  placeholder,
  innerRef,
  className,
  iconSize,
  ...restProps
}) {
  return (
    <SearchInputWrapper className={className}>
      <SearchInputIcon size={iconSize} />
      <StyledSearchInput
        data-testid={restProps["data-testid"]}
        ref={innerRef}
        placeholder={placeholder ? placeholder : undefined}
        onChange={onChange}
        value={value}
      />
      {value && (
        <SearchInputClearButton
          onClick={() => {
            onChange({ target: { value: "" } });
          }}
        />
      )}
    </SearchInputWrapper>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  innerRef: PropTypes.object,
  iconSize: PropTypes.number,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

SearchInput.defaultProps = {
  iconSize: 16,
};
