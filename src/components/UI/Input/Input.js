import React from "react";
import "./Input.module.css";
import classes from 'Input.module.css';

const Input = props => {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.id}
        id={props.id}
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
    </div>
  );
};

export default Input;
