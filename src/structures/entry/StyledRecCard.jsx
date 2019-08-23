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
  overflow: hidden;
  border-radius: 4px;
  background-color: ${boxBackgroundColor || colors.whiteGray};
`;

export default StyledRecCard;
