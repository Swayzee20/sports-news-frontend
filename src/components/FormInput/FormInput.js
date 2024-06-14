import { React, useState } from "react";
import "./FormInput.css";

function FormInput(props) {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, onChange, ...inputProps } = props;

  function handleFocus(e) {
    setFocus(true);
  }

  return (
    <div className="form">
      <label className="form__label">{label}</label>
      <input
        className="form__input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focus={focus.toString()}
      />
      <span className="form__input_error">{errorMessage}</span>
    </div>
  );
}

export default FormInput;
