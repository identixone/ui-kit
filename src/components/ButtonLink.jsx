/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StyledButton from "./Button/StyledButton";
import { Link } from "react-router-dom";

const LinkWithOmittedProps = ({
  isRounded,
  size,
  buttonTheme,
  fit,
  ...restProps
}) => <Link {...restProps} />;

LinkWithOmittedProps.propTypes = {
  isRounded: PropTypes.bool,
  size: PropTypes.string,
  buttonTheme: PropTypes.string,
  fit: PropTypes.string,
};

export const ButtonLink = styled(StyledButton).attrs(() => ({
  as: LinkWithOmittedProps,
}))`
  text-decoration: none;
  -webkit-appearance: none;
`;

ButtonLink.defaultProps = {
  isRounded: true,
  size: "medium",
  buttonTheme: "light",
  fit: "rect",
};
