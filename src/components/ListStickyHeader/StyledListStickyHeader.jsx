import styled from "styled-components";
import StickyBox from "react-sticky-box";

const StyledListStickyHeader = styled(StickyBox)`
  z-index: 10;
  transition: transform 120ms ease-in;
`;

export { StyledListStickyHeader };
