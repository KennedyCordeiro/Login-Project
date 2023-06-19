import React from "react";
import "./styles.css"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Input = ({ label, type, placeholder, value, onChange, error }) => {
  return (
    <TextField
      id= {error ? "outlined-basic" : "outlined-error"}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      label={label}
      variant="outlined"
    />
  );
};

export default Input;
