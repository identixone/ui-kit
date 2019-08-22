import styled from "styled-components";
import NoUIslider from "nouislider-react";

import "nouislider/distribute/nouislider.css";
import "./styles.css";

const StyledFormRangeSlider = styled(NoUIslider)`
  width: ${({ width }) => (width ? width + "px" : "100%")};
`;

export default StyledFormRangeSlider;
