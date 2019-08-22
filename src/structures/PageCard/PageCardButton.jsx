import styled from "styled-components";

import Button from "../../components/Button";

const PageCardButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  opacity: 0.9;
  box-shadow: ${({ dark }) =>
    dark
      ? "0 2px 5px 0 rgba(0, 0, 0, 0.26)"
      : "0 2px 5px 0 rgba(0, 0, 0, 0.13)"};

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }

  &:hover {
    opacity: 1;
  }
`;

export default PageCardButton;
