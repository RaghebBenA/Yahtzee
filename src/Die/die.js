import React from "react";
import './die.scss'

const Die = ({ locked, val,handleClick }) => {
  return (
    <button
      className="Die"
      style={{ backgroundColor: locked ? "grey" : "black" }}
      onClick={handleClick}
    >
      {val}
    </button>
  );
};

export default Die;
