import styled from "styled-components";

import StickyBox from "react-sticky-box";

const StyledListLayoutDetailed = styled(StickyBox)`
  position: relative;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: rgba(162, 182, 189, 0.2) 0px 0px 80px 0px;
  flex: 334px 0 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 220px;
  transition: transform 120ms ease-in;
`;

export { StyledListLayoutDetailed };
