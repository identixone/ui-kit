import styled from "styled-components";

import { useFlash } from "./hooks/use-flash";

const Flash = styled.span`
  transition: opacity 120ms ease-in-out;
  opacity: ${({ isFlashing }) => (isFlashing ? 0.1 : 1)};
`;

export { Flash, useFlash };
