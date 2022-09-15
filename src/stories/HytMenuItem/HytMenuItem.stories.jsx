import React from "react";
import { HytMenuItem } from "./HytMenuItem";

export default {
  title: "Example/HytMenuItem",
  component: HytMenuItem,
};

const Template = (args) => <HytMenuItem {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  icon: "home",
  label: "Home",
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  icon: "logout",
  label: "Logout",
};
