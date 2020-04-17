import styled from "styled-components";

const StyledPageCard = styled.section`
  position: relative;
  box-sizing: border-box;
  padding: 32px 64px;
  box-shadow: 0px 0px 80px rgba(162, 182, 189, 0.2);
  /* чтобы тень была выше окружающих отступов */
  z-index: 2;
`;

export { StyledPageCard };
