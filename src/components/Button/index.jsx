import React from "react";
import LoadingButton from "@mui/material/Button";
import "./styles.css";

const Button = ({ Text, onClick, Type = "button" }) => {

  return (
    <button className="learn-more" onClick={onClick}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{Text}</span>
    </button>
  );
};

export default Button;
