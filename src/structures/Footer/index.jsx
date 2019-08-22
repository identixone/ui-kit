import React from "react";
import PropTypes from "prop-types";

import StyledFooter from "./StyledFooter";

import FooterInner from "./FooterInner";
import FooterLogo from "./FooterLogo";
import FooterText from "./FooterText";
import FooterCredits from "./FooterCredits";
import TextBold from "./../../components/TextBold.jsx";
import TextThin from "./../../components/TextThin.jsx";
import FooterDisclaimer from "./FooterDisclaimer";

Footer.propTypes = {
  isDisclaimerShowing: PropTypes.bool,
};

export default function Footer({ isDisclaimerShowing }) {
  return (
    <StyledFooter isDisclaimerShowing={isDisclaimerShowing}>
      <FooterInner>
        <FooterLogo />
        <FooterText>
          {isDisclaimerShowing && (
            <FooterDisclaimer>
              <p>
                Your data is safe, as we’re GDPR (regulation (EU) 2016/679)
                compliant. The cloud does not keep any data except for fully
                impersonalized, in the database. All data is kept on servers in
                EU.
              </p>
              <span>© 2019 DATA CORPORATION OÜ, ESTONIA</span>
            </FooterDisclaimer>
          )}
          <FooterCredits>
            <TextBold>Identix.one Cloud Platform</TextBold>
            <br />
            <TextThin>API v1.13, frontend v{process.env.VERSION}</TextThin>
          </FooterCredits>
        </FooterText>
      </FooterInner>
    </StyledFooter>
  );
}
