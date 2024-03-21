import React from "react";

const Button = ({ onClick, childern, label , style, className }) => (
  <button onClick={onClick}  style={style} className={className}>
   {label} {childern} 
  </button>
);

export default Button;
