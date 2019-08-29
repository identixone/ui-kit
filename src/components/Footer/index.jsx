import React from "react";
import PropTypes from "prop-types";

import StyledFooter from "./StyledFooter";
import FooterInner from "./FooterInner";
import FooterLogo from "./FooterLogo";
import FooterText from "./FooterText";
import FooterCredits from "./FooterCredits";
import FooterDisclaimer from "./FooterDisclaimer";

export function Footer({ isDisclaimerShowing, Disclamer, Credits }) {
  return (
    <StyledFooter isDisclaimerShowing={isDisclaimerShowing}>
      <FooterInner>
        <FooterLogo />
        <FooterText>
          {isDisclaimerShowing && (
            <FooterDisclaimer>{Disclamer}</FooterDisclaimer>
          )}
          {Credits && <FooterCredits>{Credits}</FooterCredits>}
        </FooterText>
      </FooterInner>
    </StyledFooter>
  );
}

Footer.propTypes = {
  isDisclaimerShowing: PropTypes.bool,
  Disclamer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  Credits: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
};
