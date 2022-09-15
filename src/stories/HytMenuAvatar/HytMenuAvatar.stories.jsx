import React from "react";
import { HytMenuAvatar } from "./HytMenuAvatar";

export default {
  title: "Example/HytMenuAvatar",
  component: HytMenuAvatar,
};

const Template = (args) => <HytMenuAvatar {...args} />;

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
