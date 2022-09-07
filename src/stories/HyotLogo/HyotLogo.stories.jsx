import React from "react";
import { HyotLogo } from "./HyotLogo";

export default {
  title: "Example/HyotLogo",
  component: HyotLogo,
};

const Template = (args) => <HyotLogo {...args} />;
export const Logo = Template.bind({});
Logo.args = {};

export const SmallLogo = Template.bind({});
SmallLogo.args = {
  mobile: true,
};
HyotLogo.defaultProps = {};
