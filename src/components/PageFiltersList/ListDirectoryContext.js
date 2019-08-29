import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { noop } from "lodash-es";

export const ListDirectoryContext = React.createContext({
  isUserVisitList: false,
  setIsUserVisitList: noop,
});

export const withListDirectoryContextProvider = Component => {
  function WithListDirectoryContextProvider(props) {
    const [isUserVisitList, setIsUserVisitList] = useState(false);

    return (
      <ListDirectoryContext.Provider
        value={{ isUserVisitList, setIsUserVisitList }}
      >
        <Component {...props} ref={props.forwardedRef} />
      </ListDirectoryContext.Provider>
    );
  }

  WithListDirectoryContextProvider.propTypes = {
    forwardedRef: PropTypes.object,
  };

  return React.forwardRef((props, ref) => {
    return <WithListDirectoryContextProvider {...props} forwardedRef={ref} />;
  });
};

export const withListDirectoryContext = Component => {
  function WithListDirectoryContext(props) {
    return (
      <ListDirectoryContext.Consumer>
        {context => (
          <Component {...context} {...props} ref={props.forwardedRef} />
        )}
      </ListDirectoryContext.Consumer>
    );
  }

  WithListDirectoryContext.propTypes = {
    forwardedRef: PropTypes.object,
  };

  return React.forwardRef((props, ref) => {
    return <WithListDirectoryContext {...props} forwardedRef={ref} />;
  });
};

export const withListDirectoryList = Component => {
  function WithListDirectoryList(props) {
    useEffect(() => {
      if (!props.isListFetching && !props.isUserVisitList) {
        props.setIsUserVisitList(true);
      }
    }, [props.isListFetching]);

    return <Component {...props} ref={props.forwardedRef} />;
  }

  WithListDirectoryList.propTypes = {
    isUserVisitList: PropTypes.bool.isRequired,
    isListFetching: PropTypes.bool.isRequired,
    setIsUserVisitList: PropTypes.func.isRequired,
    forwardedRef: PropTypes.object,
  };

  const WithListDirectoryListWithForwardedRef = React.forwardRef(
    (props, ref) => {
      return <WithListDirectoryList {...props} forwardedRef={ref} />;
    }
  );

  return withListDirectoryContext(WithListDirectoryListWithForwardedRef);
};
