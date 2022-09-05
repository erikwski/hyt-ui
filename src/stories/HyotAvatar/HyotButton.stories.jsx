import React from "react";
import { HyotButton } from "./HyotButton";

export default {
  title: "Example/HyotButton",
  component: HyotButton,
};

const Template = (args) => <HyotButton {...args} />;

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
