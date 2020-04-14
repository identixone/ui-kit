import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutDetailedInner } from "./ListLayoutDetailedInner";
import { ListLayoutContext } from "../index";

function ListLayoutDetailed({
  offsetTop,
  children,
  "data-testid": testId,
  className,
}) {
  const { appHeaderOffset } = useContext(ListLayoutContext);

  return (
    <StyledListLayoutDetailed
      offsetTop={offsetTop}
      style={{
        transform: `translateY(${appHeaderOffset}px)`,
      }}
      className={className}
    >
      <ListLayoutDetailedInner data-testid={testId}>
        {children}
      </ListLayoutDetailedInner>
    </StyledListLayoutDetailed>
  );
}

ListLayoutDetailed.propTypes = {
  offsetTop: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  "data-testid": PropTypes.string,
  className: PropTypes.string,
};

ListLayoutDetailed.defaultProps = {
  offsetTop: 120,
};

export { ListLayoutDetailed };
