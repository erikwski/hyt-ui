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
  value: "ciao",
};

export const Icon = Template.bind({});
Icon.args = {
  label: "Icon with input",
  type: "text",
  icon: "search",
  icon_position: "left",
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: "With help text",
  help_text: "Sample help text",
};

export const Error = Template.bind({});
Error.args = {
  label: "Error input",
  help_text: "Error message",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled input",
  disabled: true,
};
