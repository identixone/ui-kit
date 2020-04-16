import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors } from "../../style";

function getStyles({ level }) {
  return {
    1: css`
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.5px;
      font-weight: normal;
    `,
    2: css`
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    `,
    3: css`
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.36px;
      font-weight: normal;
    `,
  }[level];
}

export const Title = styled.h1.attrs(({ level }) => ({
  as: `h${level}`,
}))`
  font-family: Open Sans, Helvetica Neue, sans-serif;
  margin: 0;
  color: ${colors.slate};

  ${getStyles}
`;

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
};

Title.defaultProps = {
  level: 1,
};
