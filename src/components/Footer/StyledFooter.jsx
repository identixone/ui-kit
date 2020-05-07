import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: ${({ isDisclaimerShowing }) =>
    isDisclaimerShowing ? "42px" : "50px"};
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
`;

export { StyledFooter };
