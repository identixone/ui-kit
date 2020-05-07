import { useState, useCallback } from "react";
import {
  useSetState,
  usePrevious,
  useUpdateEffect,
  useDeepCompareEffect,
} from "react-use";
import { debounce, isEqual } from "lodash-es";

function usePagination(defaultPagination) {
  const [pagination, setPagination] = useSetState(defaultPagination);

  return { pagination, setPagination };
}

function useSearchQuery(initialSearchQuery) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  return { searchQuery, setSearchQuery };
}

function useFetchParams(initialFetchParams = {}) {
  const [fetchParams, setFetchParams] = useSetState(initialFetchParams);

  return { fetchParams, setFetchParams };
}

export function useListFetch({
  /**
   * При использовании хука
   * во избежание множественнго пересоздания debouncedFetchList
   * следует всегда передавать ссылку на одну и ту же fetchList
   * обновить fetchList следует только тогда, когда нужно
   * обновить ее замыкание
   * */

  fetchList,
  pagination: defaultPagination = { limit: 10, offset: 0 },
  searchQuery: initialSearchQuery = "",
  clearList = true,
  searchQueryHook = useSearchQuery,
  fetchOnInitial = true,
  onFetchParamsChange,
}) {
  if (!(fetchList instanceof Function)) {
    console.warn("You did not specify fetchList function");
  }

  const { searchQuery, setSearchQuery } = searchQueryHook(initialSearchQuery);
  const { pagination, setPagination } = usePagination(defaultPagination);

  const initialFetchParams = {
    q: searchQuery,
    limit: pagination.limit,
    offset: pagination.offset,
  };
  const { fetchParams, setFetchParams } = useFetchParams(initialFetchParams);

  const prevFetchParams = usePrevious(fetchParams);

  const debouncedFetchList = useCallback(debounce(fetchList, 500), [fetchList]);

  function fetchListWithParams(hasDebounce) {
    const params = { ...fetchParams, meta: { clearList, hasDebounce } };

    if (hasDebounce) {
      debouncedFetchList(params);
    } else {
      fetchList(params);
    }
  }

  function resetPagination() {
    if (pagination.offset !== 0) {
      setPagination({ offset: 0 });
    } else {
      fetchListWithParams();
    }
  }

  useDeepCompareEffect(() => {
    if (onFetchParamsChange) {
      onFetchParamsChange(prevFetchParams, fetchParams);
    }

    if (prevFetchParams === undefined && !fetchOnInitial) {
      return;
    }

    const hasDebounce = prevFetchParams && prevFetchParams.q !== fetchParams.q;

    if (fetchParams.q !== searchQuery) {
      setSearchQuery(fetchParams.q);
    }

    const { offset, limit } = fetchParams;

    if (!isEqual({ offset, limit }, pagination)) {
      setPagination({ offset, limit });
    }

    fetchListWithParams(hasDebounce);
  }, [fetchParams]);

  useUpdateEffect(() => {
    setFetchParams({ q: searchQuery, offset: 0 });
  }, [searchQuery]);

  useUpdateEffect(() => {
    setFetchParams({ limit: pagination.limit, offset: pagination.offset });
  }, [pagination]);

  function changeOffset(offset) {
    setPagination({ ...pagination, offset });
  }

  return {
    pagination,
    setPagination,
    resetPagination,

    fetchParams,
    setFetchParams,

    searchQuery,
    setSearchQuery,

    fetchListWithParams,

    offset: pagination.offset,
    changeOffset,
  };
}
