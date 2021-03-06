import React from "react";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { useListFetch } from "../../hooks";

import { InfiniteScroll } from "../index";
import { FormDropdown } from "../form/components";

function InfiniteDropdown({
  value,
  onChange,
  options,
  fetchOptions,
  isFetching,
  totalCount,
  limit,
  placeholder,
  "data-testid": testId,
  name,
  className,
  renderItem,
  withSearch,
  width,
  multiple,
  onStateChange,
  renderSelected,
}) {
  const [isListEnds, setIsListEnds] = useState(false);

  const { pagination, setPagination, setFetchParams } = useListFetch({
    fetchList: params => {
      fetchOptions({ ...params, meta: { clearList: params.offset === 0 } });
    },
    pagination: { limit, offset: 0 },
  });

  useEffect(() => {
    setIsListEnds(pagination.offset + pagination.limit > totalCount);
  }, [options]);

  function handleSearch(value) {
    setFetchParams({
      q: value,
      offset: 0,
    });
  }

  return (
    <InfiniteScroll
      onScrollToPoint={() => {
        if (!isListEnds) {
          setPagination({ offset: pagination.offset + pagination.limit });
        }
      }}
      isFetching={isFetching}
    >
      {({ scrollerRef }) => (
        <FormDropdown
          className={className}
          withSearch={withSearch}
          value={value}
          options={options}
          onChange={onChange}
          data-testid={testId}
          name={name}
          onInputChange={handleSearch}
          listRef={scrollerRef}
          placeholder={placeholder}
          renderItem={renderItem}
          width={width}
          multiple={multiple}
          onStateChange={onStateChange}
          renderSelected={renderSelected}
        />
      )}
    </InfiniteScroll>
  );
}

InfiniteDropdown.Option = FormDropdown.Option;
InfiniteDropdown.Menu = FormDropdown.Menu;

InfiniteDropdown.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  placeholder: PropTypes.string,
  totalCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  "data-testid": PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  renderItem: PropTypes.func,
  withSearch: PropTypes.bool,
  multiple: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onStateChange: PropTypes.func,
  renderSelected: PropTypes.func,
};

InfiniteDropdown.defaultProps = {
  multiple: false,
  limit: 10,
  "data-testid": "infinite-dropdown",
};

export { InfiniteDropdown };
