import styled from "styled-components";

const TooltipInner = styled.div`
  height: 100%;
  padding: 8px 14px;
  background-color: #fff;
  border: 3px solid #000;
  position: relative;

  /* Arrow */
  :after,
  :before {
    content: " ";
    right: 100%;
    top: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  :after {
    border-color: rgba(255, 255, 255, 0);
    border-right-color: #fff;
    border-width: 6px;
    margin-top: -6px;
  }

  :before {
    border-color: rgba(0, 0, 0, 0);
    border-right-color: #000;
    border-width: 10px;
    margin-top: -10px;
  }
`;

export { TooltipInner };
