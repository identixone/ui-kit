import styled, { css } from "styled-components";

const checkedColors = {
  blue: "#34a7c1",
  "dark-gray": "#5d7784",
};
const backColors = {
  blue: "#eeeeee",
  "dark-gray": "#DDDDDD",
};

const circleSizes = {
  s: 18,
  m: 22,
};

const barHeights = {
  s: 12,
  m: 16,
};

const barWidths = {
  s: 28,
  m: 40,
};

const checkedStyles = css`
  border-color: #34a7c1;
  background-color: ${({ theme }) => checkedColors[theme]};
  box-shadow: 3px 2px 18px 0 rgba(0, 0, 0, 0.2);
`;

const calcOffset = ({ checked, size }) => {
  return !checked ? "0px" : barWidths[size] - circleSizes[size] / 2 - 3 + "px";
};

const FormSwitchLabel = styled.label`
  display: block;
  cursor: pointer;
  padding: 0;
  border: 0 solid ${({ checked }) => (checked ? "#34a7c1" : "#eeeeee")};
  border-radius: 22px;
  background-color: ${({ theme }) => backColors[theme]};
  height: ${({ size }) => barHeights[size] + "px"};
  width: ${({ size }) => barWidths[size] + "px"};

  &:before {
    content: "";
    display: block;
    height: ${({ size }) => circleSizes[size] + "px"};
    width: ${({ size }) => circleSizes[size] + "px"};
    margin: -3px;
    background: #9ba7ac;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${calcOffset};
    transition: left 120ms ease-in-out;
    border-radius: 50%;
    box-shadow: 0 2px 8px 0 #aaa;

    ${({ checked }) => (checked ? checkedStyles : "")}
  }
`;

export default FormSwitchLabel;
