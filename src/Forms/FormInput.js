import React, { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
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
  );
};

export default FormInput;
