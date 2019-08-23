import styled from "styled-components";

export const HeaderTopMenuLinksLink = styled.a.attrs({ target: "_blank" })`
  color: #000;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  border-bottom: 1px solid transparent;
  box-sizing: border-box;
  text-transform: lowercase;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 50px;
  }

  &:hover {
    border-bottom: 1px solid #ffc228;
  }
`;
