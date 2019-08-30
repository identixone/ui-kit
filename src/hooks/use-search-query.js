import qs from "query-string";
import { push } from "connected-react-router";

export function useSearchQuery(state, dispatch) {
  return {
    searchQuery: qs.parse(state.router.location.search).q || "",
    setSearchQuery: q => {
      dispatch(
        push({
          search: qs.stringify({ q }),
        })
      );
    },
  };
}
