import React from "react";
import "./styles.css";

const LoginButton = ({text, onclick}) => {
  return (
    <button className="buttonLogin" onclick={onclick}>
      <span>{text}</span>
    </button>
  );
};

export default LoginButton;
