import styled from "styled-components";

import { colors } from "../style";

export const FaceSize = styled.div`
  position: absolute;
  top: 0px;
  width: 36px;
  height: 18px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  color: ${colors.whiteSimple};
  background-color: ${colors.blueGray};
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;
