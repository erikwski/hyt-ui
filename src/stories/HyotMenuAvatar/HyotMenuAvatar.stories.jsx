import React from "react";
import { HyotMenuAvatar } from "./HyotMenuAvatar";

export default {
  title: "Example/HyotMenuAvatar",
  component: HyotMenuAvatar,
};

const Template = (args) => <HyotMenuAvatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  role: "Administrator",
  company: "AC Software",
};

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
  role: "Administrator",
  company: "AC Software",
};
