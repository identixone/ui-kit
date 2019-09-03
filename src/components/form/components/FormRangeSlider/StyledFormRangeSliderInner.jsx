import styled from "styled-components";
import NoUIslider from "nouislider-react";

import "nouislider/distribute/nouislider.css";
import "./styles.css";

export const StyledFormRangeSliderInner = styled(NoUIslider)`
  width: ${({ width }) => (width ? width + "px" : "100%")};
`;
