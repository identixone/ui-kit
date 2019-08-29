import styled from "styled-components";

import { PopupContainer } from "../PopupContainer";

const TooltipContainer = styled(PopupContainer)`
  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;
`;

export default TooltipContainer;
