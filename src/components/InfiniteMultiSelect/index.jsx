import React from "react";
import PropTypes from "prop-types";

import { useInfiniteMenu } from "../../hooks";

import { InfiniteScroll } from "../InfiniteScroll";
import { FormMultiSelect } from "../form/components";

function InfiniteMultiSelect({
  name,
  placeholder,
  options,
  fetchOptions,
  isFetching,
  limit,
  hasNext,
  value,
  onChange,
  className,
  "data-testid": testId,
}) {
  const { searchOptions, fetchNext } = useInfiniteMenu({
    limit,
    hasNext,
    isFetching,
    fetchOptions,
  });

  return (
    <InfiniteScroll onScrollToPoint={fetchNext} isFetching={isFetching}>
      {({ scrollerRef }) => (
        <FormMultiSelect
          className={className}
          value={value}
          options={options}
          onChange={onChange}
          data-testid={testId}
          name={name}
          onInputChange={searchOptions}
          menuRef={scrollerRef}
          placeholder={placeholder}
          isLoading={isFetching}
        />
      )}
    </InfiniteScroll>
  );
}

InfiniteMultiSelect.Option = FormMultiSelect.Option;
InfiniteMultiSelect.Menu = FormMultiSelect.Menu;

InfiniteMultiSelect.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  limit: PropTypes.number.isRequired,
  "data-testid": PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  hasNext: PropTypes.bool.isRequired,
};

InfiniteMultiSelect.defaultProps = {
  limit: 10,
};

export { InfiniteMultiSelect };
