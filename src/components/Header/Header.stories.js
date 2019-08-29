import React from "react";
import { storiesOf } from "@storybook/react";
import { text, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Header, HeaderTopMenu, HeaderAppMenu } from "./index.jsx";
import { HeaderTopMenuLinks, HeaderTopMenuUser } from "./HeaderTopMenu";

storiesOf("Header", module).add("default", () => {
  const username = text("Username", "Arunoda Susiripala");

  const topLinks = object("Top links", [
    {
      id: 1,
      title: "Home - identix.one",
      to: "https://identix.one",
    },
    {
      id: 2,
      title: "Knowledgebase",
      to: "https://identix.one",
    },
    {
      id: 3,
      title: "Syshealth",
      to: "https://identix.one",
    },
  ]);

  const appLinks = object("App links", [
    {
      id: 1,
      title: "Enties",
      to: "/entries",
    },
    {
      id: 2,
      title: "Sources",
      to: "/sources",
    },
    {
      id: 3,
      title: "Persons lists",
      to: "/persons-lists",
    },
    {
      id: 4,
      title: "Notifications",
      to: "/notifications",
    },
    {
      id: 5,
      title: "Demo",
      to: "/demo",
    },
  ]);

  return (
    <Header>
      <HeaderTopMenu>
        <HeaderTopMenuLinks links={Object.values(topLinks)} />
        <HeaderTopMenuUser username={username} onLogout={action("Logout")} />
      </HeaderTopMenu>
      <HeaderAppMenu links={Object.values(appLinks)} />
    </Header>
  );
});
