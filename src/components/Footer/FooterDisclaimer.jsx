import styled from "styled-components";

const FooterDisclaimer = styled.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 300;
  color: #223b55;
  width: 500px;
  text-align: left;

  p {
    margin-top: 0;

    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

export { FooterDisclaimer };
