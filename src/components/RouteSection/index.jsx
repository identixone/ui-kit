import React from "react";
import PropTypes from "prop-types";

import StyledRouteSection from "./StyledRouteSection";
import RouteSectionOverlay from "./RouteSectionOverlay";
import RouteSectionSpinner from "./RouteSectionSpinner";
import RouteSectionHider from "./RouteSectionHider";

export class RouteSection extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]).isRequired,
    name: PropTypes.string,
    isLoading: PropTypes.bool,
    isLoaded: PropTypes.bool,
    setFirstLoad: PropTypes.func,
    hasFetching: PropTypes.bool,
    hasOverlay: PropTypes.bool,
    transparentForEvents: PropTypes.bool,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    isCentered: PropTypes.bool,
  };

  static defaultProps = {
    hasFetching: false,
    hasOverlay: true,
  };

  componentDidMount() {
    if (!this.props.hasFetching) {
      this.props.setFirstLoad(this.props.name);
    }
  }

  componentDidUpdate(prevProps) {
    const { name, setFirstLoad, isLoaded } = this.props;

    if (
      this.props.hasFetching &&
      !isLoaded &&
      prevProps.isLoading &&
      !this.props.isLoading
    ) {
      setFirstLoad(name);
    }
  }

  render() {
    const {
      children,
      isLoaded,
      isLoading,
      isCentered,
      hasOverlay,
      height,
      transparentForEvents,
      className,
    } = this.props;

    return (
      <StyledRouteSection className={className}>
        <RouteSectionHider isHide={!isLoaded} isCentered={isCentered}>
          {children}
        </RouteSectionHider>

        {isLoading && !isLoaded && (
          <RouteSectionSpinner transparentForEvents={transparentForEvents} />
        )}
        {isLoading && isLoaded && hasOverlay && (
          <RouteSectionOverlay height={height} />
        )}
      </StyledRouteSection>
    );
  }
}
