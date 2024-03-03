import React from "react";
import "./style/input-filed.css";

const InputFilled = ({name,type,placeholder,onChange,value}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </>
  );
};

export default InputFilled;
