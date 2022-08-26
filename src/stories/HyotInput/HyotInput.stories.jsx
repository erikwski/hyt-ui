import React from "react";
import { HyotInput } from "./HyotInput";

export default {
  title: "Example/HyotInput",
  component: HyotInput,
};

const Template = (args) => <HyotInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default input",
  type: "text",
  on_change: () => {},
};

export const Icon = Template.bind({});
Icon.args = {
  label: "Icon with input",
  type: "text",
  on_change: () => {},
  icon: "search",
  icon_position: "left",
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "With help text",
  on_change: () => {},
  help_text: "Sample help text",
};

export const Error = Template.bind({});
Error.args = {
  label: "Error input",
  on_change: () => {},
  help_text: "Error message",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled input",
  on_change: () => {},
  disabled: true,
};
