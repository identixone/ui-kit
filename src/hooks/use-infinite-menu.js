import { useState, useEffect } from "react";
import { useListFetch } from "./use-list-fetch";

function useInfiniteMenu({ limit, hasNext, fetchOptions }) {
  const [isListEnds, setIsListEnds] = useState(!hasNext);

  const { pagination, setPagination, setFetchParams } = useListFetch({
    fetchList: (params) => {
      fetchOptions({ ...params, meta: { clearList: params.offset === 0 } });
    },
    pagination: { limit, offset: 0 },
  });

  useEffect(() => {
    setIsListEnds(!hasNext);
  }, [hasNext]);

  function searchOptions(value) {
    setFetchParams({
      q: value,
      offset: 0,
    });
  }

  function fetchNext() {
    if (!isListEnds) {
      setPagination({ offset: pagination.offset + pagination.limit });
    }
  }

  return {
    searchOptions,
    fetchNext,
  };
}

export { useInfiniteMenu };
