import styled, { css } from "styled-components";

const StyledFormDropdown = styled.div`
  position: relative;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ isFetching }) =>
    isFetching &&
    css`
      opacity: 0.8;
    `}
`;

export { StyledFormDropdown };
