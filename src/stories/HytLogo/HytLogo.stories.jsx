import React from "react";
import { HytLogo } from "./HytLogo";

export default {
  title: "Example/HytLogo",
  component: HytLogo,
};

const Template = (args) => <HytLogo {...args} />;
export const Logo = Template.bind({});
Logo.args = {};

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  mobile: true,
};
HytLogo.defaultProps = {};
