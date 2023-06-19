import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, theme }) => {
  return (
    <C.inputDark value={value} placeholder={placeholder} onChange={onChange} type={type} />
  );
};

export default Input;
