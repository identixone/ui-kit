import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderAppMenu } from "./StyledHeaderAppMenu";
import { HeaderAppMenuLink } from "./HeaderAppMenuLink";

HeaderAppMenu.Link = HeaderAppMenuLink;

function Link(props) {
  const { id, title, to } = props;

  return (
    <HeaderAppMenu.Link to={to} key={id} content={title}>
      {title}
    </HeaderAppMenu.Link>
  );
}

Link.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function HeaderAppMenu({ links, children }) {
  return (
    <StyledHeaderAppMenu>
      {Array.isArray(links) && links.length ? links.map(Link) : children}
    </StyledHeaderAppMenu>
  );
}

HeaderAppMenu.propTypes = {
  links: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default HeaderAppMenu;
