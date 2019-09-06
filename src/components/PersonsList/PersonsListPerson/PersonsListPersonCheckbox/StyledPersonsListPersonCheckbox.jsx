import styled from "styled-components";

import { FormCheckboxMarker } from "../../../form/components/FormCheckbox";

const StyledPersonsListPersonCheckbox = styled.label`
  position: absolute;
  left: 4px;
  top: 4px;
  transition: opacity 120ms ease-in-out;

  opacity: ${({ isHidden }) => {
    return isHidden ? 0 : 1;
  }};

  ${FormCheckboxMarker} {
    background-color: #f9f9f9;
  }
`;

export default StyledPersonsListPersonCheckbox;
