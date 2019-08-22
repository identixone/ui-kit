import React from "react";
import PropTypes from "prop-types";
import StyledWrapper from "./StyledWrapper";

import Header from "../../structures/Header";
import Footer from "../../structures/Footer";

function PageWrapper({ children }) {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};

export default PageWrapper;
