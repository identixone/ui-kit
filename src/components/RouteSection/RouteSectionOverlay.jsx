import styled from "styled-components";

const RouteSectionOverlay = styled.div`
  position: absolute;
  top: 20px;
  left: -20px;
  width: 120%;
  height: ${(props) => (props.height ? props.height + "px" : "100%")};

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    opacity: 0.8;
  }
`;

export default RouteSectionOverlay;
