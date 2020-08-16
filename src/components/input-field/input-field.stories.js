// src/components/input-field/input-field.stories.js

import React from "react";
import InputField from "./input-field";

export default {
  title: "New Items/Input Field",
  component: InputField,
};

export const InputFieldDefault = () => <InputField />;

export const InputFieldSmall = () => <InputField type="small" />;

export const InputFieldBig = () => <InputField type="big" />;
