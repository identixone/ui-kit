import React, { Component } from "react";
import PropTypes from "prop-types";

import { RouteSection } from "../RouteSection";

import { withErrorPageBoundary } from "../ErrorPageBoundary";

const PageLoaderContext = React.createContext({
  loadedPages: {},
  setFirstLoad: () => {},
});

export class PageLoaderComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  };

  static RouteSection = ({
    children,
    isLoading,
    hasFetching,
    name,
    hasOverlay,
    wrapperHeight,
    transparentForEvents,
    className,
    isCentered,
  }) => {
    return (
      <PageLoaderContext.Consumer>
        {({ loadedPages, setFirstLoad }) => {
          const isPageLoaded = Boolean(loadedPages[name]);

          return (
            <RouteSection
              name={name}
              isLoading={isLoading}
              isLoaded={isPageLoaded}
              setFirstLoad={setFirstLoad}
              hasFetching={hasFetching}
              hasOverlay={hasOverlay}
              transparentForEvents={transparentForEvents}
              height={wrapperHeight}
              className={className}
              isCentered={isCentered}
            >
              {children}
            </RouteSection>
          );
        }}
      </PageLoaderContext.Consumer>
    );
  };

  // Добавляет страницу в загруженные
  setFirstLoad = (name) => {
    this.setState((state) => ({
      ...state,
      loadedPages: {
        ...state.loadedPages,
        [name]: true,
      },
    }));
  };

  state = {
    setFirstLoad: this.setFirstLoad,
    loadedPages: {},
  };

  render() {
    const { children } = this.props;

    return (
      <PageLoaderContext.Provider value={this.state}>
        {children}
      </PageLoaderContext.Provider>
    );
  }
}

export const PageLoader = withErrorPageBoundary(PageLoaderComponent);
export const { RouteSection: PageLoaderRoute } = PageLoaderComponent;
