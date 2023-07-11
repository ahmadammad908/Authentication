import { useState } from "react";
import React from "react";

const FormLogin = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <div>
        <div className="">
          <input
            {...inputProps}
            onChange={onChange}
            className="input"
            onFocus={() =>
              inputProps.name === "confirmPassword" && setFocused(true)
            }
            onBlur={handleFocus}
            focused={focused.toString()}
          />
          <span className="errorMessage">{errorMessage}</span>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
