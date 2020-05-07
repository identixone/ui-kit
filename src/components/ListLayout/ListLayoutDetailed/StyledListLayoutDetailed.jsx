import styled from "styled-components";

import StickyBox from "react-sticky-box";

const StyledListLayoutDetailed = styled(StickyBox)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: rgba(162, 182, 189, 0.2) 0px 0px 80px 0px;
  flex: 334px 0 0;
  transition: transform 120ms ease-in;
  padding: 20px;
  box-sizing: border-box;
  min-height: 214px;
`;

export { StyledListLayoutDetailed };
