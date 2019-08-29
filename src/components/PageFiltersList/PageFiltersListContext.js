import React, { createContext } from "react";

const initialContext = {
  searchQuery: "",
  filters: {},
  pagination: {},
};

const PageFiltersListContext = createContext(initialContext);

export const withPageFiltersListContext = WrappedComponent => {
  const WithPageFiltersListContext = props => (
    <PageFiltersListContext.Consumer>
      {context => <WrappedComponent {...props} {...context} />}
    </PageFiltersListContext.Consumer>
  );

  return WithPageFiltersListContext;
};

export default PageFiltersListContext;
