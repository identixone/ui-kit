import React from "react";
import PropTypes from "prop-types";

import { StyledHeaderTopMenuLinks } from "./StyledHeaderTopMenuLinks";
import { HeaderTopMenuLinksLink } from "./HeaderTopMenuLinksLink";

HeaderTopMenuLinks.Link = HeaderTopMenuLinksLink;

function Link(props) {
  const { id, title, to } = props;

  return (
    <HeaderTopMenuLinks.Link href={to} key={id}>
      {title}
    </HeaderTopMenuLinks.Link>
  );
}

Link.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function HeaderTopMenuLinks({ links, children }) {
  return (
    <StyledHeaderTopMenuLinks>
      {Array.isArray(links) && links.length ? links.map(Link) : children}
    </StyledHeaderTopMenuLinks>
  );
}

HeaderTopMenuLinks.propTypes = {
  links: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default HeaderTopMenuLinks;
