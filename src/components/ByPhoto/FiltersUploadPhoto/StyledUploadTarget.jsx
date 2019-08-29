import styled from "styled-components";

const StyledUploadTarget = styled.div`
  background: #ffffff;
  border: 3px dashed;
  border-color: #ddd;
  border-radius: 0;
  color: #444;
  margin: 0;
  padding: 25px;
  text-align: center;
  transition: all 0.2s ease;
  cursor: ${props => (props.isLockUpload ? "default" : "pointer")};
  :hover {
    border-color: #bbb;
  }
  cursor: ${props => props.isLockDrop && "no-drop"};
}
`;

export default StyledUploadTarget;
