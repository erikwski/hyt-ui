import React from "react";
import { HytMenu } from "./HytMenu";

export default {
  title: "Example/HytMenu",
  component: HytMenu,
};

const Template = (args) => <HytMenu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  logo: {},
  pages: [
    {
      icon: "",
      label: "",
      onClick: "",
    },
  ],
  user: {
    role: "test",
    company: "ttt",
    onClick: () => {},
  },
};
