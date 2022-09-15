import React from "react";
import { HytAlert } from "./HytAlert";

export default {
  title: "Example/HytAlert",
  component: HytAlert,
};

const Template = (args) => <HytAlert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  message: "Success message",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  message: "Error message",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
  message: "Warning message",
};

export const Dismissible = Template.bind({});
Dismissible.args = {
  dismissable: true,
};

export const Timeout = Template.bind({});
Timeout.args = {
  dismissable: true,
  timeout: 3000,
};
