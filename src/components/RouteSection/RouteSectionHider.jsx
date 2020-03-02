import styled, { css } from "styled-components";

import StyledNoticeContainer from "../../components/Notice/StyledNoticeContainer";

const centeredStyles = css`
  height: 100%;
  align-items: center;
  justify-content: center;

  > ${StyledNoticeContainer} {
    position: relative;
    top: -24px;
  }
`;
/**
 * Компонент нужен только для того,
 * чтобы children рендерились всегда (и не срабатывал CDM несколько раз)
 */
const RouteSectionHider = styled.div`
  display: ${({ isHide }) => (isHide ? "none" : "flex")};
  width: 100%;
  flex: 100%;
  flex-direction: column;
  padding-bottom: 30px;
  padding-top: 26px;

  ${({ isCentered }) => isCentered && centeredStyles}
`;

export default RouteSectionHider;
