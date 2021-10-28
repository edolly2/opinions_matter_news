import React from "react";

const Button = (props) => {
  return (
    <button type="button" className="btn">
      {props.btnText}
    </button>
  );
};

export default Button;
