import React from "react";
import { HytButton } from "./HytButton";

export default {
  title: "Example/HytButton",
  component: HytButton,
};

const Template = (args) => <HytButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
};

export const Link = Template.bind({});
Link.args = {
  type: "link",
  label: "link",
};

export const Disabled = Template.bind({});
Disabled.args = {
  type: "disabled",
  label: "Disabled",
};

export const Rounded = Template.bind({});
Rounded.args = {
  shadow: "md",
  rounded: "lg",
  label: "Rounded",
};

export const Icon = Template.bind({});
Icon.args = {
  icon: "done",
  rounded: "max",
  label: "",
};

export const Icon_left = Template.bind({});
Icon_left.args = {
  icon: "done",
  position_icon: "left",
  label: "button with icon",
};
