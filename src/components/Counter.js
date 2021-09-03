import React, { component } from "react";
import PropTypes from "prop-types";

import Value from "./Value";
import Control from "./Control";
import { connect, useDispatch } from "react-redux";

import * as actions from "../actions";

const Counter = (props) => {
  const dispatch = useDispatch();
  const setRandomColor = () => {
    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];

    props.handleSetColor(color);
  };

  return (
    <div>
      <Value number={props.number} />
      <Control
        onPlus={props.handleIncrement}
        onSubtract={props.handleDecrement}
        onRandomizeColor={setRandomColor}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    number: state.number,
    color: state.color,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleSetColor: (color) => {
      dispatch(actions.setColor(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(Counter);
