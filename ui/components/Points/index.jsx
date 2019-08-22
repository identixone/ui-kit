import React from "react";
import PropTypes from "prop-types";

import Point from "./StyledPoint";
import PointsWrapper from "./StyledPointsWrapper";
import PointsContainer from "./StyledPointsContainer";

export default function Points({ total }) {
  return (
    <PointsContainer>
      <PointsWrapper>{getPoints(total)}</PointsWrapper>
    </PointsContainer>
  );
}

Points.propTypes = {
  total: PropTypes.int,
};

function getPoints(total) {
  const points = [];
  for (let i = 1; i <= total; i++) {
    points.push(<Point key={i} />);
  }
  return points;
}
