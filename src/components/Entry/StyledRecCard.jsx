import styled from "styled-components";
import theme from "styled-theming";
import colors from "../../themes/colors";

const boxBackgroundColor = theme("mode", {
  default: colors.whiteGray,
  active: colors.whiteBlue,
  new: colors.whiteYellow,
});

const StyledRecCard = styled.div`
  position: relative;
  padding: 19px 10px 10px 30px;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  border-radius: 4px;
  line-height: 18px;
  height: 100%;
  background-color: ${boxBackgroundColor || colors.whiteGray};
  height: 100%;
`;

export default StyledRecCard;
