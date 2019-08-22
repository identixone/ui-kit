import styled from "styled-components";

import StyledPopupContainer from "../StyledPopupContainer.js";

const TooltipContainer = styled(StyledPopupContainer)`
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
`;

export default TooltipContainer;
