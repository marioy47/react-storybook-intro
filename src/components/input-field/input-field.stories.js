// src/components/input-field/input-field.stories.js

import React from "react";
import InputField from "./input-field";

export default {
  title: "New Items/Input Field",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = { placeholder: "Hello World" }
