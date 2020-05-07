import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

import StyledRouteSection from "./StyledRouteSection";
import RouteSectionSpinner from "./RouteSectionSpinner";

function Spinner({ height }) {
  return (
    <StyledRouteSection height={height}>
      <RouteSectionSpinner height={40} />
    </StyledRouteSection>
  );
}

Spinner.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const withTransition = (RouteComponent, spinnerHeight) => {
  const WithTransition = (props) => (
    <CSSTransition
      in={props.match != null}
      appear={true}
      exit={false}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      <React.Suspense fallback={<Spinner height={spinnerHeight} />}>
        <RouteComponent {...props} />
      </React.Suspense>
    </CSSTransition>
  );

  WithTransition.propTypes = {
    match: PropTypes.object,
  };

  return WithTransition;
};
