import React from "react";
import { HyotMenu } from "./HyotMenu";

export default {
  title: "Example/HyotMenu",
  component: HyotMenu,
};

const Template = (args) => <HyotMenu {...args} />;

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