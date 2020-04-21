import styled from "styled-components";

import { Spinner } from "../../components/Spinner";

const RouteSectionSpinner = styled(Spinner).attrs(() => ({ height: 40 }))`
  text-align: center;
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  background-color: #fff;
  z-index: 1000;
  pointer-events: ${(props) => (props.transparentForEvents ? "none" : "auto")};

  svg {
    margin-top: -34px;
  }
`;

export default RouteSectionSpinner;
