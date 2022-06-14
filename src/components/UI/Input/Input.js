import React, { useRef, useImperativeHandle } from "react";
import classes from './Input.module.css';

// props and not useContext because props are reusable! ref binds Input (line 16) & Login (lines 111 & 121) component
const Input = React.forwardRef((props, ref) => {
  // instead of blocking the button on invalid entry, pressing submit focuses on the invalid field
  const inputRef = useRef();

const activate = () => {
    // focus is a built-in method of JS, of DOM objects
    inputRef.current.focus();
  };

  useImperativeHandle(
    // 1st argument is needed for uIH to be used
    ref,
    () => {
      return {
        // focus is externally available name (outside of the Input component)
        focus: activate
      };
    });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
