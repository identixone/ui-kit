import styled from "styled-components";

const PersonsListPersonDataItem = styled.p`
  margin-top: 0;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -0.8px;

  &:not(:last-child) {
    margin-bottom: 3px;
  }

  b {
    font-weight: 600;
  }
`;

export default PersonsListPersonDataItem;
