import styled from "styled-components";
import theme from "styled-theming";

import colors from "../../../themes/colors";

const boxBackgroundColor = theme("mode", {
  new: colors.navyBlue,
  reinit: colors.darkBlue,
  exact: colors.lightGreen,
  ha: colors.lightYellow,
  junk: colors.lightRed,
  nm: colors.gray,
  accepted: colors.green,
  declined: colors.red,
});

const StyledType = styled.div`
  font-size: 17px;
  font-weight: 300;
  line-height: 23px;
  text-align: center;
  text-transform: lowercase;
  color: ${colors.whiteSimple};
  margin-top: ${props => (props.hasTitle ? "0" : "30px")};
  background-color: ${colors.slate};
  background-color: ${boxBackgroundColor};
  padding-bottom: 3px;
  border-radius: 3px;
`;

export default StyledType;
