import styled from "styled-components";
import colors from "../../ui/assets/common/themes/colors";

const StyledFacesize = styled.div`
  position: absolute;
  opacity: 0.9;
  top: -1px;
  width: 35px;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  color: ${colors.whiteSimple};
  background-color: ${colors.blueGray};
  border-radius: 4px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
`;

export default StyledFacesize;
