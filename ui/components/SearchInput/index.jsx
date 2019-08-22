import React from "react";
import PropTypes from "prop-types";

import SearchInputWrapper from "./SearchInputWrapper";
import SearchInputIcon from "./SearchInputIcon";
import StyledSearchInput from "./StyledSearchInput";

function SearchInput({
  value,
  onChange,
  inputPlaceholder,
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
        placeholder={inputPlaceholder ? inputPlaceholder : undefined}
        onChange={onChange}
        value={value}
      />
    </SearchInputWrapper>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  onChange: PropTypes.func,
  innerRef: PropTypes.object,
  iconSize: PropTypes.number,
  className: PropTypes.string,
  "data-testid": PropTypes.string,
};

SearchInput.defaultProps = {
  iconSize: 16,
};

export default SearchInput;
