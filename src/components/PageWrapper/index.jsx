import React from "react";
import PropTypes from "prop-types";

import StyledPageWrapper from "./StyledPageWrapper";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function PageWrapper({ children }) {
  return (
    <StyledPageWrapper>
      <Header />
      {children}
      <Footer />
    </StyledPageWrapper>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};
