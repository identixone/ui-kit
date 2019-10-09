import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { noop } from "lodash-es";

export const ListLayoutContext = React.createContext({
  isUserVisitList: false,
  setIsUserVisitList: noop,
});

export function useListLayoutContext({ isListFetching } = {}) {
  const { isUserVisitList, setIsUserVisitList } = useContext(ListLayoutContext);

  useEffect(() => {
    if (!isListFetching && !isUserVisitList) {
      setIsUserVisitList(true);
    }
  }, [isListFetching]);
}

export const withListLayoutContextProvider = Component => {
  function WithListLayoutContextProvider(props) {
    const [isUserVisitList, setIsUserVisitList] = useState(false);

    return (
      <ListLayoutContext.Provider
        value={{ isUserVisitList, setIsUserVisitList }}
      >
        <Component {...props} ref={props.forwardedRef} />
      </ListLayoutContext.Provider>
    );
  }

  WithListLayoutContextProvider.propTypes = {
    forwardedRef: PropTypes.object,
  };

  return React.forwardRef((props, ref) => {
    return <WithListLayoutContextProvider {...props} forwardedRef={ref} />;
  });
};
