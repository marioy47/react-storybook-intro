// src/components/input-field/input-field.stories.js

import React from "react";
import InputField from "./input-field";

export default {
  title: "New Items/Input Field",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const InputFieldDefault = Template.bind({});
InputFieldDefault.args = { placeholder: "Hello there" };

export const InputFieldSmall = Template.bind({});
InputFieldSmall.args = {
  ...InputFieldDefault.args,
  type: "small",
};

export const InputFieldBig = Template.bind({});
InputFieldBig.args = {
  ...InputFieldDefault.args,
  type: "big",
};
