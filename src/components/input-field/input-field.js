// src/components/input-field/input-field.js

import React from "react";
import "./input-field.css";

const InputField = ({ placeholder, type, ...props }) => {
  const lPlacehoder = placeholder || "Text Input";
  const lType = type || "normal";
  return (
    <input
      type="text"
      className={`form-control input-field ${lType}`}
      placeholder={lPlacehoder}
      {...props}
    />
  );
};

export default InputField;
