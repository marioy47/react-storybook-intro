// src/components/input-field/input-field.js

import React from "react";
import PropTypes from "prop-types";
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

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["", "small", "big"]),
};

InputField.defaultProps = {
  placeholder: "Input default text",
  type: null,
};

export default InputField;
