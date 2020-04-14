import React from "react";
import PropTypes from "prop-types";

import { useContext } from "react";

import { StyledListLayoutDetailed } from "./StyledListLayoutDetailed";
import { ListLayoutContext } from "../index";

function ListLayoutDetailed({ offsetTop, children }) {
  const { appHeaderOffset } = useContext(ListLayoutContext);

  return (
    <StyledListLayoutDetailed
      offsetTop={offsetTop}
      style={{
        transform: `translateY(${appHeaderOffset}px)`,
      }}
    >
      {children}
    </StyledListLayoutDetailed>
  );
}

ListLayoutDetailed.propTypes = {
  offsetTop: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

ListLayoutDetailed.defaultProps = {
  offsetTop: 120,
};

export { ListLayoutDetailed };
