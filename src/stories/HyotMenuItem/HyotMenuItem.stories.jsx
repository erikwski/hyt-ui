import React from "react";
import { HyotMenuItem } from "./HyotMenuItem";

export default {
  title: "Example/HyotMenuItem",
  component: HyotMenuItem,
};

const Template = (args) => <HyotMenuItem {...args} />;

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
