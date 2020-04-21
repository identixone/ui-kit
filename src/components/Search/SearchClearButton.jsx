import styled from "styled-components";

import { Button } from "../Button";

import { colors } from "../../style";

const SearchClearButton = styled(Button)`
  position: absolute;
  right: 16px;
  padding: 0;
  display: flex;
  height: 100%;
  align-items: center;
  color: ${colors.darkBlack};
`;

export { SearchClearButton };
