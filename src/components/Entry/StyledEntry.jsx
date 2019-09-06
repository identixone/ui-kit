import styled, { css } from "styled-components";
import { EntryAdditionalButton } from "../EntryAdditionalButtons/EntryAdditionalButton";

const StyledEntry = styled.li`
  height: 121px;
  overflow: hidden;
  cursor: ${props => (props.pointer ? "pointer" : "")};
  float: left;
  width: 938px;
  opacity: ${props => (props.deleted ? "0.4" : "1")};
  ${props =>
    props.mode === "entries"
      ? css`
          margin: 4px 0 4px 0;
          padding: 0;
          background-color: #fff;
        `
      : css`
          overflow: hidden;
          position: relative;
          padding: 15px 0 10px 0;
          border-bottom: 1px solid #f1f1f1;
        `}

  :last-child {
    border-bottom: none;
  }

  ${EntryAdditionalButton} {
    display: none;
  }

  :hover {
    ${EntryAdditionalButton} {
      display: block;
    }
  }
`;

export default StyledEntry;
