import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean } from "@storybook/addon-knobs";

import { Footer } from "./index.jsx";
import TextBold from "../../components/Text/TextBold";
import TextThin from "../../components/Text/TextThin";

storiesOf("Footer", module).add("default", () => {
  const isDisclaimerShowing = boolean("Is disclaimer showing", true);

  return (
    <Footer
      isDisclaimerShowing={isDisclaimerShowing}
      Disclamer={
        <React.Fragment>
          <p>
            s Your data is safe, as we’re GDPR (regulation (EU) 2016/679)
            compliant. The cloud does not keep any data except for fully
            impersonalized, in the database. All data is kept on servers in EU.
          </p>
          <span>© 2019 DATA CORPORATION OÜ, ESTONIA</span>
        </React.Fragment>
      }
      Credits={
        <React.Fragment>
          <TextBold>Identix.one Cloud Platform</TextBold>
          <br />
          <TextThin>API v1.13, frontend v2.1.2</TextThin>
        </React.Fragment>
      }
    />
  );
});
