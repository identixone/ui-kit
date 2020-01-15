import styled from "styled-components";
// a fixed width is needed for correct work in firefox (width equals line-height)
const EntryCardPhotoTitle = styled.p`
  font-size: 13px;
  transform: rotate(-180deg);
  text-transform: uppercase;
  writing-mode: vertical-lr;
  margin: 0;
  width: 19px;
`;

export { EntryCardPhotoTitle };
