import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

const createWarning = (funcName) => {
  return () => console.warn(funcName + " is not defined");
};

const defaultProps = {
  onPlus: createWarning("onPlus"),
  onSubtract: createWarning("onSubtract"),
  onRandomizeColor: createWarning("onRandomizeColor"),
};

export default function Control(props) {
  return (
    <div>
      <button onClick={props.onPlus}>+</button>
      <button onClick={props.onSubtract}>-</button>
      <button onClick={props.onRandomizeColor}>Randomize Color</button>
    </div>
  );
}

Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
