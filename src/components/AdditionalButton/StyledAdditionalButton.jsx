import styled from "styled-components";

import Button from "../Button";
import colors from "../../themes/colors";

const StyledAdditionalButton = styled(Button)`
  display: none;
  width: 100%;
  opacity: 0.7;
  color: ${colors.black};
  font-size: 14px;
  font-weight: 600;
  line-height: 37px;
  background-color: ${colors.grayBlueDark2};
  border-radius: 0 0 0 5px;
  text-align: center;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.1s linear;
  padding: 0px 22px;

  &:hover {
    background-color: ${colors.blueWhite};
    color: ${colors.black};
  }
`;

export default StyledAdditionalButton;
