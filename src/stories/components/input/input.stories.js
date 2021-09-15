import React from "react";
import { Story } from "@storybook/react";

import Input from "./Input";

export default {
  title: "Modules/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const textInput = Template.bind({});
textInput.args = {
  type: "text",
};
export const password = Template.bind({});
password.args = {
  type: "password",
};
export const textarea = Template.bind({});
textarea.args = {
  type: "textarea",
};
export const search = Template.bind({});
search.args = {
  type: "search",
};
export const prefix = Template.bind({});
prefix.args = {
  type: "prefix",
};
export const prefixSuffix = Template.bind({});
prefixSuffix.args = {
  type: "prefixSuffix",
};
